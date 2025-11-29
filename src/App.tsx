import { ArrowRight, TrendingUp, Shield, Zap, BarChart3, Menu, X } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    {
      icon: TrendingUp,
      label: 'REAL-TIME FORECASTING',
      title: 'predict with precision.',
      description: 'AI-powered forecasting that delivers accurate cash flow projections and scenario planning in real-time.',
      gradient: 'from-pink-500 via-purple-500 to-pink-600'
    },
    {
      icon: Shield,
      label: 'COMPLIANCE & SECURITY',
      title: 'audit-ready. always.',
      description: 'Enterprise-grade compliance with automated controls, complete audit trails, and SOX/IFRS standards built-in.',
      gradient: 'from-purple-500 via-blue-500 to-purple-600'
    },
    {
      icon: Zap,
      label: 'AUTOMATED CLOSE',
      title: 'close in days. not weeks.',
      description: 'Reduce month-end close by 75% with intelligent automation and exception-based workflows.',
      gradient: 'from-emerald-500 via-teal-500 to-emerald-600'
    },
    {
      icon: BarChart3,
      label: 'EXECUTIVE INSIGHTS',
      title: 'see everything. instantly.',
      description: 'Real-time dashboards with board-ready reports and mobile access to key financial metrics.',
      gradient: 'from-cyan-500 via-blue-500 to-cyan-600'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-black/80 backdrop-blur-md border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <BarChart3 className="h-8 w-8 text-white" strokeWidth={2.5} />
              <span className="text-2xl font-bold tracking-tight">FINANCEOS</span>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              <button className="px-6 py-2.5 text-sm font-medium text-white/70 hover:text-white transition-colors uppercase tracking-wider">
                Features
              </button>
              <button className="px-6 py-2.5 text-sm font-medium text-white/70 hover:text-white transition-colors uppercase tracking-wider">
                Pricing
              </button>
              <button className="ml-4 px-6 py-2.5 bg-white text-black text-sm font-bold uppercase tracking-wider hover:bg-white/90 transition-all">
                Request Demo
              </button>
            </div>

            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-black">
            <div className="px-4 py-4 space-y-3">
              <button className="block w-full text-left py-2 text-white/70 hover:text-white uppercase tracking-wider text-sm font-medium">Features</button>
              <button className="block w-full text-left py-2 text-white/70 hover:text-white uppercase tracking-wider text-sm font-medium">Pricing</button>
              <button className="w-full px-6 py-3 bg-white text-black text-sm font-bold uppercase tracking-wider mt-4">
                Request Demo
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>

        <div className="relative z-10 max-w-6xl mx-auto text-center pt-20">
          <div className="mb-8">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-white/60">
              Trusted by 500+ Finance Leaders
            </span>
          </div>

          <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold mb-8 leading-[0.95] tracking-tight">
            crafted for the
            <span className="block mt-2">creditworthy</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
            FinanceOS is an exclusive platform that enables the trustworthy to make financial progress through AI-powered automation and real-time insights.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="group px-8 py-4 bg-white text-black font-bold uppercase tracking-wider hover:bg-white/90 transition-all text-sm">
              Request Demo
            </button>
            <button className="px-8 py-4 border border-white/30 text-white font-bold uppercase tracking-wider hover:border-white/50 transition-all text-sm">
              Learn More
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-12 border-t border-white/10">
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">75%</div>
              <div className="text-xs uppercase tracking-wider text-white/60">Faster Close</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">10hrs</div>
              <div className="text-xs uppercase tracking-wider text-white/60">Saved Weekly</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">95%</div>
              <div className="text-xs uppercase tracking-wider text-white/60">Accuracy</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">100%</div>
              <div className="text-xs uppercase tracking-wider text-white/60">Audit Ready</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-white/60 mb-6 block">
              Bit by Bit
            </span>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
              built for control
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-white/10 hover:border-white/20 transition-all duration-500"
                >
                  <div className="relative z-10 p-8 sm:p-12 h-full flex flex-col">
                    <div className="mb-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Icon className="h-6 w-6 text-white/80" strokeWidth={2} />
                        <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/60">
                          {feature.label}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight tracking-tight">
                      {feature.title}
                    </h3>

                    <p className="text-white/70 leading-relaxed mb-8 flex-grow">
                      {feature.description}
                    </p>

                    <button className="self-start flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white group-hover:gap-4 transition-all">
                      Know More
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>

                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-white/60 mb-6 block">
              The Trusted
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
              built by leaders. for leaders.
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="group relative p-10 bg-gradient-to-br from-gray-900 to-black border border-white/10 hover:border-white/20 transition-all duration-500">
              <p className="text-lg sm:text-xl mb-10 leading-relaxed text-white/90">
                "FinanceOS reduced our close cycle from 12 days to 3 days. The ROI was immediate and measurable."
              </p>
              <div>
                <div className="font-bold text-lg mb-1">Sarah Chen</div>
                <div className="text-xs uppercase tracking-wider text-white/50">CFO, TechCorp</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <div className="group relative p-10 bg-gradient-to-br from-gray-900 to-black border border-white/10 hover:border-white/20 transition-all duration-500">
              <p className="text-lg sm:text-xl mb-10 leading-relaxed text-white/90">
                "Finally, a financial platform that understands enterprise compliance requirements. Best decision we made."
              </p>
              <div>
                <div className="font-bold text-lg mb-1">Michael Roberts</div>
                <div className="text-xs uppercase tracking-wider text-white/50">VP Finance, Global Industries</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <div className="group relative p-10 bg-gradient-to-br from-gray-900 to-black border border-white/10 hover:border-white/20 transition-all duration-500">
              <p className="text-lg sm:text-xl mb-10 leading-relaxed text-white/90">
                "The forecasting accuracy is game-changing. We now have complete confidence in our financial projections."
              </p>
              <div>
                <div className="font-bold text-lg mb-1">Jennifer Martinez</div>
                <div className="text-xs uppercase tracking-wider text-white/50">CFO, Innovate Labs</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-40 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-blue-600/20"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-white/60 mb-8 block">
            Join The Exclusive
          </span>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
            ready to transform<br />your operations?
          </h2>

          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
            Join leading CFOs who are closing faster, forecasting better, and scaling with confidence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="group px-10 py-5 bg-white text-black font-bold uppercase tracking-wider hover:bg-white/90 transition-all text-sm flex items-center gap-3">
              Request Demo
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-5 border border-white/30 text-white font-bold uppercase tracking-wider hover:border-white/50 transition-all text-sm">
              Contact Sales
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/50 uppercase tracking-wider">
            <span>14-day free trial</span>
            <span>•</span>
            <span>No credit card required</span>
            <span>•</span>
            <span>Setup in minutes</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <BarChart3 className="h-7 w-7 text-white" strokeWidth={2.5} />
                <span className="text-xl font-bold tracking-tight text-white">FINANCEOS</span>
              </div>
              <p className="text-sm text-white/60 leading-relaxed">
                Enterprise finance operations platform built for modern CFOs.
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-white mb-6">Product</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">Integrations</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-white mb-6">Company</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-white mb-6">Legal</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">Compliance</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-white/50 uppercase tracking-wider">
              &copy; 2025 FinanceOS. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs text-white/50 uppercase tracking-wider">
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
