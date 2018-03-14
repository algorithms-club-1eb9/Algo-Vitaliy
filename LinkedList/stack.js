function Stack()
{
 this.stac=new Array();
 this.pop=function(){
  return this.stac.pop();
 }
 this.push=function(item){
  this.stac.push(item);
 }
}

//If you make the stac Array object private using a closure say then the only operations allowed on Stack are push and pop.

var stack=new Stack();
stack.push("A");
stack.push("B");
stack.push("C");

alert(stack.pop());
alert(stack.pop());
alert(stack.pop());
