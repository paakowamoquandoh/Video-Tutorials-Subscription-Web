// shop variables
const productArea = document.getElementById("mainProArea");
const cartButton = document.querySelector(".cartTransBtn");
const closeCartBtn = document.querySelector(".closeCart");
const ClearCartBtn = document.querySelector(".cartFooterButton");
const cartArea = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cartOverlay");

const cartItemsQuantity = document.getElementById("itemsUpdate");
const mobileItemsQuantity = document.getElementById("mobileItemsUpdate");
const cartTotal = document.querySelector(".ItemsTotal");
const overlayCartContent = document.querySelector(".overlayCartContent");

//cart
let cartBasket = [];

//add Buttons
let addButtons = [];

function displayCartOverlay() {
  cartOverlay.classList.toggle("transparentBack");
  cartArea.classList.toggle("showCart");
}

let durationButton = document.getElementById("durationSortBtn");
let durationOptions = document.getElementsByClassName("sortOptions")[0];

durationButton.addEventListener("click", () => {
  durationOptions.classList.toggle("sortOptions_active");
});

//...
let newUploads = document.getElementById("newest");
let lowestPrice = document.getElementById("lowPrice");
let highestPrice = document.getElementById("highest");
let straightOnly = document.getElementById("straight");
let shortOnly = document.getElementById("short");
let curvyOnly = document.getElementById("curvy");
let wavy = document.getElementById("wavy");
let longOnly = document.getElementById("long");
let wigOnly = document.getElementById("wig");
let extensionOnly = document.getElementById("extension");
let othersOnly = document.getElementById("others");

straightOnly.addEventListener("click", async () => {
  straightOnly.classList.toggle("i_active");
  straightOnly.classList.toggle("bi-toggle2-off");
  straightOnly.classList.toggle("bi-toggle2-on");
  // straightOnly.title = "straightOff";

  const products = await new Products().getProducts();
  const ui = new UI();
  ui.filterProducts(products, "straight");
});

const short = async () => {
  shortOnly.classList.toggle("i_active");
  shortOnly.classList.toggle("bi-toggle2-off");
  shortOnly.classList.toggle("bi-toggle2-on");
  // shortOnly.title = "clothesOff";

  const products = await new Products().getProducts();
  const ui = new UI();
  ui.filterProducts(products, "short");
};

const curvy = async () => {
  curvyOnly.classList.toggle("i_active");
  curvyOnly.classList.toggle("bi-toggle2-off");
  curvyOnly.classList.toggle("bi-toggle2-on");
  // curvyOnly.title = "clothesOff";

  const products = await new Products().getProducts();
  const ui = new UI();
  ui.filterProducts(products, "curvy");
};

const wavyOnly = async () => {
  wavy.classList.toggle("i_active");
  wavy.classList.toggle("bi-toggle2-off");
  wavy.classList.toggle("bi-toggle2-on");
  // wavy.title = "clothesOff";

  const products = await new Products().getProducts();
  const ui = new UI();
  ui.filterProducts(products, "wavy");
};

const long = async () => {
  longOnly.classList.toggle("i_active");
  longOnly.classList.toggle("bi-toggle2-off");
  longOnly.classList.toggle("bi-toggle2-on");
  // longOnly.title = "clothesOff";

  const products = await new Products().getProducts();
  const ui = new UI();
  ui.filterProducts(products, "long");
};

const wig = async () => {
  wigOnly.classList.toggle("i_active");
  wigOnly.classList.toggle("bi-toggle2-off");
  wigOnly.classList.toggle("bi-toggle2-on");
  wigOnly.title = "wigOff";

  const products = await new Products().getProducts();
  const ui = new UI();
  ui.filterProducts(products, "wig");
};
const extension = async () => {
  extensionOnly.classList.toggle("i_active");
  extensionOnly.classList.toggle("bi-toggle2-off");
  extensionOnly.classList.toggle("bi-toggle2-on");
  // extensionOnly.title = "clothesOff";

  const products = await new Products().getProducts();
  const ui = new UI();
  ui.filterProducts(products, "extension");
};
const others = async () => {
  othersOnly.classList.toggle("i_active");
  othersOnly.classList.toggle("bi-toggle2-off");
  othersOnly.classList.toggle("bi-toggle2-on");
  // othersOnly.title = "clothesOff";

  const products = await new Products().getProducts();
  const ui = new UI();
  ui.filterProducts(products, "others");
};
wigOnly.addEventListener("click", async () => {
  await wig();
});

