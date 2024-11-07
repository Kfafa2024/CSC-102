function = check input(){
/*In JS function names do NOT need parenthesis
A JS function works inside of curly brackets.
The function parameters will take the values from the first input
This is done by using the get element command, "input1" from the html file is placed
in the argument values as below and at the end of this line we specify for 
JS to obtain its value */
getElementById("status").innerHTML = "";
/* The above get element specifies that the status shouls start with nothing. This
is specified by the empty "" in the command*/

first input = document.getElementById("input1").value;
/* Error messages should only be used for when something is incorrect.
*/

if(!/^[a-zA-Z0-9]+$\.test(firstInput))
/* the if function is testing if the users input is alphanumeric
because this is another function inside of the first one we need to add curly
brackets so that this follows its specified parameters.
*/
{
getElementById("status").innerHTML = "enter only alpha - numeric";
/*.innerHTML links this function to a specific part 
of the HTML document. */
}

/* Below a second function is created to assess if the values of input 2 are correct
The data entered should only be numbers between 1 and 10. */
second input = document.getElementById("input2").value;
/* we specify the parameters that must be met by the user as arguments at the beginning of the 
if statement.*/
if (second input = >1 || >10)
{
    getElementById("status").innerHTML += "          not in range 1-10";
    /* This specifies how the page will respond if the user does not stay within the parameters
    The += means that if the first error message of enter only alpha numeric has been
    recieved by the user, then the not in range 1-10 will print on screen as a second response
    to user input */
}

}