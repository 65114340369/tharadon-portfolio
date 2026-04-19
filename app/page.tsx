import Image from "next/image";
import ProfileImage from "./ProfileImage";
import SmoothNav from "./SmoothNav";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#d4c5b0]/70 backdrop-blur-xl border-b border-[#c4b39e]/50 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image
              src="/favicon.ico"
              alt="Logo"
              width={32}
              height={32}
              className="rounded-full"
            />
            <h1 className="text-xl font-bold text-[#3a2e1e]">ธาราดร หล้าบุดดา</h1>
          </div>
          <SmoothNav />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-[#1a1a1a] dark:bg-[#1a1a1a] flex flex-col justify-between px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
        <video
          src="/smoke.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ mixBlendMode: 'screen' }}
        />
        <div className="flex justify-between items-start">
          <div>
            <p className="text-gray-500 text-sm tracking-wider mb-8">Creative Presentation</p>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div className="relative text-center w-full">
            <h1 className="text-[80px] sm:text-[120px] md:text-[180px] lg:text-[280px] font-black text-[#d4c5b0] leading-tight tracking-tighter break-words" style={{lineHeight: '1.1'}}>
              PORTFOLIO
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <ProfileImage />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-end relative z-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-light text-black mb-2">ธาราดร หล้าบุดดา</h2>
            <p className="text-black text-sm">Web Developer</p>
          </div>
          <div>
            <p className="text-gray-600 text-sm">tharadonlabutda.com</p>

            
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-gray-200 dark:border-gray-800">
        <h2 className="text-3xl font-bold mb-8">เกี่ยวกับฉัน</h2>
        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          <p>
            ผมเป็น Web Developer ที่ชอบสร้างเว็บแอปที่ทั้งใช้งานได้ดีและมีประสิทธิภาพ
          </p>
          <p>
            มีความรู้ความเชี่ยวชาญด้าน Next.js, React, และเทคโนโลยีเว็บสมัยใหม่อื่นๆ
          </p>
          <p>
            ผมชอบความท้าทาย และมักจะเรียนรู้สิ่งใหม่ ๆ อยู่เสมอ เพื่อพัฒนาทักษะของตัวเองและสร้างผลงานที่ดีขึ้นเรื่อย ๆ
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-gray-200 dark:border-gray-800">
        <h2 className="text-3xl font-bold mb-8">ผลงานของฉัน</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {[
            { title: 'Application (Machine Learning)', desc: 'แอพตรวจจับท่าออกกำลังกายโดยใช้เป็นตัว AI แบบเรียลไทม์', tags: ['Python'], link: 'https://github.com/LordTuffy/Machine-learning.git' },
            { title: 'ตัวอย่างเว็บไซต์ Portfolio จำลอง', desc: 'หน้าเว็บ Portfolio จำลองขึ้นมาซึ่งจะมีหน้าขายของ', tags: ['HTML', 'CSS', 'JavaScript'], link: 'https://website3-g2yt.onrender.com/' },
            { title: 'หน้าเว็บขายสินค้าชื่อ Momiji', desc: 'หน้าร้านขายของออนไลน์ภายใต้ชื่อแบรนด์ Momiji', tags: ['React'], link: 'https://github.com/LordTuffy/MomijiSite' },
            { title: 'เกมส์ Ninja Quest', desc: 'เกมส์เดินเก็บผลไม้รับบทเป็นนินจาเต่า', tags: ['GDScript'], link: 'https://oak2546.itch.io/ninja-quest' },
            { title: 'Galaxy', desc: '3D เว็บไซต์', tags: ['Vue.js & Three.js'], link: 'https://vue3d-git-main-65114340369s-projects.vercel.app/' },
          ].map((project, i) => (
            <div key={i} className="p-6 border border-gray-300 dark:border-gray-700 rounded-lg hover:shadow-lg transition flex flex-col">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">{project.desc}</p>
              <div className="flex gap-2 flex-wrap items-center justify-between">
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded">{tag}</span>
                  ))}
                </div>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 transition">
                    {project.link.includes('github') ? 'GitHub →' : 'Visit →'}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-gray-200 dark:border-gray-800">
        <h2 className="text-3xl font-bold mb-8">ทักษะของฉัน</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold mb-4">Frontend</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• Next.js</li>
              <li>• React</li>
              <li>• TypeScript</li>
              <li>• Tailwind CSS</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Tools & Others</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• Git & GitHub</li>
              <li>• REST APIs</li>
              <li>• Responsive Design</li>
              <li>• Web Performance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-gray-200 dark:border-gray-800">
        <h2 className="text-3xl font-bold mb-8">ติดต่อฉัน</h2>
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            สนใจที่จะทำงานด้วยกันหรือมีคำถาม? ติดต่อมาได้นะ!
          </p>
          <div className="flex gap-4">
            <a href="mailto:your@email.com" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              ส่งอีเมล
            </a>
            <a href="https://github.com" className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition">
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-600 dark:text-gray-400">
        <p>© 2024 ธาราดร หล้าบุดดา. สร้างด้วย Next.js</p>
      </footer>
    </div>
  );
}
