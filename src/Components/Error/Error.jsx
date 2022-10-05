import React from "react";

const Error = () => {
  return (
    <div className="flex justify-items-center justify-center min-h-full">
      <div className="text-center">
        <h3 className="text-3xl text-rose-700 font-bold uppercase my-2">
          404! page not found
        </h3>
        <p className="text-base font-bold capitalize">
          sorry invalid path name try again
        </p>
      </div>
    </div>
  );
};

export default Error;
