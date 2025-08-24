import { achievements } from "@/data/Achievements";
import AchievementsList from "./AchievementsList";

// Server component that imports data and passes to client
export default function Achievements() {
  return <AchievementsList achievements={achievements} />;
}