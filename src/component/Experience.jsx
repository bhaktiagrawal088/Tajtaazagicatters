import React, { useEffect, useRef } from "react";
import { Calendar, MenuSquare, Users, Heart } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const statsRef = useRef([]);

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
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
    ).fromTo(
      statsRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power2.out" },
      "-=0.3"
    );

    statsRef.current.forEach((el) => {
      if (el) {
        const numberEl = el.querySelector(".stat-number");
        const finalNumber = numberEl.dataset.final; 

        gsap.fromTo(
          numberEl,
          { textContent: 0 },
          {
            textContent: finalNumber,
            duration: 4,
            ease: "power2.out",
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });
  }, []);

  const stats = [
    {
      icon: <Calendar className="w-8 h-8 text-red-700" />,
      title: "Years Of Excellence",
      number: "25",
      suffix: "+",
    },
    {
      icon: <MenuSquare className="w-8 h-8 text-red-700" />,
      title: "Menu Options",
      number: "250",
      suffix: "+",
    },
    {
      icon: <Users className="w-8 h-8 text-red-700" />,
      title: "Staff",
      number: "340",
      suffix: "",
    },
    {
      icon: <Heart className="w-8 h-8 text-red-700" />,
      title: "Happy Foodies",
      number: "125",
      suffix: "K",
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <p
            ref={titleRef}
            className="text-red-800 font-bold text-2xl mb-8 tracking-wide uppercase"
          >
            Experience....
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              ref={(el) => (statsRef.current[index] = el)}
              className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>

              <h3 className="font-medium text-gray-700 mb-3 text-sm">
                {stat.title}
              </h3>

              <div className="flex items-baseline justify-center">
                {/* Start from 0, real value in data-final */}
                <span
                  className="stat-number text-4xl font-bold text-gray-900"
                  data-final={stat.number}
                >
                  0
                </span>
                <span className="text-2xl font-bold text-red-700 ml-1">
                  {stat.suffix}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
