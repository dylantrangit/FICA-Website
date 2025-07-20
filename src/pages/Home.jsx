import Beams from '../components/Beams';

export default function Home() {
  return (
    <div className="relative w-full full-vh bg-black overflow-hidden contain">
      <div className="absolute inset-0 will-change-transform transform-gpu">
        <Beams
          beamWidth={2.3}
          beamHeight={25}
          beamNumber={46}
          lightColor="#69b9f2"
          speed={3.3}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={50}
        />
      </div>

      <div className="relative flex flex-col items-center justify-center min-h-[90vh] pt-[5vh] pb-[5vh] w-full z-50 space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-poppins drop-shadow-lg text-white">
          FICA
        </h1>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 font-sans">
          Transforming Fashion Through Business Excellence.
        </p>
      </div>
    </div>
  );
}


// import Beams from '../components/Beams';

// export default function Home() {
//   return (
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

    
//     );
// }