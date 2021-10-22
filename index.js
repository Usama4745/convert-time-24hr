function verifyInput(hours, minutes, seconds, to12hrs) {
	if (typeof hours !== "number") {
		throw new Error("hours should be integer value");
	}
	if (typeof minutes !== "number") {
		throw new Error("minutes should be integer value");
	}
	if (typeof seconds !== "number") {
		throw new Error("seconds should be integer value");
	}
	if (hours > 12 + 12 * to12hrs || hours < 1 - to12hrs) {
		throw new Error("hours should be between or equal to 1 and 12");
	}
	if (minutes >= 60 || minutes < 0) {
		throw new Error("minutes should be between 0 and 60");
	}
	if (seconds >= 60 || seconds < 0) {
		throw new Error("seconds should be between 0 and 60");
	}
}

module.exports = {

    convertTimeTo24hrsAsString: (hours, minutes, seconds, amorpm) => {

        try {
            verifyInput(hours, minutes, seconds, false);
            if (typeof amorpm !== "string") {
                throw new Error("amorpm should be string");
            }
            if (amorpm.toUpperCase() !== "AM" && amorpm.toUpperCase() !== "PM") {
                throw new Error("amorpm should be AM or PM");
            }
        } catch (e) {
            console.error(e, e.stack);
        }
    
        return (
            (
                "0" +
                (amorpm.toUpperCase() === "PM" ? (hours + 12) % 12 || hours : hours % 12)
            ).slice(-2) +
            ":" +
            ("0" + minutes).slice(-2) +
            ":" +
            ("0" + seconds).slice(-2)
        );
    },

    convertTimeTo12hrsAsString: (hours, minutes, seconds) => {

        try {
            verifyInput(hours, minutes, seconds, true);
        } catch (e) {
            console.error(e, e.stack);
        }
        return (
            ("0" + (hours % 12 || 12)).slice(-2) +
            ":" +
            ("0" + minutes).slice(-2) +
            ":" +
            ("0" + seconds).slice(-2) +
            (hours >= 12 ? " PM" : " AM")
        );
    },
}
