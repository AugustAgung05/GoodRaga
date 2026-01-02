const toggleBtn = document.getElementById('menuToggle');
const menu = document.getElementById('menu');
const header = document.getElementById('header');

let isOpen = false;

toggleBtn.addEventListener('click', (e) => {
e.stopPropagation();
isOpen = !isOpen;

menu.classList.toggle('hidden', !isOpen);
toggleBtn.classList.toggle('hamburger-active', isOpen);
});

document.addEventListener('click', (e) => {
if (isOpen && !menu.contains(e.target) && !toggleBtn.contains(e.target)) {
    isOpen = false;
    menu.classList.add('hidden');
    toggleBtn.classList.remove('hamburger-active');
}
});

window.addEventListener('resize', () => {
if (window.innerWidth >= 1024) {
    menu.classList.remove('hidden');
    toggleBtn.classList.remove('hamburger-active');
    isOpen = false;
} else {
    menu.classList.add('hidden');
}
});

function handleScroll() {
  const isScrolled = window.scrollY > 5;

  header.classList.toggle('bg-bg/80', isScrolled);
  header.classList.toggle('backdrop-blur-md', isScrolled);
}

window.addEventListener('scroll', handleScroll);

document.addEventListener('DOMContentLoaded', handleScroll);

toastr.options = {
            "closeButton": false,
            "debug": false,
            "newestOnTop": false,
            "progressBar": false,
            "positionClass": "toast-bottom-right",
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "1000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        };
        
let cart = JSON.parse(localStorage.getItem('goodraga_cart')) || [];
updateCartBadge();

const addToCartContainers = document.querySelectorAll('#produk .group');

addToCartContainers.forEach((container, index) => {
    container.addEventListener('click', () => {
        
        const product = {
            id: index + 1,
            name: container.querySelector('h3').innerText,
            price: parseInt(container.querySelector('.flex.justify-between h3').innerText.replace('Rp ', '').replace('.', '')),
            image: container.querySelector('img').src,
            quantity: 1
        };

        addToCart(product);
    });
});

function addToCart(product) {
    const existingItem = cart.find(item => item.name === product.name);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push(product);
    }

    localStorage.setItem('goodraga_cart', JSON.stringify(cart));
    
    updateCartBadge();
    toastr.success('Produk berhasil masuk keranjang!');
}

function updateCartBadge() {
    const badge = document.querySelector('nav a span.increment');
    const badgeDekstop = document.querySelector('header .dekstopIcon a span.increment');
    if(badge) {
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        badge.innerText = totalItems;
        badge.classList.remove('hidden');
        if(totalItems === 0) badge.classList.add('hidden');
    }
    if(badgeDekstop) {
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        badgeDekstop.innerText = totalItems;
        badgeDekstop.classList.remove('hidden');
        if(totalItems === 0) badgeDekstop.classList.add('hidden');
    }
}

    const articles = [
        {
            id: 1,
            category: "Tips Sehat",
            title: "Mengenal \"Ibu Kunyit\" vs Kunyit Biasa",
            desc: "Apa bedanya, dan kenapa kami memilih biang kunyit untukmu.",
            image: "./src/assets/tips-sehat-1.svg"
        },
        {
            id: 2,
            category: "Tips Sehat",
            title: "Olahraga Saat PMS: Bolehkah?",
            desc: "Gerakan ringan yang justru membantu meredakan kram perut.",
            image: "./src/assets/tips-sehat-2.svg"
        },
        {
            id: 3,
            category: "Tips Sehat",
            title: "Masuk Angin Karena AC Kantor? Ini Triknya.",
            desc: "Jangan biarkan suhu dingin menurunkan performa kerjamu.",
            image: "./src/assets/tips-sehat-3.svg"
        },
        {
            id: 4,
            category: "Gaya Hidup",
            title: "Revenge Bedtime Procrastination",
            desc: "Kenapa kita sengaja menunda tidur padahal badan sudah lelah? Fenomena ini lebih umum dari yang kamu kira.",
            image: "./src/assets/gaya-hidup-1.svg"
        },
        {
            id: 5,
            category: "Produktivitas",
            title: "Teknik \"Micro-Break\" untuk Atasi Brain Fog Sore Hari",
            desc: "Produktivitas bukan soal kerja nonstop. Pelajari cara 'reset' otak dalam 5 menit agar performa tetap stabil sampai jam pulang.",
            image: "./src/assets/produktivitas-2.svg"
        },
        {
            id: 6,
            category: "Resep",
            title: "DIY Mocktail: Kunyit Asam Sparkle",
            desc: "Minuman segar ala café yang bisa kamu buat di rumah—cukup botol GoodRaga dan soda dingin.",
            image: "./src/assets/resep-1.svg"
        },
        {
            id: 7,
            category: "Tips Sehat",
            title: "Mitos Gula Aren vs Gula Pasir",
            desc: "Benarkah gula aren lebih sehat untuk diabetes? Cek faktanya di sini.",
            image: "./src/assets/tips-sehat-4.svg"
        },
        {
            id: 8,
            category: "Resep",
            title: "Warm Hug: Wedang Jahe Susu Oat",
            desc: "Resep hangat, creamy, dan dairy-free untuk menemani sore hujan tanpa rasa bersalah.",
            image: "./src/assets/resep-2.svg"
        },
        {
            id: 9,
            category: "Produktivitas",
            title: "Ritual 10 Menit Pagi Biar Fokus Seharian",
            desc: "Bukan scroll HP. Mulai hari dengan kebiasaan kecil yang memberi 'win' pertama.",
            image: "./src/assets/produktivitas-1.svg"
        }
    ];

    const categories = ["Semua", ...new Set(articles.map(item => item.category))];
    let activeCategory = "Semua";

    const filterContainer = document.getElementById('filter-container');
    
    function renderButtons() {
        filterContainer.innerHTML = categories.map(cat => `
            <button 
                onclick="filterArticles('${cat}')"
                class="px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                    activeCategory === cat 
                    ? 'bg-emerald-600 text-white border-emerald-600 shadow-md' 
                    : 'bg-gray-100 text-gray-600 border-transparent hover:bg-gray-200'
                }"
            >
                ${cat}
            </button>
        `).join('');
    }

    const gridContainer = document.getElementById('articles-grid');

    function renderArticles() {
        const filteredData = activeCategory === "Semua" 
            ? articles 
            : articles.filter(item => item.category === activeCategory);
        
        gridContainer.innerHTML = filteredData.map(article => `
            <article class="break-inside-avoid bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer border border-gray-100 flex flex-col h-full animate-fadeIn">
                <div class="relative h-56 overflow-hidden">
                    <img src="${article.image}" alt="${article.title}" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent hover:from-black/0 transition duration-500"></div>
                    <span class="absolute bottom-0 left-0 bg-emerald-600 text-white text-[10px] font-bold px-3 py-1 rounded-tr-lg uppercase tracking-wider shadow-sm">
                        ${article.category}
                    </span>
                </div>
                
                <div class="p-6 flex flex-col grow">
                    <h4 class="font-bold text-lg leading-snug mb-3 text-gray-900 group-hover:text-emerald-600 transition-colors">
                        ${article.title}
                    </h4>
                    <p class="text-sm text-gray-500 leading-relaxed line-clamp-3">
                        ${article.desc}
                    </p>
                </div>
            </article>
        `).join('');
    }

    function filterArticles(category) {
        activeCategory = category;
        renderButtons();
        renderArticles();
    }

    renderButtons();
    renderArticles();

    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
            animation: fadeIn 0.5s ease-out forwards;
        }
    `;
    document.head.appendChild(style);