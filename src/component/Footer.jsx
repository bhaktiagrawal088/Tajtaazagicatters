import React from 'react';
import { Phone, Mail, MapPin, Youtube, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const services = [
    { name: 'Annaprasana', category: 'Our Services' },
    { name: 'Wedding Event', category: 'Our Services' },
    { name: 'Birthday Party', category: 'Our Services' },
    { name: '60th Wedding Event', category: 'Our Services' },
    { name: 'House Warming', category: 'Our Services' },
    { name: 'Engagement', category: 'Our Services' },
    { name: 'Mehndi Function', category: 'Our Services' },
    { name: 'Seemantham', category: 'Our Services' },
    { name: 'Corporate Events', category: 'Our Services' },
    { name: 'Seemantham', category: 'Our Services' }
  ];

  const eventTypes = [
    'Seemantham', 'Annaprasana', 'Birthday', 'Mehndi', 'Corporate', 
    'Retirement', 'House Warming', 'Reception', 'Naming Ceremony', 
    'Wedding', 'Anniversary'
  ];

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Scrolling Banner */}
      <div className="bg-red-700 py-3 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          <span className="text-2xl font-semibold">
            {eventTypes.map((event, index) => (
              <span key={index}>
                • {event} {' '}
              </span>
            ))}
            {eventTypes.map((event, index) => (
              <span key={`repeat-${index}`}>
                • {event} {' '}
              </span>
            ))}
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-red-700 rounded-full flex items-center justify-center mr-4">
                <div className="text-center">
                  <div className="text-white font-bold text-lg leading-tight">Taj</div>
                  <div className="text-white text-xs">Taazagi</div>
                </div>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Let Taj Taazagi Catters transform your special occasion into a masterpiece with our professional touch.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Annaprasana</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Birthday Party</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">House Warming</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mehndi Function</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Corporate Events</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-white opacity-0">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Wedding Event</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">60th Wedding Event</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Engagement</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Seemantham</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Contact Now</h4>
            <div className="mb-6">
              <h5 className="text-red-700 font-bold text-xl mb-4">NAMRATA FOODS</h5>
            </div>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  At. Kh No. 61, In Front Of Basera Near Hotel Jaya Pee Palace, Fatehabad Road, Agra.
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                <div className="text-gray-400 text-sm">
                  <div>+91 9084153502</div>
                  <div>+91 6386437881</div>
                </div>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400 text-sm">tajtaazagicatters@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Taj Taazagi Catters. All rights reserved. | Made with ❤️ for exceptional catering experiences
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translate3d(100%, 0, 0); }
          100% { transform: translate3d(-100%, 0, 0); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;