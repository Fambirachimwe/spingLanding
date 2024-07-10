import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRightIcon, MenuIcon, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='flex justify-between py-2 bg-white sticky top-10 items-center w-full text-[#435169]'>

            {/* left section of the navbar */}
            <div className='flex items-center mr-5'>
                <div className="logo">
                    <Link to="/">
                        <h2 className='font-bold tracking-wide'>SPRING</h2>
                    </Link>
                </div>
                <div className='hidden md:block'>
                    <div className='mx-20'>
                        <div className='w-full flex gap-10'>
                            <Link className='hover:font-bold transition-all ease-in-out delay-100' to="#">Product</Link>
                            <Link className='hover:font-bold transition-all ease-in-out delay-100' to="#">Solution</Link>
                            <Link className='hover:font-bold transition-all ease-in-out delay-100' to="#">Pricing</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* right side */}
            <div>
                <div className='hidden md:block'>
                    <Button className="bg-[#FF7853]">Request demo  <ChevronRightIcon className="h-4 w-4" /></Button>
                </div>
                {/* menuIcon here */}
                <div className='md:hidden cursor-pointer' onClick={toggleMenu}>
                    <MenuIcon />
                </div>
            </div>

            {/* mobile navigation here */}
            {isOpen && (
                <div className='bg-white flex rounded-lg flex-col shadow-lg w-full h-96 left-0 top-0 absolute z-50 md:hidden'>
                    <div className='flex w-full justify-end p-5' onClick={toggleMenu}>
                        <X className='cursor-pointer' />
                    </div>
                    <div className='p-5'>
                        <div className='flex-col justify-start flex gap-5'>
                            <Link className='hover:font-bold transition-all ease-in-out delay-100' to="#">Product</Link>
                            <Link className='hover:font-bold transition-all ease-in-out delay-100' to="#">Solution</Link>
                            <Link className='hover:font-bold transition-all ease-in-out delay-100' to="#">Pricing</Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
