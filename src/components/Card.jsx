import Image from 'next/image';
import React from 'react';

export default function Card({ title, description, img }) {
    return (
        <div className="max-w-sm border rounded-lg overflow-hidden shadow-lg bg-white">
            <div className="p-2 flex flex-col">
                <div className="w-full mb-2 shadow-sm h-60 flex justify-center items-center overflow-hidden">
                    <Image
                        src={img}
                        alt="Event Image"
                        width={500}
                        height={500}
                        className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
                    />
                </div>
                <div className="px-4 py-2 ">
                    <div className="font-bold text-xl line-clamp-1 mb-2">{title}</div>
                    <p className="text-gray-700 line-clamp-2 text-base">
                        {description}
                    </p>
                </div>
            </div>
            <div className="px-6 pt-4 pb-2 mb-2">
                <a href="/Event"
                    className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded"
                >
                    Add Event
                </a>
                <a href="/Services"
                    className="ml-4 bg-slate-900 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded"
                >
                    Learn More
                </a>
            </div>
        </div>
    );
}
