import wasmModule from '../my-rust-app/pkg/my_rust_app_bg.wasm';
import * as imports from '../my-rust-app/pkg/my_rust_app_bg.js';

const memory = new WebAssembly.Memory({
	initial: 17,
	maximum: 1000, // 1000 pages (64 MiB)
});

const instance = new WebAssembly.Instance(wasmModule, {
	'./my_rust_app_bg.js': imports,
	env: { memory },
});
imports.__wbg_set_wasm(instance.exports);
(instance.exports.__wbindgen_start as () => void | undefined)?.();

export default {
	async fetch(request, env, ctx): Promise<Response> {
		return new Response(imports.greet('World'));
	},
} satisfies ExportedHandler<Env>;
