<script>
  import "../../app.css";
  import { onMount } from "svelte";
  import * as d3 from "d3";

  //Image Imports
  import img_sun from "$lib/Planets/sun.png";
  import img_earth from "$lib/Planets/earth.png";
  import img_jupiter from "$lib/Planets/jupiter.png";
  import img_mars from "$lib/Planets/mars.png";
  import img_saturn from "$lib/Planets/saturn.png";
  import img_uranus from "$lib/Planets/uranus.png";
  import img_neptune from "$lib/Planets/neptune.png";
  import img_mercury from "$lib/Planets/mercury.png";
  import img_venus from "$lib/Planets/venus.png";
  import img_spuk from "$lib/Planets/spuk.png";

  // Constants
  const GravConstant = 6.67 * 10 ** -11; // Big G
  const sun_mass = 2 * 10 ** 30; //Mass of sun

  // Define a Custom Planet
  let custom_mass = 100;
  let custom_radius = 100; //limit 10-100
  let custom_orbit = 500;
  let custom_period = 100;
  let planet_name = "Custom Planet";

  console.log(custom_period);
  let customPlanet = {
    name: "Custom Planet",
    radius: custom_radius,
    orbit: custom_orbit / 3,
    orbit_raw: custom_orbit,
    color: "white",
    period: custom_orbit,
    mass: custom_mass,
    img: img_spuk,
  };

  let allPlanets = [
    {
      name: "Mercury",
      radius: 4.879,
      orbit: 57.9 * 1.6,
      orbit_raw: 57.9 * 1.6,
      color: "gray",
      period: 88,
      mass: 0.33,
      img: img_mercury,
    },
    {
      name: "Venus",
      radius: 12.104,
      orbit: 108.2,
      orbit_raw: 108.2,
      color: "yellow",
      period: 225,
      mass: 4.87,
      img: img_venus,
    },
    {
      name: "Earth",
      radius: 12.742,
      orbit: 149.6,
      orbit_raw: 149.6,
      color: "blue",
      period: 365,
      mass: 5.97,
      img: img_earth,
    },
    {
      name: "Mars",
      radius: 6.779,
      orbit: 227.9,
      orbit_raw: 227.9,
      color: "red",
      period: 687,
      mass: 0.642,
      img: img_mars,
    },
    {
      name: "Jupiter",
      radius: 139.2,
      orbit: 778.5 / 3,
      orbit_raw: 778.5,
      color: "orange",
      period: 4307,
      mass: 1898,
      img: img_jupiter,
    },
    {
      name: "Saturn",
      radius: 116.5,
      orbit: 1433.5 / 3.5,
      orbit_raw: 1433.5,
      color: "brown",
      period: 10754,
      mass: 568,
      img: img_saturn,
    },
    {
      name: "Uranus",
      radius: 50.724,
      orbit: 2872.5 / 6,
      orbit_raw: 2872.5,
      color: "lightblue",
      period: 30660,
      mass: 86.8,
      img: img_uranus,
    },
    {
      name: "Neptune",
      radius: 49.244,
      orbit: 4495.1 / 9,
      orbit_raw: 4496,
      color: "darkblue",
      period: 60225,
      mass: 102,
      img: img_neptune,
    },
    customPlanet,
  ];
  // Makes Custom Planet Reactive to user input
  function calculatePeriod(orbit, mass) {
    console.log("I HAVE BEEN CALLED WERE CALCLING PERIOD");
    console.log(
      2 *
        Math.PI *
        Math.sqrt(orbit ** 3 / (GravConstant * (mass * 10 ** 24))) *
        24 *
        60 *
        60
    );
    return (
      2 *
      Math.PI *
      Math.sqrt(orbit ** 3 / (GravConstant * (mass * 10 ** 24))) *
      24 *
      60 *
      60 *
      60
    );
  }

  // Reactive statements for custom planet's properties
  $: {
    customPlanet = {
      name: "Custom Planet",
      radius: custom_radius,
      orbit: custom_orbit / 3,
      orbit_raw: custom_orbit,
      color: "white",
      period: calculatePeriod(custom_orbit * 10 ** 9, sun_mass), // Use the function to calculate period
      mass: custom_mass,
      img: img_spuk,
    };
  }
  // Adds the custom planet to the array of all planets
  allPlanets[allPlanets.length - 1] = customPlanet;

  let selectedPlanet = "Earth"; // Default selected planet

  // Search for Planets
  let planets = allPlanets.filter((planet) => planet.name === selectedPlanet);
  // Reactive statement returns an array containing only the selected planet
  $: planets = allPlanets.filter((planet) => planet.name === selectedPlanet);

  // D3 init vars
  let svgContainer;
  let width, height, orbit;

  // Function for creating animation
  function createVisualization() {
    // Svg init
    const svg = d3
      .select(svgContainer)
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    orbit = svg
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    // Add sun at the center
    orbit
      .append("image")
      .attr("xlink:href", img_sun)
      .attr("x", -100) // Adjust size as needed
      .attr("y", -100) // Adjust size as needed
      .attr("width", 200) // Adjust size as needed
      .attr("height", 200); // Adjust size as needed

    // Add Planet for each in array (Will be none as planets are filtered for only the selected ones)
    planets.forEach((planet) => {
      // Orbital Circle
      orbit
        .append("circle")
        .attr("r", planet.orbit)
        .style("fill", "none")
        .style("stroke", "lightgray");

      // Define Appearance and init position of planet
      const planetCircle = orbit
        .append("image")
        .attr("xlink:href", planet.img)
        .attr("x", -planet.radius)
        .attr("y", -planet.radius)
        .attr("height", planet.radius * 2)
        .attr("width", planet.radius * 2)
        .attr("transform", `translate(${planet.orbit}, 0)`);

      function animatePlanet() {
        planetCircle
          .transition()
          .duration(planet.period)
          .ease(d3.easeLinear) // Defines traj of motion
          .attrTween("transform", function () {
            return function (t) {
              //Moves the planet
              const rotate = `rotate(${t * 360})`;
              const translate = `translate(${planet.orbit}, 0)`;
              return rotate + " " + translate;
            };
          })
          .on("end", animatePlanet); // restart the animation when it ends
      }

      animatePlanet();
    });
  }

  onMount(() => {
    width = window.outerWidth;
    height = window.outerHeight;
    console.log(custom_period);
    createVisualization();
  });

  // Clear the SVG and create a new visualization whenever selectedPlanet changes
  $: {
    width = window.outerWidth;
    height = window.outerHeight;
    d3.select("svg").remove();
    planet_name = planets[0].name;

    // Only reset the custom values if the selected planet is not the custom planet
    if (selectedPlanet !== "Custom Planet") {
      custom_mass = planets[0].mass;
      custom_orbit = planets[0].orbit_raw;
      custom_period = planets[0].period;
      custom_radius = planets[0].radius;
    } else {
    }
    console.log(planets[0]);
    createVisualization();
  }
