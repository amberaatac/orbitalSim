<script>
  import { onMount } from 'svelte';
  import * as d3 from 'd3';
  import img_sun from "$lib/Planets/sun.png";
  import img_earth from "$lib/Planets/earth.webp";
  import img_jupiter from "$lib/Planets/jupiter.png";
  import img_mars from "$lib/Planets/mars.png";
  import img_saturn from "$lib/Planets/saturn.png";
  import img_uranus from "$lib/Planets/uranus.webp";
  import img_neptune from "$lib/Planets/neptune.png";
  import img_mercury from "$lib/Planets/mercury.png";
  import img_venus from "$lib/Planets/venus.png";

  let svg;

  onMount(async () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    const planets = [
      { name: "Mercury", radius: 4.879, orbit: 57.9,    img: img_mercury },
      { name: "Venus", radius: 12.104, orbit: 108.2,    img: img_venus },
      { name: "Earth", radius: 12.742, orbit: 149.6,    img: img_earth },
      { name: "Mars", radius: 6.779, orbit: 227.9,      img: img_mars },
      { name: "Jupiter", radius: 139.2, orbit: 778.5,   img: img_jupiter },
      { name: "Saturn", radius: 116.5, orbit: 1433.5,   img: img_saturn },
      { name: "Uranus", radius: 50.724, orbit: 2872.5,  img: img_uranus },
      { name: "Neptune", radius: 49.244, orbit: 4495.1, img: img_neptune }
    ];

    svg = d3.select('#orbit')
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    const orbit = svg.append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    // Add sun at the center
    orbit.append('image')
      .attr('xlink:href', img_sun)
      .attr('x', -20) // Adjust size as needed
      .attr('y', -20) // Adjust size as needed
      .attr('width', 40) // Adjust size as needed
      .attr('height', 40); // Adjust size as needed

    planets.forEach(planet => {
      orbit.append('circle')
        .attr('r', planet.orbit)
        .style('fill', 'none')
        .style('stroke', 'lightgray');

      const planetImage = orbit.append('image')
        .attr('xlink:href', planet.img)
        .attr('x', -planet.radius / 2)
        .attr('y', -planet.radius / 2)
        .attr('height', planet.radius)
        .attr('width', planet.radius)
        .attr('transform', `translate(${planet.orbit}, 0)`);

      function animatePlanet() {
        planetImage.transition()
          .duration(5000)
          .ease(d3.easeLinear)
          .attrTween('transform', function() {
            const rotation = d3.interpolateString(`rotate(0, ${planet.orbit}, 0)`, `rotate(360, ${planet.orbit}, 0)`);
            return function(t) {
              return rotation(t);
            };
          })
          .on('end', animatePlanet); // restart the animation when it ends
      }

      animatePlanet();
    });
  });
</script>

<div id="orbit"></div>cript>

<div id="orbit"></div>