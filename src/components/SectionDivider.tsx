import { memo } from "react";

function SectionDivider() {
  // A subtle 1px gradient line across the content width
  return (
    <div className="relative">
      <div className="mx-auto max-w-6xl px-5">
        <div className="h-px bg-gradient-to-r from-transparent via-amber-200/70 to-transparent" />
      </div>
    </div>
  );
}

export default memo(SectionDivider);