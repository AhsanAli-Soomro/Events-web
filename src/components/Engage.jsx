import React from "react";
import Card from "./Card";
import ServicesSection from "./ServicesSection";
import ServicesSection2 from "./ServicesSection2";


export default function Engage() {

    const events = [
        {
            id: 1,
            title: "Event Details Form:",
            description: "Once a date is selected, users should be directed to a form where they can input details about the event such as title, time, location, and descriptions.",
            img: "/form.png"
        },
        {
            id: 3,
            title: "Integration with User's Calendar:",
            description: "Provide options to add the scheduled event directly to popular calendar services like Google Calendar, Apple Calendar, and Outlook.",
            img: "/options.png"
        },
        {
            id: 2,
            title: "Confirmation Screen:",
            description: "After submitting the event details, users should receive a confirmation screen summarizing their event, with options to edit or delete if necessary.",
            img: "/conf.png"
        },
    ];


    return (
        <div className="p-8">
            <div className="text-slate-900 mt-10 text-3xl text-center font-extrabold b-4 m-4">Our Services</div>
            <ServicesSection />
            <ServicesSection2 />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {events.map((event) => (
                    <div key={event.id}>
                        <div className='text-2xl font-bold p-2'><span>{event.id}: </span>{event.title}</div>
                        <div className='p-2'>{event.description}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
