<script>
  const GravConstant = 6.67 * 10 ** -11; // Big G
  let PlanetMass = 2 * 10 ** 30, //Mass of sun
    SatMass = 5.982 * 10 ** 24, // Mass of earth
    Radius = 150 * 10 ** 3; // 1 AU
  let Velocity, KE, PE, TE;

  function calcVelocity() {
    Velocity = Math.sqrt((2 * KE) / SatMass);
    return Velocity;
  }

  function calcKE() {
    console.log("I AM BEING CALLED KE");
    KE = (GravConstant * PlanetMass * SatMass) / (2 * Radius);
    return KE;
  }

  function calcPE() {
    PE = -(GravConstant * PlanetMass * SatMass) / Radius;
    return PE;
  }

  function calcTE() {
    TE = KE + PE;
    return TE;
  }
  function callAll() {
    calcKE();
    calcPE();
    calcTE();
    calcVelocity();
  }

  // Calculate KE, PE, and TE before Velocity
  $: KE = calcKE();
  $: PE = calcPE();
  $: TE = calcTE();
  $: Velocity = calcVelocity(); // Now it uses the updated KE
</script>

<div class="wrapper">
  <div class="data">
    <label>
      Planet Mass:
      <input
        type="range"
        min="0"
        max="10000000000"
        step="1"
        bind:value={PlanetMass}
        on:click={callAll}
      />
    </label>
    <p>{PlanetMass}</p>

    <label>
      Satellite Mass:
      <input
        type="range"
        min="0"
        max="10000000000"
        step="1"
        bind:value={SatMass}
        on:click={callAll}
      />
    </label>
    <p>{SatMass}</p>

    <label>
      Radius:
      <input
        type="range"
        min="0"
        max="10000000000"
        step="1"
        bind:value={Radius}
        on:click={callAll}
      />
    </label>
    <p>{Radius}</p>

    <p>Velocity: {Velocity}</p>
    <p>Kinetic Energy: {KE}</p>
    <p>Potential Energy: {PE}</p>
    <p>Total Energy: {TE}</p>
  </div>
  <div class="simulation">
    <h1>simulation here</h1>
  </div>
</div>

<style>
  div {
    color: white;
  }
  .wrapper{
    display: flex;
    margin: 1rem;
  }

</style>
