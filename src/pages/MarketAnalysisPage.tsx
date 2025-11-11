import { TrendingUp, Bell, Settings, User, Download, Laptop, Gamepad2, Palette, Film, Leaf, Send, Home } from 'lucide-react';
import { Line } from '../components/Charts';

interface MarketAnalysisPageProps {
  onNavigate: (page: string) => void;
  isLoggedIn?: boolean;
}

const overviewTrendData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Total Capital ($B)',
      data: [12.5, 13.8, 16.2, 18.1, 20.4, 25.8],
      borderColor: 'rgb(59,130,246)',
      backgroundColor: 'rgba(59,130,246,0.25)',
      fill: true,
      tension: 0.35,
    }
  ]
};

const axisDark = {
  x: { grid: { color: 'rgba(255,255,255,0.06)' }, ticks: { color: 'rgba(255,255,255,0.7)' } },
  y: { grid: { color: 'rgba(255,255,255,0.06)' }, ticks: { color: 'rgba(255,255,255,0.7)' } },
};

export default function MarketAnalysisPage({ onNavigate, isLoggedIn }: MarketAnalysisPageProps) {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Custom Header */}
      <header className="bg-gray-800 border-b border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">UpFund</span>
            </div>

            <nav className="flex items-center gap-4">
              <button
                onClick={() => onNavigate('home')}
                className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white transition-colors"
              >
                <Home className="w-5 h-5" />
                <span className="text-sm font-medium">Home</span>
              </button>
              {!isLoggedIn && (
                <button
                  onClick={() => onNavigate('login')}
                  className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Log In
                </button>
              )}
              <button className="p-2 text-gray-400 hover:text-white transition-colors">
                <Bell className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-white transition-colors">
                <Settings className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-white transition-colors">
                <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
              </button>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Market Overview Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Market Overview</h1>
              <p className="text-gray-400">Crowdfunding market analysis and insights</p>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-gray-800 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors">
                Last 12 Months
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download Report
              </button>
            </div>
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-2 gap-6 mb-12">
            {/* Overall Funding Trends */}
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-1">Overall Funding Trends</h3>
              <p className="text-sm text-gray-400 mb-4">Total capital raised over time</p>

              {/* Filter Buttons */}
              <div className="flex gap-2 mb-6">
                <button className="px-3 py-1.5 bg-blue-600 text-white text-xs font-medium rounded-lg">
                  All
                </button>
                <button className="px-3 py-1.5 bg-gray-700 text-gray-300 text-xs font-medium rounded-lg hover:bg-gray-600">
                  Technology
                </button>
                <button className="px-3 py-1.5 bg-gray-700 text-gray-300 text-xs font-medium rounded-lg hover:bg-gray-600">
                  Gaming
                </button>
                <button className="px-3 py-1.5 bg-gray-700 text-gray-300 text-xs font-medium rounded-lg hover:bg-gray-600">
                  Design
                </button>
              </div>

              {/* Chart Area */}
              <div className="h-48">
                <Line data={overviewTrendData} options={{ responsive: true, plugins: { legend: { display: false } }, scales: axisDark }} />
              </div>
            </div>

            {/* Market KPIs */}
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-6">Market KPIs</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-3xl font-bold text-white mb-1">$25.8B</div>
                  <div className="text-sm text-green-500">+15.2% YoY</div>
                  <div className="text-xs text-gray-400 mt-1">Total Funding</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">5.2M</div>
                  <div className="text-sm text-green-500">+8.1% YoY</div>
                  <div className="text-xs text-gray-400 mt-1">Total Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">42.5%</div>
                  <div className="text-sm text-red-500">-13% YoY</div>
                  <div className="text-xs text-gray-400 mt-1">Success Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">$98.50</div>
                  <div className="text-sm text-green-500">+4.5% YoY</div>
                  <div className="text-xs text-gray-400 mt-1">Average Pledge</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sector-Specific Analytics */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Sector-Specific Analytics</h2>
          
          <div className="grid grid-cols-4 gap-6">
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Laptop className="w-5 h-5 text-white" />
                </div>
                <div className="text-white font-semibold">Technology</div>
              </div>
              <div className="text-2xl font-bold text-white mb-1">$8.2B</div>
              <div className="text-sm text-gray-400 mb-3">Total Raised</div>
              <div className="text-lg font-semibold text-green-500">65.1%</div>
              <div className="text-xs text-gray-400">Success Rate</div>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                  <Gamepad2 className="w-5 h-5 text-white" />
                </div>
                <div className="text-white font-semibold">Gaming</div>
              </div>
              <div className="text-2xl font-bold text-white mb-1">$5.5B</div>
              <div className="text-sm text-gray-400 mb-3">Total Raised</div>
              <div className="text-lg font-semibold text-green-500">38.7%</div>
              <div className="text-xs text-gray-400">Success Rate</div>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-pink-600 rounded-lg flex items-center justify-center">
                  <Palette className="w-5 h-5 text-white" />
                </div>
                <div className="text-white font-semibold">Design</div>
              </div>
              <div className="text-2xl font-bold text-white mb-1">$4.1B</div>
              <div className="text-sm text-gray-400 mb-3">Total Raised</div>
              <div className="text-lg font-semibold text-green-500">52.3%</div>
              <div className="text-xs text-gray-400">Success Rate</div>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                  <Film className="w-5 h-5 text-white" />
                </div>
                <div className="text-white font-semibold">Film & Video</div>
              </div>
              <div className="text-2xl font-bold text-white mb-1">$2.9B</div>
              <div className="text-sm text-gray-400 mb-3">Total Raised</div>
              <div className="text-lg font-semibold text-green-500">45.8%</div>
              <div className="text-xs text-gray-400">Success Rate</div>
            </div>
          </div>
        </section>

        {/* Top Performing Projects */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Top Performing Projects</h2>
          
          <div className="bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-900 border-b border-gray-700">
                    <th className="text-left py-4 px-6 text-xs font-semibold text-gray-400 uppercase tracking-wider">PROJECT</th>
                    <th className="text-left py-4 px-6 text-xs font-semibold text-gray-400 uppercase tracking-wider">CATEGORY</th>
                    <th className="text-left py-4 px-6 text-xs font-semibold text-gray-400 uppercase tracking-wider">TOTAL RAISED</th>
                    <th className="text-left py-4 px-6 text-xs font-semibold text-gray-400 uppercase tracking-wider">BACKERS</th>
                    <th className="text-left py-4 px-6 text-xs font-semibold text-gray-400 uppercase tracking-wider">FUNDING %</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Ecoflask */}
                  <tr className="border-b border-gray-700 hover:bg-gray-700/50 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                          <Leaf className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-white font-medium">Ecoflask</div>
                          <div className="text-xs text-gray-400">GreenWare</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-white">Design</td>
                    <td className="py-4 px-6 text-white font-semibold">$23M</td>
                    <td className="py-4 px-6 text-white">25,430</td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="flex-1 max-w-xs bg-gray-700 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                        </div>
                        <div className="text-sm font-semibold text-green-500">1050%</div>
                        <button className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded hover:bg-blue-700">
                          View
                        </button>
                      </div>
                    </td>
                  </tr>

                  {/* Aura Drone */}
                  <tr className="border-b border-gray-700 hover:bg-gray-700/50 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
                          <Send className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-white font-medium">Aura Drone</div>
                          <div className="text-xs text-gray-400">AeroDynamics</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-white">Technology</td>
                    <td className="py-4 px-6 text-white font-semibold">$1.8M</td>
                    <td className="py-4 px-6 text-white">15,820</td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="flex-1 max-w-xs bg-gray-700 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                        </div>
                        <div className="text-sm font-semibold text-green-500">900%</div>
                        <button className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded hover:bg-blue-700">
                          View
                        </button>
                      </div>
                    </td>
                  </tr>

                  {/* Pixel Quest Saga */}
                  <tr className="border-b border-gray-700 hover:bg-gray-700/50 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
                          <Gamepad2 className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-white font-medium">Pixel Quest Saga</div>
                          <div className="text-xs text-gray-400">IndieForge</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-white">Gaming</td>
                    <td className="py-4 px-6 text-white font-semibold">$1.5M</td>
                    <td className="py-4 px-6 text-white">52,100</td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="flex-1 max-w-xs bg-gray-700 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                        </div>
                        <div className="text-sm font-semibold text-green-500">750%</div>
                        <button className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded hover:bg-blue-700">
                          View
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

