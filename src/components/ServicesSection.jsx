import Image from 'next/image';
import React from 'react';

function ServicesSection() {
  return (
    <div className="flex flex-col sm:flex-row md:flex-nowrap mt-8 mb-8">
      <div className="flex-1 p-4">
        <div className="text-xl text-slate-900 text-center font-extrabold mb-4">
          Your Ultimate Event Detail Saver
        </div>
        <p className="text-slate-900 text-lg">
          Welcome to Eventify, your premier solution for effortlessly managing and saving all your important event details. Designed with convenience and efficiency in mind, Eventify transforms the way you handle your schedules, making it an essential tool for anyone who juggles multiple events, appointments, and deadlines.
        </p>
        <p className="text-slate-900 text-xl font-bold mt-4">
          Purpose and Functionality:
        </p>
        <p className="text-slate-900 text-lg">
          Eventify is an innovative event detail saver that functions as an advanced date picker. Its primary purpose is to help you organize, save, and manage all the crucial details of your events in one seamless platform. Whether you&apos;re a busy professional, a student with a packed timetable, or simply someone who values impeccable time management, Eventify caters to all your scheduling needs.
        </p>
      </div>

      <div className="flex-1 p-4">
        <div className="relative w-full h-64 md:h-full">
          <Image
            src="/sect1.png"
            alt="Descriptive Alt Text"
            layout="fill"
            objectFit="cover"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
