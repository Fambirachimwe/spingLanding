import { ChevronRightIcon } from 'lucide-react'
import React from 'react';
import { Button } from "@/components/ui/button";
import HeroImage from "./assets/Hero.png";
import DellLogo from "./assets/cib_dell.png";
import IntelLogo from "./assets/cib_intel.png";
import PumaLogo from "./assets/puma.png"

const HeroSection = () => {
    return (
        <div className='mt-24'>
            <div className='flex flex-col md:flex-row justify-center   items-center md:justify-between'>
                <div className="left text-center md:text-start max-w-[500px]">
                    <h1 className='text-3xl md:text-3xl  lg:text-5xl font-semibold tracking-wide  pb-5'>The Future <br />  <span className=''>Of Contracting</span></h1>

                    <p className="text-xl text-muted-foreground md:w-10/12  ">Bringing the consumer-like expereience into  the word of robust corporate tools</p>

                    <div className='mt-10 mx-auto items-center flex justify-center md:justify-start mb-5'>
                        <Button className=" flex justify-between items-center gap-1 bg-[#3F87FE]">
                            <p>Request demo</p>
                            <ChevronRightIcon className="h-4 w-4" /></Button>
                    </div>

                    {/* hero footer */}
                    <div className='flex flex-col md:flex-row justify-center  md:justify-between items-center'>
                        <p className=' text-sm'><span>50,000+</span> people use Cequence to <br /> manage their contracts</p>
                        <div className='flex  p-10 justify-evenly md:justify-between gap-5 items-center md:mr-20'>
                            <img src={DellLogo} width={30} alt="dell logo" />
                            <img src={IntelLogo} width={30} alt="dell logo" />
                            <img src={PumaLogo} width={30} alt="dell logo" />

                        </div>
                    </div>
                </div>

                {/* hero image here */}

                <div className='max-w-[450px]'>
                    <img src={HeroImage} alt="" />
                </div>
            </div>
        </div>
    )
}

export default HeroSection
