export default function Events() {
  return (
    <div className="w-full min-h-screen">
      {/* Black heading section */}
      <div className="w-full text-white px-6 py-20 flex justify-center"
      style={{
        background: 'linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(15, 15, 15, 1) 10%, rgba(12, 34, 50, 1) 73%, rgba(13, 64, 102, 1) 100%)'
      }}
      >
        <div className="max-w-3xl text-center animate-fade-in">
          <h1 className="text-4xl font-bold font-poppins">Upcoming Events</h1>
        </div>
      </div>

      {/* White content section with overlap */}
      <div className="w-full bg-white text-black px-6 py-12 mt-[-56px] flex justify-center">
        <div className="max-w-3xl text-center animate-fade-in">
          <p className="px-6 md:px-24">
            We're excited to bring you a lineup of workshops, mixers, and networking events that bridge fashion and business.
            <br /><br />
            Stay tuned by following our socials — our first event will be announced soon!
          </p>
        </div>
      </div>
    </div>
  );
}