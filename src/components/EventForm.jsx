"use client"
import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const EventForm = ({ date }) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const index = searchParams.get('index');
    const [event, setEvent] = useState({ title: '', description: '', date });

    useEffect(() => {
        if (index !== null) {
            const events = JSON.parse(localStorage.getItem('events')) || [];
            const eventToEdit = events[index];
            if (eventToEdit) {
                setEvent(eventToEdit);
            }
        }
    }, [index]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEvent({ ...event, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const events = JSON.parse(localStorage.getItem('events')) || [];
        if (index !== null) {
            events[index] = event;
        } else {
            events.push(event);
        }
        localStorage.setItem('events', JSON.stringify(events));
        router.push('/Events');
    };

    return (
        <div className="pt-16 pb-32">
            <h1 className="text-2xl mb-4"><span className='font-bold'>{index !== null ? 'Update Event' : 'Add Event'} on:</span>  {new Date(date).toDateString()}</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block mb-2">Event Title</label>
                    <input
                        type="text"
                        name="title"
                        value={event.title}
                        onChange={handleChange}
                        className="w-full p-2 border"
                    />
                </div>
                <div>
                    <label className="block mb-2">Location</label>
                    <input
                        type="text"
                        name="title"
                        value={event.title}
                        onChange={handleChange}
                        className="w-full p-2 border"
                    />
                </div>
                <div>
                    <label className="block mb-2">Description</label>
                    <textarea
                        name="description"
                        value={event.description}
                        onChange={handleChange}
                        className="w-full p-2 border"
                    />
                </div>
                <button type="submit" className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded">
                    {index !== null ? 'Update Event' : 'Add Event'}
                </button>
            </form>
        </div>
    );
};

export default EventForm;

