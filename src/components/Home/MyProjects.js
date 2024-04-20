// "use client";
// import React from "react";
// import { MainTitle } from "../common/typography.component";
// import SecondaryButton from "../common/SecondaryButton";
// import { useTranslation } from "react-i18next";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const projectsData = [
//   {
//     img: `/public/assets/images/projects/samrons.png`,
//     name: "Samrons",
//     url: "https://samrons.com",
//     technologies: ["React JS", "Laravel"],
//   },
//   {
//     img: "/public/assets/images/projects/carton2me.png",
//     name: "Carton",
//     url: "https://carton.site/",
//     technologies: ["React JS", "Laravel"],
//   },
//   {
//     img: "/public/assets/images/projects/lottorama.png",
//     name: "Lottorama",
//     url: "https://lottorama.net/",
//     technologies: ["React JS", "Node JS"],
//   },
//   {
//     img: "/public/assets/images/projects/orvel.png",
//     name: "Orvel",
//     url: "http://orvel.devshs.com/",
//     technologies: ["React JS", "Node JS"],
//   },
//   {
//     img: "/public/assets/images/projects/pegasus.png",
//     name: "Pegasus",
//     url: "http://pegasus.devshs.com/",
//     technologies: ["React JS", "Laravel"],
//   },
//   {
//     img: "/public/assets/images/projects/smile-and-go.png",
//     name: "Smile and Go",
//     url: "http://smileandgo-admin.devshs.com",
//     technologies: ["React JS", "Node JS"],
//   },
// ];

// function MyProjects() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     autoplay: true,
//     speed: 2000,
//     autoplaySpeed: 3000,
//     responsive: [
//       {
//         breakpoint: 992,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true,
//         },
//       },
//     ],
//   };
//   const { t } = useTranslation();
//   return (
//     <div className="md:py-20 py-10">
//       <div
//         className="container m-auto
//       "
//       >
//         <div className="flex lg:items-center items-start justify-between">
//           <div className="flex gap-3 items-center mb-10">
//             <MainTitle text={t("Projects")} className="font-semibold" />
//             <hr className="h-1 w-20 bg-black mt-2" />
//           </div>
//           <SecondaryButton
//             text={t("Know More")}
//             url="/projects"
//             className="max-w-[150px] py-2 px-3 our-team-know-more-btn capitalize"
//           />
//         </div>
//         <Slider {...settings}>
//           {projectsData &&
//             projectsData?.map((team, key) => (
//               <div key={key}>
//                 <div className="flex items-center">
//                   <img
//                     src={team?.img}
//                     className="max-h-[200px] max-w-[300px] object-cover"
//                   />
//                   <h6>{t(team?.name)}</h6>
//                   <p className="text-[14px]">({t(team?.role)})</p>
//                 </div>
//               </div>
//             ))}
//         </Slider>
//       </div>
//     </div>
//   );
// }

// export default MyProjects;
