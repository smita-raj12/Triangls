function add(side1, side2) {
  return side1 + side2;
}

$(document).ready(function() {
  $("#formtri").submit(function(event) {
    const side1 = parseInt($("input#side1").val());
    const side2 = parseInt($("input#side2").val());
    const side3 = parseInt($("input#side3").val());
    //let sum = side1+side2+side3;
    const result = add(side1, side2);
    
    if(side1===side2 && side2===side3 && side3===side1){
      console.log("side")
      $("#Equilateral").show()
    } else if(side1===side2 || side2===side3 || side3!==side1){
          $("#qIsosceles").show()
    }else if(result!==side3){

        $("#Scalene").show()
      }else if(result <= side3){
        $("NOT-a-triangle").show()
     }
    
      event.preventDefault();
  });
});
