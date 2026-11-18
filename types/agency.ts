export interface ServiceItem {
    id: string;
    number: string;
    title: string;
    shortDescription: string;
    deliverables: [string, string, string];
    tags: string[];
    previewImageKey: 'clinic' | 'villa' | 'realestate' | 'operations';
    inquiryType: string;
}

export interface CaseStudyItem {
    slug: string;
    title: string;
    clientLabel: string;
    industry: string;
    projectType: string;
    statusLabel: string;
    deliveryYear: string;
    isLive: boolean;
    liveUrl?: string;
    availabilityNotice: string;
    oneLineOutcome: string;
    imageKey: 'clinic' | 'villa' | 'realestate' | 'operations';
    tags: string[];
    servicesProvided: string[];
    timeline: string;
    technologies: string[];
    problemBefore: string;
    clientGoal: string;
    approach: string;
    whatWeBuilt: string;
    challenge: string;
    solution: string;
    designDecisions: string[];
    processSteps: string[];
    keyFeatures: string[];
    resultsOutcome: string[];
    clientTestimonial?: {
        quote: string;
        author: string;
        role: string;
        company: string;
    };
}

export interface TestimonialItem {
    id: string;
    quote: string;
    author: string;
    role: string;
    company: string;
    categoryLabel?: string;
    projectSlug?: string;
}

export interface FaqItem {
    id: string;
    question: string;
    answer: string;
}

export interface AgencyContent {
    services: ServiceItem[];
    caseStudies: CaseStudyItem[];
    testimonials: TestimonialItem[];
    faqs: FaqItem[];
}

export interface ContactSubmissionPayload {
    name: string;
    email: string;
    whatsapp: string;
    businessType: string;
    budgetRange: string;
    projectType: string;
    message: string;
    website?: string;
    formOpenedAt?: number;
}

export interface SeoLandingPageData {
    slug: string;
    route: string;
    metaTitle: string;
    metaDescription: string;
    serviceType: string;
    areaServed: string;
    headline: string;
    subheadline: string;
    overview: string;
    idealFor: string[];
    challengesSolved: {
        title: string;
        description: string;
    }[];
    deliverables: string[];
    relatedCaseStudySlugs: string[];
    primaryServiceId: string;
}
