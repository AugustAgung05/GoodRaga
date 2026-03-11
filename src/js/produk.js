// const products = [
//     {
//         id: 1,
//         name: "Kunyit Asam Fresh",
//         isFavorite: true,
//         desc: "Racikan kunyit dan asam jawa ini memiliki perpaduan rasa segar yang harmonis tanpa jejak pahit.",
//         price: 15000,
//         size: "250 ml",
//         shelfLife: "6 hari",
//         image: "./src/assets/produk.webp",
//         benefits: [
//             "Meredakan nyeri haid (PMS)",
//             "Mendetoks racun dalam tubuh",
//             "Mencerahkan kulit dari dalam",
//         ],
//         ingredients: ["Biang Kunyit", "Asam Jawa", "Gula Aren Organik"],
//         tasteProfile: [
//             { label: "Manis", score: 2 },
//             { label: "Asam", score: 4 },
//             { label: "Segar", score: 5 },
//         ],
//     },
//     {
//         id: 2,
//         name: "Wedang Rempah Calm",
//         isFavorite: false,
//         desc: "Kehangatan rempah yang meresap lembut, ampuh merilekskan tubuh dan pikiranmu seketika.",
//         price: 18000,
//         size: "250 ml",
//         shelfLife: "7 hari",
//         image: "./src/assets/produk.webp",
//         benefits: [
//             "Meningkatkan kualitas tidur (Deep Sleep)",
//             "Mengusir masuk angin & kembung",
//             "Menghangatkan suhu tubuh",
//         ],
//         ingredients: ["Jahe Merah", "Serai", "Kayu Manis", "Cengkeh", "Pandan"],
//         tasteProfile: [
//             { label: "Manis", score: 3 },
//             { label: "Pedas", score: 4 },
//             { label: "Aroma", score: 5 },
//         ],
//     },
//     {
//         id: 3,
//         name: "Imun Boost",
//         isFavorite: false,
//         desc: "Konsumsi secara rutin untuk membangun pertahanan alami tubuh agar selalu siap dan bugar.",
//         price: 20000,
//         size: "250 ml",
//         shelfLife: "2 hari",
//         image: "./src/assets/produk.webp",
//         benefits: [
//             "Meningkatkan sistem kekebalan tubuh",
//             "Menjaga kesehatan mata",
//             "Booster energi instan di pagi hari",
//         ],
//         ingredients: [
//             "Jeruk Baby Java",
//             "Wortel Impor",
//             "Apel Malang",
//             "Madu Hutan",
//         ],
//         tasteProfile: [
//             { label: "Manis", score: 2 },
//             { label: "Asam", score: 4 },
//             { label: "Ringan", score: 4 },
//         ],
//     },
//     {
//         id: 4,
//         name: "Kencur Aromatic",
//         isFavorite: false,
//         desc: "Kombinasi creamy dari beras sangrai dan kehangatan pedas kencur. 'Bensin' alami untuk stamina.",
//         price: 16000,
//         size: "250 ml",
//         shelfLife: "5 hari",
//         image: "./src/assets/produk.webp",
//         benefits: [
//             "Mengatasi pegal linu dan nyeri otot",
//             "Mengembalikan stamina tubuh",
//             "Meredakan batuk gatal",
//         ],
//         ingredients: ["Kencur Wangi", "Beras Sangrai", "Jahe Emprit"],
//         tasteProfile: [
//             { label: "Manis", score: 3 },
//             { label: "Asam", score: 1 },
//             { label: "Segar", score: 5 },
//         ],
//     },
//     {
//         id: 5,
//         name: "Rosella Lemonade",
//         desc: "Sajian teh bunga berwarna merah rubi menawarkan sensasi rasa asam segar mirip cranberry.",
//         isFavorite: true,
//         price: 15000,
//         size: "250 ml",
//         shelfLife: "5 hari",
//         image: "./src/assets/produk.webp",
//         benefits: [
//             "Sumber antioksidan tinggi",
//             "Membantu meluruhkan lemak (diet)",
//             "Membantu menurunkan tekanan darah",
//         ],
//         ingredients: ["Bunga Rosella Kering", "Lemon Cui", "Madu"],
//         tasteProfile: [
//             { label: "Manis", score: 2 },
//             { label: "Pedas", score: 1 },
//             { label: "Aroma", score: 5 },
//         ],
//     },
//     {
//         id: 6,
//         name: "Pure Temulawak",
//         desc: "Minuman herbal dengan cita rasa khas ini bekerja efektif sebagai sahabat hati (liver).",
//         isFavorite: true,
//         price: 20000,
//         size: "250 ml",
//         shelfLife: "5 hari",
//         image: "./src/assets/produk.webp",
//         benefits: [
//             "Meningkatkan nafsu makan (pemulihan)",
//             "Menjaga kesehatan hati/liver",
//             "Mengurangi jerawat hormonal",
//         ],
//         ingredients: ["Temulawak", "Pandan", "Gula Batu"],
//         tasteProfile: [
//             { label: "Manis", score: 2 },
//             { label: "Asam", score: 1 },
//             { label: "Ringan", score: 4 },
//         ],
//     },
//     {
//         id: 7,
//         name: "Blue Pea Lemongrass",
//         desc: "Infus bunga telang yang cantik dan sereh wangi ini menciptakan aroma terapeutik.",
//         isFavorite: false,
//         price: 17000,
//         size: "250 ml",
//         shelfLife: "3 hari",
//         image: "./src/assets/produk.webp",
//         benefits: [
//             "Merilekskan saraf dan atasi insomnia",
//             "Menjaga kesehatan mata",
//             "Detoks ringan melancarkan urin",
//         ],
//         ingredients: ["Bunga Telang", "Sereh", "Jeruk Nipis"],
//         tasteProfile: [
//             { label: "Manis", score: 2 },
//             { label: "Asam", score: 2 },
//             { label: "Segar", score: 5 },
//         ],
//     },
//     {
//         id: 8,
//         name: "Alang-Alang Roots",
//         desc: "Minuman pendingin alami dari sari akar alang-alang ini terasa sangat ringan seperti air tebu.",
//         isFavorite: false,
//         price: 14000,
//         size: "250 ml",
//         shelfLife: "4 hari",
//         image: "./src/assets/produk.webp",
//         benefits: [
//             "Sumber antioksidan tinggi",
//             "Membantu meluruhkan lemak",
//             "Meredakan panas dalam",
//         ],
//         ingredients: ["Akar Alang-alang", "Daun Pandan", "Gula Batu"],
//         tasteProfile: [
//             { label: "Manis", score: 3 },
//             { label: "Pedas", score: 1 },
//             { label: "Aroma", score: 5 },
//         ],
//     },
//     {
//         id: 9,
//         name: "Sambiloto Detox",
//         desc: "Meskipun memiliki rasa pahit yang dominan, ramuan ini adalah solusi alami yang kuat.",
//         isFavorite: true,
//         price: 15000,
//         size: "250 ml",
//         shelfLife: "7 hari",
//         image: "./src/assets/produk.webp",
//         benefits: [
//             "Membantu menurunkan kadar gula darah",
//             "Mengontrol kadar kolesterol jahat",
//             "Antivirus dan antibiotik alami",
//         ],
//         ingredients: ["Daun Sambiloto", "Sedikit Garam Himalaya"],
//         tasteProfile: [
//             { label: "Manis", score: 1 },
//             { label: "Asam", score: 1 },
//             { label: "Ringan", score: 4 },
//         ],
//     },
// ];


