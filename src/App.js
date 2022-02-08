import moutains from './img/mountains (1).png';
import './App.css';
import { useEffect, useState } from 'react';

const Clock = ({daysTimer, hoursTimer, minutesTimer, secondesTimer}) => {
  return (
    <>
      <p className="display-1 lead waterfall">New Year</p>
      <h1 className="display-5 text-center lead mb-5 text-white montserrat">COMING SOON</h1>
      <div className="d-flex text-white text-center">
          <div className="d-flex flex-column">
              <h1 className="display-1 aton">{daysTimer}</h1>
              <span className="lead text-white-50 fs-6 montserrat">DAYS</span>
          </div>
          <div className="d-flex flex-column ms-2 ms-sm-5">
              <h1 className="display-1 aton">{hoursTimer}</h1>
              <span className="lead text-white-50 fs-6 montserrat">HOURS</span>
          </div>
          <div className="d-flex flex-column ms-2 ms-sm-5">
              <h1 className="display-1 aton">{minutesTimer}</h1>
              <span className="lead text-white-50 fs-6 montserrat">MINUTES</span>
          </div>
          <div className="d-flex flex-column ms-2 ms-sm-5">
              <h1 className="display-1 aton">{secondesTimer}</h1>
              <span className="lead text-white-50 fs-6 montserrat">SECONDS</span>
          </div>
      </div>
    </>
  )
}


function App() {

  const [daysTimer, setDaysTimer] = useState("00")
  const [hoursTimer, setHoursTimer] = useState("00")
  const [minutesTimer, setMinutesTimer] = useState("00")
  const [secondesTimer, setSecondesTimer] = useState("00")


  let interval;

  const startTime = () => {
    const dateDay = new Date("Feb 15,2022").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const between = dateDay - now;

      const days = Math.floor(between / (24 * 60 * 60 * 1000));

      const hours = Math.floor((between % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));

      const minutes = Math.floor((between % (60 * 60 * 1000)) / (60 * 1000));

      const secondes = Math.floor((between % (60 * 1000)) / 1000);

      if (between < 0) {
        clearInterval(interval.current)
      }else{
        setDaysTimer(days);
        setHoursTimer(hours);
        setMinutesTimer(minutes);
        setSecondesTimer(secondes);
      }
    })
  }
  useEffect(() => {
    startTime();
  })


  return (
    <>
      <div className="navbar position-absolute w-100 navbar-dark fixed-bottom index-3">
          <div className="container-fluid d-flex justify-content-between">
            <a href='/' className="navbar-brand">
                <img src={moutains} alt="New Year" className="img-fluid img-size mb-3" />
                <span className="navbar-text">Mulima</span>
            </a>
          </div>
      </div>
      <div className="position-absolute w-100 h-100 d-flex flex-column justify-content-center align-items-center text-white index-2">
          <Clock daysTimer={daysTimer} hoursTimer={hoursTimer} minutesTimer={minutesTimer} secondesTimer={secondesTimer} />
      </div>
      <div className="banner-img d-flex align-items-center index-1">
      </div>
    </>
  );
}

export default App;
