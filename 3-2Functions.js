function info()
{
    

    var Combined = (document.getElementById("name1").value + "  " + document.getElementById("name2").value);
    
    
   var Zip = (document.getElementById("Zip1").value);

   let ZipCount = Zip.length;

   let Rule = 5;


    let count = Combined.length;
   
    let max = 21;

   if (count < max && ZipCount == Rule);
{
    document.getElementById("Password").innerHTML = "Amazing!";
}
else if (count > max && ZipCount == Rule)
{
    console.warn("name exceeds 20 characters. Please refresh the page and try again.");
    
}
else (count <max && Zipcount > || < Rule)
console.warn("Zip Code must be 5 characters. Please refresh the page and try again.");
    
   

}