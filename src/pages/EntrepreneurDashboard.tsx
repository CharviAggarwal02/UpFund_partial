import { BarChart3, PieChart, FileText, Rocket, LogOut } from 'lucide-react';
import { Line, Doughnut } from '../components/Charts';

interface EntrepreneurDashboardProps {
  onNavigate: (page: string) => void;
  onLogout: () => void;
  userProfile?: { name: string; email: string } | null;
}

const fundingData = {
  labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
  datasets: [
    {
      label: 'Funding ($)',
      data: [12000, 18500, 24000, 33000, 42000],
      borderColor: 'rgb(59,130,246)',
      backgroundColor: 'rgba(59,130,246,0.25)',
      fill: true,
      tension: 0.35,
    },
  ],
};

const fundingOptions = {
  responsive: true,
  plugins: { legend: { display: false } },
  scales: {
    x: { grid: { color: 'rgba(255,255,255,0.06)' }, ticks: { color: 'rgba(255,255,255,0.7)' } },
    y: { grid: { color: 'rgba(255,255,255,0.06)' }, ticks: { color: 'rgba(255,255,255,0.7)' } },
  },
};

const pledgeDistributionData = {
  labels: ['$10', '$25', '$50', '$100', '$250+'],
  datasets: [
    {
      label: 'Pledges',
      data: [180, 240, 160, 90, 22],
      backgroundColor: [
        'rgba(59,130,246,0.9)',
        'rgba(99,102,241,0.9)',
        'rgba(20,184,166,0.9)',
        'rgba(234,179,8,0.9)',
        'rgba(244,63,94,0.9)'
      ],
      borderWidth: 0,
    },
  ],
};

export default function EntrepreneurDashboard({ onNavigate, onLogout, userProfile }: EntrepreneurDashboardProps) {
  return (
    <div className="min-h-screen bg-[#0B1220] text-white">
      <header className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Rocket className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">Founder Dashboard</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <span className="hidden md:block opacity-80">{userProfile?.name || 'Entrepreneur'}</span>
            <button onClick={onLogout} className="px-3 py-2 rounded-md bg-white/10 hover:bg-white/15 transition">
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-4 gap-6">
        <section className="lg:col-span-3 bg-white/5 rounded-2xl border border-white/10 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Funding Progress</h2>
            <button onClick={() => onNavigate('create-campaign')} className="px-3 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm">Post an update</button>
          </div>
          <div className="h-64">
            <Line data={fundingData} options={fundingOptions} />
          </div>
        </section>

        <nav className="space-y-4">
          <button onClick={() => onNavigate('create-campaign')} className="w-full flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition">
            <FileText className="w-5 h-5" />
            <div>
              <div className="font-medium">Create Your Campaign</div>
              <div className="text-sm opacity-70">Set up basics, story and goals</div>
            </div>
          </button>
          <button onClick={() => onNavigate('performance-analytics')} className="w-full flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition">
            <BarChart3 className="w-5 h-5" />
            <div>
              <div className="font-medium">Performance Analytics</div>
              <div className="text-sm opacity-70">Track velocity and sources</div>
            </div>
          </button>
          <button onClick={() => onNavigate('project-updates')} className="w-full flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition">
            <PieChart className="w-5 h-5" />
            <div>
              <div className="font-medium">Project Updates & Q&A</div>
              <div className="text-sm opacity-70">Share progress with backers</div>
            </div>
          </button>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="font-medium mb-3">Pledge Distribution</div>
            <Doughnut data={pledgeDistributionData} />
          </div>
        </nav>
      </main>
    </div>
  );
}
