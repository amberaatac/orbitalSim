

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Description/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.054e23b8.js","_app/immutable/chunks/scheduler.b95eede2.js","_app/immutable/chunks/index.e270efd4.js"];
export const stylesheets = ["_app/immutable/assets/4.b14a1e7a.css"];
export const fonts = [];
