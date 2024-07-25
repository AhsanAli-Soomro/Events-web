import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import dayjs from 'dayjs';

const DatePicker = () => {
    const router = useRouter();
    const [events, setEvents] = useState([]);
    const [currentDate, setCurrentDate] = useState(dayjs());

    useEffect(() => {
        const storedEvents = JSON.parse(localStorage.getItem('events')) || [];
        setEvents(storedEvents);
    }, []);

    const viewEvent = () => {
        router.push(`/Events`);
    };

    const handleDateClick = (date) => {
        router.push(`/Event/${date}`);
    };

    const getEventSummaryForDate = (date) => {
        const dateEvents = events.filter(event => event.date === date);
        if (dateEvents.length === 0) return '';

        const firstEventTitle = dateEvents[0].title;
        const otherEventsCount = dateEvents.length - 1;
        return otherEventsCount > 0 ? `${firstEventTitle} and ${otherEventsCount} others` : firstEventTitle;
    };

    const startOfMonth = currentDate.startOf('month').day();
    const daysInMonth = currentDate.daysInMonth();
    const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    const handlePrevMonth = () => {
        setCurrentDate(currentDate.subtract(1, 'month'));
    };

    const handleNextMonth = () => {
        setCurrentDate(currentDate.add(1, 'month'));
    };

    const handleYearChange = (e) => {
        setCurrentDate(currentDate.year(e.target.value));
    };

    const handleMonthChange = (e) => {
        setCurrentDate(currentDate.month(e.target.value));
    };

    return (
        <div className="pt-16 pb-40">
            <h1 className="text-3xl text-slate-900 text-center font-extrabold b-4 m-4">Pick a Date</h1>
            <div className=" flex flex-row justify-between border text-center p-4 gap-4 mb-4">
                <button onClick={handlePrevMonth} className="mr-2 text-2xl font-extrabold">&lt;</button>
                <select className='bg-slate-900 rounded-sm border p-4 w-full font-extrabold text-2xl text-white' value={currentDate.year()} onChange={handleYearChange}>
                    {Array.from({ length: 10 }, (_, i) => currentDate.year() - 5 + i).map(year => (
                        <option key={year} value={year}>{year}</option>
                    ))}
                </select>
                <select className='bg-slate-900 rounded-sm border p-4 w-full font-extrabold text-2xl text-white' value={currentDate.month()} onChange={handleMonthChange}>
                    {Array.from({ length: 12 }, (_, i) => i).map(month => (
                        <option className='bg-slate-900' key={month} value={month}>{dayjs().month(month).format('MMMM')}</option>
                    ))}
                </select>
                <button onClick={handleNextMonth} className="ml-2 text-2xl font-extrabold">&gt;</button>
            </div>
            <div className="grid grid-cols-7 ">
                {Array.from({ length: startOfMonth }).map((_, i) => (
                    <div key={`empty-${i}`} className="p-2 text-center"></div>
                ))}
                {daysArray.map(day => {
                    const dateString = currentDate.date(day).toISOString().split('T')[0];
                    const eventSummary = getEventSummaryForDate(dateString);
                    return (
                        <div key={day} className={`border p-2 text-center cursor-pointer hover:bg-slate-500 hover:text-white ${eventSummary ? 'bg-slate-900 text-white' : ''}`}>
                            <div
                                className='w-full'
                                onClick={() => handleDateClick(dateString)}
                            >
                                <div>{day}</div>
                            </div>
                            <a className='hover:underline' onClick={() => viewEvent()}>
                                {eventSummary && <div className="mt-2 text-sm text-white">{eventSummary}</div>}
                            </a>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default DatePicker;
