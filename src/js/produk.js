const products = [
    {
        id: 1,
        name: "Kunyit Asam Fresh",
        isFavorite: true,
        desc: "Racikan kunyit dan asam jawa ini memiliki perpaduan rasa segar yang harmonis tanpa jejak pahit.",
        price: 15000,
        size: "250 ml",
        shelfLife: "6 hari",
        image: "./src/assets/produk.webp",
        benefits: [
            "Meredakan nyeri haid (PMS)",
            "Mendetoks racun dalam tubuh",
            "Mencerahkan kulit dari dalam",
        ],
        ingredients: ["Biang Kunyit", "Asam Jawa", "Gula Aren Organik"],
        tasteProfile: [
            { label: "Manis", score: 2 },
            { label: "Asam", score: 4 },
            { label: "Segar", score: 5 },
        ],
    },
    {
        id: 2,
        name: "Wedang Rempah Calm",
        isFavorite: false,
        desc: "Kehangatan rempah yang meresap lembut, ampuh merilekskan tubuh dan pikiranmu seketika.",
        price: 18000,
        size: "250 ml",
        shelfLife: "7 hari",
        image: "./src/assets/produk.webp",
        benefits: [
            "Meningkatkan kualitas tidur (Deep Sleep)",
            "Mengusir masuk angin & kembung",
            "Menghangatkan suhu tubuh",
        ],
        ingredients: ["Jahe Merah", "Serai", "Kayu Manis", "Cengkeh", "Pandan"],
        tasteProfile: [
            { label: "Manis", score: 3 },
            { label: "Pedas", score: 4 },
            { label: "Aroma", score: 5 },
        ],
    },
    {
        id: 3,
        name: "Imun Boost",
        isFavorite: false,
        desc: "Konsumsi secara rutin untuk membangun pertahanan alami tubuh agar selalu siap dan bugar.",
        price: 20000,
        size: "250 ml",
        shelfLife: "2 hari",
        image: "./src/assets/produk.webp",
        benefits: [
            "Meningkatkan sistem kekebalan tubuh",
            "Menjaga kesehatan mata",
            "Booster energi instan di pagi hari",
        ],
        ingredients: [
            "Jeruk Baby Java",
            "Wortel Impor",
            "Apel Malang",
            "Madu Hutan",
        ],
        tasteProfile: [
            { label: "Manis", score: 2 },
            { label: "Asam", score: 4 },
            { label: "Ringan", score: 4 },
        ],
    },
    {
        id: 4,
        name: "Kencur Aromatic",
        isFavorite: false,
        desc: "Kombinasi creamy dari beras sangrai dan kehangatan pedas kencur. 'Bensin' alami untuk stamina.",
        price: 16000,
        size: "250 ml",
        shelfLife: "5 hari",
        image: "./src/assets/produk.webp",
        benefits: [
            "Mengatasi pegal linu dan nyeri otot",
            "Mengembalikan stamina tubuh",
            "Meredakan batuk gatal",
        ],
        ingredients: ["Kencur Wangi", "Beras Sangrai", "Jahe Emprit"],
        tasteProfile: [
            { label: "Manis", score: 3 },
            { label: "Asam", score: 1 },
            { label: "Segar", score: 5 },
        ],
    },
    {
        id: 5,
        name: "Rosella Lemonade",
        desc: "Sajian teh bunga berwarna merah rubi menawarkan sensasi rasa asam segar mirip cranberry.",
        isFavorite: true,
        price: 15000,
        size: "250 ml",
        shelfLife: "5 hari",
        image: "./src/assets/produk.webp",
        benefits: [
            "Sumber antioksidan tinggi",
            "Membantu meluruhkan lemak (diet)",
            "Membantu menurunkan tekanan darah",
        ],
        ingredients: ["Bunga Rosella Kering", "Lemon Cui", "Madu"],
        tasteProfile: [
            { label: "Manis", score: 2 },
            { label: "Pedas", score: 1 },
            { label: "Aroma", score: 5 },
        ],
    },
    {
        id: 6,
        name: "Pure Temulawak",
        desc: "Minuman herbal dengan cita rasa khas ini bekerja efektif sebagai sahabat hati (liver).",
        isFavorite: true,
        price: 20000,
        size: "250 ml",
        shelfLife: "5 hari",
        image: "./src/assets/produk.webp",
        benefits: [
            "Meningkatkan nafsu makan (pemulihan)",
            "Menjaga kesehatan hati/liver",
            "Mengurangi jerawat hormonal",
        ],
        ingredients: ["Temulawak", "Pandan", "Gula Batu"],
        tasteProfile: [
            { label: "Manis", score: 2 },
            { label: "Asam", score: 1 },
            { label: "Ringan", score: 4 },
        ],
    },
    {
        id: 7,
        name: "Blue Pea Lemongrass",
        desc: "Infus bunga telang yang cantik dan sereh wangi ini menciptakan aroma terapeutik.",
        isFavorite: false,
        price: 17000,
        size: "250 ml",
        shelfLife: "3 hari",
        image: "./src/assets/produk.webp",
        benefits: [
            "Merilekskan saraf dan atasi insomnia",
            "Menjaga kesehatan mata",
            "Detoks ringan melancarkan urin",
        ],
        ingredients: ["Bunga Telang", "Sereh", "Jeruk Nipis"],
        tasteProfile: [
            { label: "Manis", score: 2 },
            { label: "Asam", score: 2 },
            { label: "Segar", score: 5 },
        ],
    },
    {
        id: 8,
        name: "Alang-Alang Roots",
        desc: "Minuman pendingin alami dari sari akar alang-alang ini terasa sangat ringan seperti air tebu.",
        isFavorite: false,
        price: 14000,
        size: "250 ml",
        shelfLife: "4 hari",
        image: "./src/assets/produk.webp",
        benefits: [
            "Sumber antioksidan tinggi",
            "Membantu meluruhkan lemak",
            "Meredakan panas dalam",
        ],
        ingredients: ["Akar Alang-alang", "Daun Pandan", "Gula Batu"],
        tasteProfile: [
            { label: "Manis", score: 3 },
            { label: "Pedas", score: 1 },
            { label: "Aroma", score: 5 },
        ],
    },
    {
        id: 9,
        name: "Sambiloto Detox",
        desc: "Meskipun memiliki rasa pahit yang dominan, ramuan ini adalah solusi alami yang kuat.",
        isFavorite: true,
        price: 15000,
        size: "250 ml",
        shelfLife: "7 hari",
        image: "./src/assets/produk.webp",
        benefits: [
            "Membantu menurunkan kadar gula darah",
            "Mengontrol kadar kolesterol jahat",
            "Antivirus dan antibiotik alami",
        ],
        ingredients: ["Daun Sambiloto", "Sedikit Garam Himalaya"],
        tasteProfile: [
            { label: "Manis", score: 1 },
            { label: "Asam", score: 1 },
            { label: "Ringan", score: 4 },
        ],
    },
];

