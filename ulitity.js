function mutateHero(arrHero)
{
  randomPower(arrHero);
  randomOrigin(arrHero);
  randomSuperName(arrHero);
  return("Introducing the amazing "+arrHero.superName+", with the superhuman ability of "+arrHero.power+". They gained their powers by "+arrHero.originStory);
}

function getRandomInt(min, max)
{
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

function checkArray(arr, errorMessage)
{
  if (typeof arr !== "object")
  {
    console.log('Error '+errorMessage);
    break;
  }
};

function randomSuperName(arrHero)
{
  checkArray(arrHero, "Invalid Input.");
  var superLibs = [];
  if (arrHero.power === "Super Strength")
  {
    superLibs = ["Beefcake","Brick","Power Up","Megaton"];
  }
  else if(arrHero.power === "Super Speed")
  {
    superLibs = ["Zoom","Zephyr","Blink","Godspeed"];
  }
  else if(arrHero.power === "Elasticity")
  {
    superLibs = ["Ricochet","Bungie","Rubber-Bandit","Anaconda"];
  }
  else if(arrHero.power === "Psychic Projection")
  {
    superLibs = ["Master Mind","Psyche","The Human Headache","Brainstem"];
  }
  else if(arrHero.power === "Pyrokinesis")
  {
    superLibs = ["Hellion","Spitfire","Firestorm","Inferno"];
  }
  else if(arrHero.power === "Flight")
  {
    superLibs = ["Killer Bee","Superstar","Floater","Airborne"];
  }
  else if(arrHero.power === "Magical Control")
  {
    superLibs = ["Arcane Ace","The Magnificent Magico","Jazz Hands","Super Sorcerer"];
  }
  else if(arrHero.power === "Cyrokinesis")
  {
    superLibs = ["Tundra","Frostbite","Penguin-Person","Blizzard"];
  }
  else
  {
    superLibs = ["error"];
  }
  var y = getRandomInt(0,3);
  arrHero.superName = superLibs[y];
}

function randomPower(arrHero)
{
  switch(getRandomInt(1,8))
  {
    case 1:
      arrHero.power = "Super Strength";
      break;
    case 2:
      arrHero.power = "Super Speed";
      break;
    case 3:
      arrHero.power = "Elasticity";
      break;
    case 4:
      arrHero.power = "Flight";
      break;
    case 5:
      arrHero.power = "Psychic";
      break;
    case 6:
      arrHero.power = "Pyrokinesis";
      break;
    case 7:
      arrHero.power = "Magic";
      break;
    case 8:
      arrHero.power = "Cyrokinesis";
      break;
    default:
      arrHero.power = "None"
      break;
  }
};

function randomOrigin(arrHero)
{
  var superLibs = [];
  if (arrHero.power === "Super Strength")
  {
    superLibs = ["protein powder","stag beetle","lift several tons with ease","a sorority house of professional bodybuilders"];
  }
  else if(arrHero.power === "Super Speed")
  {
    superLibs = ["energy drink","road runner","outrun the speed of sound","their cranky future selves"];
  }
  else if(arrHero.power === "Elasticity")
  {
    superLibs = ["silly putty","rubber ducky","have noodly arms and bounce around","a mystic yoga master"];
  }
  else if(arrHero.power === "Flight")
  {
    superLibs = ["off-brand diet soda","sentient balloon","float several miles above the ground","a flock of Canadian geese"];
  }
  else if(arrHero.power === "Psychic")
  {
    superLibs = ["psychedelic chemicals","hypno-toad","read other's minds and be horrified by what they see","a web forum of conspiracy theorists"];
  }
  else if(arrHero.power === "Pyrokinesis")
  {
    superLibs = ["chili oil","circus fire-eater","light up a dull party","an adorable family of serial arsonists"];
  }
  else if(arrHero.power === "Magic")
  {
    superLibs = ["pixie-dust","street magician","amaze and astound large crowds","a coven of quirky modern-day witches"];
  }
  else if(arrHero.power === "Cyrokinesis")
  {
    superLibs = ["shaved ice syrup","snow-man","chill out and keep cool","an order of artic ninjas"];
  }
  else
  {
    superLibs = ["error"];
  }
  switch (getRandomInt(1,4))
  {
    case 1:
      arrHero.originStory = "fell into a vat of experimental "+superLibs[0]+".";
      break;
    case 2:
      arrHero.originStory = "biten by a radioactive "+superLibs[1]+".";
      break;
    case 3:
      arrHero.originStory = "born with a fantastic ability to "+superLibs[2]+".";
      break;
    case 4:
      arrHero.originStory = "raised by "+superLibs[3]+".";
      break;
    default:
     arrHero.originStory = "mysterious, complicated, and likely improbable.";
     break;
  }
};
