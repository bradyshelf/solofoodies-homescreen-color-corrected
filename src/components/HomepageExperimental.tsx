import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Utensils, Users, MapPin, Star, ArrowRight, CheckCircle, Search, Camera, TrendingUp, Heart, MessageSquare, Award, Shield, Clock, Zap, Globe, Plus, Minus } from 'lucide-react';
import { useState, useEffect } from 'react';
import VersionSwitcher from './VersionSwitcher';
import { testimonials, faqs, howItWorksSteps, trustFeatures, foodieFeatures, restaurantFeatures, missionValues } from '@/data/landingPageData';

const HomepageExperimental = () => {
  const [collabCount, setCollabCount] = useState(1247);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCollabCount(prev => prev + Math.floor(Math.random() * 3));
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const iconMap = {
    Search, Heart, TrendingUp, Shield, Clock, Award, MessageSquare
  };

  const stats = [
    { number: collabCount.toLocaleString(), label: "Successful Collaborations", icon: Heart },
    { number: "2,500+", label: "Active Restaurants", icon: Utensils },
    { number: "8,900+", label: "Food Creators", icon: Camera },
    { number: "150+", label: "Cities Worldwide", icon: Globe }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-black to-orange-900/20"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,111,97,0.1),transparent_50%)]"></div>
      
      {/* Header */}
      <header className="relative z-10 px-4 py-6 md:px-6 lg:px-8 border-b border-white/10">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-[#FF6F61] to-[#FDBD50] rounded-full flex items-center justify-center shadow-lg shadow-orange-500/25">
              <Utensils className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">SoloFoodies</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-gray-300 hover:text-[#FF6F61] transition-all duration-300 font-medium uppercase text-sm tracking-wider">How It Works</a>
            <a href="#features" className="text-gray-300 hover:text-[#FF6F61] transition-all duration-300 font-medium uppercase text-sm tracking-wider">Features</a>
            <a href="#faq" className="text-gray-300 hover:text-[#FF6F61] transition-all duration-300 font-medium uppercase text-sm tracking-wider">FAQ</a>
            <Button variant="outline" className="border-[#FF6F61] text-[#FF6F61] hover:bg-[#FF6F61] hover:text-white transition-all duration-300 px-6">
              Sign In
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section - Full Screen */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FF6F61]/20 to-[#FDBD50]/20 backdrop-blur-sm px-6 py-3 rounded-full border border-[#FF6F61]/30 mb-8">
            <Zap className="w-5 h-5 text-[#FF6F61]" />
            <span className="text-[#FF6F61] font-bold text-lg">Over {collabCount.toLocaleString()} successful collaborations</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">WHERE</span>
            <br />
            <span className="bg-gradient-to-r from-[#FF6F61] to-[#FDBD50] bg-clip-text text-transparent">RESTAURANTS</span>
            <br />
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">& FOODIES</span>
            <br />
            <span className="bg-gradient-to-r from-[#FDBD50] to-[#FF6F61] bg-clip-text text-transparent">CONNECT</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            The ultimate platform for brand deals. Connect food influencers with restaurants in seconds.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-gradient-to-r from-[#FF6F61] to-[#FDBD50] hover:from-[#FF6F61]/90 hover:to-[#FDBD50]/90 text-white px-10 py-6 text-xl rounded-full shadow-2xl shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300 font-bold">
              Join as a Foodie
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black px-10 py-6 text-xl rounded-full font-bold transition-all duration-300">
              Partner as a Restaurant
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section - Floating Cards */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-md border-gray-700 hover:border-[#FF6F61]/50 transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#FF6F61] to-[#FDBD50] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-orange-500/25">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-black text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400 uppercase text-sm tracking-wider font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Vertical Timeline */}
      <section id="how-it-works" className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-20 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            HOW IT WORKS
          </h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-gradient-to-b from-[#FF6F61] to-[#FDBD50]"></div>
            
            {howItWorksSteps.map((step, index) => {
              const IconComponent = iconMap[step.icon as keyof typeof iconMap];
              return (
                <div key={index} className={`relative flex items-center mb-20 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    <Card className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-md border-gray-700">
                      <CardContent className="p-8">
                        <h3 className="text-3xl font-bold text-white mb-4">{step.title}</h3>
                        <p className="text-gray-300 text-lg leading-relaxed">{step.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-r from-[#FF6F61] to-[#FDBD50] rounded-full flex items-center justify-center shadow-2xl shadow-orange-500/30 border-4 border-black z-10">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features - Split Dark/Light */}
      <section id="features" className="relative">
        <div className="grid lg:grid-cols-2 min-h-screen">
          {/* Foodies Side - Dark */}
          <div className="bg-gradient-to-br from-purple-900/30 to-black p-12 flex items-center">
            <div className="max-w-lg mx-auto">
              <div className="w-20 h-20 bg-gradient-to-r from-[#FDBD50] to-[#FF6F61] rounded-full flex items-center justify-center mb-8">
                <Camera className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-4xl font-black text-white mb-6">FOR FOOD CREATORS</h3>
              <p className="text-xl text-gray-300 mb-8">Turn your passion into partnerships</p>
              
              <div className="space-y-6">
                {foodieFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-[#FDBD50] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-white text-lg">{feature.title}</h4>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Restaurants Side - Gradient */}
          <div className="bg-gradient-to-br from-[#FF6F61]/20 to-[#FDBD50]/20 p-12 flex items-center">
            <div className="max-w-lg mx-auto">
              <div className="w-20 h-20 bg-gradient-to-r from-[#FF6F61] to-[#FDBD50] rounded-full flex items-center justify-center mb-8">
                <Utensils className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-4xl font-black text-white mb-6">FOR RESTAURANTS</h3>
              <p className="text-xl text-gray-300 mb-8">Amplify your brand authentically</p>
              
              <div className="space-y-6">
                {restaurantFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-[#FF6F61] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-white text-lg">{feature.title}</h4>
                      <p className="text-gray-300">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Features - Neon Grid */}
      <section className="py-32 px-6 bg-gradient-to-r from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-20 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            SAFE & SECURE
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {trustFeatures.map((feature, index) => {
              const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
              return (
                <div key={index} className="text-center group">
                  <div className="w-24 h-24 bg-gradient-to-r from-[#FF6F61] to-[#FDBD50] rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-orange-500/30 group-hover:shadow-orange-500/50 transition-all duration-300 group-hover:scale-110">
                    <IconComponent className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400 text-lg">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials - Carousel Style */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-20 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            COMMUNITY LOVE
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-md border-gray-700 hover:border-[#FF6F61]/50 transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#FF6F61] to-[#FDBD50] rounded-full flex items-center justify-center text-white font-black text-lg">
                      {testimonial.avatar}
                    </div>
                    <div className="ml-4">
                      <p className="font-bold text-white text-lg">{testimonial.name}</p>
                      <p className="text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic text-lg">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - Accordion Dark */}
      <section id="faq" className="py-32 px-6 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-20 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            FAQ
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-md border-gray-700">
                <CardContent className="p-0">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full p-8 text-left flex items-center justify-between hover:bg-gray-800/50 transition-all duration-300"
                  >
                    <h3 className="text-xl font-bold text-white">{faq.question}</h3>
                    {openFaq === index ? (
                      <Minus className="w-6 h-6 text-[#FF6F61] flex-shrink-0" />
                    ) : (
                      <Plus className="w-6 h-6 text-[#FF6F61] flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-8 pb-8">
                      <p className="text-gray-300 text-lg leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Full Width Gradient */}
      <section className="py-32 px-6 bg-gradient-to-r from-[#FF6F61] via-[#FDBD50] to-[#FF6F61]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
            START YOUR FIRST
            <br />
            COLLABORATION TODAY
          </h2>
          <p className="text-2xl text-white/90 mb-12 max-w-3xl mx-auto font-light">
            Join thousands already building amazing partnerships
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-white text-[#FF6F61] hover:bg-gray-100 px-12 py-6 text-xl rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 font-black">
              Join as a Foodie
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#FF6F61] px-12 py-6 text-xl rounded-full font-black transition-all duration-300">
              Partner as a Restaurant
            </Button>
          </div>
        </div>
      </section>

      {/* Footer - Minimal Dark */}
      <footer className="relative z-10 px-4 py-12 border-t border-white/10 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-[#FF6F61] to-[#FDBD50] rounded-full flex items-center justify-center">
                <Utensils className="w-7 h-7 text-white" />
              </div>
              <span className="text-3xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">SoloFoodies</span>
            </div>
            
            <div className="flex items-center justify-center gap-3 text-gray-400 mb-8">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-lg">{collabCount.toLocaleString()} collaborations and counting</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-bold text-white mb-4 uppercase tracking-wider">Platform</h4>
              <div className="space-y-3">
                <a href="#" className="block text-gray-400 hover:text-[#FF6F61] transition-colors">How It Works</a>
                <a href="#" className="block text-gray-400 hover:text-[#FF6F61] transition-colors">Pricing</a>
                <a href="#" className="block text-gray-400 hover:text-[#FF6F61] transition-colors">Success Stories</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4 uppercase tracking-wider">Company</h4>
              <div className="space-y-3">
                <a href="#" className="block text-gray-400 hover:text-[#FF6F61] transition-colors">About Us</a>
                <a href="#" className="block text-gray-400 hover:text-[#FF6F61] transition-colors">Careers</a>
                <a href="#" className="block text-gray-400 hover:text-[#FF6F61] transition-colors">Press</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4 uppercase tracking-wider">Support</h4>
              <div className="space-y-3">
                <a href="#" className="block text-gray-400 hover:text-[#FF6F61] transition-colors">Help Center</a>
                <a href="#" className="block text-gray-400 hover:text-[#FF6F61] transition-colors">Contact</a>
                <a href="#" className="block text-gray-400 hover:text-[#FF6F61] transition-colors">Community</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4 uppercase tracking-wider">Legal</h4>
              <div className="space-y-3">
                <a href="#" className="block text-gray-400 hover:text-[#FF6F61] transition-colors">Privacy Policy</a>
                <a href="#" className="block text-gray-400 hover:text-[#FF6F61] transition-colors">Terms of Service</a>
                <a href="#" className="block text-gray-400 hover:text-[#FF6F61] transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 text-center">
            <p className="text-gray-500">© 2024 SoloFoodies. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
      <VersionSwitcher />
    </div>
  );
};

export default HomepageExperimental;
