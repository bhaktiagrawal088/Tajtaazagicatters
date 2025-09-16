import React, { useEffect, useRef } from 'react';
import { ArrowRight, CircleArrowOutUpRight, CircleArrowOutUpRightIcon } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const cardsRef = useRef([]);
  const buttonRef = useRef(null);

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
    .fromTo(descriptionRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
      '-=0.5'
    )
    .fromTo(cardsRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power2.out' },
      '-=0.3'
    )
    .fromTo(buttonRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.7)' },
      '-=0.2'
    );
  }, []);

  const services = [
    {
      title: 'WEDDING EVENT',
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'Wedding. Why we have the concept of inviting all our relatives, friends and known ones? Its because, we want to share our happiness with them and want them to bless us for our new journey.'
    },
    {
      title: 'CORPORATE EVENT',
      image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'From corporate events to business occasions or milestone celebrations, our event catering team understands the importance of professional presentation and exceptional service.'
    },
    {
      title: 'BIRTHDAY PARTY',
      image: 'https://images.pexels.com/photos/1857157/pexels-photo-1857157.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'Make every birthday a memorable one with our birthday photography. Whether its a childs first birthday or a milestone celebration, we capture every special moment.'
    }
  ];

  return (
    <section ref={sectionRef} id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-red-800 font-bold mb-4 tracking-wide uppercase text-2xl">
            What We Do
          </p>
          
          <h2 ref={titleRef} className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Premium catering services
          </h2>
          
          <p ref={descriptionRef} className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto">
            We provide premium catering services for all events, big and small. Our team of professionals will work with you to 
            create a custom menu that fits your needs and budget. Whether you're planning a wedding, corporate event, or private 
            party, we have the experience and expertise to make your event a success.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-red-800 font-bold text-lg mb-3 tracking-wide">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button 
            ref={buttonRef}
            className="bg-red-800 text-white px-8 py-4 rounded-full font-medium hover:bg-red-700 transition-all duration-300 flex items-center mx-auto group"
          >
            View All Services
            <CircleArrowOutUpRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;