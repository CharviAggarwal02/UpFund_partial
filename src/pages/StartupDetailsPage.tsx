import { ArrowLeft, Calendar, DollarSign, Users, TrendingUp, MapPin, Building2 } from 'lucide-react';
import Header from '../components/Header';
import ChatBot from '../components/ChatBot';
import Footer from '../components/Footer';

interface StartupDetailsPageProps {
  onNavigate: (page: string) => void;
  isLoggedIn: boolean;
  userRole: 'investor' | 'entrepreneur' | 'admin' | null;
}

export default function StartupDetailsPage({ onNavigate, isLoggedIn, userRole }: StartupDetailsPageProps) {
  const startup = {
    name: 'TechForward Solutions',
    logo: '/WhatsApp Image 2025-10-05 at 01.10.48_70462bcf.jpg',
    tagline: 'Revolutionizing workplace productivity with AI-driven tools designed for the modern enterprise',
    founded: 'Founded 2023',
    employees: '8 employees',
    fundingGoal: 100000,
    currentFunding: 60000,
    fundingProgress: 60,
    minInvestment: 1000,
    backers: 42,
  };

  const team = [
    {
      name: 'Alex Johnson',
      role: 'CEO & Founder',
      image: null,
    },
    {
      name: 'Jane Doe',
      role: 'CTO',
      image: null,
    },
  ];

  const updates = [
    {
      id: 1,
      title: 'Secured Key Partnership!',
      description: 'We just signed a deal with a major enterprise client to pilot our platform!',
      date: '2 days ago',
    },
    {
      id: 2,
      title: 'Q2 Roadmap Update',
      description: 'Completed our mobile app development and launched our customer feedback program.',
      date: '1 week ago',
    },
  ];

  const userGrowthData = [
    { month: 'Jan', value: 10 },
    { month: 'Feb', value: 25 },
    { month: 'Mar', value: 45 },
    { month: 'Apr', value: 70 },
    { month: 'May', value: 85 },
    { month: 'Jun', value: 100 },
  ];

  const revenueData = [
    { quarter: 'Q1', value: 30 },
    { quarter: 'Q2', value: 50 },
    { quarter: 'Q3', value: 80 },
    { quarter: 'Q4 proj', value: 100 },
  ];

  const maxUserGrowth = Math.max(...userGrowthData.map((d) => d.value));
  const maxRevenue = Math.max(...revenueData.map((d) => d.value));

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onNavigate={onNavigate} isLoggedIn={isLoggedIn} />

      <main className="max-w-7xl mx-auto px-6 py-12">
        <button
          onClick={() => onNavigate('startups')}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Startups</span>
        </button>

        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2 space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-start gap-6 mb-8">
                <img
                  src={startup.logo}
                  alt={startup.name}
                  className="w-24 h-24 rounded-xl object-cover border border-gray-200"
                />
                <div className="flex-1">
                  <h1 className="text-3xl font-bold text-gray-900 mb-3">{startup.name}</h1>
                  <p className="text-gray-600 mb-4">{startup.tagline}</p>
                  <div className="flex items-center gap-6 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{startup.founded}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{startup.employees}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">About the Project</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  TechForward Solutions is on the vanguard of workplace innovation, leveraging advanced AI to streamline
                  productivity. Our flagship tools, 'SmartTask' and 'CollabSpace', revolutionize task management and team
                  collaboration, enabling organizations to save time, reduce operational costs, and amplify outcomes. With
                  cutting-edge voice technology, machine learning protocols, and seamless cloud integration, we're reshaping
                  how businesses operate globally.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our intelligent platform integrates task management, automated scheduling, and real-time collaboration
                  seamlessly. Trusted by over 500 organizations, our tools provide clear visibility into workflows, data-driven
                  insights to enhance productivity, and robust cloud infrastructure for scalability. Whether a startup or an
                  enterprise, we help teams collaborate effectively, track performance, and achieve their strategic goals with
                  precision.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Key Metrics</h2>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-700 mb-4">User Growth</h3>
                  <div className="text-2xl font-bold text-gray-900 mb-1">50k</div>
                  <div className="h-48 flex items-end justify-between gap-2">
                    {userGrowthData.map((data, index) => (
                      <div key={index} className="flex-1 flex flex-col items-center gap-2">
                        <div className="w-full bg-gray-100 rounded-t-lg relative">
                          <div
                            className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg transition-all"
                            style={{ height: `${(data.value / maxUserGrowth) * 160}px` }}
                          />
                        </div>
                        <span className="text-xs text-gray-500">{data.month}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-700 mb-4">Revenue Projection</h3>
                  <div className="text-2xl font-bold text-gray-900 mb-1">$160k</div>
                  <div className="h-48 flex items-end justify-between gap-3">
                    {revenueData.map((data, index) => (
                      <div key={index} className="flex-1 flex flex-col items-center gap-2">
                        <div className="w-full bg-gray-100 rounded-t-lg relative">
                          <div
                            className={`w-full ${
                              index === 3 ? 'bg-gradient-to-t from-violet-400 to-violet-300' : 'bg-gradient-to-t from-violet-600 to-violet-400'
                            } rounded-t-lg transition-all`}
                            style={{ height: `${(data.value / maxRevenue) * 160}px` }}
                          />
                        </div>
                        <span className="text-xs text-gray-500">{data.quarter}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Updates</h2>
              <div className="space-y-6">
                {updates.map((update) => (
                  <div key={update.id} className="flex gap-4 pb-6 border-b border-gray-200 last:border-0 last:pb-0">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2">{update.title}</h3>
                      <p className="text-gray-600 text-sm mb-2">{update.description}</p>
                      <span className="text-xs text-gray-500">{update.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
              <div className="mb-6">
                <div className="text-sm text-gray-600 mb-2">Funding Progress</div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  ${startup.currentFunding.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600 mb-4">
                  of ${startup.fundingGoal.toLocaleString()}
                </div>

                <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                  <div
                    className="bg-gradient-to-r from-blue-600 to-blue-400 h-3 rounded-full transition-all"
                    style={{ width: `${startup.fundingProgress}%` }}
                  />
                </div>
                <div className="text-sm text-gray-600">{startup.fundingProgress}% funded</div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="text-sm text-gray-600">Minimum Investment</span>
                  <span className="font-semibold text-gray-900">${startup.minInvestment}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="text-sm text-gray-600">Backers</span>
                  <span className="font-semibold text-gray-900">{startup.backers}</span>
                </div>
              </div>

              <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg mb-3">
                Invest Now
              </button>
              <button className="w-full py-4 bg-gray-100 text-gray-900 font-semibold rounded-xl hover:bg-gray-200 transition-all">
                Follow
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Team</h3>
              <div className="space-y-4">
                {team.map((member, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-violet-500 rounded-full flex items-center justify-center text-white font-semibold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{member.name}</div>
                      <div className="text-sm text-gray-600">{member.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

	  <Footer />
	  <ChatBot />
    </div>
  );
}
