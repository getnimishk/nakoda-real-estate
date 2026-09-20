/**
 * Nakoda Real Estate - Mandate & Partner Projects Data Layer
 *
 * Curated projects from reputable Indore developers, consulted, marketed
 * and advised by Nakoda Real Estate with 0% brokerage for homebuyers.
 */

export const PROJECTS_DATA = [
  {
    id: "nakoda-solitaire",
    slug: "nakoda-solitaire",
    name: "Solitaire Residences",
    developer: "Partner Developer (Marketed by Nakoda Real Estate)",
    tagline: "Exclusive 3 & 4 BHK Luxury Residences in Nipania",
    location: "Nipania Main Road, Indore",
    microLocation: "Near Bombay Hospital & MR-10 Corridor",
    status: "ongoing", // 'ongoing' | 'upcoming' | 'completed'
    statusLabel: "Under Construction",
    category: "Luxury Residential",
    heroImage: "/assets/images/hero_exterior.jpg",
    featuredImage: "/assets/images/hero_exterior.jpg",
    isFeatured: true,
    description: "An intimate, low-density luxury residential development in the heart of Nipania, Indore. Featuring spacious 3-side open residences, dual-aspect cross ventilation, private corner balconies, and dedicated floor-by-floor privacy. Marketed exclusively with zero brokerage for direct buyers through Nakoda Real Estate.",
    conceptDisclaimer: "Architectural renderings and interior visualizations shown are design representations for illustrative purposes.",
    reraNumber: "[RERA REGISTRATION NUMBER: MP RERA VERIFIED / DETAILS AVAILABLE ON ADVISORY VISIT]",
    possession: "[Possession Target: Available on Inquiry]",
    totalTowers: "1 Landmark Tower",
    totalUnits: "[Limited Low-Density Community]",
    configurations: [
      {
        type: "3 BHK Luxury",
        carpetArea: "1,650 – 1,850 sq.ft. (approx.)",
        superArea: "2,250 – 2,500 sq.ft.",
        balconies: "2 Panoramic Balconies",
        bathrooms: "3 En-suite Baths + Powder Room"
      },
      {
        type: "4 BHK Royal Grand",
        carpetArea: "2,200 – 2,450 sq.ft. (approx.)",
        superArea: "3,100 – 3,400 sq.ft.",
        balconies: "3 Deep Terraces",
        bathrooms: "4 En-suite Baths + Maid's Quarters"
      }
    ],
    highlights: [
      { title: "Low-Density Privacy", desc: "Maximum 2 residences per floor lobby for elevated visual and acoustic privacy." },
      { title: "3-Side Open Living", desc: "Designed for natural cross-breeze and abundant natural Indore sunlight." },
      { title: "Grand Ceiling Heights", desc: "Spacious vertical dimensions creating an airy, villa-like feeling in an apartment." },
      { title: "0% Brokerage", desc: "Pay zero brokerage when purchasing fresh developer inventory through Nakoda Real Estate." },
      { title: "Vastu Compliant Orientations", desc: "Planned with positive energetic orientations and East/North primary entries." },
      { title: "Multi-Tier Security", desc: "24/7 RFID gated access, visitor management, and CCTV coverage across common areas." }
    ],
    amenities: [
      { name: "Residents' Clubhouse", icon: "clubhouse", desc: "Community lounge, indoor recreation, and banquet hall.", image: "/assets/images/clubhouse_pool.jpg" },
      { name: "Swimming Pool & Deck", icon: "pool", desc: "Temperature-moderated swimming pool with wooden sun deck.", image: "/assets/images/clubhouse_pool.jpg" },
      { name: "Landscaped Podium Garden", icon: "garden", desc: "Vehicular-free pedestrian walkways, Zen garden, and reflexology track.", image: "/assets/images/nipania_aerial.jpg" },
      { name: "Fitness & Wellness Center", icon: "fitness", desc: "Fully equipped gymnasium with yoga and meditation deck.", image: "/assets/images/clubhouse_pool.jpg" },
      { name: "Children's Creative Play Area", icon: "kids", desc: "Cushioned outdoor playground and indoor activity corner.", image: "/assets/images/nipania_aerial.jpg" },
      { name: "EV Vehicle Charging", icon: "ev", desc: "Dedicated EV charging bays in reserved basement parking.", image: "/assets/images/hero_exterior.jpg" }
    ],
    gallery: [
      { url: "/assets/images/hero_exterior.jpg", caption: "Twilight Architectural View of Facade and Entrance" },
      { url: "/assets/images/interior_living.jpg", caption: "Expansive Living Room opening to Deep Terrace" },
      { url: "/assets/images/clubhouse_pool.jpg", caption: "Clubhouse and Reflected Pool Lounge" },
      { url: "/assets/images/master_bedroom.jpg", caption: "Master Bedroom Suite with Natural Light" },
      { url: "/assets/images/facade_daylight.jpg", caption: "Contemporary Stone and Glass Exterior Architecture" },
      { url: "/assets/images/nipania_aerial.jpg", caption: "Lush Green Surroundings in Nipania" }
    ],
    floorPlans: [
      {
        title: "3 BHK Luxury Residence",
        config: "3 BHK + 3T + 2 Balconies",
        area: "1,750 sq.ft. Carpet",
        description: "Expansive formal living and dining area with seamless access to private sunset terrace.",
        specs: ["Master Bedroom with walk-in wardrobe zone", "Kitchen with dry utility balcony", "Independent foyer for privacy"]
      },
      {
        title: "4 BHK Royal Grand Residence",
        config: "4 BHK + 4T + Servant Quarters",
        area: "2,350 sq.ft. Carpet",
        description: "Grand master suite, dual family lounges, and oversized entertainer's deck overlooking greenery.",
        specs: ["Dual master suites with luxury ensuite", "Separate staff room with private access", "Corner residence with 3-side panoramic views"]
      }
    ],
    locationAdvantages: [
      { landmark: "Bombay Hospital & Ring Road", distance: "4-6 minutes", category: "Healthcare" },
      { landmark: "Vijay Nagar Commercial Hub & C21 Mall", distance: "7-10 minutes", category: "Business & Shopping" },
      { landmark: "MR-10 & MR-11 Arterial Corridors", distance: "2-3 minutes", category: "Connectivity" },
      { landmark: "Delhi Public School (DPS) & Shishukunj", distance: "8-12 minutes", category: "Education" },
      { landmark: "Phoenix Citadel & Eastern Bypass", distance: "6-8 minutes", category: "Retail & Transit" },
      { landmark: "Indore International Airport", distance: "25-30 minutes via Super Corridor", category: "Transit" }
    ],
    brochureUrl: "",
    constructionTimeline: [
      { stage: "Substructure & Foundation", status: "Completed", note: "Deep piling and RCC basement slab completed." },
      { stage: "Superstructure Framing", status: "Ongoing", note: "Upper residential floor casting underway." },
      { stage: "Brickwork & Internal Plaster", status: "Upcoming", note: "Scheduled post structure completion." },
      { stage: "Services & Electrical Conduit", status: "Upcoming", note: "Dual-circuit copper ducting and plumbing." },
      { stage: "Finishing & Landscaping", status: "Upcoming", note: "Final architectural finishes and facade treatment." }
    ]
  },
  {
    id: "nakoda-terraces",
    slug: "nakoda-terraces",
    name: "Terraces on MR-11",
    developer: "Partner Developer (Advised by Nakoda Real Estate)",
    tagline: "Boutique 3 BHK Garden Residences",
    location: "MR-11 Connecting Road, Nipania, Indore",
    microLocation: "Near MR-11 Link Road",
    status: "ongoing",
    statusLabel: "Under Construction",
    category: "Boutique Residential",
    heroImage: "/assets/images/facade_daylight.jpg",
    featuredImage: "/assets/images/facade_daylight.jpg",
    isFeatured: true,
    description: "An architectural statement in boutique living on MR-11. Featuring limited-edition 3 BHK residences with oversized wrap-around garden terraces, contemporary clay brick accents, and rapid connectivity to Vijay Nagar and the bypass.",
    conceptDisclaimer: "Architectural concept rendering for partner project.",
    reraNumber: "[MP RERA APPLICATION PENDING / VERIFIED ON ADVISORY REQUEST]",
    possession: "[Possession Target: Available on Inquiry]",
    totalTowers: "1 Boutique Tower",
    totalUnits: "24 Exclusive Units",
    configurations: [
      {
        type: "3 BHK Garden Terrace",
        carpetArea: "1,520 – 1,680 sq.ft.",
        superArea: "2,100 – 2,300 sq.ft.",
        balconies: "Wrap-around Balcony",
        bathrooms: "3 Bathrooms"
      }
    ],
    highlights: [
      { title: "Boutique Low Density", desc: "Only 24 families in an exclusive community setting." },
      { title: "Wrap-Around Green Terraces", desc: "Extensive private balcony garden space for every home." },
      { title: "Direct MR-11 Access", desc: "Immediate access to Indore's prime northern-eastern link." }
    ],
    amenities: [
      { name: "Rooftop Stargazing Deck", icon: "garden", desc: "Sky lounge with seating and landscaped greenery.", image: "/assets/images/nipania_aerial.jpg" },
      { name: "Fitness Suite", icon: "fitness", desc: "Cardio and strength training machines.", image: "/assets/images/clubhouse_pool.jpg" },
      { name: "Covered Parking", icon: "parking", desc: "Dedicated covered vehicular parking for every flat.", image: "/assets/images/facade_daylight.jpg" }
    ],
    gallery: [
      { url: "/assets/images/facade_daylight.jpg", caption: "Daytime Facade of Terraces on MR-11" },
      { url: "/assets/images/interior_living.jpg", caption: "Balcony Living Room View" }
    ],
    floorPlans: [
      {
        title: "3 BHK Garden Terrace Residence",
        config: "3 BHK + 3T + Terrace",
        area: "1,580 sq.ft. Carpet",
        description: "Efficient floor plate maximizing usable living carpet area.",
        specs: ["Spacious drawing room", "Integrated dining with kitchen access", "Corner master suite"]
      }
    ],
    locationAdvantages: [
      { landmark: "MR-11 Main Road", distance: "Direct Access", category: "Transit" },
      { landmark: "Vijay Nagar Intersection", distance: "5-7 minutes", category: "Commercial" },
      { landmark: "Bombay Hospital", distance: "5 minutes", category: "Healthcare" }
    ],
    brochureUrl: "",
    constructionTimeline: [
      { stage: "Foundation", status: "Completed", note: "RCC foundation completed." },
      { stage: "Structure", status: "Ongoing", note: "Middle floors structural work." }
    ]
  },
  {
    id: "nakoda-green-pavilions",
    slug: "nakoda-green-pavilions",
    name: "Green Pavilions Enclave",
    developer: "Developer Partner (Strategic Mandate)",
    tagline: "Eco-Conscious 3 & 4 BHK Residences with Parkland Views",
    location: "Green Belt Enclave, Nipania, Indore",
    microLocation: "Near Eastern Lake & Green Buffer",
    status: "upcoming",
    statusLabel: "Upcoming Launch",
    category: "Eco-Luxury Residential",
    heroImage: "/assets/images/nipania_aerial.jpg",
    featuredImage: "/assets/images/nipania_aerial.jpg",
    isFeatured: false,
    description: "An upcoming eco-conscious residential development overlooking protected parklands in Nipania. Featuring solar-assisted common facilities, native tree groves, and biophilic architectural planning.",
    conceptDisclaimer: "Advance concept preview. RERA registration details will be published upon regulatory approval.",
    reraNumber: "[RERA REGISTRATION IN PROCESS: NOTICE WILL BE DISPLAYED PRIOR TO BOOKING]",
    possession: "[Upcoming Launch: Phase 1]",
    totalTowers: "[To Be Announced]",
    totalUnits: "[To Be Announced]",
    configurations: [
      {
        type: "3 & 4 BHK Park Residences",
        carpetArea: "[Expressions of Interest Open]",
        superArea: "[Specifications in Final Approvals]",
        balconies: "Park-Facing Balconies",
        bathrooms: "3 & 4 Luxury Baths"
      }
    ],
    highlights: [
      { title: "80% Open & Green Grounds", desc: "Extensive green acreage preserving natural Indore topography." },
      { title: "Biophilic Architecture", desc: "Designed to merge indoor comfort with organic outdoor landscapes." }
    ],
    amenities: [
      { name: "Central Park & Jogging Track", icon: "garden", desc: "1 km shaded jogging and cycling pathway.", image: "/assets/images/nipania_aerial.jpg" },
      { name: "Eco Clubhouse", icon: "clubhouse", desc: "Sustainable community hub powered by solar energy.", image: "/assets/images/clubhouse_pool.jpg" }
    ],
    gallery: [
      { url: "/assets/images/nipania_aerial.jpg", caption: "Aerial Overview of Green Pavilion Location" }
    ],
    floorPlans: [],
    locationAdvantages: [
      { landmark: "Nipania Main Lake Park", distance: "Walking distance", category: "Recreation" },
      { landmark: "Eastern Bypass Link", distance: "4 minutes", category: "Transit" }
    ],
    brochureUrl: "",
    constructionTimeline: []
  }
];
