var Sprites=[]
var s1
var s2
var s3
var s4

function setup() 
{
  createCanvas(400,400);

  //create sprite
  s1=createSprite(200,200,20,20)
  s2=createSprite(100,200,20,20)
  s3=createSprite(300,200,20,20)
  s4=createSprite(100,300,20,20)
  var Sprites=[s1,s2,s3,s4]
  console.log(Sprites[0].position.x)
  console.log(Sprites[0].position.y)

}


function draw() 
{
background(51);
drawSprites()
}

