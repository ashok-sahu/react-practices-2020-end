import React, { useState } from "react";

const ButtonLoadingSpinner = () => {
  const [isLoading, setIsLoading] = useState(false);
  const subscribe = () => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        console.log(res.json());
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <div className="ml-5 mt-5">
      {!isLoading && (
        <button className="btn btn-primary mr-2" onClick={subscribe}>
          subscribe
        </button>
      )}
      {
          isLoading && <button className='btn btn-danger mr-2' disabled>
              <i className="fa fa-spinner fa-spin "></i> subscribing...
          </button>
      }
    </div>
  );
};

export default ButtonLoadingSpinner;
