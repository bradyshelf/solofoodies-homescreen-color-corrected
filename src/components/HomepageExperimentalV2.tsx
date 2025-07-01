
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Utensils, Users, MapPin, Star, ArrowRight, CheckCircle, Search, Camera, TrendingUp, Heart, MessageSquare, Award, Shield, Clock, Zap, Globe, Plus, Minus, Play, Instagram, DollarSign } from 'lucide-react';
import { useState, useEffect } from 'react';
import VersionSwitcher from './VersionSwitcher';

const HomepageExperimentalV2 = () => {
  const [collabCount, setCollabCount] = useState(1247);
  const [activeUserType, setActiveUserType] = useState<'foodie' | 'restaurant'>('foodie');

  useEffect(() => {
    const interval = setInterval(() => {
      setCollabCount(prev => prev + Math.floor(Math.random() * 3));
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const userJourneys = {
    foodie: {
      title: "Your Food Content, Your Career",
      subtitle: "Turn your passion into partnerships with top restaurants",
      steps: [
        {
          title: "Showcase Your Style",
          description: "Create a stunning profile that highlights your unique food photography and authentic voice",
          icon: Camera
        },
        {
          title: "Discover Perfect Matches",
          description: "Browse curated restaurant collaborations that align with your content style and audience",
          icon: Search
        },
        {
          title: "Build Real Relationships",
          description: "Connect directly with restaurant owners who value authentic food storytelling",
          icon: MessageSquare
        },
        {
          title: "Grow Your Influence",
          description: "Access exclusive dining experiences while building your personal brand",
          icon: TrendingUp
        }
      ]
    },
    restaurant: {
      title: "Authentic Marketing That Works",
      subtitle: "Connect with food creators who truly love what you serve",
      steps: [
        {
          title: "Find Your Voice",
          description: "Discover food influencers whose style and audience perfectly match your restaurant's vibe",
          icon: Users
        },
        {
          title: "Create Compelling Offers",
          description: "Design collaboration experiences that excite creators and showcase your best dishes",
          icon: Utensils
        },
        {
          title: "Build Lasting Partnerships",
          description: "Develop ongoing relationships with creators who become genuine advocates for your brand",
          icon: Heart
        },
        {
          title: "See Real Results",
          description: "Track authentic engagement and watch your restaurant community grow organically",
          icon: Award
        }
      ]
    }
  };

  const testimonialStories = [
    {
      type: 'foodie',
      name: 'Sarah Chen',
      handle: '@sarahseats',
      followers: '45K',
      story: "I used to spend hours reaching out to restaurants individually. Now I have 3 regular partnerships and have doubled my collaboration income in 6 months.",
      avatar: 'SC',
      metric: '+150% collab income'
    },
    {
      type: 'restaurant',
      name: 'Marco\'s Bistro',
      location: 'Downtown Portland',
      story: "Working with food creators through SoloFoodies brought us 40% more weekend bookings. The authentic content they create is worth more than any ad we could buy.",
      avatar: 'MB',
      metric: '+40% weekend bookings'
    },
    {
      type: 'foodie',
      name: 'Jake Williams',
      handle: '@foodie_jake',
      followers: '12K',
      story: "As a micro-influencer, I thought I was too small for brand deals. SoloFoodies connected me with amazing local spots that actually want to work with creators like me.",
      avatar: 'JW',
      metric: '8 active partnerships'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <header className="px-4 py-6 md:px-6 lg:px-8 bg-white/80 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-40">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-[#FF6F61] to-[#FDBD50] rounded-full flex items-center justify-center">
              <Utensils className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">SoloFoodies</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => setActiveUserType('foodie')}
              className={`font-medium transition-colors ${activeUserType === 'foodie' ? 'text-[#FF6F61]' : 'text-gray-600 hover:text-gray-900'}`}
            >
              For Creators
            </button>
            <button 
              onClick={() => setActiveUserType('restaurant')}
              className={`font-medium transition-colors ${activeUserType === 'restaurant' ? 'text-[#FF6F61]' : 'text-gray-600 hover:text-gray-900'}`}
            >
              For Restaurants
            </button>
            <Button variant="outline" className="border-[#FF6F61] text-[#FF6F61] hover:bg-[#FF6F61] hover:text-white">
              Sign In
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section - Story-Driven */}
      <section className="px-4 py-16 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full text-green-700 font-medium mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>{collabCount.toLocaleString()} successful collaborations this month</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Where Food Stories
              <br />
              <span className="text-[#FF6F61]">Come to Life</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Every great meal has a story. Every creator has a voice. We bring them together 
              for authentic partnerships that feed both passion and business.
            </p>

            {/* User Type Selector */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <button
                onClick={() => setActiveUserType('foodie')}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl transition-all duration-300 ${
                  activeUserType === 'foodie' 
                    ? 'bg-[#FF6F61] text-white shadow-lg' 
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-[#FF6F61]/30'
                }`}
              >
                <Camera className="w-5 h-5" />
                <span className="font-medium">I'm a Food Creator</span>
              </button>
              
              <button
                onClick={() => setActiveUserType('restaurant')}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl transition-all duration-300 ${
                  activeUserType === 'restaurant' 
                    ? 'bg-[#FF6F61] text-white shadow-lg' 
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-[#FF6F61]/30'
                }`}
              >
                <Utensils className="w-5 h-5" />
                <span className="font-medium">I'm a Restaurant Owner</span>
              </button>
            </div>
          </div>

          {/* Dynamic Journey Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {userJourneys[activeUserType].title}
              </h2>
              <p className="text-xl text-gray-600">
                {userJourneys[activeUserType].subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {userJourneys[activeUserType].steps.map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#FF6F61] to-[#FDBD50] rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center text-sm font-bold text-[#FF6F61] shadow-md">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button className="bg-gradient-to-r from-[#FF6F61] to-[#FDBD50] hover:from-[#FF6F61]/90 hover:to-[#FDBD50]/90 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                {activeUserType === 'foodie' ? 'Start Creating' : 'Find Creators'}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof - Real Stories */}
      <section className="px-4 py-16 md:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real Stories, Real Results
            </h2>
            <p className="text-xl text-gray-600">
              See how SoloFoodies is changing the game for creators and restaurants
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonialStories.map((story, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#FF6F61] to-[#FDBD50] rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {story.avatar}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{story.name}</p>
                      <p className="text-gray-500 text-sm">
                        {story.type === 'foodie' ? `${story.handle} • ${story.followers} followers` : story.location}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed italic">
                    "{story.story}"
                  </p>
                  
                  <div className="bg-green-50 px-4 py-2 rounded-lg">
                    <p className="text-green-700 font-semibold text-center">{story.metric}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem/Solution Narrative */}
      <section className="px-4 py-16 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Old Way Was Broken
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-600 font-bold text-sm">✗</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Endless Cold Outreach</h3>
                    <p className="text-gray-600">Hours spent DMing restaurants with no response, or restaurants struggling to find authentic creators</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-600 font-bold text-sm">✗</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Mismatched Partnerships</h3>
                    <p className="text-gray-600">Generic collaborations that don't align with brand values or audience interests</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-600 font-bold text-sm">✗</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Complicated Negotiations</h3>
                    <p className="text-gray-600">Unclear expectations, payment delays, and partnerships that fall through</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Now There's a Better Way
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Smart Matching</h3>
                    <p className="text-gray-600">Our algorithm connects you with partners who actually align with your style and values</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Transparent Process</h3>
                    <p className="text-gray-600">Clear expectations, defined deliverables, and protected communications from day one</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Mutual Success</h3>
                    <p className="text-gray-600">Both creators and restaurants win with authentic partnerships that drive real results</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Safety */}
      <section className="px-4 py-16 md:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Built on Trust & Transparency
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            We protect both creators and restaurants with secure systems and clear guidelines
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Verified Partners</h3>
              <p className="text-gray-600">All restaurants and creators go through our verification process</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure Payments</h3>
              <p className="text-gray-600">Protected transactions with clear terms and timely payouts</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Direct Communication</h3>
              <p className="text-gray-600">Built-in messaging keeps all collaboration details organized</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-20 md:px-6 lg:px-8 bg-gradient-to-r from-[#FF6F61] to-[#FDBD50]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Your Next Great Partnership
            <br />
            Starts Here
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join thousands of creators and restaurants who are already building authentic, profitable partnerships
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-white text-[#FF6F61] hover:bg-gray-100 px-10 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold">
              Start as a Creator
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#FF6F61] px-10 py-4 text-lg rounded-xl font-semibold transition-all duration-300">
              Partner as a Restaurant
            </Button>
          </div>
          
          <p className="text-white/70 mt-6">Free to join • No credit card required</p>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="px-4 py-12 md:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-8 h-8 bg-gradient-to-r from-[#FF6F61] to-[#FDBD50] rounded-full flex items-center justify-center">
              <Utensils className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">SoloFoodies</span>
          </div>
          
          <div className="text-center text-gray-400">
            <p>© 2024 SoloFoodies. Making food partnerships simple and authentic.</p>
          </div>
        </div>
      </footer>
      
      <VersionSwitcher />
    </div>
  );
};

export default HomepageExperimentalV2;
