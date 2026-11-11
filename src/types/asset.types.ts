/// <reference types="geojson" />
export type DamageLevel = 'no_damage' | 'minor' | 'major' | 'destroyed';
export type VerificationStatus = 'ai_proposed' | 'under_review' | 'field_task' | 'verified';

export interface Asset {
  id: string;
  type: 'building' | 'road' | 'facility';
  sector: string;
  geom: GeoJSON.Geometry;
  area_m2: number;
  h3_index: string;
  pcode: string;
}

export interface DamageAssessment {
  id: number;
  asset_id: string;
  ai_class: DamageLevel;
  ai_confidence: number;
  status: VerificationStatus;
  verified_class?: DamageLevel;
  engineer_notes?: string;
}