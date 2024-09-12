import React from 'react'
import teacher2 from "../../assets/teacher2.png"
import world from "../../assets/world.png"
import goeenglish from "../../assets/goeenglish.jpg"

import geoarabic from "../../assets/geoarabic.jpg"



export default function TeacherDetails() {
    return (<>
        <div className="lg:w-4/5 md:w-5/6 mx-auto my-11 md:flex-row flex flex-col gap-4 bg-slate-100 rounded-lg h-fit ">
            <div dir='rtl' className="right w-full md:hidden  bg-white  flex justify-center  h-full ">
                <div className="teacher-img  relative h-72 w-2/3 border-2 mb-2 border-green-500  rounded-2xl flex justify-center items-center">
                    <img className=' rounded-b-md w-full h-full  bottom-0 absolute   ' src={teacher2} alt="" />

                </div>

            </div>
            <div dir='rtl' className="left md:w-3/4  py-7 px-6">
                <p className='rounded-xl w-fit p-2 text-center flex gap-1 cairo font-semibold justify-cent items-center text-sm   mb-5 bg-green-400 text-white'>
                    <span><img className='md:w-8 w-5' src={world} alt="" /> </span>
                    تاريخ و جغرافيا
                </p>
                <p className='m-0 cairo lg:text-3xl text-xl font-bold lg:font-semibold'>أ/ محمود عبدالرحمن </p>

                <div className="name-and-school my-3 lg:flex items-center lg:gap-9 md:gap-3 ">
                    <p className='m-0 kufi lg:text-base md:text-sm text-gray-700'>للصف: الثالث الثانوي</p>

                    <p className='m-0 lg:text-base text-sm kufi text-gray-600 font-medium'>(مدرسة الرسالة - مدرسة السلام - مدرسة الأيمان)</p>
                </div>
                <p className='cairo md:text-base text-sm text-gray-600 '>  هو معلم تاريخ وجغرافيا من مصر، تخرج من كلية الآداب، قسم التاريخ والجغرافيا، بجامعة القاهرة في عام 2002. يتمتع بخبرة تزيد عن 18 عام في تدريس التاريخ والجغرافيا، حيث عمل في عدة مدارس ومؤسسات تعليمية. يتميز بقدرته على توصيل المعلومات التاريخية والجغرافية بأسلوب شيق وتفاعلي....







                    <span className='text-green-700 hover:underline underline-offset-3'>المزيد</span>.


                </p>
                <div className="more w-full  flex gap-2 flex-wrap">
                    <div className="degree lg:w-1/4 md:w-1/2 w-full ">
                        <div className="label cairo lg:text-lg text-base my-3 text-green-600 font-semibold">الدرجة</div>
                        <div className="degree-logo-and-title flex  gap-2 items-center">
                            <i className="text-gray-400 text-2xl fa-solid fa-certificate"></i>
                            <span className='kufi text-sm text-gray-600'>بكالريوس اداب قسم لغة انجليزية</span>

                        </div>


                    </div>
                    <div className="uni lg:w-1/4 md:w-1/2 w-full">
                        <div className="label cairo text-lg my-3 text-green-600 font-semibold">الجامعة</div>
                        <div className="degree-logo-and-title flex  gap-2 items-center">
                            <i className="text-gray-400 text-2xl fa-solid fa-building-columns"></i>
                            <span className='kufi text-sm text-gray-600'> جامعة القاهرة</span>

                        </div>

                    </div>
                    <div className="tech-years  lg:w-1/4 md:w-1/2 w-full">
                        <div className="label cairo text-lg my-3 text-green-600 font-semibold">عدد سنين التدريس</div>
                        <div className="degree-logo-and-title flex  gap-2 items-center">
                            <i className="text-gray-400 text-2xl fa-solid  fa-calendar-check"></i>
                            <span className='kufi text-sm text-gray-600'>  <span className='font-semibold'>اوفلاين:</span> ١٦ سنة</span>
                            <span className='kufi text-sm text-gray-600'>  <span className='font-semibold'>اونلاين:</span> ٤سنين</span>

                        </div>

                    </div>
                    <div className="work-school lg:w-1/4 md:w-1/2 w-full">
                        <div className="label cairo text-lg my-3 text-green-600 font-semibold"> العمل بالمدارس</div>
                        <div className="degree-logo-and-title flex  gap-2 items-center">
                            <i className="text-gray-400 text-2xl fa-solid fa-person-chalkboard"></i>
                            <span className='kufi text-sm text-gray-600'>  ماذال</span>

                        </div>

                    </div>



                </div>

            </div>
            <div dir='rtl' className="right  bg-white hidden md:flex justify-end items-end  h-full w-1/4">
                <div className="teacher-img  relative h-96 w-full border-b-8 border-green-500  rounded-2xl flex justify-center items-center">
                    <img className=' rounded-b-md w-full h-full  bottom-0 absolute   ' src={teacher2} alt="" />

                </div>

            </div>

        </div>
        <div className="second-part flex flex-col justify-center items-center">
            <p className="cairo lg:text-4xl md:text-3xl text-2xl text-green-700">المواد الدراسية الذي يقدمها</p>

            <div dir='rtl' className="courses-selected flex md:flex-row flex-col gap-3 rounded-xl mt-4 lg:w-fit md:w-5/6  mx-20  lg:px-40  p-8 mb-11 bg-green-700">
                <div className="teacher-subject w-80  h-80 rounded-md flex flex-col justify-center items-center bg-slate-200">
                    <div className="teacher-img   h-2/3 w-2/3 border-8 border-blue-500  rounded-full flex justify-center items-center">
                        <img className='  h-full rounded-full  w-full bg-gray-400    ' src={geoarabic} alt="" />

                    </div>
                    <p className='cairo mt-1 font-semibold'>تاريخ و جغرافيا (لغة عربية)</p>
                    <button className='p-1 px-6 bg-green-700 text-lg kufi text-white mt-3 rounded-md' >تفاصيل </button>


                </div>
                <div className="teacher-subject w-80  h-80 rounded-md flex flex-col justify-center items-center bg-slate-200">
                    <div className="teacher-img   h-2/3 w-2/3 border-8 border-blue-500  rounded-full flex justify-center items-center">
                        <img className='  h-full rounded-full  w-full bg-gray-400    ' src={goeenglish} alt="" />

                    </div>
                    <p className='cairo mt-1 font-semibold'>تاريخ و جغرافيا (لغة انجليزية)</p>
                    <button className='p-1 px-6 bg-green-700 text-lg kufi text-white mt-3 rounded-md' >تفاصيل </button>


                </div>



            </div>



        </div>

    </>

    )
}
