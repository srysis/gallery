import React from 'react'

function GallerySwitches({toggleGalleryFunction, setCharacterFunction}) {
	
	return(
		<div id="gallery_switches">
			<span><button type="button" onClick={() => { setCharacterFunction("Alice"); toggleGalleryFunction(true) }} >Alice</button></span>
			<span><button type="button" onClick={() => { setCharacterFunction("Jane"); toggleGalleryFunction(true) }} >Jane</button></span>
			<span><button type="button" onClick={() => { setCharacterFunction("Pandemonica"); toggleGalleryFunction(true) }} >Pandemonica</button></span>
			<span><button type="button" onClick={() => { setCharacterFunction("Willow"); toggleGalleryFunction(true) }} >Willow</button></span>
		</div>
	)
}

export default GallerySwitches;