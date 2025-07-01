import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Utensils, Users, MapPin, Star, ArrowRight, CheckCircle, Search, Camera, TrendingUp, Heart, MessageSquare, Award } from 'lucide-react';
const Homepage = () => {
  const testimonials = [{
    quote: "SoloFoodies helped us connect with amazing local creators. Our engagement doubled!",
    name: "Maria Santos",
    role: "Restaurant Manager",
    avatar: "MS"
  }, {
    quote: "Finally, a platform that makes collaboration simple and rewarding for creators.",
    name: "@foodie_explorer",
    role: "Food Influencer",
    avatar: "FE"
  }, {
    quote: "The partnerships we've built through SoloFoodies have been game-changing.",
    name: "Chef David Kim",
    role: "Restaurant Owner",
    avatar: "DK"
  }, {
    quote: "Love how easy it is to find authentic restaurants that value content creators.",
    name: "@tastebud_travels",
    role: "Content Creator",
    avatar: "TT"
  }];
  return <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="px-4 py-6 md:px-6 lg:px-8">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#FF6F61] rounded-lg flex items-center justify-center">
              <Utensils className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">SoloFoodies</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-4 py-16 md:px-6 lg:px-8 bg-gradient-to-br from-[#FF6F61]/5 to-[#FDBD50]/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
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

      {/* How It Works Section */}
      <section className="px-4 py-20 md:px-6 lg:px-8 bg-[#F9F9F9]">
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
            {testimonials.map((testimonial, index) => <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
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
              </Card>)}
          </div>
        </div>
      </section>

      {/* Feature Benefits Split Section */}
      <section className="px-4 py-20 md:px-6 lg:px-8 bg-[#F9F9F9]">
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
            <Button variant="outline" className="border-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 font-semibold text-[#de6666] bg-slate-50">
              Partner as a Restaurant
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-12 border-t border-gray-200 md:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <div className="w-8 h-8 bg-[#FF6F61] rounded-lg flex items-center justify-center">
                <Utensils className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">SoloFoodies</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-600 hover:text-[#FF6F61] transition-colors">Contact Us</a>
              <a href="#" className="text-gray-600 hover:text-[#FF6F61] transition-colors">About</a>
              <a href="#" className="text-gray-600 hover:text-[#FF6F61] transition-colors">Support</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-100 text-center">
            <p className="text-gray-600">
              © 2024 SoloFoodies. All rights reserved. Connecting restaurants and food creators worldwide.
            </p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Homepage;