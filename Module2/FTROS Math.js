function play()
{
        //function is how I get the play button to execute code//
        var math =     Math.floor(Math.random() * 4) + 1;
        var rose = 3;
        var star = 2;
        var heart = 1;
        
// Again it is easier to remember number vlaues and what I want them to represent
// If they are named. NEVER just a NUMBER!
      

        var emojis = ["🌠","🌺" , "🩷" ];
        /* I honestly just wanted some real practice with an array */

if(math == rose)
        // if the random number generated is 3 it will pull the hibiscus "The Rose of Sharon"
// from the emoji array as a result and the player wins
{
    
        document.write("You found South Koreas National flower! The Rose of Sharon you win!" + emojis[1]);
       
             
        
        
}
else if ((math != star) && (math != rose))
        // if the random number generated is not 3 or 2 it will pull the heart emoji
// from the emoji array as a result and the player is directed to try again
        {
                document.write("Keep following your heart! Refresh the page and try again!" + emojis[2]); 
        }

else 
//   // if the random number generated is anything else it will pull the star emoji
// from the emoji array as a result and the player is directed to try again
{
       
        document.write("Keep aiming for the stars! Refresh the page and try again!" + emojis[0]);
}




}