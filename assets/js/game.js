//player info
var playerName = window.prompt("What is your Robot's name?")
var playerHealth = 100;
var playerAttack = 10;

var enemyName = "roberto";

var enemyHealth = 50;

var enemyAttack = 12;


var fight = function() {
    window.alert("Welcome to Robot Gladiators!")
};

fight();
 //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
enemyHealth = enemyHealth - playerAttack
  // Log a resulting message to the console so we know that it worked.
console.log(
    playerName +  " attacked " + enemyName + "." + enemyName + " now has " + enemyHealth + " health remaining "
    
);

if (enemyHealth <= 0) {
    window.alert(enemyName + " Has died!");
}

else{
    window.alert( enemyName + " still has " + enemyHealth + " health left ")
};
  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
playerHealth = playerHealth - enemyAttack
  // Log a resulting message to the console so we know that it worked.
 console.log( enemyName + " attacked " + playerName + "." + playerName + " now has " + playerHealth + " health remaining "
 );
// check to see if the value of the playerHealth variable is greater than 0
if (playerHealth <= 0){
    console.log("Your Player is still alive!")
}
    else {
      window.alert("playerName" + " Has Died ");
    }
  