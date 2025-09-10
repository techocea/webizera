import { Clock, Crown, Gauge, Rocket, Shield, Users, Zap } from "lucide-react";

export const NAV_ITEMS = [
  { label: "portfolio", href: "#portfolio" },
  { label: "services", href: "#services" },
  { label: "contact", href: "#contact" },
];

export const GALLERY = [
  {
    id: 1,
    name: "Chaiyo Ceylon - best chai tea in the country",
    imageSrc: "/chaiyo-ceylon.png",
  },
  {
    id: 2,
    name: "Maths and physics by naveen",
    imageSrc: "/naveen-institute.png",
  },
  {
    id: 3,
    name: "Maryland consulting - best study abroad agency in colombo",
    imageSrc: "/maryland.png",
  },
  {
    id: 4,
    name: "Mathwiz by Chamoda liyanage - the one of the best combined maths class in negombo",
    imageSrc: "/mathwiz.png",
  },
  {
    id: 6,
    name: "save the forests in our country, Sri Lanka",
    imageSrc: "/blog.png",
  },
  {
    id: 7,
    name: "Brescia Grameen",
    imageSrc: "/grameen.png",
  },
];

export const PORTFOLIO = [
  {
    id: 1,
    imageSrc: "/chaiyo-ceylon.png",
    name: "Chai-Ceylon – Café Ordering & Loyalty Website",
    description:
      "I built this modern platform for Chai-Ceylon, a boutique tea café, to let customers easily explore the menu, place orders online, and earn rewards with each purchase. The platform features a beautifully styled interface that reflects the café’s warm and cultural vibe.Customers can scan QR codes to view the menu instantly, place orders, and get real-time updates. The loyalty program encourages repeat visits, while the admin dashboard gives staff full control over orders, promotions, and customer engagement",
    features: [
      "Online Menu & Ordering",
      "Membership & Loyalty Program",
      "Membership & Loyalty Program",
      "Admin Dashboard",
      "Customer Engagement Tools",
    ],
  },
  {
    id: 2,
    imageSrc: "/naveen-institute.png",
    name: "Naveen Institute – Learning Management for Maths & Physics",
    description:
      "This system was developed for the Naveen Institute, a specialized Maths & Physics academy, to streamline both student and course management.The platform enables the institute to register students, schedule classes, and handle payments in one place. Teachers have access to a dedicated dashboard for monitoring progress, while students and parents receive reminders about classes and fees. With analytics tools, the institute can track overall performance and attendance trends, ensuring smooth operations and better academic outcomes.",
    features: [
      "Course & Student Management",
      "Online Timetable",
      "Attendance Tracking",
      "Teacher Dashboard",
      "Responsive UI",
    ],
  },
  {
    id: 3,
    imageSrc: "/maryland.png",
    name: "Maryland Consultancy – Study Abroad Website",
    description:
      "This platform was built for Maryland Consultancy, a study-abroad agency, to simplify the student application process and showcase their global opportunities.Students can explore partner universities, filter courses, and book consultation sessions directly from the site. With automated emails, applicants stay informed at every step. The clean design projects professionalism and trust, while the admin dashboard enables the consultancy team to manage applications and content in real-time.",
    features: [
      "Course Finder & Application Forms",
      "Partner Universities Showcase",
      "Consultation Booking",
      "Contact Forms with Email Automation",
      "Admin Dashboard",
      "Mobile-first Design",
    ],
  },
  {
    id: 4,
    imageSrc: "/mathwiz.png",
    name: "MathWiz – Personal Tutoring Platform for Chamoda Liyanage",
    description:
      "I designed MathWiz for Chamoda Liyanage, a private tutor, to deliver a professional online presence and management tool for tutoring services. The platform centralizes everything—students can book lessons, access learning resources, and manage payments seamlessly.With its polished interface, MathWiz also provides parents with progress insights, while the tutor benefits from automated scheduling, reminders, and easy course updates.",
    features: [
      "Class Scheduling",
      "Online Resources Library",
      "Payment & Subscription Plans",
      "Admin Dashboard",
      "Mobile-friendly UI",
      "Notifications",
    ],
  },
  {
    id: 5,
    imageSrc: "/blog.png",
    name: "Sri Lankan Forest View – Environmental Awareness Platform",
    description:
      "I developed this Sri Lankan Forest Blog Site to spread awareness about forest conservation and environmental protection. The site features an engaging design where readers can browse articles by category and explore multimedia content.Writers benefit from a simple content management system to post updates, while readers get a responsive, SEO-optimized experience across devices. The platform serves as an educational hub and advocacy tool to support sustainability efforts.",
    features: [
      "Blog Publishing System",
      "Category-based Posts",
      "Admin Panel for Content Management",
      "Media-rich Articles",
      "Mobile Optimized",
      "SEO-friendly",
    ],
  },
  {
    id: 6,
    imageSrc: "/grameen.png",
    name: "Brescia Grameen – Loan Institute Landing Page",
    description:
      "This project was created for Brescia Grameen, a financial institute providing loans for overseas employment and students.The landing page presents their services in a clear, trustworthy way, guiding users to quickly understand their offerings. With clean call-to-actions, inquiry forms, and a professional design, the site helps the institute capture leads efficiently and boost client confidence.",
    features: [
      "Modern Landing Page Design",
      "Services Highlight",
      "Contact & Inquiry Forms",
      "Trust-building UI",
      "Mobile Responsive",
      "Lead Capture Integration",
    ],
  },
];

