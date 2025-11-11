import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import upfundLogo from '../../UPFUND.jpg';

interface HeaderProps {
  onNavigate: (page: string) => void;
  isLoggedIn?: boolean;
  showMarketAnalysis?: boolean;
}

export default function Header({ onNavigate, isLoggedIn, showMarketAnalysis = true }: HeaderProps) {
  const [isDark, setIsDark] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldUseDark = stored ? stored === 'dark' : prefersDark;
    setIsDark(shouldUseDark);
    document.documentElement.classList.toggle('dark', shouldUseDark);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <img src={upfundLogo} alt="UpFund logo" className="h-8 w-auto rounded" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">UpFund</span>
          </div>

          <nav className="flex items-center gap-8">
            <button
              onClick={() => onNavigate('startups')}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              <span className="text-sm">📊</span>
              <span className="text-sm font-medium">Startups</span>
            </button>
            {showMarketAnalysis && (
              <button
                onClick={() => onNavigate('market-analysis')}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
              >
                <span className="text-sm">📈</span>
                <span className="text-sm font-medium">Market Analysis</span>
              </button>
            )}

            <button
              onClick={toggleTheme}
              className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {!isLoggedIn && (
              <>
                <button
                  onClick={() => onNavigate('login')}
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  Login
                </button>
                <button
                  onClick={() => onNavigate('signup')}
                  className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Started
                </button>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
