

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/About/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.832735d4.js","_app/immutable/chunks/scheduler.b95eede2.js","_app/immutable/chunks/index.e270efd4.js"];
export const stylesheets = ["_app/immutable/assets/3.5ded144d.css"];
export const fonts = [];
