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