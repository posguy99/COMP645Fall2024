
// week 4 js file

console.log("JS loaded")


// Variables //

let elFmSaveMovie   = document.querySelector("#fmSaveMovie"); //form
let elFmGetMovie    = document.querySelector("#fmGetMovie"); // form
let elDvShowMovie   = document.querySelector("#dvShowMovie"); //div
let arrMovies       = []; // Array
console.log(arrMovies);
console.log(elFmSaveMovie);




// Functions //

// define the meaning of Movie(Object)
function Movie(mTitle, mYear, mDirector, mActors){
    this.mTitle     = mTitle;
    this.mYear      = mYear;
    this.mDirector  = mDirector;
    this.mActors    = mActors;

    this.getAge = function(){
        // get current date
        let tmpCurrentDate = new Date();
        // calculate age and show it (return it)
        return tmpCurrentDate.getFullYear() - this.mYear;
    }; // END .getAge()
}; // END Album()

// define what happens when save is pressed
function fnMovieSave(event){
    event.preventDefault();  // stop default refresh
    console.log("fnMovieSave() is running");
    // now read the inputs
    let valInSaveMovie      = document.querySelector("#inSaveMovie").value;
    let valInSaveYear       = document.querySelector("#inSaveYear").value;
    let valInSaveDirector   = document.querySelector("#inSaveDirector").value;
    let valInSaveActors     = document.querySelector("#inSaveActors").value;
    console.log(valInSaveMovie, valInSaveYear, valInSaveDirector, valInSaveActors);

    // bundle up the data
    let tmpMovie = new Movie(valInSaveMovie, valInSaveYear, valInSaveDirector, valInSaveActors);
    console.log("The bundled data", tmpMovie)
    console.log("The age of the movie: ", tmpMovie.getAge());

    // save this movie to the array
    arrMovies.push(tmpMovie);
    console.log("All movies so far: ", arrMovies)

    window.alert("Movie saved.");
    elFmSaveMovie.reset();
}; //END fnMovieSave()

// get a random movie and display on screen
function fnMovieGet(event){
    event.preventDefault();  // stop default refresh
    console.log("fnMovieGet() is running");
    // check to see if we have data
    if(!arrMovies.length){
        // no data
        console.log("No data yet");
        window.alert("Please save a movie.")
    }else{
        // data
        console.log("We have data");
        // randomly pick a movie
        let tmpRandomMovieNumber = Math.floor(Math.random() * arrMovies.length);
        console.log("Picked: ", arrMovies[tmpRandomMovieNumber]);
        // fill in the div with the data
        elDvShowMovie.innerHTML = "<p>Movie Title: "        + arrMovies[tmpRandomMovieNumber].mTitle + 
                                    "<br>Release Year: "    + arrMovies[tmpRandomMovieNumber].mYear +
                                    "<br>Director: "        + arrMovies[tmpRandomMovieNumber].mDirector + 
                                    "<br>Actors: "          + arrMovies[tmpRandomMovieNumber].mActors +
                                    "</p>";
    }; // END if()
}; //END fnMovieGet()





// Events //

elFmSaveMovie.addEventListener("submit", function(event){ fnMovieSave(event);});
elFmGetMovie.addEventListener("submit", function(event){ fnMovieGet(event);});





