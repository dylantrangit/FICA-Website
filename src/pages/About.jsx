
import { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0); // scroll to top on page load
  }, []);

  return (
    <div className="w-full min-h-screen">
      {/* Black section with heading */}
      <div
        className="w-full text-white px-6 py-20 flex justify-center"
        style={{
          background: 'linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(15, 15, 15, 1) 10%, rgba(12, 34, 50, 1) 73%, rgba(13, 64, 102, 1) 100%)'
        }}
      >
        <div className="max-w-3xl text-center animate-fade-in">
          <h2 className="text-4xl font-bold font-poppins">
            About FICA
          </h2>
        </div>
      </div>
      
      {/* White section with content */}
      <div className="w-full bg-white text-black px-6 py-12 mt-[-56px] flex justify-center">
        <div className="max-w-3xl text-center animate-fade-in">
          <p className="px-6 md:px-24 text-center">
            The <strong>Fashion In Commerce Association (FICA)</strong> is the University of Melbourne's first and only student club dedicated to bridging the gap between fashion and business.
            <br /><br />
            Founded in 2025, FICA is proudly supported by the Faculty of Business and Economics (FBE) and the University of Melbourne Student Union (UMSU).
            <br /><br />
            FICA empowers students from all disciplines to ignite their passion for fashion and business and explore the commercial side of the fashion industry through a range of industry-focused events, networking opportunities, and career development initiatives that connect them directly with professionals.
            <br /><br />
            FICA serves as a collaborative platform to explore and engage with the multifaceted world of fashion and commerce, equipping students with practical experience and meaningful industry insights in preparation for diverse career pathways across the fashion and business landscape.
            <br /><br />
            By merging analytical thinking with creative vision, FICA is more than a student organisation — it is a forward-thinking initiative committed to shaping the next generation of leaders in fashion and business.
          </p>
        </div>
      </div>
    </div>
  );
}


