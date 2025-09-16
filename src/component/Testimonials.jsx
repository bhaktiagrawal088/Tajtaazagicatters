import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const testimonialRef = useRef(null);
  const imageRef = useRef(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "A very special day today in our life and this is the second time we booked Taj Taazagi Catters for birthday party and as expected the food and service was extremely well. Multiple varieties and all tastes were awesome. All our guests enjoyed and specially mentioned about food taste. Many thanks to Taj Taazagi Catters. We really enjoyed and also India won today's match... Soo happy. Will definitely refer to all our friends and relatives 😊.",
      author: "ROHIT RAJPUT",
      rating: 5
    },
    {
      text: "Excellent service and amazing food quality! Taj Taazagi Catters made our wedding day absolutely perfect. The attention to detail and professional service exceeded our expectations. Every dish was delicious and our guests are still talking about the food!",
      author: "PRIYA SHARMA",
      rating: 5
    },
    {
      text: "Outstanding catering service for our corporate event. The team was professional, punctual, and the food was exceptional. The variety and taste impressed all our clients. Highly recommended for any event!",
      author: "VIKRAM SINGH",
      rating: 5
    }
  ];

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });

    tl.fromTo(titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power2.out' }
    )
    .fromTo(testimonialRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
      '-=0.5'
    )
    .fromTo(imageRef.current,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
      '-=0.6'
    );
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTest = testimonials[currentTestimonial];

  return (
    <section ref={sectionRef} className="py-20 bg-gray-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-16 h-16 bg-blue-400 rounded-full opacity-70"></div>
        <div className="absolute top-40 left-32 w-8 h-8 bg-red-400 rounded-full opacity-60"></div>
        <div className="absolute top-60 left-20 w-12 h-12 bg-yellow-400 rounded-full opacity-50"></div>
        <div className="absolute bottom-40 left-16 w-6 h-6 bg-green-400 rounded-full opacity-70"></div>
        
        <div className="absolute top-32 right-20 w-10 h-10 bg-pink-400 rounded-full opacity-60"></div>
        <div className="absolute top-20 right-40 w-14 h-14 bg-purple-400 rounded-full opacity-50"></div>
        <div className="absolute bottom-32 right-32 w-8 h-8 bg-orange-400 rounded-full opacity-70"></div>
        
        <div className="absolute top-24 left-1/4 w-20 h-8 bg-gray-600 rounded-full opacity-40 transform rotate-45"></div>
        <div className="absolute bottom-24 right-1/4 w-16 h-6 bg-gray-600 rounded-full opacity-40 transform -rotate-12"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div ref={testimonialRef}>
            <p className="text-yellow-300 font-bold mb-4 tracking-wide uppercase text-2xl">
              Testimonials.
            </p>
            
            <h2 ref={titleRef} className="text-4xl lg:text-5xl font-bold leading-tight mb-8">
              What People's Say About us?
            </h2>
            
            <div className="bg-gray-700/50 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <div className="flex mb-4">
                {[...Array(currentTest.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                "{currentTest.text}"
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-xl text-white">{currentTest.author}</h4>
                  <p className="text-gray-400">Verified Customer</p>
                </div>
                
                <div className="flex space-x-2">
                  <button 
                    onClick={prevTestimonial}
                    className="w-12 h-12 bg-red-700 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={nextTestimonial}
                    className="w-12 h-12 bg-red-700 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-red-700' : 'bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>

          <div ref={imageRef} className="relative">
            <div className="relative">
              <img 
                src="https://tajtaazagicatters.com/assets/testimonial-img-CqfgkfWM.png"
                alt="Young Chef" 
                className="w-full max-w-md ml-24 mt-12 rounded-2xl"
              />
              
              <div className="absolute -bottom-1 -left-14 w-24 h-24 bg-red-700 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold">4.9</div>
                  <div className="text-xs">Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;