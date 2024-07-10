import React from 'react'
import ContentWrapper from './ContentWrapper';
import Integrate from "./assets/integrate.png";
import { Link } from 'react-router-dom'
import { MoveRight } from 'lucide-react';
import Agile from "./assets/agile.png";

const IntegrateSection = () => {
    return (
        <ContentWrapper>
            <div className='text-[#435169]'>
                <div className="heading text-center mx-auto max-w-[50ch] tracking-wide">
                    <h1 className='text-3xl leading-10 my-2 font-bold'>Don't replace. Intergrate</h1>
                    <p>We understand the hussle of replacing the long used tools in your process. That’s why we integrate tools you use in your day-to-day work.
                    </p>
                </div>


                <img src={Integrate} className='min-w-[350px]' alt="" srcset="" />

            </div>

            {/* agile implementation container */}

            <div className={'flex flex-col gap-10 md:flex-row text-center md:text-start md:justify-between mt-20 items-center '} >
                <div className="image_container">
                    <img width={300} src={Agile} alt="" srcset="" />
                </div>

                <div className="description mt-14 max-w-[350px]">
                    <h1 className='lg:text-2xl  text-red-300 font-bold'>Agile implementation plan</h1>
                    <h2 className='lg:text-xl font-bold tracking-wide  my-5'>of an enterprise-grade tool that won’t brake the bank.</h2>
                    {/* <p className='leading-7 tracking-wide'>{description}</p> */}

                    {/* explore buttone */}

                    <Link className='flex w-full justify-center md:justify-start' to="#">
                        <div className='my-5  flex gap-3  items-center'>
                            <p className='text-blue-500 font-semibold lg:text-lg'>Explore Product</p>
                            <MoveRight className='text-blue-500' />
                        </div>
                    </Link>


                </div>

            </div >


        </ContentWrapper >
    )
}

export default IntegrateSection
