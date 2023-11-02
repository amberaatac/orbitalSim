import { c as create_ssr_component, b as add_attribute } from "../../chunks/ssr.js";
/* empty css                */const logo = "/_app/immutable/assets/Logo.7c2510fc.png";
const info = "/_app/immutable/assets/info.5a349c6f.png";
const paper = "/_app/immutable/assets/paper.4292b2c8.png";
const planet = "/_app/immutable/assets/planet.06ae2965.png";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: 'body{background-image:url("../lib/bg.png");background-size:cover;font-family:"Fira Code", monospace}div.svelte-12i598j{color:white}.wrapper.svelte-12i598j{display:flex;margin:auto}.Link.svelte-12i598j{margin:1rem;display:flex;margin:auto}a.svelte-12i598j{display:flex;margin:auto;flex-direction:column;text-align:center;transition:all ease-in-out 200ms;text-decoration:none;color:white;font-size:90%}img.svelte-12i598j{width:5vw;margin:auto;margin:1rem}@media(max-width: 750px){img.svelte-12i598j{width:15vw}}a.svelte-12i598j:hover{transition:all ease-in-out 200ms;color:var(--blue)}',
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="wrapper svelte-12i598j" data-svelte-h="svelte-1qwo840"><div class="Link svelte-12i598j"><a href="/" class="svelte-12i598j"><img${add_attribute("src", logo, 0)} class="svelte-12i598j">
      Home</a></div> <div class="Link svelte-12i598j"><a href="/Simulation" class="svelte-12i598j"><img${add_attribute("src", planet, 0)} class="svelte-12i598j">
      Simulation</a></div> <div class="Link svelte-12i598j"><a href="/Description" class="svelte-12i598j"><img${add_attribute("src", paper, 0)} class="svelte-12i598j">
      Description</a></div> <div class="Link svelte-12i598j"><a href="/About" class="svelte-12i598j"><img${add_attribute("src", info, 0)} class="svelte-12i598j">
      About</a></div></div> ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
