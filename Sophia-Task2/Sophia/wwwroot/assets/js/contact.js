$(document).ready(function () {

    var swiper = new Swiper(".mySwipers", {
      loop: true,
      slidesPerView: 4,
      spaceBetween: 30,
      centeredSlides: true,
      pagination: {
        el: ".swiper-paginations",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  
  
    });
  
  
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
  
  
  
    const tabLink = document.querySelectorAll(".tab-menu-link");
    const tabContent = document.querySelectorAll(".tab-bar-content");
  
    tabLink.forEach((item) => {
      item.addEventListener("click", activeTab);
    });
  
    function activeTab(item) {
      const btnTarget = item.currentTarget;
      const content = btnTarget.dataset.content;
  
      tabContent.forEach((item) => {
        item.classList.remove("is-active");
      });
  
      tabLink.forEach((item) => {
        item.classList.remove("is-active");
      });
  
      document.querySelector("#" + content).classList.add("is-active");
      btnTarget.classList.add("is-active");
    }
  
  
  
    let getBasketProductList = document.querySelector(".basket-number");
  
  
  
    let tableicon = document.querySelector(".info-basket");
  
  
  
    $(getBasketProductList).click(function () {
      $(tableicon).toggle();
  
  
    });
  
  
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
  
  
  
  
  //basket
  
  let cardBtns = document.querySelectorAll("#carousel-product .button");
  
  
  let products = [];
  
  if (localStorage.getItem("basket") != null) {
    products = JSON.parse(localStorage.getItem("basket"));
  }
  
  
  
  
  
  cardBtns.forEach(btn => {
    btn.addEventListener("click", function (e) {
  
      // e.preventDefault();
      let prodoctImage =
        this.parentNode.parentNode.previousElementSibling.firstElementChild.firstElementChild.firstElementChild.getAttribute("src");
  
  
  
      let productName =
        this.parentNode.parentNode.firstElementChild.lastElementChild.innerText;
  
  
      let productPrice =
        parseInt(this.parentNode.previousElementSibling.previousElementSibling.innerText);
  
      let productId =
        parseInt(this.parentNode.parentNode.parentNode.parentNode.getAttribute("data-id"));
  
      let existProduct = products.find(m => m.id == productId);
  
      if (existProduct != undefined) {
        existProduct.count += 1;
  
  
      } else {
  
        products.push({
  
          id: productId,
          name: productName,
          img: prodoctImage,
  
          price: productPrice,
          count: 1,
  
  
        })
      }
  
  
  
      getBasketPrice(products);
      localStorage.setItem("basket", JSON.stringify(products));
  
      itemCountTotal(products);
      getBasketDatas();
      // getBasketCount(products);
  
  
    })
  
  
  });
  
  
  function getBasketPrice(arr) {
    let sum = 0;
    for (const item of arr) {
      sum += item.price * item.count
    }
  
    document.querySelector("._total-price").innerText = "$" + sum + ".00"
  
    document.querySelector(".total-price-basket").innerText = "$" + sum + ".00"
  
  }
  
  getBasketPrice(products)
  
  
  
  let totalItem = document.querySelector(".item-count")
  
  
  itemCountTotal(products);
  
  function itemCountTotal(products) {
  
    totalItem.innerText = products.length
    document.querySelector("sup").innerText = products.length
  
  }
  
  //basket add
  
  let tableBody = document.querySelector("tbody")
  
  
  
  getBasketDatas()
  
  
  function getBasketDatas() {
  
    if (products != null) {
  
      tableBody.innerHTML = "";
  
      for (const product of products) {
  
  
        tableBody.innerHTML += `
  
        <tr data-id ="${product.id}">
  
  
        <td class ="name">${product.name}</td>
  
  
  
        <td><span class="minus"></span><span></span><span
  class="plus"></span></td>
  
        <td class ="price">${product.count}X${product.price}</td>
  
  
  
  
        <td>
  
  
        <i class="fa-solid fa-trash delete-btn" style="color: black;
  cursor: pointer;"></i>
        </td>
  
  
  
        </tr>`
  
  
      }
  
      // itemCountTotal(products);
      // getBasketCount(products);
      // getBasketPrice(products);
  
  
      function deleteProduct(id) {
        products = products.filter(m => m.id != id);
        localStorage.setItem("basket", JSON.stringify(products));
  
      }
  
      let deleteIcons = document.querySelectorAll(".delete-btn");
  
  
      deleteIcons.forEach(icon => {
  
        icon.addEventListener("click", function () {
  
          let id = parseInt(this.parentNode.parentNode.getAttribute("data-id"));
          deleteProduct(id);
          this.parentNode.parentNode.remove();
          if (products.length == 0) {
            localStorage.removeItem("basket")
            // showAlert();
  
          }
  
          // getBasketCount(products);
          getBasketPrice(products);
          itemCountTotal(products);
  
  
        })
      });
  
  
    } else {
      // showAlert();
    }
  
  
  }