const products = [
    {
        id: 1,
        name: "Kunyit Asem Original",
        isFavorite: true,
        desc: "Minuman herbal tradisional dengan perpaduan kunyit pilihan dan asam jawa yang menyegarkan, cocok diminum setiap hari untuk menjaga kebugaran tubuh.",
        price: 15000,
        size: "250 ml",
        shelfLife: "6 hari",
        image: [
            "./src/assets/produk-1-1.webp",
            "./src/assets/produk-1-2.webp",
            "./src/assets/produk-1-3.webp",
        ],
        benefits: [
            "Meredakan nyeri haid (PMS)",
            "Melancarkan Pencernaan",
            "Menyehatkan Kulit",
            "Membantu daya tahan tubuh",
        ],
        ingredients: ["Asam Jawa", "Gula Merah", "Kunyit"],
        tasteProfile: [
            { label: "Manis", score: 3 },
            { label: "Asam", score: 4 },
            { label: "Segar", score: 5 },
        ],
    },
    {
        id: 2,
        name: "Jahe Lemon Sereh",
        isFavorite: true,
        desc: "Racikan jahe hangat, lemon segar, dan sereh aromatik yang memberikan sensasi hangat menyegarkan, cocok untuk diminum saat tubuh terasa kurang fit.",
        price: 16000,
        size: "250 ml",
        shelfLife: "6 hari",
        image: [
            "./src/assets/produk-2-1.webp",
            "./src/assets/produk-2-2.webp",
            "./src/assets/produk-2-3.webp",
        ],
        benefits: [
            "Sehatkan Pencernaan",
            "Bantu Turunkan Berat Badan",
            "Bantu Detoks Tubuh",
            "Meningkatkan Sistem Imun",
        ],
        ingredients: ["Lemon", "Sereh", "Jahe", "Madu"],
        tasteProfile: [
            { label: "Manis", score: 2 },
            { label: "Asam", score: 4 },
            { label: "Hangat", score: 5 },
        ],
    },
]