extensionOnly.addEventListener("click", async () => {
  await extension();
});

othersOnly.addEventListener("click", async () => {
  await others();
});

const newest = async () => {
  durationButton.innerHTML = `
  <h5>Sort By: Newest</h5>
  <ion-icon name="chevron-down-outline"></ion-icon>
 `;
  durationOptions.classList.toggle("sortOptions_active");

  const products = await new Products().getProducts();
  const ui = new UI();
  ui.filterProducts(products, "newest");
};
const lowest = async () => {
  durationButton.innerHTML = `
        <h5>Sort By: Lowest</h5>
        <ion-icon name="chevron-down-outline"></ion-icon>
       `;
  durationOptions.classList.toggle("sortOptions_active");
  const products = await new Products().getProducts();
  const ui = new UI();
  ui.filterProducts(products, "lowest");
};
const highest = async () => {
  durationButton.innerHTML = `
  <h5>Sort By: Highest</h5>
  <ion-icon name="chevron-down-outline"></ion-icon>
 `;
  durationOptions.classList.toggle("sortOptions_active");
  const products = await new Products().getProducts();
  const ui = new UI();
  ui.filterProducts(products, "highest");
};

//https://kosafrique-backend-production.up.railway.app/store/products...
// display products implementation
class Products {
  async getProducts() {
    try {
        let result = await fetch("wigs.json");
        let data = await result.json();
        let products = data.items;
        products = products.map((item) => {
          const {
            title,
            price,
            description,
            category,
            brief,
            image1,
            image2,
            image3,
            type,
          } = item.fields;
          const { id } = item.sys;
          const image = item.fields.image.fields.file.url;
          return {
            category,
            title,
            price,
            description,
            id,
            image,
            brief,
            image1,
            image2,
            image3,
            type,
          };
        });
        return products;
      } catch (error) {
        console.log(error);
      }
  } 
}

// display products implementation
class UI {
  loadAllproducts(products) {
    let itemResult = "";
    products.forEach((product) => {
      itemResult += `
        <!-- single Product -->
        <a class="itemCard" >
         <div id="itemCard" data-id="${product.id}">
         <img class="itemImage" src=${product.image} alt="">
         <h5 class="cardTitle" title="">${product.title}</h5>
         <p>${product.description}</p>
         <div class="itemPrice">
             <h5>Ghc ${product.price}</h5>
         </div>
         </div>
          <div class="colorTag">
          <div class="stars">
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
        </div>
              <button class="proCart" data-id="${product.id}">Buy</button>
          </div>
        </a>
        <!-- single product ends here -->
        `;
      productArea.innerHTML = itemResult;
    });

    // add event listener to each product item
    const productCards = document.querySelectorAll("#itemCard");
    productCards.forEach((card) => {
      card.addEventListener("click", () => {
        const productId = card.dataset.id;
        // retrieve the product object using the ID
        const product = products.find((p) => p.id === productId);
        this.displayProductDetails(product);
      });
    });
  }

