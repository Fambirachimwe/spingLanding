import React from 'react';
import { Button } from "@/components/ui/button"
import { MoveRight } from 'lucide-react';
import Mask from "./assets/mask.png";
import DellLogo from "./assets/cib_dell.png";
import IntelLogo from "./assets/cib_intel.png";
import PumaLogo from "./assets/puma.png"
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className=''>
            <div className='grid md:grid-cols-2  justify-between items-center border-b border-slate-200'>
                {/* left section */}
                <div className='mt-10 flex flex-col text-center md:text-start flex-wrap justify-between p-5'>
                    <h1 className='text-3xl font-bold my-5  text-white'>Ready to modernize your contracting process & save money?</h1>

                    <h3 className='my-7 text-white'>Join the portfolio of our satisfied customers from large enterprises to medium businesses and learn how to improve your business today.</h3>

                    <div className="cta flex justify-center md:justify-start items-center gap-2 md:gap-10">
                        <Button className="md:px-10 bg-white text-blue-500 font-bold">Business email</Button>
                        <Button className="md:px-2 bg-blue-500 flex gap-1 items-center">
                            <p>Request a demo</p>
                            <MoveRight className='h-5 w-5' />
                        </Button>
                    </div>

                    <div className="logos my-5">
                        <div className='flex justify-center  md:justify-between items-center'>
                            <p className='text-white text-sm'><span className='font-bold'>50,000+</span> people use Cequence to <br /> manage their contracts</p>

                        </div>

                    </div>
                </div>

                {/* /right container */}
                <div className='hidden  lg:flex justify-end w-full mx-auto'>
                    <img width={300} src={Mask} alt="" srcset="" />
                </div>

            </div>


            <div className="menuLinks mt-20 justify-around text-white text-sm flex md:justify-between">
                <div className="product">
                    <h1 className='font-bold'>Product</h1>
                    <ul className='py-2'>
                        <li>
                            <Link to="#">Features</Link>
                        </li>
                        <li>
                            <Link to="#">Technology</Link>
                        </li>
                        <li>
                            <Link to="#">Security</Link>
                        </li>
                        <li>
                            <Link to="#">Pricing</Link>
                        </li>
                    </ul>
                </div>



                <div className="product">
                    <h1 className='font-bold'>Company</h1>
                    <ul className='py-2'>
                        <li>
                            <Link to="#">Careers</Link>
                        </li>
                        <li>
                            <Link to="#">Case Study</Link>
                        </li>
                        <li>
                            <Link to="#">Security</Link>
                        </li>
                        <li>
                            <Link to="#">Pricing</Link>
                        </li>
                    </ul>
                </div>
                <div className="hidden md:block">
                    <h1 className='font-bold'>Solution</h1>
                    <ul className='py-2'>
                        <li>
                            <Link to="#">Sales</Link>
                        </li>
                        <li>
                            <Link to="#">Legal</Link>
                        </li>

                    </ul>
                </div>

                <div className="links hidden md:block">
                    <h1 className='font-bold'>Links</h1>
                    <ul className='py-2'>
                        <li>
                            <Link to="#">Facebook</Link>
                        </li>
                        <li>
                            <Link to="#">Linkedin</Link>
                        </li>

                    </ul>
                </div>

            </div>




        </div>

    )
}

export default Footer
