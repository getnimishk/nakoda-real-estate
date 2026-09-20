/**
 * Nakoda Real Estate - Company, Services & Market Data Layer
 * Modeled on premier Indore real-estate advisory platforms (like floor.estate)
 */

export const COMPANY_DATA = {
  name: "Nakoda Real Estate",
  owner: "Abhijeet Raj Kanungo",
  phonePrimary: "+91 70004 22377",
  phoneSecondary: "+91 74155 7709",
  whatsapp: "+91 70004 22377",
  tagline: "Simplifying Real Estate in Indore",
  subTagline: "Expert Property Advisory, Buying, Selling, Home Loans & Builder Consulting",
  city: "Indore",
  locality: "Nipania",
  state: "Madhya Pradesh",

  overview: "Nakoda Real Estate is a premier property advisory and real-estate consulting firm based in Nipania, Indore. We do not construct buildings ourselves; instead, we partner with reputable developers and property owners to provide unbiased, end-to-end real estate solutions for homebuyers, investors, businesses, and builders across Indore.",

  pillars: [
    {
      title: "Unbiased Property Advisory",
      desc: "We curate only verified residential and commercial developments with clear RERA status, legal approvals, and genuine price transparency."
    },
    {
      title: "Zero Brokerage on Fresh Launches",
      desc: "Homebuyers pay 0% brokerage on newly launched developer mandate projects across Nipania, Vijay Nagar, and Indore."
    },
    {
      title: "End-to-End Transaction Support",
      desc: "From initial shortlisting, site visits, and builder negotiations to legal title checks, home loan sanctioning, and final registry."
    },
    {
      title: "Deep Indore Micro-Market Expertise",
      desc: "Specialized knowledge of emerging corridors: Nipania, MR-10, MR-11, Super Corridor, AB Road, and Eastern Bypass."
    }
  ],

  services: [
    {
      id: "buy",
      title: "Buy Property",
      tagline: "Find your ideal home or investment in Indore",
      desc: "Discover handpicked 2, 3, 4, 5 BHK luxury residences, penthouses, independent villas, and residential plots matching your exact budget and location criteria.",
      benefits: ["Curated builder inventory", "Zero brokerage on fresh bookings", "Guided private site visits", "Best price negotiation support"]
    },
    {
      id: "sell",
      title: "Sell Property",
      tagline: "Get optimal market value for your property",
      desc: "Connect with genuine, pre-qualified buyers through our targeted marketing, extensive network of local investors, and professional property staging.",
      benefits: ["Accurate market valuation", "Targeted buyer outreach", "Hassle-free documentation", "Fast transaction closure"]
    },
    {
      id: "loans",
      title: "Home Loan Assistance",
      tagline: "Hassle-free financing at prime interest rates",
      desc: "Complete doorstep home loan support through our tie-ups with leading nationalized and private banks (SBI, HDFC Bank, ICICI Bank, Axis Bank, Bank of Baroda).",
      benefits: ["Lowest interest rates", "Doorstep document pickup", "Fast-track pre-approvals", "Transparent processing fees"]
    },
    {
      id: "builder-consulting",
      title: "Builder Consulting & Mandates",
      tagline: "Sales, marketing & mandate management for developers",
      desc: "Full-cycle mandate management, go-to-market strategy, pricing architecture, digital lead generation, and channel partner networks for Indore builders.",
      benefits: ["Guaranteed project absorption", "Creative branding & collateral", "Dedicated on-site sales force", "Digital performance marketing"]
    },
    {
      id: "leasing",
      title: "Commercial & Corporate Leasing",
      tagline: "Workspaces, retail shops & built-to-suit premises",
      desc: "Helping companies, retail brands, and institutions lease prime office spaces, IT park floor plates, high-street retail, and warehouses across Indore.",
      benefits: ["Grade-A office inventory", "High-footfall retail locations", "Tenant & landlord lease negotiation", "Legal documentation support"]
    },
    {
      id: "nri",
      title: "Investment & NRI Advisory",
      tagline: "Remote property management for global Indians",
      desc: "Tailored wealth creation through high-capital-appreciation residential launches and high-yield pre-leased commercial properties in Indore.",
      benefits: ["Complete remote transaction handling", "Power of Attorney (PoA) guidance", "Rental yield & asset management", "FEMA & tax compliance advice"]
    }
  ],

  microMarkets: [
    {
      name: "Nipania & MR-11",
      character: "Indore's Premier Luxury Residential Hub",
      highlights: "5-10 mins from Vijay Nagar, Bombay Hospital, DPS Nipania, clean air, low-density modern apartments."
    },
    {
      name: "Vijay Nagar & AB Road",
      character: "Commercial, Tech & Retail Capital",
      highlights: "Corporate towers, C21 Mall, Malhar Mega Mall, Brilliant Convention Centre, premium dining."
    },
    {
      name: "Super Corridor & MR-10",
      character: "High-Growth IT & Connectivity Corridor",
      highlights: "TCS & Infosys campuses, Metro line connectivity, fast access to Devi Ahilyabai Holkar Airport."
    },
    {
      name: "Eastern Bypass (NH-52)",
      character: "Mega Townships & Commercial Hub",
      highlights: "Phoenix Citadel, integrated townships, direct transit to Bhopal, Dewas, and Mumbai highways."
    }
  ]
};