</script>

<!-- This Section is the text box and all the logic within it  -->
<div class="data">
  <h1><u>{planet_name}</u></h1>

  <label>
    <b
      >Planet Mass (m):
    </b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    {planets[0].mass.toFixed(1)} x 10<sup>24</sup> kg
    <input
      type="range"
      min= 1
      max="2000"
      step="1"
      bind:value={planets[0].mass}
      on:input={() => (selectedPlanet = "Custom Planet")}
      on:change={() =>
        (planets[0].period = calculatePeriod(
          planets[0].orbit,
          planets[0].mass
        ))}
    />
  </label>
  <label>
    <b>Planet Orbital Radius (r): </b>{planets[0].orbit.toFixed(2)} x 10<sup>9</sup>
    m
    <input
      type="range"
      min="100"
      max="690"
      step="1"
      bind:value={planets[0].orbit}
      on:input={() => (selectedPlanet = "Custom Planet")}
      on:change={() =>
        (planets[0].period = calculatePeriod(
          planets[0].orbit,
          planets[0].mass
        ))}
    />
  </label>
  <label>
    <b>Radius of Planet (r<sub>p</sub>):</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    {(planets[0].radius * 5).toFixed(
      1
    )} x 10<sup>5</sup>
    m
    <input
      type="range"
      min=10
      max="300"
      step="1"
      bind:value={planets[0].radius}
      on:input={() => (selectedPlanet = "Custom Planet")}
      on:change={() =>
        (planets[0].period = calculatePeriod(
          planets[0].orbit,
          planets[0].mass
        ))}
    />
  </label>

  <!-- <label>
    <input
      type="range"
      min="0"
      max="61000"
      step="1"
      bind:value={planets[0].period}
      on:input={() => (selectedPlanet = "Custom Planet")}
    />
  </label> -->

  <!-- This section shows the calculations for orbital energy  -->
  <div class="values">
    <p>
      <b>Period (T): </b>{planets[0].period.toFixed(0)} days
    </p>
    <p>
      <b>Total Energy </b>= {(
        (GravConstant * ((planets[0].mass * 10) ^ 24) * sun_mass) /
        ((2 * planets[0].orbit * 10) ^ 9) /
        Math.pow(10, 18)
      ).toFixed(2)} <b>(KE)</b> + {(
        -(
          (GravConstant * ((planets[0].mass * 10) ^ 24) * sun_mass) /
          ((planets[0].orbit * 10) ^ 9)
        ) / Math.pow(10, 18)
      ).toFixed(2)} <b>(PE) </b> = {(
        (GravConstant * ((planets[0].mass * 10) ^ 24) * sun_mass) /
          ((2 * planets[0].orbit * 10) ^ 9) /
          Math.pow(10, 18) +
        -(
          (GravConstant * ((planets[0].mass * 10) ^ 24) * sun_mass) /
          ((planets[0].orbit * 10) ^ 9)
        ) /
          Math.pow(10, 18)
      ).toFixed(2)} x 10<sup>12</sup> MJ
    </p>
  </div>
