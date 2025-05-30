// important contents
const showClose = document.getElementById("showClose");
const toggleMenu = document.getElementById("toggleMenu");
const closeMenu = document.getElementById("closeMenu");

//container
const container = document.getElementById("container");

// const Url = "https://fakestoreapi.com/products";

//Targets
// "id": 0,
// "title": "string",
// "price": 0.1,
// "description": "string",
// "category": "string",
// "image": "http://example.com"

//function on menu toggle

toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.add("hideMenu");
  showClose.classList.add("show");
  closeMenu.classList.add("showClose");
});

closeMenu.addEventListener("click", () => {
  toggleMenu.classList.remove("hideMenu");
  showClose.classList.remove("show");
  closeMenu.classList.remove("showClose");
});

let products = [];

//function to fetch fakeStore_Api

fetch(Url)
  .then((response) => response.json())
  .then((datas) => {
    console.log(datas);

    //function to loop into data array
    datas.forEach((data) => {
      //creating cardDiv
      const cardDiv = document.createElement("div")
      cardDiv.className = "rounded-sm px-4 py-4 box-shadow transition-all duration-300 hover:shadow-md hover:shadow-md "
     
      //Adding element into cardDiv
      cardDiv.innerHTML = `
       <img src="${data.image || "Products img"}" class="h-43   rounded-md bg-cover w-full" />
      `
     
      container.appendChild(cardDiv)
    });
  })
  .catch((error) => {
    console.log(error);
  });

