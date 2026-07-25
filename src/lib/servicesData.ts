export interface ServiceDetailConfig {
  title: string;
  heading: string;
  description: string;
  image: string;
  category: string;
  overview: string[];
  deliverables: string[];
}

export const staticServices: Record<string, ServiceDetailConfig> = {
  'house-construction': {
    title: 'Turnkey House Construction Services Bangalore | Screw Wood',
    heading: 'Turnkey Residential House Construction',
    description: 'A-Grade residential house construction in Bangalore. 100% transparent pricing, 430+ quality checks, and 10-year warranty.',
    image: '/images/bangalore_house_construction.png',
    category: 'Residential Construction',
    overview: [
      'Screw Wood provides complete turnkey house construction solutions for home builders in Bangalore. We handle everything from BBMP plan sanctions, soil testing, and architectural blueprints to RCC framing, brickwork, and luxury finishing.',
      'Our dedicated structural engineers ensure 100% material specification compliance with daily progress tracking via our site dashboard.',
    ],
    deliverables: [
      'Architectural 2D & 3D Floor Plans',
      'BBMP / BDA Plan Sanction Assistance',
      'Quality Material Brand Warranties (JSW Steel, UltraTech Cement)',
      '10-Year Structural Guarantee & Stage Payments',
    ],
  },
  'interior-design': {
    title: 'Custom Home & Commercial Interior Design Bangalore | Screw Wood',
    heading: 'Luxury Home & Commercial Interior Design',
    description: 'Modular kitchens, wardrobes, living room interior design, and turnkey office fitouts delivered in 45 days.',
    image: '/images/bangalore_modern_interior.png',
    category: 'Interior Design',
    overview: [
      'Transform your residential or commercial space with bespoke interior design solutions from Screw Wood.',
      'Using BWP-grade marine plywood, premium Hettich/Blum hardware, and custom 3D visualization, we turn your floor plan into a luxurious living space within a guaranteed 45-day timeline.',
    ],
    deliverables: [
      'Custom Factory-Finished Modular Kitchens',
      'Floor-to-Ceiling Wardrobes & Storage',
      'False Ceiling & Architectural Lighting Layouts',
      '45-Day Guaranteed Delivery with 10-Year Warranty',
    ],
  },
  'commercial-construction': {
    title: 'Commercial Building & Office Construction Contractors Bangalore',
    heading: 'Commercial Building & Office Complex Construction',
    description: 'High-rise commercial complexes, IT park fitouts, and retail store construction in Bangalore.',
    image: '/images/bangalore_commercial_complex.png',
    category: 'Commercial Construction',
    overview: [
      'We deliver fast-track commercial building construction and corporate office fitouts designed for maximum space efficiency and safety compliance.',
      'From post-tensioned slab casting to glass facade installation and fire safety compliance, Screw Wood ensures commercial projects are delivered on schedule.',
    ],
    deliverables: [
      'High-Durability Commercial RCC Structures',
      'Glass Facade & Acoustic Exterior Cladding',
      'BESCOM Power Load Sanctions & HVAC Ducting',
      'Safety & Fire NOC Compliance Documentation',
    ],
  },
};
