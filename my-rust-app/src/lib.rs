mod utils;

use wasm_bindgen::prelude::*;

use crate::utils::set_panic_hook;

#[wasm_bindgen(start)]
pub fn start() -> Result<(), JsValue> {
	set_panic_hook();
	Ok(())
}


#[wasm_bindgen]
pub fn greet(subject: &str) -> String {
	format!("Hello, {}!", subject)
}
