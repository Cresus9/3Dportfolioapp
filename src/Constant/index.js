import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    upwork,
    tisol,
    project1,
    project2,
    project3,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Wordpress",
      icon: mobile,
    },
    
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Web Developer",
      company_name: "Upwork",
      icon: upwork,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Owner/Manager",
      company_name: "Tisol LLC",
      icon: tisol,
      iconBg: "#383E56",
      date: "Feb 2021 - July 2022",
      points: [
      "Founded a small business providing tax services to private clients and small businesses.",
       "Spearheaded the development of comprehensive business plans and strategies to grow and sustain the business on the short- and long-term.",
      "Delivered high-quality tax preparation services to over 200 clients; fielded questions and offered guidance on tax-related matters, including long-term tax planning.",
      "Forged and cultivated strategic and trusting relationships with clients, local businesses, and community organizations to promote the business, generate word-of-mouth marketing, and secure referrals.",
      "Cultivated up-to-date knowledge about changes to tax laws and regulations, and adapted business practices accordingly."
      ],
    },
    {
      title: "Tax Clerk",
      company_name: "Accounting & Taxes",
      iconBg: "#E6DEDD",
      date: "Mar 2019 - Feb 2020",
      points: [
        "Collected and organized the required documents to assist in the preparation of tax returns of more than 300 customers.",
        "Assessed tax return accuracy and ensured compliance with applicable laws and regulations.",
        "Supported tax document reviews and audits for more than 150 customers by helping them better organize tax records.",
        "Attended seven professional development activities to stay up-to-date on tax laws and standard procedures.",
        
      ],
    },
   

  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "NEW YORK PRIVATE CHARTER APP",
      description:
        "Piloted the creation of a private jet charter application allowing user to book jets and view real-time updates,complete with a smooth scrolling experience.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Ruby on Rails",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: project3,
      source_code_link: "https://github.com/Cresus9/capstone_project-private_jet_charter",
    },
    {
      name: "WELLNESS CENTER",
      description:
        "Designed a hospital management application featuring doctor and patient portals as well as an admin validations and functionalities to better organize clients and hospital staff.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Ruby on Rails",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: project2,
      source_code_link: "https://github.com/jefftmarks/city-wellness-center",
    },
    {
      name: "REAL ESTATE APPLICATION",
      description:
        "Utilized Ruby and React.js to create a real estate portfolio tracking app allowing users to sign up and manage their accounts.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: project1,
      source_code_link: "https://github.com/Tomasmakaj/Real-Estate-App",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };