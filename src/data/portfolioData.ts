import { Project, Service, Experience, Testimonial, SkillCategory } from '../types';

import kaifPortrait from '../assets/images/kaif_portrait_real.jpeg';
import kaifLogo from '../assets/images/kaif_logo_real.jpeg';
import zaxflixImg from '../assets/images/zaxflix_preview_1789027877062.jpg';
import ecommerceImg from '../assets/images/ecommerce_preview_1789027902254.jpg';
import realestateImg from '../assets/images/realestate_preview_1789027917531.jpg';

export const PERSONAL_INFO = {
  name: 'Kaif Qaiser',
  shortName: 'KQ',
  title: 'Professional WordPress Developer',
  experienceYears: '3+',
  location: 'Lahore, Pakistan',
  phone: '03268565373',
  displayPhone: '+92 326 8565373',
  email: 'mrk371169@gmail.com',
  linkedin: 'https://www.linkedin.com/in/kaif-qaiser-105264326/',
  avatar: kaifPortrait,
  logo: kaifLogo,
  headline: 'WordPress Developer Who Builds Fast, Beautiful & Scalable Websites',
  subheadline: '3 Years of Professional Experience | Elementor Pro | WooCommerce | JetEngine | ACF',
  bio: 'Specialized WordPress Developer based in Lahore, Pakistan with 3 years of hands-on experience architecting high-performance WooCommerce stores, custom Elementor Pro pages, and complex dynamic platforms using JetEngine and ACF. Passionate about pixel-perfect responsive layouts, lightning-fast Core Web Vitals, and bulletproof security.',
  address: 'Railway Station Near Khair Din Road, Lahore, Pakistan',
  availability: 'Available for freelance projects & full-time opportunities'
};

export const STATS = [
  { value: '3+', label: 'Years Experience', subtext: 'Continuous hands-on delivery' },
  { value: '20+', label: 'Projects Completed', subtext: 'From bespoke sites to stores' },
  { value: '10+', label: 'Happy Clients', subtext: 'Worldwide & local agencies' },
  { value: '100%', label: 'Client Satisfaction', subtext: 'Rated 5-stars for speed & detail' },
];

export const SKILLS_LIST = [
  'WordPress',
  'WooCommerce',
  'Elementor Pro',
  'Divi Builder',
  'JetEngine',
  'ACF (Advanced Custom Fields)',
  'PHP',
  'JavaScript',
  'CSS3',
  'HTML5',
  'Bootstrap',
  'MySQL',
  'SEO Optimization',
  'Speed Optimization'
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'WordPress & Page Builders',
    skills: [
      { name: 'WordPress Core & Architecture', level: 98, featured: true },
      { name: 'Elementor Pro & Theme Builder', level: 96, featured: true },
      { name: 'WooCommerce & Checkout UX', level: 94, featured: true },
      { name: 'Divi Builder', level: 88 },
      { name: 'Ocean WP & Hello Elementor', level: 95 }
    ]
  },
  {
    category: 'Dynamic CMS ',
    skills: [
      { name: 'JetEngine', level: 95, featured: true },
      { name: 'Advanced Custom Fields (ACF)', level: 96, featured: true },
      { name: 'Custom Post Types & Relations', level: 94 },
      { name: 'JetSmartFilters & Query Builder', level: 92 },
      { name: 'Dynamic Field Templates', level: 90 }
    ]
  },
  {
    category: 'Code & Backend',
    skills: [
      { name: 'PHP & Theme Customization', level: 88, featured: true },
      { name: 'MySQL Database Management', level: 84 },
      { name: 'JavaScript (ES6+) & DOM', level: 86 },
      { name: 'HTML5 & CSS3 Animations', level: 96 },
      { name: 'Bootstrap & Responsive Layouts', level: 92 }
    ]
  },
  {
    category: 'Optimization & Security',
    skills: [
      { name: 'Speed & Core Web Vitals (90+)', level: 95, featured: true },
      { name: 'On-Page SEO Optimization', level: 90 },
      { name: 'WordPress Security & Hardening', level: 92 },
      { name: 'Site Migration & Cloud Backups', level: 95 },
      { name: 'Payment Gateways & Webhooks', level: 90 }
    ]
  }
];

