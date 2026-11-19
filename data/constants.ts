import { AgencyContent } from "@/types/agency";
import { Code2, CalendarCheck2, Workflow } from "lucide-react";

export const NAV_ITEMS = [
  { label: 'Work', href: '/work' },
  { label: 'Capabilities', href: '/capabilities' },
  { label: 'Approach', href: '/approach' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const HERO_CALLOUTS = [
  {
    icon: Code2,
    label: 'Websites that convert',
    sub: 'Conversion architecture',
    positionClass: 'top-[12%] right-0 lg:-right-2',
    offset: 24,
    delay: 0.65,
  },
  {
    icon: CalendarCheck2,
    label: 'Seamless bookings',
    sub: 'Automated scheduling',
    positionClass: 'bottom-[24%] left-2 lg:left-4',
    offset: -20,
    delay: 0.78,
  },
  {
    icon: Workflow,
    label: 'Connected systems',
    sub: 'Portals & workflows',
    positionClass: 'bottom-[6%] right-2 lg:right-4',
    offset: 28,
    delay: 0.9,
  },
];

export const PROBLEMS = [
  {
    title: 'Unclear positioning at first glance',
    detail: 'Visitors arrive on your site but do not understand the offer or trust your team quickly enough.',
  },
  {
    title: 'Inquiries depend on manual chasing',
    detail: 'Leads arrive in scattered messages, and follow-up slips whenever the team gets busy.',
  },
  {
    title: 'Bookings stall in phone tag',
    detail: 'Confirming appointments, rooms, or consultations still relies on endless back-and-forth chats.',
  },
  {
    title: 'Operations split across disconnected tools',
    detail: 'Customer history, schedules, and approvals live across spreadsheets, WhatsApp, and email threads.',
  },
];

export const DEFAULT_AGENCY_CONTENT: AgencyContent = {
  services: [
    {
      id: 'digital-presence',
      number: '01',
      title: 'Digital presence',
      shortDescription:
          'Conversion-focused websites and landing experiences structured so prospects understand your offer, trust your team, and take action quickly.',
      deliverables: [
        'Clear offer hierarchy and editorial page architecture',
        'Fast mobile-first performance with semantic HTML & technical SEO',
        'Validated inquiry paths connected directly to email and WhatsApp',
      ],
      tags: ['Websites', 'Landing architecture', 'Technical SEO'],
      previewImageKey: 'villa',
      inquiryType: 'Digital presence',
    },
    {
      id: 'booking-inquiry-systems',
      number: '02',
      title: 'Booking & inquiry systems',
      shortDescription:
          'Custom scheduling, date-range availability, and multi-step inquiry systems built to replace phone tag and manual coordination.',
      deliverables: [
        'Practitioner, room, or service-specific availability rules',
        'Pre-visit intake forms and structured qualification fields',
        'Automated email and WhatsApp confirmation workflows',
      ],
      tags: ['Clinics', 'Hospitality', 'Scheduling'],
      previewImageKey: 'clinic',
      inquiryType: 'Booking & inquiry systems',
    },
    {
      id: 'client-portals',
      number: '03',
      title: 'Client portals',
      shortDescription:
          'Secure client areas where customers submit requests, review milestones, approve deliverables, and access records without chasing emails.',
      deliverables: [
        'Role-based client accounts with clean authentication',
        'Structured request intake, document sharing, and approval states',
        'Live status visibility that cuts repetitive support follow-ups',
      ],
      tags: ['Client areas', 'Approvals', 'B2B service'],
      previewImageKey: 'operations',
      inquiryType: 'Client portals',
    },
    {
      id: 'operational-dashboards',
      number: '04',
      title: 'Operational dashboards',
      shortDescription:
          'Internal admin tools and pipeline views engineered around how your staff actually manage leads, jobs, and daily decisions.',
      deliverables: [
        'Centralized databases replacing scattered spreadsheets',
        'High-clarity tabular views with fast filtering and search',
        'Territory assignment, stage tracking, and audit visibility',
      ],
      tags: ['Admin tools', 'Pipelines', 'Internal systems'],
      previewImageKey: 'realestate',
      inquiryType: 'Operational dashboards',
    },
    {
      id: 'automation-integrations',
      number: '05',
      title: 'Automation & integrations',
      shortDescription:
          'Connect your website, booking system, CRM, WhatsApp, payment gateway, and accounting workflows so manual handoffs disappear.',
      deliverables: [
        'Automated lead routing and instant auto-reply sequences',
        'Reliable REST webhooks syncing CRMs, Notion, or Sheets',
        'Payment, invoice trigger, and notification pipelines',
      ],
      tags: ['Webhooks', 'CRM sync', 'WhatsApp API'],
      previewImageKey: 'operations',
      inquiryType: 'Automation & integrations',
    },
  ],
  caseStudies: [
    {
      slug: 'private-medical-clinic-booking-portal',
      title: 'Patient Booking & Digital Intake System',
      clientLabel: 'Private Medical & Dental Clinic (Anonymized)',
      industry: 'Healthcare & Clinics',
      projectType: 'Booking System & Patient Portal',
      statusLabel: 'Private client project · Live site no longer publicly available',
      deliveryYear: '2026',
      isLive: false,
      availabilityNotice:
          'Private client project delivered in 2026. Access is restricted to clinic staff and patients; live site no longer publicly available. Interface walkthrough screenshots are available on request.',
      oneLineOutcome:
          'Replaced phone-only appointment booking and paper intake forms with a structured online scheduling and pre-visit workflow.',
      imageKey: 'clinic',
      tags: ['Booking system', 'Patient portal', 'Next.js', 'Automation'],
      servicesProvided: [
        'Interface Design & UX Architecture',
        'Custom Booking & Availability Engine',
        'Digital Patient Intake Forms',
        'WhatsApp & Email Reminder Workflows',
      ],
      timeline: '6 weeks',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Resend', 'WhatsApp Cloud API'],
      problemBefore:
          'Reception staff spent hours every day answering repetitive phone calls and WhatsApp messages to check doctor availability, confirm appointments, and transcribe handwritten patient forms into spreadsheets.',
      clientGoal:
          'Give patients a clear, mobile-friendly way to select a practitioner, reserve an open consultation slot, submit basic intake details before arriving, and receive automatic reminders.',
      approach:
          'We started by auditing two weeks of front-desk scheduling logs to model real consultation durations, branch overlaps, and rescheduling rules before writing interface code.',
      whatWeBuilt:
          'A conversion-focused clinic website paired with a custom slot-based booking engine, practitioner schedule controls, encrypted intake submission, and automated confirmation messages.',
      challenge:
          'Doctors worked across two clinic branches with varying consultation durations, and patients frequently booked without specifying procedure type—creating scheduling gaps.',
      solution:
          'We modeled consultation durations by service category, separated branch calendars cleanly, and built a three-step booking flow designed to complete in under a minute on mobile.',
      designDecisions: [
        'Eliminated mandatory patient account creation prior to booking to reduce mobile drop-off.',
        'Used high-contrast dark surfaces with clear time-slot grouping so patients never misread AM/PM availability.',
        'Placed pre-visit preparation notes directly beside the confirmation summary rather than hiding them in separate PDFs.',
      ],
      processSteps: [
        'Mapped front-desk call patterns and consultation slot rules with the clinic coordinator.',
        'Designed a distraction-free mobile booking flow with clear practitioner profiles and preparation notes.',
        'Built the scheduling engine, staff calendar view, and automated reminder triggers.',
        'Tested edge cases for rescheduling, holiday blocks, and mobile WhatsApp handoffs before launch.',
      ],
      keyFeatures: [
        'Service-specific duration logic and multi-branch doctor availability',
        'Mobile-first three-step appointment booking without forced registration',
        'Pre-visit digital intake questionnaire routed directly to reception',
        'Automated booking confirmation and 24-hour reminder notifications',
      ],
      resultsOutcome: [
        'Replaced manual phone coordination for routine consultation scheduling.',
        'Standardized patient intake information before arrival, reducing front-desk transcription.',
        'Provided reception with a single daily schedule view instead of scattered notebooks and chat threads.',
      ],
    },
    {
      slug: 'coastal-boutique-villa-direct-booking',
      title: 'Direct Reservation Website & Tour Inquiry System',
      clientLabel: 'Coastal Boutique Villa & Excursion Operator',
      industry: 'Hospitality & Tourism',
      projectType: 'Digital Presence & Direct Booking Flow',
      statusLabel: 'Past project · Live site no longer publicly available',
      deliveryYear: '2026',
      isLive: false,
      availabilityNotice:
          'Past project delivered in 2026. Live site no longer publicly available following a change in property management.',
      oneLineOutcome:
          'Built a direct-booking hospitality platform to capture stays and airport transfers without third-party marketplace friction.',
      imageKey: 'villa',
      tags: ['Digital presence', 'Booking flow', 'Hospitality', 'SEO'],
      servicesProvided: [
        'Conversion Website Design & Development',
        'Direct Room & Excursion Inquiry Engine',
        'Destination SEO Structure',
        'WhatsApp Concierge Handoff',
      ],
      timeline: '4 weeks',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Motion', 'Zod'],
      problemBefore:
          'The property depended almost entirely on external OTA platforms, losing margin on every booking while struggling with a dated static site that failed to display room availability or transfer options on mobile.',
      clientGoal:
          'Present the coastal property clearly to international travelers, enable direct stay inquiries with date selection, and bundle curated local tours in one clean flow.',
      approach:
          'We reviewed six months of past guest inquiry emails to ensure every common question—airport transfers, seasonal rates, and whole-villa buyouts—was answered directly inside the booking path.',
      whatWeBuilt:
          'An editorial hospitality website with interactive date-range selection, transparent seasonal inclusions, curated excursion add-ons, and instant reservation request routing.',
      challenge:
          'International guests often needed clarity on airport pickups and group capacity before committing to a direct inquiry.',
      solution:
          'We structured suite pages around clear decision details and connected the date selector directly to both structured email briefs and a pre-filled WhatsApp concierge handoff.',
      designDecisions: [
        'Kept room comparison clean and tabular rather than hiding inclusions behind multi-click accordions.',
        'Paired direct form submission with an optional pre-filled WhatsApp link for travelers on mobile.',
        'Optimized media delivery for slower coastal and roaming connections.',
      ],
      processSteps: [
        'Audited guest questions from past booking emails to surface key answers directly on room pages.',
        'Structured semantic destination pages for travelers planning coastal Sri Lanka stays.',
        'Built responsive date-selection and excursion inquiry components with schema validation.',
        'Verified mobile ergonomics and fast image loading across throttled networks.',
      ],
      keyFeatures: [
        'Interactive check-in and check-out selector with guest count validation',
        'Dedicated suite breakdown with transparent seasonal inclusions',
        'Optional tour and airport transfer requests inside the booking brief',
        'Pre-filled WhatsApp inquiry fallback for mobile guests',
      ],
      resultsOutcome: [
        'Established a structured direct-booking channel independent of OTA commissions.',
        'Captured stay dates, guest counts, and transfer requests upfront in a single inquiry.',
        'Delivered a responsive experience built for international mobile research.',
      ],
    },
    {
      slug: 'real-estate-inquiry-qualification-portal',
      title: 'Property Showcase & Lead Qualification System',
      clientLabel: 'Regional Property Advisory Group (Anonymized)',
      industry: 'Real Estate',
      projectType: 'Property Portal & Lead Routing Dashboard',
      statusLabel: 'Past project · Live site no longer publicly available',
      deliveryYear: '2026',
      isLive: false,
      availabilityNotice:
          'Past project delivered in 2026. Live site no longer publicly available.',
      oneLineOutcome:
          'Structured property listings and automated buyer qualification so sales advisors focused on verified, ready-to-view inquiries.',
      imageKey: 'realestate',
      tags: ['Operational dashboard', 'Lead qualification', 'CRM sync'],
      servicesProvided: [
        'Property Listing Architecture',
        'Structured Buyer Qualification Flow',
        'Internal Advisor Pipeline Dashboard',
        'Automated Territory Lead Routing',
      ],
      timeline: '5 weeks',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Zod', 'CRM Webhooks'],
      problemBefore:
          'Advisors received vague messages across social media and generic contact forms with no indication of buyer budget, financing readiness, or timeline—wasting hours chasing unqualified inquiries.',
      clientGoal:
          'Create a credible property showcase that filters listings cleanly and guides prospective buyers through a brief qualification step before routing them to the right advisor.',
      approach:
          'We interviewed the advisory team to isolate the four qualification signals that separated serious buyers from casual browsers, then built the inquiry flow around those signals without adding friction.',
      whatWeBuilt:
          'A custom property portal with faceted search, structured viewing requests, and an internal pipeline dashboard for tracking inquiry stages.',
      challenge:
          'Asking too many questions upfront reduces submissions, while asking too few floods advisors with unactionable messages.',
      solution:
          'We built a progressive two-stage inquiry flow: visitors submit core contact details first, then clarify budget bracket, timeline, and preferred viewing window.',
      designDecisions: [
        'Surfaced title status, land extent, and neighborhood context clearly on every listing card.',
        'Replaced generic contact boxes with property-specific viewing schedulers.',
        'Built a compact pipeline view for advisors to update lead stages in one click.',
      ],
      processSteps: [
        'Reviewed existing lead logs with the sales lead to identify core qualification criteria.',
        'Designed high-contrast property cards with clear asset specifications.',
        'Built the inquiry routing engine and internal advisor pipeline view.',
        'Connected automated WhatsApp and email alerts assigned by property territory.',
      ],
      keyFeatures: [
        'Filterable property catalog by district, asset type, and budget bracket',
        'Progressive two-step viewing request and buyer qualification form',
        'Internal dashboard tracking inquiry status from New Lead to Viewing Scheduled',
        'Automatic territory assignment to the responsible advisor',
      ],
      resultsOutcome: [
        'Replaced scattered spreadsheet tracking with a centralized advisor pipeline.',
        'Delivered full buyer context (budget, timeline, property interest) before the first call.',
        'Improved listing clarity for overseas diaspora buyers evaluating properties remotely.',
      ],
    },
    {
      slug: 'service-business-operations-automation-hub',
      title: 'Client Portal & Workflow Automation Hub',
      clientLabel: 'B2B Field & Technical Services Provider (Anonymized)',
      industry: 'Local & B2B Services',
      projectType: 'Client Portal & Operations Dashboard',
      statusLabel: 'Private client project · Live site no longer publicly available',
      deliveryYear: '2026',
      isLive: false,
      availabilityNotice:
          'Private client project delivered in 2026. Because it serves internal operations and client accounts, the live system is not publicly accessible.',
      oneLineOutcome:
          'Consolidated service requests, client approvals, invoice triggers, and webhook logs into one internal operations portal.',
      imageKey: 'operations',
      tags: ['Client portal', 'Operational dashboard', 'Automation', 'Webhooks'],
      servicesProvided: [
        'Internal Operations Dashboard Design',
        'Client Request & Approval Portal',
        'Webhook & Notification Automation',
        'Custom API Integrations',
      ],
      timeline: '7 weeks',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Resend', 'REST Webhooks'],
      problemBefore:
          'Service requests arrived via email and chat, active job statuses lived in three separate spreadsheets, and coordinators spent hours manually sending status updates and invoice reminders.',
      clientGoal:
          'Give recurring B2B clients one portal to submit service tickets and inspect job progress while automating internal handoffs and status notifications.',
      approach:
          'We shadowed the dispatch coordinator for a full cycle to simplify fourteen spreadsheet columns into five clear job states that both clients and field leads understood immediately.',
      whatWeBuilt:
          'A dark-mode operations hub with role-based client and coordinator views, structured ticket intake, automated stage-change emails, and webhook audit logs.',
      challenge:
          'Staff needed faster daily workflows than editing a spreadsheet, or adoption would stall.',
      solution:
          'We designed keyboard-friendly status transitions, instant ticket search, and automated client notifications whenever a job moves stage.',
      designDecisions: [
        'Used tabular monospace formatting across timestamps, webhook IDs, and ticket references for rapid scanning.',
        'Separated external client views cleanly from internal coordinator notes.',
        'Added an explicit webhook delivery log so failed downstream syncs are visible immediately.',
      ],
      processSteps: [
        'Shadowed the operations workflow from request intake to final billing.',
        'Simplified 14 spreadsheet columns into 5 clear job lifecycle stages.',
        'Built role-separated portal views for external clients and internal coordinators.',
        'Integrated automated email and webhook notifications with audit logging.',
      ],
      keyFeatures: [
        'Client-facing service request portal with live job stage visibility',
        'Coordinator operations dashboard with priority filtering and assignment',
        'Automated email notifications on ticket creation, approval, and completion',
        'Webhook integration log connecting job completion to accounting workflows',
      ],
      resultsOutcome: [
        'Eliminated repetitive status-update phone calls and email threads.',
        'Replaced fragmented spreadsheets with a single source of truth for active jobs.',
        'Removed manual administrative handoffs between dispatch coordinators and billing.',
      ],
    },
  ],
  testimonials: [
    {
      id: 't-brescia-grameen',
      quote:
          "It's transformed the way we work. Our clients love the transparency, our team loves the organization, and I love seeing everything in one place. A real game changer.",
      author: 'T T S Fernando',
      role: 'Managing Director',
      company: 'Brescia Grameen',
      categoryLabel: 'Operations & Transparency',
    },
    {
      id: 't-naveen-institute',
      quote:
          "It's not just software—it's like having a super-smart COO who never sleeps. We've gone from chaos to running like clockwork.",
      author: 'Naveen Appuhamy',
      role: 'Owner, Tutor',
      company: 'Naveen Institute',
      categoryLabel: 'Workflow Automation',
    },
    {
      id: 't-chaiyo-ceylon',
      quote:
          "Brightly didn't just build us a website—he built us a revenue machine. Orders doubled in the first month.",
      author: 'Umrul Shazmin',
      role: 'Owner',
      company: 'Chaiyo Ceylon',
      categoryLabel: 'E-Commerce & Conversion',
    },
    {
      id: 't-maryland-consultancy',
      quote:
          "We have gone from 'just another study abroad agency' to 'the go-to experts in Sri Lanka'. Our online bookings now exceed our direct visits.",
      author: 'Mitchelle Ibroughian',
      role: 'Owner',
      company: 'Maryland Consultancy',
      categoryLabel: 'Bookings & Positioning',
    },
    {
      id: 't-decent-delight',
      quote:
          'The difference is like night and day. Customers now trust us, and our bookings have never been higher.',
      author: 'Chanaka Daniel',
      role: 'Owner',
      company: 'Decent Delight',
      categoryLabel: 'Trust & Direct Bookings',
    },
  ],
  faqs: [
    {
      id: 'faq-1',
      question: 'What kind of businesses do you work with?',
      answer:
          'Webizera partners with clinics and healthcare providers, boutique hotels, villas, and tour operators, real-estate companies, local service businesses, and startups or SaaS teams that need reliable websites, booking flows, portals, or workflow automation.',
    },
    {
      id: 'faq-2',
      question: 'Do you build only websites or custom systems too?',
      answer:
          'Both. Many clients come to us for a conversion-focused website, while others need custom booking engines, client portals, internal dashboards, or automated integrations connected to their daily tools.',
    },
    {
      id: 'faq-3',
      question: 'How long does a project take?',
      answer:
          'A focused conversion website typically takes 3 to 4 weeks from diagnosis to launch. Custom booking systems, client portals, and multi-step web applications generally take 5 to 8 weeks depending on scope and integrations.',
    },
    {
      id: 'faq-7',
      question: 'Do you provide support after launch?',
      answer:
          'Yes. Every engagement includes a post-launch handover period, with optional monthly care plans covering uptime monitoring, security updates, performance checks, and conversion refinements.',
    },
  ],
};

export const PRINCIPLES = [
  {
    number: '01',
    title: 'Scope before aesthetics',
    body: 'Visual polish cannot save an unclear booking flow or broken lead routing. Every engagement begins by mapping how customers discover you and what manual steps slow your team down.',
  },
  {
    number: '02',
    title: 'Direct engineering communication',
    body: 'Questions are answered by the person designing and writing the system—keeping weekly feedback cycles fast, practical, and free of agency translation errors.',
  },
  {
    number: '03',
    title: 'Clean ownership at handover',
    body: 'You receive documented TypeScript code, clean deployment architecture, and full control over your domain, content, and customer records without proprietary lock-in.',
  },
];