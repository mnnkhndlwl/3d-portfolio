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
  
  const technologies = [
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "flutter",
      icon: flutter,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
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
      name: "Tailwind CSS",
      icon: tailwind,
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
  
 export const Contacts = [
    {
      name: "Linkedin",
      contact_link: "https://www.linkedin.com/in/mnnkhndlwl/",
      icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
    },
    {
      name: "Email ",
      contact_link: "mailto:mnnkhndlwl24@gmail.com",
      icon: "M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z",
    },
    {
      name: "Github",
      contact_link: "https://www.github.com/mnnkhndlwl",
      icon: "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2.218 18.616c-.354.069-.468-.149-.468-.336v-1.921c0-.653-.229-1.079-.481-1.296 1.56-.173 3.198-.765 3.198-3.454 0-.765-.273-1.389-.721-1.879.072-.177.312-.889-.069-1.853 0 0-.587-.188-1.923.717-.561-.154-1.159-.231-1.754-.234-.595.003-1.193.08-1.753.235-1.337-.905-1.925-.717-1.925-.717-.379.964-.14 1.676-.067 1.852-.448.49-.722 1.114-.722 1.879 0 2.682 1.634 3.282 3.189 3.459-.2.175-.381.483-.444.936-.4.179-1.413.488-2.037-.582 0 0-.37-.672-1.073-.722 0 0-.683-.009-.048.426 0 0 .46.215.777 1.024 0 0 .405 1.25 2.353.826v1.303c0 .185-.113.402-.462.337-2.782-.925-4.788-3.549-4.788-6.641 0-3.867 3.135-7 7-7s7 3.133 7 7c0 3.091-2.003 5.715-4.782 6.641z",
    },
    {
      name: "Instagram",
      contact_link: "https://www.instagram.com/dev4.07/",
      icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
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
        "Twitter clone built with flutter and appwrite.used appwrite authentication,storage and database. it has all the basic features of twitter like tweeting, liking , retweet and commenting.",
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
      image: "./deli.png",
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
      image: "./gifdown.png",
      source_code_link: "https://github.com/mnnkhndlwl/Chrome-Extension/tree/main/Gif%20Downloader",
    },
  ];
  
  export { technologies,projects};