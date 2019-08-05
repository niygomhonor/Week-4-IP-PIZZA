

function Order(size,topping,crust,number,total) {
    this.size = size;
    this.topping =topping;
    this.crust=crust;
    this.number=number;
    this.total=total;
  }

 

  Order.prototype.findAmount=function() {
    return totalAmount;
  }
//   ++User interface++++++++++++++++++++++++++++++++++++++++++++

  $(document).ready(function() {
//*********************************************Add new order*************************************** */

$("#add-order").click(function(){

    $("#new-orders").append('<div class="form-group">'+
    '<label for="century" ><b>Choose your favorite toppings:</b> <br>'+

    
        '<select class="form-control" id="top">'+
        ' <option value=""></option>'+
        '<option value="egg" id="top">Bacon </option>'+
        '<option value="bacon" id="top"> onions</option>'+
        '<option value="beef" id="top">Beef-mince</option>'+
        '<option value="pineapple" id="top"> pineapple </option>'+
        '<option value="ham" id="top"> mushroom</option>'+
        '<option value="goat" id="top">Chicken</option>'+
        '<option value="chicken" id="top"> tomato</option>'+
        '<option value="samali" id="top">mozzarella</option> </select></label><br>'+
    '</div>'+

    '<div class="form-group">'+
    '<label for="crust" ><b>Select Crust:</b><br>'+
        '<select name="" class="form-control" id="Pizza-crusts">'+
        ' <option value=""></option>'+
    '<option value="crust" id="pizza-crust"> Custom </option>'+
'<option value="" id="pizza-crust">thin </option>'+
'<option value="" id="pizza-crust">thick </option>'+
'<option value="" id="pizza-crust">deep </option>'+
'<option value="" id="pizza-crust">flatbread </option>'+
'<option value="" id="pizza-crust">stuffed </option>'+
'</select>'+
'</label><br>'+
    '</div>'+
    '<div class="form-group">'+
    '<label for="year" ><b>Select Pizza Size</b><br>'+
        '<select name="" class="form-control" id="pizza-size"><br>'+
        ' <option value=""></option>'+
        '<option value="pizza-size" id="pizza-size">Small</option>'+
        '<option value="pizza-size" id="pizza-size">Medium</option>'+
        '<option value="pizza-size" id="pizza-size">Large</option>'+
    '</select></label><br>'+
    '</div>'+
    '<label for="year" ><b>How many do you need?</b> <input name="day" id="number-pizza" type="number" placeholder="Number of Pizza" maxlength="10"></label><br>')
})

    $("form#orderPizza").submit(function(event) {
        event.preventDefault();
        var inputtedSize = $("#pizza-size option:selected").text();
        var inputtedToppings = $("#top option:selected").text();
        var inputtedCrust=$("#Pizza-crusts option:selected").text();
        var inputtedNumber=$("input#number-pizza").val();
        var totalAmount=0;
        var customer = new Order(inputtedSize,inputtedToppings,inputtedCrust,inputtedNumber,totalAmount);

       
        
// ***************Delivery button******************/
        $("#delivery").click(function(){
          $(".orders-output").show();
        })
// submit person's details to delivery 

$("#sub").click(function(){

  alert("Thank your for Ordering our Pizza. We are delivering it in few seconds!")
})
        $("#check").click (function(){
    var pizzaTopping=$("#top").val();
var pizzaCrust=$("#Pizza-crusts").val();
var pizzaSize=$("#pizza-size").val();
var pizzaNumber=$("#number-pizza").val();

    ///function on orders

    
   var totalAmount1=0,totalAmount2=0,totalAmount3=0;
  
//************************Swich for toppings**************************************** */
    switch (pizzaTopping) {
          case pizzaTopping="egg":
           totalAmount1=totalAmount1+500
          break;
            case pizzaTopping="bacon":
           totalAmount1=totalAmount1+1000
            break;
            case pizzaTopping="beef":
           totalAmount1=totalAmount1+400
            break;
            case pizzaTopping="pineapple":
           totalAmount1=totalAmount1+500
            break;
            case pizzaTopping="ham ":
           totalAmount1=totalAmount1+400
            break;
            case pizzaTopping="goat ":
           totalAmount1=totalAmount1+500
            break;
            case pizzaTopping="chicken ":
           totalAmount1=totalAmount1+500
            break;
            case pizzaTopping="samali":
           totalAmount1=totalAmount1+500
            break;
            
        
    }
    
//******************************SwiTch for Size********************************** */
  
  switch (pizzaSize) {
    case pizzaSize="Small":
     totalAmount2=totalAmount2+2000;
    break;
    case pizzaSize="medium":
     totalAmount2=totalAmount2+3000;
    break;
    case pizzaSize="large":
     totalAmount2=totalAmount2+4000;
    break;
      
  
}
switch (pizzaCrust) {
  case pizzaCrust="custom":
  totalAmount3=totalAmount3+400;
  break;
  case pizzaCrust="thick":
    totalAmount3=totalAmount3+600;
  break;
  case pizzaCrust="thin":
      totalAmount3=totalAmount3+700;
  break;
  case pizzaCrust="deep":
        totalAmount3=totalAmount3+400;
  break;
  case pizzaCrust="flatbread":
          totalAmount3=totalAmount3+400;
  break;
  case pizzaCrust="stuffed":
      totalAmount3=totalAmount3+400;
  break;
}

  
 totalAmount=(totalAmount+totalAmount1+totalAmount2+totalAmount3)*inputtedNumber;

      alert(" The total amount to be paid"+totalAmount);
$("#ordersP").show();
$(".order-topping").text(customer.topping);
$(".order-crust").text(customer.crust);
$(".order-size").text(customer.size);
 $(".order-number").text(customer.number);
 $(".order-tot").text(totalAmount);
 confirm("Reload page to order again");
 })
        // *****Reset*******//
      $("#myname").val("");
      $("#pizza-size option:selected").text("");
      $("#top option:selected").text("");
      $("#Pizza-crusts option:selected").text("");
       $("input#number-pizza").val(""); 
      
       
    });
  });





////////////////////////////////////////////////////////////////////////////////////////////////////Select Your favorite Crust:Select Your favorite Crust:Select Your favorite Crust:Select Your favorite Crust:




