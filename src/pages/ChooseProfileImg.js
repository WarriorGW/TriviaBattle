import React from "react";
import "./css/ChooseProfileImgStyle.css";
import { useUserStore } from "../context/UserStore";
import useAuthStore from "../context/AuthStore";

function ChooseProfileImg() {
	const updateUserImg = useUserStore((state) => state.updateUserImg);
	const authId = useAuthStore((state) => state.authId);
	const imagesContext = require.context(
		"../assets/profiles",
		false,
		/\.(png|jpg|jpeg)$/
	);

	const imageNames = imagesContext.keys().map((imagePath) => {
		const imageNameWithExtension = imagePath.split("/").pop(); // Obtén el nombre del archivo con extensión
		const imageNameWithoutExtension = imageNameWithExtension.split(".")[0]; // Obtén solo el nombre sin extensión
		return imageNameWithoutExtension;
	});
	// Eliminar la imagen por defecto del arreglo de imagenes para que no se muestre
	if (imageNames.includes("user-default")) {
		imageNames.splice(imageNames.indexOf("user-default"), 1);
	}
	return (
		<div className="card-profiles mt-3 mb-5 mt-lg-5">
			{imageNames.map((imageName, index) => (
				<button
					key={index}
					className="button-profiles-selector m-2"
					onClick={async () => {
						console.log(parseInt(authId, 10), imageName);
						const response = await updateUserImg(
							parseInt(authId, 10),
							imageName
						);
						if (response.status === 200) {
							localStorage.setItem("authImg", imageName);
						}
					}}
				>
					<img
						alt={`Profile: ${imageName}`}
						className="img-profiles-selector"
						src={require(`../assets/profiles/${imageName}.png`)}
						draggable="false"
					/>
				</button>
			))}
		</div>
	);
}

export default ChooseProfileImg;
