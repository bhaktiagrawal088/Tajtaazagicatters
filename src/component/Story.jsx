import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Story = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef([]);
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

    tl.fromTo(imageRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: 'power2.out' }
    )
    .fromTo(titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
      '-=0.5'
    )
    .fromTo(descriptionRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out' },
      '-=0.3'
    )
    .fromTo(buttonRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.7)' },
      '-=0.2'
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Collage Images */}
          <div ref={imageRef} className="relative">
            <div className="bg-white rounded-3xl p-8 relative overflow-hidden shadow-2xl">
              <div className="grid grid-cols-2 gap-4 relative z-10">
                <img 
                  src="https://images.pexels.com/photos/29517898/pexels-photo-29517898.jpeg"
                  alt="Wedding hands" 
                  className="w-full h-32 object-cover rounded-lg transform rotate-3 hover:rotate-0 transition-transform duration-300"
                />
                 <img 
                  src="https://images.pexels.com/photos/18721993/pexels-photo-18721993.jpeg"
                  alt="Wedding hands" 
                  className="w-full h-32 object-cover rounded-lg transform rotate-3 hover:rotate-0 transition-transform duration-300"
                />
                <img 
                  src="https://images.pexels.com/photos/587737/pexels-photo-587737.jpeg"
                  alt="Birthday celebration" 
                  className="w-full h-40 object-cover rounded-lg transform -rotate-2 hover:rotate-0 transition-transform duration-300 col-span-2"
                />
                <img 
                  src="https://images.pexels.com/photos/2814828/pexels-photo-2814828.jpeg"
                  alt="Wedding ceremony" 
                  className="w-full h-40 object-cover rounded-lg transform rotate-1 hover:rotate-0 transition-transform duration-300 col-span-2"
                />
              </div>
              <div className="absolute bottom-4 left-8 text-white font-bold text-4xl">
                Taj Ta
              </div>
            </div>
          </div>

          <div ref={contentRef}>
            <p className="text-red-700 font-bold mb-4 tracking-wide uppercase text-2xl">
              Catering Corner
            </p>
            
            <h2 ref={titleRef} className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8">
              STORY
            </h2>
            
            <div className="space-y-6 mb-10">
              <p ref={el => descriptionRef.current[0] = el} className="text-gray-600 text-lg leading-relaxed">
                We created just simple bridge between you and Creative Caterer "The Catering 
                Corner" and you got the Boom on your event.
              </p>
              
              <p ref={el => descriptionRef.current[1] = el} className="text-gray-600 text-lg leading-relaxed">
                Catering Corner is the place where you can reach the best Caterers aka "कैटरर्स" 
                around you, Interact with them, Request for Quote for your events and choose 
                which one best suit to your budget that too at no cost.
              </p>
            </div>

            <button 
              ref={buttonRef}
              className="bg-red-800 text-white px-8 py-4 rounded-full font-medium hover:bg-red-700 transition-all duration-300"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;