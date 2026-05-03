import worldMapImg from "@/assets/world-map-presence.png";

const offices = [
  "New Zealand (HQ)",
  "Australia",
  "USA",
  "UAE",
  "India",
];

const WorldMap = () => (
  <div className="rounded-xl overflow-hidden border border-border bg-[hsl(222,47%,11%)] p-6 md:p-10">
    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
      {/* Map */}
      <div className="flex-1 w-full">
        <img
          src={worldMapImg}
          alt="Sirius7 global office locations"
          loading="lazy"
          width={1376}
          height={768}
          className="w-full h-auto rounded-lg"
        />
      </div>

      {/* Legend */}
      <div className="lg:w-72 shrink-0 text-center lg:text-left">
        <p className="text-white/90 text-lg font-display font-semibold mb-5 leading-snug">
          We command a global presence with offices in:
        </p>
        <ul className="space-y-3">
          {offices.map((o) => (
            <li key={o} className="flex items-center gap-3 justify-center lg:justify-start">
              <span className="w-2 h-2 rounded-full bg-secondary shrink-0" />
              <span className="text-white/80 font-medium">{o}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default WorldMap;
