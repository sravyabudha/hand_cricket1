	var userRuns;
	var computerRuns;
	var yourScore=0;
	var computerScore=0;
	var x=true;
	var b=0;
	var s=0;

function setUserRuns(runs)
{
	if(b==0)
	{
		document.getElementById("innings").innerHTML=1;
		userRuns=runs;
		calculateScore();
	}
	else
	{
		document.getElementById("innings").innerHTML=2;
		calculateCPUScore();
	}
	document.getElementById("userTotalScore").innerHTML=yourScore;
	document.getElementById("compTotalScore").innerHTML=computerScore;
}


function calculateScore()
{
	var computerchoice=Math.random()
	if((computerchoice>=0)&&(computerchoice<0.15))
	{
		computerRuns=0;
	}
	else if((computerchoice>=0.15)&&(computerchoice<0.30))
	{
		computerRuns=1;
	}
	else if((computerchoice>=0.30)&&(computerchoice<0.45))
	{
		computerRuns=2;
	}
	else if((computerchoice>=0.45)&&(computerchoice<0.55))
	{
		computerRuns=3;
	}
	else if((computerchoice>=0.55)&&(computerchoice<0.70))
	{
		computerRuns=4;
	}
	else if((computerchoice>=0.70)&&(computerchoice<0.85))
	{
		computerRuns=5;
	}
	else
	{
		computerRuns=6;
	}

	/*if(userRuns==computerRuns)
	{
		console.log("Run out "+ userRuns+computerRuns);
	}
	else
	{
		console.log("Keep playing "+ userRuns+computerRuns);
	}*/

	document.getElementById("compScore").innerHTML=computerRuns;
	document.getElementById("userScore").innerHTML=userRuns;

	
	if(x)
	{
		if(userRuns!=computerRuns)
		{			
			yourScore=yourScore+userRuns;			
		}
		else
		{
			alert("You are out"+yourScore);

			b=1;
		}
	}

}
	
function displayInstructions()
{
	alert("These are the instrcutions which are to be followed for playing the hand cricket game.Enter any number between 1-6 and computer gives a random number in return, if the two scores becomes equal, then you will get out if you are batting and vice-versa");
}
function getUserOption()
{
	prompt("For Batting press 0 and for Bowling press 1");
	if (s==0)
	{
		alert("Batting");
		s=1;
	}
	else
	{
		alert("Bowling");
	}
}
function calculateCPUScore()
{
	var computerchoice=Math.random()
	if((computerchoice>=0)&&(computerchoice<0.15))
	{
		computerRuns=0;
	}
	else if((computerchoice>=0.15)&&(computerchoice<0.30))
	{
		computerRuns=1;
	}
	else if((computerchoice>=0.30)&&(computerchoice<0.45))
	{
		computerRuns=2;
	}
	else if((computerchoice>=0.45)&&(computerchoice<0.55))
	{
		computerRuns=3;
	}
	else if((computerchoice>=0.55)&&(computerchoice<0.70))
	{
		computerRuns=4;
	}
	else if((computerchoice>=0.70)&&(computerchoice<0.85))
	{
		computerRuns=5;
	}
	else
	{
		computerRuns=6;
	}
	document.getElementById("compScore").innerHTML=computerRuns;
	document.getElementById("userScore").innerHTML=userRuns;

	if(computerRuns!=userRuns)
	{
		computerScore=computerScore+computerRuns;
	}
	else if(computerRuns==userRuns)
	{
		alert("Computer is out"+computerScore);
		b=0;	
	

	if(computerScore>userScore)

		{
		alert("Computer Wins");
		}
	else
		{
			alert("User Wins");
		}
	}
}