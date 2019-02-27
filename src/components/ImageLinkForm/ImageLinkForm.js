import React from 'react';

const ImageLinkForm = () => {
	return(
		<div>
			<p className="f3">
				{`This magic brain will detect faces in your pictures.  Enter a url to try it out.`}
			</p>
			<div className="">
				<input type="text" className="f4 pa2 w-70 center"/>
				<button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple">Detect</button>
			</div>
		</div>
	);
}
export default ImageLinkForm;