import rickMobile from "../assets/img/rick_mobile.png";
import rickDesktop from "../assets/img/rick_desktop.png";
import rickTablet from "../assets/img/rick_tablet.png";
import rickVideo from "../assets/video/rick.mp4";

import dailyMobile from "../assets/img/daily_mobile.png";
import dailyDesktop from "../assets/img/daily_desktop.png";
import dailyTablet from "../assets/img/daily_tablet.png";
import dailyVideo from "../assets/video/daily.mp4";

import foodgramMobile from "../assets/img/foodgram_mobile.png";
import foodgramDesktop from "../assets/img/foodgram_desktop.png";
import foodgramTablet from "../assets/img/foodgram_tablet.png";
import foodgramVideo from "../assets/video/foodgram.mp4";

import socialMobile from "../assets/img/social_mobile.png";
import socialDesktop from "../assets/img/social_desktop.png";
import socialTablet from "../assets/img/social_tablet.png";
import socialVideo from "../assets/video/social.mp4";

export const projects = [
  {
    id: 4,
    mobileImg: socialMobile,
    desktopImg: socialDesktop,
    tabletImg: socialTablet,
    title: "Social Network",
    description: [
      {
        id: 1,
        value:
          "This projected was created using React with Redux in the frontend and using Express and a MySQL database in the backend with the help of Sequelize ORM.",
      },
      {
        id: 2,
        value:
          "It was features like register/login into your account and after you can update or delete your account. Here you can see posts made by other users, add comments or even like the post and you can also create your own posts. In the world page you can see the posts from all the users, but you can also start following those users and see their posts in the following page.",
      },
      {
        id: 3,
        value:
          "The application also uses the Observer API to create a pagination with infinite scrolling to fetch more posts and/or comments. Is still in development.",
      },
    ],
    githubRefs: [
      {
        id: "Frontend",
        value: "https://github.com/luisfilipemendonca/SocialNetwork-frontend",
      },
      {
        id: "Backend",
        value: "https://github.com/luisfilipemendonca/SocialNetwork-backend",
      },
    ],
    video: socialVideo,
  },
  {
    id: 3,
    mobileImg: foodgramMobile,
    desktopImg: foodgramDesktop,
    tabletImg: foodgramTablet,
    title: "Foodgram",
    description: [
      {
        id: 1,
        value:
          "My first MERN stack application, and also the first time I used Typescript and @redux-toolkit as a global state manager.",
      },
      {
        id: 2,
        value:
          "In this application you can register, login and ask for a password reset if you forget it. Here you will find a bunch of recipies where you can see the ingredients and also the steps to make them. You can also create or delete your own recipies, add recipies from other users to your favorites and also rate them.",
      },
      {
        id: 3,
        value:
          "You will also find features like search a recipie by name, order them by date or rate and also choose how many recipies you want to see per page.",
      },
    ],
    githubRefs: [
      {
        id: "Frontend",
        value: "https://github.com/luisfilipemendonca/Foodgram-Frontend",
      },
      {
        id: "Backend",
        value: "https://github.com/luisfilipemendonca/Foodgram-Backend",
      },
    ],
    video: foodgramVideo,
  },
  {
    id: 2,
    mobileImg: dailyMobile,
    desktopImg: dailyDesktop,
    tabletImg: dailyTablet,
    title: "The Daily Manager",
    description: [
      {
        id: 1,
        value:
          "This was my first full stack app, and my first experience with VueJS and Express. I also used Vuex has global state manager and Sequelize ORM to connect to MySQL Database.",
      },
      {
        id: 2,
        value:
          "In this application you can register and login into your account. Manage your contacts list by adding and removing them as well as your schedule using the task manager.",
      },
      {
        id: 3,
        value:
          "You can also control your account by adding your income and outcomes. It has also a chronometer if you need a time manager.",
      },
    ],
    githubRefs: [
      {
        id: "Frontend",
        value: "https://github.com/luisfilipemendonca/DailyManager-Frontend",
      },
      {
        id: "Backend",
        value: "https://github.com/luisfilipemendonca/DailyManager-Backend",
      },
    ],
    video: dailyVideo,
  },
  {
    id: 1,
    mobileImg: rickMobile,
    desktopImg: rickDesktop,
    tabletImg: rickTablet,
    title: "Rick and Morty",
    description: [
      {
        id: 1,
        value:
          "This was my first project using React. A simple user interface design using the Rick and Morty API.",
      },
      {
        id: 2,
        value:
          "It has features such as a Carousel where the characters are displayed, a Pagination to search the list of characters offered by the API and a SearchBox to search for your favorite characters.",
      },
    ],
    githubRefs: [
      {
        id: "Frontend",
        value: "https://github.com/luisfilipemendonca/RickMorty",
      },
    ],
    video: rickVideo,
  },
];
