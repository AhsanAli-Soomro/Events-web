"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const Events = () => {
    const [events, setEvents] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const storedEvents = JSON.parse(localStorage.getItem('events')) || [];
        setEvents(storedEvents);
    }, []);

    const deleteEvent = (index, date) => {
        const updatedEvents = events.filter((event, i) => !(i === index && event.date === date));
        setEvents(updatedEvents);
        localStorage.setItem('events', JSON.stringify(updatedEvents));
    };

    const updateEvent = (index, date) => {
        router.push(`/Event/${date}?index=${index}`);
    };

    const addEvent = () => {
        router.push(`/Event`);
    };

    const viewEvent = (index, date) => {
        router.push(`/EventDetails/?index=${index}`);
    };

    const groupEventsByDate = () => {
        const groupedEvents = events.reduce((acc, event, index) => {
            acc[event.date] = acc[event.date] || [];
            acc[event.date].push({ ...event, index });
            return acc;
        }, {});
        return groupedEvents;
    };

    const groupedEvents = groupEventsByDate();

    return (
        <div className="p-4">
            <h1 className="text-3xl text-center text-slate-900 font-extrabold b-4 m-4">Your Events</h1>
            <div className='justify-center text-right'>

            <button onClick={addEvent} className="px-6 text-white rounded-full bg-black hover:bg-slate-800 py-3 transition duration-300 mb-3">Add Event</button>
            </div>
            {events.length === 0 ? (
                <p className='h-screen'>No events added yet.</p>
            ) : (
                <div className="space-y-4">
                    {Object.keys(groupedEvents).map((date) => (
                        <div key={date} className="border p-4">
                            <h2 className="text-xl text-gray-500">{new Date(date).toDateString()}</h2>
                            <ul className="flex flex-col sm:flex-row sm:flex-wrap">
                                {groupedEvents[date].map((event) => (
                                    <li
                                        key={event.index}
                                        className="cursor-pointer border m-2 p-4 transition-colors duration-200 ease-in-out hover:bg-slate-200 hover:border-gray-300 flex-1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                                        onClick={() => viewEvent(event.index, date)}
                                    >
                                        <h3 className="text-xl">{event.title}</h3>
                                        <p>{event.description}</p>
                                        <div></div>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); updateEvent(event.index, date); }}
                                            className="bg-yellow-500 text-white p-2 mt-2"
                                        >
                                            Update
                                        </button>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); deleteEvent(event.index, date); }}
                                            className="bg-red-500 text-white p-2 mt-2 ml-2"
                                        >
                                            Delete
                                        </button>
                                    </li>
                                ))}
                            </ul>

                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Events;
