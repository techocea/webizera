import { SeoLandingPageData } from "@/types/agency";

export const SEO_LANDING_PAGES: SeoLandingPageData[] = [
    {
        slug: 'web-development-agency-sri-lanka',
        route: '/web-development-agency-sri-lanka',
        metaTitle: 'Web Development Agency Sri Lanka | Webizera',
        metaDescription:
            'Webizera is a Sri Lanka-based web development agency building conversion-focused websites, booking systems, client portals, and automation for growing businesses.',
        serviceType: 'Web Development Agency',
        areaServed: 'Sri Lanka & International',
        headline: 'A Sri Lanka web development agency built around business outcomes.',
        subheadline:
            'Webizera designs and engineers fast, conversion-focused websites and custom web systems for businesses in Sri Lanka and worldwide—with direct founder access on every build.',
        overview:
            'Too many business websites in Sri Lanka look acceptable on the surface yet fail to load quickly on mobile, capture qualified leads, or connect with WhatsApp and internal workflows. Webizera combines international-grade engineering with practical local and global business understanding.',
        idealFor: [
            'Private clinics, dental practices, and healthcare networks',
            'Boutique hotels, coastal villas, and inbound tour operators',
            'Real-estate developers and property advisory firms',
            'Growing Sri Lankan and international B2B service companies',
        ],
        challengesSolved: [
            {
                title: 'Slow, template-heavy websites that lose mobile visitors',
                description:
                    'We engineer lightweight React and Next.js architectures optimized for fast mobile loading across local and international networks.',
            },
            {
                title: 'Unstructured inquiries lost in chat threads',
                description:
                    'Every site is paired with validated lead capture, structured inquiry routing, and automated WhatsApp or email notifications.',
            },
            {
                title: 'Disconnected agency handoffs',
                description:
                    'You work directly with founder Brightly Dunsford from initial scoping through launch and ongoing support.',
            },
        ],
        deliverables: [
            'Custom responsive website tailored to your buyer journey',
            'Technical SEO setup, schema markup, and clean URL structure',
            'WhatsApp, email, and CRM lead-capture integration',
            'Post-launch handover, documentation, and optional ongoing maintenance',
        ],
        relatedCaseStudySlugs: [
            'coastal-boutique-villa-direct-booking',
            'private-medical-clinic-booking-portal',
        ],
        primaryServiceId: 'conversion-websites',
    },
    {
        slug: 'custom-web-application-development-sri-lanka',
        route: '/custom-web-application-development-sri-lanka',
        metaTitle: 'Custom Web Application Development Sri Lanka | Webizera',
        metaDescription:
            'Custom client portals, internal dashboards, and bespoke web applications engineered in Sri Lanka by Webizera for businesses outgrowing spreadsheets.',
        serviceType: 'Custom Web Application Development',
        areaServed: 'Sri Lanka & Global Remote',
        headline: 'Custom web applications built around how your business actually operates.',
        subheadline:
            'When off-the-shelf SaaS tools and scattered spreadsheets slow your team down, Webizera builds tailored portals, dashboards, and internal tools that fit your exact workflow.',
        overview:
            'Off-the-shelf software often forces teams into rigid workarounds or expensive per-seat subscriptions. We design and develop focused, maintainable custom web applications—from client portals and vendor dashboards to internal dispatch and approval tools.',
        idealFor: [
            'Service businesses managing jobs across multiple spreadsheets',
            'Clinics and institutions needing custom intake or patient portals',
            'Real-estate and B2B teams requiring tailored lead & pipeline views',
            'Startups validating and scaling a focused SaaS product',
        ],
        challengesSolved: [
            {
                title: 'Spreadsheet sprawl and manual data entry',
                description:
                    'Replace disconnected sheets with a centralized database, role-based permissions, and clean audit trails.',
            },
            {
                title: 'Zero visibility for clients',
                description:
                    'Provide clients with a dedicated portal to submit requests, upload documents, and track real-time progress without constant follow-up calls.',
            },
            {
                title: 'Brittle, hard-to-maintain codebases',
                description:
                    'Built cleanly in TypeScript with validated schemas, clear API boundaries, and thorough documentation.',
            },
        ],
        deliverables: [
            'Workflow discovery, system architecture, and database modeling',
            'Role-based authentication for staff, managers, and clients',
            'Responsive dashboard UI with fast filtering and tabular reporting',
            'Automated email, WhatsApp, and payment or CRM webhook integrations',
        ],
        relatedCaseStudySlugs: [
            'service-business-operations-automation-hub',
            'real-estate-inquiry-qualification-portal',
        ],
        primaryServiceId: 'custom-web-systems',
    },
    {
        slug: 'booking-system-development',
        route: '/booking-system-development',
        metaTitle: 'Booking System Development for Clinics, Villas & Services | Webizera',
        metaDescription:
            'Custom online booking systems, appointment portals, and direct reservation flows with WhatsApp & payment integration built by Webizera.',
        serviceType: 'Booking System Development',
        areaServed: 'Worldwide',
        headline: 'Booking systems that turn website visitors into confirmed appointments.',
        subheadline:
            'Stop losing bookings to slow phone tag and third-party commissions. Webizera builds custom scheduling, intake, and direct reservation flows tailored to your rules.',
        overview:
            'Generic calendar embeds rarely handle multi-practitioner schedules, seasonal villa rates, tour group rules, or local payment and WhatsApp workflows cleanly. We build custom booking systems designed around your specific availability logic and customer journey.',
        idealFor: [
            'Medical clinics, dental practices, and specialist consultants',
            'Boutique hotels, villas, and coastal resorts seeking direct bookings',
            'Tour operators and excursion providers managing seasonal capacity',
            'Local service businesses booking on-site consultations or inspections',
        ],
        challengesSolved: [
            {
                title: 'Overbooking and manual calendar coordination',
                description:
                    'Enforce practitioner schedules, service durations, buffer times, and branch availability automatically.',
            },
            {
                title: 'High OTA marketplace commissions',
                description:
                    'Give travelers a fast, trustworthy direct reservation flow with date selection, transparent inclusions, and deposit support.',
            },
            {
                title: 'No-shows and missing client context',
                description:
                    'Collect intake questions upfront and trigger automated email or WhatsApp confirmation and reminder workflows.',
            },
        ],
        deliverables: [
            'Mobile-first multi-step booking & availability interface',
            'Admin schedule management and blackout date controls',
            'Automated confirmation & reminder triggers via email or WhatsApp',
            'Optional deposit collection and calendar synchronization',
        ],
        relatedCaseStudySlugs: [
            'private-medical-clinic-booking-portal',
            'coastal-boutique-villa-direct-booking',
        ],
        primaryServiceId: 'booking-lead-systems',
    },
    {
        slug: 'business-automation-website',
        route: '/business-automation-website',
        metaTitle: 'Business Automation Websites & Workflow Integrations | Webizera',
        metaDescription:
            'Connect your website to WhatsApp, CRMs, email follow-ups, payments, and internal tools. Webizera builds automated digital systems that cut manual work.',
        serviceType: 'Business Automation & Web Systems',
        areaServed: 'Worldwide',
        headline: 'Websites connected directly to your CRM, WhatsApp, and daily workflows.',
        subheadline:
            'A modern website should not create extra admin work. Webizera builds automated lead routing, follow-up sequences, and system integrations that save hours every week.',
        overview:
            'Most leads go cold because follow-up relies on someone manually checking an inbox, copying data into a spreadsheet, and messaging the client hours later. We connect your front-end website directly to your operational stack.',
        idealFor: [
            'Sales teams losing leads due to slow manual follow-up',
            'Operations managers copying form submissions between tools',
            'Service providers issuing repetitive quotes, confirmations, or reminders',
        ],
        challengesSolved: [
            {
                title: 'Slow response times to high-intent leads',
                description:
                    'Trigger instant auto-replies to prospects and real-time WhatsApp or email alerts to the right team member.',
            },
            {
                title: 'Unqualified inquiries cluttering your inbox',
                description:
                    'Route inquiries based on budget, service type, or location directly into structured CRM stages.',
            },
            {
                title: 'Manual invoice and status updates',
                description:
                    'Automate webhook handoffs between your client portal, payment provider, and accounting workflow.',
            },
        ],
        deliverables: [
            'Validated multi-step lead capture and qualification flows',
            'Direct integrations with Resend, CRMs, Notion, Sheets, or Slack',
            'WhatsApp Business notification and handoff workflows',
            'Reliable webhook logging and error monitoring',
        ],
        relatedCaseStudySlugs: [
            'service-business-operations-automation-hub',
            'real-estate-inquiry-qualification-portal',
        ],
        primaryServiceId: 'automation-integrations',
    },
    {
        slug: 'website-design-negombo',
        route: '/website-design-negombo',
        metaTitle: 'Website Design Negombo | Webizera Digital Systems Agency',
        metaDescription:
            'Looking for website design in Negombo? Webizera builds conversion-focused websites, hotel booking systems, and business tools with direct local collaboration.',
        serviceType: 'Website Design & Web Systems in Negombo',
        areaServed: 'Negombo & Western Province, Sri Lanka',
        headline: 'Website design in Negombo built to international standards.',
        subheadline:
            'Based in Negombo, Sri Lanka, Webizera partners with local hospitality, healthcare, real-estate, and service businesses—as well as global remote teams—to build websites that generate real inquiries.',
        overview:
            'Businesses in Negombo and the surrounding coastal corridor serve both local customers and international travelers. Your online presence needs to build immediate credibility on mobile, communicate clearly, and make booking or contacting you effortless.',
        idealFor: [
            'Negombo boutique hotels, resorts, villas, and tour operators',
            'Private clinics, dental studios, and wellness providers',
            'Property developers and local service businesses in Western Province',
        ],
        challengesSolved: [
            {
                title: 'Outdated sites that do not reflect service quality',
                description:
                    'We design clean, modern, trustworthy interfaces that match the real caliber of your business.',
            },
            {
                title: 'Poor visibility for regional & tourist searches',
                description:
                    'Structured local SEO, fast mobile load times, and clear calls to action for WhatsApp and direct bookings.',
            },
            {
                title: 'Difficulty communicating with remote agencies',
                description:
                    'Meet directly with founder Brightly Dunsford in Negombo or online for clear scoping and reliable delivery.',
            },
        ],
        deliverables: [
            'Custom website design and mobile-first engineering',
            'Direct WhatsApp, Google Maps, and booking inquiry integration',
            'Local SEO metadata and Google-ready structured data',
            'Ongoing maintenance and support after launch',
        ],
        relatedCaseStudySlugs: [
            'coastal-boutique-villa-direct-booking',
            'private-medical-clinic-booking-portal',
        ],
        primaryServiceId: 'conversion-websites',
    },
    {
        slug: 'web-design-agency-sri-lanka',
        route: '/web-design-agency-sri-lanka',
        metaTitle: 'Web Design Agency Sri Lanka | Conversion-Focused UI/UX — Webizera',
        metaDescription:
            'Webizera is a conversion-focused web design agency in Sri Lanka creating clear, credible websites, UI/UX systems, and high-performing digital products.',
        serviceType: 'Web Design & UI/UX Agency',
        areaServed: 'Sri Lanka & International',
        headline: 'A web design agency in Sri Lanka focused on clarity, trust, and conversion.',
        subheadline:
            'Good design is not decoration—it is making it effortless for your ideal customer to understand what you do, trust your business, and take action.',
        overview:
            'Many agencies sell flashy templates that look identical and bury the customer’s next step. Webizera approaches web design as a commercial clarity problem: sharp typography, structured proof, clean user flows, and deliberate conversion paths.',
        idealFor: [
            'Growing companies ready to upgrade from a generic template site',
            'Startups and SaaS founders launching a credible product presence',
            'Service and hospitality brands targeting higher-value clients',
        ],
        challengesSolved: [
            {
                title: 'Confusing navigation and buried calls to action',
                description:
                    'We organize every page around clear hierarchy so visitors immediately know what you offer and how to start.',
            },
            {
                title: 'Low trust on first impression',
                description:
                    'Restrained, modern aesthetics with high contrast, thoughtful spacing, and authentic proof rather than generic stock clichés.',
            },
            {
                title: 'Design that breaks during development',
                description:
                    'Design and engineering happen under one roof—meaning every layout ships cleanly with responsive polish and fast load speed.',
            },
        ],
        deliverables: [
            'Information architecture, wireframes, and conversion copy structure',
            'Custom UI/UX design system built for desktop and mobile',
            'Production-ready front-end build with subtle, purposeful motion',
            'Accessible contrast, semantic HTML, and SEO foundations',
        ],
        relatedCaseStudySlugs: [
            'coastal-boutique-villa-direct-booking',
            'real-estate-inquiry-qualification-portal',
        ],
        primaryServiceId: 'ui-ux-design',
    },
];
