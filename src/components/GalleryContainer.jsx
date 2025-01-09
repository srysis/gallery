import React from "react"

function GalleryContainer({character, setCurrentImageFunction, toggleFullscreenFunction}) {

	/*// function that shuffles an object. it is used to randomize the order of images each time a user clicks on any of the characters
	function shuffle(objectList) {
	    for (let i = 0; i < objectList.length - 1; i++) {
	        let j = i + Math.floor(Math.random() * (objectList.length - i));

	        let temp = objectList[j];
	        objectList[j] = objectList[i];
	        objectList[i] = temp;
	    }
	    return objectList;
	}*/

	function addImages(characterName) {
		let images_directory;

		switch (character) {
		case "Alice":
			images_directory = require.context('../images/Alice', false);
			break;
		case "Jane":
			images_directory = require.context('../images/Jane', false);
			break;
		case "Pandemonica":
			images_directory = require.context('../images/Pandemonica', false);
			break;
		case "Willow":
			images_directory = require.context('../images/Willow', false);
			break;
		}

		
		const imageList = images_directory.keys().map(image => images_directory(image));

		const image_containers = imageList.map(function(item, index) {
			return (
				<div className="image_container">
					<img src={item} data-index={index + 1} alt="Press to zoom in" onClick={(event) => { toggleFullscreenFunction(true); setCurrentImageFunction(index + 1); }} />
				</div>
			)
		})
		return image_containers;
	}

	return(
		<>
			<hr className="gallery_hr" />
			<div id="gallery">
				{addImages(character)}
			</div>
			<hr className="gallery_hr" />
		</>
	)
}

export default GalleryContainer