// ==========================================
// 1. SETUP LIGHTBOX (Tetap Sama)
// ==========================================
function initLightbox() {
    if (document.getElementById('global-lightbox')) return;
    const lightboxHTML = `
    <div id="global-lightbox" class="fixed inset-0 z-[9999] bg-black/95 hidden flex items-center justify-center opacity-0 transition-opacity duration-300 backdrop-blur-sm">
        <button onclick="closeLightbox()" class="fixed top-6 right-6 z-[10000] text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 md:h-10 md:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
        <img id="lightbox-image" src="" class="max-h-[85vh] max-w-[90vw] object-contain shadow-2xl rounded-sm transform scale-95 transition-transform duration-300 select-none" alt="Full Preview">
    </div>`;
    document.body.insertAdjacentHTML('beforeend', lightboxHTML);
    document.getElementById('global-lightbox').addEventListener('click', (e) => {
        if (e.target.id === 'global-lightbox') closeLightbox();
    });
}
window.openLightbox = (src) => {
    const lb = document.getElementById('global-lightbox');
    const img = document.getElementById('lightbox-image');
    img.src = src;
    lb.classList.remove('hidden');
    setTimeout(() => { lb.classList.remove('opacity-0'); img.classList.add('scale-100'); }, 10);
};
window.closeLightbox = () => {
    const lb = document.getElementById('global-lightbox');
    const img = document.getElementById('lightbox-image');
    lb.classList.add('opacity-0'); img.classList.remove('scale-100');
    setTimeout(() => { lb.classList.add('hidden'); img.src = ''; }, 300);
};

// ==========================================
// 2. LOGIKA CORE SLIDER
// ==========================================

function updateDots(container, index, totalRealImages) {
    const dots = container.querySelectorAll('.dot-indicator');
    const activeIndex = index >= totalRealImages ? 0 : index;
    dots.forEach((dot, idx) => {
        if (idx === activeIndex) {
            dot.classList.remove('bg-white/50', 'scale-100');
            dot.classList.add('bg-primary', 'scale-125');
        } else {
            dot.classList.add('bg-white/50', 'scale-100');
            dot.classList.remove('bg-primary', 'scale-125');
        }
    });
}

// Fungsi START (Bisa dipanggil oleh Hover Desktop ATAU Mobile Init)
window.startAutoSlide = (container) => {
    const slider = container.querySelector('.product-slider');
    const totalRealImages = parseInt(container.dataset.realCount || 1);
    
    // Safety check
    if (totalRealImages <= 1) return;

    // Bersihkan interval lama agar tidak dobel
    if (container.dataset.interval) clearInterval(container.dataset.interval);
    
    // Inisialisasi index
    if (!container.dataset.currentIndex) container.dataset.currentIndex = "0";

    const intervalId = setInterval(() => {
        // PENTING: Jika di Desktop, slider jangan gerak kalau mouse TIDAK hover (Double safety)
        if (window.innerWidth >= 1024 && !container.matches(':hover')) {
            clearInterval(container.dataset.interval);
            delete container.dataset.interval;
            return;
        }

        let currentIndex = parseInt(container.dataset.currentIndex);
        const itemWidth = slider.clientWidth;
        currentIndex++;

        if (currentIndex === totalRealImages) {
            // Logic Infinite Clone
            slider.style.scrollBehavior = 'smooth'; 
            slider.scrollLeft = currentIndex * itemWidth;
            updateDots(container, 0, totalRealImages);
            setTimeout(() => {
                slider.style.scrollBehavior = 'auto'; 
                slider.scrollLeft = 0; 
                container.dataset.currentIndex = "0"; 
            }, 500); 
        } else {
            // Logic Normal
            slider.style.scrollBehavior = 'smooth';
            slider.scrollLeft = currentIndex * itemWidth;
            container.dataset.currentIndex = currentIndex.toString();
            updateDots(container, currentIndex, totalRealImages);
        }
    }, 2500);

    container.dataset.interval = intervalId;
};

