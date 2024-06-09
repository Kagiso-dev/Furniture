document.addEventListener('DOMContentLoaded', () => {
    const furnitureData = [
        {
            name: 'Sofa Set',
            price: 'R1500.00',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzZasGNkhleWDhPwRx1QBSIR3OC1_Gf4avWg&s'
        },
        {
            name: 'Dining Table',
            price: 'R2000.00',
            image: 'https://designstore.co.za/sites/default/files/styles/product_large/public/products/products-round_stellar_diningtable_louwroets2_700x_0ea01a6e-1b97-4b52-b5ae-82c8b77ff5e0%20sml1_0.jpg?itok=5CmeXh6t'
        },
        {
            name: 'Office Chair',
            price: 'R1000.00',
            image: 'https://www.furnitureliquidation.co.za/wp-content/uploads/2023/12/A08-Office-Chair-Black-.jpg'
        },
        {
            name: 'Bed Frame',
            price: 'R0',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgB9kIyeva4x7Qn6HMDuSHzAv215QOlZD4Lw&s'
        },
        {
            name: 'Bookshelf',
            price: 'R0',
            image: 'images/bookshelf.jpg'
        },
        {
            name: 'Wardrobe',
            price: 'R0',
            image: 'images/wardrobe.jpg'
        }
    ];

    const furnitureContainer = document.getElementById('furnitures');
    
    furnitureData.forEach(item => {
        const furnitureItem = document.createElement('div');
        furnitureItem.classList.add('furniture-item');

        furnitureItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>Price: ${item.price}</p>
        `;

        furnitureContainer.appendChild(furnitureItem);
    });
});
