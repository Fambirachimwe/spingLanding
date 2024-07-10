import React from 'react'

const ContentWrapper = ({ children }) => {
    return (
        <div className='max-w-[1200px] text-[#435169]  mx-auto px-8 md:p-20 pt-10'>

            {children}

        </div>
    )
}

export default ContentWrapper
