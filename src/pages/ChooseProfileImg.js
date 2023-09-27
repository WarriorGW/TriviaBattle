import React from "react";
import "./css/ChooseProfileImgStyle.css";

function ChooseProfileImg(props) {
	const imagesContext = require.context(
		"../assets/profiles",
		false,
		/\.(png|jpg|jpeg)$/
	);

	const imageNames = imagesContext.keys().map((imagePath) => {
		const imageName = imagePath.split("/").pop(); // Obtén solo el nombre del archivo
		return imageName;
	});
	return (
		<div className="card-profiles mt-3 mt-lg-5">
			{imageNames.map((imageName, index) => (
				<button className="button-profiles-selector m-3">
					<img
						key={index}
						alt={`Profile: ${imageName}`}
						className="img-profiles-selector"
						src={require(`../assets/profiles/${imageName}`)}
					/>
				</button>
			))}
		</div>
	);
}

export default ChooseProfileImg;
