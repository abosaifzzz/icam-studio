import React from 'react';
import 'animate.css';

import { Link, useLocation } from 'react-router-dom';
import teacher2 from "../../assets/teacher2.jpg"
import teacher3 from "../../assets/teacher3.jpg"

import englishcourse from "../../assets/englishcourse.jfif"
import english3 from "../../assets/english3.jpg"
import english4 from "../../assets/english4.jpg"




export default function SubjectDetails1() {
    const location = useLocation();
    const { name, img, } = location.state || {}; // Fallback if state is missing

    return (<>
        <div className="first w-full shadow-lg   mt-4 flex flex-col justify-center items-center">
            <img className=' md:w-60 w-52 animate__animated animate__bounce' src={img} alt="" />
            <p className='cairo md:text-3xl text-xl font-bold'>
                {name}

            </p>
            <div className="line-1 mt-2 bg-green-300  w-full h-0.5"></div>
        </div>
        <div className="related-subjects mt-10    w-4/5 mx-auto md:grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 lg:gap-7 md:gap-4 flex flex-col justify-center items-center mb-28">
            <Link to={"/subject-details2"}> <div dir='rtl' className="sub-subject mt-3  pb-7  shadow-xl rounded-2xl transform transition-transform duration-300 hover:scale-105 cursor-pointer ">
                <div className="sub-subject-img flex flex-col items-center relative w-full h-2/3 ">
                    <div className="sub-subject-teacher-img absolute w-20 h-20 border-2 border-emerald-300 shadow-lg shadow-white bottom-2 right-4 rounded-full bg-slate-400">
                        <img className='w-full h-full rounded-full' src={teacher2} alt="" />
                    </div>
                    <img className='w-full h-full rounded-t-xl' src={englishcourse} alt="" />
                </div>
                <div className="sub-subject-name  mt-3 p-2 flex gap-2 items-center">
                    <span><i className="text-xl text-gray-600 fa-solid fa-graduation-cap"></i></span>

                    <span className='cairo text-xl'>{name}</span>


                </div>
                <div className="sub-subject-teacher-name p-2 flex gap-2">
                    <span><i className="text-xl text-gray-600 fa-solid fa-person-chalkboard"></i></span>

                    <span className='messiri font-medium text-xl '>أ/ سارة جميل</span>

                </div>
                <div className="sub-subject-description p-2">
                    <span><i className="text-xl text-gray-600 fa-solid fa-audio-description"></i></span>
                    <span className='cairo text-sm'> <span className='font-bold' >للصف الثاني الثانوي</span> حيث سيتم شرح مبادئ اللغة بداية من المستوي الثاني حتي الانتهاء من  .... <span className='text-green-600 cursor-pointer font-semibold hover:text-green-400'>أكثر</span> </span>

                </div>

            </div></Link>
            <Link to={"/subject-details2"}> <div dir='rtl' className="sub-subject mt-3  pb-7  shadow-xl rounded-2xl transform transition-transform duration-300 hover:scale-105 cursor-pointer ">
                <div className="sub-subject-img flex flex-col items-center relative w-full h-2/3 ">
                    <div className="sub-subject-teacher-img absolute w-20 h-20 border-2 border-emerald-300 shadow-lg shadow-white bottom-2 right-4 rounded-full bg-slate-400">
                        <img className='w-full h-full rounded-full' src={teacher3} alt="" />
                    </div>
                    <img className='w-full h-full rounded-t-xl' src={english4} alt="" />
                </div>
                <div className="sub-subject-name  mt-3 p-2 flex gap-2 items-center">
                    <span><i className="text-xl text-gray-600 fa-solid fa-graduation-cap"></i></span>

                    <span className='cairo text-xl'>{name}</span>


                </div>
                <div className="sub-subject-teacher-name p-2 flex gap-2">
                    <span><i className="text-xl text-gray-600 fa-solid fa-person-chalkboard"></i></span>

                    <span className='messiri font-medium text-xl '>أ/ محمد ابوسيف</span>

                </div>
                <div className="sub-subject-description p-2">
                    <span><i className="text-xl text-gray-600 fa-solid fa-audio-description"></i></span>
                    <span className='cairo text-sm'> <span className='font-bold' >للصف الثاني الثانوي</span> حيث سيتم شرح مبادئ اللغة بداية من المستوي الثاني حتي الانتهاء من  .... <span className='text-green-600 cursor-pointer font-semibold hover:text-green-400'>أكثر</span> </span>

                </div>

            </div></Link>
            <Link to={"/subject-details2"}> <div dir='rtl' className="sub-subject mt-3  pb-7  shadow-xl rounded-2xl transform transition-transform duration-300 hover:scale-105 cursor-pointer ">
                <div className="sub-subject-img flex flex-col items-center relative w-full h-2/3 ">
                    <div className="sub-subject-teacher-img absolute w-20 h-20 border-2 border-emerald-300 shadow-lg shadow-white bottom-2 right-4 rounded-full bg-slate-400">
                        <img className='w-full h-full rounded-full' src={teacher2} alt="" />
                    </div>
                    <img className='w-full h-full rounded-t-xl' src={english3} alt="" />
                </div>
                <div className="sub-subject-name  mt-3 p-2 flex gap-2 items-center">
                    <span><i className="text-xl text-gray-600 fa-solid fa-graduation-cap"></i></span>

                    <span className='cairo text-xl'>{name}</span>


                </div>
                <div className="sub-subject-teacher-name p-2 flex gap-2">
                    <span><i className="text-xl text-gray-600 fa-solid fa-person-chalkboard"></i></span>

                    <span className='messiri font-medium text-xl '>أ/ سارة جميل</span>

                </div>
                <div className="sub-subject-description p-2">
                    <span><i className="text-xl text-gray-600 fa-solid fa-audio-description"></i></span>
                    <span className='cairo text-sm'> <span className='font-bold' >للصف الثاني الثانوي</span> حيث سيتم شرح مبادئ اللغة بداية من المستوي الثاني حتي الانتهاء من  .... <span className='text-green-600 cursor-pointer font-semibold hover:text-green-400'>أكثر</span> </span>

                </div>

            </div>
            </Link>






        </div>




    </>
        // <div>
        //     <img src={img} alt={name} />
        //     <p>{name}</p>
        // </div>
    );
}
