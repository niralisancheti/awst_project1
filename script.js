// Grocery List Demo Functionality
let groceryItems = [
    { id: 1, name: 'Milk', bought: false },
    { id: 2, name: 'Bread', bought: true },
    { id: 3, name: 'Eggs', bought: false }
];

function renderGroceryList() {
    const list = document.getElementById('grocery-list');
    list.innerHTML = '';

    groceryItems.forEach(item => {
        const li = document.createElement('li');
        li.className = `grocery-item ${item.bought ? 'bought' : ''}`;

        li.innerHTML = `
            <span>${item.name}</span>
            <div class="item-actions">
                <button onclick="toggleBought(${item.id})" class="check-btn ${item.bought ? 'checked' : ''}">✓</button>
                <button onclick="removeItem(${item.id})" class="delete-btn">×</button>
            </div>
        `;

        list.appendChild(li);
    });
}

function addItem() {
    const input = document.getElementById('new-item');
    const itemName = input.value.trim();

    if (itemName) {
        const newItem = {
            id: Date.now(),
            name: itemName,
            bought: false
        };

        groceryItems.push(newItem);
        input.value = '';
        renderGroceryList();
    }
}

function toggleBought(id) {
    const item = groceryItems.find(item => item.id === id);
    if (item) {
        item.bought = !item.bought;
        renderGroceryList();
    }
}

function removeItem(id) {
    groceryItems = groceryItems.filter(item => item.id !== id);
    renderGroceryList();
}

// Contact Form Handling
function handleContactForm(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    // Simple validation
    if (!data.name || !data.email || !data.subject || !data.message) {
        alert('Please fill in all fields.');
        return;
    }

    // Simulate form submission
    alert('Thank you for your message! We\'ll get back to you soon.');
    event.target.reset();
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Initialize grocery list
    renderGroceryList();

    // Add enter key support for grocery input
    const newItemInput = document.getElementById('new-item');
    if (newItemInput) {
        newItemInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                addItem();
            }
        });
    }

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
