<script>
const GravConstant =  6.67*10**-11 // Big G
let PlanetMass, SatMass, Radius

function calcVelocity() {
    return Math.sqrt((2*calcKE())/(SatMass))
}

function calcKE() {
    return (GravConstant*PlanetMass*SatMass)/(2*Radius);
}

function calcPE() {
    return -(GravConstant*PlanetMass*SatMass)/(Radius);
}

function calcTE() {
    return calcKE() + calcPE(); 
}
</script>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
