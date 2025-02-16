import React, { useState, useEffect } from 'react';
import { Youtube, Twitch, Mail, Monitor, Camera, Video, Code, Sun, Moon, Github, Laptop, Palette, Film, Briefcase, ChevronRight } from 'lucide-react';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Theme Toggle */}
      <button
        onClick={() => setIsDark(!isDark)}
        className="fixed top-4 right-4 p-2 rounded-full bg-gray-200/80 dark:bg-gray-700/80 backdrop-blur-sm text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors z-50"
        aria-label="切換主題"
      >
        {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
      </button>

      {/* Hero Section */}
      <header className="relative pt-24 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 -z-10" />
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 p-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-full">
            <span className="px-4 py-1 text-sm text-gray-600 dark:text-gray-300">
              歡迎來到我的個人網站
            </span>
          </div>
          <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
            靈魂鯊
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
            創意內容創作者 • 科技愛好者 • 學生開發者
          </p>
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <SocialLink href="https://www.youtube.com/@靈魂鯊" icon={<Youtube />} label="YouTube" />
            <SocialLink href="https://www.twitch.tv/shark_9773" icon={<Twitch />} label="Twitch" />
            <SocialLink href="mailto:h97070311@gmail.com" icon={<Mail />} label="Email" />
            <SocialLink href="https://github.com/Howard20080703" icon={<Github />} label="GitHub" />
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionTitle>關於我</SectionTitle>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300">
                我是一位充滿熱情的學生創作者，專注於影片製作和軟體開發。透過結合技術與創意，我致力於創造優質的內容和解決方案。
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                目前正在探索新的技術領域，並且持續學習和成長。我相信科技能夠為世界帶來正面的改變，而我希望能夠成為這個改變的一部分。
              </p>
              <div className="pt-4">
                <InfoCard
                  icon={<Laptop className="w-5 h-5" />}
                  title="作業系統"
                  description="Windows 11 家用版"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <StatCard title="影片製作" value="6+ 年" />
              <StatCard title="程式開發" value="2+ 年" />
              <StatCard title="專案完成" value="3+" />
              <StatCard title="技術掌握" value="8+" />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <SectionTitle>專業技能</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SkillGroup
              icon={<Film className="w-8 h-8" />}
              title="影片製作"
              skills={[
                { name: "影片剪輯", level: 90 },
                { name: "後期製作", level: 85 },
                { name: "調色", level: 80 },
              ]}
            />
            <SkillGroup
              icon={<Palette className="w-8 h-8" />}
              title="設計能力"
              skills={[
                { name: "影像處理", level: 85 },
                { name: "平面設計", level: 75 },
                { name: "UI 設計", level: 70 },
              ]}
            />
            <SkillGroup
              icon={<Code className="w-8 h-8" />}
              title="技術開發"
              skills={[
                { name: "網頁開發", level: 75 },
                { name: "程式設計", level: 70 },
                { name: "問題解決", level: 80 },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle>工具與軟體</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ToolCard
              icon={<Camera className="w-8 h-8" />}
              title="Adobe Photoshop"
              description="專業的影像編輯與處理工具"
              category="設計"
            />
            <ToolCard
              icon={<Video className="w-8 h-8" />}
              title="Adobe Premiere"
              description="專業的影片剪輯與製作軟體"
              category="影片"
            />
            <ToolCard
              icon={<Monitor className="w-8 h-8" />}
              title="DaVinci Resolve"
              description="專業的影片調色與剪輯系統"
              category="影片"
            />
            <ToolCard
              icon={<Code className="w-8 h-8" />}
              title="VS Code"
              description="強大的程式碼編輯器"
              category="開發"
            />
          </div>
        </div>
      </section>

      {/* Studio Section */}
      <section className="py-20 px-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <SectionTitle>靈魂科技媒體工作室</SectionTitle>
          <div className="text-center mb-12">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              結合創意與技術，打造優質的數位內容與解決方案
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://discord.gg/r6Vgr78H5r"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                工作室 Discord
              </a>
              <a
                href="https://discord.gg/tRv3Kcw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                靈魂鯊國聖地
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard
              icon={<Film />}
              title="影片製作服務"
              features={[
                "專業影片剪輯",
                "視覺特效製作",
                "影片調色",
                "後期音效處理"
              ]}
            />
            <ServiceCard
              icon={<Briefcase />}
              title="技術服務"
              features={[
                "網站開發",
                "技術諮詢",
                "客製化解決方案",
                "系統優化"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <SectionTitle>聯絡方式</SectionTitle>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            有任何合作機會或問題都歡迎聯繫我
          </p>
          <a
            href="mailto:h97070311@gmail.com"
            className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            立即聯繫
            <ChevronRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © 2024-2025 靈魂鯊. 版權所有
          </p>
        </div>
      </footer>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
      {children}
    </h2>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all shadow-lg hover:shadow-xl"
      aria-label={label}
    >
      {icon}
    </a>
  );
}

function InfoCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex items-center space-x-3 p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg">
      <div className="text-blue-500 dark:text-blue-400">{icon}</div>
      <div>
        <h3 className="text-sm font-medium text-gray-900 dark:text-white">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
}

function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg text-center">
      <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">{value}</div>
      <div className="text-sm text-gray-600 dark:text-gray-300">{title}</div>
    </div>
  );
}

function SkillGroup({ icon, title, skills }: { icon: React.ReactNode; title: string; skills: { name: string; level: number }[] }) {
  return (
    <div className="p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all">
      <div className="text-blue-500 dark:text-blue-400 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{title}</h3>
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
              <div
                className="bg-blue-500 dark:bg-blue-400 h-2 rounded-full transition-all duration-500"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ToolCard({ icon, title, description, category }: { icon: React.ReactNode; title: string; description: string; category: string }) {
  return (
    <div className="p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all">
      <div className="text-blue-500 dark:text-blue-400 mb-4">{icon}</div>
      <div className="inline-block px-3 py-1 mb-3 text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 rounded-full">
        {category}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}

function ServiceCard({ icon, title, features }: { icon: React.ReactNode; title: string; features: string[] }) {
  return (
    <div className="p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all">
      <div className="text-blue-500 dark:text-blue-400 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{title}</h3>
      <ul className="space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-center text-gray-600 dark:text-gray-300">
            <ChevronRight className="w-4 h-4 mr-2 text-blue-500 dark:text-blue-400" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;