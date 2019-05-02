var options = ["Rock","Paper","Scissor"]

function CalcWin() 
{
    var x = document.getElementById("choice").value;
    let index = parseInt(Math.random() * 10) % 3; //random number 0 to 2

    switch(x)
    {
        case "Rock"    :
                            if(options[index] == "Rock")
                            {
                                document.getElementById("Output").innerHTML = "Tie!";
                                document.getElementById("Output").style = "height:120pt;weidth:20pt;color:blue;font-size:300%"
                            }
                            else if(options[index] == "Paper")
                            {
                                document.getElementById("Output").innerHTML = "Better luck next time!";
                                document.getElementById("Output").style = "height:120pt;weidth:20pt;color:black;font-size:300%"
                            }
                            else
                            {
                                document.getElementById("Output").innerHTML = "Winner!";
                                document.getElementById("Output").style = "height:120pt;weidth:20pt;color:green;font-size:300%"
                            }
                            break; 
        case "Paper"   :
                            if(options[index] == "Rock")
                            {
                                document.getElementById("Output").innerHTML = "Winner!";
                                document.getElementById("Output").style = "height:120pt;weidth:20pt;color:green;font-size:300%"
                            }
                            else if(options[index] == "Paper")
                            {
                                document.getElementById("Output").innerHTML = "Tie!";
                                document.getElementById("Output").style = "height:120pt;weidth:20pt;color:blue;font-size:300%"
                            }
                            else
                            {
                                document.getElementById("Output").innerHTML = "Better luck next time!";
                                document.getElementById("Output").style = "height:120pt;weidth:20pt;color:black;font-size:300%"
                            }
                            break;
        case "Scissor" :
                            if(options[index] == "Rock")
                            {
                                document.getElementById("Output").innerHTML = "Better luck next time!";
                                document.getElementById("Output").style = "height:120pt;weidth:20pt;color:black;font-size:300%"
                            }
                            else if(options[index] == "Paper")
                            {
                                document.getElementById("Output").innerHTML = "Winner!";
                                document.getElementById("Output").style = "height:120pt;weidth:20pt;color:green;font-size:300%"
                            }
                            else
                            {
                                document.getElementById("Output").innerHTML = "Tie!";
                                document.getElementById("Output").style = "height:120pt;weidth:20pt;color:blue;font-size:300%"
                            }
                            break;
        default: 

    }
    
}