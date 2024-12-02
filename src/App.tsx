import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const portfolioData = {
    name: "Yerrapothu Venkata Kesava Siva Sai",
    intro: "Software Engineer",
    about: {
      expertise: "Enthusiastic about cloud computing, with a strong focus on AWS and DevOps, passionate about automation, scalability, and streamlining workflows for optimized efficiency.",
      skills: ["AWS", "DevOps", "MySQL"],
      background: "Playing Cricket is a hobby, and Interested in working in an AWS and DevOps environment, focusing on leveraging cloud technologies and automation to drive operational excellence."
    },
    experiences: [
      {
        title: "E-SERVICE",
        jobType: "Software Engineer",
        content: "AWS, DevOps, MySQL",
        company: "Capgemini Technology Services India Limited (Client - Metlife)"
      },
      {
        title: "E-Commerce",
        jobType: "Software Engineer",
        content: "AWS, Java, DevOps",
        company: "Genis Logical Software Systems Pvt Ltd"
      }
    ],
    projects: [
      {
        name: "E-SERVICE - MetLife",
        description: "Worked in configuring and maintaining CI/CD pipelines with Jenkins, Docker, Git, and Apache Tomcat, implementing automated cloud deployments, and ensuring 24/7 application and server availability.",
        githubUrl: "https://github.com/ysivasai99/",
      }
    ],
    skills: {
      frontend: ["HTML", "CSS", "JavaScript"],
      backend: ["JAVA", "MySQL"],
      tools: ["Git", "Docker", "Terraform", "DevOps"],
      other: ["AWS", "CI/CD", "Test Automation", "Test Regression"]
    },
    contact: {
      email: "ysivasai99@gmail.com",
      githubUrl: "https://github.com/ysivasai99/",
      linkedinUrl: "https://linkedin.com/in/ysivasai99"
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header name={portfolioData.name} intro={portfolioData.intro} />
      <main className="pt-24">
        <About {...portfolioData.about} />
        <Experience experiences={portfolioData.experiences} />
        <Projects projects={portfolioData.projects} />
        <Skills {...portfolioData.skills} />
        <Contact {...portfolioData.contact} />
      </main>
    </div>
  );
}

export default App;