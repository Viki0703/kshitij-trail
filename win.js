function enter()
{
    clear();
    textAlign(CENTER);
    
    textSize(24);
    text("You win!", width / 2, 300);
    
    textSize(14);
    text("... in " + PublicVars.Arguments + " moves!", width / 2, 350 );
}

function mouseClicked()
{
    showScene("Game");
}