function generateDots(score) {
    let dotsHTML = '<div class="flex gap-1">';
    for (let i = 1; i <= 5; i++) {
        if (i <= score) {
            dotsHTML += '<span class="w-2 h-2 rounded-full bg-primary"></span>';
        } else {
            dotsHTML += '<span class="w-2 h-2 rounded-full bg-gray/20"></span>';
        }
    }
    dotsHTML += "</div>";
    return dotsHTML;
}

const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID").format(number);
};

function resolveImagePath(originalPath) {
    const isInPagesFolder = window.location.pathname.includes("/pages/");
    return isInPagesFolder ? originalPath.replace("./", "../") : originalPath;
}

function createProductCard(product) {
    const benefitsList = product.benefits.map((b) => `<li>${b}</li>`).join("");
    const ingredientsList = product.ingredients
        .map((i) => `<li>${i}</li>`)
        .join("");

    const tasteProfileHTML = product.tasteProfile
        .map(
            (taste) => `
        <div class="flex gap-1.5 items-center">
            <span class="text-sm">${taste.label}</span>
            ${generateDots(taste.score)}
        </div>
    `
        )
        .join("");

    const bookmarkBadge = product.isFavorite
        ? `
    <div class="absolute top-0 right-6 w-6 h-8 md:w-8 md:h-10">
        <svg width="100%" height="100%" viewBox="0 0 30 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 41V0H30V41L15 25.8947L0 41Z" fill="#008357"/>
            <path d="M14.0489 6.92705C14.3483 6.00574 15.6517 6.00574 15.9511 6.92705L17.0206 10.2188C17.1545 10.6309 17.5385 10.9098 17.9717 10.9098H21.4329C22.4016 10.9098 22.8044 12.1494 22.0207 12.7188L19.2205 14.7533C18.87 15.0079 18.7234 15.4593 18.8572 15.8713L19.9268 19.1631C20.2261 20.0844 19.1717 20.8506 18.388 20.2812L15.5878 18.2467C15.2373 17.9921 14.7627 17.9921 14.4122 18.2467L11.612 20.2812C10.8283 20.8506 9.77385 20.0844 10.0732 19.1631L11.1428 15.8713C11.2766 15.4593 11.13 15.0079 10.7795 14.7533L7.97933 12.7188C7.19562 12.1494 7.59839 10.9098 8.56712 10.9098H12.0283C12.4615 10.9098 12.8455 10.6309 12.9794 10.2188L14.0489 6.92705Z" fill="white"/>
        </svg>
    </div>`
        : "";

    return `
    <div class="break-inside-avoid max-w-[450px] mx-auto lg:mx-0 group relative bg-white border border-gray/10 rounded-2xl p-4 shadow-sm hover:shadow-lg hover:bg-secondary/70 cursor-pointer transition duration-300">
        <div class="rounded-xl overflow-hidden mb-4 relative shrink-0">
            <img src="${resolveImagePath(product.image)}" alt="${
        product.name
    }" class="w-full h-50 xl:h-60 object-cover group-hover:scale-105 transition duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent hover:from-black/0 transition duration-500"></div>
            <span class="absolute bottom-0 left-0 bg-primary text-[10px] px-2.5 py-1.5 rounded-tr-lg text-white">Tahan ${
                product.shelfLife
            }</span>
            ${bookmarkBadge}
        </div>

        <div class="space-y-5 flex flex-col grow">
            <div class="space-y-2">
                <h3 class="font-bold text-lg xl:text-xl group-hover:text-primary transition">${
                    product.name
                }</h3>
                <p class="text-sm text-gray line-clamp-3">${product.desc}</p>
            </div>
            <div class="space-y-2">
                <h4 class="font-semibold text-base xl:text-lg">Manfaat</h4>
                <ul class="list-disc list-inside text-sm text-gray space-y-1">${benefitsList}</ul>
            </div>
            <div class="space-y-2">
                <h4 class="font-semibold text-base xl:text-lg">Bahan Utama</h4>
                <ul class="list-disc list-inside text-sm text-gray space-y-1">
                    ${ingredientsList}
                </ul>
            </div>
            <div class="space-y-2">
                <h4 class="font-semibold text-base xl:text-lg">Karakter Rasa</h4>
                <div class="flex justify-start flex-col xl:flex-row lg:justify-between space-y-1 flex-wrap gap-y-2">${tasteProfileHTML}</div>
            </div>
            <div class="flex justify-between items-center pt-3 border-t border-gray/20">
                <div class="flex gap-2 items-baseline">
                    <h3 class="font-bold text-lg xl:text-xl"><span class="text-xs xl:text-sm">Rp</span> ${formatRupiah(
                        product.price
                    )}</h3>
                    <span class="text-xs xl:text-sm text-gray font-medium">/ ${
                        product.size
                    }</span>
                </div>
                <button class="btn-cart p-2.5 rounded-full bg-primary font-semibold hover:bg-emerald-800 transition shadow-md hover:shadow-lg transform active:scale-95">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="w-4 h-4 xl:w-5 xl:h-5 fill-current text-white">
                        <path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/>
                    </svg>
                </button>
            </div>
        </div>
    </div>
    `;
}

const homeProductGrid = document.getElementById("home-product-grid");
if (homeProductGrid) {
    const topProducts = products.slice(0, 3);
    homeProductGrid.innerHTML = topProducts.map(createProductCard).join("");
}

const fullProductGrid = document.getElementById("product-grid");
if (fullProductGrid) {
    fullProductGrid.innerHTML = products.map(createProductCard).join("");
}

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