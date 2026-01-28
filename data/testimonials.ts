export interface Testimonial {
    id: string;
    quote: string;
    author: string;
    role: string;
    company: string;
    image?: string;
    instagram?: string;
    feedbacks?: string[];
}

export const testimonials: Testimonial[] = [
    {
        id: '1',
        quote: "They didn't just build a website; they translated our chaos into a digital language that our audience understood immediately.",
        author: "Sarah Jenkins",
        role: "CMO",
        company: "Nexus Tech",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
        id: '2',
        quote: "The attention to micro-interactions and the fluid transitions made our platform feel alive. It's rare to find this level of craft.",
        author: "David Chen",
        role: "Founder",
        company: "Aura Systems",
        image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
        id: '3',
        quote: "Solicate operates at the intersection of art and engineering. The result was not just a product, but a statement piece.",
        author: "Elena Rodriguez",
        role: "Creative Director",
        company: "Studio M",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
        id: '4',
        quote: "I absolutely loved the portfolio! The animations were simple yet unique, making everything look very clean and presentable. Thank you for being so patient and taking the time to explain everything. The portfolio looks perfect yet elegant. It was truly great working with you.",
        author: "Kajal Goyal",
        role: "Client",
        company: "Portfolio Project",
        image: "/kajal-goyal.jpg",
        instagram: "https://www.instagram.com/kay.life173/",
        feedbacks: [
            "Thank you for sharing such an amazing portfolio, I absolutely loved it! I really appreciated how you kept the animations simple yet unique, making everything look very clean and presentable. It was truly great working with you.",
            "Thnaks for explaining!! Really appreciate your time and effort you took. The portfolio looks perfect yet elegant. Thank you for being so patient it was great working with you.",
            "Sure! Thanks great news🥳🥳🥳\nHappy to see you growing ✨✨✨"
        ]
    }
];
