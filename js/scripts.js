// //busines logic
function Ticket(run, time, age) {
  this.run = run;
  this.time = time;
  this.age = age;
  this.price="";
}

Ticket.prototype.cost= function(){
  //i think that ticketprice should calculate a price and then set this's price to the result
  //of those calculations and then return it.
  return this.run - this.time - this.age;
}




 $(document).ready(function(){
   $("form#movies").submit(function(event){
     event.preventDefault();

     var run=parseInt($("#run").val());
     var time=parseInt($("#time").val());
     var age=parseInt($("#age").val());
     var newTicket= new Ticket(run,time,age);
     $("#price").text(newTicket.cost());
   });

 });
