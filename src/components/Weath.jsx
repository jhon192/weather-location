import React from "react";

const Weath = (props) => {
  const { name, country, windSpeed, tempMin, tempMax, error } = props;

  console.log(props);
  return (
    <div
      className="container mt-4 d-flex justify-content-center"
      style={{ width: "25rem" }}
    >
      { name? (
        <div className="card card-body w-75">
          <h5 className="card-text">
            name: <b>{name}</b>
          </h5>
          <h5 className="card-text">
            country: <b>{country}</b>
          </h5>
          <h5 className="card-text">
            wind speed: <b>{windSpeed}</b>
          </h5>
          <h5 className="card-text">
            temp min: <b>{tempMin}</b>
          </h5>
          <h5 className="card-text">
            temp max: <b>{tempMax}</b>
          </h5>
        </div>
      ) : (
        '',
        error?
        <div className="card card-body w-75">
          <h5>error: {error}</h5>
        </div>
        :
        ''
      )}
    </div>
  );
};

export default Weath;
