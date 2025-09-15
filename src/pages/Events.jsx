// src/pages/Events.jsx
import BAR_NIGHT_2025 from '../assets/bar night.jpg'; 
import PANEL_EVENT_2025 from '../assets/panel event.jpg'; 


function EventCard({ e }) {
  return (
    <article className="group rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition">
      <div className="relative">
        <img
          src={e.image}
          alt={e.alt || e.title}
          className="w-full h-56 md:h-64 object-cover"
          loading="lazy"
        />
        {/* subtle top gradient for text legibility on hover-capable */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
      </div>

      <div className="p-4">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="inline-flex items-center rounded-full bg-sky-100 text-sky-700 text-xs font-medium px-2.5 py-1 border border-sky-200">
            {new Date(e.date).toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' })}
          </span>
          {e.tags?.map((t) => (
            <span key={t} className="inline-flex items-center rounded-full bg-gray-100 text-gray-700 text-xs px-2.5 py-1 border border-gray-200">
              {t}
            </span>
          ))}
        </div>

        <h3 className="text-lg font-semibold">{e.title}</h3>
        {e.location && <p className="text-sm text-gray-500 mt-1">{e.location}</p>}

        {e.description && (
          <p className="text-sm text-gray-600 mt-3 line-clamp-3">{e.description}</p>
        )}

        {e.link && (
          <div className="mt-4">
            <a
              href={e.link}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-sky-700 hover:text-sky-900 underline underline-offset-4"
            >
              View album / post
            </a>
          </div>
        )}
      </div>
    </article>
  );
}

// ---- Data (append as you run more events) ----
/*
{
  id: 'panel-2025-s2',
  title: 'Fashion × Commerce Panel',
  date: '2025-09-20',
  location: 'The Forum, Parkville',
  tags: ['Panel', 'Industry'],
  image: require('../assets/events/panel-2025.jpg'),
  description: 'Leaders across retail, branding, and analytics on breaking into the industry.',
  link: 'https://photos.app.goo.gl/…' // optional
}
  */
const EVENTS = [
    {
    id: 'panel-2025-s2',
    title: 'Beyond the Label',
    date: '2025-08-25',
    location: 'Malaysian Theatre, Parkville',
    tags: ['Panel', 'Industry Figures'],
    image: PANEL_EVENT_2025,
    description: 'Founders of Purgatory, Asha Jasper, and Sunday AUS shared how they built their labels from the ground up in FICAs first panel event',
    link: 'https://www.instagram.com/p/DNhWA6ISIa-/?img_index=1'
  },
  {
    id: 'bar-night-2025-s2',
    title: 'Bar Night Networking',
    date: '2025-07-31',         
    location: 'Snackmonster Bar, Carlton',
    tags: ['Networking', 'Social'],
    image: BAR_NIGHT_2025,
    alt: 'Crowded bar with FICA members networking',
    description:
      'A cozy night of drinks, conversation and connections with students and friends. Full house, great vibes.',
    link: 'https://www.instagram.com/p/DMojuPLS2Lq/', 
  }
];

// ---- Helpers: group by year ----
function groupEventsByYear(events) {
  return events.reduce((acc, e) => {
    const y = new Date(e.date).getFullYear();
    (acc[y] ||= []).push(e);
    return acc;
  }, {});
}

export default function Events() {
  const grouped = groupEventsByYear(EVENTS);
  const years = Object.keys(grouped)
    .map(Number)
    .sort((a, b) => b - a); // newest year first

  return (
    <div className="w-full min-h-screen">
      {/* Header */}
      <div
        className="w-full text-white px-6 py-20 flex justify-center"
        style={{
          background:
            'linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(15, 15, 15, 1) 10%, rgba(12, 34, 50, 1) 73%, rgba(13, 64, 102, 1) 100%)',
        }}
      >
        <div className="max-w-4xl text-center animate-fade-in">
          <h1 className="text-4xl font-bold font-poppins">Events Archive</h1>
          <p className="mt-3 text-white/80">
            Highlights from FICA’s past workshops, mixers, and networking nights.
          </p>
        </div>
      </div>

      {/* Archive */}
      <div className="w-full bg-white text-black px-6 py-12">
        <div className="max-w-6xl mx-auto space-y-14">
          {years.map((year, idx) => (
            <section key={year}>
              {/* Year header + minimal divider */}
              <div className="flex items-center justify-center mb-8">
                <div className="h-[2px] w-1/4 bg-sky-200 rounded-full mr-4" />
                <h2 className="text-2xl font-semibold font-poppins">{year}</h2>
                <div className="h-[2px] w-1/4 bg-sky-200 rounded-full ml-4" />
              </div>

              {/* Grid of events */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {grouped[year].map((e) => (
                  <EventCard key={e.id} e={e} />
                ))}
              </div>

              {/* spacing between years */}
              {idx !== years.length - 1 && (
                <div className="mt-12 flex justify-center">
                  <div className="h-[2px] w-1/2 bg-blue-200/70 rounded-full" />
                </div>
              )}
            </section>
          ))}

          {/* Empty state if no events yet */}
          {years.length === 0 && (
            <div className="text-center text-gray-600">
              <p>No past events yet — check back soon!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
