// Committee.jsx (JS-only)

// imports unchanged
import SS from '../assets/commitee/Saan Shon.jpg';
import VL from '../assets/commitee/vivian.jpg';
import AK from '../assets/commitee/ain.jpg';
import AC from '../assets/commitee/annabelle.jpg';
import JS from '../assets/commitee/Jeffrey.jpg';
import MA from '../assets/commitee/muhit.jpg';
import EL from '../assets/commitee/Evan.jpg';
import OQ from '../assets/commitee/olivia qian.JPG';
import OK from '../assets/commitee/liv headshot.jpg';
import NC from '../assets/commitee/Nathans headshot.jpg';
import JL from '../assets/commitee/jacquelines-headshot.jpg';
import FULL from '../assets/commitee/fullcomshot.jpg';

import AL from '../assets/commitee/andrew-li-partnerships-officer.jpg';
import CT from '../assets/commitee/cindy truong - partnerships officer.jpg';
import JZ from '../assets/commitee/jessica zhang - marketing officer.jpg';
import LE from '../assets/commitee/leanne ear - graphics officer.jpg';
import JC from '../assets/commitee/joy-cheng.jpg';
import ML from '../assets/commitee/melissa yu - marketing officer.jpg';
import PK from '../assets/commitee/pritish kumar - marketing officer.jpg';
import RZ from '../assets/commitee/ryan zylstra - partnerships officer.jpg';
import SL from '../assets/commitee/sharon lo - events officer.jpg';
import TL from '../assets/commitee/thea li - graphics officer.jpg';
import GB from '../assets/commitee/gunvir bedi - events officer.jpg';
import { objectPosition } from 'three/tsl';

/** Data-driven teams: Exec → HR → Marketing → Graphics → Events → Partnerships */
const TEAMS = [
  {
    key: 'Executive',
    members: [
      { name: 'Saan Shon', title: 'President', img: SS, roleLevel: 'Director' },
      { name: 'Vivian Le', title: 'Vice President', img: VL, roleLevel: 'Director', objectPos: "60% 40%" },
      { name: 'Ain Kim', title: 'Secretary', img: AK, roleLevel: 'Director', objectPos: "60% 70%" },
      { name: 'Annabelle Chang', title: 'Treasurer', img: AC, roleLevel: 'Director' },
    ],
  },
  {
    key: 'Marketing',
    members: [
      { name: 'Jeffrey Shen', title: 'Marketing Director', img: JS, roleLevel: 'Director', scale: 1.25, objectPos: '50% 30%' },
      { name: 'Jessica Zhang', title: 'Marketing Officer', img: JZ, roleLevel: 'Officer', objectPos: '60% 30%' },
      { name: 'Melissa Yu', title: 'Marketing Officer', img: ML, roleLevel: 'Officer', objectPos: '60% 30%' },
      { name: 'Pritish Kumar', title: 'Marketing Officer', img: PK, roleLevel: 'Officer', objectPos: '60% 30%' },
    ],
  },
  {
    key: 'Graphics',
    members: [
      { name: 'Muhit Abdullah', title: 'Graphics Co-Director', img: MA, roleLevel: 'Director', objectPos: '60% 30%' },
      { name: 'Evan Lian', title: 'Graphics Co-Director', img: EL, roleLevel: 'Director', objectPos: '60% 35%' },
      { name: 'Leanne Ear', title: 'Graphics Officer', img: LE, roleLevel: 'Officer', objectPos: '60% 35%' },
      { name: 'Thea Li', title: 'Graphics Officer', img: TL, roleLevel: 'Officer', objectPos: '60% 35%' },
    ],
  },
  {
    key: 'Events',
    members: [
      { name: 'Olivia Qian', title: 'Events Director', img: OQ, roleLevel: 'Director', scale: 1.15, objectPos: '50% 35%' },
      { name: 'Sharon Lo', title: 'Events Officer', img: SL, roleLevel: 'Officer', scale: 1.15, objectPos: '50% 35%' },
      { name: 'Joy Cheng', title: 'Marketing Officer', img: JC, roleLevel: 'Officer', scale: 2, objectPos: '-14% 50%' },
      { name: 'Gunvir Bedi', title: 'Events Officer', img: GB, roleLevel: 'Officer', scale: 1, objectPos: '50% 35%' },
    ],
  },
  {
    key: 'Partnerships',
    members: [
      { name: 'Olivia Kitchen', title: 'Partnerships Director', img: OK, roleLevel: 'Director', scale: 1.25, objectPos: '60% 40%' },
      { name: 'Andrew Li', title: 'Partnerships Officer', img: AL, roleLevel: 'Officer', scale: 1.25, objectPos: '60% 40%' },
      { name: 'Cindy Truong', title: 'Partnerships Officer', img: CT, roleLevel: 'Officer', scale: 1.25, objectPos: '60% 40%' },
      { name: 'Ryan Zylstra', title: 'Partnerships Officer', img: RZ, roleLevel: 'Officer', scale: 1.25, objectPos: '60% 40%' },
    ],
  },
  {
    key: 'HR',
    members: [
      { name: 'Nathan Cheung', title: 'HR Co-Director', img: NC, roleLevel: 'Director', scale: 1.25, objectPos: '60% 40%' },
      { name: 'Jacqueline Le', title: 'HR Co-Director', img: JL, roleLevel: 'Director', scale: 1.25, objectPos: '60% 40%' },
    ],
  },
];

