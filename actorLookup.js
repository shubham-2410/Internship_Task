// Define actors and movies data
const actorsData = {
    "Ranveer Singh": ["Simmba", "83", "Padmaavat", "Bajirao Mastani"],
    "Amitabh Bachchan": ["Sholay", "Deewaar", "Piku", "Don"],
    "Shah Rukh Khan": ["Dilwale Dulhania Le Jayenge", "My Name Is Khan", "Chennai Express", "Don"],
    "Aishwarya Rai": ["Devdas", "Jodhaa Akbar", "Guru"],
    "Rajkummar Rao": ["Newton", "Stree", "Trapped"],
    "Deepika Padukone": ["Padmaavat", "Bajirao Mastani", "Chennai Express"],
};

/**
 * Finds actors who acted in a given movie.
 * @param {string} movieName - The name of the movie to search for.
 * @returns {Array|string} - An array of actors who acted in the movie, or a message if no actors are found.
 */
const findActorsByMovieName = (movieName) => {
    const actors = [];
    for (const [actor, movies] of Object.entries(actorsData)) {
        if (movies.includes(movieName)) {
            actors.push(actor);
        }
    }
    return actors.length > 0 ? actors : "No actors found for the movie.";
};

/**
 * Finds movies in which a given actor acted.
 * @param {string} actorName - The name of the actor to search for.
 * @returns {Array|string} - An array of movies in which the actor acted, or a message if no movies are found.
 */
const findMoviesByActorName = (actorName) => {
    const movies = actorsData[actorName];
    return movies ? movies : "No movies found for the actor.";
};

// Test cases

// for actors
console.log("Actors in 'Padmaavat':", findActorsByMovieName("Padmaavat"));
console.log("Actors in 'Sholay':", findActorsByMovieName("Sholay"));
console.log("Actors in 'Piku':", findActorsByMovieName("Piku"));
console.log("Actors in 'XYZ':", findActorsByMovieName("XYZ")); // No actors found for the movie

// for movies
console.log("Movies by 'Amitabh Bachchan':", findMoviesByActorName("Amitabh Bachchan"));
console.log("Movies by 'Shah Rukh Khan':", findMoviesByActorName("Shah Rukh Khan"));
console.log("Movies by 'Aishwarya Rai':", findMoviesByActorName("Aishwarya Rai"));
console.log("Movies by 'Salman Khan':", findMoviesByActorName("Salman Khan")); // No movies found for the actor
