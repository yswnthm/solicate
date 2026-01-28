import { Project } from '../types';

export const projects: (Project & { category: string })[] = [
    // UGC Creator Portfolios
    {
        id: 13,
        title: 'Ayesha Malkani',
        role: 'UGC Portfolio',
        year: '2025',
        image: '/images/ayesha-malkani.png',
        aspectRatio: 'aspect-video',
        link: 'https://luxe.solicate.in',
        category: 'UGC Creator Portfolios',
        description: 'A premium UGC portfolio for Ayesha Malkani, featuring high-end aesthetics and curated content showcases.'
    },
    {
        id: 3,
        title: 'Kajal',
        role: 'UGC Portfolio',
        year: '2025',
        image: '/images/kajal-img.png',
        aspectRatio: 'aspect-video',
        link: 'https://kajal.solicate.in',
        category: 'UGC Creator Portfolios',
        description: 'A dynamic portfolio showcasing user-generated content with a focus on bold typography and fluid transitions.'
    },
    // Personal Portfolios
    {
        id: 14,
        title: 'Sankho Kun',
        role: 'YouTuber Portfolio',
        year: '2026',
        image: '/images/sankho.png',
        aspectRatio: 'aspect-video',
        link: 'https://sankho.solicate.in',
        category: 'Personal Portfolios',
        description: 'A storytelling-focused portfolio for Sankho Kun, documenting the pursuit of intentional living and creative growth.'
    },
    {
        id: 6,
        title: 'Lumina',
        role: 'Photography Studio',
        year: '2026',
        image: '/images/lumina-img.png',
        aspectRatio: 'aspect-video',
        link: 'https://lumina.solicate.in',
        category: 'Photography & Videography Studios',
        description: 'A curated visual narrative for a photography studio, focusing on light, composition, and moments captured in time.'
    },
    {
        id: 5,
        title: 'Vaani',
        role: 'Music Studio',
        year: '2025',
        image: '/images/vaani-img.png',
        aspectRatio: 'aspect-video',
        link: 'https://vaani.solicate.pecup.in',
        category: 'Other',
        description: 'A sonic visual experience for a music studio, capturing the essence of sound through rhythmically paced motion.'
    },
    {
        id: 2,
        title: 'Chlorophyll',
        role: 'Organic Laboratory',
        year: '2025',
        image: '/images/chlorophyll-img.png',
        aspectRatio: 'aspect-video',
        link: 'https://chlorophyll.solicate.pecup.in',
        category: 'Other',
        description: 'An immersive platform for an organic laboratory, highlighting sustainable practices through visual storytelling.'
    },
    {
        id: 4,
        title: 'Kernelspace',
        role: 'Technical Lab',
        year: '2025',
        image: '/images/kernelspace-img.png',
        aspectRatio: 'aspect-video',
        link: 'https://kernelspace.solicate.pecup.in',
        category: 'Other',
        description: 'A cutting-edge interface for a tech lab, emphasizing precision, data visualization, and modern design principles.'
    },
    // Restaurant & Café Websites
    {
        id: 12,
        title: 'Ember',
        role: 'Coffee House',
        year: '2025',
        image: '/images/ember.png',
        aspectRatio: 'aspect-video',
        link: 'https://ember.solicate.in',
        category: 'Restaurant & Café Websites',
        description: 'A warm, roasted aesthetic for a coffee brand, blending sensory appeal with digital convenience.'
    },
    {
        id: 1,
        title: 'Amtams',
        role: 'Hometreats Bakery Shop',
        year: '2025',
        image: '/images/amtams-img.png',
        aspectRatio: 'aspect-video',
        link: 'https://amtams.solicate.pecup.in',
        category: 'Restaurant & Café Websites',
        description: 'A cozy digital storefront for artisanal baked goods, featuring warm aesthetics and seamless ordering.'
    },
    // Wedding Photography Studios
    {
        id: 8,
        title: 'Prism',
        role: 'Wedding Event Planner',
        year: '2025',
        image: '/images/prism-img.png',
        aspectRatio: 'aspect-video',
        link: 'https://prism.solicate.in',
        category: 'Photography & Videography Studios',
        description: 'An enchanting digital experience for wedding planning, blending organizational clarity with celebratory aesthetics.'
    },
    // Dental & Salon Websites
    {
        id: 9,
        title: 'Lumia',
        role: 'Dental Clinic',
        year: '2025',
        image: 'https://placehold.co/1920x1080/EEECE7/31343C?text=Lumia',
        aspectRatio: 'aspect-video',
        link: 'https://lumia.solicate.in',
        category: 'Dental & Salon Websites',
        description: 'A pristine digital presence for a dental clinic, emphasizing care, comfort, and clinical excellence.'
    },
    {
        id: 10,
        title: 'Aura',
        role: 'Unisex Salon',
        year: '2025',
        image: '/images/aura.png',
        aspectRatio: 'aspect-video',
        link: 'https://aurasalon.solicate.in/',
        category: 'Dental & Salon Websites',
        description: 'A stylish and modern interface for a unisex salon, reflecting personal grooming and contemporary aesthetics.'
    },
    // Real Estate & Lifestyle Brands
    {
        id: 7,
        title: 'Evolve',
        role: 'Real Estate Company',
        year: '2025',
        image: '/images/evolve-img.png',
        aspectRatio: 'aspect-video',
        link: 'https://evolve.solicate.in',
        category: 'Real Estate & Lifestyle Brands',
        description: 'A modern real estate platform exploring architectural elegance and seamless property discovery.'
    },
    {
        id: 11,
        title: 'The Haven',
        role: 'Quiet Luxury',
        year: '2025',
        image: '/images/haven.png',
        aspectRatio: 'aspect-video',
        link: 'https://haven.solicate.in/',
        category: 'Real Estate & Lifestyle Brands',
        description: 'A digital sanctuary for quiet luxury, emphasizing minimalism, refined living, and understated elegance.'
    }
];

