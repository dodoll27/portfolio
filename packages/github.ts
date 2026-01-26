const GITHUB_USERNAME = "dodoll27";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

type ContributionDay = {
  contributionCount: number;
  date: string;
};

type ContributionWeek = {
  contributionDays: ContributionDay[];
};

type GitHubEvent = {
  id: string;
  type: string;
  repo: { name: string };
  created_at: string;
  payload: {
    commits?: { message: string }[];
    action?: string;
    ref_type?: string;
  };
};

type GitHubActivity = {
  type: "push" | "star" | "fork" | "create" | "other";
  repo: string;
  message: string;
  date: string;
};

export async function getGitHubActivity(): Promise<{
  activities: GitHubActivity[];
  publicRepos: number;
  followers: number;
  weeks: ContributionWeek[];
  totalContributions: number;
}> {
  const [eventsRes, userRes] = await Promise.all([
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/events/public`, {
      headers: { Accept: "application/vnd.github.v3+json" },
      next: { revalidate: 300 }, // Cache for 5 minutes
    }),
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
      headers: { Accept: "application/vnd.github.v3+json" },
      next: { revalidate: 300 },
    }),
  ]);

  if (!eventsRes.ok || !userRes.ok) {
    throw new Error("Failed to fetch GitHub data");
  }

  const events: GitHubEvent[] = await eventsRes.json();
  const user = await userRes.json();

  const activities: GitHubActivity[] = events.slice(0, 4).map((event) => {
    const repoName = event.repo.name.split("/")[1] || event.repo.name;
    const date = new Date(event.created_at).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });

    switch (event.type) {
      case "PushEvent":
        return {
          type: "push",
          repo: repoName,
          message: event.payload.commits?.[0]?.message?.split("\n")[0] || "Pushed code",
          date,
        };
      case "WatchEvent":
        return {
          type: "star",
          repo: repoName,
          message: "Starred repository",
          date,
        };
      case "ForkEvent":
        return {
          type: "fork",
          repo: repoName,
          message: "Forked repository",
          date,
        };
      case "CreateEvent":
        return {
          type: "create",
          repo: repoName,
          message: `Created ${event.payload.ref_type || "repository"}`,
          date,
        };
      default:
        return {
          type: "other",
          repo: repoName,
          message: event.type.replace("Event", ""),
          date,
        };
    }
  });

  // Fetch contribution graph via GraphQL
  let weeks: ContributionWeek[] = [];
  let totalContributions = 0;

  if (GITHUB_TOKEN) {
    const graphqlRes = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query {
            user(login: "${GITHUB_USERNAME}") {
              contributionsCollection {
                contributionCalendar {
                  totalContributions
                  weeks {
                    contributionDays {
                      contributionCount
                      date
                    }
                  }
                }
              }
            }
          }
        `,
      }),
      next: { revalidate: 300 },
    });

    if (graphqlRes.ok) {
      const graphqlData = await graphqlRes.json();
      const calendar =
        graphqlData.data?.user?.contributionsCollection?.contributionCalendar;
      if (calendar) {
        totalContributions = calendar.totalContributions;
        weeks = calendar.weeks;
      }
    }
  }

  return {
    activities,
    publicRepos: user.public_repos,
    followers: user.followers,
    weeks,
    totalContributions,
  };
}
