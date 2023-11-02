import { c as create_ssr_component, b as add_attribute } from "../../../chunks/ssr.js";
const gh = "/_app/immutable/assets/github.e1670c5d.png";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "div.svelte-i0mqap{display:flex;flex-direction:column;color:white;margin:auto}.text.svelte-i0mqap{margin:10%;margin-bottom:1rem}img.svelte-i0mqap{background-color:none}.atxt.svelte-i0mqap{background-color:var(--blue);text-decoration:none;color:black}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="svelte-i0mqap" data-svelte-h="svelte-1ryjs5i"><div class="text svelte-i0mqap"><p>Hello I am Stephen Okita, a student at UC Berkeley. I like to write things and make things, if you want to find out more about me you can find <a class="atxt svelte-i0mqap" href="danielokita.com">here</a>. 
      <br> <br> 
      The github for this project can be found at the link below, feel free to contribute and fix my messy code.</p></div> <div class="svelte-i0mqap"><a href="https://github.com/TheArctesian/orbitalSim-amber"><img${add_attribute("src", gh, 0)} class="svelte-i0mqap"></a></div> </div>`;
});
export {
  Page as default
};
