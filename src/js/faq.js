const faqData = [
    {
        q: "Apa itu GoodRaga?",
        a: "GoodRaga adalah brand jamu modern yang menggabungkan resep tradisional dengan sentuhan kontemporer, menggunakan bahan alami berkualitas tinggi untuk kesehatan optimal.",
    },
    {
        q: "Jujur, rasanya pahit nggak?",
        a: "Nggak dong. Prinsip GoodRaga adalah \"Sehat Nggak Harus Pahit\". Kami meracik ulang resep kuno agar 'ramah' di lidah modern. Rasanya segar, asam-manis seimbang, dan clean.",
    },
    {
        q: "Aman untuk penderita maag atau gerd?",
        a: "Sangat aman, bahkan dianjurkan! Bahan utama seperti kunyit mengandung zat kurkumin yang efektif meredakan peradangan pada lambung. Namun, jika kamu memiliki lambung yang sangat sensitif, kami sarankan untuk meminumnya setelah makan dan hindari perut kosong, ya.",
    },
    {
        q: "Tahan berapa lama di suhu ruang?",
        a: "Karena GoodRaga dibuat 100% alami tanpa pengawet buatan, ketahanannya sangat bergantung pada suhu:",
        list:[
            "Suhu ruang, tahan maksimal 24 jam (karena rentan fermentasi alami)",
            "Di dalam kulkas (suhu 4°C), tahan 4-7 hari tergantung varian produk",
            "Di freezer, bisa tahan hingga 2-3 minggu",
        ],
        tip: "Begitu paket sampai, langsung masukkan ke kulkas agar kesegarannya terjaga!",
    },
    {
        q: "Anak kecil boleh minum ini?",
        a: "Boleh banget! Varian Beras Kencur adalah favorit anak-anak GoodRaga. Rasanya yang manis, gurih, dan hangat sangat ampuh untuk menambah nafsu makan si kecil dan menjaga daya tahan tubuh mereka dari flu.",
    },
    {
        q: "Kapan waktu terbaik minumnya?",
        a: "Sebenarnya fleksibel, tapi ini rekomendasinya:",
        list:[
            "Pagi hari (perut kosong), terbaik untuk detoksifikasi dan penyerapan nutrisi maksimal",
            "Siang hari, diminum dingin dengan es batu sangat menyegarkan di cuaca panas",
            "Malam hari (sebelum tidur), cocok untuk varian Jahe/Rempah agar tubuh rileks dan tidur lebih nyenyak",
        ],
    },
    {
        q: "Apakah produk GoodRaga aman untuk ibu hamil?",
        a: "Beberapa produk seperti 'Wedang Rempah Calm' sangat aman. Namun, untuk produk dengan kandungan kunyit tinggi, kami sarankan konsultasi dengan dokter terlebih dahulu meskipun bahan kami 100% alami.",
    },
    {
        q: "Apakah mengandung gula pasir?",
        a: "Tidak. Kami hanya menggunakan Gula Aren Organik, Madu Hutan, atau Gula Batu tergantung varian produknya. Lebih aman untuk gula darah dibanding gula rafinasi.",
    },
    {
        q: "Bagaimana cara menjadi reseller?",
        a: "Silakan hubungi admin via WhatsApp untuk mendapatkan katalog harga khusus reseller. Minimum pembelian awal hanya 10 botol.",
    },
    {
        q: "Apakah bisa request tanpa gula (Unsweetened)?",
        a: "Bisa banget! Kami menyediakan opsi Pre-Order (H-1) untuk varian tanpa gula atau less sugar sesuai kebutuhan dietmu.",
    },
    {
        q: "Jam operasional pengiriman jam berapa?",
        a: "Senin - Sabtu: 09.00 - 16.00 WIB. Pesanan di atas jam 14.00 berpotensi dikirim hari berikutnya. Minggu dan Tanggal Merah libur.",
    },
    {
        q: "Apakah sudah bersertifikat Halal?",
        a: "Semua bahan baku kami tersertifikasi Halal dan kami sedang dalam proses pengurusan sertifikasi Halal MUI untuk brand GoodRaga. Doakan lancar ya!",
    },
];

function createFaqItem(item, index) {
    const isOpen = index === 0 ? 'open' : '';

    let listHTML = '';
    if (item.list && item.list.length > 0) {
        const listItems = item.list.map(li => `<li>${li}</li>`).join('');
        listHTML = `<ul class="list-disc list-inside space-y-1">${listItems}</ul>`;
    }

    let tipHTML = '';
    if (item.tip) {
        tipHTML = `
        <div class="inline-flex text-sm text-primary font-medium bg-secondary p-3 rounded-lg border border-secondary/50 mt-1">
            ${item.tip}
        </div>
        `;
    }

    return `
    <details ${isOpen} class="group bg-white rounded-xl transition-all duration-300 hover:shadow-md shadow-sm">
        <summary class="flex justify-between items-center cursor-pointer p-5 list-none">
            <h4 class="font-semibold pr-4 text-base leading-relaxed text-black group-hover:text-primary transition-colors">
                ${item.q}
            </h4>
            <span class="transition duration-300 group-open:rotate-180">
                <svg
                    class="w-6 h-6 text-primary"
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                >
                    <path d="M6 9l6 6 6-6"></path>
                </svg>
            </span>
        </summary>
        <div class="px-5 pb-5 text-gray text-sm leading-relaxed border-t border-gray-50 pt-3 space-y-2 animate-fadeIn">
            <p>${item.a}</p>
            ${listHTML}
            ${tipHTML}
        </div>
    </details>
    `;
}

const homeContainer = document.getElementById("home-faq-container");
if (homeContainer) {
    const topQuestions = faqData.slice(0, 4);
    homeContainer.innerHTML = topQuestions.map((item, index) => createFaqItem(item, index)).join("");
}

const fullContainer = document.getElementById("faq-container");
if (fullContainer) {
    fullContainer.innerHTML = faqData.map((item, index) => createFaqItem(item, index)).join("");
}
