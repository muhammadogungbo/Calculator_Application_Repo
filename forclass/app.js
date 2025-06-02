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



//function to fetch fakeStore_Api

fetch(Url)
  .then((response) => response.json())
  .then((datas) => {
    console.log(datas);

    //function to loop into data array
    datas.forEach((data) => {
      //creating cardDiv
      const cardDiv = document.createElement("div")
      cardDiv.className = "rounded-sm px-4 py-4 border h-full transition-all duration-300  hover:shadow-md  "
     
      //Adding element into cardDiv
      cardDiv.innerHTML = `
       <img src="${data.image || "Products img"}" class=" h-[50%] h-25 rounded-md bg-cover w-full" />

       <hr class="mt-8 bg-gray-900 bg-bold "></hr>
       <div class="p-3">
        <h2 class="text-center lg:text-[16px] md:text-xl text-[24px] font-bold mb-2 text-orange-400">${data.title || "Product title"}</h2>
        <P class="text-center md:text-[16px] text-[20px] font-mono hover:underline hover:text-purple-500 font-purple-500">${data.category || "Products category"}</p>
        <P class="text-green-500 font-bold font-mono text-center text-[20px]">$ ${data.price || "Product price"}</p>
       </div>
      `
     
      container.appendChild(cardDiv)
    });
  })
  .catch((error) => {
    console.log(error);

    container.innerHTML = `
    <p class="text-red-500 text-center text-2xl">Loading...</p>
    `
  });

