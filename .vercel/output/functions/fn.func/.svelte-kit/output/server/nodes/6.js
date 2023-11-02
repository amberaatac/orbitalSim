

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Test/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.16f02e2b.js","_app/immutable/chunks/scheduler.b95eede2.js","_app/immutable/chunks/index.e270efd4.js","_app/immutable/chunks/transform.aa73e983.js"];
export const stylesheets = [];
export const fonts = [];
