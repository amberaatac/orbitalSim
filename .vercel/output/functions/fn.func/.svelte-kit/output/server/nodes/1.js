

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.7b6d709d.js","_app/immutable/chunks/scheduler.b95eede2.js","_app/immutable/chunks/index.e270efd4.js","_app/immutable/chunks/singletons.d3ebd0e6.js"];
export const stylesheets = [];
export const fonts = [];
