'use client';
import { usePathname } from 'next/navigation';
import '../../styles/animations.css';

export default function PageTransition({ children }) {
  const pathname = usePathname();

  // Using key prop to trigger animation on route changes
  // React will unmount/remount the div when pathname changes
  return (
    <div key={pathname} className="page-transition">
      {children}
    </div>
  );
}
