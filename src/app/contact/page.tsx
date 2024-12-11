import React from "react";
import Image from "next/image";
import Link from "next/link";

const ContactPage = () => {
  return (
    <div className="min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-15rem)] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-16 py-16">
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get in Touch with Us
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Have questions about our AI-powered fitness solutions? We're here to
            help you achieve your fitness goals.
          </p>
        </div>
        <div className="w-full md:w-1/2 relative h-[400px]">
          <Image
            src="https://images.pexels.com/photos/7433822/pexels-photo-7433822.jpeg"
            alt="Customer Support"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Contact Methods */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16">
        <div className="text-center p-8 bg-gray-50 rounded-lg">
          <div className="text-4xl mb-4">📍</div>
          <h3 className="text-xl font-semibold mb-3">Visit Us</h3>
          <p className="text-gray-600">3180 18th Street</p>
          <p className="text-gray-600">San Francisco, CA, 94110</p>
        </div>
        <div className="text-center p-8 bg-gray-50 rounded-lg">
          <div className="text-4xl mb-4">📧</div>
          <h3 className="text-xl font-semibold mb-3">Email Us</h3>
          <p className="text-gray-600">mfai@myfitnessai.com</p>
          <p className="text-gray-600">support@myfitnessai.com</p>
        </div>
        <div className="text-center p-8 bg-gray-50 rounded-lg">
          <div className="text-4xl mb-4">📱</div>
          <h3 className="text-xl font-semibold mb-3">Call Us</h3>
          <p className="text-gray-600">+1 234-567-890</p>
          <p className="text-gray-600">Mon-Fri: 9AM-6PM PST</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-2xl mx-auto py-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Send Us a Message
        </h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-3 border border-gray-200 rounded-md"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full p-3 border border-gray-200 rounded-md"
            />
          </div>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 border border-gray-200 rounded-md"
          />
          <textarea
            placeholder="Your Message"
            rows={6}
            className="w-full p-3 border border-gray-200 rounded-md"
          />
          <button className="w-full bg-lama text-white py-3 rounded-md hover:bg-opacity-90 transition-all">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
