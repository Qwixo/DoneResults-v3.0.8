import React from "react";

const Contact: React.FC = () => {
  return (
    <section
      id="final-cta"
      className="py-20 bg-white dark:bg-gray-900 text-center"
    >
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Want a Smarter Way to Get More Clients?
        </h2>

        {/* CTA Button */}
        <div className="mb-6">
          <a
            href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3SqRGx0SD40mEaoR1UqvTm-gBnZ9kuxqOKR2MpWKhb-9-eU8nR6yyhgwMX-M0OuodgIfYACrOO?gv=true"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 text-white font-semibold bg-teal-500 hover:bg-teal-600 rounded-lg shadow-md transition duration-300 text-lg"
          >
            Book a Free Strategy Call
          </a>
        </div>

        {/* Supporting Text */}
        <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          We only take on a few clients at a time—because that’s how we keep
          results strong and personal.
          <br />
          <span className="font-semibold">
            Right now,{" "}
            <span className="text-teal-600 dark:text-teal-400 font-bold">
              one spot is open.
            </span>
          </span>{" "}
          After that, we’re fully booked for the quarter.
          <br />
          If this sounds like what you’ve been looking for—let’s talk before
          it’s gone.
        </p>
      </div>
    </section>
  );
};

export default Contact;
