// Configuration values shared across components
export const config = {
  // Base Paths and URLs
  basePath: process.env.NODE_ENV === 'production' ? '/trendyelectrical' : '',
  
  // Company information
  companyName: 'Trendy Electrical',
  shortName: 'Trendy',
  tagline: '#1 Trusted Electrician in Brisbane & Surrounds',
  description: 'We have been delivering quality residential and commercial electrical solutions to Brisbane & the surrounding areas for over 20 years.',
  yearEstablished: '2004',
  phoneNumber: '0419 684 713',
  email: 'trendyelectrical01@outlook.com',
  address: {
    street: '123 Electric Avenue',
    suburb: 'Brisbane',
    state: 'QLD',
    postcode: '4000',
    country: 'Australia'
  },
  
  // Visual branding
  branding: {
    logo: {
      path: '/trendylogo.SVG',
      width: 160,
      height: 80,
      altText: 'Trendy Electrical Logo'
    },
    icon: {
      path: '/trendyicon.SVG',
      width: 32,
      height: 32,
      altText: 'Trendy Electrical Icon'
    },
    colors: {
      primary: '#242131',      // Dark blue/navy
      secondary: '#d4af37',    // Gold
      text: '#494544',         // Dark gray
      background: '#f5f5f5',   // Light gray
      white: '#ffffff'
    },
    images: {
      hero: '/brisbane.avif',
      experience: '/powerline.avif'
    }
  },
  
  // Service areas
  serviceAreas: [
    'Brisbane',
    'Gold Coast',
    'Sunshine Coast',
    'Ipswich'
  ],
  
  // Services offered
  services: {
    residential: [
      'Lighting',
      'Air Conditioning',
      'Solar',
      'Home Battery',
      'Off Grid & Backup Systems',
      'Fault Diagnosis'
    ],
    commercial: [
      'Office Fit-outs',
      'Safety Inspections',
      'Energy Efficiency Audits',
      'Data & Communications',
      'Emergency Repairs'
    ]
  },
  
  // Licenses and certifications
  licenses: {
    electrical: 'LIC: 12345',
    arcCondition: 'ARC: AU12345'
  },
  
  // Social media links
  socialLinks: {
    facebook: '#',
    instagram: '#',
    twitter: '#',
    linkedin: '#'
  },
  
  // Business hours
  businessHours: {
    weekdays: '7:00 AM - 5:00 PM',
    saturday: '8:00 AM - 2:00 PM',
    sunday: 'Closed'
  },
  
  // Contact information
  contact: {
    phone: '0419 684 7135',
    emergencyPhone: '0419 684 713',
    email: 'trendyelectrical01@outlook.com',
    quoteEmail: 'trendyelectrical01@outlook.com'
  },
  
  // Testimonials
  testimonials: [
    {
      quote: "Outstanding service! Trendy Electrical truly exceeded my expectations. From start to finish, their team exhibited professionalism and expertise. I'm thrilled with the quality of their workmanship. Highly recommend!",
      author: "Sarah Johnson",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      quote: "Trendy Electrical saved the day! I was facing a tricky electrical issue at home, and their quick response and efficient troubleshooting resolved it in no time. Friendly staff, excellent service. Thank you!",
      author: "Michael Chang",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      quote: "Impressive work by Trendy Electrical! Their attention to detail and dedication to ensuring our electrical needs were met with precision and care were truly commendable. We couldn't be happier with the results.",
      author: "Emily Patel",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      quote: "The team at Trendy Electrical did an amazing job with our home rewiring project. They were professional, punctual, and worked cleanly. The pricing was fair, and the results are excellent!",
      author: "Robert Wilson",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/67.jpg"
    },
    {
      quote: "I've used Trendy Electrical several times for my business, and they never disappoint. Their knowledge and expertise are unmatched, and they always provide prompt and reliable service.",
      author: "Lisa Thompson",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/29.jpg"
    }
  ],
  
  // SEO information
  seo: {
    title: 'Trendy Electrical Services | Brisbane & Gold Coast Electrician',
    description: 'Professional electrical services for residential and commercial properties in Brisbane and surrounding areas. Licensed, insured and experienced electricians.',
    keywords: 'electrician, Brisbane, electrical services, solar, air conditioning, lighting',
    ogImage: '/og-image.jpg'
  }
} 