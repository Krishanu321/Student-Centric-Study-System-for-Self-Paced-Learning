
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { BookOpen, Github, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t py-8 mt-auto bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <Logo />
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            Your AI Exam Prep Companion: Effortless Study Material at Your Fingertips
          </p>
          <div className="mt-4 flex space-x-4">
            <a href="#" className="text-muted-foreground hover:text-brand-blue transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-brand-blue transition-colors">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-brand-blue transition-colors">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold mb-4 text-brand-blue">Product</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/features" className="text-muted-foreground hover:text-foreground transition-colors">Features</Link></li>
            <li><Link to="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</Link></li>
            <li><Link to="/testimonials" className="text-muted-foreground hover:text-foreground transition-colors">Testimonials</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold mb-4 text-brand-purple">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/help" className="text-muted-foreground hover:text-foreground transition-colors">Help Center</Link></li>
            <li><Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact Us</Link></li>
            <li><Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-8 pt-4 border-t">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} EasyStudy. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex items-center">
            <BookOpen className="h-4 w-4 mr-2 text-brand-blue" />
            <span className="text-xs">Made with ❤️ for students</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
