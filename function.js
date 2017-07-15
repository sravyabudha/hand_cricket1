function computerinput(){
	var computerchoice=math.random();
	var computerruns;
	if((computerchoice>=0)&&(computerchoice<0.15))
	{
		computerruns=0;
	}
	else if((computerchoice>=0.15)&&(computerchoice<0.30))
	{
		computerruns=1;
	}
	else if((computerchoice>=0.30)&&(computerchoice<0.45))
	{
		computerruns=2;
	}
	else if((computerchoice>=0.45)&&(computerchoice<0.55))
	{
		computerruns=3;
	}
	else if((computerchoice>=0.55)&&(computerchoice<0.70))
	{
		computerruns=4;
	}
	else if((computerchoice>=0.70)&&(computerchoice<0.85))
	{
		computerruns=5;
	}
	else if((computerchoice>=0.85)&&(computerchoice<1))
	{
		computerruns=6;
	}
}