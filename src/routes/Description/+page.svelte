<script>
  import orbitDigram from "$lib/Orbit-23.jpeg";
  import orbitalEnergy from "$lib/orbitenergy.jpg";
</script>

<div>
  <h1>Orbital Motion</h1>
  The motion of the planets and stars has been an object of fascination for humans
  since the dawn of time. With the advent of Newton and Kepler we can what our ancient
  ancestors could not and actually understand their motion. This page is dedicated
  to describing the physics behind the simulation you see on the<a
    href="/simulation">simulation page</a
  >. At any point if you get confused try going back to the simulation to see if
  that helps your understanding.

  <h1>Circular Motion</h1>
  In this context we are employing the mechanics of circular motion to describe the
  path (location at a given time) and period (time it takes for a body to make a
  full rotation). It is important to note at this moment that planetary motion is
  in fact not perfectly circular,generally taking the form of an ellipse, however
  for the simplified context we can assume the the radius of the orbit<b>(r)</b>
  is constant throughout any given rotation.
  <br />
  <br />
  When a body (planet or satellite) is in orbit around a given object it is being
  effected by 2 general forces. Given Newton's first law:
  <br />
  <br />
  <center
    >An object at rest tends to stay at rest, and an object in motion tends to
    stay in motion with the same speed and in the same direction unless acted
    upon by an external force.</center
  >
  <br />
  We can understand this object to moving in a straight line at a constant velocity
  through space. On the digram this is denoted with the vector (v). However that
  assumes that there is no acceleration. As the body is not in an isolated system
  and is joined by another large body (the sun), the object's are attracted to each
  other. This implies a force between the two. Given newton's law of gravitation:
  <br />
  <br />
  <center>F = G <sup>Mm/</sup><sub>r<sup>2</sup></sub></center>
  <ul>
    <li>F is the magnitude of the gravitational force between two objects.</li>
    <li>
      G is the gravitational constant (6.67*10<sup>11</sup>m<sup>3</sup>kg<sup
        >-1</sup
      >s<sup>-2</sup>)
    </li>
    <li>M and m are the masses of the two objects.</li>
    <li>r is the distance between the centers of mass of the two objects.</li>
  </ul>
  We can see than there is a force that accelerates the objects towards each other.
  However as the body still moves in accordance with Newton's first law the vectors
  (two forces) combine to create a circular motion. This is called the centripetal
  force or the force that acts towards the center of the circular orbit, continuously
  changing the direction of the planet's velocity and keeping it in orbit. To investigate
  the consequences of this I encourage you to return to the<a href="/simulation"
    >simulation page</a
  >
  and play around with the values for orbiting mass and orbing radius. For more clarity
  you can see this phenomon being representing in the force diagram below.
  <br />
  <br />
  <center><img src={orbitDigram} alt="force digram" /></center>
  <br />
  <h2>Period</h2>
  Now that we know why planets orbit the next natural question is to investigate
  it's speed. We all know that the sun revolves around the earth once roughly every
  365 days or every year, but why is that? This depends on three values, the mass
  of the orbiting object (m), the mass of the body it is orbiting (M or the sun)
  and the distance between the two (r). So given two masses are orbiting eachother
  (M = sun, m = other object) we can understand there force to follow newton's law
  of gravitation. Using Newton's third law:
  <br />
  <br />
  <center>F=ma or F = <sup>mv<sup>2</sup>/</sup><sub>r</sub></center>
  <br />
  We can rewrite the entire equation as this:
  <br />
  <br />
  <center>
    G <sup>Mm/</sup><sub>r<sup>2</sup></sub> = <sup>mv<sup>2</sup>/</sup><sub
      >r</sub
    ></center
  >
  <br />
  Here something quite beautiful happens where the small (m)s or mass of orbiting
  object cancel out and simplifying it we are left with:
  <br />
  <br />
  <center><sup>GM/</sup><sub>r<sup>2</sup></sub> = v <sup>2</sup></center>
  <br />
  <center>v = √<sup>GM</sup><sub>r</sub></center>
  <br />
  Thinking about it for a little bit we can understand that the time it takes for
  an object to go around in a full rotation is the circumference divided by the velocity
  (m divided by meters per second). Rearranging the equation for T period:
  <br />
  <br />
  <center>T = <sup>2πr/</sup><sub>√<sup>GM</sup><sub>r</sub></sub></center>
  <br />
  Further simplifications makes
  <br />
  <br />
  <center>2π * √<sup>r<sup>3</sup>/</sup><sub>GM</sub></center>
  <br />
  Now we can plug in numbers to this equation, feel free to test it out on the
  <a href="/Simulation">simulation page</a>

  <h2>Gravitational Potential Energy</h2>
  Energy in orbit is still comprised of the same things Kinetic Energy (KE) and Potential
  Energy (PE). More specificly the total energy is the sum of KE and PE. Kinetic
  energy is still
  <br />
  <br />

  Around a point-like object, the gravitational potential is singular as the
  distance decreases to zero, thus you can't use it as a ground potential. The
  only meaningful alternative to use the infinite distance as zero potential.
  But, to preserve energy, objects coming from near-infinite, they get kinetical
  energy, this is coming by the decrease in the gravitation well. Thus the
  gravitational energy should be negative. If you revert the convention, i.e. to
  have a positive gravitational potential, then you should revert also the
  kinetical energy. It is weird or you have to find a different zero reference
  point (it also weird + occasional, you have to explain, why) or you will harm
  energy preservation (-> give up useful physics) Note, if you calculate some
  easy thing, for example you are calculating the gravitational energy of an
  elevator in a high school homework task, you can use the ground as zero
  reference without any problem. It falls to (2): you essentially selected
  6636km distance as zero potential in the gravity well of the Earth.

  <center>KE = <sup>1/</sup><sub>2</sub>mv<sup>2</sup></center>
  Which we can throw in our previously calculated formula of velocity to calculate
  as:
  <br />
  <br />
  <h3>Potential Energy</h3>
  <center> <img src={orbitalEnergy} alt={orbitDigram} /> </center>
</div>

<style>
  center {
    font-weight: bold;
  }
  div {
    color: white;
    margin: 3rem;
  }
  a {
    background-color: var(--blue);
    text-decoration: none;
    color: black;
  }
</style>
