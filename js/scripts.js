$(document).ready(function() {
  $("#formtri").submit(function(event) {
    const side1 = parseInt($("input#side1").val());
    const side2 = parseInt($("input#side2").val());
    const side3 = parseInt($("input#side3").val());
    //let sum = side1+side2+side3;
    let tsum= side1+side2
   
    if(side1===side2===side3){
      console.log("side")
      $("#Equilateral").show()
    }else {if(side1===side2 || side2===side3 || side3===side1){
          $("#qIsosceles").show()
      }else if(!sum){
        $("#Scalene").show()
      }else if(tsum <= side3){
        $("NOT-a-triangle").show()
     }
    }
    
  
    event.preventDefault();
  });
});
