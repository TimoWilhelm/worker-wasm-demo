import mod from '../my-rust-app/pkg/my_rust_app_bg.wasm';
import { greet, initSync } from '../my-rust-app/pkg/my_rust_app';

const memory = new WebAssembly.Memory({
	initial: 17,
	maximum: 1000, // 1000 pages (64 MiB)
});
initSync({ module: mod, memory });

export default {
	async fetch(request, env, ctx): Promise<Response> {
		return new Response(greet('World'));
	},
} satisfies ExportedHandler<Env>;
