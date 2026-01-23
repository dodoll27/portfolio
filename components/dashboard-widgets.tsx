"use client";

import { useEffect, useState } from "react";
import { Zap, Diamond } from "lucide-react";

const audioTracks = [
  { title: "Synthetise", artist: "THE MIDNIGHT", icon: "🎵" },
  { title: "LoFi Coding", artist: "CHILL HOP", icon: "🎧" },
  { title: "Deep House 2024", artist: "VARIOUS ARTISTS", icon: "🎶" },
  { title: "Analog Dreams", artist: "SYNTHWAVE COLLECTIVE", icon: "🌙" },
];

export function DashboardWidgets() {
  const [ytdDistance, setYtdDistance] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/strava")
      .then((res) => res.json())
      .then((data) => {
        setYtdDistance(data.ytdDistance ?? null);
      })
      .catch((err) => console.error("Failed to fetch Strava data:", err));
  }, []);
  return (
    <section id="pulse" className="px-6 md:px-12 bg-[#FAF9F6] ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-[#e5e5e5] py-16">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e5e5e5]">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#fc4c02]" />
              <span className="text-sm font-semibold text-[#1a1a1a]">
                PROOF I TOUCH GRASS
              </span>
            </div>
            <div className="w-6 h-6 bg-[#FEE2E2] rounded-full flex items-center justify-center">
              <span className="text-xs">🏃</span>
            </div>
          </div>

          <div className="mb-4">
            <p className="text-xs text-[#999] mb-1">TRAINING STATE</p>
            <div className="flex items-center gap-2">
              <div className="h-2 bg-[#fc4c02] rounded-full w-20" />
              <div className="h-2 bg-[#fac8b3] rounded-full w-8" />
            </div>
          </div>

          <div className="flex items-end gap-2">
            <span className="text-5xl font-bold text-[#fc4c02]">
              {ytdDistance}
            </span>
            <span className="text-lg text-[#fc4c02] mb-2">KM</span>
          </div>

          <div className="flex items-center justify-between mt-4 text-xs text-[#999]">
            <span>NEXT RACE</span>
            <span>10KM APR 19</span>
          </div>
        </div>

        {/* Audio Stream Widget */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e5e5e5]">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-[#1a1a1a]">
                AUDIO STREAM
              </span>
              <span className="text-xs bg-[#DCFCE7] text-[#16A34A] px-2 py-0.5 rounded-full">
                ● LISTENING NOW
              </span>
            </div>
            <Diamond className="w-4 h-4 text-[#999]" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            {audioTracks.map((track, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 bg-[#FAFAFA] rounded-xl hover:bg-[#f0f0f0] transition-colors cursor-pointer"
              >
                <div className="w-10 h-10 bg-[#E9D5FF] rounded-lg flex items-center justify-center text-lg">
                  {track.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-[#1a1a1a] truncate">
                    {track.title}
                  </p>
                  <p className="text-xs text-[#999] truncate">{track.artist}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
