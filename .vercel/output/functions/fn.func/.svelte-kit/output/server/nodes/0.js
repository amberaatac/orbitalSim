

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.0f374b54.js","_app/immutable/chunks/scheduler.b95eede2.js","_app/immutable/chunks/index.e270efd4.js"];
export const stylesheets = ["_app/immutable/assets/0.2bddc953.css","_app/immutable/assets/app.7614952e.css"];
export const fonts = [];
