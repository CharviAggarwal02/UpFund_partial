import { ArrowLeft, Save, Rocket } from 'lucide-react';

interface CreateCampaignPageProps {
  onNavigate: (page: string) => void;
}

export default function CreateCampaignPage({ onNavigate }: CreateCampaignPageProps) {
  return (
    <div className="min-h-screen bg-[#0B1220] text-white">
      <header className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <button onClick={() => onNavigate('entrepreneur-dashboard')} className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100">
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg grid place-items-center">
              <Rocket className="w-5 h-5" />
            </div>
            <span className="font-semibold">Create Your Campaign</span>
          </div>
          <button className="px-3 py-2 rounded-md bg-white/10 hover:bg-white/15 text-sm flex items-center gap-2">
            <Save className="w-4 h-4" /> Save Draft
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8 grid lg:grid-cols-3 gap-6">
        <aside className="bg-white/5 rounded-2xl border border-white/10 p-4 h-max">
          <div className="text-sm opacity-80 mb-2">Campaign Setup</div>
          <ol className="space-y-2 text-sm">
            <li className="opacity-100">• Project Basics</li>
            <li className="opacity-70">• Story</li>
            <li className="opacity-70">• Funding Goals</li>
            <li className="opacity-70">• Reward Tiers</li>
          </ol>
          <button className="mt-6 w-full py-2 bg-blue-600 rounded-lg hover:bg-blue-700">Preview Campaign</button>
        </aside>

        <section className="lg:col-span-2 space-y-6">
          <div className="bg-white/5 rounded-2xl border border-white/10 p-6">
            <div className="text-sm opacity-70 mb-4">Completion Progress</div>
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-blue-600" style={{ width: '32%' }} />
            </div>
          </div>

          <div className="bg-white/5 rounded-2xl border border-white/10 p-6 space-y-4">
            <div className="font-medium">Project Basics</div>
            <input className="w-full bg-transparent border border-white/10 rounded-lg px-3 py-2" placeholder="Campaign Title" />
            <input className="w-full bg-transparent border border-white/10 rounded-lg px-3 py-2" placeholder="Short Blurb/Tagline" />
            <select className="w-full bg-transparent border border-white/10 rounded-lg px-3 py-2">
              <option className="text-black">Technology</option>
              <option className="text-black">Design</option>
              <option className="text-black">Games</option>
            </select>
            <div className="border border-dashed border-white/20 rounded-lg p-6 text-center opacity-80">
              Click to upload or drag & drop
            </div>
          </div>

          <div className="bg-white/5 rounded-2xl border border-white/10 p-6 space-y-3">
            <div className="font-medium">The Story</div>
            <textarea className="w-full min-h-[160px] bg-transparent border border-white/10 rounded-lg px-3 py-2" placeholder="Tell your story..." />
            <div className="flex justify-end">
              <button className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700">Save & Continue</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
