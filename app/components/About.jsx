var React = require('react');

var About = () => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This is a weather application built using the REACT framework. I built this for The Complete React Web App Developer Course.</p>
      <p>Here are the tools I used:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a>
          - This is the JavaScript framework used.
        </li>
        <li>
          <a href="http:/openweathermap.org">
            Open Weather Map
          </a>
          - This is the API used to fetch the weather data I used.
        </li>
      </ul>
    </div>
  );
};

module.exports = About;
