import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-15rem)] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-16 py-16">
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Transforming Lives Through AI-Powered Fitness
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Transform Your Fitness Journey with My Fitness AI My Fitness AI
            revolutionizes the at-home fitness experience with personalized
            AI-driven workout routines tailored to your fitness level,
            availability, and goals. Designed for beginners, our platform
            removes the intimidation of starting a fitness journey by providing
            dynamic, adaptive workout plans, progress tracking, and a supportive
            community. With convenient equipment rental and purchasing options
            perfectly matched to your routine, My Fitness AI ensures a seamless
            and effective approach to achieving your fitness goals—all from the
            comfort of your home. Rediscover fitness with a solution that’s as
            unique as you are. Join My Fitness AI today and start building the
            confident, consistent fitness journey you deserve!
          </p>
          <Link
            href="/list"
            className="bg-lama text-white px-8 py-3 rounded-md inline-block hover:bg-opacity-90 transition-all"
          >
            Explore Our Products
          </Link>
        </div>
        <div className="w-full md:w-1/2 relative h-[400px]">
          <Image
            src="https://images.pexels.com/photos/6598979/pexels-photo-6598979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Fitness Training"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Innovation",
              description:
                "Leveraging AI technology to create adaptive and personalized fitness solutions.",
              icon: "💡",
            },
            {
              title: "Accessibility",
              description:
                "Making premium fitness guidance available to everyone, anywhere, anytime.",
              icon: "🌍",
            },
            {
              title: "Community",
              description:
                "Building a supportive network of fitness enthusiasts and professionals.",
              icon: "🤝",
            },
          ].map((value, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gray-50 -mx-4 md:-mx-8 lg:-mx-16 xl:-mx-32 2xl:-mx-64 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "10K+", label: "Active Users" },
            { number: "500+", label: "Products" },
            { number: "98%", label: "Satisfaction Rate" },
            { number: "24/7", label: "Support" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-lama mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Start Your Fitness Journey?
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied users who have transformed their lives
          with My Fitness AI.
        </p>
        <Link
          href="/list"
          className="bg-lama text-white px-8 py-3 rounded-md inline-block hover:bg-opacity-90 transition-all"
        >
          Get Started Today
        </Link>
      </div>
    </div>
  );
};

export default AboutPage;