</div>

<!-- Select Values  -->
<div class="select">
  <select bind:value={selectedPlanet}>
    <option value="Mercury">&gt; Mercury</option>
    <option value="Venus">&gt; Venus</option>
    <option value="Earth">&gt; Earth</option>
    <option value="Mars">&gt; Mars</option>
    <option value="Jupiter">&gt; Jupiter</option>
    <option value="Saturn">&gt; Saturn </option>
    <option value="Uranus">&gt; Uranus </option>
    <option value="Neptune">&gt; Neptune</option>
    <option value="Custom Planet">&gt; Custom </option>
  </select>
</div>

<!-- Div is the target to inject the SVG -->
<div class="simulation">
  <div id="orbit" bind:this={svgContainer} />
</div>

<style>
  div {
    color: white;
  }
  .simulation {
    margin: auto;
  }
  .data {
    text-align: center;
    position: absolute;
    margin-top: 2%;
    width: 60%;
    right: 17.5%;
    display: flex;
    flex-direction: column;
    border: white 2px solid;
    border-radius: 0.1rem;
    padding: 1rem;
  }
  .data h1 {
    text-align: center;
  }

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
    outline: 0;
    box-shadow: none;
    border: 0 !important;
    background: var(--blue);
    flex: 1;
    padding: 0 0.5em;
    color: #fff;
    cursor: pointer;
    font-size: 1em;
  }
  select::-ms-expand {
    display: none;
  }
  .select {
    position: absolute;
    bottom: 20%;
    width: 100%;
    text-align: center;
    font-size: xx-large;
  }
  input[type="range"] {
    background: var(--blue);
    cursor: pointer;
  }
</style>
