import React from 'react'

function ServicesSection2() {
    return (
        <div className="flex flex-col-reverse sm:flex-row md:flex-nowrap mt-8 mb-8">
            <div className="flex-1 p-4">
                <div className="relative w-full h-64 md:h-full">
                    <img
                        src="/easy.png"
                        className="object-cover w-full h-full"
                        alt="Descriptive Alt Text"
                    />
                </div>
            </div>
            <div className="flex-1 p-4 text-left sm:text-right">
                <div className="text-xl text-slate-900  text-center font-extrabold b-4 m-4">Seamlessly Responsive Across All Devices</div>
                <p className="text-slate-900 text-lg">
                    Welcome to Eventify, where we prioritize a seamless user experience, regardless of the device you choose. Our website is meticulously designed to be fully responsive, ensuring that you can access and manage your event details effortlessly whether you’re on a desktop, tablet, or smartphone.
                </p>
                <p className='text-slate-900 text-xl font-bold'>
                    Responsive Design
                </p>
                <p className="text-slate-900 text-lg">
                    At Eventify, we understand that our users are constantly on the move. That's why our platform is built with a responsive design that adapts to any screen size and resolution. Whether you are organizing your schedule from the comfort of your home on a large desktop monitor or quickly checking event details on your smartphone while on the go, Eventify provides a consistent and intuitive experience.
                </p>
            </div>
        </div>
    );
}

export default ServicesSection2
