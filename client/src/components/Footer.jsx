import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { NavLink } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="bg-black text-white pt-16 pb-10" 
      style={{ fontFamily: "'Trebuchet MS', Arial, sans-serif" }}
    >
      <div className="max-w-full mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-6 gap-2 mb-16">
          
          {/* Column 1: Brand & Slogan */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div className="bg-white p-2 w-fit">
              <img 
                src="https://res.cloudinary.com/dyxijlh28/image/upload/v1773410357/keevesteel_logo_big_ljqgbz.png" 
                alt="Keeves Steel" 
                className="h-10 w-auto object-contain"
              />
            </div>
            <div className="space-y-1">
              <p className="text-[15px] font-normal leading-snug text-slate-300">
                Reimagining Steel Detailing with Next Level Innovation and Absolute Accuracy.
              </p>
              <p className="text-[15px] font-normal leading-snug text-slate-300">
                Precision in every joint, perfection in every project.
              </p>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:col-span-1">
            <h4 className="font-bold mb-6 uppercase tracking-[0.2em] text-[11px] text-slate-100">Navigation</h4>
            <ul className="flex flex-col gap-3 text-slate-400 text-sm"> {/* text-sm is 14px */}
              <li><NavLink to="/" className="hover:text-white transition-colors">Home</NavLink></li>
              <li><NavLink to="/about" className="hover:text-white transition-colors">About Us</NavLink></li>
              <li><NavLink to="/projects" className="hover:text-white transition-colors">Projects</NavLink></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-1">
            <h4 className="font-bold mb-6 uppercase tracking-[0.2em] text-[11px] text-slate-100">Services</h4>
            <ul className="flex flex-col gap-3 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Structural Detailing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Connection Design</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Miscellaneous Steel</a></li>
              <li><a href="#" className="hover:text-white transition-colors">BOM Generation</a></li>
            </ul>
          </div>

          {/* Column 4 & 5: Office Sections */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* USA Office */}
<div className="flex flex-col gap-4">
  <h4 className="font-bold uppercase tracking-[0.2em] text-[11px] text-slate-100">USA Office</h4>
  <div className="text-[13px] font-normal space-y-3 text-slate-400">
    <div className="flex gap-2">
      <MapPin size={14} className="text-sky-500 shrink-0 mt-0.5" />
      <p className="leading-relaxed">
  Keeves Steel<br/>
  <span className="whitespace-nowrap">
    3000 S Hulen St, Ste 124, PMB 2008
  </span><br/>
  Fort Worth, TX 76109
</p>
    </div>
    <div className="flex items-center gap-2 whitespace-nowrap">
      <div className="w-1 h-1 bg-sky-500 rounded-full" />
      <p>Office: +91 90192 60426,<br/> Cell: 832-210-1281</p>
    </div>
    <div className="flex items-center gap-2">
      <div className="w-1 h-1 bg-sky-500 rounded-full" />
      <a href="mailto:keeves@keevessteel.com" className="hover:text-white transition-colors underline underline-offset-4">keeves@keevessteel.com</a>
    </div>
  </div>
</div>


            {/* India Office */}
            <div className="flex flex-col gap-4">
              <h4 className="font-bold uppercase tracking-[0.2em] text-[11px] text-slate-100">India Office</h4>
              <div className="text-[13px] font-normal space-y-3 text-slate-400">
                <div className="flex gap-2">
                  <MapPin size={14} className="text-sky-500 shrink-0 mt-0.5" />
                  <p className="leading-relaxed">Keeves Steel Private Limited<br/>#210-211, Citadel Mindspace, Kadri Hills,Yeyyadi, Mangaluru, Karnataka 575008</p>
                </div>
                <div className="flex flex-col gap-1.5 ml-5 whitespace-nowrap">
                  <p>Office: +91 90192 60426</p>
                  <p>Cell: 888 483 7002</p>
                  <a href="mailto:keeves@keevessteel.com" className="hover:text-white transition-colors underline underline-offset-4">keeves@keevessteel.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-[10px] font-normal uppercase tracking-[0.3em]">
          <p>© {currentYear} KEEVES STEEL. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <NavLink to="/privacy" className="hover:text-white transition-colors">Privacy Policy</NavLink>
            <NavLink to="/terms" className="hover:text-white transition-colors">Terms of Service</NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;