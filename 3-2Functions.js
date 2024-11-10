function info()
// Above is the name of my function. //
{
    

    var Combined = (document.getElementById("name1").value + "  " + document.getElementById("name2").value);
    /* Here I made a variable named Combined. Essentially it combines the first and last name entered by 
    the user by pulling their values from the HTML page by using the assigned name ("name1/name2") as an argument. */
    
   var Zip = (document.getElementById("Zip1").value);
   /* I made the zip code a variable for this function through calling it by its name on the HTML page
   I did this because when I decided to write my code I thought assigning the values of the user input
   would make it easier to execute the mathematical functions within this code. */

   var ZipCount = Zip.length;
    
   /* Here I assigned the length of the zip code to be a variable named ZipCount. 
   Originally I used the let instead of var for variables that I thought 
   meant it locked in their values but after reading the chapters in Module 4 I realized that let will only work within one code block
   so I changed it to var for this function. */

   var Rule = 5;
    /* I made a variable named rule with the value of 5 for a reason
    to me its easier to remember a named value rather than just a number. */

    var count = Combined.length;
    /* I made a variable named count that will pull the value of the combined length of the 1st and last name entered
    in order to use it in my if/else if/else functions. Basically using words to replace number values
    so I remember why each number value is there. */
   
    var max = 21;
    /* The max variable is there to make sure that the combined length of the first and last names
    does not exceed the value of 21 in JS terms and 20 in regular terms. */

   if (count < max) && (ZipCount == Rule)
    /* In order for a password to be issued to the user they must meet all requirements stated in the above if arguments
   count MUST be less than max AND Zipcount MUST be equal to Rule. */
{
    document.getElementById("Password").innerHTML = "Amazing!";
    /* Here the Password value on the page will change to "Amazing!" which is granting them a password because
    they have met all the conditions required as set in the if statements arguments. */
}
else if (count > max) && (ZipCount == Rule)
    /* For my else if statement IF the count exceeds the max AND the Zipcount is EXACTLY equal to the Rule value 
    It means not all of the parameters have been met for the user to obtain the password. */
{
    console.warn("Name exceeds 20 characters. Please refresh the page and try again.");
    /* The assignment has stated to warn the user. In the ebook this is done on page 133 by using the console.warn command. */
    
}
else (count < max) && (Zipcount != Rule)
/* In my else statment the user meets the max count requirements but does not meet the Zipcount Rule. */
{
console.warn("Zip Code must be 5 characters. Please refresh the page and try again.");
/* If the parameters stated in the else statements arguments are true. The user will recieve a warning that the zipcode count is off. */
}   
   


    
   

}
