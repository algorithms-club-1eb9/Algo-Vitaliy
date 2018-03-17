function Queue()
{ 
 this.stac=new Array();
 this.dequeue=function(){
  return this.stac.pop(); 
 } 
 this.enqueue=function(item){
  this.stac.unshift(item);
 }
}

var Q=new Queue();
Q.enqueue("A");
Q.enqueue("B");
Q.enqueue("C");

alert(Q.dequeue());
alert(Q.dequeue());
alert(Q.dequeue());