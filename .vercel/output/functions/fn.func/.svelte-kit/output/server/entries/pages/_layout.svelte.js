import { c as create_ssr_component, b as add_attribute } from "../../chunks/ssr.js";
/* empty css                */const logo = "/_app/immutable/assets/Logo.7c2510fc.png";
const info = "/_app/immutable/assets/info.5a349c6f.png";
const paper = "/_app/immutable/assets/paper.4292b2c8.png";
const planet = "/_app/immutable/assets/planet.06ae2965.png";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: 'body{background-image:url("../lib/bg.png");background-size:cover;font-family:"Fira Code", monospace}div.svelte-x09o1i{color:white}.wrapper.svelte-x09o1i{display:flex;margin:auto}.Link.svelte-x09o1i{margin:1rem;display:flex;margin:auto}a.svelte-x09o1i{display:flex;margin:auto;flex-direction:column;text-align:center;transition:all ease-in-out 200ms;text-decoration:none;color:white;font-size:90%}img.svelte-x09o1i{width:10vw;margin:auto;margin:1rem}a.svelte-x09o1i:hover{transition:all ease-in-out 200ms;color:var(--blue)}',
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="wrapper svelte-x09o1i" data-svelte-h="svelte-1qwo840"><div class="Link svelte-x09o1i"><a href="/" class="svelte-x09o1i"><img${add_attribute("src", logo, 0)} class="svelte-x09o1i">
      Home</a></div> <div class="Link svelte-x09o1i"><a href="/Simulation" class="svelte-x09o1i"><img${add_attribute("src", planet, 0)} class="svelte-x09o1i">
      Simulation</a></div> <div class="Link svelte-x09o1i"><a href="/Description" class="svelte-x09o1i"><img${add_attribute("src", paper, 0)} class="svelte-x09o1i">
      Description</a></div> <div class="Link svelte-x09o1i"><a href="/About" class="svelte-x09o1i"><img${add_attribute("src", info, 0)} class="svelte-x09o1i">
      About</a></div></div> ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
