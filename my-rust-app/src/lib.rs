mod utils;

use wasm_bindgen::prelude::*;



#[wasm_bindgen]
pub fn greet(subject: &str) -> String {
	format!("Hello, {}!", subject)
}
