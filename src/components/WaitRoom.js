import React from "react";
import "./css/WaitRoomStyle.css";

function WaitRoom(props) {
	return (
		<div className="container text-center">
			<h1 className="title-wait home-title">El juego iniciara pronto</h1>
			<div className="loader mx-auto">
				<div className="circle"></div>
				<div className="circle"></div>
				<div className="circle"></div>
				<div className="circle"></div>
			</div>
			<br />
			<h3>{props.progress}</h3>
		</div>
	);
}

export default WaitRoom;