// Fungsi STOP (Hanya bekerja di Desktop)
window.stopAutoSlide = (container, forceStop = false) => {
    // JANGAN STOP jika di Mobile (Layar < 1024), KECUALI dipaksa (forceStop)
    if (window.innerWidth < 1024 && !forceStop) return;

    if (container.dataset.interval) {
        clearInterval(container.dataset.interval);
        delete container.dataset.interval;
        
        // Kembalikan ke posisi snap terdekat agar rapi
        const slider = container.querySelector('.product-slider');
        const index = Math.round(slider.scrollLeft / slider.clientWidth);
        const totalRealImages = parseInt(container.dataset.realCount || 1);
        
        container.dataset.currentIndex = index.toString();
        updateDots(container, index, totalRealImages);
    }
};

// ==========================================
// 3. HELPER FUNCTIONS
// ==========================================
function generateDots(score) {
    let html = '<div class="flex gap-1">';
    for (let i = 1; i <= 5; i++) html += `<span class="w-1.5 h-1.5 rounded-full ${i <= score ? 'bg-primary' : 'bg-gray/20'}"></span>`;
    return html + '</div>';
}
const formatRupiah = (n) => new Intl.NumberFormat("id-ID").format(n);
function resolveImagePath(path) {
    return window.location.pathname.includes("/pages/") ? path.replace("./", "../") : path;
}


// ==========================================
// 4. CREATE PRODUCT CARD
// ==========================================
function createProductCard(product) {
    const rawImages = Array.isArray(product.image) ? product.image : [product.image];
    const realCount = rawImages.length;
    const displayImages = realCount > 1 ? [...rawImages, rawImages[0]] : rawImages;

    const imagesHTML = displayImages.map((img) => {
        const fullPath = resolveImagePath(img); 
        return `
        <div class="min-w-full h-full snap-center relative cursor-zoom-in flex justify-center bg-gray-50" onclick="openLightbox('${fullPath}')">
            <img src="${fullPath}" alt="${product.name}" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-black/0 hover:bg-black/5 transition duration-300"></div>
        </div>`;
    }).join('');

    const dotsIndicator = realCount > 1 ? `
        <div class="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 pointer-events-none p-1.5 rounded-full bg-black/20 backdrop-blur-sm transition-opacity duration-300 lg:opacity-0 lg:group-hover:opacity-100">
             ${rawImages.map((_, i) => `
                <div class="dot-indicator w-2 h-2 rounded-full transition-all duration-300 ${i === 0 ? 'bg-primary scale-125' : 'bg-white/50 scale-100'}"></div>
             `).join('')}
        </div>
    ` : '';

    const benefitsList = product.benefits.map(b => `<li>${b}</li>`).join("");
    const ingredientsList = product.ingredients.map(i => `<li>${i}</li>`).join("");
    const tasteProfileHTML = product.tasteProfile.map(t => `<div class="flex gap-1.5 items-center"><span class="text-xs sm:text-sm">${t.label}</span>${generateDots(t.score)}</div>`).join("");
    const bookmarkBadge = product.isFavorite ? `<div class="absolute top-0 right-6 z-20 w-6 h-8 md:w-8 md:h-10 pointer-events-none"><svg width="100%" height="100%" viewBox="0 0 30 41" fill="none"><path d="M0 41V0H30V41L15 25.8947L0 41Z" fill="#008357"/><path d="M14.04 6.92C14.34 6 15.65 6 15.95 6.92L17.02 10.21H21.43C22.4 10.21 22.8 11.45 22.02 12.02L19.22 14.05L19.92 18.46C20.22 19.38 19.17 20.15 18.38 19.58L15.58 17.54L12.79 19.58C12 20.15 10.95 19.38 11.25 18.46L11.95 14.05L9.15 12.02C8.37 11.45 8.77 10.21 9.74 10.21H14.15L14.04 6.92Z" fill="white"/></svg></div>` : "";

    return `
    <div class="break-inside-avoid w-[90%] xs:w-[85%] s:w-[75%] md:w-auto max-w-[400px] md:max-w-max mx-auto md:mx-0 group relative bg-white border border-gray/10 rounded-2xl p-4 shadow-sm hover:shadow-lg hover:bg-secondary/70 transition duration-300 flex flex-col h-full">
        
        <div class="auto-slider-container rounded-xl overflow-hidden mb-4 relative shrink-0 h-40 s:h-44 md:h-50 xl:h-60" 
             onmouseenter="startAutoSlide(this)" 
             onmouseleave="stopAutoSlide(this)"
             data-real-count="${realCount}"> 
            
            <div class="product-slider flex w-full h-full overflow-x-auto snap-x snap-mandatory scrollbar-hide">
                ${imagesHTML}
            </div>

            ${dotsIndicator}
            <span class="absolute bottom-0 left-0 bg-primary z-20 text-[10px] px-2.5 py-1.5 rounded-tr-lg text-white pointer-events-none shadow-md">Tahan ${product.shelfLife}</span>
            ${bookmarkBadge}
        </div>

        <div class="space-y-5 flex flex-col grow">
            <div class="space-y-2"><h3 class="font-bold text-base sm:text-lg xl:text-xl group-hover:text-primary transition">${product.name}</h3><p class="text-xs sm:text-sm text-gray line-clamp-3">${product.desc}</p></div>
            <div class="space-y-2"><h4 class="font-semibold text-base xl:text-lg">Manfaat</h4><ul class="list-disc list-inside text-xs sm:text-sm text-gray space-y-1">${benefitsList}</ul></div>
            <div class="space-y-2"><h4 class="font-semibold text-base xl:text-lg">Bahan Utama</h4><ul class="list-disc list-inside text-xs sm:text-sm text-gray space-y-1">${ingredientsList}</ul></div>
            <div class="space-y-2"><h4 class="font-semibold text-base xl:text-lg">Karakter Rasa</h4><div class="flex justify-start flex-col xl:flex-row lg:justify-between space-y-1 flex-wrap gap-y-2">${tasteProfileHTML}</div></div>
            <div class="flex justify-between items-center pt-3 border-t border-gray/20 mt-auto">
                <div class="flex gap-2 items-baseline"><h3 class="font-bold text-lg xl:text-xl"><span class="text-xs xl:text-sm">Rp</span> ${formatRupiah(product.price)}</h3><span class="text-xs xl:text-sm text-gray font-medium">/ ${product.size}</span></div>
                <button class="btn-cart p-2.5 rounded-full bg-primary font-semibold hover:bg-emerald-800 transition shadow-md hover:shadow-lg transform active:scale-95">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="w-4 h-4 xl:w-5 xl:h-5 fill-current text-white"><path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>
                </button>
            </div>
        </div>
    </div>`;
}

