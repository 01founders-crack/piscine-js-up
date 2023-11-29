/**
 * Calculates the acceleration based on the given object.
 * @param {Object} obj - The object containing the necessary properties.
 * @returns {number|string} - The calculated acceleration or "impossible" if the necessary properties are not present.
 */
function getAcceleration(obj) {
    if (obj.hasOwnProperty("f") && obj.hasOwnProperty("m")) {
        // If force (f) and mass (m) are present, calculate acceleration using Newton's second law.
        return obj.f / obj.m;
    } else if (obj.hasOwnProperty("Δv") && obj.hasOwnProperty("Δt")) {
        // If change in velocity (Δv) and time (Δt) are present, calculate acceleration using the definition of acceleration.
        return obj.Δv / obj.Δt;
    } else if (obj.hasOwnProperty("d") && obj.hasOwnProperty("t")) {
        // If displacement (d) and time (t) are present, calculate acceleration using the kinematic equation.
        return (obj.d * 2) / (obj.t * obj.t);
    } else {
        // If the necessary properties are not present, return "impossible".
        return "impossible";
    }
}
