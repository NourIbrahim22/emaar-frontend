import syriaMap from '../../assets/syria-map.jpg';
import type { FeatureCollection, Polygon } from 'geojson';


const damageZones: FeatureCollection<Polygon> = {
  type: 'FeatureCollection',
  features: [

    {
      type: 'Feature',
      properties: { name: 'حلب', damage_level: 'destroyed' },
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [37.0, 36.2], [37.5, 36.2], [37.5, 36.7], [37.0, 36.7], [37.0, 36.2],
        ]],
      },
    },
   
    {
      type: 'Feature',
      properties: { name: 'دمشق', damage_level: 'minor' },
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [36.2, 33.4], [36.4, 33.4], [36.4, 33.6], [36.2, 33.6], [36.2, 33.4],
        ]],
      },
    },
  
    {
      type: 'Feature',
      properties: { name: 'حمص', damage_level: 'no_damage' },
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [36.6, 34.7], [36.9, 34.7], [36.9, 35.0], [36.6, 35.0], [36.6, 34.7],
        ]],
      },
    },
  ],
};

export default function StaticMap() {
  return (
    <div className="relative w-full h-[600px] bg-slate-50 rounded-xl overflow-hidden border border-slate-200">
    
      <img
        src={syriaMap}
        alt="خريطة سوريا"
        className="w-full h-full object-contain"
      />

      <svg
        viewBox="0 0 1000 1000"
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ mixBlendMode: 'multiply' }}
      >
        {damageZones.features.map((feature, index) => {
          const damageLevel = feature.properties?.damage_level;
          const fillColor =
            damageLevel === 'destroyed' ? '#EF4444' :
            damageLevel === 'minor' ? '#3B82F6' :     
            '#10B981';                                

    
          const coords = feature.geometry.coordinates[0];
          const points = coords.map(([lng, lat]) => `${lng * 10},${lat * 10}`).join(' ');

          return (
            <polygon
              key={index}
              points={points}
              fill={fillColor}
              fillOpacity={0.6}
              stroke="#1B2A4A"
              strokeWidth="2"
            />
          );
        })}
      </svg>

      <div className="absolute bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg border border-slate-200">
        <h4 className="font-bold text-slate-800 mb-2 text-sm">دليل الألوان</h4>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded bg-red-500"></span>
            <span>مدمر كلياً</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded bg-blue-500"></span>
            <span>متضرر قليلاً</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded bg-green-500"></span>
            <span>سليم</span>
          </div>
        </div>
      </div>
    </div>
  );
}