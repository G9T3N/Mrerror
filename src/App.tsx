import React from "react";
import "./App.css";
import asset1 from "./assets/I21-489;19-443.svg";
import asset2 from "./assets/I21-491;158-1351.svg";
import asset3 from "./assets/I21-493;29-279.svg";
import asset4 from "./assets/I23-1001;23-975.svg";
import asset5 from "./assets/I29-316;29-272;29-279.svg";
import asset6 from "./assets/I29-326;29-272;158-1337.svg";
import asset7 from "./assets/I23-996;23-975.svg";
import asset8 from "./assets/I23-991;23-975.svg";
import asset9 from "./assets/23-975.svg";
import asset10 from "./assets/23-705.svg";
import asset11 from "./assets/I19-463;19-443.svg";
import asset12 from "./assets/I19-465;162-1328.svg";
import asset13 from "./assets/I19-467;158-1351.svg";
import asset14 from "./assets/33-291.svg";
import asset15 from "./assets/44-852.svg";
import asset16 from "./assets/44-855.svg";
import asset17 from "./assets/23-704.webp";
import asset18 from "./assets/4-67.webp";
import asset19 from "./assets/I6-23;4-67.webp";
import asset20 from "./assets/I9-189;4-67.webp";
import asset21 from "./assets/10-213.webp";
import logoWithText from "./assets/logo_with_text.png";
import logoIcon from "./assets/logo_icon.png";

// Types
interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  liveLink?: boolean;
  cachedLink?: boolean;
}

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

interface ContactMethodProps {
  icon: string;
  text: string;
}

// Components
const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  liveLink = true,
  cachedLink = false,
}) => (
  <div className="border border-[#abb2bf] bg-[#282c33] hover:border-[#297f29] transition-colors duration-300">
    <img src={image} className="w-full h-48 object-cover" alt={title} />
    <div className="p-4 border-t border-[#abb2bf] space-y-4">
      <h3 className="text-white text-xl lg:text-2xl font-medium">{title}</h3>
      <p className="text-[#abb2bf] text-sm lg:text-base">{description}</p>
      <div className="flex flex-wrap gap-2 lg:gap-4">
        {liveLink && (
          <button className="px-3 py-2 lg:px-4 lg:py-2 border border-[#297f29] text-white text-sm lg:text-base font-medium hover:bg-[#297f29] transition-colors">
            Live &lt;~&gt;
          </button>
        )}
        {cachedLink && (
          <button className="px-3 py-2 lg:px-4 lg:py-2 border border-[#abb2bf] text-[#abb2bf] text-sm lg:text-base font-medium hover:bg-[#abb2bf] hover:text-[#282c33] transition-colors">
            Cached &gt;
          </button>
        )}
      </div>
    </div>
  </div>
);

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => (
  <div className="border border-[#abb2bf] p-3 lg:p-4">
    <h4 className="text-white text-sm lg:text-base font-semibold mb-2">
      {title}
    </h4>
    <div className="space-y-1 text-[#abb2bf] text-xs lg:text-sm">
      {skills.map((skill, index) => (
        <div key={index}>{skill}</div>
      ))}
    </div>
  </div>
);

const ContactMethod: React.FC<ContactMethodProps> = ({ icon, text }) => (
  <div className="flex items-center gap-[5px]">
    <div className="w-6 h-6 lg:w-8 lg:h-8 relative flex-shrink-0">
      <img src={icon} className="w-full h-full object-contain" alt="" />
    </div>
    <span className="text-[#abb2bf] text-sm lg:text-base break-all">
      {text}
    </span>
  </div>
);

