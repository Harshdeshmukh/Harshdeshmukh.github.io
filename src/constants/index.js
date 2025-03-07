export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#projects',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const myProjects = [
    {
        title: 'Community-Driven Social Review Platform',
        desc: 'A platform allowing users to review businesses and products with features like Q&A, group messaging, and media galleries.',
        subdesc: 'Developed using React.js, Django, Redux, and OneSignal push notifications. Built scalable APIs in Django, optimized database queries, and implemented a robust state management system.',
        href: 'https://www.example.com',
        texture: '/textures/project/project4.mp4',
        logo: '/assets/project-logo5.png',
        logoStyle: {
            backgroundColor: '#1C1A43',
            border: '0.2px solid #252262',
            boxShadow: '0px 0px 60px 0px #635BFF4D',
        },
        spotlight: '/assets/spotlight5.png',
        tags: [
            {id: 1, name: 'React.js', path: '/assets/reactjs.png'},
            {id: 2, name: 'Django', path: '/assets/django.png'},
            {id: 3, name: 'Bootstrap', path: '/assets/bootstrap.png'},
            {id: 4, name: 'Firebase', path: '/assets/Firebase.png'},
        ],
    },
    {
        title: 'Comprehensive Healthcare & Wellness Management Platform',
        desc: 'A healthcare platform for managing patient wellness, medications, and health records with scheduling and reminders.',
        subdesc: 'Developed using React, Ruby on Rails, Google Maps API, Google Calendar, and AI integrations. Implemented payment gateways (PayPal, Bamboar), autoship orders, and AI-powered health tracking.',
        href: 'https://www.example.com',
        texture: '/textures/project/project3.mp4',
        logo: '/assets/project-logo3.png',
        logoStyle: {
            backgroundColor: '#60f5a1',
            border: '0.2px solid rgba(208, 213, 221, 1)',
            boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
        },
        spotlight: '/assets/spotlight3.png',
        tags: [
            {id: 1, name: 'React.js', path: '/assets/reactjs.png'},
            {id: 2, name: 'Ruby on Rails', path: '/assets/ruby-on-rails.png'},
            {id: 3, name: 'Google Maps API', path: '/assets/google-maps.png'},
            {id: 4, name: 'PayPal API', path: '/assets/paypal.png'},
        ],
    },
    {
        title: 'AI-Powered E-Commerce Enhancements',
        desc: 'AI-driven enhancements for an e-commerce website, improving customer support and backend functionality.',
        subdesc: 'Developed AI-powered query search with table, graph, and SQL output using Generative AI. Implemented "Login as Client" feature for support teams and backend AI database integration.',
        href: 'https://www.example.com',
        texture: '/textures/project/project2.mp4',
        logo: '/assets/project-logo4.png',
        logoStyle: {
            backgroundColor: '#0E1F38',
            border: '0.2px solid #0E2D58',
            boxShadow: '0px 0px 60px 0px #2F67B64D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {id: 1, name: 'React.js', path: '/assets/reactjs.png'},
            {id: 2, name: 'Django', path: '/assets/django.png'},
            {id: 3, name: 'Open AI', path: '/assets/openai.png'},
            {id: 4, name: 'Postgres SQL', path: '/assets/postgresql.png'},
        ],
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.04 : isMobile ? 0.05 : 0.065,
        deskPosition: isMobile ? [0.5, -2.7, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [2.7, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'Ksolves India Ltd',
        pos: 'Software Engineer',
        duration: 'Sep 2022 - Present',
        title: "Developed and optimized complex web applications using React.js, Django, and Ruby on Rails. Led frontend development for admin portals, user management systems, and AI-powered support tools. Integrated payment gateways, real-time messaging, and push notifications. Built scalable RESTful APIs and optimized application performance.",
        icon: '/assets/ksolves.png',
        animation: 'victory',
    },
];
