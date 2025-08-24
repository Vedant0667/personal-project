import Section from "@/components/Section";
import Tag from "@/components/Tag";

type Props = {
  selectedSkills: string[];
  setSelectedSkills: (skills: string[]) => void;
};

export default function About({ selectedSkills, setSelectedSkills }: Props) {
  const skills = [
    "Nonprofit", "Operations", "Community", "Python", "Next.js",
    "React Native", "Node.js", "Expo", "PHP", "HTML", "CSS",
    "YouTube", "TikTok", "Video Editing"
  ];

  return (
    <Section id="about" title="About Me">
      <div className="space-y-8">
        <div className="text-center">
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            From creating guitar tutorials at 9 to building apps that serve thousands, 
            I&apos;m driven by the belief that technology should solve real problems and bring people together.
          </p>
        </div>

        <div className="rounded-3xl shadow-lg ring-1 ring-amber-200 p-6 sm:p-8" style={{ backgroundColor: "#FFFDF2" }}>
          <h3 className="font-display text-xl font-bold text-slate-900 mb-4">My Story</h3>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              My journey started young. At 9, I was teaching myself guitar and creating tutorials 
              on my iPad mini, editing everything in iMovie. That spark of creating content that 
              people actually wanted to watch never left me. It just evolved.
            </p>
            <p>
              Fast forward to today: I&apos;ve built apps used by my entire school, launched a nonprofit 
              that&apos;s donated 1000+ shoes to shelters, and created content that&apos;s reached 700k+ views 
              across platforms. At UPenn&apos;s M&TSI program, I learned that the best solutions come from 
              deeply understanding real problems.
            </p>
            <p>
              Whether I&apos;m cold-calling shelters to understand their needs, building bone conduction 
              prototypes, or creating troll edits that somehow get massive views, I&apos;m always asking: 
              how can I make something that actually matters to people?
            </p>
          </div>
        </div>

      </div>
    </Section>
  );
}