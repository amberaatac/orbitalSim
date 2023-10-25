<script>
  import "../app.css";
  import logo from "$lib/Logo.png";
  import info from "$lib/info.png";
  import paper from "$lib/paper.png";
  import planet from "$lib/planet.png";
</script>

<div class="wrapper">
  <div class="Link">
    <a href="/">
      <img src={logo} />
      Home</a
    >
  </div>
  <div class="Link">
    <a href="/Simulation">
      <img src={planet} />
      Simulation</a
    >
  </div>
  <div class="Link">
    <a href="/Description">
      <img src={paper} />
      Description</a
    >
  </div>
  <div class="Link">
    <a href="/About">
      <img src={info} />
      About</a
    >
  </div>
</div>

<slot />

<style>
  :global(body) {
    background-image: url("../lib/bg.png");
    background-size: cover;
  }
  div {
    color: white;
  }
  .wrapper {
    display: flex;
    margin: auto;
    width: max-content;
  }
  .Link {
    margin: 1rem;
    display: flex;
  }
  a {
    display: flex;
    margin: auto;
    flex-direction: column;
    text-align: center;
    transition: all ease-in-out 200ms;
    text-decoration: none;
    color: white;
  }
  img {
    margin: 1rem;
    width: 100px;
  }
  a:hover {
    transition: all ease-in-out 200ms;
    color: var(--blue);
  }
</style>
