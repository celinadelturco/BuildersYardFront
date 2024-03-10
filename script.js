const dataJSON = `
[
    {
        "id": 1,
        "name": "Monster Truck",
        "price": 10.99,
        "description": "TEST TEXT",
        "img": ""
    },
    {
        "id": 2,
        "name": "Cute pink truckk!",
        "price": 19.99,
        "description": "TEST TEXT",
        "img": ""
    },
    {
        "id": 3,
        "name": "Brick",
        "price": 29.99,
        "description": "TEST TEXT",
        "img": ""
    }
]
`;

document.addEventListener("DOMContentLoaded", function() {
    const products = JSON.parse(dataJSON);
    showProducts(products);

    function showProducts(products) {
        const containerProducts = document.getElementById('containerProducts');
        containerProducts.innerHTML = ''; 

        products.forEach(product => {
            const productHTML = `
                <div class="product">
                    <img src="${product.img}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p>Price: $${product.price}</p>
                </div>
            `;
            containerProducts.insertAdjacentHTML('beforeend', productHTML);
        });
    }


    
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            searchProducts();
        }
    });
    
    searchButton.addEventListener('click', function() {
        searchProducts();
    });
    function searchProducts() {
        
        const searchQuery = searchInput.value.toLowerCase();
        const containerProducts = document.getElementById('containerProducts');
        const products = containerProducts.querySelectorAll('.product'); 
        const noResultsMessage = document.getElementById('noResultsMessage');
    
        let hasResults = false;
    
        products.forEach(product => {
            if (product.querySelector('h3').textContent.toLowerCase().includes(searchQuery)) {
                product.style.display = 'block'; 
                hasResults = true;
            } else {
                product.style.display = 'none'; 
            }
        });
    
        if (!hasResults) {
            noResultsMessage.style.display = 'block'; 
        } else {
            noResultsMessage.style.display = 'none'; 
        }
    }
    





    

    const carouselImages = document.querySelector('.carousel-images');
    const images = carouselImages.querySelectorAll('img');
    const imageWidth = images[0].clientWidth; 
    const totalImages = images.length;
    const intervalTime = 4500; 
    const transitionTime = 3000; 

    let currentOffset = 0; 

    carouselImages.innerHTML += carouselImages.innerHTML;

    carouselImages.style.width = `${imageWidth * totalImages}px`;

    function startSlide() {
        setInterval(() => {
            currentOffset -= imageWidth; 
            updateCarousel();
        }, intervalTime);
    }

    function updateCarousel() {
        carouselImages.style.transition = `transform ${transitionTime}ms linear`; 
        carouselImages.style.transform = `translateX(${currentOffset}px)`;
        
        if (Math.abs(currentOffset) >= imageWidth * totalImages) {
            setTimeout(() => {
                carouselImages.style.transition = 'none'; 
                currentOffset = 0; 
                carouselImages.style.transform = `translateX(${currentOffset}px)`;
            }, transitionTime);
        }
    }

    startSlide();

})

function login(){
    window.location.href = "login.html";

}





/*SEARCH STOCK---------------------------------------------------------*/ 

const stockInput = document.getElementById('stockInput');
const stockButton = document.getElementById('stockButton');
stockInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        searchStock();
    }
});

stockButton.addEventListener('click', function() {
    searchStock();
});
function searchStock() {
    
    const stockQuery = stockInput.value.toLowerCase();
    const containerStock = document.getElementById('containerStock');
    const products = containerStock.querySelectorAll('.product'); 
    const noResultsMessage = document.getElementById('noResultsMessage');

    let hasResults = false;

    products.forEach(product => {
        if (product.querySelector('h3').textContent.toLowerCase().includes(stockQuery)) {
            product.style.display = 'block'; 
            hasResults = true;
        } else {
            product.style.display = 'none'; 
        }
    });

    if (!hasResults) {
        noResultsMessage.style.display = 'block'; 
    } else {
        noResultsMessage.style.display = 'none'; 
    }
}

