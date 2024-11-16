var change = 200;
//change is used to move the image by 300 either left or down//

var intervalidID = 0;


function intervalStart()
{
    document.getElementById("stopButton").disabled = false;
    // making it false disables the stop button, true enables the start button. //
    document.getElementById("startButton").disabled = true;
    var Image = document.getElementById("Ballet");
    //this is going to pull the image from the html into the function. REMINDER VARIABLES ONLY NEED ONE "="//
    intervalidID = setInterval(function()

    {
        Image.style.left = change + "px";
        Image.style.top = change + "px";
        //This states that the image will move from the top and left by pixels//


        change +=30; // change = change + 30; the change will move by 30 down and right each


    },10000); // this adds in the delay by miliseconds until repeat //


}

function intervalStop()
{
    document.getElementById("stopButton").disabled = true;
    // making it true enables the stop button, false disables the start button. //
    document.getElementById("startButton").disabled = false;
    clearInterval(intervalidID); 
    //clear interval will stop the intervals//
}



