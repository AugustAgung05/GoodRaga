const rawMaterials = [
    {
        category: "RIMPANG & AKAR",
        desc: "Pondasi Rasa dan Khasiat Utama.",
        items: [
            {
                name: "Biang Kunyit",
                tagline: "The Golden Healer",
                desc: "Kunyit pilihan dengan kandungan kurkumin tinggi untuk membantu meredakan peradangan dan nyeri.",
                image: "../src/assets/manfaat-items.webp",
            },
            {
                name: "Jahe Merah",
                tagline: "The Warmer",
                desc: "Varian jahe paling hangat. Membantu meredakan masuk angin dan mendukung imun alami.",
                image: "../src/assets/manfaat-items.webp",
            },
            {
                name: "Kencur Wangi",
                tagline: "The Energizer",
                desc: "Aromatik khas yang menyegarkan napas dan membantu memulihkan otot yang pegal.",
                image: "../src/assets/manfaat-items.webp",
            },
            {
                name: "Temulawak",
                tagline: "Liver's Bestie",
                desc: "Mendukung kesehatan hati dan lambung, membantu detoks alami dan meningkatkan nafsu makan.",
                image: "../src/assets/manfaat-items.webp",
            },
            {
                name: "Akar Alang-alang",
                tagline: "The Cooler",
                desc: "Pendingin alami tubuh, membantu meredakan panas dalam dan sakit tenggorokan.",
                image: "../src/assets/manfaat-items.webp",
            },
        ],
    },
    {
        category: "REMPAH & DAUN",
        desc: "Aroma dan Penenang yang Menenangkan.",
        items: [
            {
                name: "Sereh Wangi",
                tagline: "Aroma Therapy",
                desc: "Minyak atsiri alaminya membantu relaksasi saraf dan kualitas tidur.",
                image: "../src/assets/manfaat-items.webp",
            },
            {
                name: "Kayu Manis",
                tagline: "Sweet Spice",
                desc: "Membantu menyeimbangkan gula darah dan melancarkan sirkulasi.",
                image: "../src/assets/manfaat-items.webp",
            },
            {
                name: "Cengkeh",
                tagline: "Warm Spark",
                desc: "Memberi sensasi hangat di dada dan memiliki sifat antibakteri alami.",
                image: "../src/assets/manfaat-items.webp",
            },
            {
                name: "Pandan Wangi",
                tagline: "Natural Vanilla",
                desc: "Aroma lembut yang menenangkan dan ramah untuk pencernaan.",
                image: "../src/assets/manfaat-items.webp",
            },
            {
                name: "Bunga Rosella",
                tagline: "The Ruby Red",
                desc: "Kaya vitamin C dan antioksidan, baik untuk kesehatan kulit dan diet.",
                image: "../src/assets/manfaat-items.webp",
            },
            {
                name: "Bunga Telang",
                tagline: "Blue Calm",
                desc: "Sumber antioksidan alami yang mendukung kesehatan mata dan membantu meredakan stres.",
                image: "../src/assets/manfaat-items.webp",
            },
            {
                name: "Beras Sangrai",
                tagline: "Creamy Base",
                desc: "Disangrai hingga harum untuk memberi tekstur lembut dan creamy pada racikan kencur.",
                image: "../src/assets/manfaat-items.webp",
            },
            {
                name: "Daun Sambiloto",
                tagline: "Bitter King",
                desc: "Rasa pahit kuat dengan manfaat membantu mengontrol gula darah.",
                image: "../src/assets/manfaat-items.webp",
            },
        ],
    },
    {
        category: "BUAH & SAYUR",
        desc: "Sumber Vitamin Segar Alami.",
        items: [
            {
                name: "Asam Jawa",
                tagline: "Fresh Kick",
                desc: "Memberi rasa segar alami dan membantu pencernaan.",
                image: "../src/assets/manfaat-items.webp",
            },
            {
                name: "Jeruk Baby Java",
                tagline: "Sweet Citrus",
                desc: "Manis alami tanpa gula tambahan, kaya vitamin C untuk konsumsi harian.",
                image: "../src/assets/manfaat-items.webp",
            },
            {
                name: "Jeruk Nipis",
                tagline: "Zesty Fresh",
                desc: "Penyeimbang rasa alami dan pendukung metabolisme lemak.",
                image: "../src/assets/manfaat-items.webp",
            },
            {
                name: "Lemon Cui",
                tagline: "Tiny Sour",
                desc: "Aroma khas yang tajam dan segar, berbeda dari lemon biasa.",
                image: "../src/assets/manfaat-items.webp",
            },
            {
                name: "Wortel",
                tagline: "Eye Defender",
                desc: "Tinggi beta-karoten untuk mendukung kesehatan mata dan kulit.",
                image: "../src/assets/manfaat-items.webp",
            },
            {
                name: "Apel Malang",
                tagline: "Crispy Sweet",
                desc: "Manis segar dengan kandungan serat pektin yang baik untuk pencernaan.",
                image: "../src/assets/manfaat-items.webp",
            },
        ],
    },
    {
        category: "PEMANIS & PELENGKAP",
        desc: "Tanpa Gula Pasir Rafinasi.",
        items: [
            {
                name: "Gula Aren Organik",
                tagline: "Caramel Note",
                desc: "Indeks glikemik lebih rendah dari gula pasir, aman untuk energi harian.",
                image: "../src/assets/manfaat-items.webp",
            },
            {
                name: "Madu Hutan",
                tagline: "Liquid Gold",
                desc: "Madu murni dari lebah liar dengan sifat antibakteri alami.",
                image: "../src/assets/manfaat-items.webp",
            },
            {
                name: "Gula Batu",
                tagline: "Mild Sweet",
                desc: "Pemanis lembut yang tidak meninggalkan rasa gatal di tenggorokan.",
                image: "../src/assets/manfaat-items.webp",
            },
            {
                name: "Garam Himalaya",
                tagline: "Mineral Touch",
                desc: "Penyeimbang rasa alami dengan kandungan mineral murni.",
                image: "../src/assets/manfaat-items.webp",
            },
        ],
    },
];

