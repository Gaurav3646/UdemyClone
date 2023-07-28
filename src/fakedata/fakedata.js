import playIcon from "/icons/play-button.png";
import articleIcon from "/icons/application.png";
import certificateIcon from "/icons/certificate.png";
import cardImg from "/images/card.jpg";
import cardImg2 from "/images/card2.jpg";
import cardImg3 from "/images/card3.jpg";
import showcaseImg from "/images/showcase.jpg";
import showcaseImg2 from "/images/showcase2.jpg";
import showcaseImg3 from "/images/showcase3.jpg";
import bannerImg1 from "/images/banners/banner1.jpg";
import bannerImg2 from "/images/banners/banner2.jpg";
import bannerImg3 from "/images/banners/banner3.jpg";
import teachIcon from "/icons/teach.png";
import screen from "/icons/screen.png";
import memo from "/icons/memo.png";
import trophy from "/icons/trophy.png";
import clipboard from "/icons/clipboard.png";
import folderDownload from "/icons/folder-download.png";
import subtitles from "/icons/subtitles.png";
import askIcon from "/icons/ask.png";
import mobile from "/icons/mobile-button.png";
import groupUsersIcon from "/icons/group-users.png";

const Learnings = {
  ttl: "What you'll learn",
  points: [
    "Develop modern, complex, responsive and scalable web applications with Angular",
    "Fully understand the architecture behind an Angular application and how to use it",
    "Use the gained, deep understanding of the Angular fundamentals to quickly establish yourself as a frontend developer",
    "Create single-page applications with one of the most modern JavaScript frameworks out there",
  ],
  // prefix: "✅",
};

const courseIncludes = [
  {
    id: "1",
    img: screen,
    txt: "36 hours on-demand video",
  },
  {
    id: "2",
    img: mobile,
    txt: "Access on mobile and TV",
  },
  {
    id: "3",
    img: memo,
    txt: "Assignments",
  },
  {
    id: "4",
    img: subtitles,
    txt: "Closed captions",
  },
  {
    id: "5",
    img: clipboard,
    txt: "47 articles",
  },
  {
    id: "6",
    img: trophy,
    txt: "Certificate of completion",
  },
  {
    id: "7",
    img: folderDownload,
    txt: "179 downloadable resources",
  },
];

const courseDetails = {
  secs: "15",
  lects: "146",
  duration: "14h 42m",
};