  displayProductDetails(product) {
    const modalContainer = document.querySelector(".modal-container");
    const closeModalBtn = document.querySelector("#close-modal-btn");

    let itemPage = document.createElement("div");
    itemPage.classList.add("productInfo");

    itemPage.innerHTML = `
      <div class="imageSlider" style="background-image: url(${product.image});"><div class="productImages">
          <img src=${product.image} alt="">
          <img src=${product.image1} alt="">         
          <img src=${product.image2} alt="">
          <img src=${product.image3} alt="">
        </div>
      </div>
      <div class="ItemDetails">
        <h2 style="display: none;" class="productBrand">${product.title}</h2>
        <h4 class="itemDescription"><b>${product.description}</b></h4>
        <p class="itemDescription">${product.brief}</p>
        <span class="itemPrice">$${product.price}</span>
        <span class="itemDiscount">(50% Off)</span>
        <div class="rating">
          <img src="../img/star.png" class="star" alt="">
          <img src="../img/star.png" class="star" alt="">
          <img src="../img/star.png" class="star" alt="">
          <img src="../img/star.png" class="star" alt="">
          <img src="./img/star.png" class="star" alt="">
        </div>
        <p class="subHeading">Select Size</p>
        <input type="radio" name="size" value="s" hidden id="sSize">
        <label for="sSize" class="sizeRadioBtn check">s</label>
        <input type="radio" name="size" value="m" hidden id="mSize">
        <label for="mSize" class="sizeRadioBtn">m</label>
        <input type="radio" name="size" value="l" hidden id="lSize">
        <label for="lSize" class="sizeRadioBtn">l</label>
        <input type="radio" name="size" value="xl" hidden id="xlSize">
        <label for="xlSize" class="sizeRadioBtn">xl</label>
        <input type="radio" name="size" value="xxl" hidden id="xxlSize">
        <label for="xxlSize" class="sizeRadioBtn">xxl</label>
        <button class="btn cartButton" data-id=${product.id}>Add to Cart</button>
      </div>
    `;
    modalContainer.appendChild(itemPage);
    modalContainer.classList.add("show-modal");
    closeModalBtn.addEventListener("click", () => {
      modalContainer.classList.remove("show-modal");
      modalContainer.removeChild(itemPage);
    });

    // Append the product page to the new window
    const imagesOfItems = document.querySelectorAll(".productImages img");
    const itemsSlider = document.querySelector(".imageSlider");

    let activeSliderImage = 0;

    imagesOfItems.forEach((item, i) => {
      item.addEventListener("click", () => {
        imagesOfItems[activeSliderImage].classList.remove("active");
        item.classList.add("active");
        itemsSlider.style.backgroundImage = `url("${item.src}")`;
        activeSliderImage = i;
      });
    });

    // Selecting sizes

    const sizeButtons = document.querySelectorAll(".sizeRadioBtn");
    let checkedButton = 0;

    sizeButtons.forEach((item, i) => {
      item.addEventListener("click", () => {
        sizeButtons[checkedButton].classList.remove("check");
        item.classList.add("check");
        checkedButton = i;
      });
    });

    let ratingsInput = [...document.querySelectorAll(".star")];

    ratingsInput.map((star, index) => {
      star.addEventListener("click", () => {
        for (let i = 0; i < 5; i++) {
          if (i <= index) {
            ratingsInput[i].src = `/img/star-filled.png`;
          } else {
            ratingsInput[i].src = `/img/star.png`;
          }
        }
      });
    });

    const addToCartButtons = itemPage.querySelectorAll(".btn");
    addToCartButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const productId = button.dataset.id;

        let id = button.dataset.id;
        let alreadySelectedItem = cartBasket.find((item) => item.id === id);
        if (alreadySelectedItem) {
          button.innerText = "Added";
          button.disabled = true;
          // button.parentElement.parentElement.firstElementChild.innerText = "Added";
        }
        button.addEventListener("click", (event) => {
          event.target.innerText = "Added";
          event.target.disabled = true;
          // event.target.parentElement.parentElement.firstElementChild.innerText = "In Cart"
          //get item from products
          let selectedItem = { ...Storage.getProduct(id), amount: 1 };

          //add item to cart
          cartBasket = [...cartBasket, selectedItem];

          //save in local storage
          Storage.saveCart(cartBasket);

          //set cart values
          this.setCartItemValues(cartBasket);

          //display cart item
          this.addCartItemToCart(selectedItem);

          //show the cart overlay
          // this.displayCartOverlay();
        });
      });
    });
  }

  filterProducts(products, sortBy, category, type) {
    let sortedProducts = [];
    if (type) {
      sortedProducts = products.filter((product) =>
        product.id.includes(type)
      );
    } else if (category) {
      sortedProducts = products.filter((product) => product.category === category);
    } else {
      sortedProducts = [...products];
    }
    if (sortBy === "newest") {
      // sort by date added (most recent first)
      sortedProducts = sortedProducts.sort((a, b) => {
        return new Date(b.dateAdded) - new Date(a.dateAdded);
      });
    } else if (sortBy === "lowest") {
      // sort by price (lowest first)
      sortedProducts = sortedProducts.sort((a, b) => {
        return a.price - b.price;
      });
    } else if (sortBy === "highest") {
      // sort by price (highest first)
      sortedProducts = sortedProducts.sort((a, b) => {
        return b.price - a.price;
      });
    } else if (sortBy === "straight") {
      // filter products by category (straight only)
      sortedProducts = products.filter((item) => item.type === "straight");
    } else if (sortBy === "short") {
      // filter products by handle (short only)
      sortedProducts = products.filter(
        (item) => item.type === "short"
      );
    } else if (sortBy === "curvy") {
      // filter products by handle (curvy only)
      sortedProducts = products.filter((item) => item.type === "curvy");
    } else if (sortBy === "wavy") {
      // filter products by handle (wavy only)
      sortedProducts = products.filter((item) => item.type === "wavy");
    } else if (sortBy === "long") {
      // filter products by handle (long only)
      sortedProducts = products.filter((item) => item.type === "long");
    } else if (sortBy === "wig") {
      // filter products by handle (wig only)
      sortedProducts = products.filter((product) => product.category === "wig");
    } else if (sortBy === "extension") {
      // filter products by category (woextension only)
      sortedProducts = products.filter((product) => product.category === "extension");
    } else if (sortBy === "others") {
      // filter products by category (women only)
      sortedProducts = products.filter(
        (product) => product.category === "others" || "all"
      );
    }
    this.loadAllproducts(sortedProducts);
  }

  getAddToCartBtns() {
    const addToCartButtons = [...document.querySelectorAll(".proCart")];
    addButtons = addToCartButtons;
    addToCartButtons.forEach((button) => {
      let id = button.dataset.id;
      let alreadySelectedItem = cartBasket.find((item) => item.id === id);
      if (alreadySelectedItem) {
        button.innerText = "Added";
        button.disabled = true;
        // button.parentElement.parentElement.firstElementChild.innerText = "Added";
      }
      button.addEventListener("click", (event) => {
        event.target.innerText = "Added";
        event.target.disabled = true;
        // event.target.parentElement.parentElement.firstElementChild.innerText = "In Cart"
        //get item from products
        let selectedItem = { ...Storage.getProduct(id), amount: 1 };

        //add item to cart
        cartBasket = [...cartBasket, selectedItem];

        //save in local storage
        Storage.saveCart(cartBasket);

        //set cart values
        this.setCartItemValues(cartBasket);

        //display cart item
        this.addCartItemToCart(selectedItem);

        //show the cart overlay
        // this.displayCartOverlay();
      });
    });
  }

  setCartItemValues(cartBasket) {
    let itemTotal = 0;
    let itemsTotal = 0;
    cartBasket.map((item) => {
      itemTotal += item.price * item.amount;
      itemsTotal += item.amount;
    });
    cartTotal.innerText = parseFloat(itemTotal.toFixed(2));
    cartItemsQuantity.innerText = itemsTotal;
    // mobileItemsQuantity.innerText = itemsTotal;
  }
  addCartItemToCart(item) {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("cartItem");
    itemDiv.innerHTML = `
     <img src=${item.image} alt="">          
     <div>
      <h4>${item.title}</h4>
      <h5>$${item.price}</h5>
        <ion-icon class="removeItem" data-id = ${item.id} name="trash-outline"></ion-icon>
        <div class="stars">
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
            </div>
     </div>
     <div>
      <ion-icon class="upBtn" name="caret-up-outline" data-id = ${item.id}></ion-icon>
      <p class="itemAmount">${item.amount}</p>
      <ion-icon class="downBtn" name="caret-down-outline" data-id = ${item.id}></ion-icon>
     </div>
     `;
    overlayCartContent.appendChild(itemDiv);
  }

  displayCartOverlay() {
    cartOverlay.classList.add("transparentBack");
    cartArea.classList.add("showCart");
  }
  setApplication() {
    cartBasket = Storage.getItemsFromCart();
    this.setCartItemValues(cartBasket);
    this.populateCart(cartBasket);
    closeCartBtn.addEventListener("click", this.hideCart);
  }
  populateCart(cartBasket) {
    cartBasket.forEach((item) => this.addCartItemToCart(item));
  }
  hideCart() {
    cartOverlay.classList.remove("transparentBack");
    cartArea.classList.remove("showCart");
  }
  cartLogic() {
    ClearCartBtn.addEventListener("click", () => {
      this.clearCartBasket();
    });
    // cart functionality
    overlayCartContent.addEventListener("click", (event) => {
      if (event.target.classList.contains("removeItem")) {
        let removeFromBasket = event.target;
        let id = removeFromBasket.dataset.id;
        overlayCartContent.removeChild(
          removeFromBasket.parentElement.parentElement
        );
        this.removeItem(id);
      } else if (event.target.classList.contains("upBtn")) {
        let addUpToBasket = event.target;
        let id = addUpToBasket.dataset.id;
        let itemTotal = cartBasket.find((item) => item.id === id);
        itemTotal.amount = itemTotal.amount + 1;
        Storage.saveCart(cartBasket);
        this.setCartItemValues(cartBasket);
        addUpToBasket.nextElementSibling.innerText = itemTotal.amount;
      } else if (event.target.classList.contains("downBtn")) {
        let takeOutOfBasket = event.target;
        let id = takeOutOfBasket.dataset.id;
        let itemTotal = cartBasket.find((item) => item.id === id);
        itemTotal.amount = itemTotal.amount - 1;
        if (itemTotal.amount > 0) {
          Storage.saveCart(cartBasket);
          this.setCartItemValues(cartBasket);
          takeOutOfBasket.previousElementSibling.innerText = itemTotal.amount;
        } else {
          overlayCartContent.removeChild(
            takeOutOfBasket.parentElement.parentElement
          );
          this.removeItem(id);
        }
      }
    });
  }

  clearCartBasket() {
    let selectedItems = cartBasket.map((item) => item.id);
    selectedItems.forEach((id) => this.removeItem(id));

    while (overlayCartContent.children.length > 0) {
      overlayCartContent.removeChild(overlayCartContent.children[0]);
    }
    this.hideCart();
  }
  removeItem(id) {
    cartBasket = cartBasket.filter((item) => item.id !== id);
    this.setCartItemValues(cartBasket);
    Storage.saveCart(cartBasket);
    let button = this.getOneButton(id);
    // button.disabled = false;
    button.innerHTML = `Buy`;
  }
  getOneButton(id) {
    return addButtons.find((button) => button.dataset.id === id);
  }
}

//saving cart items to local storage
class Storage {
  static saveCartItems(products) {
    localStorage.setItem("products", JSON.stringify(products));
  }

  static getProduct(id) {
    let products = JSON.parse(localStorage.getItem("products"));
    return products.find((product) => product.id === id);
  }

  static saveCart(cartBasket) {
    localStorage.setItem("cartBasket", JSON.stringify(cartBasket));
  }

  static getItemsFromCart() {
    return localStorage.getItem("cartBasket")
      ? JSON.parse(localStorage.getItem("cartBasket"))
      : [];
  }
}

// DOM load event
document.addEventListener("DOMContentLoaded", () => {
  const ui = new UI();
  const products = new Products();
  // application setup
  ui.setApplication();
  //get product items
  products
    .getProducts()
    .then((products) => {
      ui.loadAllproducts(products);
      Storage.saveCartItems(products);
    })
    .then(() => {
      ui.getAddToCartBtns();
      ui.cartLogic();
    });
});