export const categories = [
    {
        title: 'UGC Creator Portfolios',
        slug: 'ugc-creator-portfolios',
        image: '/images/kajal-img.png',
        description: 'UGC Content Creator, Influencer Media Kit, Digital Content Specialist, Social Media Manager'
    },
    {
        title: 'Personal Portfolios',
        slug: 'personal-portfolios',
        image: '/images/vaani-img.png',
        description: 'Video Editor Portfolio, Trader Portfolio, Youtuber Portfolio, Content Creator Portfolio, Music Producer'
    },
    {
        title: 'Restaurant & Café Websites',
        slug: 'restaurant-cafe-websites',
        image: '/images/amtams-img.png',
        description: 'Coffee House, Bakery Shop, Fine Dining Restaurant, Cloud Kitchen, Food Truck'
    },
    {
        title: 'Photography & Videography Studios',
        slug: 'photography-videography-studios',
        image: '/images/prism-img.png',
        description: 'Wedding Photography, Commercial Shoots, Event Videography, Fashion Portfolio, Brand Campaigns'
    },
    {
        title: 'Dental & Salon Websites',
        slug: 'dental-salon-websites',
        image: 'https://placehold.co/1920x1080/EEECE7/31343C?text=Lumia',
        description: 'Dental Clinic, Unisex Salon, Spa & Wellness Center, Dermatology Clinic, Physiotherapy'
    },
    {
        title: 'Real Estate & Lifestyle Brands',
        slug: 'real-estate-lifestyle-brands',
        image: '/images/evolve-img.png',
        description: 'Real Estate Agency, Interior Design Firm, Luxury Lifestyle Brand, Architecture Firm'
    },
    {
        title: 'Other',
        slug: 'other',
        image: '/images/vaani-img.png',
        description: 'SaaS Products, Custom Web Development, Mobile Applications, Dashboards, API Integrations'
    },
];
