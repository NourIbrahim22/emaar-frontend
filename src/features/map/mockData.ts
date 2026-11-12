import type { FeatureCollection, Polygon } from 'geojson';

export const mockDamageData: FeatureCollection<Polygon> = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {
        id: 'BLD-001',
        name: 'مبنى سكني - حي الجلوم',
        damage_level: 'destroyed',
        confidence: 0.92,
      },
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [37.1400, 36.2100],
          [37.1410, 36.2100],
          [37.1410, 36.2110],
          [37.1400, 36.2110],
          [37.1400, 36.2100],
        ]],
      },
    },
    {
      type: 'Feature',
      properties: {
        id: 'BLD-002',
        name: 'مدرسة - حي الجلوم',
        damage_level: 'destroyed',
        confidence: 0.88,
      },
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [37.1420, 36.2120],
          [37.1430, 36.2120],
          [37.1430, 36.2130],
          [37.1420, 36.2130],
          [37.1420, 36.2120],
        ]],
      },
    },

    {
      type: 'Feature',
      properties: {
        id: 'BLD-003',
        name: 'مستشفى - حي الجلوم',
        damage_level: 'major',
        confidence: 0.75,
      },
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [37.1450, 36.2150],
          [37.1465, 36.2150],
          [37.1465, 36.2165],
          [37.1450, 36.2165],
          [37.1450, 36.2150],
        ]],
      },
    },

    {
      type: 'Feature',
      properties: {
        id: 'BLD-004',
        name: 'مبنى سكني - حي الجلوم',
        damage_level: 'major',
        confidence: 0.68,
      },
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [37.1480, 36.2180],
          [37.1490, 36.2180],
          [37.1490, 36.2190],
          [37.1480, 36.2190],
          [37.1480, 36.2180],
        ]],
      },
    },

    {
      type: 'Feature',
      properties: {
        id: 'BLD-005',
        name: 'مبنى سكني - حي الجلوم',
        damage_level: 'no_damage',
        confidence: 0.95,
      },
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [37.1510, 36.2210],
          [37.1520, 36.2210],
          [37.1520, 36.2220],
          [37.1510, 36.2220],
          [37.1510, 36.2210],
        ]],
      },
    },
  ],
};