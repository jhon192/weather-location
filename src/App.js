import React, { Fragment, useState } from "react";
import Weather from "./components/Weather";
import Weath from "./components/Weath";
import { v4 as uuid } from "uuid";
const axios = require("axios").default;

const App = () => {
  const [Datos, setDatos] = useState(
    {
      id: '',
      country: '',
      name: '',
      windSpeed: '',
      tempMax: '',
      tempMin: ''
    }
  );

  // let Datos = {
  //     id: '',
  //     country: '',
  //     name: '',
  //     windSpeed: '',
  //     tempMax: 0,
  //     tempMin: 0
  // }

  const getDatos = async e => {
    e.preventDefault()
    const nameplace = e.target[0].value;
    const countryplace = e.target[1].value;

    await axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${nameplace},${countryplace}&APPID=8ea87ec48e09f6c2f79ae041fc774f3b&units=metric`
      )
      .then((e) => {
        // console.clear()
        // console.log(e.data.sys.country);
        // console.log(e.data.name);
        // console.log(e.data.wind.speed);
        // console.log(e.data.main.temp_min);
        // console.log(e.data.main.temp_max);

        // Datos = {
        //   id: uuid(),
        //   country: e.data.sys.country,
        //   name: e.data.name,
        //   windSpeed: e.data.wind.speed,
        //   tempMax: e.data.main.temp_max,
        //   tempMin: e.data.main.temp_min
        // }

        // console.log(Datos)
        setDatos(
          {
            id: uuid(),
            country: e.data.sys.country,
            name: e.data.name,
            windSpeed: e.data.wind.speed,
            tempMax: e.data.main.temp_max,
            tempMin: e.data.main.temp_min
          }
        )

      })
      .catch((err) => {
        console.log(err);
      });
  }

  // const datosRun = () => (
  //   Datos.map(x => (
  //     <Weath x={x} key={x.id}/>
  //   ))
  // );

  return (
    <Fragment>
      <Weather getDatos={getDatos}/>
      <Weath {...Datos}/>
      {/* {datosRun()} */}
    </Fragment>
  );
};

export default App;
