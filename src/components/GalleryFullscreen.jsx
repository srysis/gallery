import React from "react"

import cross from "../files/cross.svg"

function GalleryFullscreen({toggleFullscreenFunction, currentImage}) {
	function switchToNextImage() {
		let current_image = document.querySelector("img.current_image");

		if (current_image.parentElement.nextElementSibling != null) {
			current_image.classList.toggle("current_image");
			current_image.parentElement.nextElementSibling.firstElementChild.classList.toggle("current_image");

			let image_container = document.querySelector("img.image_fullscreen");
			image_container.setAttribute("src", document.querySelector("img.current_image").getAttribute("src"));
		}
	}

	function switchToPreviousImage() {
		let current_image = document.querySelector("img.current_image");

		if (current_image.parentElement.previousElementSibling != null) {
			current_image.classList.toggle("current_image");
			current_image.parentElement.previousElementSibling.firstElementChild.classList.toggle("current_image");

			let image_container = document.querySelector("img.image_fullscreen");
			image_container.setAttribute("src", document.querySelector("img.current_image").getAttribute("src"));
		}
	}

	return(
		<div id="image_fullscreen_overlay_container" className="active" >
			<button id="prev_photo" onClick={() => switchToPreviousImage()} >&lt;</button> 
			<img className="image_fullscreen" src={currentImage} />
			<button id="next_photo" onClick={() => switchToNextImage()} >&gt;</button>
			<button id="close_button" onClick={() => { toggleFullscreenFunction(false); document.querySelector('img.current_image').classList.remove("current_image") }} ><img src={cross} /></button>
		</div>
	)
}

export default GalleryFullscreen