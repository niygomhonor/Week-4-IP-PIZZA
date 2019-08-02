function Order(size,topping,crust) {
    this.size = size;
    this.topping = toppings;
    this.crust=crust;
  }

  Order.prototype.pizzaAmount=function() {
    return (this.size + this.topping + this.crust);
  }

  $(document).ready(function() {

    $("form#orderPizza").submit(function(event) {

        var inputtedSize = $("input#pizza-size").val();
        var inputtedToppings = $("input#top").val();
        var inputtedCrust=$("input#pizza-crust")
        var customer = new Order(inputtedSize,inputtedToppings,);
    })

  })