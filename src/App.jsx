import './App.css'
import asset1 from './assets/I21-489;19-443.svg'
import asset2 from './assets/I21-491;158-1351.svg'
import asset3 from './assets/I21-493;29-279.svg'
import asset4 from './assets/I23-1001;23-975.svg'
import asset5 from './assets/I29-316;29-272;29-279.svg'
import asset6 from './assets/I29-326;29-272;158-1337.svg'
import asset7 from './assets/I23-996;23-975.svg'
import asset8 from './assets/I23-991;23-975.svg'
import asset9 from './assets/23-975.svg'
import asset10 from './assets/23-705.svg'
import asset11 from './assets/I19-463;19-443.svg'
import asset12 from './assets/I19-465;162-1328.svg'
import asset13 from './assets/I19-467;158-1351.svg'
import asset14 from './assets/33-291.svg'
import asset15 from './assets/44-852.svg'
import asset16 from './assets/44-855.svg'
import asset17 from './assets/23-704.webp'
import asset18 from './assets/4-67.webp'
import asset19 from './assets/I6-23;4-67.webp'
import asset20 from './assets/I9-189;4-67.webp'
import asset21 from './assets/10-213.webp'

function App() {
  return (
    <div className="min-h-screen bg-[#282c33] text-white font-['Fira_Code'] overflow-x-auto">
      {/* Background decorative elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute w-[103px] h-[103px] right-[77px] top-[1622px] hidden lg:block">
          <div className="grid grid-cols-5 gap-[20px] w-full h-full">
            {Array.from({ length: 25 }).map((_, i) => (
              <div key={i} className="w-1 h-1 bg-[#abb2bf] rounded-full" />
            ))}
          </div>
        </div>
        <div className="absolute w-[103px] h-[103px] left-[26px] bottom-[159px] hidden lg:block">
          <div className="grid grid-cols-5 gap-[20px] w-full h-full">
            {Array.from({ length: 25 }).map((_, i) => (
              <div key={i} className="w-1 h-1 bg-[#abb2bf] rounded-full" />
            ))}
          </div>
        </div>
        <div className="absolute w-[155px] h-[155px] left-0 top-[1453px] border border-[#abb2bf] hidden lg:block" />
        <div className="absolute w-[155px] h-[155px] right-[68px] top-[488px] border border-[#abb2bf] hidden lg:block" />
        <div className="absolute w-[91px] h-[91px] right-[5px] top-0 border border-[#abb2bf] hidden lg:block" />
      </div>

      {/* Header */}
      <header className="relative z-10 px-4 lg:px-[171px] pt-8 pb-2 bg-[#282c33]">
        <div className="flex justify-between items-end">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-white" />
            <div className="text-white text-base font-bold">Elias</div>
          </div>
          <nav className="hidden md:flex items-start gap-8">
            <div className="flex items-start">
              <span className="text-[#297f29] text-base font-medium">#</span>
              <span className="text-white text-base font-medium">home</span>
            </div>
            <div className="flex items-start">
              <span className="text-[#297f29] text-base font-normal">#</span>
              <span className="text-[#abb2bf] text-base font-normal">works</span>
            </div>
            <div className="flex items-start">
              <span className="text-[#297f29] text-base font-normal">#</span>
              <span className="text-[#abb2bf] text-base font-normal">about-me</span>
            </div>
            <div className="flex items-start">
              <span className="text-[#297f29] text-base font-normal">#</span>
              <span className="text-[#abb2bf] text-base font-normal">contacts</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[#abb2bf] text-base font-semibold">EN</span>
              <div className="w-2.5 h-[5px] relative">
                <div className="w-[5px] h-[5px] absolute left-0 top-0 rotate-45 border-2 border-[#abb2bf]" />
                <div className="w-[5px] h-[5px] absolute left-[5px] top-0 -rotate-45 border-2 border-[#abb2bf]" />
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Social sidebar */}
      <div className="fixed left-[17px] top-0 z-10 bg-[#282c33] flex flex-col items-center gap-2 hidden lg:flex">
        <img src={asset10} className="w-px h-[191px] rotate-90" alt="" />
        <div className="flex flex-col items-center gap-2">
          <div className="w-8 h-8 relative">
            <img src={asset11} className="w-[21px] h-5 absolute left-[5px] top-[6px]" alt="GitHub" />
          </div>
          <div className="w-8 h-8 relative">
            <img src={asset12} className="w-[23px] h-[23px] absolute left-[5px] top-[4px]" alt="LinkedIn" />
          </div>
          <div className="w-8 h-8 relative">
            <img src={asset13} className="w-3.5 h-5 absolute left-[9px] top-[6px]" alt="Discord" />
          </div>
        </div>
      </div>

      {/* Main content */}
      <main className="px-4 lg:px-[171px] space-y-16">
        {/* Hero section */}
        <section className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16 pt-8">
          <div className="flex-1 space-y-8">
            <div className="space-y-8">
              <h1 className="text-2xl lg:text-[32px] font-medium leading-tight">
                Elias is a <span className="text-[#297f29]">web designer</span> and{' '}
                <span className="text-[#297f29]">front-end developer</span>
              </h1>
              <p className="text-[#abb2bf] text-base max-w-[463px]">
                He crafts responsive websites where technologies meet creativity
              </p>
              <button className="px-4 py-2 border border-[#297f29] text-white text-base font-medium hover:bg-[#297f29] transition-colors">
                Contact me!!
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="w-[155px] h-[155px] border border-[#abb2bf] absolute left-0 top-[84px] hidden lg:block" />
            <img src={asset21} className="w-full max-w-[457px] h-auto" alt="Elias portrait" />
            <div className="absolute bottom-4 right-4 w-[84px] h-[84px] hidden lg:block">
              <div className="grid grid-cols-5 gap-[16px] w-full h-full">
                {Array.from({ length: 25 }).map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-[#abb2bf] rounded-full" />
                ))}
              </div>
            </div>
            <div className="absolute bottom-0 left-4 lg:left-auto lg:right-4 p-2 bg-[#282c33] border border-[#abb2bf] flex items-center gap-2.5 max-w-[402px]">
              <div className="w-4 h-4 bg-[#297f29] border border-[#297f29]" />
              <span className="text-[#abb2bf] text-base">Currently working on Portfolio</span>
            </div>
          </div>
        </section>

        {/* Quote section */}
        <section className="flex justify-center py-8">
          <div className="relative max-w-4xl">
            <div className="p-8 bg-[#282c33] border border-[#abb2bf] relative">
              <h2 className="text-white text-xl lg:text-2xl font-medium">
                With great power comes great electricity bill
              </h2>
              <div className="absolute -top-[14px] left-[11px] px-2 py-1 bg-[#282c33]">
                <img src={asset15} className="w-[25.47px] h-[20.70px]" alt="" />
              </div>
              <div className="absolute bottom-4 right-4 p-4 border border-[#abb2bf]">
                <span className="text-white text-xl lg:text-2xl font-normal">- Dr. Who</span>
              </div>
              <div className="absolute -bottom-[14px] right-[54px] px-2 py-1 bg-[#282c33]">
                <img src={asset16} className="w-[25.47px] h-[20.70px]" alt="" />
              </div>
            </div>
          </div>
        </section>

        {/* Projects section */}
        <section className="space-y-12">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-start">
                <span className="text-[#297f29] text-[32px] font-medium">#</span>
                <span className="text-white text-[32px] font-medium">projects</span>
              </div>
              <img src={asset9} className="flex-1 h-px hidden lg:block" alt="" />
            </div>
            <div className="text-white text-base font-medium">View all ~~></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* ChertNodes project */}
            <div className="border border-[#abb2bf]">
              <img src={asset17} className="w-full h-48 object-cover" alt="ChertNodes" />
              <div className="p-4 border-t border-[#abb2bf] space-y-4">
                <h3 className="text-white text-2xl font-medium">ChertNodes</h3>
                <p className="text-[#abb2bf] text-base">Minecraft servers hosting</p>
                <div className="flex gap-4">
                  <button className="px-4 py-2 border border-[#297f29] text-white text-base font-medium hover:bg-[#297f29] transition-colors">
                    Live &lt;~&gt;
                  </button>
                  <button className="px-4 py-2 border border-[#abb2bf] text-[#abb2bf] text-base font-medium hover:bg-[#abb2bf] hover:text-[#282c33] transition-colors">
                    Cached &gt;
                  </button>
                </div>
              </div>
            </div>

            {/* ProtectX project */}
            <div className="border border-[#abb2bf]">
              <img src={asset18} className="w-full h-48 object-cover" alt="ProtectX" />
              <div className="p-4 border-t border-[#abb2bf] space-y-4">
                <h3 className="text-white text-2xl font-medium">ProtectX</h3>
                <p className="text-[#abb2bf] text-base">Discord anti-crash bot</p>
                <div className="flex gap-4">
                  <button className="px-4 py-2 border border-[#297f29] text-white text-base font-medium hover:bg-[#297f29] transition-colors">
                    Live &lt;~&gt;
                  </button>
                </div>
              </div>
            </div>

            {/* Kahoot project */}
            <div className="border border-[#abb2bf]">
              <img src={asset20} className="w-full h-48 object-cover" alt="Kahoot Answers Viewer" />
              <div className="p-4 border-t border-[#abb2bf] space-y-4">
                <h3 className="text-white text-2xl font-medium">Kahoot Answers Viewer</h3>
                <p className="text-[#abb2bf] text-base">Get answers to your kahoot quiz</p>
                <div className="flex gap-4">
                  <button className="px-4 py-2 border border-[#297f29] text-white text-base font-medium hover:bg-[#297f29] transition-colors">
                    Live &lt;~&gt;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills section */}
        <section className="space-y-12">
          <div className="flex items-center gap-4">
            <div className="flex items-start">
              <span className="text-[#297f29] text-[32px] font-medium">#</span>
              <span className="text-white text-[32px] font-medium">skills</span>
            </div>
            <img src={asset8} className="flex-1 h-px hidden lg:block" alt="" />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-8">
              <div className="w-[278px] h-[282px] relative hidden lg:block">
                <div className="absolute w-[103px] h-[103px] left-[31px] top-[283px]">
                  <div className="grid grid-cols-5 gap-[20px] w-full h-full">
                    {Array.from({ length: 25 }).map((_, i) => (
                      <div key={i} className="w-1 h-1 bg-[#abb2bf] rounded-full" />
                    ))}
                  </div>
                </div>
                <div className="absolute w-[86px] h-[86px] left-[155px] top-[155px]">
                  <div className="grid grid-cols-5 gap-[16px] w-full h-full">
                    {Array.from({ length: 25 }).map((_, i) => (
                      <div key={i} className="w-1 h-1 bg-[#abb2bf] rounded-full" />
                    ))}
                  </div>
                </div>
                <div className="absolute w-[52px] h-[52px] left-[155px] top-[52px] border border-[#abb2bf]" />
                <div className="absolute w-[113px] h-[113px] left-0 top-0 border border-[#abb2bf]" />
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-[#abb2bf] p-4">
                  <h4 className="text-white text-base font-semibold mb-2">Languages</h4>
                  <div className="space-y-1 text-[#abb2bf] text-sm">
                    <div>TypeScript Lua</div>
                    <div>Python JavaScript</div>
                  </div>
                </div>
                
                <div className="border border-[#abb2bf] p-4">
                  <h4 className="text-white text-base font-semibold mb-2">Databases</h4>
                  <div className="space-y-1 text-[#abb2bf] text-sm">
                    <div>SQLite PostgreSQL</div>
                    <div>Mongo</div>
                  </div>
                </div>
                
                <div className="border border-[#abb2bf] p-4">
                  <h4 className="text-white text-base font-semibold mb-2">Other</h4>
                  <div className="space-y-1 text-[#abb2bf] text-sm">
                    <div>HTML CSS EJS SCSS</div>
                    <div>REST Jinja</div>
                  </div>
                </div>
                
                <div className="border border-[#abb2bf] p-4">
                  <h4 className="text-white text-base font-semibold mb-2">Tools</h4>
                  <div className="space-y-1 text-[#abb2bf] text-sm">
                    <div>VSCode Neovim Linux</div>
                    <div>Figma XFCE Arch</div>
                    <div>Git Font Awesome</div>
                  </div>
                </div>
                
                <div className="border border-[#abb2bf] p-4 md:col-span-2">
                  <h4 className="text-white text-base font-semibold mb-2">Frameworks</h4>
                  <div className="space-y-1 text-[#abb2bf] text-sm">
                    <div>React Vue</div>
                    <div>Disnake Discord.js</div>
                    <div>Flask Express.js</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About me section */}
        <section className="space-y-12">
          <div className="flex items-center gap-4">
            <div className="flex items-start">
              <span className="text-[#297f29] text-[32px] font-medium">#</span>
              <span className="text-white text-[32px] font-medium">about-me</span>
            </div>
            <img src={asset7} className="flex-1 h-px hidden lg:block" alt="" />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-8">
              <div className="text-[#abb2bf] text-base leading-relaxed space-y-4">
                <p>Hello, i'm Elias!</p>
                <p>
                  I'm a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.
                </p>
                <p>
                  Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.
                </p>
              </div>
              <button className="px-4 py-2 border border-[#297f29] text-white text-base font-medium hover:bg-[#297f29] transition-colors">
                Read more -&gt;
              </button>
            </div>
            
            <div className="relative">
              <div className="absolute w-[103px] h-[103px] right-0 top-[103px] hidden lg:block">
                <div className="grid grid-cols-5 gap-[20px] w-full h-full">
                  {Array.from({ length: 25 }).map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-[#abb2bf] rounded-full" />
                  ))}
                </div>
              </div>
              <img src={asset19} className="w-full max-w-[339px] h-auto" alt="About Elias" />
            </div>
          </div>
        </section>

        {/* Contacts section */}
        <section className="space-y-12">
          <div className="flex items-center gap-4">
            <div className="flex items-start">
              <span className="text-[#297f29] text-[32px] font-medium">#</span>
              <span className="text-white text-[32px] font-medium">contacts</span>
            </div>
            <img src={asset4} className="flex-1 h-px hidden lg:block" alt="" />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-[#abb2bf] text-base font-medium max-w-[505px]">
                I'm interested in freelance opportunities. However, if you have other request or question, don't hesitate to contact me
              </p>
            </div>
            
            <div className="flex justify-end">
              <div className="p-4 border border-[#abb2bf] space-y-4 max-w-[204px]">
                <h4 className="text-white text-base font-semibold">Message me here</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-[5px]">
                    <div className="w-8 h-8 relative">
                      <img src={asset5} className="w-[25px] h-5 absolute left-[3px] top-[6px]" alt="Discord" />
                    </div>
                    <span className="text-[#abb2bf] text-base">!Elias#3519</span>
                  </div>
                  <div className="flex items-center gap-[5px]">
                    <div className="w-8 h-8 relative">
                      <img src={asset6} className="w-[23px] h-[17px] absolute left-[5px] top-[7px]" alt="Email" />
                    </div>
                    <span className="text-[#abb2bf] text-base">elias@elias.me</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="px-4 lg:px-[171px] pb-8 mt-16">
        <div className="border-t border-[#abb2bf] pt-8 space-y-8">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
            <div className="space-y-4">
              <div className="flex flex-col lg:flex-row items-start gap-6">
                <div className="flex items-center gap-[9px]">
                  <div className="w-4 h-4 bg-white" />
                  <span className="text-white text-base font-medium">Elias</span>
                </div>
                <span className="text-[#abb2bf] text-base">elias@elias-dev.ml</span>
              </div>
              <p className="text-white text-base">Web designer and front-end developer</p>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-white text-2xl font-medium">Media</h4>
              <div className="flex gap-4">
                <div className="w-8 h-8 relative">
                  <img src={asset1} className="w-[21px] h-5 absolute left-[5px] top-[6px]" alt="GitHub" />
                </div>
                <div className="w-8 h-8 relative">
                  <img src={asset2} className="w-3.5 h-5 absolute left-[9px] top-[6px]" alt="Discord" />
                </div>
                <div className="w-8 h-8 relative">
                  <img src={asset3} className="w-[25px] h-5 absolute left-[3px] top-[6px]" alt="Figma" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-[#abb2bf] text-base">© Copyright 2022. Made by Elias</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

