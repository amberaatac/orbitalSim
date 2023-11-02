import { c as create_ssr_component, e as escape, b as add_attribute } from "../../../chunks/ssr.js";
/* empty css                   */import * as d3 from "d3";
const img_sun = "/_app/immutable/assets/sun.34c7d0d6.png";
const img_earth = "/_app/immutable/assets/earth.2c097b66.png";
const img_jupiter = "/_app/immutable/assets/jupiter.feb46e67.png";
const img_mars = "/_app/immutable/assets/mars.37e3c3fd.png";
const img_saturn = "/_app/immutable/assets/saturn.f98b32be.png";
const img_uranus = "/_app/immutable/assets/uranus.38931a0c.png";
const img_neptune = "/_app/immutable/assets/neptune.ccb709ee.png";
const img_mercury = "/_app/immutable/assets/mercury.786380e5.png";
const img_venus = "/_app/immutable/assets/venus.0550e08a.png";
const img_spuk = "/_app/immutable/assets/spuk.1048e9f3.png";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: 'div.svelte-tn9zuh.svelte-tn9zuh{color:white}.simulation.svelte-tn9zuh.svelte-tn9zuh{margin:auto}.data.svelte-tn9zuh.svelte-tn9zuh{text-align:center;position:absolute;margin-top:2%;width:60%;right:17.5%;display:flex;flex-direction:column;border:white 2px solid;border-radius:0.1rem;padding:1rem}.data.svelte-tn9zuh h1.svelte-tn9zuh{text-align:center}select.svelte-tn9zuh.svelte-tn9zuh{-webkit-appearance:none;-moz-appearance:none;-ms-appearance:none;appearance:none;outline:0;box-shadow:none;border:0 !important;background:var(--blue);flex:1;padding:0 0.5em;color:#fff;cursor:pointer;font-size:1em}select.svelte-tn9zuh.svelte-tn9zuh::-ms-expand{display:none}.select.svelte-tn9zuh.svelte-tn9zuh{position:absolute;bottom:20%;width:100%;text-align:center;font-size:xx-large}input[type="range"].svelte-tn9zuh.svelte-tn9zuh{background:var(--blue);cursor:pointer}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const GravConstant = 6.67 * 10 ** -11;
  const sun_mass = 2 * 10 ** 30;
  let custom_mass = 100;
  let custom_radius = 100;
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
    img: img_spuk
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
      img: img_mercury
    },
    {
      name: "Venus",
      radius: 12.104,
      orbit: 108.2,
      orbit_raw: 108.2,
      color: "yellow",
      period: 225,
      mass: 4.87,
      img: img_venus
    },
    {
      name: "Earth",
      radius: 12.742,
      orbit: 149.6,
      orbit_raw: 149.6,
      color: "blue",
      period: 365,
      mass: 5.97,
      img: img_earth
    },
    {
      name: "Mars",
      radius: 6.779,
      orbit: 227.9,
      orbit_raw: 227.9,
      color: "red",
      period: 687,
      mass: 0.642,
      img: img_mars
    },
    {
      name: "Jupiter",
      radius: 139.2,
      orbit: 778.5 / 3,
      orbit_raw: 778.5,
      color: "orange",
      period: 4307,
      mass: 1898,
      img: img_jupiter
    },
    {
      name: "Saturn",
      radius: 116.5,
      orbit: 1433.5 / 3.5,
      orbit_raw: 1433.5,
      color: "brown",
      period: 10754,
      mass: 568,
      img: img_saturn
    },
    {
      name: "Uranus",
      radius: 50.724,
      orbit: 2872.5 / 6,
      orbit_raw: 2872.5,
      color: "lightblue",
      period: 30660,
      mass: 86.8,
      img: img_uranus
    },
    {
      name: "Neptune",
      radius: 49.244,
      orbit: 4495.1 / 9,
      orbit_raw: 4496,
      color: "darkblue",
      period: 60225,
      mass: 102,
      img: img_neptune
    },
    customPlanet
  ];
  function calculatePeriod(orbit2, mass) {
    console.log("I HAVE BEEN CALLED WERE CALCLING PERIOD");
    console.log(2 * Math.PI * Math.sqrt(orbit2 ** 3 / (GravConstant * (mass * 10 ** 24))) * 24 * 60 * 60);
    return 2 * Math.PI * Math.sqrt(orbit2 ** 3 / (GravConstant * (mass * 10 ** 24))) * 24 * 60 * 60 * 60;
  }
  allPlanets[allPlanets.length - 1] = customPlanet;
  let selectedPlanet = "Earth";
  let planets = allPlanets.filter((planet) => planet.name === selectedPlanet);
  let svgContainer;
  let width, height, orbit;
  function createVisualization() {
    const svg = d3.select(svgContainer).append("svg").attr("width", width).attr("height", height);
    orbit = svg.append("g").attr("transform", `translate(${width / 2}, ${height / 2})`);
    orbit.append("image").attr("xlink:href", img_sun).attr("x", -100).attr(
      "y",
      -100
      // Adjust size as needed
    ).attr("width", 200).attr(
      "height",
      200
    );
    planets.forEach((planet) => {
      orbit.append("circle").attr("r", planet.orbit).style("fill", "none").style("stroke", "lightgray");
      const planetCircle = orbit.append("image").attr("xlink:href", planet.img).attr("x", -planet.radius).attr("y", -planet.radius).attr("height", planet.radius * 2).attr("width", planet.radius * 2).attr("transform", `translate(${planet.orbit}, 0)`);
      function animatePlanet() {
        planetCircle.transition().duration(planet.period).ease(d3.easeLinear).attrTween(
          "transform",
          function() {
            return function(t) {
              const rotate = `rotate(${t * 360})`;
              const translate = `translate(${planet.orbit}, 0)`;
              return rotate + " " + translate;
            };
          }
        ).on("end", animatePlanet);
      }
      animatePlanet();
    });
  }
  $$result.css.add(css);
  planets = allPlanets.filter((planet) => planet.name === selectedPlanet);
  {
    {
      width = window.outerWidth;
      height = window.outerHeight;
      d3.select("svg").remove();
      planet_name = planets[0].name;
      {
        custom_mass = planets[0].mass;
        custom_orbit = planets[0].orbit_raw;
        custom_period = planets[0].period;
        custom_radius = planets[0].radius;
      }
      console.log(planets[0]);
      createVisualization();
    }
  }
  {
    {
      customPlanet = {
        name: "Custom Planet",
        radius: custom_radius,
        orbit: custom_orbit / 3,
        orbit_raw: custom_orbit,
        color: "white",
        period: calculatePeriod(custom_orbit * 10 ** 9, sun_mass),
        // Use the function to calculate period
        mass: custom_mass,
        img: img_spuk
      };
    }
  }
  return ` <div class="data svelte-tn9zuh"><h1 class="svelte-tn9zuh"><u>${escape(planet_name)}</u></h1> <label><b data-svelte-h="svelte-3fum2m">Planet Mass (m):</b>          
    ${escape(planets[0].mass.toFixed(1))} x 10<sup data-svelte-h="svelte-17ldsqy">24</sup> kg
    <input type="range" min="1" max="2000" step="1" class="svelte-tn9zuh"${add_attribute("value", planets[0].mass, 0)}></label> <label><b data-svelte-h="svelte-558e8o">Planet Orbital Radius (r): </b>${escape(planets[0].orbit.toFixed(2))} x 10<sup data-svelte-h="svelte-1kbrcj3">9</sup>
    m
    <input type="range" min="100" max="690" step="1" class="svelte-tn9zuh"${add_attribute("value", planets[0].orbit, 0)}></label> <label><b data-svelte-h="svelte-9pgyyl">Radius of Planet (r<sub>p</sub>):</b>     
    ${escape((planets[0].radius * 5).toFixed(1))} x 10<sup data-svelte-h="svelte-1mcccrn">5</sup>
    m
    <input type="range" min="10" max="300" step="1" class="svelte-tn9zuh"${add_attribute("value", planets[0].radius, 0)}></label>   <div class="values svelte-tn9zuh"><p><b data-svelte-h="svelte-sojs30">Period (T): </b>${escape(planets[0].period.toFixed(0))} days</p> <p><b data-svelte-h="svelte-fir1wi">Total Energy </b>= ${escape((GravConstant * (planets[0].mass * 10 ^ 24) * sun_mass / (2 * planets[0].orbit * 10 ^ 9) / Math.pow(10, 18)).toFixed(2))} <b data-svelte-h="svelte-1jdquz5">(KE)</b> + ${escape((-(GravConstant * (planets[0].mass * 10 ^ 24) * sun_mass / (planets[0].orbit * 10 ^ 9)) / Math.pow(10, 18)).toFixed(2))} <b data-svelte-h="svelte-303h92">(PE)</b> = ${escape((GravConstant * (planets[0].mass * 10 ^ 24) * sun_mass / (2 * planets[0].orbit * 10 ^ 9) / Math.pow(10, 18) + -(GravConstant * (planets[0].mass * 10 ^ 24) * sun_mass / (planets[0].orbit * 10 ^ 9)) / Math.pow(10, 18)).toFixed(2))} x 10<sup data-svelte-h="svelte-2cyvtd">12</sup> MJ</p></div></div>  <div class="select svelte-tn9zuh"><select class="svelte-tn9zuh"><option value="Mercury" data-svelte-h="svelte-1gjphtq">&gt; Mercury</option><option value="Venus" data-svelte-h="svelte-5rxvi">&gt; Venus</option><option value="Earth" data-svelte-h="svelte-1qds0e2">&gt; Earth</option><option value="Mars" data-svelte-h="svelte-1tjdoo4">&gt; Mars</option><option value="Jupiter" data-svelte-h="svelte-ade51u">&gt; Jupiter</option><option value="Saturn" data-svelte-h="svelte-1hqessu">&gt; Saturn </option><option value="Uranus" data-svelte-h="svelte-1x9k5yk">&gt; Uranus </option><option value="Neptune" data-svelte-h="svelte-1xk3lvi">&gt; Neptune</option><option value="Custom Planet" data-svelte-h="svelte-knsl4s">&gt; Custom</option></select></div>  <div class="simulation svelte-tn9zuh"><div id="orbit" class="svelte-tn9zuh"${add_attribute("this", svgContainer, 0)}></div> </div>`;
});
export {
  Page as default
};
