// import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-responsive-carousel";
import { BiSearchAlt } from "react-icons/bi";
import GoogleMapReact from "google-map-react";
import logo from "./full.jpg";
import logo1 from "./full2.jpg";

export default function Test() {
  const AnyReactComponent = () => <div>hu there</div>;

  let { loc } = useParams();

  const [view, setview] = useState(0);
  const [time, settime] = useState(0);
  const [wind, setwind] = useState(0);
  const [sys, setsys] = useState(0);

  const [location, setlocation] = useState();
  const [weather, setweather] = useState();
  const [main, setmain] = useState();
  const [cloud, setcloud] = useState();
  const [url, seturl] = useState();

  useEffect(() => {
    console.log(loc);
    const api_url = "https://api.openweathermap.org/data/2.5/weather?q=";
    seturl(
      "https://open.mapquestapi.com/staticmap/v4/getplacemap?key=0RExWJUmRFx8cymgyb6iy5te2X313bdn&location=" +
        loc +
        "&size=600,400&zoom=9&showicon=red_1-1"
    );
    console.log(url);
    axios
      .get(`${api_url}${loc}&appid=e91b8ac715075164447b2e2118ef0464`)
      .then((response) => {
        const data = response.data;
        setview(data);
        setlocation(data.coord);
        setweather(data.weather);
        setmain(data.main);
        setwind(data.wind);
        setsys(data.sys);
        setcloud(data.clouds);
        settime(new Date((data.sys.sunrise + data.timezone) * 1000).toString());

        console.log(data);
        console.log(sys);
        // console.log(sunrise);
      })
      .catch((error) => {
        console.error(error);
        alert("please check the spelling of your location");
      });
  }, [loc]);

  //   const call = () => {};

  return (
    <div className='roundit'>
      <div className='container-fluid px-1 px-sm-3 py-5 mx-auto roundit'>
        <div className='row d-flex justify-content-center rounded-lg roundit'>
          <div className='row card0 roundit'>
            <div className='card1 col-lg-8 col-md-7'>
              {" "}
              <strong>WEATHER FORECAST</strong>
              <div className='text-center'>
                {" "}
                <Carousel className='coro'>
                  <div>
                    <img src={url} />
                  </div>
                  <div>
                    <img src={logo} />
                  </div>
                  <div>
                    <img src={logo1} />
                  </div>
                </Carousel>{" "}
              </div>
              <div className='row px-3 mt-3 mb-3'>
                <div className='d-flex flex-row mr-3'>
                  <h1 className='large-font mr-3'>
                    {main !== undefined &&
                      Math.round(main.temp * 10 - 273.15 * 10) / 10}
                    &#176;
                  </h1>
                  <img
                    src={
                      weather !== undefined &&
                      "http://openweathermap.org/img/w/" +
                        weather[0].icon +
                        ".png"
                    }
                    width='100'
                    alt={weather !== undefined && weather[0].main}
                  />
                </div>
                <div className='d-flex flex-column mr-3'>
                  <h2 className='mt-3 mb-0'>{view.name}</h2>{" "}
                  <small>{time !== undefined && time.toString()}</small>
                </div>
                <div className='d-flex flex-column text-center'>
                  <h3 className='fa fa-sun-o mt-4'></h3>{" "}
                  <strong>
                    {weather !== undefined && weather[0].description}
                  </strong>
                </div>
              </div>
            </div>
            <div className='card2 col-lg-4 col-md-5'>
              <div className='row px-3'>
                {" "}
                <input
                  type='text'
                  name='location'
                  placeholder={view.name}
                  className='mb-4'
                  readOnly
                />
                {/* <div className='fa fa-search mb-3 mr-0 text-center'>hey</div> */}
              </div>
              <div className='mr-5'>
                <p className=''>
                  Longitude : &nbsp;&nbsp;&nbsp;
                  {location !== undefined && location.lon}
                </p>
                <p className=''>
                  Latitude &nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;
                  {location !== undefined && location.lat}
                </p>
                <p className=''>
                  Wind
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;
                  {wind !== undefined && wind.speed}
                  m/s&nbsp;&nbsp;
                  {wind !== undefined && wind.deg}
                  &#176;
                </p>
                <p className=''>
                  Sunrise &nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;
                  {new Date(sys !== undefined && sys.sunrise * 1000)
                    .toString()
                    .slice(0, -21)}
                </p>
                <p className=''>
                  Sunset &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;
                  {new Date(sys !== undefined && sys.sunset * 1000)
                    .toString()
                    .slice(0, -21)}
                </p>
                <div className='line my-4'></div>
                <p>Weather Details</p>
                <div className='row px-3'>
                  <p className='light-text'>Cloudy</p>
                  <p className='ml-auto'>{cloud !== undefined && cloud.all}%</p>
                </div>
                <div className='row px-3'>
                  <p className='light-text'>Pressure</p>
                  <p className='ml-auto'>
                    {main !== undefined && main.pressure}hPa
                  </p>
                </div>
                <div className='row px-3'>
                  <p className='light-text'>Humidity</p>
                  <p className='ml-auto'>
                    {main !== undefined && main.humidity}%
                  </p>
                </div>
                <div className='row px-3'>
                  <p className='light-text'>Rain</p>
                  <p className='ml-auto'>0mm</p>
                </div>
                <div className='line mt-3'></div>
              </div>
            </div>
          </div>
        </div>
        <iframe
          className='ifra'
          src='https://embed.windy.com/embed2.html?lat=16.691&lon=77.934&detailLat=17.360&detailLon=78.470&width=650&height=450&zoom=7&level=surface&overlay=wind&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1'
          frameborder='0'
        ></iframe>
      </div>
      {/* <div style={{ height: "100vh", width: "100%" }}> */}
      {/* <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCnRYgMbyFzbzV0KuoUN1iWBSZx8zWil54" }}
          defaultCenter={59.95}
          defaultZoom={10}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text='My Marker' />
        </GoogleMapReact> */}
      {/* </div> */}
    </div>
  );
}

// {
//   "coord": {
//       "lon": 78.4744,
//       "lat": 17.3753
//   },
//   "weather": [
//       {
//           "id": 721,
//           "main": "Haze",
//           "description": "haze",
//           "icon": "50d"
//       }
//   ],
//   "base": "stations",
//   "main": {
//       "temp": 298.88,
//       "feels_like": 299.21,
//       "temp_min": 298.88,
//       "temp_max": 298.88,
//       "pressure": 1019,
//       "humidity": 65
//   },
//   "visibility": 3500,
//   "wind": {
//       "speed": 3.09,
//       "deg": 50
//   },
//   "clouds": {
//       "all": 20
//   },
//   "dt": 1635564525,
//   "sys": {
//       "type": 1,
//       "id": 9213,
//       "country": "IN",
//       "sunrise": 1635554621,
//       "sunset": 1635596140
//   },
//   "timezone": 19800,
//   "id": 1269843,
//   "name": "Hyderabad",
//   "cod": 200
// }
