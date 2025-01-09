import React from "react"

import GallerySwitches from "./GallerySwitches"
import GalleryContainer from "./GalleryContainer"
import GalleryFullscreen from "./GalleryFullscreen"

import "../style/style.scss"
import "../style/style-phone.scss"
// import "../style/shared.scss"

function Gallery() {
	const [isGalleryActive, toggleGallery] = React.useState(false);
	const [isInFullscreen, toggleFullscreen] = React.useState(false);

	const [currentCharacter, setCurrentCharacter] = React.useState("");
	const [imageIndexToPass, setImageIndexToPass] = React.useState(0);

	function toggleFullscreenFromChildComponent(value) {
		toggleFullscreen(value);

		// hide scrollbar and adjust margin if fullscreen overlay is visible
		if (value) { 
			document.body.style.overflow = 'hidden';
			document.body.style.marginRight = 0.4 + "%";
		} else { 
			document.body.style.overflow = 'visible';
			document.body.style.marginRight = 0;
		}
	}

	function toggleGalleryFromChildComponent(value) {
		toggleGallery(value);
	}

	function setCharacterFromChildComponent(character) {
		setCurrentCharacter(character);
	}

	function setImageFromChildComponent(image_index) {
		setImageIndexToPass(image_index);
	}

	return(
		<main>
			<GallerySwitches toggleGalleryFunction={toggleGalleryFromChildComponent} setCharacterFunction={setCharacterFromChildComponent} />
			{ isGalleryActive 
				&& <GalleryContainer 
						character={currentCharacter} 
						setCurrentImageFunction={setImageFromChildComponent} 
						toggleFullscreenFunction={toggleFullscreenFromChildComponent} 
					/> 
			}
			{ isInFullscreen && <GalleryFullscreen toggleFullscreenFunction={toggleFullscreenFromChildComponent} passedImageIndex={imageIndexToPass} /> }
		</main>
	)
}

export default Gallery