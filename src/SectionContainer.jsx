import React from 'react';
import SaveTime from "./assets/savetime.png"
import { MoveRight } from 'lucide-react';
import { cn } from "./lib/utils"
import { Link } from 'react-router-dom';

// props
// { position, image, title, subtitle, description }

const SectionContainer = ({ position, image, title, subtitle, description, url }) => {
    return (

        <div className={cn('flex flex-col md:flex-row justify-between items-center p-5', `${position === 'left' ? ('md:flex-row-reverse') : ('flex')} `)} >
            <div className="md:-ml-8 mx-auto md:mx-0 image_container">
                <img width={350} src={image} alt="" srcset="" />
            </div>

            <div className="description mt-5 text-center sm:text-start md:max-w-[350px]">
                <h1 className='text-xl md:text-4xl  text-red-300 font-bold'>{title}</h1>
                <h2 className='text-2xl md:text-3xl font-bold tracking-wide  my-5'>{subtitle}</h2>
                <p className='leading-7 tracking-wide'>{description}</p>

                {/* explore buttone */}

                <Link className='flex justify-center' to={url}>
                    <div className='my-5  flex gap-3  items-center'>
                        <p className='text-blue-500 font-semibold text-lg'>Explore Product</p>
                        <MoveRight className='text-blue-500' />
                    </div>
                </Link>


            </div>

        </div >
    )
}

export default SectionContainer
