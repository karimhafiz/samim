import React from "react";
import {
  ClipboardDocumentListIcon,
  DocumentTextIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

const Services = () => {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          Our Services
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <ClipboardDocumentListIcon className="h-16 w-16 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Form Filling</h3>
            <p className="text-gray-600">
              We help you fill out important forms correctly and quickly.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <DocumentTextIcon className="h-16 w-16 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Document Translation</h3>
            <p className="text-gray-600">
              We translate your documents to help you understand them better.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <PhoneIcon className="h-16 w-16 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Phone Call Assistance</h3>
            <p className="text-gray-600">
              We help you make important phone calls and explain things clearly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
