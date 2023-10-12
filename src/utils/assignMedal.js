const assignMedal = (place) => {
	switch (place) {
		case 1:
			return require(`../assets/first-place.png`);
		case 2:
			return require(`../assets/second-place.png`);
		case 3:
			return require(`../assets/third-place.png`);
		default:
			return "";
	}
};

export default assignMedal;
