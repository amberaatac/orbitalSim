

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.17154ffe.js","_app/immutable/chunks/scheduler.b95eede2.js","_app/immutable/chunks/index.e270efd4.js"];
export const stylesheets = ["_app/immutable/assets/2.96d9ca1f.css","_app/immutable/assets/app.7614952e.css"];
export const fonts = [];