// ==========================================
// 5. INISIALISASI & RESPONSIVE CHECKER (FIXED)
// ==========================================

initLightbox();

const homeProductGrid = document.getElementById("home-product-grid");
if (homeProductGrid) homeProductGrid.innerHTML = products.slice(0, 3).map(createProductCard).join("");
const fullProductGrid = document.getElementById("product-grid");
if (fullProductGrid) fullProductGrid.innerHTML = products.map(createProductCard).join("");


// --- FUNGSI PENGATUR STATE (MOBILE vs DESKTOP) ---
function handleResizeOrInit() {
    const sliders = document.querySelectorAll('.auto-slider-container');
    
    // Jika Mobile (< 1024px)
    if (window.innerWidth < 1024) {
        sliders.forEach(container => {
            // PAKSA Start (abaikan hover)
            startAutoSlide(container);
        });
    } 
    // Jika Desktop (>= 1024px)
    else {
        sliders.forEach(container => {
            // PAKSA Stop (bersihkan interval sisa mobile)
            // 'true' artinya force stop, walaupun logic stopAutoSlide biasanya menolak
            stopAutoSlide(container, true);
        });
    }
}
// Foto produk close-up dengan gaya hiper-realistis
// menampilkan toples madu kaca, diletakkan
// di atas permukaan kayu rustic di tengah ladang
// bunga yang sedang bermekaran. Di sekitar toples
// terdapat bunga-bunga liar segar, lebah-lebah
// beterbangan secara lembut, dan sarang lebah
// alami yang tergantung di dekatnya, meneteskan
// madu keemasan. Pencahayaan hangat khas
// golden hour menyinari adegan dengan bayangan
// lembut dan efek depth of field yang dangkal. Latar
// belakang mencakup pepohonan yang terlihat
// buram serta efek bokeh alami yang halus. Detail
// tekstur yang kaya, kualitas ultra-HD, komposisi
// sinematik, dan estetika khas Instagram
// Jalankan saat Load
handleResizeOrInit();

// Jalankan saat Resize (antisipasi user merubah ukuran browser)
window.addEventListener('resize', handleResizeOrInit);

(() => {
    const revealsProduk = document.querySelectorAll(".reveal-produk");
    if (!revealsProduk.length) return;

    const observerProduk = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate-fadeIn");
                    entry.target.classList.remove("opacity-0");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.01 }
    );

    revealsProduk.forEach((el) => observerProduk.observe(el));
})();