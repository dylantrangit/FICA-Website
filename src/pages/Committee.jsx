import SS from '../assets/commitee/Saan Shon.jpg';
import VL from '../assets/commitee/Vivian.JPG';
import AK from '../assets/commitee/Ain.jpg';
import AC from '../assets/commitee/annabelle.avif';
import JS from '../assets/commitee/Jeffrey.jpg';
import MA from '../assets/commitee/muhit.jpeg';
import EL from '../assets/commitee/Evan.JPG';
import OQ from '../assets/commitee/olivia qian.JPEG';
import OK from '../assets/commitee/liv headshot.png';
import NC from '../assets/commitee/Nathans headshot.jpeg';
import JL from '../assets/commitee/Jacquelines headshot.jpg';




export default function Committee() {
  return (
    <div className="w-full min-h-screen">
      {/* Black heading section */}
      <div className="w-full  text-white px-6 py-20 flex justify-center"
      style={{
        background: 'linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(15, 15, 15, 1) 10%, rgba(12, 34, 50, 1) 73%, rgba(13, 64, 102, 1) 100%)'
      }}
      >
        <div className="max-w-3xl text-center animate-fade-in">
          <h2 className="text-4xl font-bold font-poppins">Meet the Committee</h2>
        </div>
      </div>

      {/* White members section with overlap */}
      <div className="w-full bg-white text-black px-6 py-12 mt-[-56px]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {/* President */}
            <div className="flex flex-col items-center">
              <img
                src={SS}
                alt="Saan Shon"
                className="w-32 h-32 rounded-full object-cover mb-4"
                width={96} height={96}
              />
              <p className="text-base font-semibold">Saan Shon</p>
              <p className="text-sm text-gray-500">President</p>
            </div>

            {/* Vice President */}
            <div className="flex flex-col items-center">
              <img
                src={VL}
                alt="Vivian Le"
                className="w-32 h-32 rounded-full object-cover mb-4"
                width={128}
                height={128}
              />
              <p className="text-base font-semibold">Vivian Le</p>
              <p className="text-sm text-gray-500">Vice President</p>
            </div>

            {/* Secretary */}
            <div className="flex flex-col items-center">
              <img
                src={AK}
                alt="Ain Kim"
                className="w-32 h-32 rounded-full object-cover mb-4"
                width={128}
                height={128}
              />
              <p className="text-base font-semibold">Ain Kim</p>
              <p className="text-sm text-gray-500">Secretary</p>
            </div>

            {/* Treasurer */}
            <div className="flex flex-col items-center">
              <img
                src={AC}
                alt="Annabelle Chang"
                className="w-32 h-32 rounded-full object-cover mb-4"
                width={128}
                height={128}
              />
              <p className="text-base font-semibold">Annabelle Chang</p>
              <p className="text-sm text-gray-500">Treasurer</p>
            </div>

            {/* Marketing */}
            <div className="flex flex-col items-center">
              <img
                src={JS}
                alt="Jeffrey Shen"
                className="w-32 h-32 rounded-full object-cover object-[60%_30%] mb-4"
                width={128}
                height={128}
              />              
              <p className="text-base font-semibold">Jeffery Shen</p>
              <p className="text-sm text-gray-500">Marketing Director</p>
            </div>

            {/* Graphics Co-director */}
            <div className="flex flex-col items-center">
              <img
                src={MA}
                alt="Muhit Abdullah"
                className="w-32 h-32 rounded-full object-cover object-[60%_65%] mb-4"
                width={128}
                height={128}
              />
              <p className="text-base font-semibold">Muhit Abdullah</p>
              <p className="text-sm text-gray-500">Graphics Co-Director</p>
            </div>

            {/* Graphics Co-director */}
            <div className="flex flex-col items-center">
              <img
                src={EL}
                alt="Evan Lian"
                className="w-32 h-32 rounded-full object-cover object-[60%_20%] mb-4"
                width={128}
                height={128}
              />
              <p className="text-base font-semibold">Evan Lian</p>
              <p className="text-sm text-gray-500">Graphics Co-Director</p>
            </div>

            {/* Events */}
            <div className="flex flex-col items-center">
              {/* This wrapper defines and clips the circular area */}
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                <img
                  src={OQ}
                  alt="Olivia Qian"
                  className="w-full h-full scale-[2] object-cover object-[50%_20%]"
                />
              </div>
              <p className="text-base font-semibold">Olivia Qian</p>
              <p className="text-sm text-gray-500">Events Director</p>
            </div>

            {/* Partnerships */}
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                <img
                  src={OK}
                  alt="Olivia Kitchen"
                  className="w-full h-full scale-125 object-cover object-[60%_40%]"
                />
              </div>
              <p className="text-base font-semibold">Olivia Kitchen</p>
              <p className="text-sm text-gray-500">Partnerships Director</p>
            </div>

            {/* HR Co-director */}
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                <img
                  src={NC}
                  alt="Nathan Cheung"
                  className="w-full h-full scale-125 object-cover object-[60%_40%]"
                />
              </div>
              <p className="text-base font-semibold">Nathan Cheung</p>
              <p className="text-sm text-gray-500">HR Co-Director</p>
            </div>

            {/* HR Co-director */}
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                <img
                  src={JL}
                  alt="Jacqueline Le"
                  className="w-full h-full scale-125 object-cover object-[60%_40%]"
                />
              </div>
              <p className="text-base font-semibold">Jacqueline Le</p>
              <p className="text-sm text-gray-500">HR Co-Director</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}


