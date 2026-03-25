'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, Layers, Network, ChevronRight, 
  Target, Rocket, ShieldCheck 
} from 'lucide-react';
import { useNavigate } from "react-router-dom";

// Define the new title image asset
const titleImage = "https://res.cloudinary.com/dyxijlh28/image/upload/v1774373583/keevesteel_for_web_om9kej.png";

const carouselImages = [
  // ... same carousel images as before
  "https://res.cloudinary.com/dyxijlh28/image/upload/v1772784195/WCU_INSTITUTE_OF_PRIMARY_CARE_-_PHASE_2_-_W_C_U_HATTIESBURG_MISSISSIPPI_3_t7fqjd.png",
  // [Rest of the array is truncated for brevity]
  "https://res.cloudinary.com/dyxijlh28/image/upload/v1772783565/BOISE_CASCADE-_JACK_TRUSS_-_BOISE_IDAHO_3_qkl3wm.png"
];

const serviceCardImages = {
  structural: "https://res.cloudinary.com/dyxijlh28/image/upload/v1772958799/Screenshot_2026-03-08_140138_nsjmqs.png",
  connections: "https://res.cloudinary.com/dyxijlh28/image/upload/v1774374723/Screenshot_2026-03-24_224030_omnkzf.png",
  misc: "https://res.cloudinary.com/dyxijlh28/image/upload/v1774015603/Screenshot_2026-03-20_193010_yj0a1n.png"
};

const certLogos = {
  sds2: "https://res.cloudinary.com/dyxijlh28/image/upload/v1773563093/SDS2_by_ALLPLAN_is_part_of_the_Nemetschek_Group_vzsw6k.jpg",
  aisc: "https://res.cloudinary.com/dyxijlh28/image/upload/v1773563081/associate_member_logo_stpevr.jpg",
  deta: "https://res.cloudinary.com/dyxijlh28/image/upload/v1773563065/detailer_member_logo_qduwfa.jpg"
};