function MemberCard({ m }) {
  const scale = m.scale ?? 1;
  const objectPos = m.objectPos ?? '50% 50%';

  return (
    <div className="flex flex-col items-center basis-1/3 md:basis-1/4 xl:basis-1/5">
      <div className="w-28 h-28 md:w-32 md:h-32 xl:w-40 xl:h-40 rounded-full overflow-hidden mb-4">
        <img
          src={m.img}
          alt={m.name}
          className="w-full h-full object-cover"
          style={{ transform: `scale(${scale})`, objectPosition: objectPos }}
          loading="lazy"
        />
      </div>
      <p className="text-base font-semibold">{m.name}</p>
      <p className="text-sm text-gray-500">{m.title}</p>
    </div>
  );
}

function TeamBlock({ team }) {
  const directors = team.members.filter(m => m.roleLevel === 'Director');
  const officers = team.members.filter(m => m.roleLevel === 'Officer');
  const ordered = [...directors, ...officers];

  return (
    <section className="w-full">
      {/* Flex container instead of fixed grid */}
      <div className="flex flex-wrap justify-center gap-12 text-center">
        {ordered.map((m, i) => (
          <MemberCard key={`${team.key}-${m.name}-${i}`} m={m} />
        ))}
      </div>

      {/* Minimal separator */}
      <div className="my-10 flex justify-center">
        <div className="h-[2px] w-1/2 bg-blue-200/70 rounded-full" />
      </div>
    </section>
  );
}

export default function Committee() {
  return (
    <div className="w-full min-h-screen">
      {/* Heading */}
      <div
        className="w-full text-white px-6 py-12 flex justify-center"
        style={{
          background:
            'linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(15, 15, 15, 1) 10%, rgba(12, 34, 50, 1) 73%, rgba(13, 64, 102, 1) 100%)',
        }}
      >
        <div className="max-w-3xl text-center animate-fade-in">
          <h2 className="text-4xl font-bold font-poppins mt-8">Meet the Committee</h2>
        </div>
      </div>

      {/* Banner */}
      <div className="w-full">
        <div className="relative w-full h-[55vh] sm:h-[70vh]">
          <img
            src={FULL}
            alt="FICA full committee"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: '50% 61%' }}
            loading="eager"
            fetchpriority="high"
          />
        </div>
      </div>

      {/* Teams */}
      <div className="w-full bg-white text-black px-6 py-12">
        <div className="max-w-6xl mx-auto space-y-2">
          {TEAMS.map((team, idx) => (
            <TeamBlock key={`${team.key}-${idx}`} team={team} />
          ))}
        </div>
      </div>
    </div>
  );
}
