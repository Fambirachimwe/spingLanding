import React from 'react';
import LatestImage from "./assets/latest.png";
import { Button } from "@/components/ui/button"
import { MoveUpRight } from 'lucide-react';

const LatestSection = () => {
    return (
        <div className='bg-blue-500 p-5 shadow-2xl overflow-hidden md:my-10 rounded-lg'>
            <div className='flex flex-col md:gap-5 justify-center md:justify-between md:flex-row items-center '>

                {/* left */}
                <div className=' md:max-w-[49ch]'>
                    <h1 className='text-white font-bold md:text-xl tracking-wide md:leading-10 '>
                        Latest advanced technologies
                        under the hood to ensure that everything works like a charm.
                    </h1>

                    <Button className="flex justify-between  rounded-sm bg-white hover:bg-white w-full mt-5">
                        <p className='text-blue-500'>Learn more</p>

                        <Button className="bg-blue-500 hover:bg-blue-500 rounded-[5px] w-6 h-6" size="icon">
                            <MoveUpRight className='w-4' />
                        </Button>




                    </Button>
                </div>

                {/* right */}

                <div className='hidden md:block relative top-6'>
                    <img width={400} src={LatestImage} alt="" srcset="" />
                </div>


            </div>


        </div>
    )
}

export default LatestSection
