// import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useStateContext } from "../../contexts/ContextProvider";
// import axiosClient from "../../axios";
// import { useEffect } from "react";

import vector from "../../assets/Exams-bro.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import shape from "../../assets/shape.png"
import falsfa from "../../assets/falsfa.png"
import french from "../../assets/french.png"
import chemistry from "../../assets/chemistry.png"
import history from "../../assets/history.png"
import physics from "../../assets/physics.png"
import english from "../../assets/english.png"
import math from "../../assets/math.png"
import screen from "../../assets/screen.png"
import teacher from "../../assets/teacher.jpg"
import comp from "../../assets/comp.png"
import home from "../../assets/home.png"
import falsfaBg from "../../assets/falsfa2.jpeg"
import mathBg from '../../assets/pngtree-green-mathematics-subject-for-high-school-9th-grade-algebra-ii-image_735020.jpg'
import englishBg from "../../assets/english2.jpg"
import a7ya2Bg from "../../assets/a7ya2.jpg"













// import LogoutIcon from "@mui/icons-material/Logout";

export default function Home() {


    const navigate = useNavigate();

    const handleSubscribeClick = (subjectData) => {
        navigate('/subject-details1', { state: subjectData });
    };

    const subjects = [
        { id: 1, name: 'مادة الفلسفة', img: falsfa, background: falsfaBg },
        { id: 2, name: 'مادة الرياضة', img: math, background: mathBg },
        { id: 3, name: 'مادة اللغة الانجليزية', img: english, background: englishBg },
        { id: 4, name: 'مادة الأحياء', img: physics, background: a7ya2Bg },
    ];


    // const [isMenuOpen, setIsMenuOpen] = useState(false);
    // const { user, setUser, setToken, token } = useStateContext({});
    // const [menuOpen, setMenuOpen] = useState(false); // State to manage the main menu
    // const [dropdownOpen, setDropdownOpen] = useState(false); // State to manage the dropdown menu
    // const [errors, setErrors] = useState(null);
    // const [fileimage, setPhoto] = useState("");
    // const [showButtons, setShowButtons] = useState({
    //     courses: false,
    //     instructors: false,
    // });

    // useEffect(() => {
    //     const updateButtonsVisibility = () => {
    //         const coursesContainer = document.getElementById("courses-container");
    //         const courses = coursesContainer?.querySelectorAll(".course-item") || [];
    //         const instructorsContainer = document.getElementById(
    //             "instructors-container"
    //         );
    //         const instructors =
    //             instructorsContainer?.querySelectorAll(".instructor-item") || [];
    //         const screenWidth = window.innerWidth;

    //         const shouldShowButtons =
    //             screenWidth >= 768 && (courses.length > 4 || instructors.length > 4);

    //         setShowButtons({
    //             courses: shouldShowButtons && courses.length > 4,
    //             instructors: shouldShowButtons && instructors.length > 4,
    //         });
    //     };

    // Initial check
    //     updateButtonsVisibility();

    //     // Add resize event listener
    //     window.addEventListener("resize", updateButtonsVisibility);

    //     // Cleanup event listener on component unmount
    //     return () => window.removeEventListener("resize", updateButtonsVisibility);
    // }, []);

    // const onLogout = (ev) => {
    //     ev.preventDefault();

    //     axiosClient.post("/logout").then(() => {
    //         setUser({});
    //         setToken(null);
    //     });
    // };

    // const toggleMenu = () => {
    //     setMenuOpen(!menuOpen);
    // };

    // const toggleDropdown = () => {
    //     setDropdownOpen(!dropdownOpen);
    // };
    // const subjects = [
    //     { icon: "🔬", name: "Chemistry", link: "#chemistry" },
    //     { icon: "🔢", name: "Math", link: "#math" },
    //     { icon: "🧪", name: "Physics", link: "#physics" },
    //     { icon: "📐", name: "English", link: "#english" },
    //     { icon: "🧬", name: "Biology", link: "#biology" },
    //     { icon: "🇫🇷", name: "French", link: "#french" },
    //     { icon: "🇩🇪", name: "German", link: "#german" },
    //     { icon: "🇮🇹", name: "Italian", link: "#italian" },
    //     { icon: "📚", name: "تاريخ", link: "#history" },
    //     { icon: "🌍", name: "جغرافيا", link: "#geography" },
    //     { icon: "🧭", name: "جيولوجيا", link: "#geology" },
    //     { icon: "🔬", name: "كيمياء", link: "#arabic-chemistry" },
    //     { icon: "🧪", name: "فيزياء", link: "#arabic-physics" },
    //     { icon: "🧬", name: "أحياء", link: "#arabic-biology" },
    //     { icon: "📖", name: "لغة عربية", link: "#arabic" },
    //     { icon: "🧠", name: "علم نفس و اجتماع", link: "#psychology-sociology" },
    //     { icon: "💡", name: "فلسفة و منطق", link: "#philosophy-logic" },
    // ];
    // if (user) {
    //     useEffect(() => {
    //         const fetchData = async () => {
    //             try {
    //                 axiosClient.get("/user").then(({ data }) => {
    //                     setUser(data);
    //                 });
    //                 const response = await axiosClient.get("/instructor", {
    //                     params: {
    //                         id: user.id,
    //                     },
    //                 });

    //                 const data = response.data;
    //                 if (
    //                     typeof data === "object" &&
    //                     data !== null &&
    //                     Array.isArray(data.instructors)
    //                 ) {
    //                     setPhoto(data.instructors[0].image_path);
    //                     // console.log(data);
    //                 } else {
    //                     console.error(
    //                         "Data is not an object or does not have instructors property:"
    //                     );
    //                 }
    // if (response1.data.length > 0) {
    //   setUser(data);
    // }
    //             } catch (error) {
    //                 console.error("Error fetching categories", error);
    //             }
    //         };

    //         fetchData();
    //     }, [user.id]);
    // }


    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 4000,
        cssEase: "linear",
        slidesToShow: 3, // Default number of slides to show
        slidesToScroll: 3, // Number of slides to scroll
        pauseOnHover: true, // Pause on hover
        arrows: true, // Enable arrows for manual control
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const slidesData = [
        { imgSrc: falsfa, title: "مادة الفلسفة", teacher: "أ/ هشام ابو السعود" },
        { imgSrc: french, title: "مادة اللغة الفرنسية", teacher: "مسيو/ هاني اشرف" },
        { imgSrc: chemistry, title: "مادة الكيمياء", teacher: "أ/ محمود البحيري" },
        { imgSrc: history, title: "مادة التاريخ", teacher: "أ/ رامي مسعود" },
        { imgSrc: physics, title: "مادة الفيزياء", teacher: "أ/ خالد عمر" },
        { imgSrc: english, title: "مادة اللغة الأنجليزية", teacher: "أ/ احمد العشيري" },
        { imgSrc: math, title: "مادة الرياضة", teacher: "أ/ محمود عبدالرحمن" }
    ];
    // Slider settings

    const settings2 = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 4000,
        cssEase: "linear",
        slidesToShow: 3,
        slidesToScroll: 3,
        pauseOnHover: true, // Pause on hover
        arrows: true, // Enable arrows for manual control
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (<>

        <div dir="rtl" className="all w-full mt-10 mx-auto  ">



            <div className="second w-full px-14 mx-auto mt-14 pb-9  flex md:flex-row flex-col justify-center items-center gap-11 ">
                <div className="left md:hidden block lg:w-1/2 lg:px-16 md:px-0 md:w-1/2 w-96">
                    <img className="w-full self-center" src={vector} alt="" />
                </div>
                <div className="right md:w-1/2 w-full  md:p-12 p-3">

                    <p className="lg:text-5xl md:text-3xl text-3xl cairo font-semibold">    تعلم, تطور ,<span className="text-green-500">وفر وقتك</span> </p>
                    <p className="mt-10 lg:text-5xl md:text-3xl text-2xl cairo font-medium">منصة تعليمية متكاملة </p>
                    <p className="mt-10 lg:text-5xl md:text-3xl text-2xl    cairo text-white font-semibold p-2 bg-[#2dbc56] w-fit pb-4">فـي مـكـان واحــــــــد </p>
                    <p className="mt-6 lg:text-3xl md:text-xl text-xl font-bold cairo">    و لأول مرة  <span className="text-green-700"> بالفيوم</span></p>


                    {/* <a dir="rtl" className="btn-3 mt-5 p-3 cairo  px-6 rounded-md lg:text-xl text-xl" href="#">
                        ابدأ الأن
                        <span className="button__icon-wrapper">
                            <svg
                                width="10"
                                className="button__icon-svg"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 15"
                            >
                                <path
                                    fill="currentColor"
                                    d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                                ></path>
                            </svg>

                            <svg
                                className="button__icon-svg button__icon-svg--copy"
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                fill="none"
                                viewBox="0 0 14 15"
                            >
                                <path
                                    fill="currentColor"
                                    d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                                ></path>
                            </svg>
                        </span>

                    </a> */}
                    {/* <button className="animated-button mt-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="arr-2" viewBox="0 0 24 24">
                            <path
                                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                            ></path>
                        </svg>  
                        <span className="text">ابدأ الأن</span>


                        <span className="circle"></span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24">
                            <path
                                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                            ></path>
                        </svg>
                    </button> */}
                    <button
                        className="flex justify-center cairo gap-2 mt-5 shadow-xl text-lg bg-green-600 backdrop-blur-md lg:font-semibold border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-300 hover:text-black text-white before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-md group"
                    >
                        ابدأ الأن
                        <svg
                            className="w-8 h-8 justify-end group-hover:-rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-white group-hover:border-none p-2 -rotate-45 transform "
                            viewBox="0 0 16 19"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                                className="fill-gray-800 group-hover:fill-gray-800"
                            ></path>
                        </svg>
                    </button>




                </div>
                <div className="left md:block hidden lg:w-1/2 lg:px-16 md:px-0 md:w-1/2">
                    <img className="w-full self-center" src={vector} alt="" />
                </div>
            </div>
            <div className="third flex flex-col items-center pb-20  p-5 bg-gray-100">
                <p className="lg:text-4xl md:text-3xl text-xl mt-10 m-0 kufi font-medium  text-green-600 p-2 "> اساليب تعليمية جديدة و متميزة</p>
                <p className="md:text-lg text-sm cairo font-medium  text-green-800 p-2 ">  محتوي متجدد و مواكب لجميع المناهج التعليمية </p>

                <div className="courses  w-full px-8  mt-6 ">
                    <Slider {...settings}>
                        {slidesData.map((slide, index) => (
                            <div className="slide my-5 bg-transparent px-11" key={index}>
                                <div className="course relative md:mx-10  py-7 rounded-xl flex flex-col items-center justify-center overflow-hidden bg-white h-full">
                                    <div className="course-img rounded-md w-1/3">
                                        <img className="" src={slide.imgSrc} alt={slide.title} />
                                    </div>
                                    <p className="messiri z-1 text-xl mt-3 font-semibold">{slide.title}</p>
                                    <p className="kufi z-1">{slide.teacher}</p>
                                    {/* <div className="btn-4 mt-4">
                                        <div className="button-wrapper">
                                            <div className="text">تفاصيل أكثر</div>
                                            <span className="icon">
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </span>
                                        </div>
                                    </div> */}

                                    <button
                                        className="relative cairo py-2 px-8 mt-4 text-black text-base font-bold nded-full overflow-hidden bg-white rounded-md transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-right-full before:w-full before:h-full before:bg-gradient-to-r before:from-green-500 before:to-green-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:right-0"
                                    >
                                        <Link to={"/teacher-details"}>
                                            تفاصيل اكتر
                                        </Link>
                                    </button>

                                </div>
                            </div>
                        ))}
                    </Slider>



                </div>


            </div>
            <div className="fourth flex flex-col items-center w-4/5  mx-auto pb-16 gap-10  ">
                {/* <div className="right mt-28 w-1/2">
                    <div className="right-data ">
                        <div className="top relative mt-24 w-full rounded-xl h-44  bg-[#3aa259]">
                            <p className="px-10 cairo pt-14 text-3xl font-semibold text-white">                            محتوى متكامل باللغة العربية
                            </p>
                            <p className="px-10 my-5 messiri text-[#c7f386]  text-xl font-medium">جميع محتوى المنصة متاحة باللغة العربية.

                            </p>

                            <div className="top-right-img w-1/3 absolute -top-24    ">
                                <img className="w-full" src={screen} alt="" />
                            </div>

                        </div>
                        <div className="bottom relative mt-36 w-full rounded-xl h-44  bg-[#3aa259]">
                            <p className="px-10 cairo pt-14 text-3xl font-semibold text-white">                            تعلم أحدث التقنيات

                            </p>
                            <p className="px-10 my-5 messiri text-[#c7f386]  text-xl font-medium">محتوى تعليمي متجدّد بأحدث الممارسات التقنية لمواكبة متطلبات سوق العمل.



                            </p>

                            <div className="top-right-img w-1/3 absolute -top-24    ">
                                <img className="w-full" src={screen} alt="" />
                            </div>

                        </div>


                    </div>
                </div>

                <div className="left-data w-1/2">
                    <div className="top relative mt-36 w-full rounded-xl h-44  bg-[#3aa259]">
                        <p className="px-10 cairo pt-14 text-3xl font-semibold text-white">                            تعلّم في أي وقت ومن أي مكان!

                        </p>
                        <p className="px-10 my-5 messiri text-[#c7f386]  text-xl font-medium">فرصة الوصول للمحتوى التعليمي في مختلف الأوقات ومن أيّ مكان.


                        </p>

                        <div className="top-right-img w-1/3 absolute -top-24    ">
                            <img className="w-full" src={screen} alt="" />
                        </div>

                    </div>
                    <div className="bottom relative mt-36 w-full rounded-xl h-44  bg-[#3aa259]">
                        <p className="px-10 cairo pt-14 text-3xl font-semibold text-white">                           محتوى  ودائم                        </p>
                        <p className="px-10 my-5 messiri text-[#c7f386]  text-xl font-medium">  اتاحة الوصول لجميع الدروس التي تم الاشتراك بها في اي وقت و بشكل دائم



                        </p>

                        <div className="top-right-img w-1/3 absolute -top-24    ">
                            <img className="w-full" src={screen} alt="" />
                        </div>

                    </div>

                </div> */}
                <p className="lg:text-4xl text-3xl  mt-10 m-0 kufi font-medium  text-green-600 p-2 ">  من نحن ؟</p>

                <div className="fourth-data md:flex">
                    <div className="left md:w-1/2"><img src={home} alt="" /></div>
                    <div className="right md:w-1/2 p-6">
                        <p className="cairo md:text-3xl text-2xl font-bold">عن "ICam"</p>
                        <p className="cairo md:text-xl text-sm mt-3">استوديو ICAM هو استوديو تعليمي مبتكر متخصص في إنتاج فيديوهات تعليمية تفاعلية عالية الجودة يقدمها أساتذة متخصصون في مختلف المواد الدراسية. يهدف الاستوديو إلى دعم الطلاب في جميع المراحل الدراسية، من المرحلة الابتدائية وحتى الثانوية العامة، وذلك من خلال توفير شروحات واضحة ومبسطة تسهم في تعزيز الفهم والتحصيل الدراسي.

                            يقع استوديو ICAM في محافظة الفيوم، حيث يسعى إلى تسهيل الوصول إلى التعليم المتكامل والمتميز لجميع الطلاب في المنطقة، باستخدام أحدث التقنيات والوسائل التعليمية.</p>



                    </div>
                </div>




            </div>

            <div className="fifth flex flex-col items-center bg-gray-100 py-9 ">
                <p className="cairo lg:text-4xl md:text-3xl text-2xl text-green-700">المواد الدراسية التي نقدمها</p>
                {/* <div className="subjects  mt-14 w-5/6 mx-auto md:grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-0 md:gap-4 md:justify-start flex flex-col justify-center items-center mb-28">
                    <div className="subject subject-1 flex flex-col justify-center items-center mt-3 lg:w-60 lg:h-60 md:w-72 md:h-72 w-80 h-80">
                        <div className="subject-wrapper">
                            <div className="subject-name">مادة الفلسفة</div>
                            <span className="subject-second-data flex flex-col justify-center items-center">
                                <img src={falsfa} className="wsubject-img -1/2" alt="" />
                                <button className="subscribe bg-green-500 text-white font-semibold messiri text-lg mt-5 rounded-md p-2">اشترك الأن</button>
                            </span>
                        </div>
                    </div>
                    <div className="subject subject-2 flex flex-col justify-center items-center mt-3 lg:w-60 lg:h-60 md:w-72 md:h-72 w-80 h-80">
                        <div className="subject-wrapper">
                            <div className="subject-name">مادة الرياضة</div>
                            <span className="subject-second-data flex flex-col justify-center items-center">
                                <img src={math} className="w-1subject-img /2" alt="" />
                                <button className="subscribe bg-green-500 text-white font-semibold messiri text-lg mt-5 rounded-md p-2">اشترك الأن</button>
                            </span>
                        </div>
                    </div>
                    <div className="subject subject-3 flex flex-col justify-center items-center mt-3 lg:w-60 lg:h-60 md:w-72 md:h-72 w-80 h-80">
                        <div className="subject-wrapper">
                            <div className="subject-name">مادة اللغة الانجليزية</div>
                            <span className="subject-second-data flex flex-col justify-center items-center">
                                <img src={english} className="subject-img w-1/2" alt="" />
                                <button className="subscribe bg-green-500 text-white font-semibold messiri text-lg mt-5 rounded-md p-2">اشترك الأن</button>
                            </span>
                        </div>
                    </div>
                    <div className="subject subject-4 flex flex-col justify-center items-center mt-3 lg:w-60 lg:h-60 md:w-72 md:h-72 w-80 h-80">
                        <div className="subject-wrapper">
                            <div className="subject-name">مادة الأحياء</div>
                            <span className="subject-second-data flex flex-col justify-center items-center">
                                <img src={physics} className="subject-img w-1/2" alt="" />
                                <button className="subscribe bg-green-500 text-white font-semibold messiri text-lg mt-5 rounded-md p-2">اشترك الأن</button>
                            </span>
                        </div>
                    </div>

                </div> */}
                <div className="subjects mt-14 w-5/6 mx-auto md:grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 lg:gap-0 md:gap-4 flex flex-col justify-center items-center mb-28">
                    {subjects.map((subject) => (
                        <div
                            key={subject.id}
                            className="subject flex flex-col justify-center items-center mt-3 lg:w-60 lg:h-60 md:w-72 md:h-72 w-80 h-80"
                            style={{ backgroundImage: `url(${subject.background})`, backgroundSize: 'cover' }}
                            onClick={() => handleSubscribeClick(subject)}
                        >
                            <div className="subject-wrapper" >
                                <div className="subject-name">{subject.name}</div>
                                <span className="subject-second-data bg-emerald-300 flex flex-col justify-center items-center">
                                    <img src={subject.img} className="subject-img w-1/2" alt={subject.name} />
                                    <button
                                        className="subscribe bg-green-500 text-white font-semibold messiri text-lg mt-5 rounded-md p-2"
                                    >
                                        اشترك الأن
                                    </button>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            <div className="sixth flex flex-col items-center pb-24 mt-9">
                <p className="cairo lg:text-4xl md:text-3xl text-xl text-green-700">يقدمها نخبة من اكفئ المعلمين بالمحافظة</p>

                <div className="teachers  w-full overflow-hidden pb-12 mx-9 mt-6 ">
                    <Slider {...settings2}>


                        <div className="slide   my-5  bg-transparent px-9 ">
                            <div className="teacher py-6 bg- shadow-xl relative rounded-lg flex flex-col items-center justify-center overflow-hidden  h-full ">
                                <div className="teacher-img w-28 h-28   ">
                                    <img className="rounded-full w-full h-full" src={teacher} alt="" />
                                </div>

                                <p className="messiri z-1 text-xl  mt-3 font-semibold ">أ/ هشام ابو السعود</p>
                                <p className="kufi text-green-700">مادة الفلسفة</p>
                                <button
                                    className="mt-5 relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none"
                                >
                                    <span
                                        className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#36ff79_0%,#0fedde_50%,#e3ff8f_100%)]"
                                    >
                                    </span>
                                    <span
                                        className="cairo inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-white px-7 text-sm font-medium  backdrop-blur-3xl gap-2 undefined"
                                    >
                                        <Link to={"/teacher-details"}>
                                            تفاصيل اكثر
                                        </Link>
                                    </span>
                                </button>

                            </div>


                        </div>
                        <div className="slide   my-5  bg-transparent px-9 ">
                            <div className="teacher py-6 bg- shadow-xl relative rounded-lg flex flex-col items-center justify-center overflow-hidden  h-full ">
                                <div className="teacher-img w-28 h-28   ">
                                    <img className="rounded-full w-full h-full" src={teacher} alt="" />
                                </div>

                                <p className="messiri z-1 text-xl  mt-3 font-semibold ">مسيو/ هاني اشرف</p>
                                <p className="kufi text-green-700">مادة اللغة الفرنسية</p>
                                <button
                                    className="mt-5 relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none"
                                >
                                    <span
                                        className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#36ff79_0%,#0fedde_50%,#e3ff8f_100%)]"
                                    >
                                    </span>
                                    <span
                                        className="cairo inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-white px-7 text-sm font-medium  backdrop-blur-3xl gap-2 undefined"
                                    >
                                        <Link to={"/teacher-details"}>
                                            تفاصيل اكثر
                                        </Link>
                                    </span>
                                </button>

                            </div>


                        </div>
                        <div className="slide   my-5  bg-transparent px-9 ">
                            <div className="teacher py-6 bg- shadow-xl relative rounded-lg flex flex-col items-center justify-center overflow-hidden  h-full ">
                                <div className="teacher-img w-28 h-28   ">
                                    <img className="rounded-full w-full h-full" src={teacher} alt="" />
                                </div>

                                <p className="messiri z-1 text-xl  mt-3 font-semibold ">أ/ محمود البحيري </p>
                                <p className="kufi text-green-700">مادة الكيمياء    </p>
                                <button
                                    className="mt-5 relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none"
                                >
                                    <span
                                        className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#36ff79_0%,#0fedde_50%,#e3ff8f_100%)]"
                                    >
                                    </span>
                                    <span
                                        className="cairo inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-white px-7 text-sm font-medium  backdrop-blur-3xl gap-2 undefined"
                                    >
                                        <Link to={"/teacher-details"}>
                                            تفاصيل اكثر
                                        </Link>
                                    </span>
                                </button>

                            </div>


                        </div>
                        <div className="slide   my-5  bg-transparent px-9 ">
                            <div className="teacher py-6 bg- shadow-xl relative rounded-lg flex flex-col items-center justify-center overflow-hidden  h-full ">
                                <div className="teacher-img w-28 h-28   ">
                                    <img className="rounded-full w-full h-full" src={teacher} alt="" />
                                </div>

                                <p className="messiri z-1 text-xl  mt-3 font-semibold ">أ/ رامي مسعود</p>
                                <p className="kufi text-green-700">مادة التاريخ</p>
                                <button
                                    className="mt-5 relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none"
                                >
                                    <span
                                        className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#36ff79_0%,#0fedde_50%,#e3ff8f_100%)]"
                                    >
                                    </span>
                                    <span
                                        className="cairo inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-white px-7 text-sm font-medium  backdrop-blur-3xl gap-2 undefined"
                                    >
                                        <Link to={"/teacher-details"}>
                                            تفاصيل اكثر
                                        </Link>
                                    </span>
                                </button>

                            </div>


                        </div>
                        <div className="slide   my-5  bg-transparent px-9 ">
                            <div className="teacher py-6 bg- shadow-xl relative rounded-lg flex flex-col items-center justify-center overflow-hidden  h-full ">
                                <div className="teacher-img w-28 h-28   ">
                                    <img className="rounded-full w-full h-full" src={teacher} alt="" />
                                </div>

                                <p className="messiri z-1 text-xl  mt-3 font-semibold ">أ/ خالد عمر</p>
                                <p className="kufi text-green-700">مادة الفيزياء</p>
                                <button
                                    className="mt-5 relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none"
                                >
                                    <span
                                        className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#36ff79_0%,#0fedde_50%,#e3ff8f_100%)]"
                                    >
                                    </span>
                                    <span
                                        className="cairo inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-white px-7 text-sm font-medium  backdrop-blur-3xl gap-2 undefined"
                                    >
                                        <Link to={"/teacher-details"}>
                                            تفاصيل اكثر
                                        </Link>
                                    </span>
                                </button>

                            </div>


                        </div>
                        <div className="slide   my-5  bg-transparent px-9 ">
                            <div className="teacher py-6 bg- shadow-xl relative rounded-lg flex flex-col items-center justify-center overflow-hidden  h-full ">
                                <div className="teacher-img w-28 h-28   ">
                                    <img className="rounded-full w-full h-full" src={teacher} alt="" />
                                </div>

                                <p className="messiri z-1 text-xl  mt-3 font-semibold ">أ/ احمد العشيري</p>
                                <p className="kufi text-green-700">مادة اللغة الأنجليزية</p>
                                <button
                                    className="mt-5 relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none"
                                >
                                    <span
                                        className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#36ff79_0%,#0fedde_50%,#e3ff8f_100%)]"
                                    >
                                    </span>
                                    <span
                                        className="cairo inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-white px-7 text-sm font-medium  backdrop-blur-3xl gap-2 undefined"
                                    >
                                        <Link to={"/teacher-details"}>
                                            تفاصيل اكثر
                                        </Link>
                                    </span>
                                </button>

                            </div>


                        </div>
                        <div className="slide   my-5  bg-transparent px-9 ">
                            <div className="teacher py-6 bg- shadow-xl relative rounded-lg flex flex-col items-center justify-center overflow-hidden  h-full ">
                                <div className="teacher-img w-28 h-28   ">
                                    <img className="rounded-full w-full h-full" src={teacher} alt="" />
                                </div>

                                <p className="messiri z-1 text-xl  mt-3 font-semibold ">أ/ محمود عبدالرحمن</p>
                                <p className="kufi text-green-700">مادة الرياضة</p>
                                <button
                                    className="mt-5 relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none"
                                >
                                    <span
                                        className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#36ff79_0%,#0fedde_50%,#e3ff8f_100%)]"
                                    >
                                    </span>
                                    <span
                                        className="cairo inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-white px-7 text-sm font-medium  backdrop-blur-3xl gap-2 undefined"
                                    >
                                        <Link to={"/teacher-details"}>
                                            تفاصيل اكثر
                                        </Link>
                                    </span>
                                </button>

                            </div>


                        </div>


                    </Slider>



                </div>
                <div className="big-label relative w-4/5 mx-auto h-72 rounded-2xl flex bg-white border border-emerald-600">
                    <div className="line absolute bottom-0  md:w-1/2 md:block hidden mx-64  rounded-lg h-1.5"></div>

                    <div className="right-round w-1/2 md:flex hidden items-center justify-center  h-full rounded-tl-3xl rounded-tr-2xl">
                        <img className="w-1/2" src={comp} alt="" />

                    </div>
                    <div className="left-round md:w-1/2 w-full flex flex-col justify-end items-center">
                        <div className="data">
                            <p className="lg:text-4xl text-2xl font-medium cairo text-green-700 ">مسارك التعليمي في امان</p>
                            <p className="mt-3 text-xl font-medium kufi"> معلمك الخصوصي بين يديك</p>
                        </div>
                        <div className="start-now flex justify-end px-5 w-full  my-8">
                            <a dir="rtl" className="btn-3 mt-5 p-3 cairo  px-6 rounded-md text-xl" href="#">
                                ابدأ الأن
                                <span className="button__icon-wrapper">
                                    <svg
                                        width="10"
                                        className="button__icon-svg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 15"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                                        ></path>
                                    </svg>

                                    <svg
                                        className="button__icon-svg button__icon-svg--copy"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="10"
                                        fill="none"
                                        viewBox="0 0 14 15"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                                        ></path>
                                    </svg>
                                </span>

                            </a>
                        </div>


                    </div>

                </div>


            </div>

        </div>




    </>

    );
}
