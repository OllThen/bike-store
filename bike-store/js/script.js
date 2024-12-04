async function getProducts() {
    // Виконуємо запит до файлу "store_db.json" та очікуємо на відповідь
    let response = await fetch("store_db.json");
    // Очікуємо на отримання та розпакування JSON-даних з відповіді
    let products = await response.json();
  
    // Повертаємо отримані продукти
    return products;
  }


  // Генеруємо HTML-код для карточки товару
function getCardHTML(product) {
    // Створюємо JSON-строку з даними про товар і зберігаємо її в data-атрибуті
    let productData = JSON.stringify(product);
    return `
          <div class="card" style="width: 18rem;">
          <img src="${product.image}">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text"> ${product.price}</p>
              <a href="#" class="btn btn-primary cart-btn"  data-product='${productData}'>Buy</a>
          </div>
          </div>
           
            
        `;
  }
  
  
  document.addEventListener("DOMContentLoaded", () => {
    const bikeList = document.getElementById('bike-list');
    bikes.forEach(bike => {
        const bikeCard = document.createElement('div');
        bikeCard.className = 'bike-card';
        bikeCard.innerHTML = `
            <img src="${bike.image}" alt="${bike.name}">
            <h3>${bike.name}</h3>
            <p>Ціна: ${bike.price}</p>
        `;
        bikeList.appendChild(bikeCard);
    });
  });
  


  getProducts().then(function (products) {
    let productsList = document.querySelector(".products-list");
    if (productsList) {
      products.forEach(function (product) {
        // Відображаємо товари на сторінці
        productsList.innerHTML += getCardHTML(product);
      });
    }
  });


  fetch('bikes.json')
    .then(response => response.json())
    .then(data => {
        const bikeList = document.getElementById('bike-list');
        data.forEach(bike => {
            const bikeCard = document.createElement('div');
            bikeCard.className = 'bike-card';
            bikeCard.innerHTML = `
                <img src="${bike.image}" alt="${bike.name}">
                <h3>${bike.name}</h3>
                <p>Ціна: ${bike.price}</p>
            `;
            bikeList.appendChild(bikeCard);
        });
    });
