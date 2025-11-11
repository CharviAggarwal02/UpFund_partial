import { Rocket, DollarSign, Users, Target, Shield, TrendingUp, BarChart3, Zap } from 'lucide-react';
import Header from '../components/Header';
import ChatBot from '../components/ChatBot';
import Footer from '../components/Footer';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header onNavigate={onNavigate} />

      <main>
        <section className="max-w-7xl mx-auto px-6 py-20 text-center relative">
          <div className="absolute top-10 left-20 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl animate-bounce">
            📈
          </div>
          <div className="absolute top-32 right-32 w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-2xl animate-pulse">
            💡
          </div>

          <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Fund the Future
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Where innovative startups meet smart investors. Powered by AI insights
            <br />
            for smarter funding decisions.
          </p>

          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('signup')}
              className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
            >
              <Rocket className="w-5 h-5" />
              Launch Your Startup
            </button>
            <button
              onClick={() => onNavigate('startups')}
              className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
            >
              Browse Startups
              <span>→</span>
            </button>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-4 gap-6">
            <div className="bg-blue-50 rounded-2xl p-8 text-center transform hover:scale-105 transition-transform">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-sm text-gray-600 font-medium">Startups Funded</div>
            </div>

            <div className="bg-green-50 rounded-2xl p-8 text-center transform hover:scale-105 transition-transform">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">$50M+</div>
              <div className="text-sm text-gray-600 font-medium">Total Raised</div>
            </div>

            <div className="bg-orange-50 rounded-2xl p-8 text-center transform hover:scale-105 transition-transform">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">10K+</div>
              <div className="text-sm text-gray-600 font-medium">Active Investors</div>
            </div>

            <div className="bg-teal-50 rounded-2xl p-8 text-center transform hover:scale-105 transition-transform">
              <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">95%</div>
              <div className="text-sm text-gray-600 font-medium">Success Rate</div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose UpFund?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Advanced AI technology meets traditional investment wisdom to create the
              <br />
              ultimate crowdfunding experience.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Secure Platform</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Bank-level security protecting your investments and data
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">AI Insights</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Smart analytics to identify high-potential opportunities
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Real-time Analytics</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Track performance and market trends instantly
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Quick Funding</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Fast-track your funding with streamlined processes
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
}
