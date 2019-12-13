"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * convert seconds to an hours/minutes/seconds format.
 */
var convertTime = function (time) {
    return {
        hours: Math.floor(time / 3600),
        minutes: Math.floor((time % 3600) / 60),
        seconds: time % 60
    };
};
/**
 * Convert seconds to a 'HH:MM:SS' string timestamp.
 */
var stringTimestamp = function (time) {
    var convertedTime = convertTime(time);
    return Object.values(convertedTime).map(function (val) {
        return val.toString().padStart(2, "0");
    }).join(":");
};
exports.default = stringTimestamp;
