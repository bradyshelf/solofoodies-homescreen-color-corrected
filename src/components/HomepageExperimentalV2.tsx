
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Utensils, Users, Star, ArrowRight, Camera, TrendingUp, Heart, MessageSquare, Award, Play, Instagram, Zap, Globe, MapPin, CheckCircle2, Sparkles, Eye, Target, Search, Clock, Shield, Plus, Minus } from 'lucide-react';
import { useState, useEffect } from 'react';
import VersionSwitcher from './VersionSwitcher';
import { testimonials, faqs, howItWorksSteps, foodieFeatures, restaurantFeatures } from '@/data/landingPageData';

const HomepageExperimentalV2 = () => {
  const [activeStory, setActiveStory] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [liveStats, setLiveStats] = useState({
    collaborations: 2847,
    creators: 1205,
    restaurants: 892
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveStats(prev => ({
        collaborations: prev.collaborations + Math.floor(Math.random() * 5),
        creators: prev.creators + Math.floor(Math.random() * 3),
        restaurants: prev.restaurants + Math.floor(Math.random() * 2)
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const storyInterval = setInterval(() => {
      setActiveStory(prev => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(storyInterval);
  }, []);

  const successStories = [
    {
      id: 0,
      creator: "@foodie_maya",
      restaurant: "Bloom Bistro",
      metric: "+250% engagement",
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=600&fit=crop",
      quote: "From 2K to 15K followers in 3 months through authentic partnerships"
    },
    {
      id: 1,
      creator: "@tacos_tom",
      restaurant: "Verde Kitchen", 
      metric: "8 ongoing deals",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=600&fit=crop",
      quote: "Finally found restaurants that value my content style"
    },
    {
      id: 2,
      creator: "@dessert_dreams",
      restaurant: "Sugar & Spice",
      metric: "+$3K monthly",
      image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400&h=600&fit=crop",
      quote: "Turned my passion into a sustainable income stream"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Immersive Hero */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Background Gradient Animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/40 via-black to-gray-800/40">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(156,163,175,0.2),transparent)] animate-pulse"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(75,85,99,0.2),transparent)] animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-gray-300 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          {/* Live Stats Bar */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-8 py-3 border border-white/20">
              <div className="flex items-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-mono">{liveStats.collaborations.toLocaleString()} collabs</span>
                </div>
                <div className="w-px h-4 bg-white/30"></div>
                <div className="flex items-center gap-2">
                  <Camera className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-400 font-mono">{liveStats.creators.toLocaleString()} creators</span>
                </div>
                <div className="w-px h-4 bg-white/30"></div>
                <div className="flex items-center gap-2">
                  <Utensils className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-500 font-mono">{liveStats.restaurants.toLocaleString()} restaurants</span>
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-white to-gray-300">
              CONNECT
            </span>
            <br />
            <span className="text-white">CREATE</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400">
              COLLABORATE
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Where restaurants and food creators unite to build authentic partnerships and grow together
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button className="bg-white hover:bg-gray-100 text-black px-12 py-6 text-xl rounded-2xl shadow-2xl transition-all duration-300 group">
              <Play className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
              Start Creating
            </Button>
            <Button variant="outline" className="border-2 border-gray-600 bg-gray-900/50 backdrop-blur-sm text-white hover:bg-gray-800/50 px-12 py-6 text-xl rounded-2xl transition-all duration-300">
              Explore Partners
            </Button>
          </div>
        </div>
      </section>

      {/* Role-Based Value Props */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Built for Both Sides of the Table
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Whether you're creating content or serving customers, we've got you covered
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Foodie Section */}
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-3xl p-8 border border-gray-700/50">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gray-700 rounded-2xl flex items-center justify-center">
                  <Camera className="w-8 h-8 text-gray-300" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">For Food Creators</h3>
                  <p className="text-gray-400">Turn your passion into partnerships</p>
                </div>
              </div>
              <div className="space-y-4">
                {foodieFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-gray-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                      <p className="text-gray-400 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Restaurant Section */}
            <div className="bg-gradient-to-br from-gray-700/30 to-gray-800/30 rounded-3xl p-8 border border-gray-600/50">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gray-600 rounded-2xl flex items-center justify-center">
                  <Utensils className="w-8 h-8 text-gray-200" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">For Restaurants</h3>
                  <p className="text-gray-400">Amplify your reach authentically</p>
                </div>
              </div>
              <div className="space-y-4">
                {restaurantFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-gray-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                      <p className="text-gray-400 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Simple. Effective. Scalable.
            </h2>
            <p className="text-xl text-gray-400">
              Three steps to transform your food business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Create Your Profile",
                description: "Showcase your unique style or restaurant brand to attract the perfect partnerships"
              },
              {
                icon: Search,
                title: "Discover Perfect Matches",
                description: "Find ideal collaborators through our intelligent matching system and curated opportunities"
              },
              {
                icon: TrendingUp,
                title: "Grow Together",
                description: "Build lasting relationships that drive real results for both creators and restaurants"
              }
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-700 transition-colors duration-300">
                  <step.icon className="w-10 h-10 text-gray-300" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed max-w-sm mx-auto">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="relative py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Real Stories. Real Results.
            </h2>
            <p className="text-xl text-gray-400">
              See how creators and restaurants are thriving together
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div
                key={story.id}
                className={`relative group cursor-pointer transition-all duration-700 ${
                  activeStory === index ? 'scale-105 z-10' : 'scale-95 opacity-70'
                }`}
                onClick={() => setActiveStory(index)}
              >
                <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50 backdrop-blur-sm overflow-hidden h-96">
                  <div className="relative h-full">
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-20"
                      style={{backgroundImage: `url(${story.image})`}}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                    
                    <CardContent className="relative h-full p-8 flex flex-col justify-end">
                      <div className="mb-4">
                        <div className="inline-flex items-center gap-2 bg-gray-700/40 px-3 py-1 rounded-full text-gray-300 text-sm font-semibold mb-3">
                          <TrendingUp className="w-4 h-4" />
                          {story.metric}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {story.creator} × {story.restaurant}
                        </h3>
                        <p className="text-gray-300 italic text-lg leading-relaxed">
                          "{story.quote}"
                        </p>
                      </div>
                      
                      {activeStory === index && (
                        <div className="flex items-center gap-3 text-gray-400 animate-fade-in">
                          <Eye className="w-5 h-5" />
                          <span className="font-semibold">Active Story</span>
                        </div>
                      )}
                    </CardContent>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Trusted by Thousands
            </h2>
            <p className="text-xl text-gray-400">
              Hear from our community of creators and restaurant partners
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gray-400 text-gray-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-gray-300">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-400">
              Powerful tools designed for the modern creator economy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Smart Matching",
                description: "AI-powered algorithm connects you with perfect brand partners",
                color: "from-gray-600 to-gray-700"
              },
              {
                icon: Zap,
                title: "Instant Approval",
                description: "Real-time notifications and lightning-fast collaboration setup",
                color: "from-gray-700 to-gray-800"
              },
              {
                icon: Globe,
                title: "Global Reach",
                description: "Connect with restaurants and creators worldwide",
                color: "from-gray-600 to-gray-700"
              },
              {
                icon: Award,
                title: "Creator Rewards",
                description: "Earn exclusive perks and unlock premium partnership tiers",
                color: "from-gray-700 to-gray-800"
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-400">
              Everything you need to know about SoloFoodies
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
                <CardContent className="p-0">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-700/30 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                    {openFaq === index ? (
                      <Minus className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 bg-gradient-to-t from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(156,163,175,0.1),transparent)]"></div>
        
        <div className="relative max-w-4xl mx-auto text-center px-6">
          <div className="mb-8">
            <Sparkles className="w-12 h-12 text-gray-400 mx-auto mb-6 animate-pulse" />
            <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              <span className="text-white">YOUR</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-white to-gray-300">
                PARTNERSHIP
              </span>
              <br />
              <span className="text-white">AWAITS</span>
            </h2>
          </div>

          <p className="text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join thousands who are already building their future through food
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-white hover:bg-gray-100 text-black px-16 py-8 text-2xl rounded-3xl shadow-2xl transition-all duration-500 group">
              <span className="group-hover:scale-110 transition-transform duration-300">
                Join as Creator
              </span>
            </Button>
            <Button variant="outline" className="border-2 border-gray-600 bg-gray-900/50 backdrop-blur-sm text-white hover:bg-gray-800/50 px-16 py-8 text-2xl rounded-3xl transition-all duration-500 group">
              <span className="group-hover:scale-110 transition-transform duration-300">
                Partner as Restaurant
              </span>
            </Button>
          </div>

          <p className="text-gray-500 mt-8">Free forever • No credit card required • Join 50,000+ users</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full flex items-center justify-center">
              <Utensils className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">SoloFoodies</span>
          </div>
          <p className="text-gray-500">© 2024 SoloFoodies. Connecting creators and restaurants worldwide.</p>
        </div>
      </footer>
      
      <VersionSwitcher />
    </div>
  );
};

export default HomepageExperimentalV2;
