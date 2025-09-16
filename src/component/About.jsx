import React, { useEffect, useRef } from "react";
import { Utensils, Users, Award, ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const statsRef = useRef([]);
  const buttonRef = useRef(null);
  const imageRefs = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
    )
      .fromTo(
        descriptionRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.5"
      )
      .fromTo(
        statsRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.2, ease: "power2.out" },
        "-=0.3"
      )
      .fromTo(
        buttonRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" },
        "-=0.2"
      );

    gsap.fromTo(
      imageRefs.current,
      { y: 60, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 2,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  const stats = [
    {
      icon: <Utensils className="w-12 h-12 text-orange-700" />,
      number: "25 Years of",
      label: "Experience",
    },
    {
      icon: <Users className="w-12 h-12 text-orange-700" />,
      number: "2000+ Successful",
      label: "Marriages",
    },
    {
      icon: <Award className="w-12 h-12 text-orange-700" />,
      number: "98% Repeated",
      label: "Customers",
    },
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <video
                ref={(el) => (imageRefs.current[3] = el)}
                src="https://www.pexels.com/download/video/852122/"
                className="w-full h-72 object-cover rounded-lg"
                autoPlay
                muted
                loop
                playsInline
              />
             <video
                ref={(el) => (imageRefs.current[3] = el)}
                src="https://www.pexels.com/download/video/2882100/"
                className="w-full h-72 object-cover rounded-lg"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
            <div className="mt-8 space-y-4">
              <video
                ref={(el) => (imageRefs.current[3] = el)}
                src="https://www.pexels.com/download/video/3196344/"
                className="w-full h-72 object-cover rounded-lg"
                autoPlay
                muted
                loop
                playsInline
              />
              <video
                ref={(el) => (imageRefs.current[3] = el)}
                src="https://www.pexels.com/download/video/3015488/"
                className="w-full h-72 object-cover rounded-lg"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          </div>

          <div className="ml-12 max-w-xl">
            <p className="text-red-800 font-bold mb-4 tracking-wide uppercase text-lg">
              About Us
            </p>

            <h2
              ref={titleRef}
              className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              Elevating Your Events with Exceptional Food.
            </h2>

            <p
              ref={descriptionRef}
              className="text-gray-600 text-lg font-medium leading-relaxed mb-12"
            >
              Taj Taazagi Catters is The Place where Food is Celebrated over 25
              Years. We Love to Create Unforgettable Culinary Experiences.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  ref={(el) => (statsRef.current[index] = el)}
                  className="text-center group"
                >
                  <div className="flex justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">
                    {stat.number}
                  </h3>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>

            <button
              ref={buttonRef}
              className="bg-red-800 text-white px-8 py-4 rounded-full font-medium hover:bg-red-700 transition-all duration-300 flex items-center group"
            >
              More About Us
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