const DotPattern: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`grid grid-cols-5 gap-3 lg:gap-5 ${className}`}>
    {Array.from({ length: 25 }).map((_, i) => (
      <div key={i} className="w-1 h-1 bg-[#abb2bf] rounded-full" />
    ))}
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#282c33] text-white font-['Fira_Code'] overflow-x-hidden">
      {/* Background decorative elements */}
      <div className=" inset-0 pointer-events-none z-0">
        <div className="absolute w-20 h-20 lg:w-[103px] lg:h-[103px] right-4 lg:right-[77px] top-[800px] lg:top-[1622px] hidden md:block">
          <DotPattern />
        </div>
        <div className="absolute w-20 h-20 lg:w-[103px] lg:h-[103px] left-4 lg:left-[26px] bottom-[100px] lg:bottom-[159px] hidden md:block">
          <DotPattern />
        </div>
        <div className="absolute w-24 h-24 lg:w-[155px] lg:h-[155px] left-0 top-[600px] lg:top-[1453px] border border-[#abb2bf] hidden lg:block" />
        <div className="absolute w-24 h-24 lg:w-[155px] lg:h-[155px] right-4 lg:right-[68px] top-[300px] lg:top-[488px] border border-[#abb2bf] hidden lg:block" />
        <div className="absolute w-16 h-16 lg:w-[91px] lg:h-[91px] right-1 lg:right-[5px] top-0 border border-[#abb2bf] hidden lg:block" />
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-1000 h-16 lg:h-20 px-4 lg:px-[171px] pt-4 lg:pt-8 pb-2 bg-[#282c33]">
        <div className="flex justify-between items-center lg:items-end">
          <img src={logoWithText} alt="Mr.Err Logo" className="h-6 lg:h-8" />
          {/* Mobile menu button */}
          <button className="md:hidden p-2 text-[#abb2bf] hover:text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-start gap-4 lg:gap-8">
            <div className="flex items-start">
              <span className="text-[#297f29] text-sm lg:text-base font-medium">
                #
              </span>
              <span className="text-white text-sm lg:text-base font-medium">
                home
              </span>
            </div>
            <div className="flex items-start">
              <span className="text-[#297f29] text-sm lg:text-base font-normal">
                #
              </span>
              <span className="text-[#abb2bf] text-sm lg:text-base font-normal">
                works
              </span>
            </div>
            <div className="flex items-start">
              <span className="text-[#297f29] text-sm lg:text-base font-normal">
                #
              </span>
              <span className="text-[#abb2bf] text-sm lg:text-base font-normal">
                about-me
              </span>
            </div>
            <div className="flex items-start">
              <span className="text-[#297f29] text-sm lg:text-base font-normal">
                #
              </span>
              <span className="text-[#abb2bf] text-sm lg:text-base font-normal">
                contacts
              </span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[#abb2bf] text-sm lg:text-base font-semibold">
                EN
              </span>
              <div className="w-2 h-1 lg:w-2.5 lg:h-[5px] relative">
                <div className="w-1 h-1 lg:w-[5px] lg:h-[5px] absolute left-0 top-0 rotate-45 border border-[#abb2bf]" />
                <div className="w-1 h-1 lg:w-[5px] lg:h-[5px] absolute left-1 lg:left-[5px] top-0 -rotate-45 border border-[#abb2bf]" />
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Social sidebar */}
      <div className="fixed left-2 lg:left-[17px] top-16 lg:top-20 z-10 bg-[#282c33] flex flex-col items-center gap-2 hidden lg:flex">
        <img
          src={asset10}
          className="w-px h-[120px] lg:h-[191px] rotate-90"
          alt=""
        />
        <div className="flex flex-col items-center gap-2">
          <div className="w-6 h-6 lg:w-8 lg:h-8 relative">
            <img
              src={asset11}
              className="w-4 h-4 lg:w-[21px] lg:h-5 absolute left-1 lg:left-[5px] top-1 lg:top-[6px]"
              alt="GitHub"
            />
          </div>
          <div className="w-6 h-6 lg:w-8 lg:h-8 relative">
            <img
              src={asset12}
              className="w-4 h-4 lg:w-[23px] lg:h-[23px] absolute left-1 lg:left-[5px] top-1 lg:top-[4px]"
              alt="LinkedIn"
            />
          </div>
          <div className="w-6 h-6 lg:w-8 lg:h-8 relative">
            <img
              src={asset13}
              className="w-3 h-4 lg:w-3.5 lg:h-5 absolute left-1.5 lg:left-[9px] top-1 lg:top-[6px]"
              alt="Discord"
            />
          </div>
        </div>
      </div>

      {/* Main content */}
      <main className="pt-16 lg:pt-20 px-4 lg:px-[171px] space-y-12 lg:space-y-16 relative z-10">
        {/* Hero section */}
        <section className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16 pt-4 lg:pt-8">
          <div className="flex-1 space-y-6 lg:space-y-8">
            <div className="space-y-6 lg:space-y-8">
              <h1 className="text-xl sm:text-2xl lg:text-[32px] font-medium leading-tight">
                Mr.Err is a <span className="text-[#297f29]">web designer</span>{" "}
                and <span className="text-[#297f29]">front-end developer</span>
              </h1>
              <p className="text-[#abb2bf] text-sm lg:text-base max-w-[463px]">
                He crafts responsive websites where technologies meet creativity
              </p>
              <button className="px-3 py-2 lg:px-4 lg:py-2 border border-[#297f29] text-white text-sm lg:text-base font-medium hover:bg-[#297f29] transition-colors">
                Contact me!!
              </button>
            </div>
          </div>

          <div className="relative w-full lg:w-auto flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-24 h-24 lg:w-[155px] lg:h-[155px] border border-[#abb2bf] absolute left-0 top-12 lg:top-[84px] hidden lg:block" />
              <img
                src={asset21}
                className="w-full max-w-[300px] lg:max-w-[457px] h-auto"
                alt="Mr.Err portrait"
              />
              <div className="absolute bottom-2 right-2 lg:bottom-4 lg:right-4 w-16 h-16 lg:w-[84px] lg:h-[84px] hidden md:block">
                <DotPattern className="gap-2 lg:gap-[16px]" />
              </div>
              <div className="absolute bottom-0 left-2 lg:left-auto lg:right-4 p-2 bg-[#282c33] border border-[#abb2bf] flex items-center gap-2.5 max-w-[280px] lg:max-w-[402px]">
                <div className="w-3 h-3 lg:w-4 lg:h-4 bg-[#297f29] border border-[#297f29] flex-shrink-0" />
                <span className="text-[#abb2bf] text-xs lg:text-base">
                  Currently working on Portfolio
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Quote section */}
        <section className="flex justify-center py-4 lg:py-8">
          <div className="relative max-w-4xl w-full">
            <div className="p-4 lg:p-8 bg-[#282c33] border border-[#abb2bf] relative">
              <h2 className="text-white text-lg lg:text-2xl font-medium text-center lg:text-left">
                With great power comes great electricity bill
              </h2>
              <div className="absolute -top-[14px] left-[11px] px-2 py-1 bg-[#282c33] hidden lg:block">
                <img
                  src={asset15}
                  className="w-[20px] h-[16px] lg:w-[25.47px] lg:h-[20.70px]"
                  alt=""
                />
              </div>
              <div className="absolute bottom-2 right-2 lg:bottom-4 lg:right-4 p-2 lg:p-4 border border-[#abb2bf]">
                <span className="text-white text-lg lg:text-2xl font-normal">
                  - Dr. Who
                </span>
              </div>
              <div className="absolute -bottom-[14px] right-[30px] lg:right-[54px] px-2 py-1 bg-[#282c33] hidden lg:block">
                <img
                  src={asset16}
                  className="w-[20px] h-[16px] lg:w-[25.47px] lg:h-[20.70px]"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        {/* Projects section */}
        <section className="space-y-8 lg:space-y-12">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div className="flex items-center gap-4 w-full lg:w-auto">
              <div className="flex items-start">
                <span className="text-[#297f29] text-2xl lg:text-[32px] font-medium">
                  #
                </span>
                <span className="text-white text-2xl lg:text-[32px] font-medium">
                  projects
                </span>
              </div>
              <img
                src={asset9}
                className="flex-1 h-px hidden lg:block"
                alt=""
              />
            </div>
            <div className="text-white text-sm lg:text-base font-medium">
              View all ~~&gt;
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-8">
            <ProjectCard
              image={asset17}
              title="ChertNodes"
              description="Minecraft servers hosting"
              liveLink={true}
              cachedLink={true}
            />
            <ProjectCard
              image={asset18}
              title="ProtectX"
              description="Discord anti-crash bot"
              liveLink={true}
            />
            <ProjectCard
              image={asset20}
              title="Kahoot Answers Viewer"
              description="Get answers to your kahoot quiz"
              liveLink={true}
            />
          </div>
        </section>

        {/* Skills section */}
        <section className="space-y-8 lg:space-y-12">
          <div className="flex items-center gap-4">
            <div className="flex items-start">
              <span className="text-[#297f29] text-2xl lg:text-[32px] font-medium">
                #
              </span>
              <span className="text-white text-2xl lg:text-[32px] font-medium">
                skills
              </span>
            </div>
            <img src={asset8} className="flex-1 h-px hidden lg:block" alt="" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Decorative elements */}
            <div className="space-y-8 hidden lg:block">
              <div className="w-[278px] h-[282px] relative">
                <div className="absolute w-20 h-20 lg:w-[103px] lg:h-[103px] left-[31px] top-[200px] lg:top-[283px]">
                  <DotPattern />
                </div>
                <div className="absolute w-16 h-16 lg:w-[86px] lg:h-[86px] left-[155px] top-[100px] lg:top-[155px]">
                  <DotPattern className="gap-3 lg:gap-[16px]" />
                </div>
                <div className="absolute w-12 h-12 lg:w-[52px] lg:h-[52px] left-[155px] top-[52px] border border-[#abb2bf]" />
                <div className="absolute w-20 h-20 lg:w-[113px] lg:h-[113px] left-0 top-0 border border-[#abb2bf]" />
              </div>
            </div>

            {/* Skills grid */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <SkillCategory
                  title="Languages"
                  skills={["TypeScript Lua", "Python JavaScript"]}
                />
                <SkillCategory
                  title="Databases"
                  skills={["SQLite PostgreSQL", "Mongo"]}
                />
                <SkillCategory
                  title="Other"
                  skills={["HTML CSS EJS SCSS", "REST Jinja"]}
                />
                <SkillCategory
                  title="Tools"
                  skills={[
                    "VSCode Neovim Linux",
                    "Figma XFCE Arch",
                    "Git Font Awesome",
                  ]}
                />
                <div className="sm:col-span-2">
                  <SkillCategory
                    title="Frameworks"
                    skills={[
                      "React Vue",
                      "Disnake Discord.js",
                      "Flask Express.js",
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About me section */}
        <section className="space-y-8 lg:space-y-12">
          <div className="flex items-center gap-4">
            <div className="flex items-start">
              <span className="text-[#297f29] text-2xl lg:text-[32px] font-medium">
                #
              </span>
              <span className="text-white text-2xl lg:text-[32px] font-medium">
                about-me
              </span>
            </div>
            <img src={asset7} className="flex-1 h-px hidden lg:block" alt="" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-6 lg:space-y-8">
              <div className="text-[#abb2bf] text-sm lg:text-base leading-relaxed space-y-4">
                <p>Hello, i'm Mr.Err!</p>
                <p>
                  I'm a self-taught front-end developer based in Kyiv, Ukraine.
                  I can develop responsive websites from scratch and raise them
                  into modern user-friendly web experiences.
                </p>
                <p>
                  Transforming my creativity and knowledge into a websites has
                  been my passion for over a year. I have been helping various
                  clients to establish their presence online. I always strive to
                  learn about the newest technologies and frameworks.
                </p>
              </div>
              <button className="px-3 py-2 lg:px-4 lg:py-2 border border-[#297f29] text-white text-sm lg:text-base font-medium hover:bg-[#297f29] transition-colors">
                Read more -&gt;
              </button>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute w-20 h-20 lg:w-[103px] lg:h-[103px] right-0 top-[80px] lg:top-[103px] hidden lg:block">
                  <DotPattern />
                </div>
                <img
                  src={asset19}
                  className="w-full max-w-[250px] lg:max-w-[339px] h-auto"
                  alt="About Mr.Err"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contacts section */}
        <section className="space-y-8 lg:space-y-12">
          <div className="flex items-center gap-4">
            <div className="flex items-start">
              <span className="text-[#297f29] text-2xl lg:text-[32px] font-medium">
                #
              </span>
              <span className="text-white text-2xl lg:text-[32px] font-medium">
                contacts
              </span>
            </div>
            <img src={asset4} className="flex-1 h-px hidden lg:block" alt="" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-[#abb2bf] text-sm lg:text-base font-medium">
                I'm interested in freelance opportunities. However, if you have
                other request or question, don't hesitate to contact me
              </p>
            </div>

            <div className="flex justify-start lg:justify-end">
              <div className="p-3 lg:p-4 border border-[#abb2bf] space-y-4 w-full max-w-[280px] lg:max-w-[204px]">
                <h4 className="text-white text-sm lg:text-base font-semibold">
                  Message me here
                </h4>
                <div className="space-y-2">
                  <ContactMethod icon={asset5} text="!Mr.Err#3519" />
                  <ContactMethod icon={asset6} text="mrerr.eng@gmail.com" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="px-4 lg:px-[171px] pb-4 lg:pb-8 mt-12 lg:mt-16 relative z-10">
        <div className="border-t border-[#abb2bf] pt-4 lg:pt-8 space-y-6 lg:space-y-8">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-8">
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row items-start gap-4 lg:gap-6">
                <img
                  src={logoWithText}
                  alt="Mr.Err Logo"
                  className="h-6 lg:h-8"
                />
                <span className="text-[#abb2bf] text-sm lg:text-base break-all">
                  mrerr.eng@gmail.com
                </span>
              </div>
              <p className="text-white text-sm lg:text-base">
                Web designer and front-end developer
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-white text-xl lg:text-2xl font-medium">
                Media
              </h4>
              <div className="flex gap-3 lg:gap-4">
                <div className="w-6 h-6 lg:w-8 lg:h-8 relative">
                  <img
                    src={asset1}
                    className="w-4 h-4 lg:w-[21px] lg:h-5 absolute left-1 lg:left-[5px] top-1 lg:top-[6px]"
                    alt="GitHub"
                  />
                </div>
                <div className="w-6 h-6 lg:w-8 lg:h-8 relative">
                  <img
                    src={asset2}
                    className="w-3 h-4 lg:w-3.5 lg:h-5 absolute left-1.5 lg:left-[9px] top-1 lg:top-[6px]"
                    alt="Discord"
                  />
                </div>
                <div className="w-6 h-6 lg:w-8 lg:h-8 relative">
                  <img
                    src={asset3}
                    className="w-5 h-4 lg:w-[25px] lg:h-5 absolute left-0.5 lg:left-[3px] top-1 lg:top-[6px]"
                    alt="Figma"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-[#abb2bf] text-xs lg:text-base">
              © Copyright 2022. Made by Mr.Err
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
