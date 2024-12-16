import React from 'react'

function GallerySwitches({toggleGalleryFunction, setCharacterFunction}) {
	
	return(
		<div id="gallery_switches">
			<span><a onClick={() => { setCharacterFunction("Alice"); toggleGalleryFunction(true) }} >Alice</a></span>
			<span><a onClick={() => { setCharacterFunction("Jane"); toggleGalleryFunction(true) }} >Jane</a></span>
			<span><a onClick={() => { setCharacterFunction("Pandemonica"); toggleGalleryFunction(true) }} >Pandemonica</a></span>
			<span><a onClick={() => { setCharacterFunction("Willow"); toggleGalleryFunction(true) }} >Willow</a></span>
		</div>
	)
}

export default GallerySwitches;