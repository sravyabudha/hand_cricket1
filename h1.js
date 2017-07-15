	var userRuns;
	var computerRuns;
	var yourScore=0;
	var computerScore=0;
	var y=0;
function setUserRuns(runs)
{
	userRuns=runs;
	if(y==0)
	{
		document.getElementById("innings").innerHTML=1;
		calculateScore();
		document.getElementById("userTotalScore").innerHTML=yourScore;
	}
	else
	{
			document.getElementById("innings").innerHTML=2;
			calculateCPUScore();
			document.getElementById("compTotalScore").innerHTML=computerScore;
			
	}
	
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
	document.getElementById("compScore").innerHTML=computerRuns;
	document.getElementById("userScore").innerHTML=userRuns;
	if(userRuns!=computerRuns)
	{
				
		yourScore=yourScore+userRuns;
	}		
	else
	{
		y=1;
		alert("You are out");
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
		alert("Computer is out");
		y=0;
		if(computerScore>yourScore)
		{
			alert("Computer Wins");
		}
		else
		{
			alert("You Win");
		}
	}
}
		