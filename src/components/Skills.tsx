interface SkillsProps {
  frontend: string[];
  backend: string[];
  tools: string[];
  other: string[];
}

export default function Skills({ frontend, backend, tools, other }: SkillsProps) {
  const SkillCategory = ({ title, skills }: { title: string; skills: string[] }) => (
    <div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-white shadow-sm rounded-lg text-gray-700"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Skills</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <SkillCategory title="Frontend" skills={frontend} />
          <SkillCategory title="Backend" skills={backend} />
          <SkillCategory title="Tools" skills={tools} />
          <SkillCategory title="Other" skills={other} />
        </div>
      </div>
    </section>
  );
}