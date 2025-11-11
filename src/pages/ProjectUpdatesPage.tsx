import { ArrowLeft, Plus } from 'lucide-react';

interface ProjectUpdatesPageProps {
  onNavigate: (page: string) => void;
}

export default function ProjectUpdatesPage({ onNavigate }: ProjectUpdatesPageProps) {
  return (
    <div className="min-h-screen bg-[#0B1220] text-white">
      <header className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button onClick={() => onNavigate('entrepreneur-dashboard')} className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100">
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
          <div className="font-semibold">Project Updates</div>
          <button className="px-3 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-sm flex items-center gap-2">
            <Plus className="w-4 h-4" /> Post New Update
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <section className="lg:col-span-2 space-y-4">
          {[1, 2].map((i) => (
            <article key={i} className="bg-white/5 rounded-2xl border border-white/10 p-6">
              <h3 className="font-semibold mb-2">Update Title {i}</h3>
              <p className="opacity-80 text-sm">Short summary of your update. Share progress, milestones, or manufacturing status.</p>
              <div className="mt-3 text-xs opacity-60">12k views • 182 comments</div>
            </article>
          ))}

          <div className="bg-white/5 rounded-2xl border border-white/10 p-6">
            <div className="font-semibold mb-4">Q&A from Backers</div>
            {[1, 2].map((q) => (
              <div key={q} className="border-t border-white/10 py-3 first:border-t-0">
                <div className="text-sm">Sample question {q}?</div>
                <button className="mt-2 text-xs px-2 py-1 rounded bg-white/10 hover:bg-white/15">Answer</button>
              </div>
            ))}
          </div>
        </section>

        <aside className="space-y-4">
          <div className="bg-white/5 rounded-2xl border border-white/10 p-4">
            <div className="font-medium mb-2">Quick Stats</div>
            <div className="text-sm opacity-80">Unread Messages: 3</div>
            <div className="text-sm opacity-80">New Questions: 5</div>
            <div className="text-sm opacity-80">Total Backers: 1,482</div>
          </div>

          <div className="bg-white/5 rounded-2xl border border-white/10 p-4">
            <div className="font-medium mb-2">Response Templates</div>
            <ul className="text-sm opacity-80 space-y-1">
              <li>Shipping Address Confirmation</li>
              <li>Thank You Note</li>
              <li>Feature Request Response</li>
            </ul>
          </div>
        </aside>
      </main>
    </div>
  );
}
