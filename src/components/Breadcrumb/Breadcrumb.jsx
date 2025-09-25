import React from 'react'
import breadcrumbbg from './../../assets/img/breadcrumb-bg-2.png'
import breadcrumbcircle from './../../assets/img/circle.png'
const Breadcrumb = () => {
    return (
        <>
            <div className="relative pb-0">
                <div
                    className="breadcrumb-img relative py-[220px] bg-center bg-no-repeat bg-cover text-center overflow-hidden z-0"
                    style={{
                        backgroundImage: `url(${breadcrumbbg})`,
                    }}
                >
                    <div
                        className="circle-img absolute top-1/2 left-0 right-0 -translate-y-1/2 z-[-1] bg-no-repeat bg-center bg-cover w-[300px] h-[300px] mx-auto"
                        style={{
                            backgroundImage: `url(${breadcrumbcircle})`,
                        }}
                    ></div>


                    <h2 className="relative text-white text-5xl font-semibold leading-[60px] mb-0 
  before:content-[''] before:absolute before:top-1/2 before:left-0 before:w-[400px] before:h-px before:bg-white/30 
  after:content-[''] after:absolute after:top-1/2 after:right-0 after:w-[400px] after:h-px after:bg-white/30">
                        Portfolio
                    </h2>
                </div>
            </div>

        </>
    )
}

export default Breadcrumb