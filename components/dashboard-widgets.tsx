"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Zap, GitCommit } from "lucide-react";

type ContributionDay = {
  contributionCount: number;
  date: string;
};

type ContributionWeek = {
  contributionDays: ContributionDay[];
};

type GitHubData = {
  publicRepos: number;
  weeks: ContributionWeek[];
  totalContributions: number;
};

function getContributionColor(count: number): string {
  if (count === 0) return "bg-[#F3F4F6]";
  if (count <= 2) return "bg-[#E9D5FF]";
  if (count <= 5) return "bg-[#C4B5FD]";
  if (count <= 8) return "bg-[#A78BFA]";
  return "bg-[#7C3AED]";
}

export function DashboardWidgets() {
  const [ytdDistance, setYtdDistance] = useState<number | null>(null);
  const [githubData, setGithubData] = useState<GitHubData | null>(null);
  const t = useTranslations("widgets");

  useEffect(() => {
    fetch("/api/strava")
      .then((res) => res.json())
      .then((data) => {
        setYtdDistance(data.ytdDistance ?? null);
      })
      .catch((err) => console.error("Failed to fetch Strava data:", err));

    fetch("/api/github")
      .then((res) => res.json())
      .then((data) => {
        setGithubData(data);
      })
      .catch((err) => console.error("Failed to fetch GitHub data:", err));
  }, []);
  return (
    <section id="pulse" className="px-6 md:px-12 bg-[#FAF9F6] ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-[#e5e5e5] py-16">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e5e5e5]">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#fc4c02]" />
              <span className="text-sm font-semibold text-[#1a1a1a]">
                {t("strava.title")}
              </span>
            </div>
            <div className="w-6 h-6 bg-[#FEE2E2] rounded-full flex items-center justify-center">
              <span className="text-xs">🏃</span>
            </div>
          </div>

          <div className="mb-4">
            <p className="text-xs text-[#999] mb-1">{t("strava.trainingState")}</p>
            <div className="flex items-center gap-2">
              <div className="h-2 bg-[#fc4c02] rounded-full w-20" />
              <div className="h-2 bg-[#fac8b3] rounded-full w-8" />
            </div>
          </div>

          <div className="flex items-end gap-2">
            <span className="text-5xl font-bold text-[#fc4c02]">
              {ytdDistance}
            </span>
            <span className="text-lg text-[#fc4c02] mb-2">{t("strava.km")}</span>
          </div>

          <div className="flex items-center justify-between mt-4 text-xs text-[#999]">
            <span>{t("strava.nextRace")}</span>
            <span>{t("strava.raceDetails")}</span>
          </div>
        </div>

        {/* GitHub Activity Widget */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e5e5e5]">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <GitCommit className="w-4 h-4 text-[#7C3AED]" />
              <span className="text-sm font-semibold text-[#1a1a1a]">
                {t("github.title")}
              </span>
            </div>
            {githubData && (
              <span className="text-xs bg-[#F3F4F6] text-[#6B7280] px-2 py-0.5 rounded-full">
                {githubData.publicRepos} {t("github.repos")}
              </span>
            )}
          </div>

          {githubData && (
            <>
              <div className="mb-4">
                <p className="text-xs text-[#999] mb-1">{t("github.thisYear")}</p>
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-bold text-[#7C3AED]">
                    {githubData.totalContributions}
                  </span>
                  <span className="text-sm text-[#7C3AED] mb-1">
                    {t("github.contributions")}
                  </span>
                </div>
              </div>

              <div className="flex gap-[3px] overflow-hidden">
                {/* Show last 20 weeks as columns - each week starts on Sunday */}
                {githubData.weeks.slice(-20).map((week, weekIndex) => (
                  <div key={weekIndex} className="flex flex-col gap-[3px]">
                    {week.contributionDays.map((day, dayIndex) => (
                      <div
                        key={dayIndex}
                        className={`w-[10px] h-[10px] rounded-sm ${getContributionColor(
                          day.contributionCount
                        )}`}
                        title={`${day.date}: ${day.contributionCount} contributions`}
                      />
                    ))}
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-end gap-1 mt-3 text-xs text-[#999]">
                <span>{t("github.less")}</span>
                <div className="w-[10px] h-[10px] rounded-sm bg-[#F3F4F6]" />
                <div className="w-[10px] h-[10px] rounded-sm bg-[#E9D5FF]" />
                <div className="w-[10px] h-[10px] rounded-sm bg-[#C4B5FD]" />
                <div className="w-[10px] h-[10px] rounded-sm bg-[#A78BFA]" />
                <div className="w-[10px] h-[10px] rounded-sm bg-[#7C3AED]" />
                <span>{t("github.more")}</span>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
