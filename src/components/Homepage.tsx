
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Utensils, Users, MapPin, Star, ArrowRight, CheckCircle, Check } from 'lucide-react';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="px-4 py-6 md:px-6 lg:px-8">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
              <Utensils className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Solo Foodies</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-4 py-12 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Connect Food Creators
              <span className="text-red-500"> with Local Restaurants</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              The platform where food influencers and restaurants create amazing collaborations. 
              Discover new partnerships and grow your audience.
            </p>
            <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 text-lg rounded-lg">
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-16 bg-gray-50 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perfect for Everyone
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Whether you're a restaurant looking for exposure or a food creator seeking collaborations, 
              we've got you covered.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* For Restaurants */}
            <Card className="p-8 border-0 shadow-lg">
              <CardContent className="p-0 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <Utensils className="w-6 h-6 text-red-500" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">For Restaurants and Agencies</h3>
                <p className="text-gray-600 mb-6">
                  Connect with food influencers and creators to showcase your dishes to new audiences.
                </p>
                <ul className="space-y-3 mb-6 max-w-sm mx-auto">
                  <li className="flex items-center justify-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Find relevant food creators</span>
                  </li>
                  <li className="flex items-center justify-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Create collaboration offers</span>
                  </li>
                  <li className="flex items-center justify-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Track partnership success</span>
                  </li>
                </ul>
                <Button className="w-full bg-red-500 hover:bg-red-600">
                  Start as Restaurant
                </Button>
              </CardContent>
            </Card>

            {/* For Food Creators */}
            <Card className="p-8 border-0 shadow-lg">
              <CardContent className="p-0 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-green-500" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">For Foodies</h3>
                <p className="text-gray-600 mb-6">
                  Discover amazing restaurants and create content while enjoying great food experiences.
                </p>
                <ul className="space-y-3 mb-6 max-w-sm mx-auto text-center">
                  <li className="flex items-center justify-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Browse collaboration opportunities</span>
                  </li>
                  <li className="flex items-center justify-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Showcase your portfolio</span>
                  </li>
                  <li className="flex items-center justify-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Get paid for content</span>
                  </li>
                </ul>
                <Button className="w-full bg-green-500 hover:bg-green-600">
                  Start as Creator
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4 py-16 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple steps to start your food collaboration journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-500">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sign Up</h3>
              <p className="text-gray-600">Create your profile as a restaurant or food creator</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-500">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Connect</h3>
              <p className="text-gray-600">Browse and connect with potential collaboration partners</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-500">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Collaborate</h3>
              <p className="text-gray-600">Create amazing content and grow together</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-4 py-16 bg-gray-50 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pricing for Restaurants</h2>
          </div>

          <div className="flex justify-center max-w-5xl mx-auto">
            {/* Starter Plan */}
            <Card className="relative border-2 border-gray-200 shadow-lg max-w-sm w-full">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-gray-900 mb-1">$29</div>
                  <p className="text-gray-600">per month</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Up to 5 active collaborations</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Basic creator search</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Direct messaging</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Basic analytics</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              All plans include a 14-day free trial. No credit card required.
            </p>
            <p className="text-sm text-gray-500">
              Food creators can join and use the platform completely free!
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-8 border-t border-gray-200 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                <Utensils className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Solo Foodies</span>
            </div>
            <p className="text-gray-600 text-center md:text-right">
              © 2024 Solo Foodies. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
