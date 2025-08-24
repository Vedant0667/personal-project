"use client";

import dynamic from "next/dynamic";

const Timeline = dynamic(() => import("@/components/Timeline"), {
  ssr: false,
  loading: () => (
    <div className="w-full py-20 flex items-center justify-center">
      <div className="h-40 flex items-center text-slate-500">Loading timeline...</div>
    </div>
  ),
});

export default Timeline;