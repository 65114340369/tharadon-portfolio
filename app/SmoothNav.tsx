'use client';

export default function SmoothNav() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex gap-6">
      <a href="#about" onClick={(e) => handleClick(e, '#about')} className="text-[#3a2e1e] hover:text-[#1a1a1a] transition font-medium cursor-pointer text-base">About</a>
      <a href="#projects" onClick={(e) => handleClick(e, '#projects')} className="text-[#3a2e1e] hover:text-[#1a1a1a] transition font-medium cursor-pointer text-base">Projects</a>
      <a href="#skills" onClick={(e) => handleClick(e, '#skills')} className="text-[#3a2e1e] hover:text-[#1a1a1a] transition font-medium cursor-pointer text-base">Skills</a>
      <a href="#contact" onClick={(e) => handleClick(e, '#contact')} className="text-[#3a2e1e] hover:text-[#1a1a1a] transition font-medium cursor-pointer text-base">Contact</a>
    </div>
  );
}
