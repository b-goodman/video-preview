/**
 * convert seconds to an hours/minutes/seconds format.
 */
const convertTime = (time: number) => {
    return {
        hours: Math.floor(time/3600),
        minutes: Math.floor((time%3600)/60),
        seconds: time%60
    };
}

/**
 * Convert seconds to a 'HH:MM:SS' string timestamp.
 */
const stringTimestamp = (time: number) => {
    const convertedTime = convertTime(time);
    return Object.values(convertedTime).map( (val) => {
        return val.toString().padStart(2, "0");
    }).join(":")
};

export default stringTimestamp;