$(document).ready(function () {

  
  
    //flag 
  
  
    $('.ui.dropdown')
      .dropdown();
  
    $("#country").change(function () {
      if ($(this).val() == 'ma') {
        $('#state').html('  <option value="1">State1</option><option value="2">State2</option>');
      } else if ($(this).val() == 'ps') {
        $('#state').html('  <option value="1">State3</option><option value="2">State4</option>');
      } else if ($(this).val() == 'tr') {
        $('#state').html('  <option value="1">State5</option><option value="2">State6</option>');
      } else if ($(this).val() == 'us') {
        $('#state').html('  <option value="1">State7</option><option value="2">State8</option>');
      } else {
        $('#state').html('');
      }
    });
  
  
  
    //usd 
  
    
    let europrice = document.querySelector("#nav-up  ._usd .europrice");
  
    europrice.addEventListener("click", function () {
        let euroPriceText = this.firstElementChild.innerText

        this.parentNode.previousElementSibling.innerText = euroPriceText
    })

    let usdprice = document.querySelector("#nav-up ._usd .usdprice");

    usdprice.addEventListener("click", function () {
        let usdPriceText = this.firstElementChild.innerText

        this.parentNode.previousElementSibling.innerText = usdPriceText
    })
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  });
  
  
  //usd
  

  