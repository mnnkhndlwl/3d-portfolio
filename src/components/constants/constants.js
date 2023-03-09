import {
    appwrite,
    c,
    sql,
    flutter,
    firebase,
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
    docker,
  } from "../../assets/index.js";
  
  export const navLinks = [
    {
      id: "Projects",
      title: "Projects",
    },
    {
      id: "Experiences",
      title: "Experiences",
    },
    {
      id: "Tech",
      title: "Tech",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  // const services = [
  //   {
  //     title: "Web Developer",
  //     icon: web,
  //   },
  //   {
  //     title: "React Native Developer",
  //     icon: mobile,
  //   },
  //   {
  //     title: "Backend Developer",
  //     icon: backend,
  //   },
  //   {
  //     title: "Content Creator",
  //     icon: creator,
  //   },
  // ];
  
  const technologies = [
    {
      name: "TypeScript",
      icon: typescript,
    },
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
      name: "Firebase",
      icon: firebase,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "flutter",
      icon: flutter,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "appwrite",
      icon: appwrite,
    },
    {
      name: "c++",
      icon: c,
    },
    {
      name: "sql",
      icon: sql,
    },
  ];
  
  const projects = [
    {
      name: "Youtube Clone",
      description:
        "A youtube clone built with MERN Stack and firebase.It has all the basic features of the youtube like subscribe/unsubscribe.Users can upload their videos and other users can comment and share those videos",
      tags: [
        {
          name: "mern",
          color: "blue-text-gradient",
        },
        {
          name: "docker",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "pink-text-gradient",
        },
      ],
      image: "https://user-images.githubusercontent.com/75252077/215504244-3c88e023-4749-4366-99f5-b50575440c94.png",
      source_code_link: "https://github.com/mnnkhndlwl/mern_youtube_clone",
    },
    {
      name: "Twitter clone",
      description:
        "Twitter clone built with flutter and appwrite.Used flutter for frontend and appwrite for backend.used appwrite authentication,storage and database. it has all the basic features of twitter like tweeting, liking , retweet and commenting.",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "appwrite",
          color: "green-text-gradient",
        },
        {
          name: "auth",
          color: "pink-text-gradient",
        },
      ],
      image: "https://s.yimg.com/uu/api/res/1.2/RImhbEKursv.Ovs505gQOQ--~B/Zmk9ZmlsbDtoPTU4Mzt3PTg3NTthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2022-10/30fdb520-5981-11ed-86dd-bd24edce9c7b.cf.jpg",
      source_code_link: "https://github.com/mnnkhndlwl/flutter-twitter",
    },
    {
      name: "Deliveroo 2.0",
      description:
        "Built a Deliveroo clone with react native and sanity.io. Used react native as frontend and sanity.io for backend purposes. Built a beutiful ui for mobile devices and used redux toolkit for state management.",
      tags: [
        {
          name: "reactNative",
          color: "blue-text-gradient",
        },
        {
          name: "sanity.io",
          color: "green-text-gradient",
        },
        {
          name: "redux",
          color: "pink-text-gradient",
        },
      ],
      image: "https://www.techsciresearch.com/admin/gall_content/2022/3/2022_3$blog_Online%20Grocery%20Delivery%202.0%20-%20TechSci%20Research.jpg_25_Mar_2022_105059033.jpg",
      source_code_link: "https://github.com/mnnkhndlwl/deliveroo-2.0",
    },
    {
      name: "Krypt",
      description:
        "Krypt is a Web3.0 application by which you can send etherium to others and also see your recent transactions. Used reactjs to build frontend and solidity and nodejs for backend",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "node",
          color: "green-text-gradient",
        },
        {
          name: "solidity",
          color: "pink-text-gradient",
        },
      ],
      image: "https://portfolio-mnnkhndlwl.vercel.app/images/2.png",
      source_code_link: "https://github.com/mnnkhndlwl/krypt-web3.0-react",
    },
    {
      name: "Social media app",
      description:
        "Using React, Node.js, Express & MongoDB Using this Social media app you can send messages upload pictures and follow and unfollow others. Users can alos follow and unfollow other userss",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "node",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: "https://portfolio-mnnkhndlwl.vercel.app/images/1.png",
      source_code_link: "https://github.com/mnnkhndlwl/mern-social-media",
    },
    {
      name: "Gif Downloader",
      description:
        "It is chrome extension which i built so that users can search and download gifs on their device. Used HTML,CSS and JAVASCRIPT to built the extension and used giphy api",
      tags: [
        {
          name: "chrome",
          color: "blue-text-gradient",
        },
        {
          name: "giphyAPI",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: "https://user-images.githubusercontent.com/75252077/153710690-d832e683-db78-4584-9588-aabab0c4aef2.png",
      source_code_link: "https://github.com/mnnkhndlwl/Chrome-Extension/tree/main/Gif%20Downloader",
    },
  ];
  
  export { technologies,projects};