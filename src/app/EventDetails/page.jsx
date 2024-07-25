// pages/EventDetails/[date].jsx
"use client"
import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';

const EventDetails = ({ params }) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const index = searchParams.get('index');
    const [event, setEvent] = useState(null);

    useEffect(() => {
        if (index !== null) {
            const events = JSON.parse(localStorage.getItem('events')) || [];
            const eventToShow = events[index];
            if (eventToShow) {
                setEvent(eventToShow);
            }
        }
    }, [index]);

    if (!event) {
        return <p className="p-4">Event not found.</p>;
    }

    return (
        <div className="p-4 text-center border h-dvh bg-white">
            <h1 className="text-3xl text-slate-900 font-extrabold mb-4 mt-4">Event Details</h1>
            <div className="flex justify-center pb-4"> {/* Container to center the image */}
                <Image src='/tick.png' width={100} height={100} alt="Event Confirmation Tick" />
            </div>
            <p className="text-slate-800 text-3xl font-bold">{new Date(event.date).toDateString()}</p>
            <div className='p-8'>
                <h2 className="text-xl mb-2 text-slate-800 font-bold">Title: <span className='text-green-800'>{event.title}</span></h2>
                <p className='text-4xl'>{event.description}</p>
            </div>
    
            <button onClick={() => router.push('/Events')} className="px-6 py-3 mt-4 rounded-full bg-black hover:bg-slate-800 text-white transition duration-300">Back to Events</button>
        </div>
    );
    
};

export default EventDetails;
