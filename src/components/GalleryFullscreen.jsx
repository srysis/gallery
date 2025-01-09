import React from "react"

import cross from "../files/cross.svg"

function GalleryFullscreen({toggleFullscreenFunction, passedImageIndex}) {
	const [currentImageIndex, setCurrentImageIndex] = React.useState(passedImageIndex);

	let image = document.querySelector(`img[data-index="${passedImageIndex}"]`).getAttribute("src");

	React.useEffect(() => {
		let requested_element = document.querySelector(`img[data-index="${currentImageIndex}"]`)
		
		if (requested_element != null) {
			let requested_image = requested_element.getAttribute("src");

			let image_container = document.querySelector("img.image_fullscreen");
			image_container.setAttribute("src", requested_image);
		}
	}, [currentImageIndex]);

	function switchToNextImage() {
		let temp_index = currentImageIndex;

		if (temp_index + 1 > 20) {
			setCurrentImageIndex(temp_index);
		} else {
			setCurrentImageIndex(temp_index + 1);
		}
	}

	function switchToPreviousImage() {
		let temp_index = currentImageIndex;

		if (temp_index - 1 <= 0) {
			setCurrentImageIndex(temp_index)
		} else {
			setCurrentImageIndex(temp_index - 1);
		}
	}

	return(
		<div id="image_fullscreen_overlay_container" className="active" >
			<button id="prev_photo" onClick={() => switchToPreviousImage()} >&lt;</button> 
			<img className="image_fullscreen" src={image} alt="" />
			<button id="next_photo" onClick={() => switchToNextImage()} >&gt;</button>
			<button id="close_button" onClick={() => { toggleFullscreenFunction(false) }} ><img src={cross} /></button>
		</div>
	)
}

export default GalleryFullscreen