export default function Home() {
  const [activeHeroImage, setActiveHeroImage] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveHeroImage((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const services = {
    structural: { title: " Steel Detailing of Structural and Miscellaneous Steel", icon: Building2, description: "Innovative, precision driven steel detailing that delivers exceptional accuracy and clear, build ready documentation." },
    connections: { title: "Connecting Engineering", icon: Network, description: "Efficient, code compliant connection designs that enhance structural integrity and streamline both fabrication and erection." },
    misc: { title: "PE Stamping", icon: ShieldCheck, description: "Licensed Professional Engineer (PE) stamping for drawings and calculations—ensuring safety, accuracy, and full compliance with local building codes." }
  };

  return (
  <>
  <style jsx global>{`
    body {
      font-family: 'Trebuchet MS', Arial, sans-serif;
    }
  `}</style>

  <main className="min-h-screen bg-white">
  {/* Hero Section */}
<section className="relative min-h-[115vh] pt-56 pb-20 flex items-center justify-center overflow-hidden bg-white text-slate-900">
 {/* Background Carousel */}
<div className="absolute inset-0 z-0 bg-white"> {/* Added bg-white for borders if image ratio differs */}
  <AnimatePresence mode="wait">
    <motion.img
      key={activeHeroImage}
      src={carouselImages[activeHeroImage]}
      // CHANGED: object-contain ensures the full image is visible
      // CHANGED: Added p-4 or p-10 if you want a "margin" around the image
      className="w-full h-full object-contain absolute inset-0 p-6 md:p-12" 
      initial={{ opacity: 0, scale: 0.95 }} // CHANGED: Start slightly smaller
      animate={{ opacity: 1, scale: 1 }}    // CHANGED: Zoom into full size
      exit={{ opacity: 0 }}
      transition={{ duration: 1.6 }}
    />
  </AnimatePresence>
</div>

  {/* Content */}
  <div className="relative z-40 text-center px-6 max-w-6xl w-full flex flex-col items-center">
    
    {/* TITLE IMAGE - Replaces h1 text */}
    {/* I have scaled the image up to match the massive scale of the original h1 text */}
    <motion.img
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      src={titleImage}
      alt="Keeves Steel"
      
      className="h-auto md:h-24 lg:h-32 xl:h-40 object-contain mb-16" 
    />

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 1 }}
      className="max-w-6xl mx-auto mb-12 text-center"
    >
      <p className="text-xl md:text-2xl font-light text-slate-700 tracking-wide whitespace-nowrap">
        Reimagining Steel Detailing with{" "}
        <span className="text-sky-600 font-semibold">
          Next Level Innovation
        </span>{" "}
        and Absolute Accuracy.
      </p>
    </motion.div>

    {/* Button */}
    <motion.button
      onClick={() => navigate("/projects")}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      className="group relative px-12 py-6 bg-slate-900 border-2 border-slate-900 rounded-3xl font-bold uppercase tracking-widest text-xl text-white hover:bg-slate-800 transition-all duration-500 shadow-2xl"
    >
      <span className="relative z-10 flex items-center gap-3">
        View Work
        <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
      </span>
    </motion.button>

  </div>
</section>


        {/* JOURNEY SECTION - UPDATED TYPOGRAPHY */}
<section className="py-32 px-6 lg:px-8 bg-white">
  <div className="max-w-7xl mx-auto mb-24">
    <div className="grid lg:grid-cols-2 gap-16 items-start">
      <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
        <h2 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold uppercase leading-[0.85] tracking-tight text-slate-900 mb-12">
          OUR <br /><span className="text-sky-700 font-light">JOURNEY</span>
        </h2>
      </motion.div>
      
      <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="space-y-6 max-w-xl text-slate-500 text-lg leading-relaxed">
          <p>Incorporated on <span className="font-bold text-slate-800">August 4, 2021</span>, Keeves Steel was founded with a vision to become a trusted partner in technical and engineering excellence.</p>
          <p>Since then, we have shown steady growth, driven by a talented team and dedicated leadership. We deliver top-notch quality structural steel detailing services designed to empower architects, engineers, and fabricators with unmatched accuracy and efficiency.</p>
          
          <div className="pt-6 border-t border-slate-200">
            {/* Removed 'uppercase' and 'text-sm' classes here */}
            <p className="text-slate-600 font-medium tracking-wide">
              By combining precision craftsmanship with advanced detailing technology, we produce shop drawings, erection plans, and 3D models that accelerate workflows, reduce rework, and keep projects moving smoothly from concept to completion.
            </p>
          </div>
      </motion.div>
    </div>
  </div>

 
          {/* Original Smaller Carousel Styling restored here */}
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="relative flex overflow-hidden -mx-6">
              <motion.div className="flex gap-8 whitespace-nowrap" animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, duration: 70, ease: "linear" }}>
                {[...carouselImages, ...carouselImages].map((src, index) => (
                  <div key={index} className="w-[300px] md:w-[400px] h-[250px] md:h-[300px] flex-shrink-0 rounded-[2rem] overflow-hidden shadow-xl border border-slate-100">
                    <img src={src} alt="Project" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* VISION MISSION VALUES Section */}
        <section id="services" className="py-32 px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20 text-center">
              <h2 className="text-sky-700 font-bold text-sm tracking-[0.4em] uppercase mb-4">Shaping your vision</h2>
              <h3 className="text-4xl lg:text-6xl font-semibold uppercase tracking-tight text-slate-900">Technical Excellence</h3>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-24">
              {Object.entries(services).map(([key, service]) => (
                <motion.div key={key} className="relative group p-10 h-[400px] rounded-[2rem] overflow-hidden flex flex-col justify-end border-2 border-slate-100 hover:border-sky-500 transition-all duration-500">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${serviceCardImages[key]})` }} />
                  <div className="absolute inset-0 bg-slate-900/60 group-hover:bg-slate-900/40" />
                  <div className="relative z-10">
                    <service.icon className="w-12 h-12 mb-6 text-white group-hover:text-sky-400 transition-colors" />
                    <h4 className="text-2xl font-semibold uppercase mb-4 text-white tracking-wider">{service.title}</h4>
                    <p className="text-sm text-white/80">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <motion.div whileHover={{ y: -5 }} className="bg-white p-10 rounded-[2.5rem] shadow-lg border border-slate-100">
                <Target className="text-sky-600 mb-6" size={32} />
                <h4 className="text-2xl font-bold uppercase tracking-tight text-slate-800 mb-6">Our Vision</h4>
                <p className="text-slate-500 text-lg">To be a trusted leader in structural steel detailing by delivering innovative, precise solutions and building strong partnerships.</p>
              </motion.div>

              <motion.div whileHover={{ y: -5 }} className="bg-slate-900 p-10 rounded-[2.5rem] shadow-xl text-white">
                <Rocket className="text-sky-400 mb-6" size={32} />
                <h4 className="text-2xl font-bold uppercase tracking-tight mb-6">Our Mission</h4>
                <p className="text-slate-300 text-lg">To simplify complex steel structures through innovative detailing, exceptional accuracy, and a client focused approach that supports successful construction.</p>
              </motion.div>

              <motion.div whileHover={{ y: -5 }} className="bg-white p-10 rounded-[2.5rem] shadow-lg border border-slate-100">
                <ShieldCheck className="text-sky-600 mb-6" size={32} />
                <h4 className="text-2xl font-bold uppercase tracking-tight text-slate-800 mb-6">Core Values</h4>
                <div className="grid grid-cols-1 gap-4">
                  {['Precision', 'Innovation', 'Integrity', 'Customer Focus'].map((value, i) => (
                    <div key={i} className="flex items-center gap-4 p-3 rounded-xl bg-slate-50 border border-slate-100 transition-colors hover:bg-sky-50">
                      <div className="w-2 h-2 rounded-full bg-sky-500" />
                      <span className="text-slate-700 font-semibold uppercase text-xs tracking-widest">{value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        {/* LICENSES & CERTIFICATIONS SECTION */}
<section className="py-24 px-6 lg:px-8 bg-white border-t border-slate-100">
  <div className="max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      
      {/* Text Content */}
      <div className="max-w-xl">
        <h2 className="text-sky-700 font-bold text-sm tracking-[0.3em] uppercase mb-4">
          Industry Standards
        </h2>
        <h3 className="text-4xl font-semibold uppercase tracking-tight text-slate-900 mb-6">
          Certified Excellence
        </h3>
        <p className="text-slate-500 text-lg leading-relaxed">
          Our commitment to quality is backed by industry-leading certifications. 
          We strictly adhere to AISC standards and utilize advanced detailing 
          technologies to ensure every project meets the highest level of structural integrity.
        </p>
      </div>

      {/* Logo Grid - AISC Fixed at 1.125in, others scaled up */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center justify-items-center">
        
        {/* AISC - Strictly Fixed Size */}
        <motion.div whileHover={{ y: -5 }} className="flex items-center justify-center">
          <img 
            src={certLogos.aisc} 
            alt="AISC Member" 
            className="object-contain"
            style={{ width: '1.125in' }} 
          />
        </motion.div>

        {/* SDS2 - Scaled Larger */}
        <motion.div whileHover={{ y: -5 }} className="flex items-center justify-center">
          <img 
            src={certLogos.sds2} 
            alt="SDS2 Certified" 
            className="object-contain"
            style={{ width: '1.8in' }} 
          />
        </motion.div>

        {/* Third License - Scaled Larger */}
        <motion.div whileHover={{ y: -5 }} className="flex items-center justify-center">
          <img 
            src={certLogos.deta} 
            alt="Professional Certification" 
            className="object-contain"
            style={{ width: '1.125in' }} 
          />
        </motion.div>

      </div>
    </div>
  </div>
</section>
      </main>
    </>
  );
}