export interface Testimonial {
    id: string;
    quote: string;
    author: string;
    role: string;
    company: string;
    image?: string;
    instagram?: string;
    website?: string;
    feedbacks?: string[];
}

export const testimonials: Testimonial[] = [
    {
        id: '1',
        quote: "Thank you for sharing such an amazing portfolio, I absolutely loved it! I really appreciated how you kept the animations simple yet unique, making everything look very clean and presentable. It was truly great working with you.",
        author: "Kajal Goyal",
        role: "UGC Content Creator",
        company: "Kaylife",
        image: "/kajal-goyal.jpg",
        instagram: "https://www.instagram.com/kay.life173/",
        website: "https://kajal.solicate.in",
        feedbacks: [
            "Thank you for sharing such an amazing portfolio, I absolutely loved it! I really appreciated how you kept the animations simple yet unique, making everything look very clean and presentable. It was truly great working with you.",
            "Thnaks for explaining!! Really appreciate your time and effort you took. The portfolio looks perfect yet elegant. Thank you for being so patient it was great working with you.",
            "Sure! Thanks great news🥳🥳🥳\nHappy to see you growing ✨✨✨"
        ]
    },
    {
        id: '2',
        quote: "Working with Solicate was the best decision for making my portfolio. The way you design it, the way you give honest suggestions, it's really professional. Looking forward to working with you again.",
        author: "Ayesha Malkani",
        role: "UGC Content Creator",
        company: "Luxe Clicks",
        image: "/ayesha-malkani.jpg",
        instagram: "https://www.instagram.com/luxe_clicks__/",
        website: "https://luxe.solicate.in",
        feedbacks: [
            "Working with solicate was best decision for making my portfolio. The way you design it, the way you give honest suggestions, its really professional. Looking forward to work with you again. Wish you luck for your success."
        ]
    }
];
