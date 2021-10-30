import "./App.css";
import { BrowserRouter, Link, Route, Switch, Redirect } from "react-router-dom";
import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Test from "./test";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import

function App() {
  const [count, setCount] = useState(0);

  function handleChange(event) {
    setCount(event.target.value);
    // console.log(count);
    // console.log(location);
    //   weather.find(
    //     { search: "San Francisco, CA", degreeType: "F" },
    //     function (err, result) {
    //       if (err) console.log(err);

    //       console.log(JSON.stringify(result, null, 2));
    //     }
    //   );
  }

  const style = {
    width: "70%",
    height: "30vh",
  };

  return (
    <div>
      <BrowserRouter>
        <header className='row'>
          <div className='col offset-md-2'>
            <input
              type='text'
              className='form-control inputcol'
              placeholder='City'
              name='city'
              autoComplete='off'
              placeholder='Search here'
              onChange={handleChange}
            />
          </div>
          <Link className='col' to={`/${count}`}>
            <div className='col-md-3 mt-md-0 mt-2 text-md-left '>
              <button className='btn btn-warning'>Get Weather</button>
            </div>
          </Link>
        </header>

        <Switch>
          <Route path='/:loc'>
            {/* <h1>new stuff</h1> */}
            {/* <Child /> */}
            <Test />
          </Route>
          <Route>
            <Redirect to='/uppal' />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
// function Child() {

//   return (
//     <div>

//     </div>
//   );d
// }

export default App;
