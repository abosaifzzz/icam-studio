// import { useState } from "react";
import { Link } from "react-router-dom";
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













// import LogoutIcon from "@mui/icons-material/Logout";

export default function Home() {

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


    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 2500,
        autoplaySpeed: 3500,
        cssEase: "linear",
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024, // Adjusts for medium screens
                settings: {
                    slidesToShow: 2, // Show 2 slides
                },
            },
            {
                breakpoint: 640, // Adjusts for small screens
                settings: {
                    slidesToShow: 1, // Show 1 slide
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    // Slider settings
    const settings2 = {
        dots: true, // Enable dots for navigation
        infinite: true,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 4000,
        cssEase: "linear",
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        pauseOnHover: true, // Pause autoplay on hover for manual control
        swipe: true, // Enable swiping for manual control
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
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
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
                    <p className="mt-10 lg:text-5xl md:text-3xl text-3xl cairo font-medium">منصة تعليمية متكاملة </p>
                    <p className="mt-10 lg:text-5xl md:text-3xl text-3xl     cairo text-white font-semibold p-2 bg-[#2dbc56] w-fit pb-4">فـي مـكـان واحــــــــد </p>
                    <p className="mt-6 lg:text-3xl md:text-xl text-xl font-bold cairo">    و لأول مرة  <span className="text-green-700"> بالفيوم</span></p>


                    <a dir="rtl" className="btn-3 mt-5 p-3 cairo  px-6 rounded-md lg:text-xl text-xl" href="#">
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
                <div className="left md:block hidden lg:w-1/2 lg:px-16 md:px-0 md:w-1/2">
                    <img className="w-full self-center" src={vector} alt="" />
                </div>
            </div>
            <div className="third flex flex-col items-center pb-20  p-5 bg-gray-100">
                <p className="lg:text-4xl md:text-3xl text-xl mt-10 m-0 kufi font-medium  text-green-600 p-2 "> اساليب تعليمية جديدة و متميزة</p>
                <p className="md:text-lg text-sm cairo font-medium  text-green-800 p-2 ">  محتوي متجدد و مواكب لجميع المناهج التعليمية </p>

                <div className="courses  w-full px-8  mt-6 ">
                    <Slider {...settings}>


                        <div className="slide  my-5  bg-transparent px-11 ">
                            <div className="course relative py-4 rounded-xl flex flex-col items-center justify-center overflow-hidden bg-white h-full ">

                                <div className="course-img rounded-md w-1/3 ">
                                    <img className="" src={falsfa} alt="" />
                                </div>
                                <p className="messiri z-1 text-xl  mt-3 font-semibold">مادة الفلسفة</p>
                                <p className="kufi z-1">أ/ هشام ابو السعود</p>
                                <div className="btn-4 mt-4">
                                    <div className="button-wrapper">
                                        <div className="text">تفاصيل أكثر</div>
                                        <span className="icon">
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="slide  my-5  bg-transparent px-11 ">
                            <div className="course relative py-4 rounded-xl flex flex-col items-center justify-center overflow-hidden bg-white h-full ">

                                <div className="course-img rounded-md w-1/3 ">
                                    <img className="" src={french} alt="" />
                                </div>
                                <p className="messiri z-1 text-xl  mt-3 font-semibold">مادة اللغة الفرنسية</p>
                                <p className="kufi z-1">مسيو/ هاني اشرف</p>
                                <div className="btn-4 mt-4">
                                    <div className="button-wrapper">
                                        <div className="text">تفاصيل أكثر</div>
                                        <span className="icon">
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="slide  my-5  bg-transparent px-11 ">
                            <div className="course relative py-4 rounded-xl flex flex-col items-center justify-center overflow-hidden bg-white h-full ">

                                <div className="course-img rounded-md w-1/3 ">
                                    <img className="" src={chemistry} alt="" />
                                </div>
                                <p className="messiri z-1 text-xl  mt-3 font-semibold">مادة الكيمياء    </p>
                                <p className="kufi z-1">أ/ محمود البحيري </p>
                                <div className="btn-4 mt-4">
                                    <div className="button-wrapper">
                                        <div className="text">تفاصيل أكثر</div>
                                        <span className="icon">
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="slide  my-5  bg-transparent px-11 ">
                            <div className="course relative py-4 rounded-xl flex flex-col items-center justify-center overflow-hidden bg-white h-full ">

                                <div className="course-img rounded-md w-1/3 ">
                                    <img className="" src={history} alt="" />
                                </div>
                                <p className="messiri z-1 text-xl  mt-3 font-semibold">مادة التاريخ</p>
                                <p className="kufi z-1">أ/ رامي مسعود</p>
                                <div className="btn-4 mt-4">
                                    <div className="button-wrapper">
                                        <div className="text">تفاصيل أكثر</div>
                                        <span className="icon">
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="slide  my-5  bg-transparent px-11 ">
                            <div className="course relative py-4 rounded-xl flex flex-col items-center justify-center overflow-hidden bg-white h-full ">

                                <div className="course-img rounded-md w-1/3 ">
                                    <img className="" src={physics} alt="" />
                                </div>
                                <p className="messiri z-1 text-xl  mt-3 font-semibold">مادة الفيزياء</p>
                                <p className="kufi z-1">أ/ خالد عمر</p>
                                <div className="btn-4 mt-4">
                                    <div className="button-wrapper">
                                        <div className="text">تفاصيل أكثر</div>
                                        <span className="icon">
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="slide  my-5  bg-transparent px-11 ">
                            <div className="course relative py-4 rounded-xl flex flex-col items-center justify-center overflow-hidden bg-white h-full ">

                                <div className="course-img rounded-md w-1/3 ">
                                    <img className="" src={english} alt="" />
                                </div>
                                <p className="messiri z-1 text-xl  mt-3 font-semibold">مادة اللغة الأنجليزية</p>
                                <p className="kufi z-1">أ/ احمد العشيري</p>
                                <div className="btn-4 mt-4">
                                    <div className="button-wrapper">
                                        <div className="text">تفاصيل أكثر</div>
                                        <span className="icon">
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="slide  my-5  bg-transparent px-11 ">
                            <div className="course relative py-4 rounded-xl flex flex-col items-center justify-center overflow-hidden bg-white h-full ">

                                <div className="course-img rounded-md w-1/3 ">
                                    <img className="" src={math} alt="" />
                                </div>
                                <p className="messiri z-1 text-xl  mt-3 font-semibold">مادة الرياضة</p>
                                <p className="kufi z-1">أ/ محمود عبدالرحمن</p>
                                <div className="btn-4 mt-4">
                                    <div className="button-wrapper">
                                        <div className="text">تفاصيل أكثر</div>
                                        <span className="icon">
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>


                        </div>


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
                <p className="lg:text-4xl md:text-3xl text-xl mt-10 m-0 kufi font-medium  text-green-600 p-2 ">  من نحن ؟</p>

                <div className="fourth-data flex">
                    <div className="left w-1/2"><img src={home} alt="" /></div>
                    <div className="right w-1/2 p-6">
                        <p className="cairo text-3xl font-bold">عن "ICam"</p>
                        <p className="cairo text-xl mt-3">استوديو ICAM هو استوديو تعليمي مبتكر متخصص في إنتاج فيديوهات تعليمية تفاعلية عالية الجودة يقدمها أساتذة متخصصون في مختلف المواد الدراسية. يهدف الاستوديو إلى دعم الطلاب في جميع المراحل الدراسية، من المرحلة الابتدائية وحتى الثانوية العامة، وذلك من خلال توفير شروحات واضحة ومبسطة تسهم في تعزيز الفهم والتحصيل الدراسي.

                            يقع استوديو ICAM في محافظة الفيوم، حيث يسعى إلى تسهيل الوصول إلى التعليم المتكامل والمتميز لجميع الطلاب في المنطقة، باستخدام أحدث التقنيات والوسائل التعليمية.</p>



                    </div>
                </div>




            </div>

            <div className="fifth flex flex-col items-center bg-gray-100 py-9 ">
                <p className="cairo lg:text-4xl md:text-3xl text-2xl text-green-700">المواد الدراسية التي نقدمها</p>
                <div className="subjects  mt-14 w-5/6 mx-auto md:grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-0 md:gap-4 md:justify-start flex flex-col justify-center items-center mb-28">
                    <div className="subject subject-1 flex flex-col justify-center items-center mt-3 lg:w-60 lg:h-60 md:w-72 md:h-72 w-80 h-80">
                        <div className="subject-wrapper">
                            <div className="subject-data">مادة الفلسفة</div>
                            <span className="subject-second-data flex flex-col justify-center items-center">
                                <img src={history} className="w-1/2" alt="" />
                                <button className="bg-green-500 text-white font-semibold messiri text-lg mt-5 rounded-md p-2">اشترك الأن</button>
                            </span>
                        </div>
                    </div>
                    <div className="subject subject-2 flex flex-col justify-center items-center mt-3 lg:w-60 lg:h-60 md:w-72 md:h-72 w-80 h-80">
                        <div className="subject-wrapper">
                            <div className="subject-data">مادة الرياضة</div>
                            <span className="subject-second-data flex flex-col justify-center items-center">
                                <img src={history} className="w-1/2" alt="" />
                                <button className="bg-green-500 text-white font-semibold messiri text-lg mt-5 rounded-md p-2">اشترك الأن</button>
                            </span>
                        </div>
                    </div>
                    <div className="subject subject-3 flex flex-col justify-center items-center mt-3 lg:w-60 lg:h-60 md:w-72 md:h-72 w-80 h-80">
                        <div className="subject-wrapper">
                            <div className="subject-data">مادة اللغة الانجليزية</div>
                            <span className="subject-second-data flex flex-col justify-center items-center">
                                <img src={history} className="w-1/2" alt="" />
                                <button className="bg-green-500 text-white font-semibold messiri text-lg mt-5 rounded-md p-2">اشترك الأن</button>
                            </span>
                        </div>
                    </div>
                    <div className="subject subject-4 flex flex-col justify-center items-center mt-3 lg:w-60 lg:h-60 md:w-72 md:h-72 w-80 h-80">
                        <div className="subject-wrapper">
                            <div className="subject-data">مادة الأحياء</div>
                            <span className="subject-second-data flex flex-col justify-center items-center">
                                <img src={history} className="w-1/2" alt="" />
                                <button className="bg-green-500 text-white font-semibold messiri text-lg mt-5 rounded-md p-2">اشترك الأن</button>
                            </span>
                        </div>
                    </div>
                    <div className="subject subject-5 flex flex-col justify-center items-center mt-3 lg:w-60 lg:h-60 md:w-72 md:h-72 w-80 h-80">
                        <div className="subject-wrapper">
                            <div className="subject-data">مادة علم النفس</div>
                            <span className="subject-second-data flex flex-col justify-center items-center">
                                <img src={history} className="w-1/2" alt="" />
                                <button className="bg-green-500 text-white font-semibold messiri text-lg mt-5 rounded-md p-2">اشترك الأن</button>
                            </span>
                        </div>
                    </div>
                    <div className="subject subject-6 flex flex-col justify-center items-center mt-3 lg:w-60 lg:h-60 md:w-72 md:h-72 w-80 h-80">
                        <div className="subject-wrapper">
                            <div className="subject-data">مادة جيولوجيا</div>
                            <span className="subject-second-data flex flex-col justify-center items-center">
                                <img src={history} className="w-1/2" alt="" />
                                <button className="bg-green-500 text-white font-semibold messiri text-lg mt-5 rounded-md p-2">اشترك الأن</button>
                            </span>
                        </div>
                    </div>
                    <div className="subject subject-7 flex flex-col justify-center items-center mt-3 lg:w-60 lg:h-60 md:w-72 md:h-72 w-80 h-80">
                        <div className="subject-wrapper">
                            <div className="subject-data">مادة بيولوجي</div>
                            <span className="subject-second-data flex flex-col justify-center items-center">
                                <img src={history} className="w-1/2" alt="" />
                                <button className="bg-green-500 text-white font-semibold messiri text-lg mt-5 rounded-md p-2">اشترك الأن</button>
                            </span>
                        </div>
                    </div>
                    <div className="subject subject-8 flex flex-col justify-center items-center mt-3 lg:w-60 lg:h-60 md:w-72 md:h-72 w-80 h-80">
                        <div className="subject-wrapper">
                            <div className="subject-data">مادة الجغرافيا</div>
                            <span className="subject-second-data flex flex-col justify-center items-center">
                                <img src={history} className="w-1/2" alt="" />
                                <button className="bg-green-500 text-white font-semibold messiri text-lg mt-5 rounded-md p-2">اشترك الأن</button>
                            </span>
                        </div>
                    </div>
                </div>


            </div>
            <div className="sixth flex flex-col items-center pb-24 mt-9">
                <p className="cairo lg:text-4xl md:text-3xl text-2xl text-green-700">يقدمها نخبة من اكفئ المعلمين بالمحافظة</p>

                <div className="teachers  w-full overflow-hidden pb-12 mx-9 mt-6 ">
                    <Slider {...settings2}>


                        <div className="slide   my-5  bg-transparent px-9 ">
                            <div className="teacher py-6 bg- shadow-xl relative rounded-lg flex flex-col items-center justify-center overflow-hidden  h-full ">
                                <div className="teacher-img w-28 h-28   ">
                                    <img className="rounded-full w-full h-full" src={teacher} alt="" />
                                </div>

                                <p className="messiri z-1 text-xl  mt-3 font-semibold ">أ/ هشام ابو السعود</p>
                                <p className="kufi text-green-700">مادة الفلسفة</p>
                                <button className="p-1 px-8 text-lg font-medium kufi rounded-md border border-green-700 bg-transparent mt-4">التواصل</button>
                            </div>


                        </div>
                        <div className="slide   my-5  bg-transparent px-9 ">
                            <div className="teacher py-6 bg- shadow-xl relative rounded-lg flex flex-col items-center justify-center overflow-hidden  h-full ">
                                <div className="teacher-img w-28 h-28   ">
                                    <img className="rounded-full w-full h-full" src={teacher} alt="" />
                                </div>

                                <p className="messiri z-1 text-xl  mt-3 font-semibold ">مسيو/ هاني اشرف</p>
                                <p className="kufi text-green-700">مادة اللغة الفرنسية</p>
                                <button className="p-1 px-8 text-lg font-medium kufi rounded-md border border-green-700 bg-transparent mt-4">التواصل</button>
                            </div>


                        </div>
                        <div className="slide   my-5  bg-transparent px-9 ">
                            <div className="teacher py-6 bg- shadow-xl relative rounded-lg flex flex-col items-center justify-center overflow-hidden  h-full ">
                                <div className="teacher-img w-28 h-28   ">
                                    <img className="rounded-full w-full h-full" src={teacher} alt="" />
                                </div>

                                <p className="messiri z-1 text-xl  mt-3 font-semibold ">أ/ محمود البحيري </p>
                                <p className="kufi text-green-700">مادة الكيمياء    </p>
                                <button className="p-1 px-8 text-lg font-medium kufi rounded-md border border-green-700 bg-transparent mt-4">التواصل</button>
                            </div>


                        </div>
                        <div className="slide   my-5  bg-transparent px-9 ">
                            <div className="teacher py-6 bg- shadow-xl relative rounded-lg flex flex-col items-center justify-center overflow-hidden  h-full ">
                                <div className="teacher-img w-28 h-28   ">
                                    <img className="rounded-full w-full h-full" src={teacher} alt="" />
                                </div>

                                <p className="messiri z-1 text-xl  mt-3 font-semibold ">أ/ رامي مسعود</p>
                                <p className="kufi text-green-700">مادة التاريخ</p>
                                <button className="p-1 px-8 text-lg font-medium kufi rounded-md border border-green-700 bg-transparent mt-4">التواصل</button>
                            </div>


                        </div>
                        <div className="slide   my-5  bg-transparent px-9 ">
                            <div className="teacher py-6 bg- shadow-xl relative rounded-lg flex flex-col items-center justify-center overflow-hidden  h-full ">
                                <div className="teacher-img w-28 h-28   ">
                                    <img className="rounded-full w-full h-full" src={teacher} alt="" />
                                </div>

                                <p className="messiri z-1 text-xl  mt-3 font-semibold ">أ/ خالد عمر</p>
                                <p className="kufi text-green-700">مادة الفيزياء</p>
                                <button className="p-1 px-8 text-lg font-medium kufi rounded-md border border-green-700 bg-transparent mt-4">التواصل</button>
                            </div>


                        </div>
                        <div className="slide   my-5  bg-transparent px-9 ">
                            <div className="teacher py-6 bg- shadow-xl relative rounded-lg flex flex-col items-center justify-center overflow-hidden  h-full ">
                                <div className="teacher-img w-28 h-28   ">
                                    <img className="rounded-full w-full h-full" src={teacher} alt="" />
                                </div>

                                <p className="messiri z-1 text-xl  mt-3 font-semibold ">أ/ احمد العشيري</p>
                                <p className="kufi text-green-700">مادة اللغة الأنجليزية</p>
                                <button className="p-1 px-8 text-lg font-medium kufi rounded-md border border-green-700 bg-transparent mt-4">التواصل</button>
                            </div>


                        </div>
                        <div className="slide   my-5  bg-transparent px-9 ">
                            <div className="teacher py-6 bg- shadow-xl relative rounded-lg flex flex-col items-center justify-center overflow-hidden  h-full ">
                                <div className="teacher-img w-28 h-28   ">
                                    <img className="rounded-full w-full h-full" src={teacher} alt="" />
                                </div>

                                <p className="messiri z-1 text-xl  mt-3 font-semibold ">أ/ محمود عبدالرحمن</p>
                                <p className="kufi text-green-700">مادة الرياضة</p>
                                <button className="p-1 px-8 text-lg font-medium kufi rounded-md border border-green-700 bg-transparent mt-4">التواصل</button>
                            </div>


                        </div>


                    </Slider>



                </div>
                <div className="big-label relative w-4/5 mx-auto h-72 rounded-2xl flex bg-white border border-emerald-600">
                    <div className="line absolute bottom-0  w-1/2  mx-64  rounded-lg h-1.5"></div>

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