const courseData = [
  {
    id: "t1",
    ttl: "Getting Started",
    lects: "10",
    dur: "41min",
    list: [
      {
        id: "t11",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "video",
        desc: "",
        resources: [
          {
            id: "t111",
            text: "css file",
            link: "https://github.com/",
            icon: teachIcon,
            downloadable: false,
          },
        ],
      },
      {
        id: "t12",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "video",
        desc: "",
        resources: [
          {
            id: "t112",
            text: "css file",
            link: "https://github.com/",
            icon: teachIcon,
            downloadable: true,
          },
        ],
      },
      {
        id: "t13",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "video",
        desc: "",
        resources: [
          {
            id: "t113",
            text: "css file",
            link: "https://github.com/",
            icon: teachIcon,
            downloadable: false,
          },
          {
            id: "t114",
            text: "html file",
            link: "https://github.com/",
            icon: teachIcon,
            downloadable: false,
          },
        ],
      },
      {
        id: "t14",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "doc",
        desc: "This is a sample document description.",
      },
      {
        id: "t15",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: false,
        type: "doc",
        desc: "This is a sample document description.",
      },
      {
        id: "t16",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "video",
        desc: "",
      },
      {
        id: "t17",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: false,
        type: "video",
        desc: "",
      },
      {
        id: "t18",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: false,
        type: "query",
        desc: "This is a sample document description.",
      },
    ],
  },
  {
    id: "t2",
    ttl: "Angular Refresherrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
    lects: "10",
    dur: "41min",
    list: [
      {
        id: "t21",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "video",
        desc: "",
      },
      {
        id: "t22",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "video",
        desc: "",
      },
      {
        id: "t23",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "video",
        desc: "",
      },
      {
        id: "t24",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "doc",
        desc: "This is a sample document description.",
      },
      {
        id: "t25",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: false,
        type: "doc",
        desc: "This is a sample document description.",
      },
      {
        id: "t26",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "video",
        desc: "",
      },
      {
        id: "t27",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: false,
        type: "video",
        desc: "",
      },
      {
        id: "t28",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: false,
        type: "query",
        desc: "This is a sample document description.",
      },
    ],
  },
  {
    id: "t3",
    ttl: "Angular Refresher",
    lects: "10",
    dur: "41min",
    list: [
      {
        id: "t31",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "video",
        desc: "",
      },
      {
        id: "t32",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "video",
        desc: "",
      },
      {
        id: "t33",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "video",
        desc: "",
      },
      {
        id: "t34",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "doc",
        desc: "This is a sample document description.",
      },
      {
        id: "t35",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: false,
        type: "doc",
        desc: "This is a sample document description.",
      },
      {
        id: "t36",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "video",
        desc: "",
      },
      {
        id: "t37",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: false,
        type: "video",
        desc: "",
      },
      {
        id: "t38",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: false,
        type: "query",
        desc: "This is a sample document description.",
      },
    ],
  },
  {
    id: "t4",
    ttl: "Angular Refresher",
    lects: "10",
    dur: "41min",
    list: [
      {
        id: "t41",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "video",
        desc: "",
      },
      {
        id: "t42",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "video",
        desc: "",
      },
      {
        id: "t43",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "video",
        desc: "",
      },
      {
        id: "t44",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "doc",
        desc: "This is a sample document description.",
      },
      {
        id: "t45",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: false,
        type: "doc",
        desc: "This is a sample document description.",
      },
      {
        id: "t46",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "video",
        desc: "",
      },
      {
        id: "t47",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: false,
        type: "video",
        desc: "",
      },
      {
        id: "t48",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: false,
        type: "query",
        desc: "This is a sample document description.",
      },
    ],
  },
  {
    id: "t5",
    ttl: "Angular Refresher",
    lects: "10",
    dur: "41min",
    list: [
      {
        id: "t51",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "video",
        desc: "",
      },
      {
        id: "t52",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "video",
        desc: "",
      },
      {
        id: "t53",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "video",
        desc: "",
      },
      {
        id: "t54",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "doc",
        desc: "This is a sample document description.",
      },
      {
        id: "t55",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: false,
        type: "doc",
        desc: "This is a sample document description.",
      },
      {
        id: "t56",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "video",
        desc: "",
      },
      {
        id: "t57",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: false,
        type: "video",
        desc: "",
      },
      {
        id: "t58",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: false,
        type: "query",
        desc: "This is a sample document description.",
      },
    ],
  },
  {
    id: "t6",
    ttl: "Angular Refresher",
    lects: "10",
    dur: "41min",
    list: [
      {
        id: "t61",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "video",
        desc: "",
      },
      {
        id: "t62",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "video",
        desc: "",
      },
      {
        id: "t63",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "video",
        desc: "",
      },
      {
        id: "t64",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "doc",
        desc: "This is a sample document description.",
      },
      {
        id: "t65",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: false,
        type: "doc",
        desc: "This is a sample document description.",
      },
      {
        id: "t66",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "video",
        desc: "",
      },
      {
        id: "t67",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: false,
        type: "video",
        desc: "",
      },
      {
        id: "t68",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: false,
        type: "query",
        desc: "This is a sample document description.",
      },
    ],
  },
  {
    id: "t7",
    ttl: "Angular Refresher",
    lects: "10",
    dur: "41min",
    list: [
      {
        id: "t71",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "video",
        desc: "",
      },
      {
        id: "t72",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "video",
        desc: "",
      },
      {
        id: "t73",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "video",
        desc: "",
      },
      {
        id: "t74",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "doc",
        desc: "This is a sample document description.",
      },
      {
        id: "t75",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: false,
        type: "doc",
        desc: "This is a sample document description.",
      },
      {
        id: "t76",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "video",
        desc: "",
      },
      {
        id: "t77",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: false,
        type: "video",
        desc: "",
      },
      {
        id: "t78",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: false,
        type: "query",
        desc: "This is a sample document description.",
      },
    ],
  },
  {
    id: "t8",
    ttl: "Angular Refresher",
    lects: "10",
    dur: "41min",
    list: [
      {
        id: "t81",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "video",
        desc: "",
      },
      {
        id: "t82",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "video",
        desc: "",
      },
      {
        id: "t83",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "video",
        desc: "",
      },
      {
        id: "t84",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "doc",
        desc: "This is a sample document description.",
      },
      {
        id: "t85",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: false,
        type: "doc",
        desc: "This is a sample document description.",
      },
      {
        id: "t86",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "video",
        desc: "",
      },
      {
        id: "t87",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: false,
        type: "video",
        desc: "",
      },
      {
        id: "t88",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: false,
        type: "query",
        desc: "This is a sample document description.",
      },
    ],
  },
];

const courseReq = {
  ttl: "Requirements",
  reqs: [
    "NO Angular 1 or Angular 2+ knowledge is required!",
    "Basic HTML and CSS knowledge helps, but isn't a must-have",
    "Prior TypeScript knowledge also helps but isn't necessary to benefit from this course",
    "Basic JavaScript knowledge is required",
  ],
};

const desc = `The standard Lorem Ipsum passage, used since the 1500s
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  
  Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
  
  1914 translation by H. Rackham
  "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
  
  Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
  "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
  
  1914 translation by H. Rackham
  "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."`;

const featuredReviewUserData = {
  img: "",
  name: "Obada Q.",
  courses: 23,
  reviews: 12,
  rated: 5,
  date: "Sun Apr 04 2020",
  cmmt: "An amazing course to start building React applications, the instructor is extremely great, he explains everything in different ways and shows us all the possible ways to work with React. If you're thinking about taking your career to the next level and learn something trendy, I really advise you in this course. Lastly, I want to thank the instructor for such a lovely course, I wish you all the best. Regards",
};

