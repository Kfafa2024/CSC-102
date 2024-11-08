function words()
/* /* function creates a function to run in the form on the HTML page. Remember to link your pages!
var creates a variable named Enter_A_Word, it accesses a SPECIFIC part of the html form named "word"
 and its value */ 
{
    var Enter_A_Word = document.getElementById("word").value;
    /* split string will separate the characters of "Enter_A_Word" and this has to be done BEFORE
    you can reverse the string*/
    var splitStr = Enter_A_Word.split("");

    /*The function words is going to 1st obtain the value of the string "word" by pulling the information
    from the HTML with the .getElementById 
    it will then seperate all of the characters within that value by executing the next variable 
    named splitStr
    Next it will take the split characters and reverse them by creating a new variable called reversStr
    */

    var reverseStr = splitStr.reverse();

    //The next step in the process is to join the characters together again in reversed order//
    //This will be done by creating a variable named joinStr//

    var joinStr = reverseStr.join("");

    /*The process above has just assigned all of the variables for the function, and linked them to their assigned
    names in the html document with the .get.ElementById command. */

    /* The next step in the process is to create parameters in order to provide feedback to the user
    on if the word is a palindrome or not. This can be done using the for loop or by using if/else statements*/

    /* the if statement is to be used if the string is equal to a palindrom
a word that is the same spelled backwords.*/
if (Enter_A_Word == joinStr)
    {
        document.getElementById("wordEntered").innerHTML = "WOW! You did it!";
    }
       /* the else is used for any input into string1 that is not a palindrome.*/
    
       else
       {
        document.getElementById("wordEntered").innerHTML = "hmmm this is not the same spelled backwords. Try again!";

       }

    /* Everything in a function has to remain inside the original set of curly brackets */
    
}