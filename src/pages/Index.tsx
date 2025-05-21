
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BookOpen, GraduationCap, MessageSquare, BarChart3, Sparkles, Brain } from 'lucide-react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Course Creation",
      description: "Build complete course structures with AI-generated content tailored to your needs."
    },
    {
      icon: GraduationCap,
      title: "Exam Preparation",
      description: "Create custom study materials and practice tests for upcoming exams."
    },
    {
      icon: MessageSquare,
      title: "Interview Practice",
      description: "Prepare for interviews with AI-generated questions and real-time feedback."
    },
    {
      icon: BarChart3,
      title: "Progress Analytics",
      description: "Track your learning progress and identify areas for improvement."
    }
  ];
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 md:py-24">
        {/* Hero Section with Gradient Animation */}
        <div className="relative overflow-hidden rounded-xl p-8 mb-20 bg-gradient-to-br from-brand-blue/10 to-brand-purple/10 border border-brand-purple/20">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-blue/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-purple/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          
          <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
            <div className="flex items-center mb-6 bg-white/10 backdrop-blur-sm p-2 rounded-full border border-brand-purple/20">
              <Sparkles className="h-5 w-5 text-brand-purple mr-2" />
              <span className="text-sm font-medium">AI-Powered Learning Assistant</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-purple">
              Learn Smarter with AI
            </h1>
            
            <p className="text-xl mb-8 text-muted-foreground max-w-2xl">
              Create personalized study materials, practice for exams, and prepare for interviews with our intelligent learning platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-brand-blue to-brand-purple hover:opacity-90 shadow-lg shadow-brand-purple/20">
                <Link to="/dashboard" className="flex items-center">
                  Get Started <Brain className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-brand-purple/20 hover:bg-brand-purple/5">
                <Link to="/courses/new">Create Course</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Features Section with Animated Cards */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-4">Supercharge Your Learning</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Our AI-powered platform adapts to your learning style and helps you achieve your goals faster.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="overflow-hidden border-brand-purple/10 bg-gradient-to-br from-white to-brand-blue/5 dark:from-gray-900 dark:to-brand-purple/10 hover:shadow-md hover:shadow-brand-purple/5 transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 bg-gradient-to-r from-brand-blue/20 to-brand-purple/20 rounded-full flex items-center justify-center mb-4 shadow-inner">
                      <Icon className="h-6 w-6 text-brand-purple" />
                    </div>
                    <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
        
        {/* Call to Action Section with Animated Background */}
        <div className="relative overflow-hidden rounded-xl p-12 border border-brand-purple/20">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/10 to-brand-purple/10"></div>
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-brand-lightBlue/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-brand-darkBlue/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-purple">
              Ready to transform your studying?
            </h2>
            <p className="text-xl mb-8 text-muted-foreground">
              Join thousands of students who are using AI to enhance their learning experience.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-brand-blue to-brand-purple hover:opacity-90 shadow-lg shadow-brand-purple/20">
              <Link to="/courses/new">Create Your First Course</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
