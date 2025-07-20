import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Committee from './pages/Committee';
import Events from './pages/Events';
import Sponsors from './pages/Sponsors';
import Contact from './pages/Contact';


// function updateVh() {
//   // 1vh = 1% of the viewport height
//   document.documentElement.style.setProperty(
//     '--vh',
//     `${window.innerHeight * 0.01}px`
//   );
// }

function updateVh() {
  requestAnimationFrame(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });
}

export default function App() {
  useEffect(() => {
    updateVh();
    window.addEventListener('resize', updateVh);
    return () => window.removeEventListener('resize', updateVh);
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/committee" element={<Committee />} />
        <Route path="/events" element={<Events />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}



// export default function App() {
//   useEffect(() => {
//     updateVh();
//     window.addEventListener('resize', updateVh);
//     return () => window.removeEventListener('resize', updateVh);
//   }, []);

//   return (
//   <>
//     {/* <div className="absolute left-1/2 top-0 h-screen border-l-2 border-red-500 z-[9999] pointer-events-none" />
//     <div className="absolute top-1/2 left-0 w-screen border-t-2 border-blue-500 z-[9999] pointer-events-none" />
//     <div className="absolute top-[5.5%] left-0 w-screen border-t-2 border-green-400 z-[9999] pointer-events-none" /> */}
    
//     <Navbar />
//     <div className="relative w-full full-vh bg-black overflow-hidden contain">
 
//       <div className="absolute inset-0 will-change-transform transform-gpu" >
//         <Beams
//           beamWidth={2.3}
//           beamHeight={25}
//           beamNumber={46}
//           lightColor="#69b9f2"
//           speed={3.3}
//           noiseIntensity={1.75}
//           scale={0.2}
//           rotation={50}
//         />
//       </div>

//       <div className="relative flex flex-col items-center justify-center min-h-[90vh] pt-[5vh] pb-[5vh] w-full z-50 space-y-4">
//         <h1
//           className="
//             text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
//             font-bold font-poppins drop-shadow-lg text-white
//           "
//         >
//           FICA
//         </h1>
//         <p
//           className="
//             text-xs sm:text-sm md:text-base lg:text-lg 
//             text-gray-300 font-sans
//           "
//         >
//           Transforming Fashion Through Business Excellence.
//         </p>
//       </div>
//     </div>

//   </>
// );

// }