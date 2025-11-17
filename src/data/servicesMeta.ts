import type { ImageMetadata } from 'astro';

import services1Img from '@assets/images/Services-1.TherapeuticMassage.jpg';
import services2Img from '@assets/images/Services-2.DeepTissueMassage.jpg';
import services3Img from '@assets/images/swedish-massage.jpg';
import services4Img from '@assets/images/Services-4.CuppingMassage.jpg';
import services6Img from '@assets/images/Services-6.LymphaticMassage.jpg';
import services7Img from '@assets/images/Services-7.jpg';
import services8Img from '@assets/images/Services-8.jpg';
import services9Img from '@assets/images/bucal-massage.jpg';
import services10Img from '@assets/images/couples-massage.jpg';
import services11Img from '@assets/images/injury.png';
import services12Img from '@assets/images/hilot.png';

export type ServiceMeta = {
  blurb: string;
  img: ImageMetadata;
  title?: string; // optional  for override
  cta?: string;
};

// Key by the last path segment (slug) from navData children URLs
export const serviceMetaBySlug: Record<string, ServiceMeta> = {
  'deep-tissue': {
    blurb:
      'Targets deeper muscle layers to relieve chronic tension, muscle tightness, and pain.',
    img: services2Img,
  },
  swedish: {
    blurb:
      'A gentle, full-body massage designed to reduce stress, ease tension, and promote overall relaxation.',
    img: services3Img,
  },
  prenatal: {
    blurb:
      'A soothing massage tailored to the needs of expectant mothers to ease discomfort and support prenatal wellness.',
    img: services1Img,
  },
  cupping: {
    blurb:
      'An ancient therapy using suction cups to improve circulation, relieve muscle tension, and promote healing.',
    img: services4Img,
  },
  sports: {
    blurb:
      'Focused therapy for athletes to enhance performance, prevent injury, and aid recovery.',
    img: services6Img,
  },
  craniosacral: {
    blurb:
      'A light-touch technique that releases tension in the central nervous system to improve overall health and well-being.',
    img: services7Img,
  },
  mva: {
    blurb:
      'Therapeutic treatment to address pain and soft tissue injuries resulting from car accidents, often covered by insurance.',
    img: services8Img,
  },
  'bucal-massage': {
    blurb: 'Gentle facial and jaw therapy to relieve tension and improve circulation.',
    img: services9Img,
  },
  'couples-massage': {
    blurb:
      'Relaxing side-by-side massage experience for you and your partner.',
    img: services10Img,
  },
  'injury-recovery-massage': {
    blurb: 'Targeted therapy to aid healing, reduce pain, and restore mobility.',
    img: services11Img,
  },
  'filipino-oil-massage': {
    blurb:
      'Traditional Filipino massage using local Filipino warm oils (e.g., Pau d’Arco) to relax muscles and promote wellness.',
    img: services12Img,
  },
};

