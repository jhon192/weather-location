import React from "react";

const Weather = (props) => {
  return (
    <div className="container mt-2 d-flex justify-content-center">
      <div className="card mt-3" style={{width: "25rem"}}>
        <div className="card-body m-3 col-10">
          <form className="form-group" onSubmit={props.getDatos}>
            <div className="w-100 text-center">
              <h4 className="card-title" style={{width: "13rem"}}>Weather location</h4>
              <input
                type="text"
                name="text"
                className="form-control mt-2"
                placeholder="Enter your region / province / city"
              />
            </div>
            <div className="w-100 text-center">
              <input
                type="text"
                name="text2"
                className="form-control mt-2"
                placeholder="Enter your country (optional)"
              />
            </div>
            <div className="text-center">
              <input
                type="submit"
                name="click"
                className="btn btn-success mt-2"
                value="search weather"
              />
            </div>
          </form>
          <small style={{color: "green", fontSize: "12px"}}>Reminder: only receive countries in English</small>
        </div>
      </div>
    </div>
  );
};

export default Weather;
