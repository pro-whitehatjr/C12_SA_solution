var nums = [1,2,3,4,5];

function array_square(a)
{
  for(var i = 0; i<a.length; i++)
  {
    a[i] = a[i]*a[i];
  }
  return a;
}

function setup() {
  createCanvas(400, 400);
  var result = array_square(nums);
  console.log(result)
 
}

function draw() {
  background(220);
}