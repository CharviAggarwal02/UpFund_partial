import { Search, Filter, DollarSign, Users, Calendar, TrendingUp, ArrowRight, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import Header from '../components/Header';
import ChatBot from '../components/ChatBot';
import Footer from '../components/Footer';

interface StartupBrowsePageProps {
  onNavigate: (page: string) => void;
  isLoggedIn: boolean;
  userRole: 'investor' | 'entrepreneur' | 'admin' | null;
}

export default function StartupBrowsePage({ onNavigate, isLoggedIn, userRole }: StartupBrowsePageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('All Industries');
  const [selectedStatus, setSelectedStatus] = useState('All Status');

  const startups = [
    {
      id: 1,
      name: 'Test Startup Inc',
      description: 'A revolutionary tech startup that will change the world',
      industry: 'Technology',
      status: 'Pending',
      fundingProgress: 68,
      fundingGoal: '$100,000',
      currentFunding: '$68,000',
      valuation: '$1.5M',
      teamSize: '5 people',
      foundedDate: '16.08.2025',
      equity: '10% equity',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header onNavigate={onNavigate} isLoggedIn={isLoggedIn} />

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-12">
          {isLoggedIn && userRole && (
            <button
              onClick={() => {
                if (userRole === 'investor') {
                  onNavigate('investor-dashboard');
                } else if (userRole === 'admin') {
                  onNavigate('admin-dashboard');
                }
              }}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to Dashboard</span>
            </button>
          )}
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Discover Startups</h1>
          <p className="text-lg text-gray-600">
            Explore innovative startups and find your next investment opportunity
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search startups..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all appearance-none bg-white"
            >
              <option>All Industries</option>
              <option>Technology</option>
              <option>Healthcare</option>
              <option>Finance</option>
              <option>Education</option>
            </select>

            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all appearance-none bg-white"
            >
              <option>All Status</option>
              <option>Pending</option>
              <option>Funded</option>
              <option>Closed</option>
            </select>
          </div>

          <button className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all flex items-center gap-2">
            <Filter className="w-5 h-5" />
            Apply Filters
          </button>
        </div>

        <div className="mb-6">
          <p className="text-gray-600">Found 1 startup</p>
        </div>

        <div className="grid gap-6">
          {startups.map((startup) => (
            <div
              key={startup.id}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold text-gray-900">{startup.name}</h3>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded-full">
                      {startup.status}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{startup.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-gray-500">Industry</span>
                  </div>
                  <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
                    {startup.industry}
                  </div>

                  <div className="mt-4">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-500">Funding Progress</span>
                      <span className="text-sm font-semibold text-blue-600">
                        {startup.fundingProgress}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-blue-400 h-3 rounded-full transition-all"
                        style={{ width: `${startup.fundingProgress}%` }}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">{startup.currentFunding} raised</span>
                      <span className="text-sm text-gray-600">{startup.fundingGoal}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Valuation</div>
                      <div className="font-semibold text-gray-900">{startup.valuation}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Team Size</div>
                      <div className="font-semibold text-gray-900">{startup.teamSize}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Founded</div>
                      <div className="font-semibold text-gray-900">{startup.foundedDate}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-violet-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Offer</div>
                      <div className="font-semibold text-gray-900">{startup.equity}</div>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onNavigate('startup-details')}
                className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2 group"
              >
                View Details
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
}