const instructorData = [
  {
    id: 1,
    img: "",
    name: "Maximilian Schwarzmüller",
    desc: "CEO of TheCodex.me - Teaching 500,000+ Students how to code",
    courses: 23,
    reviews: 12,
    rating: 5,
    students: 200,
    date: "Sun Apr 04 2020",
    cmmt: "An amazing course to start building React applications, the instructor is extremely great, he explains everything in different ways and shows us all the possible ways to work with React. If you're thinking about taking your career to the next level and learn something trendy, I really advise you in this course. Lastly, I want to thank the instructor for such a lovely course, I wish you all the best. Regards An amazing course to start building React applications, the instructor is extremely great, he explains everything in different ways and shows us all the possible ways to work with React. If you're thinking about taking your career to the next level and learn something trendy, I really advise you in this course. Lastly, I want to thank the instructor for such a lovely course, I wish you all the best. Regards, An amazing course to start building React applications, the instructor is extremely great, he explains everything in different ways and shows us all the possible ways to work with React. If you're thinking about taking your career to the next level and learn something trendy, I really advise you in this course. Lastly, I want to thank the instructor for such a lovely course, I wish you all the best. Regards, An amazing course to start building React applications, the instructor is extremely great, he explains everything in different ways and shows us all the possible ways to work with React. If you're thinking about taking your career to the next level and learn something trendy, I really advise you in this course. Lastly, I want to thank the instructor for such a lovely course, I wish you all the best. Regards An amazing course to start building React applications, the instructor is extremely great, he explains everything in different ways and shows us all the possible ways to work with React. If you're thinking about taking your career to the next level and learn something trendy, I really advise you in this course. Lastly, I want to thank the instructor for such a lovely course, I wish you all the best. Regards An amazing course to start building React applications, the instructor is extremely great, he explains everything in different ways and shows us all the possible ways to work with React. If you're thinking about taking your career to the next level and learn something trendy, I really advise you in this course. Lastly, I want to thank the instructor for such a lovely course, I wish you all the best. Regards An amazing course to start building React applications, the instructor is extremely great, he explains everything in different ways and shows us all the possible ways to work with React. If you're thinking about taking your career to the next level and learn something trendy, I really advise you in this course. Lastly, I want to thank the instructor for such a lovely course, I wish you all the best. Regards",
  },
];

const moreCourses = [
  {
    id: "1",
    instructor: "Maximilian Schwarzmüller",
    link: "/",
    courses: [
      {
        id: "c1",
        img: cardImg,
        ttl: "React - The Complete Guide 2023 (incl. React Router & Redux)Dive in and learn React.js from scratch! Learn React, Hooks, Redux, React Router, Next.js, Best Practices and way more!Rating: 4.6 out of 5190898 reviews51 total hours544 lecturesAll LevelsCurrent price: ₹529Original price: ₹3,199",
        authDet: "Academind by Maximilian Schwarzmüller",
        prc: 529,
        oldprc: 3199,
        stars: { a: 5, b: 1, c: 1, d: 1, e: 1 },
        noOfRats: 9,
      },
      {
        id: "c2",
        img: cardImg,
        ttl: "Flutter & Dart - The Complete Guide [2023 Edition]A Complete Guide to the Flutter SDK & Flutter Framework for building native iOS and Android appsRating: 4.6 out of 564961 reviews30 total hours300 lecturesAll LevelsCurrent price: ₹529Original price: ₹3,199",
        authDet: "Academind by Maximilian Schwarzmüller",
        prc: 529,
        oldprc: 3199,
        stars: { a: 5, b: 1, c: 1, d: 1, e: 1 },
        noOfRats: 9,
      },
      {
        id: "c21",
        img: cardImg,
        ttl: "NodeJS - The Complete Guide (MVC, REST APIs, GraphQL,",
        authDet: "Academind by Maximilian Schwarzmüller",
        prc: 529,
        oldprc: 3199,
        stars: { a: 5, b: 1, c: 1, d: 1, e: 1 },
        noOfRats: 2,
      },
    ],
  },
];

const courseDetData = {
  path: "/",
  img: cardImg,
  id: 1,
  ttl: "Angular - The Complete Guide (2023 Edition)",
  desc: 'Master Angular (formerly "Angular 2") and build awesome, reactive web apps with the successor of Angular.js',
  price: 529,
  discPrice: 3199,
  disc: 83,
  tmLeft: 6,
  rating: 4.6,
  rats: 188350,
  enrolled: 697865,
  authors: ["Maximilian Schwarzmüller"],
  lastUpdated: new Date(),
  lang: "English",
  subTtl: "English",
};

export {
  Learnings,
  courseIncludes,
  courseData,
  courseReq,
  desc,
  courseDetData,
  moreCourses,
  instructorData,
  featuredReviewUserData,
};
