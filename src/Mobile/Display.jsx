import React from "react";

const Display = (props) => {
  return (
    <div className="bg-white rounded-xl text-black py-5 display absolute md:flex-row gap- md:gap-10 lg:gap-15 md:px-10 md:py-5 shadow-2xl">
      <div className="pb-3 md:flex-row md:place-items-start">
        <h3 className="font-bold text-dark-gray uppercase display-header">
          Ip Address
        </h3>
        <span className="font-bold md:text-xl">{props.ip}</span>
      </div>
      <div className="vertical hidden md:block"></div>
      <div className="pb-3">
        <h3 className="font-bold text-dark-gray uppercase display-header">
          Location
        </h3>
        <span className="font-bold md:text-xl">{props.location}</span>
      </div>
      <div className="vertical hidden md:block"></div>
      <div className="pb-3">
        <h3 className="font-bold text-dark-gray uppercase display-header">
          Timezone
        </h3>
        <span className="font-bold md:text-xl">{props.timezone}</span>
      </div>
      <div className="vertical hidden md:block"></div>
      <div className="pb-3">
        <h3 className="font-bold text-dark-gray uppercase display-header">
          ISP
        </h3>
        <span className="font-bold md:text-xl">{props.isp}</span>
      </div>
    </div>
  );
};

export default Display;
