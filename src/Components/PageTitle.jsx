import React from "react";

const PageTitle = ({ image, text }) => {
  return (
    <div>
      <div className="w-full h-44 relative">
        <div className="bg-gradient-to-t from-[#000000] to-[#00000054] absolute w-full h-full flex items-center justify-center">
          <h1 className="text-white text-3xl font-medium mb-2 duration-300">
            {text}
          </h1>
        </div>
        <img className="object-cover w-full h-44" src={image} alt="" />
      </div>
    </div>
  );
};

export default PageTitle;
