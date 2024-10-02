import React from "react";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          Contact Us
        </h2>
        <div className="mx-auto max-w-lg space-y-8">
          <div className="flex flex-col items-center space-y-2 p-6 bg-white rounded-lg shadow-sm">
            <PhoneIcon className="h-8 w-8 text-blue-600" />
            <p className="text-xl font-semibold">Phone</p>
            <a
              href="tel:123-456-7890"
              className="text-lg text-blue-600 hover:text-blue-800 transition-colors"
            >
              123-456-7890
            </a>
          </div>
          <div className="flex flex-col items-center space-y-2 p-6 bg-white rounded-lg shadow-sm">
            <EnvelopeIcon className="h-8 w-8 text-blue-600" />
            <p className="text-xl font-semibold">Email</p>
            <a
              href="mailto:help@samimservices.com"
              className="text-lg text-blue-600 hover:text-blue-800 transition-colors"
            >
              help@samimservices.com
            </a>
          </div>
          <div className="flex flex-col items-center space-y-2 p-6 bg-white rounded-lg shadow-sm">
            <MapPinIcon className="h-8 w-8 text-blue-600" />
            <p className="text-xl font-semibold">Address</p>
            <p className="text-lg text-center">
              123 Main Street, City, Country
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
