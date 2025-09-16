import React, { useEffect, useRef } from 'react';
import { ChefHat, Truck, Award, Heart } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const featuresRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });

    tl.fromTo(subtitleRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }
    )
    .fromTo(titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power2.out' },
      '-=0.5'
    )
    .fromTo(descriptionRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
      '-=0.5'
    )
    .fromTo(featuresRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power2.out' },
      '-=0.3'
    );
  }, []);

  const features = [
    {
      icon: <ChefHat className="w-12 h-12 text-orange-700" />,
      title: 'Authentic Taste',
      description: 'Enjoy our traditional recipes, inspired by rich culinary heritage.'
    },
    {
      icon: <Truck className="w-12 h-12 text-orange-700" />,
      title: 'Service Excellence',
      description: 'Outstanding service and unforgettable experiences.'
    },
    {
      icon: <Award className="w-12 h-12 text-orange-700" />,
      title: 'Best Quality',
      description: 'Top quality standards, excellence in every bite.'
    },
    {
      icon: <Heart className="w-12 h-12 text-orange-700" />,
      title: 'Heritage',
      description: 'Taj Taazagi Catters blends food and heart, rooted in family traditions.'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p ref={subtitleRef} className="text-red-700 font-bold mb-4 tracking-wide uppercase text-2xl">
            Why Choose Us
          </p>
          
          <h2 ref={titleRef} className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Leave Your Guests Speechless With Our{' '}
            <span className="text-red-700">Fabulous Food!</span>
          </h2>
          
          <p ref={descriptionRef} className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto">
            We are a full-service catering company that specializes in creating custom menus that are tailored to your specific 
            needs and budget. Our team of professionals will work with you to create a menu that is perfect for your event.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              ref={el => featuresRef.current[index] = el}
              className="text-center group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full">
                <div className="flex justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;