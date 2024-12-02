import { Mail, Github, Linkedin } from 'lucide-react';

interface ContactProps {
  email: string;
  githubUrl: string;
  linkedinUrl: string;
}

export default function Contact({ email, githubUrl, linkedinUrl }: ContactProps) {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Contact</h2>
        <div className="flex flex-col items-center space-y-6">
          <a
            href={`mailto:${email}`}
            className="flex items-center space-x-2 text-gray-600 hover:text-blue-600"
          >
            <Mail className="h-5 w-5" />
            <span>{email}</span>
          </a>
          
          <div className="flex space-x-6">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}