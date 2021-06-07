import React from "react";

const Weather = (props) => {
  console.log(props.getDatos);
  return (
    <div className="container mt-2 d-flex justify-content-center">
      <div className="card" style={{width: "18rem"}}>
        <div className="card-body m-3 col-10">
          <form className="form-group" onSubmit={props.getDatos}>
            <div className="col-4">
              <h4 className="card-title" style={{width: "13rem"}}>Weather location</h4>
              <input
                type="text"
                name="text"
                className="form-control mt-2"
                style={{width: "13rem"}}
                placeholder="Ingrese su clima"
              />
            </div>
            <div className="col-4">
              <input
                type="text"
                name="text2"
                className="form-control mt-2"
                style={{width: "13rem"}}
                placeholder="Ingrese su pais (opcional)"
              />
            </div>
            <div>
              <input
                type="submit"
                name="click"
                className="btn btn-primary mt-2"
                value="buscar clima"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Weather;
