import { c as create_ssr_component } from "../../chunks/ssr.js";
/* empty css                */const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".wrapper.svelte-g93lzr{display:flex}div.svelte-g93lzr{color:white}.text.svelte-g93lzr{margin:auto;padding:4rem;font-size:medium;width:50vw}@media(max-width: 750px){.text.svelte-g93lzr{width:90vw}}h1.svelte-g93lzr{text-align:center}a.svelte-g93lzr{background-color:var(--blue);text-decoration:none;color:black}a.svelte-g93lzr:hover{color:white}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="wrapper svelte-g93lzr" data-svelte-h="svelte-16vho1h"><div class="text svelte-g93lzr"><h1 class="svelte-g93lzr"><u>2D</u> Orbital Simulation.</h1>
    This website is designed to visualise and understand the formula that describe
    the orbital motions of bodies. Learning about orbital motion and energies gets
    very confusing. While there are a plethora of textbooks and articles written
    on the subject I wanted to make one to help students and educators visualise
    the phenomena.
    <br> <br> <hr> <br>
    To view the Simulation you can
    <a href="/Simulation" class="svelte-g93lzr">open it here.</a> <br>
    For a refresher or introduction into the physics of orbital mechanics go to
    <a href="/Description" class="svelte-g93lzr">this page</a> <br>
    For a little information on the person who made this website
    <a href="About" class="svelte-g93lzr">the about page</a></div> </div>`;
});
export {
  Page as default
};
