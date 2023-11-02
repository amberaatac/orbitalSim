<script>
  import { onMount } from "svelte";
  import img_sun from "../../lib/planets/sun.png";
  import img_earth from "../../lib/planets/earth.webp";
  import img_jupiter from "../../lib/planets/jupiter.png";
  import img_mars from "../../lib/planets/mars.png";
  import img_saturn from "../../lib/planets/saturn.png";
  import img_uranus from "../../lib/planets/uranus.webp";
  import img_neptune from "../../lib/planets/neptune.png";
  import img_mercury from "../../lib/planets/mercury.png";
  import img_venus from "../../lib/planets/mercury.png";

  // Planets
  class Planet {
    constructor(name, diameter, mass, distance_from_sun, img) {
      this.name = name;
      this.diameter = diameter * Math.pow(10, 3);
      this.mass = mass; // in kilograms
      this.distance_from_sun = distance_from_sun * Math.pow(10, 6); // in millions of kilometers
      this.img = img; // in millions of kilometers
    }
  }

  // Creating objects for each planet
  let mercury = new Planet("Mercury", 4879, 3.3e23, 57.9, { img_mercury });
  let venus = new Planet("Venus", 12104, 4.87e24, 108.2, { img_venus });
  let earth = new Planet("Earth", 12756, 5.97e24, 149.6, { img_earth });
  let mars = new Planet("Mars", 6792, 6.42e23, 227.9, { img_mars });
  let jupiter = new Planet("Jupiter", 139820, 1.9e27, 778.5, { img_jupiter });
  let saturn = new Planet("Saturn", 116460, 5.68e26, 1433.5, { img_saturn });
  let uranus = new Planet("Uranus", 50724, 8.68e25, 2872.5, { img_uranus });
  let neptune = new Planet("Neptune", 49244, 1.02e26, 4495.1, { img_neptune });

  let curPlanet = earth;
  let planets = {
    mercury,
    venus,
    earth,
    mars,
    jupiter,
    saturn,
    uranus,
    neptune,
  };
  // Constants for simulation
  const G = 6.674 * Math.pow(10, -11); // Gravitational constant
  const M = 2 * Math.pow(10, 30); // Mass of Sun
  const dt = Math.pow(10, 3); // Time step for simulation in seconds

  // Scaling factor for displaying the simulation
  const scaleFactor = 5 * Math.pow(10, -10);

  // Initial conditions for orbiting body
  let r0 = curPlanet.distance_from_sun;
  const v0 = Math.sqrt((G * M) / r0); // Initial velocity for circular orbit

  // Current state of orbiting body
  // Initially set at the right edge of the SVG, moving counter-clockwise
  let position = { x: r0, y: 0 };
  let velocity = { x: 0, y: v0 };

  // Update simulation at regular intervals
  let interval;
  onMount(() => {
    interval = setInterval(() => {
      // Compute acceleration due to gravity
      let r = Math.sqrt(Math.pow(position.x, 2) + Math.pow(position.y, 2));
      let a = (-G * M) / Math.pow(r, 2);

      // Divide acceleration into x and y components based on position
      let ax = (a * position.x) / r;
      let ay = (a * position.y) / r;

      // Compute next position and velocity
      let nextPosition = {
        x: position.x + velocity.x * dt,
        y: position.y + velocity.y * dt,
      };
      let nextVelocity = {
        x: velocity.x + ax * dt,
        y: velocity.y + ay * dt,
      };

      position = nextPosition;
      velocity = nextVelocity;
    }, dt);

    return () => {
      clearInterval(interval);
    };
  });
  let imgSrc; // Declare a new variable to hold the image source
  $: imgSrc = curPlanet.img; // Reactive statement to update the image source when curPlanet changes
  function changePlanet(e) {
    curPlanet = planets[e.target.value];
    r0 = curPlanet.distance_from_sun;
    position.x = r0;
    position.y = 0;
    velocity.x = 0;
    velocity.y = Math.sqrt((G * M) / r0);
    console.log(curPlanet);
  }
</script>

<div>
  <select on:change={changePlanet}>
    <option value="mercury">Mercury</option>
    <option value="venus">Venus</option>
    <option value="earth">Earth</option>
    <option value="mars">Mars</option>
    <option value="jupiter">Jupiter</option>
    <option value="saturn">Saturn</option>
    <option value="uranus">Uranus</option>
    <option value="neptune">Neptune</option>
  </select>
</div>
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <!-- Central body -->
  <image href={img_sun} x="90" y="90" height="20" width="20" />

  <!-- Orbiting body -->
  <image
    href={$imgSrc}
    x={100 + position.x * scaleFactor - 5}
    y={100 - position.y * scaleFactor - 5}
    height="10"
    width="10"
  />
</svg>
