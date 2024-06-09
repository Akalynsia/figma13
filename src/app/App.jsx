import React from "react";

const App = () => {
  return (
    <div className="relative w-screen sm:h-screen flex flex-col justify-center items-center bg-white gap-10">
      <header
        className="sm:-mt-16 w-[550px] h-[70px] md:w-[790px] md:h-[140px] lg:w-[1200px] lg:h-[140px] flex items-center"
        style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
      >
        <img src="/logo.png" alt="logo" className="ml-12" />
      </header>
      <section className="w-[396px] h:[232px] md:w-[792px] md:h-[464px] flex justify-between ">
        <div>
          <img
            src="/most-left.png"
            alt="pan"
            className="w-[72px] h-[97px] mt-14 md:w-[144px] md:h-[194px] rounded-lg md:mt-28"
          />
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <img
            src="/top-left.png"
            alt="wemen"
            className="w-[73px] h-[64px] md:w-[146px] md:h-[128px] rounded-lg"
          />
          <img
            src="/bot-left.png"
            alt="dance"
            className="w-[77px] h-[99px] md:w-[144px] md:h-[198px] rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-4 mt-20">
          <img
            src="/top-middle.png"
            alt="food"
            className="w-[73px] h-[96px] md:w-[146px] md:h-[192px] rounded-lg"
          />
          <img
            src="/bot-middle.png"
            alt="guitar"
            className="w-[73px] h-[96px] md:w-[146px] md:h-[192px] rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-4">
          <img
            src="/top-right.png"
            alt="food"
            className="w-[73px] h-[96px] md:w-[146px] md:h-[192px] rounded-lg"
          />
          <img
            src="/bot-right.png"
            alt="guitar"
            className="w-[73px] h-[96px] md:w-[146px] md:h-[192px] rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-4 mt-10">
          <img
            src="/most-right-top.png"
            alt="medtation"
            className="w-[73px] h-[96px] md:w-[146px] md:h-[192px] rounded-lg"
          />
          <img
            src="/most-right-bottom.png"
            alt="medtation"
            className="w-[73px] h-[96px] md:w-[146px] md:h-[192px] rounded-lg"
          />
        </div>
      </section>
      <section>
        <h1 className="text-[32px] font-poppins font-[600] md:text-[64px] md:mr-80">
          Online Experiences
        </h1>
        <p className=" text-[16px] font-poppins font-[300] md:text-[32px] md:w-[600px]">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </section>
      <article className="flex gap-8">
        <div>
          <img
            src="/article-left.png"
            alt="swimmer"
            className="w-[176px] h-[235px] md:w-[352px] md:h-[470px] rounded-lg mb-4"
          />
          <div>
            <div className="flex">
              <img src="/star.png" alt="star" className="mr-2" />
              <p className="text-[rgba(145,142,155,1)]">
                <span className="text-[rgba(34,34,34,1)]">5.0</span> (6) - USA
              </p>
            </div>
            <p className="text-[rgba(34,34,34,1)] text-24px font-poppins font-[300]">
              Life lessons with Katie Zaferes
            </p>
            <p className="text-[rgba(34,34,34,1)]">
              <strong>From $136</strong> / person
            </p>
          </div>
        </div>
        <div>
          <img
            src="/article-middle.png"
            alt="bribe"
            className="w-[176px] h-[235px] md:w-[352px] md:h-[470px] rounded-lg mb-4"
          />
          <div>
            <div className="flex">
              <img src="/star.png" alt="star" className="mr-2" />
              <p className="text-[rgba(145,142,155,1)]">
                <span className="text-[rgba(34,34,34,1)]">5.0</span> (30) - USA
              </p>
            </div>
            <p className="text-[rgba(34,34,34,1)] text-24px font-poppins font-[300]">
              Learn wedding photography
            </p>
            <p className="text-[rgba(34,34,34,1)]">
              <strong>From $125</strong> / person
            </p>
          </div>
        </div>
        <div>
          <img
            src="/article-right.png"
            alt="mountain bike"
            className="w-[176px] h-[235px] md:w-[352px] md:h-[470px] rounded-lg mb-4"
          />
          <div>
            <div className="flex">
              <img src="/star.png" alt="star" className="mr-2" />
              <p className="text-[rgba(145,142,155,1)]">
                <span className="text-[rgba(34,34,34,1)]">4.8</span> (2) - USA
              </p>
            </div>
            <p className="text-[rgba(34,34,34,1)] text-24px font-poppins font-[300]">
              Group Mountain Biking
            </p>
            <p className="text-[rgba(34,34,34,1)]">
              <strong>From $150</strong> / person
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default App;
