import { Project } from '../types';

export const projects: (Project & { category: string })[] = [
    // UGC Creator Portfolios
    {
        id: 3,
        title: 'Kajal',
        role: 'UGC Portfolio',
        year: '2025',
        image: '/images/kajal-img.png',
        aspectRatio: 'aspect-video',
        link: 'https://kajal.solicate.in',
        playbackId: '9UTutoAr02u1oS02yDpS00ZfGfYlwSOaj02OtqzUXzzFnnQ',
        category: 'UGC Creator Portfolios',
        description: 'A dynamic portfolio showcasing user-generated content with a focus on bold typography and fluid transitions.'
    },
    // Personal Portfolios
    {
        id: 6,
        title: 'Lumina',
        role: 'Photography Studio',
        year: '2026',
        image: '/images/lumina-img.png',
        aspectRatio: 'aspect-video',
        link: 'https://lumina.solicate.in',
        category: 'Personal Portfolios',
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
        playbackId: '8RNpU01rebBYdeGxyUa52HJSPPDBfjQFJJHEv9KV00RgE',
        category: 'Personal Portfolios',
        description: 'A sonic visual experience for a music studio, capturing the essence of sound through rhythmically paced motion.'
    },
    // Restaurant & Café Websites
    {
        id: 12,
        title: 'Ember',
        role: 'Coffee House',
        year: '2025',
        image: 'https://placehold.co/1920x1080/EEECE7/31343C?text=Ember',
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
        playbackId: '6SzwPC3JhX023IB1Uy4k301qgBKvWqEVKYeEEatjKygeI',
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
        category: 'Wedding Photography Studios',
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
        image: 'https://placehold.co/1920x1080/EEECE7/31343C?text=Aura',
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
        image: 'https://placehold.co/1920x1080/EEECE7/31343C?text=Haven',
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
        description: 'Showcase your content with portfolios designed for UGC creators, influencers, and digital content specialists.'
    },
    {
        title: 'Personal Portfolios',
        slug: 'personal-portfolios',
        image: '/images/lumina-img.png',
        description: 'Professional portfolios for video editors, photographers, cinematographers, music producers, and creative professionals.'
    },
    {
        title: 'Restaurant & Café Websites',
        slug: 'restaurant-cafe-websites',
        image: '/images/amtams-img.png',
        description: 'Appetizing digital experiences for restaurants, coffee shops, bakeries, and culinary businesses.'
    },
    {
        title: 'Wedding Photography Studios',
        slug: 'wedding-photography-studios',
        image: '/images/prism-img.png',
        description: 'Elegant websites for wedding photographers, event planners, bridal studios, and celebration specialists.'
    },
    {
        title: 'Dental & Salon Websites',
        slug: 'dental-salon-websites',
        image: 'https://placehold.co/1920x1080/EEECE7/31343C?text=Lumia',
        description: 'Modern, clean websites for dental clinics, beauty salons, spas, and wellness centers.'
    },
    {
        title: 'Real Estate & Lifestyle Brands',
        slug: 'real-estate-lifestyle-brands',
        image: '/images/evolve-img.png',
        description: 'Sophisticated platforms for real estate agencies, luxury brands, interior designers, and lifestyle businesses.'
    },
];
