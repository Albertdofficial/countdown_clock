import "./App.css";
import { useState } from "react";
// import Background from '../images/background_image.jpg';

function App() {
  let [days, setDays] = useState(0);
  let [hours, setHours] = useState(0);
  let [minutes, setMinutes] = useState(0);
  let [seconds, setSeconds] = useState(0);

  setInterval(function () {
    const yearNow = new Date().getFullYear();
    const futureDate = new Date(yearNow, 5, 3); //months starts counting from zero
    const dateNow = new Date();

    console.log(futureDate);

    console.log(futureDate);

    seconds = Math.floor((futureDate - dateNow) / 1000);
    minutes = Math.floor(seconds / 60);
    hours = Math.floor(minutes / 60);
    days = Math.floor(hours / 24);
    hours = hours - days * 24; // hours remained
    minutes = minutes - days * 24 * 60 - hours * 60;
    seconds = seconds - days * 24 * 3600 - hours * 3600 - minutes * 60;

    setDays(days);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
  }, 1000);

  return (
    <div className="App">
      <header>
        <h1>
          {days} days : {hours} hours : {minutes} minutes : {seconds} seconds
          <p>Before Final Exams, Spring Semester 2022</p>
        </h1>
      </header>

      <footer>
        <p className="developer">Developed by Albert David Bangura</p>
      </footer>
    </div>
  );
}

export default App;
