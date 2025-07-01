
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Utensils, Users, MapPin, Star, ArrowRight, CheckCircle, Search, Camera, TrendingUp, Heart, MessageSquare, Award, Plus, Minus, Shield, Clock, Zap, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';

const HomepageEnhanced = () => {
  const [collabCount, setCollabCount] = useState(1247);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Simulate live counter updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCollabCount(prev => prev + Math.floor(Math.random() * 3));
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      quote: "SoloFoodies helped us connect with amazing local creators. Our engagement doubled!",
      name: "Maria Santos",
      role: "Restaurant Manager",
      avatar: "MS"
    },
    {
      quote: "Finally, a platform that makes collaboration simple and rewarding for creators.",
      name: "@foodie_explorer",
      role: "Food Influencer",
      avatar: "FE"
    },
    {
      quote: "The partnerships we've built through SoloFoodies have been game-changing.",
      name: "Chef David Kim",
      role: "Restaurant Owner",
      avatar: "DK"
    },
    {
      quote: "Love how easy it is to find authentic restaurants that value content creators.",
      name: "@tastebud_travels",
      role: "Content Creator",
      avatar: "TT"
    }
  ];

  const faqs = [
    {
      question: "How does SoloFoodies work?",
      answer: "SoloFoodies connects restaurants with food influencers through our platform. Restaurants create collaboration opportunities, and foodies can browse and apply for partnerships that match their style and audience."
    },
    {
      question: "Is SoloFoodies free to use?",
      answer: "For food creators, SoloFoodies is completely free. Restaurants have access to basic features for free, with premium subscription options for enhanced visibility and advanced collaboration tools."
    },
    {
      question: "What types of collaborations are available?",
      answer: "Collaborations range from complimentary meals for content creation, sponsored posts, event partnerships, menu tastings, grand opening promotions, and long-term brand ambassador roles."
    },
    {
      question: "How do I know if a collaboration is legitimate?",
      answer: "All restaurants on our platform are verified through our review process. We also provide collaboration agreements and dispute resolution to ensure both parties are protected."
    },
    {
      question: "Can I negotiate collaboration terms?",
      answer: "Absolutely! Our platform includes messaging tools that allow restaurants and creators to discuss and customize collaboration details to work for both parties."
    },
    {
      question: "How quickly can I start collaborating?",
      answer: "Once your profile is complete, you can start browsing and applying for collaborations immediately. Most collaboration requests receive responses within 24-48 hours."
    }
  ];

  const stats = [
    { number: collabCount.toLocaleString(), label: "Successful Collaborations", icon: Heart },
    { number: "2,500+", label: "Active Restaurants", icon: Utensils },
    { number: "8,900+", label: "Food Creators", icon: Camera },
    { number: "150+", label: "Cities Worldwide", icon: Globe }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="px-4 py-6 md:px-6 lg:px-8 border-b border-gray-100">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#FF6F61] rounded-lg flex items-center justify-center">
              <Utensils className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">SoloFoodies</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#how-it-works" className="text-gray-600 hover:text-[#FF6F61] transition-colors">How It Works</a>
            <a href="#features" className="text-gray-600 hover:text-[#FF6F61] transition-colors">Features</a>
            <a href="#faq" className="text-gray-600 hover:text-[#FF6F61] transition-colors">FAQ</a>
            <Button variant="outline" className="border-[#FF6F61] text-[#FF6F61] hover:bg-[#FF6F61]/10">
              Sign In
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-4 py-16 md:px-6 lg:px-8 bg-gradient-to-br from-[#FF6F61]/5 to-[#FDBD50]/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-[#FDBD50]/10 px-4 py-2 rounded-full text-[#FF6F61] font-medium mb-6">
              <Zap className="w-4 h-4" />
              <span>Over {collabCount.toLocaleString()} successful collaborations</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Where Restaurants &
              <span className="text-[#FF6F61]"> Foodies Connect</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              SoloFoodies makes brand deals easy by connecting food influencers with restaurants — all in one simple platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#FF6F61] hover:bg-[#FF6F61]/90 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
                Join as a Foodie
              </Button>
              <Button variant="outline" className="border-[#FDBD50] text-[#FF6F61] hover:bg-[#FDBD50]/10 px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
                Partner as a Restaurant
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Live Stats Counter */}
      <section className="px-4 py-12 md:px-6 lg:px-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-[#FF6F61]/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-[#FF6F61]" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="px-4 py-20 md:px-6 lg:px-8 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three simple steps to start building meaningful collaborations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#FF6F61]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#FF6F61]/20 transition-colors">
                  <Search className="w-8 h-8 text-[#FF6F61]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Build Your Profile</h3>
                <p className="text-gray-600 leading-relaxed">
                  Create a compelling profile that showcases your restaurant or content creation style
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#FDBD50]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#FDBD50]/20 transition-colors">
                  <Heart className="w-8 h-8 text-[#FDBD50]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Discover Perfect Collabs</h3>
                <p className="text-gray-600 leading-relaxed">
                  Find ideal partners through our smart matching system and browse opportunities
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#FF6F61]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#FF6F61]/20 transition-colors">
                  <TrendingUp className="w-8 h-8 text-[#FF6F61]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Reach More Customers</h3>
                <p className="text-gray-600 leading-relaxed">
                  Grow your audience and business through authentic, engaging collaborations
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust & Safety Section */}
      <section className="px-4 py-20 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Safe & Secure Platform
            </h2>
            <p className="text-xl text-gray-600">
              Your safety and success are our top priorities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF6F61]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-[#FF6F61]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Verified Partners</h3>
              <p className="text-gray-600">All restaurants and creators go through our verification process</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#FDBD50]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-[#FDBD50]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">24/7 Support</h3>
              <p className="text-gray-600">Our team is here to help you succeed with round-the-clock support</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF6F61]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-[#FF6F61]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Guaranteed</h3>
              <p className="text-gray-600">Dispute resolution and satisfaction guarantee for all collaborations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Benefits Split Section */}
      <section id="features" className="px-4 py-20 md:px-6 lg:px-8 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Built for Everyone
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* For Foodies */}
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <div className="w-12 h-12 bg-[#FDBD50]/10 rounded-lg flex items-center justify-center mb-4 mx-auto lg:mx-0">
                  <Camera className="w-6 h-6 text-[#FDBD50]" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">For Food Creators</h3>
                <p className="text-gray-600 mb-6">Turn your passion into partnerships with amazing restaurants</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#FDBD50] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Discover Hidden Gems</h4>
                    <p className="text-gray-600">Find unique restaurants looking for authentic content</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#FDBD50] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Monetize Your Content</h4>
                    <p className="text-gray-600">Get paid for creating engaging food content</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#FDBD50] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Build Your Network</h4>
                    <p className="text-gray-600">Connect with restaurant owners and fellow creators</p>
                  </div>
                </div>
              </div>
            </div>

            {/* For Restaurants */}
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <div className="w-12 h-12 bg-[#FF6F61]/10 rounded-lg flex items-center justify-center mb-4 mx-auto lg:mx-0">
                  <Utensils className="w-6 h-6 text-[#FF6F61]" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">For Restaurants</h3>
                <p className="text-gray-600 mb-6">Amplify your brand with authentic food influencer partnerships</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#FF6F61] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Reach New Customers</h4>
                    <p className="text-gray-600">Tap into influencer audiences to grow your customer base</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#FF6F61] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Authentic Marketing</h4>
                    <p className="text-gray-600">Get genuine reviews and content from food lovers</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#FF6F61] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Easy Management</h4>
                    <p className="text-gray-600">Simple tools to manage collaborations and track results</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-4 py-20 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our Community Says
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from restaurants and creators who've found success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#FF6F61] rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {testimonial.avatar}
                    </div>
                    <div className="ml-3">
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="px-4 py-20 md:px-6 lg:px-8 bg-[#F9F9F9]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about SoloFoodies
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-0">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                    {openFaq === index ? (
                      <Minus className="w-5 h-5 text-[#FF6F61] flex-shrink-0" />
                    ) : (
                      <Plus className="w-5 h-5 text-[#FF6F61] flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="px-4 py-20 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Why SoloFoodies Exists
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-12">
              Our mission is to make it effortless for restaurants and creators to work together, 
              build buzz, and celebrate food culture. We believe in authentic connections that 
              benefit everyone in the food community.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-16 h-16 bg-[#FF6F61]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-[#FF6F61]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Quality First</h3>
                <p className="text-gray-600">Curated partnerships that create real value</p>
              </div>
              
              <div>
                <div className="w-16 h-16 bg-[#FDBD50]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-[#FDBD50]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Community Driven</h3>
                <p className="text-gray-600">Built by and for the food community</p>
              </div>
              
              <div>
                <div className="w-16 h-16 bg-[#FF6F61]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-[#FF6F61]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Authentic Connections</h3>
                <p className="text-gray-600">Real relationships, not just transactions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Footer */}
      <section className="px-4 py-20 md:px-6 lg:px-8 bg-gradient-to-r from-[#FF6F61] to-[#FDBD50]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Start Your First Collaboration Today
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join thousands of restaurants and food creators already building amazing partnerships
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-[#FF6F61] hover:bg-gray-50 px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 font-semibold">
              Join as a Foodie
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 font-semibold">
              Partner as a Restaurant
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-12 border-t border-gray-200 md:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-[#FF6F61] rounded-lg flex items-center justify-center">
                  <Utensils className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">SoloFoodies</span>
              </div>
              <p className="text-gray-600 mb-4 max-w-md">
                Connecting restaurants and food creators worldwide through meaningful collaborations.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>{collabCount.toLocaleString()} collaborations and counting</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Platform</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-600 hover:text-[#FF6F61] transition-colors">How It Works</a>
                <a href="#" className="block text-gray-600 hover:text-[#FF6F61] transition-colors">Pricing</a>
                <a href="#" className="block text-gray-600 hover:text-[#FF6F61] transition-colors">Success Stories</a>
                <a href="#" className="block text-gray-600 hover:text-[#FF6F61] transition-colors">Help Center</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-600 hover:text-[#FF6F61] transition-colors">About Us</a>
                <a href="#" className="block text-gray-600 hover:text-[#FF6F61] transition-colors">Careers</a>
                <a href="#" className="block text-gray-600 hover:text-[#FF6F61] transition-colors">Press</a>
                <a href="#" className="block text-gray-600 hover:text-[#FF6F61] transition-colors">Contact</a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-600 mb-4 md:mb-0">
              © 2024 SoloFoodies. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-600 hover:text-[#FF6F61] transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-[#FF6F61] transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-gray-600 hover:text-[#FF6F61] transition-colors text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomepageEnhanced;
