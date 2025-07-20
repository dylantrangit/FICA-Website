import { Link } from 'react-router-dom';

export default function Sponsors() {
  return (
    <div className="w-full min-h-screen">
      {/* Black header section */}
      <div className="w-full text-white px-6 py-20 flex justify-center"
      style={{
        background: 'linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(15, 15, 15, 1) 10%, rgba(12, 34, 50, 1) 73%, rgba(13, 64, 102, 1) 100%)'
      }}
      >
        <div className="max-w-3xl text-center animate-fade-in">
          <h1 className="text-4xl font-bold font-poppins">Our Sponsors</h1>
        </div>
      </div>

      {/* White content section with overlap */}
      <div className="w-full bg-white text-black px-6 py-12 mt-[-56px] flex justify-center">
        <div className="max-w-2xl text-center animate-fade-in">
          <p className="mb-6">
            FICA is currently seeking sponsors and partners to help empower the next generation of fashion-business leaders.
          </p>
          <p>
            If you’re interested in sponsoring or collaborating with us, please{' '}
            <Link to="/contact" className="text-blue-600 underline">get in touch</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
