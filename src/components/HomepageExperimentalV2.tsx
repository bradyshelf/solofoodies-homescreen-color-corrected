
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Utensils, Users, Star, ArrowRight, Camera, TrendingUp, Heart, MessageSquare, Award, Play, Instagram, Zap, Globe, MapPin, CheckCircle2, Sparkles, Eye, Target } from 'lucide-react';
import { useState, useEffect } from 'react';
import VersionSwitcher from './VersionSwitcher';

const HomepageExperimentalV2 = () => {
  const [activeStory, setActiveStory] = useState(0);
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
      {/* Immersive Hero with Video-like Experience */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Background Gradient Animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-orange-900/20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.3),transparent)] animate-pulse"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,111,97,0.3),transparent)] animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-[#FF6F61] rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-yellow-400 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>

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
                  <Camera className="w-4 h-4 text-purple-400" />
                  <span className="text-purple-400 font-mono">{liveStats.creators.toLocaleString()} creators</span>
                </div>
                <div className="w-px h-4 bg-white/30"></div>
                <div className="flex items-center gap-2">
                  <Utensils className="w-4 h-4 text-orange-400" />
                  <span className="text-orange-400 font-mono">{liveStats.restaurants.toLocaleString()} restaurants</span>
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none">
            <span className="bg-gradient-to-r from-[#FF6F61] via-purple-400 to-yellow-400 bg-clip-text text-transparent">
              FEED
            </span>
            <br />
            <span className="text-white">YOUR</span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 via-green-400 to-blue-400 bg-clip-text text-transparent">
              FUTURE
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            The next-gen platform where food creators and restaurants collide to create viral moments and lasting partnerships
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button className="bg-gradient-to-r from-[#FF6F61] to-orange-500 hover:from-[#FF6F61]/90 hover:to-orange-500/90 text-white px-12 py-6 text-xl rounded-2xl shadow-2xl hover:shadow-[#FF6F61]/50 transition-all duration-300 group">
              <Play className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
              Start Creating
            </Button>
            <Button variant="outline" className="border-2 border-white/30 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 px-12 py-6 text-xl rounded-2xl transition-all duration-300">
              Explore Now
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Vertical Story Section */}
      <section className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Real Stories.
              </span>
              <br />
              <span className="text-white">Real Results.</span>
            </h2>
          </div>

          {/* Interactive Story Cards */}
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
                      className="absolute inset-0 bg-cover bg-center opacity-30"
                      style={{backgroundImage: `url(${story.image})`}}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                    
                    <CardContent className="relative h-full p-8 flex flex-col justify-end">
                      <div className="mb-4">
                        <div className="inline-flex items-center gap-2 bg-green-500/20 px-3 py-1 rounded-full text-green-400 text-sm font-semibold mb-3">
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
                        <div className="flex items-center gap-3 text-[#FF6F61] animate-fade-in">
                          <Eye className="w-5 h-5" />
                          <span className="font-semibold">Active Story</span>
                        </div>
                      )}
                    </CardContent>
                  </div>
                </Card>

                {/* Connecting Line */}
                {index < successStories.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 w-8 h-px bg-gradient-to-r from-purple-500 to-transparent transform -translate-y-1/2 z-0"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Showcase - Horizontal Scroll */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Built for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Creator Economy</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Every feature designed to amplify your content and accelerate your growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Smart Matching",
                description: "AI-powered algorithm connects you with perfect brand partners",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: Zap,
                title: "Instant Approval",
                description: "Real-time notifications and lightning-fast collaboration setup",
                color: "from-yellow-500 to-orange-500"
              },
              {
                icon: Globe,
                title: "Global Reach",
                description: "Connect with restaurants and creators worldwide",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: Award,
                title: "Creator Rewards",
                description: "Earn exclusive perks and unlock premium partnership tiers",
                color: "from-green-500 to-emerald-500"
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

      {/* Final CTA - Immersive */}
      <section className="relative py-32 bg-gradient-to-t from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,111,97,0.1),transparent)]"></div>
        
        <div className="relative max-w-4xl mx-auto text-center px-6">
          <div className="mb-8">
            <Sparkles className="w-12 h-12 text-yellow-400 mx-auto mb-6 animate-pulse" />
            <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              <span className="text-white">YOUR</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6F61] via-purple-500 to-yellow-400">
                MOMENT
              </span>
              <br />
              <span className="text-white">STARTS NOW</span>
            </h2>
          </div>

          <p className="text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join the creators who are already building their empire through food
          </p>

          <Button className="bg-gradient-to-r from-[#FF6F61] via-purple-500 to-yellow-400 hover:from-[#FF6F61]/90 hover:via-purple-500/90 hover:to-yellow-400/90 text-white px-16 py-8 text-2xl rounded-3xl shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 group">
            <span className="group-hover:scale-110 transition-transform duration-300">
              Launch Your Journey
            </span>
            <ArrowRight className="w-8 h-8 ml-4 group-hover:translate-x-2 transition-transform duration-300" />
          </Button>

          <p className="text-gray-500 mt-8">Free forever • No credit card required • Join 50,000+ creators</p>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-12 bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-[#FF6F61] to-purple-500 rounded-full flex items-center justify-center">
              <Utensils className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">SoloFoodies</span>
          </div>
          <p className="text-gray-500">© 2024 SoloFoodies. Feeding the future of creator partnerships.</p>
        </div>
      </footer>
      
      <VersionSwitcher />
    </div>
  );
};

export default HomepageExperimentalV2;