export const SERVICES: Service[] = [
  {
    id: 'custom-wp',
    title: 'Custom WordPress Development',
    iconName: 'Code2',
    description: 'Bespoke WordPress websites developed from Figma, Adobe XD, or custom requirements with clean code and no bloat.',
    deliverables: [
      'Tailored theme architecture and lightweight codebase',
      'Pixel-perfect, fully responsive mobile-first implementation',
      'Cross-browser compatibility testing & accessibility',
      'Complete CMS handover with editable modules'
    ],
    techStack: ['WordPress', 'PHP', 'HTML5/CSS3', 'JavaScript']
  },
  {
    id: 'woocommerce-dev',
    title: 'WooCommerce Store Development',
    iconName: 'ShoppingBag',
    description: 'High-converting online eCommerce stores equipped with modern checkout flows, inventory syncing, and secure payment processing.',
    deliverables: [
      'Custom product catalog, single product templates, and Ajax search',
      'Multi-gateway payment integrations (Stripe, PayPal, COD)',
      'Frictionless multi-step or single-page checkout configuration',
      'Automated email notifications, shipping rules, and tax setups'
    ],
    techStack: ['WooCommerce', 'Stripe', 'Elementor Pro', 'PHP']
  },
  {
    id: 'elementor-pro',
    title: 'Elementor Pro Page Design',
    iconName: 'Layout',
    description: 'Expert-level visual design using Elementor Pro. Crafting fluid layouts, custom header/footer templates, and animated UI components.',
    deliverables: [
      'Custom Elementor Theme Builder templates (Header, Footer, Single, Archive)',
      'Micro-interactions, sticky headers, and smooth entry animations',
      'Modular global design system (colors, typography, spacing tokens)',
      'Optimized container nesting to maintain high DOM efficiency'
    ],
    techStack: ['Elementor Pro', 'Custom CSS', 'Motion Effects']
  },
  {
    id: 'jetengine-acf',
    title: 'Dynamic Website with JetEngine & ACF',
    iconName: 'Layers',
    description: 'Complex data structures, custom post types, metadata fields, dynamic relations, and faceted filters for directories, real estate, and listings.',
    deliverables: [
      'Custom Post Types (CPT) and Custom Taxonomies creation',
      'ACF Flexible Content and JetEngine dynamic listing grids',
      'Faceted real-time search & filters with JetSmartFilters',
      'User dashboard, front-end submission forms, and relations'
    ],
    techStack: ['JetEngine', 'ACF Pro', 'Crocoblock', 'Custom Queries']
  },
  {
    id: 'speed-optimization',
    title: 'Speed & Core Web Vitals Optimization',
    iconName: 'Zap',
    description: 'Elevate page load speeds to 90+ on Google PageSpeed Insights and GTmetrix. Enhance user retention and organic SEO rankings.',
    deliverables: [
      'Asset minification, script deferral, and critical CSS inline delivery',
      'Next-gen WebP image conversion, lazy-loading, and CDN integration',
      'Server-side & object caching (Redis/Memcached/WP Rocket)',
      'Database cleanup, transient clearing, and DOM node reduction'
    ],
    techStack: ['Core Web Vitals', 'WP Rocket', 'Litespeed', 'Cloudflare']
  },
  {
    id: 'security-maintenance',
    title: 'WordPress Maintenance & Security',
    iconName: 'ShieldCheck',
    description: 'Continuous monitoring, routine offsite backups, security hardening, plugin compatibility audits, and rapid vulnerability patching.',
    deliverables: [
      'Firewall setup, brute-force login shielding, and 2FA implementation',
      'Scheduled automated cloud backups (Google Drive / AWS S3)',
      'Staging environment testing for theme/plugin updates',
      '24/7 uptime monitoring and emergency malware disinfection'
    ],
    techStack: ['Wordfence', 'Sucuri', 'SSL', 'Automated Backups']
  },
  {
    id: 'landing-page',
    title: 'Landing Page Development',
    iconName: 'Compass',
    description: 'High-impact landing pages crafted specifically for lead generation, PPC advertising campaigns, and direct SaaS conversions.',
    deliverables: [
      'Conversion-focused layout hierarchy with compelling CTA placement',
      'Seamless CRM / Mailchimp / Webhook form integrations',
      'Sub-2 second load speeds for optimal ad spend ROI',
      'A/B testing readiness and Meta Pixel / GA4 tag configuration'
    ],
    techStack: ['Elementor Pro', 'CF7 / WPForms', 'GA4 Tracking']
  },
  {
    id: 'plugin-theme-custom',
    title: 'Plugin & Theme Customization',
    iconName: 'Wrench',
    description: 'Custom PHP hooks, actions, filters, shortcodes, and styling tweaks to adapt pre-built themes and plugins to exact client workflows.',
    deliverables: [
      'Child theme setup preventing update loss',
      'Custom PHP functions via functions.php and custom micro-plugins',
      'Third-party REST API integrations and custom webhooks',
      'Troubleshooting complex plugin conflicts and fatal errors'
    ],
    techStack: ['PHP Hooks', 'REST API', 'Child Themes', 'CSS3']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'zaxflix',
    title: 'Zaxflix',
    category: 'custom',
    categoryLabel: 'Streaming Aggregator',
    subtitle: 'Movie & TV Aggregator Platform with Dynamic Streaming UI',
    description: 'Movie & TV aggregator website built with high-efficiency architecture, category-based browsing, responsive dark UI, and instant streaming discovery with no sign-up required. Features rich metadata querying, mobile responsiveness, and ultra-fast media loading.',
    image: zaxflixImg,
    tags: ['Next.js Architecture', 'Streaming UI', 'Dynamic Filters', 'Responsive Dark Mode'],
    liveUrl: 'https://zaxflix.com/',
    featured: true,
    metrics: [
      { label: 'Category Discovery', value: 'Instant' },
      { label: 'User Sign-up', value: 'Zero Friction' },
      { label: 'Mobile Score', value: '98/100' }
    ],
    deliverables: [
      'Category-based movie & TV series discovery catalog',
      'High-contrast dark streaming interface with glowing accents',
      'Responsive video player modal with multi-source fallback',
      'Optimized lightweight asset delivery for zero playback lag'
    ]
  },
  {
    id: 'aura-luxe',
    title: 'Aura Luxe E-Commerce',
    category: 'ecommerce',
    categoryLabel: 'WooCommerce Store',
    subtitle: 'Luxury Apparel & Accessories Store with Seamless Checkout',
    description: 'Comprehensive WooCommerce build for a contemporary luxury brand. Engineered with instant Ajax mini-cart, live attribute filtering, Stripe payment gateway, and tailored transactional order emails.',
    image: ecommerceImg,
    tags: ['WordPress', 'WooCommerce', 'Elementor Pro', 'Stripe Gateway', 'Speed 96+'],
    liveUrl: 'https://zaxflix.com/',
    featured: true,
    metrics: [
      { label: 'Checkout Speed', value: '< 2.1s' },
      { label: 'Conversion Lift', value: '+34%' },
      { label: 'Gateways', value: 'Stripe + ApplePay' }
    ],
    deliverables: [
      'Custom WooCommerce product archive with dynamic variation swatches',
      'Ajax sliding side-cart and one-click coupon checkout',
      'Stripe & PayPal secure multi-currency payment integration',
      'Core Web Vitals tuning reaching 95+ score on mobile'
    ]
  },
  {
    id: 'urbannest-realty',
    title: 'UrbanNest Realty Directory',
    category: 'dynamic',
    categoryLabel: 'Dynamic Directory',
    subtitle: 'Real Estate & Rental Portal with JetEngine & ACF',
    description: 'Dynamic property listing portal built with Crocoblock JetEngine and ACF Pro. Includes custom post types for properties, agent profiles, interactive map filtering, and automated inquiry distribution.',
    image: realestateImg,
    tags: ['JetEngine', 'ACF Pro', 'Crocoblock', 'Custom Queries', 'Google Maps API'],
    liveUrl: 'https://zaxflix.com/',
    featured: true,
    metrics: [
      { label: 'CPT Records', value: '500+ Listings' },
      { label: 'Faceted Filters', value: '8 Parameters' },
      { label: 'Page Load', value: '1.4s' }
    ],
    deliverables: [
      'Custom post types for Properties, Neighborhoods, and Realtors',
      'JetSmartFilters for instant price, bedroom, and location search',
      'Dynamic single property templates with virtual tour embeds',
      'Front-end agent listing submission and moderation dashboard'
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'nxp-tech',
    company: 'NXP Tech',
    role: 'Professional WordPress Developer',
    period: 'Dec 2024 – Present',
    location: 'Lahore, Pakistan',
    current: true,
    highlights: [
      'Develop responsive and high-performance WordPress websites for international and domestic clients.',
      'Build dynamic, data-driven web solutions leveraging Elementor Pro, Advanced Custom Fields (ACF), and Crocoblock JetEngine.',
      'Customize WordPress themes and plugins from scratch according to strict client technical requirements.',
      'Develop robust WooCommerce stores with end-to-end payment gateway integrations, shipping rules, and tax configurations.',
      'Optimize website speed and Google Core Web Vitals to consistently achieve 90+ performance scores.',
      'Perform continuous website maintenance, security updates, offsite backups, and emergency bug fixing.',
      'Implement SEO best practices, structured schema markup, and technical search engine accessibility.',
      'Collaborate closely with UI/UX designers, project managers, and QA teams to deliver high-quality web projects.'
    ],
    skillsUsed: ['WordPress', 'Elementor Pro', 'WooCommerce', 'JetEngine', 'ACF', 'PHP', 'Core Web Vitals', 'SEO']
  },
  {
    id: 'maftech',
    company: 'Maftech',
    role: 'WordPress Developer',
    period: 'Jun 2024 – Nov 2024',
    location: 'Lahore, Pakistan',
    current: false,
    highlights: [
      'Designed and developed custom WordPress websites utilizing Elementor Pro and bespoke CSS.',
      'Customized WordPress commercial themes and extensions to match bespoke client brand guidelines.',
      'Built fully functional WooCommerce online stores and high-converting marketing landing pages.',
      'Optimized website loading speeds, resolved critical PHP warnings, and fixed cross-browser CSS glitches.',
      'Managed zero-downtime website migrations between cPanel, Cloudways, and VPS hosting providers.'
    ],
    skillsUsed: ['WordPress', 'Elementor', 'WooCommerce', 'Plugin Customization', 'Site Migration', 'Speed Tuning']
  },
  {
    id: 'why-tech-solution',
    company: 'Why Tech Solution',
    role: 'WordPress Developer',
    period: 'Jan 2024 – May 2024',
    location: 'Lahore, Pakistan',
    current: false,
    highlights: [
      'Assisted in full-lifecycle WordPress website development projects for SMB clients.',
      'Customized WordPress themes and plugins with custom PHP snippets, action hooks, and CSS styling.',
      'Constructed pixel-perfect, mobile-first responsive pages using Elementor.',
      'Performed rigorous cross-device website testing, regression testing, and post-launch maintenance.',
      'Worked closely with senior WordPress architects on client deliverables and timeline adherence.'
    ],
    skillsUsed: ['WordPress', 'Elementor', 'HTML5', 'CSS3', 'Bootstrap', 'PHP Debugging', 'Responsive Design']
  }
];

export const EDUCATION = [
  {
    degree: 'Intermediate (ICS - Computer Science)',
    institution: 'Islamia College',
    period: 'Oct 2021 – May 2023',
    location: 'Lahore, Pakistan',
    details: 'Foundations of Computer Science, Programming Logic, and Database Management Systems.'
  },
  {
    degree: 'Professional Web Development Diploma',
    institution: 'Peak Solution (IT) Institute',
    period: 'Mar 2024 – Jun 2024',
    location: 'Lahore, Pakistan',
    details: 'Intensive practical training in modern Web Development, PHP, MySQL, WordPress Theme & Plugin Architecture.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Hamza Malik',
    role: 'Agency Founder & Director',
    company: 'PixelCraft Studio',
    content: 'Kaif is one of the sharpest WordPress and WooCommerce developers I have had the pleasure to work with. He took our complex Figma designs and translated them into Elementor Pro with zero layout deviations. Furthermore, he boosted our PageSpeed from 42 to 94. Truly dependable!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    projectType: 'Custom WooCommerce Build'
  },
  {
    id: 't2',
    name: 'David Reynolds',
    role: 'Product Lead',
    company: 'Digital Horizon US',
    content: 'We contracted Kaif for a multi-faceted directory project requiring custom JetEngine post relations and ACF fields. His technical grasp of Crocoblock and custom queries is exceptional. Delivered before the deadline with flawless communication.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    projectType: 'JetEngine & ACF Portal'
  },
  {
    id: 't3',
    name: 'Sarah Jenkins',
    role: 'E-commerce Brand Owner',
    company: 'Verve Essentials',
    content: 'From checkout optimization to instant cart loading and Stripe setup, Kaif handled our store redesign seamlessly. Sales conversions jumped by over 30% within the first month. He continues to manage our site updates and security without a hiccup.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    projectType: 'Store Redesign & Speed'
  }
];
