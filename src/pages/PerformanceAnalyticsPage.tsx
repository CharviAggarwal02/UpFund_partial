import { ArrowLeft } from 'lucide-react';
import { Line, Doughnut, Bar } from '../components/Charts';

interface PerformanceAnalyticsPageProps {
  onNavigate: (page: string) => void;
}

const kpis = {
  totalFunds: 82450,
  totalInvestors: 1204,
  conversionRate: 12.5,
  averagePledge: 68.48,
};

const velocityData = {
  labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
  datasets: [
    {
      label: 'Pledges',
      data: [220, 180, 260, 320, 290],
      borderColor: 'rgb(59,130,246)',
      backgroundColor: 'rgba(59,130,246,0.25)',
      fill: true,
      tension: 0.35,
    },
  ],
};

const chartAxes = {
  x: { grid: { color: 'rgba(255,255,255,0.06)' }, ticks: { color: 'rgba(255,255,255,0.7)' } },
  y: { grid: { color: 'rgba(255,255,255,0.06)' }, ticks: { color: 'rgba(255,255,255,0.7)' } },
};

const demographicsData = {
  labels: ['18-24', '25-34', '35-44', '45-54', '55+'],
  datasets: [
    {
      data: [12, 38, 28, 16, 6],
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

const trafficSourcesData = {
  labels: ['Direct', 'Social', 'Referral', 'Email', 'Paid'],
  datasets: [
    {
      label: 'Visitors',
      data: [4200, 3600, 2300, 1800, 1200],
      backgroundColor: 'rgba(99,102,241,0.85)'
    },
  ],
};

const recentPledges = [
  { name: 'Alex Johnson', amount: 150, time: '2m ago' },
  { name: 'Lara Chen', amount: 80, time: '12m ago' },
  { name: 'Priya Patel', amount: 200, time: '25m ago' },
  { name: 'John Smith', amount: 50, time: '1h ago' },
];

export default function PerformanceAnalyticsPage({ onNavigate }: PerformanceAnalyticsPageProps) {
  return (
    <div className="min-h-screen bg-[#0B1220] text-white">
      <header className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button onClick={() => onNavigate('entrepreneur-dashboard')} className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100">
            <ArrowLeft className="w-4 h-4" /> Back to Dashboard
          </button>
          <div className="text-sm opacity-80">Last 30 Days</div>
          <button className="px-3 py-2 rounded-md bg-white/10 hover:bg-white/15 text-sm">Export Report</button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <section className="lg:col-span-3 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white/5 rounded-2xl border border-white/10 p-4">
            <div className="text-sm opacity-70">Total Funds Raised</div>
            <div className="text-2xl font-semibold mt-1">${kpis.totalFunds.toLocaleString()}</div>
          </div>
          <div className="bg-white/5 rounded-2xl border border-white/10 p-4">
            <div className="text-sm opacity-70">Total Investors</div>
            <div className="text-2xl font-semibold mt-1">{kpis.totalInvestors.toLocaleString()}</div>
          </div>
          <div className="bg-white/5 rounded-2xl border border-white/10 p-4">
            <div className="text-sm opacity-70">Conversion Rate</div>
            <div className="text-2xl font-semibold mt-1">{kpis.conversionRate}%</div>
          </div>
          <div className="bg-white/5 rounded-2xl border border-white/10 p-4">
            <div className="text-sm opacity-70">Average Pledge</div>
            <div className="text-2xl font-semibold mt-1">${kpis.averagePledge.toFixed(2)}</div>
          </div>
        </section>

        <section className="lg:col-span-2 bg-white/5 rounded-2xl border border-white/10 p-6 h-[320px]">
          <div className="text-sm opacity-70 mb-2">Funding Velocity</div>
          <Line data={velocityData} options={{ responsive: true, plugins: { legend: { display: false } }, scales: chartAxes }} />
        </section>
        <section className="bg-white/5 rounded-2xl border border-white/10 p-6 h-[320px]">
          <div className="text-sm opacity-70 mb-2">Investor Demographics</div>
          <Doughnut data={demographicsData} />
        </section>

        <section className="bg-white/5 rounded-2xl border border-white/10 p-6">
          <div className="text-sm opacity-70 mb-2">Recent Pledges</div>
          <ul className="divide-y divide-white/10">
            {recentPledges.map((p) => (
              <li key={p.name} className="py-3 flex items-center justify-between text-sm">
                <span className="opacity-90">{p.name}</span>
                <span className="opacity-80">${p.amount}</span>
                <span className="opacity-60">{p.time}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className="bg-white/5 rounded-2xl border border-white/10 p-6">
          <div className="text-sm opacity-70 mb-2">Traffic Sources</div>
          <Bar data={trafficSourcesData} options={{ responsive: true, plugins: { legend: { display: false } }, scales: chartAxes }} />
        </section>
      </main>
    </div>
  );
}
