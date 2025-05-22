import { Project, Service, TeamMember, Testimonial } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Everlast Fitness App",
    category: "Mobile App",
    description: "A comprehensive fitness tracking app with AI-powered workout recommendations and progress tracking.",
    image: "https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    client: "Everlast Fitness",
    year: 2023,
    link: "https://everlast.com"
  },
  {
    id: 2,
    title: "Bloom E-commerce Platform",
    category: "Web Development",
    description: "A fully responsive e-commerce platform with advanced filtering and seamless checkout experience.",
    image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    client: "Bloom Retail",
    year: 2023,
    link: "https://bloomretail.com"
  },
  {
    id: 3,
    title: "Horizon Investment Dashboard",
    category: "Web Application",
    description: "An interactive dashboard for investment tracking with real-time data visualization and portfolio management.",
    image: "https://images.pexels.com/photos/7567440/pexels-photo-7567440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    client: "Horizon Investments",
    year: 2022,
    link: "https://horizoninvest.com"
  },
  {
    id: 4,
    title: "Nova Social Media Platform",
    category: "Mobile App",
    description: "A next-generation social media platform focused on authentic connections and mental wellbeing.",
    image: "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    client: "Nova Connect",
    year: 2022,
    link: "https://novaconnect.io"
  },
  {
    id: 5,
    title: "Pulse Health Monitoring",
    category: "Web Application",
    description: "A healthcare monitoring system that connects patients with healthcare providers for remote monitoring.",
    image: "https://images.pexels.com/photos/8413363/pexels-photo-8413363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    client: "Pulse Healthcare",
    year: 2023,
    link: "https://pulsehealth.care"
  },
  {
    id: 6,
    title: "Vantage Real Estate Platform",
    category: "Web Development",
    description: "A comprehensive real estate platform with virtual tours, property management, and market analytics.",
    image: "https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    client: "Vantage Properties",
    year: 2022,
    link: "https://vantageproperties.com"
  }
];

export const services: Service[] = [
  {
    id: 1,
    title: "UI/UX Design",
    description: "We create beautiful, intuitive interfaces that drive engagement and deliver exceptional user experiences.",
    icon: "palette"
  },
  {
    id: 2,
    title: "Web Development",
    description: "Our team builds scalable, high-performance websites and web applications using cutting-edge technologies.",
    icon: "code"
  },
  {
    id: 3,
    title: "Mobile Development",
    description: "We develop native and cross-platform mobile applications that deliver seamless experiences across devices.",
    icon: "smartphone"
  },
  {
    id: 4,
    title: "Digital Strategy",
    description: "Our strategic approach ensures your digital presence aligns with your business goals and drives growth.",
    icon: "strategy"
  },
  {
    id: 5,
    title: "Brand Identity",
    description: "We craft compelling brand identities that resonate with your audience and stand out in the market.",
    icon: "badge"
  },
  {
    id: 6,
    title: "Digital Marketing",
    description: "Our data-driven marketing strategies help you reach your target audience and achieve measurable results.",
    icon: "megaphone"
  }
];

export const team: TeamMember[] = [
  {
    id: 1,
    name: "Alex Morgan",
    role: "Founder & CEO",
    bio: "With over 15 years of experience in digital innovation, Alex leads our company vision and strategic direction.",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    name: "Samantha Chen",
    role: "Creative Director",
    bio: "Samantha brings her award-winning design expertise to lead our creative team in delivering stunning visual solutions.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    name: "Marcus Johnson",
    role: "Technical Lead",
    bio: "Marcus oversees all technical aspects of our projects, ensuring we deliver robust, scalable solutions for our clients.",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 4,
    name: "Priya Patel",
    role: "UX Director",
    bio: "Priya specializes in creating intuitive user experiences that balance business objectives with user needs.",
    image: "https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "David Wilson",
    company: "Everlast Fitness",
    testimonial: "Elite8 Digital transformed our business with their innovative approach. The app they developed exceeded our expectations and has significantly improved user engagement.",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    name: "Jennifer Lee",
    company: "Bloom Retail",
    testimonial: "Working with Elite8 Digital was a game-changer for our e-commerce business. Their attention to detail and user-centric approach resulted in a 40% increase in conversions.",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    company: "Horizon Investments",
    testimonial: "The team at Elite8 Digital delivered a complex dashboard that simplified our data visualization needs. Their technical expertise and creative problem-solving were impressive.",
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];