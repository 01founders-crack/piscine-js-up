/**
 * Calculates the age of a dog on a given planet.
 * @param {string} planet - The name of the planet.
 * @param {number} age - The age of the dog in seconds.
 * @returns {number} - The age of the dog on the given planet in dog years.
 */
function dogYears(planet, age) {
    // Define the orbital periods of the planets in Earth years
    const planets = {
        earth: 1,
        mercury: 0.2408467,
        venus: 0.61519726,
        mars: 1.8808158,
        jupiter: 11.862615,
        saturn: 29.447498,
        uranus: 84.016846,
        neptune: 164.79132,
    };

    // Calculate the age of the dog in Earth years
    let earthAge = (age / 31557600) * 7;

    // Calculate the age of the dog on the given planet in dog years
    let planetAge = earthAge / planets[planet];

    // Round the result to two decimal places
    let roundedAge = Number(planetAge.toFixed(2));

    return roundedAge;
}