import { Instagram, Facebook, Twitter, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">W</span>
              </div>
              <span className="text-xl font-bold">WORKOUT</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Transform your body and mind with our expert guidance and state-of-the-art facilities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#programs" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Programs
                </a>
              </li>
              <li>
                <a href="#trainers" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Trainers
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>123 Fitness Street</li>
              <li>New York, NY 10001</li>
              <li>Phone: (555) 123-4567</li>
              <li className="flex items-center gap-2">
                <Mail size={14} />
                info@workout.com
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-bold mb-4">Opening Hours</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Monday - Friday: 5AM - 11PM</li>
              <li>Saturday: 7AM - 9PM</li>
              <li>Sunday: 8AM - 8PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Workout. All rights reserved.
          </p>

          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Twitter size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};


