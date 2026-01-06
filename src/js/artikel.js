const articles = [
    {
        id: 1,
        category: "Tips Sehat",
        title: 'Mengenal "Ibu Kunyit" vs Kunyit Biasa',
        desc: "Apa bedanya, dan kenapa kami memilih biang kunyit untukmu.",
        image: "./src/assets/tips-sehat-1.webp",
    },
    {
        id: 2,
        category: "Gaya Hidup",
        title: "Revenge Bedtime Procrastination",
        desc: "Kenapa kita sengaja menunda tidur padahal badan sudah lelah? Fenomena ini lebih umum dari yang kamu kira.",
        image: "./src/assets/gaya-hidup-1.webp",
    },
    {
        id: 3,
        category: "Produktivitas",
        title: 'Teknik "Micro-Break" untuk Atasi Brain Fog Sore Hari',
        desc: "Produktivitas bukan soal kerja nonstop. Pelajari cara 'reset' otak dalam 5 menit agar performa tetap stabil sampai jam pulang.",
        image: "./src/assets/produktivitas-2.webp",
    },
    {
        id: 4,
        category: "Tips Sehat",
        title: "Olahraga Saat PMS: Bolehkah?",
        desc: "Gerakan ringan yang justru membantu meredakan kram perut.",
        image: "./src/assets/tips-sehat-2.webp",
    },
    {
        id: 5,
        category: "Tips Sehat",
        title: "Masuk Angin Karena AC Kantor? Ini Triknya.",
        desc: "Jangan biarkan suhu dingin menurunkan performa kerjamu.",
        image: "./src/assets/tips-sehat-3.webp",
    },
    {
        id: 6,
        category: "Resep",
        title: "DIY Mocktail: Kunyit Asam Sparkle",
        desc: "Minuman segar ala café yang bisa kamu buat di rumah—cukup botol GoodRaga dan soda dingin.",
        image: "./src/assets/resep-1.webp",
    },
    {
        id: 7,
        category: "Tips Sehat",
        title: "Mitos Gula Aren vs Gula Pasir",
        desc: "Benarkah gula aren lebih sehat untuk diabetes? Cek faktanya di sini.",
        image: "./src/assets/tips-sehat-4.webp",
    },
    {
        id: 8,
        category: "Resep",
        title: "Warm Hug: Wedang Jahe Susu Oat",
        desc: "Resep hangat, creamy, dan dairy-free untuk menemani sore hujan tanpa rasa bersalah.",
        image: "./src/assets/resep-2.webp",
    },
    {
        id: 9,
        category: "Produktivitas",
        title: "Ritual 10 Menit Pagi Biar Fokus Seharian",
        desc: "Bukan scroll HP. Mulai hari dengan kebiasaan kecil yang memberi 'win' pertama.",
        image: "./src/assets/produktivitas-1.webp",
    },
];

function resolveImagePath(originalPath) {
    const isInPagesFolder = window.location.pathname.includes("/pages/");

    if (isInPagesFolder) {
        return originalPath.replace("./", "../");
    }

    return originalPath;
}

function generateCardHTML(article, index) {
    const shouldEagerLoad = index < 3;
    const loadingMode = shouldEagerLoad ? "eager" : "lazy";
    const priorityAttr = index === 0 ? 'fetchpriority="high"' : "";

    const finalImagePath = resolveImagePath(article.image);

    return `
    <article class="break-inside-avoid bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer border border-gray/10 animate-fadeIn">
        <div class="relative h-40 xl:h-56 overflow-hidden">
            <img 
                src="${finalImagePath}" 
                alt="${article.title}" 
                loading="${loadingMode}"
                ${priorityAttr}
                width="400" 
                height="224"
                class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent hover:from-black/0 transition duration-500"></div>
            <span class="absolute bottom-0 left-0 bg-emerald-600 text-white text-[10px] font-bold px-3 py-1 rounded-tr-lg uppercase tracking-wider shadow-sm">
                ${article.category}
            </span>
        </div>
        
        <div class="p-4 flex flex-col grow">
            <h4 class="font-bold text-lg leading-snug mb-3 text-gray-900 group-hover:text-emerald-600 transition-colors">
                ${article.title}
            </h4>
            <p class="text-sm text-gray-500 leading-relaxed line-clamp-3">
                ${article.desc}
            </p>
        </div>
    </article>
    `;
}

const homeGrid = document.getElementById("home-articles-grid");

if (homeGrid) {
    const top3Articles = articles.slice(0, 3);
    homeGrid.innerHTML = top3Articles
        .map((article, index) => generateCardHTML(article, index))
        .join("");
}

const journalGrid = document.getElementById("articles-grid");
const filterContainer = document.getElementById("filter-container");

if (journalGrid && filterContainer) {
    const categories = [
        "Semua",
        ...new Set(articles.map((item) => item.category)),
    ];
    let activeCategory = "Semua";

    function renderButtons() {
        filterContainer.innerHTML = categories
            .map(
                (cat) => `
            <button 
                onclick="filterArticles('${cat}')"
                class="px-6 py-2 rounded-full text-xs whitespace-nowrap font-medium transition-all duration-300 ${
                    activeCategory === cat
                        ? "bg-emerald-600 text-white border-emerald-600 shadow-sm"
                        : "bg-gray/10 text-gray border-transparent hover:bg-gray/20"
                }"
            >
                ${cat}
            </button>
        `
            )
            .join("");
    }

    function renderJournalArticles() {
        const filteredData =
            activeCategory === "Semua"
                ? articles
                : articles.filter((item) => item.category === activeCategory);

        journalGrid.innerHTML = filteredData
            .map((article, index) => generateCardHTML(article, index))
            .join("");
    }

    window.filterArticles = function (category) {
        activeCategory = category;
        renderButtons();
        renderJournalArticles();
    };

    renderButtons();
    renderJournalArticles();
}
