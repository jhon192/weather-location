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
      tempMin: '',
      error: ''
    }
  );

  const getDatos = async e => {
    e.preventDefault()
    const nameplace = e.target[0].value;
    const countryplace = e.target[1].value;

    await axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${nameplace},${countryplace}&APPID=8ea87ec48e09f6c2f79ae041fc774f3b&units=metric`
      )
      .then((e) => {
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
        setDatos({error: `${err}`})
      });
  }

  return (
    <Fragment>
      <Weather getDatos={getDatos}/>
      <Weath {...Datos}/>
    </Fragment>
  );
};

export default App;
