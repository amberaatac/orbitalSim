<script>
  import { onMount } from 'svelte';
  import * as d3 from 'd3';

  let selectedPlanet = "Earth"; // Default selected planet
  let svgContainer;

  const allPlanets = [
    { name: "Mercury", radius: 4.879, orbit: 57.9, color: "gray", period: 88 },
    { name: "Venus", radius: 12.104, orbit: 108.2, color: "yellow", period: 225 },
    { name: "Earth", radius: 12.742, orbit: 149.6, color: "blue", period: 365 },
    { name: "Mars", radius: 6.779, orbit: 227.9, color: "red", period: 687 },
    { name: "Jupiter", radius: 139.2, orbit: 778.5/2, color: "orange", period: 4307 },
    { name: "Saturn", radius: 116.5, orbit: 1433.5/2.5, color: "brown", period: 10754 },
    { name: "Uranus", radius: 50.724, orbit: 287.25, color: "lightblue", period: 30660 },
    { name: "Neptune", radius: 49.244, orbit: 449.51, color: "darkblue", period: 60225 },
  ];

  // Reactive statement returns an array containing only the selected planet
  let planets = allPlanets.filter(planet => planet.name === selectedPlanet);
  $: planets = allPlanets.filter(planet => planet.name === selectedPlanet);

  let width, height, orbit;

  function createVisualization() {
    const svg = d3.select(svgContainer)
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    orbit = svg.append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    // Add sun at the center
    orbit.append('circle')
      .attr('r', 20) // Adjust size as needed
      .style('fill', 'orange');

    planets.forEach(planet => {
      orbit.append('circle')
        .attr('r', planet.orbit)
        .style('fill', 'none')
        .style('stroke', 'lightgray');

      const planetCircle = orbit.append('circle')
        .attr('r', planet.radius)
        .style('fill', planet.color)
        .attr('transform', `translate(${planet.orbit}, 0)`);

      function animatePlanet() {
        planetCircle.transition()
          .duration(planet.period)
          .ease(d3.easeLinear)
          .attrTween('transform', function() {
            return function(t) {
              const rotate = `rotate(${t * 360})`;
              const translate = `translate(${planet.orbit}, 0)`;
              return rotate + " " + translate;
            };
          })
          .on('end', animatePlanet); // restart the animation when it ends
      }

      animatePlanet();
    });
  }

  onMount(() => {
    width = window.innerWidth;
    height = window.innerHeight;
    createVisualization();
  });

  // Clear the SVG and create a new visualization whenever selectedPlanet changes
  $: {
    d3.select('svg').remove();
    createVisualization();
    console.log(planets)
  }
</script>

<div id="orbit" bind:this={svgContainer}></div>

<select bind:value={selectedPlanet}>
  <option value="Mercury">Mercury</option>
  <option value="Venus">Venus</option>
  <option value="Earth">Earth</option>
  <option value="Mars">Mars</option>
  <option value="Jupiter">Jupiter</option>
  <option value="Saturn">Saturn</option>
  <option value="Uranus">Uranus</option>
  <option value="Neptune">Neptune</option>
</select>