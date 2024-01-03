document.addEventListener('DOMContentLoaded', function(){
    renderCategories(categoriesData);
});


const categoriesData = [
    {
        category: 'Fruits',
        items: [
            {
                name: 'Apple',
                description: 'Apple descr',
            },
            {
                name: 'Peaches',
                description: 'Peaches descr',
            },
            {
                name: 'Plums',
                description: 'Plums descr',
            }
        ]
        
    },
    {
        category: 'Vegetables',
        items: [
            {
                name: 'Cucumber',
                description: 'Cucumber descr',
            },
            {
                name: 'Tomatoes',
                description: 'Tomatoes descr',
            },
            {
                name: 'Pepper',
                description: 'Pepper descr',
            }
        ]
    },
    {
        category: 'Herbs',
        items: [
            {
                name: 'Dill',
                description: 'Dill descr',
            },
            {
                name: 'Rosemary',
                description: 'Rosemary descr',
            },
            {
                name: 'Thyme',
                description: 'Thyme descr',
            }
        ]
    },
];

function renderCategories(categoriesObj) {
    const categoriesContainer = document.querySelector('.categories');
    categoriesContainer.innerHTML = '';

    const categoriesHtml = categoriesObj.forEach(function(category) {
        const el = document.createElement('div');
        el.innerHTML = category.category;
        el.classList.add('category');

        el.addEventListener('click', () => renderItems(category));

        categoriesContainer.append(el);
    });
}

function renderItems(categoryObj) {
    document.querySelector('.descriptionBlock').innerHTML = '';
    
    const itemsContainer = document.querySelector('.items');
    itemsContainer.innerHTML = '';

    categoryObj.items.forEach(function(item) {
        const el = document.createElement('div');
        el.innerHTML = item.name;
        el.classList.add('item');
        
        el.addEventListener('click', () => renderDescription(item));

        itemsContainer.append(el);
    });
}

function renderDescription(item) {
    
    const el = document.createElement('div');
    el.innerHTML = item.description;
    el.classList.add('description');

    const button = document.createElement('button');
    button.id = "buyItem"
    button.innerHTML = "Buy"
    button.setAttribute("data-item-name", item.name);

    button.addEventListener('click', function(event) {
        const itemName = event.target.getAttribute("data-item-name");
        
        alert(`You've bought "${itemName}"`);
        renderItems();
    });

    const descriptionBlock = document.querySelector('.descriptionBlock');

    descriptionBlock.append(el);
    descriptionBlock.append(button);
}
