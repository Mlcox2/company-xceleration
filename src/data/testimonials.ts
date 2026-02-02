
export interface Testimonial {
    id: string;
    quote: string;
    author: string;
    role?: string;
    company?: string;
}

export const TESTIMONIALS: Testimonial[] = [
    {
        id: "mihaela-h",
        quote: "I've known Matt for several years, and I had the pleasure of working with him throughout my career as a Licensed Clinical Social Worker. He is very relatable, knowledgeable, passionate about helping and uplifting our community, educating other social workers, teachers and Mental Health professionals too. His story is very inspirational, and his leadership is motivational. Highly recommend his expertise!",
        author: "Mihaela H",
        role: "Licensed Clinical Social Worker/Therapist"
    },
    {
        id: "kyle-d-1",
        quote: "Leadership engagement increased substantially and resulted in 100% retention. This allowed us to focus on service line expansion and market diversification, yielding a 30% increase in revenue in just 4 months.",
        author: "Kyle D",
        role: "Behavioral Health CEO",
        company: "Oceans Behavioral Hospital Permian Basin"
    },
    {
        id: "annika-r",
        quote: "We have skyrocketed our team's relationship and synergy. We went from meeting around 15-20% of our total quarterly goals to over 80%.",
        author: "Annika R",
        company: "NAMI Southern Nevada"
    },
    {
        id: "trent-c",
        quote: "Matthew Cox has a calm demeanor, yet is fiercely intent on creating value for his clients. Matthew has a 'must see' TEDx Talk and really shows his passion for alternative learning... I only surround myself with winners, and Matthew Cox is one of those folks!",
        author: "Trent C."
    },
    {
        id: "isaiah-n",
        quote: "I highly recommend Matthew. He is an amazing Coach and facilitator. His clients constantly rave about the value that they get from being a part of the journey that he takes them on.",
        author: "Isaiah N."
    },
    {
        id: "kyle-dunlap",
        quote: "Matt is the reason I have found professional success in Las Vegas. After meeting him during my nonprofit management days over a decade ago, he and I have closely aligned on many startups, community-enhancing initiatives, mental health & political advocacy... He is solely responsible for convincing me to join the growing - but drastically underserved - mental healthcare field in 2015... I look forward to supporting Matt and his endeavors as he continues to gain momentum as a business coach.",
        author: "Kyle Dunlap, MBA",
        role: "Behavioral Health CEO"
    },
    {
        id: "tech-team-1",
        quote: "Our communication in on the ground leadership has gotten better. We were are able to implement many things that we advised to us as a team such as trainings and meeting styles.",
        author: "Client Partner"
    },
    {
        id: "tech-team-2",
        quote: "Our workflow processes have been improved. Also, I believe the company has a better depiction of its challenges/shortfalls",
        author: "Client Partner"
    },
    {
        id: "kyle-d-texas",
        quote: "My coaches, Matthew and Daniel, were compassionate, consistent, communicative, and professionally direct with their recommendations. I look forward to expanding our relationship with them as my hospital leadership team in Texas continues to grow.",
        author: "Kyle D",
        role: "Hospital Leadership"
    }
];
