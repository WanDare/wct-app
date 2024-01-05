"use client"

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS for styling
import {DangerousOutlined, Face2Outlined, Face3Outlined, MoreOutlined, SpeedOutlined, ThumbUpOutlined } from '@mui/icons-material';

const About = () => {
    useEffect(() => {
        AOS.init({
        
            duration: 800, // Animation duration
            easing: 'ease-in-out', // Easing option
            
        });
    }, []);

    return (
        <div>
            
            {/* About us */}
            <section className="header-imgs mb-[350px]">
                <div className="relative">
                    <div className="w-full shadow-md" data-aos="fade-in">
                        <img className="w-full mb-" src="https://hire4event.com/blogs/wp-content/uploads/2019/05/Event-Management-Proposal-Hire4event.jpg" alt="img1" />
                    </div>
                    <div className="absolute inset-0 flex top-[80%] justify-center">
                        <div className="shadowed-image w-[70%] grid grid-flow-col " data-aos="fade-in"  data-aos-delay="400" >
                            <div className="h-full w-full px-5 lg:px-20 py-10 text-left flex flex-col justify-center bg-white drop-shadow-md">
                                <h3 className="pb-8 font-bold text-4xl text-center">About us?</h3>
                                <p className="pb-8">
                                    We are a group of student From Royale University of Phnom Phenh who try to make a better and more facilitated platform for everyone who love to navigate new events with just a snap of time.
                                </p>                                
                                <p className=" text-center font-light pb-8">
                                    Our goals is to make things for everyone!
                                </p>
                                
                            </div>
                            <div className="max-w-[500px] max-h-[400px] drop-shadow-md">
                                <img className="object-cover h-full w-ful" src="https://ih1.redbubble.net/image.2382029195.6138/fpp,small,lustre,wall_texture,product,750x1000.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* why us */}
            <section className="container mx-auto mb-10" >
                <div className="">
                    <div className="grid grid-flow-col grid-cols-2">
                        <div className=" col-span-1 drop-shadow-lg w-full h-[400px] relative " data-aos-delay="500" data-aos-duration="1000">
                            <img data-aos="fade-right" className=" object-cover h-full w-full" src="https://spotme.com/wp-content/uploads/2020/07/Hero-1.jpg" alt="" />
                            <img data-aos="fade-right" data-aos-delay="600"  className=" absolute left-[10%] top-[10%] object-cover h-[80%] w-full" src="https://www.hertie-school.org/fileadmin/_processed_/1/1/csm_Hertie_Events_3b17c74704.jpg" alt="" />

                        </div>
                        <div className=" col-span-1 pl-32 flex flex-col justify-center" data-aos="fade-left" >
                            <h3 className='pb-8 font-bold text-4xl text-center'>Why us?</h3>
                            <div className='flex justify-between'>
                                <div>
                                    <div className='py-8 px-5' data-aos="fade-down" data-aos-delay="800">
                                        <p className='pb-2 flex  items-start'> <ThumbUpOutlined className='mr-2 mb-1 text-blue-600'/> Ultimate usage</p>
                                        <p className=' font-light'>We Provide a 100% free service</p>
                                    </div>
                                    <div className='py-1 px-5' data-aos="fade-down" data-aos-delay="900">
                                        <p className='pb-2 flex  items-start'> <MoreOutlined className='mr-2 mb-1 text-blue-600'/> Variaty of event Categories</p>
                                        <p className=' font-light'>There are more than 20 categories here</p>
                                    </div>
                                </div>
                                <div>
                                    <div className='py-8 px-5' data-aos="fade-down" data-aos-delay="1000">
                                        <p className='pb-2 flex  items-start'> <SpeedOutlined className='mr-2 mb-1 text-blue-600'/> Lightspeed target</p>
                                        <p className=' font-light'>We know You love to filter your categories</p>
                                    </div>
                                    <div className='py-1 px-5' data-aos="fade-down" data-aos-delay="1100">
                                        <p className='pb-2 flex  items-start'> <DangerousOutlined className='mr-2 mb-1 text-blue-600'/> No disstraction</p>
                                        <p className=' font-light'>We know you are tired of social media</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* border */}
            <div className='border shadow'>

            </div>

            {/* our team */}
            <div className='container mx-auto pb-10'>
                <h2 className=' py-8 font-bold text-4xl text-center'>Our Team</h2>
                <div className=' profiles flex justify-center gap-5'>
                    <figure className='w-1/6 shadow-md bg-zinc-200' data-aos="fade-down" data-aos-delay="200">
                        <img className='rounded-[50%]' src="https://cirrusindia.co.in/wp-content/uploads/2016/10/dummy-profile-pic-male1.jpg" alt="" />
                        <div className=' text-center py-5 bg-white '>
                            Peng Lykhim
                        </div>
                    </figure>
                    <figure className='w-1/6 shadow-md bg-zinc-200' data-aos="fade-down" data-aos-delay="400">
                        <img className='rounded-[50%]' src="https://www.heuschenschrouff.com/wp-content/uploads/2017/11/team-dummy-woman-e1631101482457.png" alt="" />
                        <div className=' text-center py-5 bg-white '>
                            Neang Thary
                        </div>
                    </figure>
                    <figure className='w-1/6 shadow-md bg-zinc-200' data-aos="fade-up" data-aos-delay="600">
                        <img className='rounded-[50%]' src="https://www.heuschenschrouff.com/wp-content/uploads/2017/11/team-dummy-woman-e1631101482457.png" alt="" />
                        <div className=' text-center py-5 bg-white '>
                            Phon Sreypherk
                        </div>
                    </figure>
                    <figure className='w-1/6 shadow-md bg-zinc-200' data-aos="fade-down" data-aos-delay="400">
                        <img className='rounded-[50%]' src="https://cirrusindia.co.in/wp-content/uploads/2016/10/dummy-profile-pic-male1.jpg" alt="" />
                        <div className=' text-center py-5 bg-white '>
                            Neth Vandara
                        </div>
                    </figure>
                    <figure className='w-1/6 shadow-md bg-zinc-200' data-aos="fade-down" data-aos-delay="200">
                        <img className='rounded-[50%]' src="https://cirrusindia.co.in/wp-content/uploads/2016/10/dummy-profile-pic-male1.jpg" alt="" />
                        <div className=' text-center py-5 bg-white '>
                            Pann Senglay
                        </div>
                    </figure>
                </div>
            </div>
        </div>
    );
};

export default About;