export const SERVICES = [
  {
    id: 1,
    step: "Step 01",
    imageSrc: "/analysis.avif",
    title: "Problem analysis",
    description:
      "We identify your challenge precisely and define the optimal solution together.",
  },
  {
    id: 2,
    step: "Step 02",
    imageSrc: "/development.avif",
    title: "Development of the solution",
    description:
      "We create your tailor-made solution with the best technologies.",
  },
  {
    id: 3,
    step: "Step 03",
    imageSrc: "/testing.avif",
    title: "Testing and optimization",
    description: "Full validation, user testing and performance optimization.",
  },
  {
    id: 4,
    step: "Step 04",
    imageSrc: "/delivery.avif",
    title: "Delivery and support",
    description:
      "Final deployment, training and ongoing support for your team.",
  },
];

export const STATS = [
  {
    id: 1,
    icon: Rocket,
    label: "Average improvement in conversions",
    stat: "74%",
  },
  {
    id: 2,
    icon: Clock,
    label: "Typical delivery",
    stat: "2 weeks",
  },
  {
    id: 3,
    icon: Gauge,
    label: "Lighthouse Performance Score",
    stat: "95+",
  },
  {
    id: 4,
    icon: Users,
    label: "Satisfied customers",
    stat: "20+",
  },
];

export const PRICING = [
  {
    id: 1,
    icon: Zap,
    label: "Landing Page",
    description: "Perfect for showcasing your main service or product",
    points: [
      "Custom design",
      "Responsive",
      "Contact forms",
      "SEO optimization",
      "Optimized performance",
    ],
  },
  {
    id: 2,
    icon: Rocket,
    label: "Full website",
    description: "Complete solution for your online presence",
    points: [
      "Multi-page",
      "Management system",
      "E-commerce ready",
      "Integrated Analytics",
      "Admin Dashboard",
    ],
  },
  {
    id: 3,
    icon: Shield,
    label: "SaaS platform",
    description: "Custom web application for your busines",
    points: [
      "Custom development",
      "Payment system",
      "User Dashboard",
      "Admin Dashboard",
      "Deployment included",
    ],
  },
  {
    id: 4,
    icon: Crown,
    label: "Business",
    description: "Customized solutions for large companies",
    points: [
      "Enterprise integrations",
      "Dedicated support",
      "Security audit",
      "Guaranteed Sales",
      "Custom timeline",
    ],
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    author: "T T S Fernando",
    designation: "Managing Director, Brescia Grameen",
    testimonial:
      "It’s transformed the way we work. Our clients love the transparency, our team loves the organization, and I love seeing everything in one place. A real game changer.",
  },
  {
    id: 2,
    author: "Naveen Appuhamy",
    designation: "Owner, Tutor, Naveen Institute",
    testimonial:
      " It's not just software—it's like having a super-smart COO who never sleeps. We've gone from chaos to running like clockwork.",
  },
  {
    id: 3,
    author: "Umrul Shazmin",
    designation: "Owner, Chaiyo Ceylon",
    testimonial:
      "Brightly didn’t just build us a website—he built us a revenue machine. Orders doubled in the first month.",
  },
  {
    id: 4,
    author: "Mitchelle Ibroughian",
    designation: "Owner, Maryland Consultancy",
    testimonial:
      "We have gone from 'just another study abroad agency' to 'the go-to experts in Sri Lanka'. Our online bookings now exceed our direct visits.",
  },
  {
    id: 5,
    author: "Chanaka Daniel",
    designation: "Owner, Decent Delight",
    testimonial:
      "The difference is like night and day. Customers now trust us, and our bookings have never been higher.",
  },
];
