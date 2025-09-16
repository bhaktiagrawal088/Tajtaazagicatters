import React, { useEffect, useRef } from "react";
import { CircleArrowOutUpRight } from "lucide-react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const Hero = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    const phrases = [
      "Savor the Goodness, Celebrate the Flavor!",
      "Taste the Purity, Love the Flavor!",
      "Bringing Tradition to your Table",
      "Memories Served Fresh",
    ];

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    phrases.forEach((text) => {
      tl.to(titleRef.current, {
        duration: text.length * 0.2, 
        text: text,
        ease: "none",
      })
        .to(titleRef.current, { opacity: 0, duration: 0.5, delay: 1 })
        .set(titleRef.current, { text: "", opacity: 1 });
    });
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <p className="text-orange-200 text-2xl font-medium mb-6 tracking-wide">
          Welcome to Taj Taazagi Catters
        </p>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-8 text-white">
          <span ref={titleRef}></span>
          <span className="animate-pulse">|</span>
        </h1>

        <p className="text-xl sm:text-2xl font-medium mb-12 leading-relaxed max-w-3xl mx-auto">
          We are the top vegetarian wedding caterer in Agra. We have completed
          over 2,000+ weddings, supported by a professional team of 340 members.
        </p>

        <button className="bg-red-800 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-red-700 transition-all duration-300 flex items-center mx-auto group">
          Explore
          <CircleArrowOutUpRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
