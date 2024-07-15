const menuContainer = document.querySelector(".dessert-container");

const desserts = [
    {
        name: "Waffle",
        description: "Waffle with Berries",
        price: "6.50",
        image: "images/image-waffle-desktop.jpg",
    },
    {
        name: "Crème Brûlée",
        description: "Vanilla Bean Crème Brûlée",
        price: "7.00",
        image: "images/image-creme-brulee-desktop.jpg",
    },
    {
        name: "Macaron",
        description: "Macaron Mix of Five",
        price: "8.00",
        image: "images/image-macaron-desktop.jpg",
    },
    {
        name: "Tiramisu",
        description: "Classic Tiramisu",
        price: "5.50",
        image: "images/image-tiramisu-desktop.jpg",
    },
    {
        name: "Baklava",
        description: "Pistachio Baklava",
        price: "4.00",
        image: "images/image-baklava-desktop.jpg",
    },
    {
        name: "Pie",
        description: "Lemon Meringue Pie",
        price: "5.00",
        image: "images/image-meringue-desktop.jpg",
    },
    {
        name: "Cake",
        description: "Red Velvet Cake",
        price: "4.50",
        image: "images/image-cake-desktop.jpg",
    },
    {
        name: "Brownie",
        description: "Salted Caramel Brownie",
        price: "4.50",
        image: "images/image-brownie-desktop.jpg",
    },
    {
        name: "Panna Cotta",
        description: "Vanilla Panna Cotta",
        price: "6.50",
        image: "images/image-panna-cotta-desktop.jpg",
    }
];

function addContent(){
    for(let i = 0; i < desserts.length; i++){
        const dessertCard = `
            <div class="relative w-56 m-2 mr-5">
                <div class="w-56 h-56 relative">
                    <img src="${desserts[i].image}" class="absolute w-full h-full object-cover rounded-lg" alt="${desserts[i].name}">
                </div>
                <div class="flex items-center justify-center border-[1px] border-rose-300 w-36 h-10 p-1 rounded-full absolute top-[204px] bg-white left-10">
                    <img class="w-5" src="images/icon-add-to-cart.svg" alt="Add to Cart">
                    <span class="text-md ml-1 font-semibold">Add to Cart</span>
                </div>
                <div class="mt-5">
                    <div class="text-sm text-rose-300">${desserts[i].name}</div>
                    <div class="font-bold text-rose-900">${desserts[i].description}</div>
                    <div class="text-red font-semibold">$${desserts[i].price}</div>
                </div>
            </div>
        `;
        menuContainer.innerHTML += dessertCard; // Append the new card
    }
}

addContent();
