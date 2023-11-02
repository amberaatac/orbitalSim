import * as universal from '../entries/pages/Simulation/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Simulation/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/Simulation/+page.js";
export const imports = ["_app/immutable/nodes/5.5b1a7385.js","_app/immutable/chunks/scheduler.b95eede2.js","_app/immutable/chunks/index.e270efd4.js","_app/immutable/chunks/transform.aa73e983.js"];
export const stylesheets = ["_app/immutable/assets/5.e400480f.css","_app/immutable/assets/app.7614952e.css"];
export const fonts = [];
