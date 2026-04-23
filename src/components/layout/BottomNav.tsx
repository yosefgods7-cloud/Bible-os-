import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, Map, Target, MoreHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';

export function BottomNav() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/read', label: 'Read', icon: BookOpen },
    { path: '/roadmap', label: 'Roadmap', icon: Map },
    { path: '/habits', label: 'Habits', icon: Target },
    { path: '/more', label: 'More', icon: MoreHorizontal },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-sacred-surface-dark/95 backdrop-blur-md border-t border-sacred-surface-dark pb-[env(safe-area-inset-bottom)] md:relative md:bg-transparent md:border-none md:pb-0 z-50">
      <div className="flex items-center justify-around h-16 md:hidden">
        {navItems.map(({ path, label, icon: Icon }) => {
          const isActive = location.pathname === path || (path !== '/' && location.pathname.startsWith(path));
          
          return (
            <Link
              key={path}
              to={path}
              className="flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors"
            >
              <Icon 
                className={cn(
                  "w-5 h-5",
                  isActive ? "text-sacred-gold" : "text-sacred-text-secondary"
                )} 
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span className={cn(
                "text-[10px] font-medium transition-colors",
                isActive ? "text-sacred-gold" : "text-sacred-text-secondary"
              )}>
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
