module.exports = {
    convertTimeTo24hrs: (hours, minutes, seconds, amorpm) => {
        try {
            if (typeof hours === 'string') {
                throw new Error("hours should be integer value");
            }
            if (typeof minutes === 'string') {
                throw new Error("minutes should be integer value");
            }
            if (typeof seconds === 'string') {
                throw new Error("seconds should be integer value");
            }
            if (hours > 12 || hours < 1 || hours === undefined) {
                throw new Error("hours should be between or equal to 1 and 12");
            }
            if (minutes > 60 || minutes < 0 || minutes === undefined) {
                throw new Error("minutes should be between 0 and 60");
            }
            if (seconds > 60 || seconds < 0 || seconds === undefined) {
                throw new Error("seconds should be between 0 and 60");
            }
            if (amorpm.toUpperCase() !== "AM" && amorpm.toUpperCase() !== "PM") {
                throw new Error("amorpm should be AM or PM");
            }
        } catch (e) {
            console.error(e, e.stack);
        }


        let timeIn24hrs = 0;
        if (amorpm.toUpperCase() === 'PM' && hours === 12) {
            timeIn24hrs = 12;
        } else if (amorpm.toUpperCase() === 'PM') {
            timeIn24hrs = hours + 12;
        } else if (amorpm.toUpperCase() === 'AM' && hours === 12) {
            timeIn24hrs = 00;
        } else {
            timeIn24hrs = hours;
        }
        return ('0' + timeIn24hrs).slice(-2) + ':' + minutes + ':' + seconds;
    },
    convertTimeTo12hrs: (hours, minutes, seconds) => {


        try {
            if (typeof hours === 'string') {
                throw new Error("hours should be integer value");
            }
            if (typeof minutes === 'string') {
                throw new Error("minutes should be integer value");
            }
            if (typeof seconds === 'string') {
                throw new Error("seconds should be integer value");
            }
            if (hours > 23 || hours < 0 || hours === undefined) {
                throw new Error("hours should be between 0 and 24");
            }
            if (minutes > 60 || minutes < 0 || minutes === undefined) {
                throw new Error("minutes should be between 0 and 60");
            }
            if (seconds > 60 || seconds < 0 || seconds === undefined) {
                throw new Error("seconds should be between 0 and 60");
            }
        } catch (e) {
            console.error(e, e.stack);
        }


        if (hours === 12) {
            return 12 + ':' + minutes + ':' + seconds + ' PM';
        }
        if (hours > 12) {
            hours = hours - 12;
            return hours + ':' + minutes + ':' + seconds + ' PM';
        } else if (hours === 0) {
            return 12 + ':' + minutes + ':' + seconds + ' AM';
        } else {
            return hours + ':' + minutes + ':' + seconds + ' AM';
        }
    }
}