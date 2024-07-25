import ServicesSection from '@/components/ServicesSection';
import ServicesSection2 from '@/components/ServicesSection2';
import React from 'react';

function Page() {
    const events = [
        {
            id: 1,
            title: "Event Details Form:",
            description: "Once a date has been selected using the Date Picker Widget, users will automatically be directed to the Event Details Form. This form is structured to gather essential information about the event, including its title, time, location, and a detailed description. The form is designed to be user-friendly, guiding the user through each step of the event creation process. Fields are clearly labeled, and validation is performed to ensure that all provided information is accurate, enhancing the overall user experience and efficiency.",
        },
        {
            id: 2,
            title: "Confirmation Screen:",
            description: "After the event details are submitted, a Confirmation Screen is displayed, providing a summary of the event. This screen confirms that the event has been successfully scheduled, displaying all key information such as date, time, and location, allowing users to review and ensure everything is correct. Additionally, it offers options to edit or delete the event, giving users full control over their scheduling. This feature is crucial for managing events effectively and ensuring user satisfaction.",
        },
        {
            id: 3,
            title: "Integration with User's Calendar:",
            description: "To enhance functionality and user convenience, the event scheduler includes an integration feature with popular calendar services, such as Google Calendar, Apple Calendar, and Outlook. Once an event is created, users can add it directly to their personal calendar with just a few clicks. This integration simplifies personal time management by automatically syncing event details to the user's chosen calendar platform, providing reminders and updates as needed. This feature ensures users never miss their important events, making the scheduler a valuable tool for personal and professional organization.",
        }
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

export default Page;