const mainContainer = document.querySelector("#content-start div");

if (mainContainer) {
    mainContainer.innerHTML = rawMaterials
        .map((section) => {
            const cardsHTML = section.items
                .map(
                    (item) => `
            <div class="max-w-[400px] md:max-w-full mx-auto group bg-white rounded-xl shadow-sm hover:shadow-lg transition duration-300 overflow-hidden border border-gray/10">
                <div class="h-40 xl:h-56 overflow-hidden relative">
                    <img 
                        src="${item.image}" 
                        alt="${item.name}" 
                        class="w-full h-full object-cover group-hover:scale-110 transition duration-700 ease-in-out"
                    >
                    <div class="absolute inset-0 bg-black/20 group-hover:bg-transparent transition duration-500"></div>
                </div>

                <div class="p-4 flex flex-col">
                    <h3 class="font-bold text-lg text-black mb-0.5">${item.name}</h3>
                    <p class="text-xs text-gray/60 italic mb-3">${item.tagline}</p>
                    
                    <p class="text-sm text-gray leading-relaxed">
                        ${item.desc}
                    </p>
                </div>
            </div>
        `
                )
                .join("");

            return `
            <section class="reveal translate-y-10 opacity-0 transition-all duration-1000">
                <div class="mb-8 border-l-4 border-primary pl-4">
                    <h2 class="text-sm font-bold uppercase tracking-widest text-gray mb-1">
                        KATEGORI <span class="text-primary">${section.category}</span>
                    </h2>
                    <p class="text-gray text-sm italic">${section.desc}</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    ${cardsHTML}
                </div>
            </section>
        `;
        })
        .join("");
}
