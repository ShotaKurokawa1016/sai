interface ExperienceItem {
  title: string;
  jobType: string;
  content: string;
  company: string;
}

interface ExperienceProps {
  experiences: ExperienceItem[];
}

export default function Experience({ experiences }: ExperienceProps) {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {exp.title}
              </h3>
              <p className="text-blue-600 mb-2">{exp.company}</p>
              <p className="text-gray-600 mb-4">{exp.jobType}</p>
              <p className="text-gray-700">{exp.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}