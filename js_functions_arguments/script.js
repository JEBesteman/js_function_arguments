//geen argument
/* const paintWall = function () {
    console.log("The wall has been painted red");
}
paintWall(); */

//single arguments
/* const paintWall = function (color) {
    console.log("The wall has been painted " + color);
}
paintWall("green");
 */

//geen argumenten invullen en calling => undefined


//multiple arguments ==> backticks gebruiken!!
const paintWall = function (wallLocation, color) {
    console.log(`The ` + wallLocation + ` wall has been painted ` + color);
}

paintWall("north", "orange");
paintWall("south-east", "grey");

//multiple arguments nu met string interpolation!!
const paintWall2 = function (wallLocation, color) {
    console.log(`The ${wallLocation} wall has been painted ${color}`);  
}

paintWall2("north", "orange");
paintWall2("south-east", "grey");

//order of arguments
//maakt niet echt uit, als de goede argumenten/value met elkaar gekoppeld zijn.

//in function definitie switch ==> dan koppelt hij ze verkeerd aan elkaar kleur verf = wall lokatie nu
// bij calling The orange wall has been painted north
