
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Utensils, Users, Star, ArrowRight, Camera, TrendingUp, Heart, MessageSquare, Award, Play, Instagram, Zap, Globe, MapPin, CheckCircle2, Sparkles, Eye, Target, Search, Clock, Shield, Plus, Minus, ChefHat, Smartphone } from 'lucide-react';
import { useState, useEffect } from 'react';
import VersionSwitcher from './VersionSwitcher';
import { testimonials, faqs, howItWorksSteps, foodieFeatures, restaurantFeatures } from '@/data/landingPageData';

const HomepageExperimentalV2 = () => {
  const [activeTab, setActiveTab] = useState<'foodie' | 'restaurant'>('foodie');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(testimonialInterval);
  }, []);

  const stats = [
    { label: "Active Collaborations", value: "2,847", icon: TrendingUp },
    { label: "Food Creators", value: "1,205", icon: Camera },
    { label: "Partner Restaurants", value: "892", icon: Utensils },
    { label: "Cities Covered", value: "47", icon: MapPin }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Clean Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
                <Utensils className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">SoloFoodies</span>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
                Sign In
              </Button>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl px-6">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Clean & Minimal */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Where Food Meets
              <span className="text-orange-500"> Influence</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              The simplest way for restaurants and food creators to discover, connect, and collaborate on authentic partnerships.
            </p>
            
            {/* Role Toggle */}
            <div className="flex justify-center mb-12">
              <div className="bg-gray-100 p-1 rounded-2xl">
                <button
                  onClick={() => setActiveTab('foodie')}
                  className={`px-8 py-3 rounded-xl text-sm font-medium transition-all ${
                    activeTab === 'foodie'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Camera className="w-4 h-4 mr-2 inline" />
                  I'm a Food Creator
                </button>
                <button
                  onClick={() => setActiveTab('restaurant')}
                  className={`px-8 py-3 rounded-xl text-sm font-medium transition-all ${
                    activeTab === 'restaurant'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <ChefHat className="w-4 h-4 mr-2 inline" />
                  I'm a Restaurant
                </button>
              </div>
            </div>

            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-4 text-lg rounded-2xl shadow-lg">
              <Play className="w-5 h-5 mr-3" />
              Start {activeTab === 'foodie' ? 'Creating' : 'Partnering'}
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Value Propositions - Side by Side */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Built for Both Sides of Every Partnership
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you create content or serve food, we provide the tools you need to build meaningful collaborations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Foodie Section */}
            <div className="space-y-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Camera className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">For Food Creators</h3>
                <p className="text-gray-600 mb-8">Transform your passion into profitable partnerships with restaurants that value your authentic voice.</p>
              </div>
              
              <div className="space-y-6">
                {foodieFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mt-1">
                      <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Restaurant Section */}
            <div className="space-y-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Utensils className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">For Restaurants</h3>
                <p className="text-gray-600 mb-8">Connect with food creators who genuinely love what you do and want to share it with their audience.</p>
              </div>
              
              <div className="space-y-6">
                {restaurantFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center mt-1">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Vertical Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Three simple steps to start collaborating</p>
          </div>

          <div className="space-y-12">
            {howItWorksSteps.map((step, index) => (
              <div key={index} className="flex items-start gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-orange-500 text-white rounded-2xl flex items-center justify-center text-2xl font-bold">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1 pt-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Carousel */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-16">What Our Users Say</h2>
          
          <Card className="bg-gray-50 border-0 shadow-sm">
            <CardContent className="p-12">
              <div className="flex items-center justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
                ))}
              </div>
              
              <blockquote className="text-2xl text-gray-900 mb-8 leading-relaxed italic">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">
                    {testimonials[currentTestimonial].avatar}
                  </span>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[currentTestimonial].role}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentTestimonial === index ? 'bg-orange-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything You Need</h2>
            <p className="text-xl text-gray-600">Powerful features designed for successful collaborations</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Target, title: "Smart Matching", description: "AI-powered system connects perfect partners", color: "bg-purple-100 text-purple-600" },
              { icon: Zap, title: "Instant Setup", description: "Get started in minutes, not hours", color: "bg-yellow-100 text-yellow-600" },
              { icon: Globe, title: "Global Network", description: "Connect worldwide with creators and restaurants", color: "bg-blue-100 text-blue-600" },
              { icon: Shield, title: "Secure Platform", description: "Your data and partnerships are protected", color: "bg-green-100 text-green-600" }
            ].map((feature, index) => (
              <Card key={index} className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-6 ${feature.color}`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about SoloFoodies</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-gray-50 border-0 shadow-sm">
                <CardContent className="p-0">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors rounded-lg"
                  >
                    <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                    {openFaq === index ? (
                      <Minus className="w-5 h-5 text-gray-500" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-500" />
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

      {/* Final CTA */}
      <section className="py-20 bg-orange-500">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-5xl font-bold mb-6">Ready to Start Collaborating?</h2>
          <p className="text-xl mb-12 opacity-90">
            Join thousands of creators and restaurants building meaningful partnerships
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-white text-orange-500 hover:bg-gray-100 px-12 py-4 text-xl rounded-2xl font-semibold">
              Join as Creator
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-orange-500 px-12 py-4 text-xl rounded-2xl font-semibold">
              Partner as Restaurant
            </Button>
          </div>
          
          <p className="text-orange-100 mt-8">Free to join • No setup fees • Start collaborating today</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <Utensils className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold">SoloFoodies</span>
          </div>
          <p className="text-gray-400">© 2024 SoloFoodies. Connecting food creators and restaurants worldwide.</p>
        </div>
      </footer>
      
      <VersionSwitcher />
    </div>
  );
};

export default HomepageExperimentalV2;
