'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ProfileImage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Image
      src="/oak1.png"
      alt="Profile"
      width={400}
      height={400}
      className="object-cover drop-shadow-[0_0_40px_rgba(212,197,176,0.7)] transition-all duration-[1200ms] ease-in"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(1.2)',
      }}
    />
  );
}
