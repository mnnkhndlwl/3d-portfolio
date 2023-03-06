import React from "react";
import SectionWrapper from "./utils/SectionWrapper";

const Experience = () => {
  return (
    <>
      <div className="flex justify-center">
        <h2 className="tracking-normal text-2xl leading-10 font-extrabold text-white sm:text-5xl sm:leading-none md:text-6xl">
          My Work Experience
        </h2>
      </div>
      <div className="flex justify-center">
        <div className="container mx-auto w-full h-full">
          <div className="relative wrap overflow-hidden p-10 h-full">
            <div
              className="border-2-2 absolute border-opacity-20 border-violet-700 h-full border"
              style={{ left: "50%" }}
            ></div>
            {/* <!-- right timeline --> */}
            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-violet-700 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
              </div>
              <div className="order-1 bg-violet-700 rounded-lg shadow-xl md:w-5/12 lg:w-5/12 px-6 py-4 w-5/12">
                <h2 className="mb-2 font-bold text-white-800 text-xl">Mentor</h2>
                <h6 className="mb-2 font-bold text-white-800 text-sm">
                  JWOC23K
                </h6>
                <p className=" mb-2 text-sm leading-snug tracking-wide text-white-900 text-opacity-100">
                  Feb 2023 - March 2023
                </p>
                <p className="text-sm leading-snug tracking-wide text-white-900 text-opacity-100">
                  Mentored participants of JWOC23K in my project youtube clone.
                </p>
              </div>
            </div>

            {/* <!-- left timeline --> */}
            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-red-400 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
              </div>
              <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h2 className="mb-2 font-bold text-gray-800 text-xl">
                  Senior Team Member
                </h2>
                <h6 className="mb-2 font-bold text-gray-800 text-sm">
                  NSCC BPIT
                </h6>
                <p className=" mb-2 text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                  NOV 2022 - Present
                </p>
                <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                  Mentoring junior members and general members of NSCC BPIT in
                  their journey to become a rockstar web developer
                </p>
              </div>
            </div>

            {/* <!-- right timeline --> */}
            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-violet-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
              </div>
              <div className="order-1 bg-violet-700 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h2 className="mb-2 font-bold text-white-800 text-xl">Mentee</h2>
                <h6 className="mb-2 font-bold text-white-800 text-sm">
                  JWOC22k
                </h6>
                <p className=" mb-2 text-sm leading-snug tracking-wide text-white-900 text-opacity-100">
                  Feb 2022 - March 2022
                </p>
                <p className="text-sm leading-snug tracking-wide text-white-900 text-opacity-100">
                  Participated as a mentee in Jwoc22k where I contributed to
                  several open source projects under this programme
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "Experiences");
