const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");
const sidebarOptions = document.querySelectorAll(".sidebar a");

// show sidebar
menuBtn.addEventListener('click', () => {
    sideMenu.style.animation = 'showMenu 400ms ease forwards';
    sideMenu.style.display = 'block';
});

// hide sidebar
closeBtn.addEventListener('click', () => {
    sideMenu.style.animation = 'hideMenu 400ms ease forwards';
});

// activate icon from sidebar
sidebarOptions.forEach(option => {
    option.addEventListener('click', () => {
        option.classList.toggle('active');
    });
});

// change theme
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
});

// populate table
Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
    <td>${order.productName}</td>
    <td>${order.productNumber}</td>
    <td>${order.paymentStatus}</td>
    <td class="${order.shipping === 'Declined' ? 'danger' : order.shipping === 'Pending' ? 'warning' : 'primary'}">${order.shipping}</td>
    <td class="primary"><a href="#">Details</a></td>
    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});