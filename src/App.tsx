import { ArrowRight, TrendingUp, Shield, Zap, BarChart3, CheckCircle, Menu, X } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    {
      icon: TrendingUp,
      title: 'Real-Time Financial Forecasting',
      description: 'AI-powered predictive analytics that deliver accurate cash flow projections and scenario planning in real-time.',
      benefits: ['95% forecast accuracy', 'Instant what-if scenarios', 'Automated variance analysis']
    },
    {
      icon: Shield,
      title: 'Enterprise-Grade Compliance',
      description: 'Stay audit-ready with automated controls, complete audit trails, and SOX/IFRS compliance built-in.',
      benefits: ['SOX & IFRS compliant', 'Complete audit trails', 'Role-based access control']
    },
    {
      icon: Zap,
      title: 'Automated Close Process',
      description: 'Reduce month-end close from weeks to days with intelligent automation and exception-based workflows.',
      benefits: ['75% faster close cycles', 'Automated reconciliations', 'Smart exception handling']
    },
    {
      icon: BarChart3,
      title: 'Executive Dashboards',
      description: 'Customizable real-time dashboards that give you instant visibility into key financial metrics and KPIs.',
      benefits: ['Real-time KPI tracking', 'Board-ready reports', 'Mobile access anywhere']
    }
  ];

  const stats = [
    { value: '75%', label: 'Faster Close Cycles' },
    { value: '10hrs', label: 'Saved Per Week' },
    { value: '95%', label: 'Forecast Accuracy' },
    { value: '100%', label: 'Audit Ready' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <BarChart3 className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">FinanceOS</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
              <a href="#benefits" className="text-gray-600 hover:text-gray-900 transition-colors">Benefits</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
              <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Request Demo
              </button>
            </div>

            <button
              className="md:hidden text-gray-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-4 space-y-3">
              <a href="#features" className="block text-gray-600 hover:text-gray-900">Features</a>
              <a href="#benefits" className="block text-gray-600 hover:text-gray-900">Benefits</a>
              <a href="#pricing" className="block text-gray-600 hover:text-gray-900">Pricing</a>
              <button className="w-full px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Request Demo
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full mb-6">
              <span className="text-sm font-medium text-blue-700">Trusted by 500+ Finance Leaders</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Finance Operations
              <span className="block text-blue-600">Built for CFOs</span>
            </h1>

            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              Transform your finance function with AI-powered automation, real-time insights, and enterprise-grade controls. Close faster, forecast better, and stay audit-ready.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-semibold text-lg flex items-center shadow-lg hover:shadow-xl">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-50 transition-colors font-semibold text-lg border-2 border-gray-200">
                Watch Demo
              </button>
            </div>

            <p className="mt-6 text-sm text-gray-500">No credit card required • 14-day free trial • Setup in minutes</p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need to Scale Your Finance Operations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Purpose-built for modern finance teams who demand speed, accuracy, and control
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group p-8 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl hover:shadow-xl hover:border-blue-200 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="p-3 bg-blue-100 rounded-xl group-hover:bg-blue-600 transition-colors">
                        <Icon className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>

                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-gray-700">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Trusted by Finance Leaders at High-Growth Companies
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Join hundreds of CFOs who have transformed their finance operations
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <div className="p-8 bg-gray-800 rounded-xl">
              <p className="text-lg mb-6 italic leading-relaxed">
                "FinanceOS reduced our close cycle from 12 days to 3 days. The ROI was immediate and measurable."
              </p>
              <div className="flex items-center justify-center">
                <div className="text-left">
                  <div className="font-semibold">Sarah Chen</div>
                  <div className="text-sm text-gray-400">CFO, TechCorp</div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gray-800 rounded-xl">
              <p className="text-lg mb-6 italic leading-relaxed">
                "Finally, a financial platform that understands enterprise compliance requirements. Best decision we made."
              </p>
              <div className="flex items-center justify-center">
                <div className="text-left">
                  <div className="font-semibold">Michael Roberts</div>
                  <div className="text-sm text-gray-400">VP Finance, Global Industries</div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gray-800 rounded-xl sm:col-span-2 lg:col-span-1">
              <p className="text-lg mb-6 italic leading-relaxed">
                "The forecasting accuracy is game-changing. We now have complete confidence in our financial projections."
              </p>
              <div className="flex items-center justify-center">
                <div className="text-left">
                  <div className="font-semibold">Jennifer Martinez</div>
                  <div className="text-sm text-gray-400">CFO, Innovate Labs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Transform Your Finance Operations?
          </h2>
          <p className="text-xl mb-10 text-blue-100">
            Join leading CFOs who are closing faster, forecasting better, and scaling with confidence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-50 transition-all font-semibold text-lg flex items-center shadow-xl">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-transparent text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg border-2 border-white">
              Schedule Demo
            </button>
          </div>

          <p className="mt-8 text-blue-100">
            14-day free trial • No credit card required • Setup in under 10 minutes
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <BarChart3 className="h-6 w-6 text-blue-500" />
                <span className="text-lg font-bold text-white">FinanceOS</span>
              </div>
              <p className="text-sm">Enterprise finance operations platform built for modern CFOs.</p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Compliance</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2025 FinanceOS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
