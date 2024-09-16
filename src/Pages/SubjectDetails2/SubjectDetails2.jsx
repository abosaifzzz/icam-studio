import React, { useState } from 'react';
import english3 from "../../assets/english3.jpg";
import teacher3 from "../../assets/teacher3.jpg";
import wallet from "../../assets/wallet.png";

export default function SubjectDetails2() {
    const [activeLesson, setActiveLesson] = useState(null); // state to track active lesson
    const [Wallet, setWallet] = useState(240); // initial wallet balance
    const [selectedLessonPrice, setSelectedLessonPrice] = useState(null); // state to track selected lesson price
    const [showBuyForm, setShowBuyForm] = useState(false); // state to control visibility of buy form

    const toggleLesson = (index) => {
        setActiveLesson(activeLesson === index ? null : index); // toggle active lesson
    };

    const handleBuyNow = (price) => {
        setSelectedLessonPrice(price); // set the price of the selected lesson
        setShowBuyForm(true); // show the buy form
    };
    const handleCloseBuy = () => {
        // set the price of the selected lesson
        setShowBuyForm(false); // show the buy form
    };

    const lessons = [
        {
            title: "مقدمة عن اللغة الانجليزية",
            price: "100 جنيه",
            description: "في الدرس الأول من اللغة الإنجليزية، سيتعلم الطلاب كيفية التحية والتعريف بأنفسهم باستخدام الضمائر والكلمات البسيطة. الهدف هو تمكينهم من إجراء محادثات قصيرة والتعرف على الآخرين بسهولة.",
        },
        {
            title: "تصريفات الافعال و الضمائر",
            price: "80 جنيه",
            description: "في هذا الدرس، سنتعرف على تصريفات الأفعال والضمائر في اللغة الإنجليزية. سيتم شرح كيفية تغيير الأفعال حسب الزمن (الماضي، الحاضر، والمستقبل)، وكيفية استخدام الضمائر مثل 'I'، 'he'، 'she'، و'they' لتكوين جمل صحيحة.",
        },
        {
            title: "If Condition و تصريفاتها",
            price: "150 جنيه",
            description: "في الدرس الأول من اللغة الإنجليزية، سيتعلم الطلاب كيفية التحية والتعريف بأنفسهم باستخدام الضمائر والكلمات البسيطة. الهدف هو تمكينهم من إجراء محادثات قصيرة والتعرف على الآخرين بسهولة.",
        },
    ];

    return (
        <>
            <div dir='rtl' className="subject-details2 ">
                <div className="page-layot w-full flex gap-3 mx-auto md:p-7 ">
                    <div className="page-content relative  bg-slate-100 rounded-md md:p-7 p-4 md:pb-1 pb-20  md:w-3/4 w-full">
                        <div className="subject-name">
                            <p className='cairo font-medium  text-3xl'>مادة اللغة الأنجليزية</p>
                        </div>
                        <div className="subject-and-instructor-img relative lg:w-1/2 md:w-4/5 w-full mt-4 rounded-xl shadow-md shadow-green-300 ">
                            <div className="subject-img">
                                <img className='w-full' src={english3} alt="" />
                            </div>
                            <div className="instructor-img absolute bottom-2 left-3">
                                <img className='md:w-24 md:h-24 w-20 h-20 rounded-full border-2 border-green-300' src={teacher3} alt="" />
                            </div>
                            <div className="instructor-name absolute right-0 bottom-0 bg-green-700 text-white p-2 px-4 rounded-br-xl rounded-tl-xl">
                                <p className='cairo  text-lg '>أ/ محمد أبوسيف</p>

                            </div>
                        </div>

                        <div className="subject-description mt-2">
                            <p className='md:text-2xl text-lg text-green-900 messiri mt-5 font-semibold'>ما الذي سنقدمه في هذه المادة ؟</p>
                            <p className='lg:text-lg my-2 md:w-3/4 '>في مادة اللغة الإنجليزية، سيتم التركيز على تطوير مهارات الطلاب في القراءة، الكتابة، التحدث، والاستماع...</p>
                        </div>

                        <div className="lessons mt-5 rounded-lg border-2">
                            {showBuyForm && (
                                <div className="buy-form flex justify-center items-center absolute inset-0 bg-black bg-opacity-20 ">
                                    <div className="form lg:w-1/3 md:w-2/3 w-4/5  relative p-4 flex flex-col items-center rounded-lg shadow-md shadow-green-300 bg-slate-50">
                                        <div onClick={handleCloseBuy} className="close absolute top-4 left-4"><i className=" text-red-500 cursor-pointer text-lg fa-solid fa-x"></i></div>

                                        <img src={wallet} className='w-28' alt="" />
                                        <p className='text-amber-500 text-lg'>{Wallet} جنيه</p>
                                        <div className="buy-with-wallet w-full mt-4 ">
                                            <p className='font-medium messiri'>شراء عن طريق المحفظة و خصم {selectedLessonPrice} جنيه؟</p>
                                            <button className='bg-green-500 w-full p-2 rounded-md text-white cairo mt-2'>شراء</button>
                                        </div>
                                        <div className="buy-with-shortcode  w-full mt-4">
                                            <p className='font-medium messiri'>شراء عن طريق ShortCode؟</p>
                                            <input type="text" className='w-full bg-slate-100 h-10 border-2 rounded-md' />
                                            <button disabled className=' bg-green-500 w-full p-2 rounded-md text-white cairo mt-2'>شراء</button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {lessons.map((lesson, index) => (
                                <div
                                    key={index}
                                    className="lesson border hover:bg-slate-200 cursor-pointer rounded-lg p-5"
                                    onClick={() => toggleLesson(index)}
                                >
                                    <div className="lesson-title-price-buy flex items-center justify-between">
                                        <p className="lesson-title messiri lg:text-xl md:text-lg text-sm font-semibold">{lesson.title}</p>
                                        <div className="price-buy flex items-center gap-2">
                                            <p className="font-medium">{lesson.price}</p>
                                            <button
                                                className="bg-green-500 hover:bg-green-600 cairo text-sm text-white rounded-md lg:p-2 p-1 px-3"
                                                onClick={(e) => {
                                                    e.stopPropagation(); // Prevent the lesson from toggling
                                                    handleBuyNow(lesson.price);
                                                }}
                                            >
                                                شراء الأن
                                            </button>
                                        </div>
                                    </div>
                                    <div className={`lesson-description overflow-hidden transition-all duration-500 ease-in-out ${activeLesson === index ? 'max-h-screen' : 'max-h-0'}`}>
                                        <p className="text-sm lg:w-2/3 w-full mt-2 font-sans">{lesson.description}</p>
                                        <p>3 مواضيع | 1{' '}
                                            <span className="text-green-700 hover:text-green-500 cursor-pointer underline underline-offset-4">
                                                اختبار
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="wallet-sidebar p-3 md:flex hidden flex-col items-center h-fit bg-emerald-700 rounded-md lg:w-1/5 w-1/3">
                        <p className='text-lg text-white cairo font-medium'>محفظتك الخاصة</p>
                        <img className='w-36' src={wallet} alt="" />
                        <p className='lg:text-xl text-sm text-white cairo font-medium'>تحتوي المحفظة علي : <span className='text-amber-400'>{Wallet} جنيه</span></p>
                    </div>
                    <div className="wallet-sidebar mt-12     p-3 md:hidden flex fixed bottom-0 left-0 right-0  items-center  justify-center bg-emerald-700 rounded-t-xl ">
                        <img className='w-20' src={wallet} alt="" />
                        <p className=' text-lg text-white cairo font-medium'>تحتوي المحفظة علي : <span className='text-amber-400'>{Wallet} جنيه</span></p>
                    </div>
                </div>
            </div>
        </>
    );
}
