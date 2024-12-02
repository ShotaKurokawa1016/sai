interface AboutProps {
  expertise: string;
  skills: string[];
  background: string;
}

export default function About({ expertise, skills, background }: AboutProps) {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Expertise & Interests</h3>
            <p className="text-gray-600 mb-6">{expertise}</p>
            
            <h3 className="text-xl font-semibold mb-4">Background</h3>
            <p className="text-gray-600">{background}</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Core Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}