/* Name:Ong Jia Xi
   Class:DCITP/1A/07/FT
   Admin no.:2318187 */

   /*  Initializing arrays for the movies with all their properties */
movie1 = ["Black Panther: Wakanda Forever", ["Adventure", "Action", "Drama", "Fantasy", "Sci-Fi", "Thriller"], 161, "11 Nov 2022", [9, 42]]
movie2 = ["Avatar: The Way of Water", ["Adventure", "Sci-Fi"], 192, "16 Dec 2022", [4, 15]]
movie3 = ["Fast X", ["Crime", "Action", "Mystery", "Thriller"], 43, "19 May 2023", [28, 60]]
movie4 = ["Ant-Man and the Wasp: Quantumania", ["Adventure", "Action"], 120, "16 Feb 2023", [18, 80]]
movie5 = ["M3GAN", ["Horror", "Mystery", "Thriller"], 102, "6 Jan 2023", [20, 70]]

/* Creating an array to store all movie arrays */
movieList = [movie1, movie2, movie3, movie4, movie5]

let mins,hours,time;

const menuOptions =[
    "Display All Movies",
    "Coming Soon",
    "Coming Soon",
    "Coming Soon",
    "Coming Soon",
    "Exit",
];
/* const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; */
console.log("Welcome to Silver Vintage Movie Review Program !\n")
var input = require('readline-sync');
var userName = input.question("Hi There! Please enter your name here: ");

let userInput="";
while (userInput>6||userInput<1||userInput!=6)
{console.log("\nHi " + userName + ",please select your choice of movie");
    for (let i=0;i<menuOptions.length; i++){
    console.log("\t"+(i+1)+". "+menuOptions[i]);
    }
     userInput = input.question("\t>>");
    if (userInput >= 2 && userInput <= 5){
    console.log("\nSorry, Working In Progress !");
    }
    
   else if(userInput==1) {for (let x=0;x<5;x++){
    console.log("\nName\t\t : "+ movieList[x][0])
    console.log("Genres\t\t : " + movieList[x][1])
    time="";
    mins = movieList[x][2]%60;
        hours = Math.floor(movieList[x][2]/60);
        if(hours>0)
        time+=hours+"h";
        if(mins>0)
        time+=" "+mins+"m";
    console.log("Running Time\t : "+ time)
    console.log("Release Date\t : " + movieList[x][3])
    var ratings = Math.round((movieList[x][4][1]/movieList[x][4][0])*10)/10
    console.log("Ratings\t\t : "+ ratings+" ("+movieList[x][4][0]+" voters ) ");}
    }
  else if(userInput != menuOptions.length) {
    console.log("\nPlease Enter A Valid Input.");
    }
}
console.log("\nThank you for using Silver Vintage Movie Review Program & Goodbye !")