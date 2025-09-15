import { Link } from 'react-router-dom';
import BOBBY_IMG from '../assets/sponsors/bobby.jpg'; // put your Bobby image here

export default function Sponsors() {
  return (
    <div className="w-full min-h-screen">
      {/* Black header section */}
      <div
        className="w-full text-white px-6 py-20 flex justify-center"
        style={{
          background:
            'linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(15, 15, 15, 1) 10%, rgba(12, 34, 50, 1) 73%, rgba(13, 64, 102, 1) 100%)',
        }}
      >
        <div className="max-w-3xl text-center animate-fade-in">
          <h1 className="text-4xl font-bold font-poppins">Our Sponsors</h1>
        </div>
      </div>

      {/* White content section */}
      <div className="w-full bg-white text-black px-6 py-12 mt-[-56px] flex justify-center">
        <div className="max-w-4xl text-center animate-fade-in">
          <p className="mb-10">
            FICA is proud to be supported by brands that share our vision of bridging fashion and business.
          </p>

          {/* Sponsor grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mb-12">
            {/* Bobby card */}
            <div className="flex flex-col items-center text-center">
              <div className="w-full overflow-hidden rounded-2xl shadow">
                <img
                  src={BOBBY_IMG}
                  alt="Bobby Soda – Strawberries & Cream"
                  className="w-full h-64 object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold mt-4">Bobby Soda</h3>
              <p className="text-sm text-gray-600 mt-2">
                A better-for-you soda brand with bold flavours and natural ingredients. Proud sponsor of our{' '}
                <em>Beyond the Label</em> panel night.
              </p>
              <a
                href="https://drinkbobby.com" // external site
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-sky-700 hover:text-sky-900 underline underline-offset-4 text-sm"
              >
                Visit Bobby
              </a>
            </div>
          </div>

          {/* Call to action (from original) */}
          <p className="mb-6">
            FICA is currently seeking sponsors and partners to help empower the next generation of
            fashion-business leaders.
          </p>
          <p>
            If you’re interested in sponsoring or collaborating with us, please{' '}
            <Link to="/contact" className="text-blue-600 underline">
              get in touch
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
