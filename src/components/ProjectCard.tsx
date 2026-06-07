// Shared project types. The rendered project UI lives in ProjectsSection.tsx;
// this module only owns the data contract consumed by projects.ts and the
// projects section.

type Bullet = { strong?: string; text: string };
type Link = { href: string; label: string };

export type ProjectCategory =
  | "Web"
  | "Mobile"
  | "Nonprofit"
  | "Hardware"
  | "Research"
  | "Creative";

export interface ProjectProps {
  imageSrc: string; // served from /public
  imageAlt: string;
  title: string;
  summary?: string; // short version for card preview
  story: string; // full version for modal
  bullets?: Bullet[];
  links?: Link[];
  tags?: string[];
  imagePosition?: string; // e.g. "object-top", "object-bottom", "object-center"
  modalImagePosition?: string; // overrides imagePosition inside the detail modal only
  category?: ProjectCategory; // retained for data classification
  icon?: string; // retained for data classification
  featured?: boolean; // flagship work that gets the editorial row treatment
}
