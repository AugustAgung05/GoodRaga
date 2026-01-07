const articles = [
    {
        id: 1,
        category: "Tips Sehat",
        date: "10 Jan 2025",
        title: 'Mengenal "Ibu Kunyit" vs Kunyit Biasa',
        desc: "Apa bedanya, dan kenapa kami memilih biang kunyit untukmu? Alasannya lebih dekat dengan kebutuhan tubuh daripada yang kamu bayangkan.",
        image: "./src/assets/tips-sehat-1.webp",
        heroContainer: "../src/assets/hero-tips-sehat-1.webp",
        relatedProduct: {
            name: "Kunyit Asam Fresh",
            image: "./src/assets/produk.webp",
            tag: "BEST SELLER",
            desc: "Pereda nyeri alami & booster imun harian.",
            price: "Rp 15.000",
            shelfLife: "6 hari",
            features: ["Meredakan nyeri haid", "Melancarkan pencernaan"],
        },
        content: `
            <p class="mb-6">Sering dengar istilah "Biang Kunyit" atau "Empu Kunyit"? Ternyata ini bukan sekadar istilah pasar, lho. Dalam dunia herbal, perbedaan antara induk (biang) dan anak kunyit (rimpang cabang) sangat menentukan khasiat jamu yang kamu minum.</p>
            
            <h3 class="text-2xl font-bold mb-4 text-black">Apa itu Ibu Kunyit?</h3>
            <p class="mb-6">Secara anatomi, tanaman kunyit memiliki satu rimpang utama yang ukurannya paling besar, bulat, dan menjadi pusat pertumbuhan. Inilah yang disebut "Ibu" atau "Biang". Dari biang inilah kemudian tumbuh cabang-cabang rimpang yang lebih kecil dan memanjang, yang biasa kita sebut sebagai "jari kunyit" atau kunyit biasa yang sering kamu temukan di pasar.</p>
            <p class="mb-6">Meskipun sama-sama kunyit, kandungan di dalamnya memiliki konsentrasi yang berbeda. Ibu Kunyit menyimpan cadangan makanan utama bagi tanaman, sehingga ia memiliki konsentrasi <strong class="font-semibold">Kurkuminoid</strong> dan <strong class="font-semibold">Minyak Atsiri</strong> yang jauh lebih padat dibandingkan anak-anaknya.</p>
            
            <div class="border-l-4 border-primary px-5 py-4 my-8 bg-emerald-50 rounded-r-xl">
                <p class="text-primary italic">"Ibu Kunyit adalah <strong class="font-semibold">powerhouse</strong>. Satu ruas biang bisa setara dengan 3-4 ruas jari kunyit biasa dalam hal potensi anti-inflamasi."</p>
            </div>

            <h3 class="text-2xl font-bold mb-4 text-black">Kenapa GoodRaga Memilih Biang?</h3>
            <p class="mb-4">Kami percaya bahwa jamu yang baik tidak perlu ditutup-tutupi dengan gula berlebih. Kuncinya ada di bahan baku. Berikut alasan kami hanya menggunakan Biang Kunyit:</p>
            <ul class="list-disc list-inside space-y-3 mb-6 ml-2 text-gray">
                <li><strong class="font-semibold">Rasa Lebih Pekat & Tidak Langu:</strong> Biang kunyit memiliki rasa yang lebih "deep" dan earthy, serta aroma yang lebih harum, tidak selangu kunyit muda.</li>
                <li><strong class="font-semibold">Warna Oranye Pekat:</strong> Warna ini bukan pewarna buatan. Ini adalah tanda tingginya kadar kurkumin, antioksidan alami yang ampuh meredakan peradangan.</li>
                <li><strong class="font-semibold">Khasiat Lebih Cepat:</strong> Efektif untuk meredakan nyeri haid (kram perut) dan menetralkan asam lambung dengan lebih cepat.</li>
            </ul>
            
            <h3 class="text-2xl font-bold mb-4 text-black">Cara Membedakannya Secara Fisik</h3>
            <p class="mb-6">Jika kamu belanja di pasar tradisional, perhatikan bentuknya. Kunyit biasa berbentuk lonjong memanjang seperti jari manusia. Sedangkan Biang Kunyit berbentuk bulat gempal seperti umbi, dengan kulit yang lebih gelap dan daging yang berwarna oranye menyala (bukan kuning pucat).</p>

            <p>Jadi, ketika kamu minum <em>Kunyit Asam Fresh</em> dari GoodRaga, kamu sedang meminum ekstrak terbaik dari sang "Ibu", bukan sekadar air berwarna kuning.</p>
        `,
    },
    {
        id: 2,
        category: "Gaya Hidup",
        date: "12 Jan 2025",
        title: "Kenapa Kamu Masih Merasa Lelah Meski Sudah Tidur 8 Jam?",
        desc: "Kenapa kita sengaja menunda tidur padahal badan sudah lelah? Fenomena ini lebih umum dari yang kamu kira.",
        image: "./src/assets/gaya-hidup-1.webp",
        heroContainer: "../src/assets/hero-gaya-hidup-1.webp",
        relatedProduct: {
            name: "Wedang Rempah Calm",
            image: "./src/assets/produk.webp",
            tag: "RELAXING",
            desc: "Solusi alami untuk tidur lebih nyenyak.",
            price: "Rp 18.000",
            shelfLife: "7 hari",
            features: ["Meningkatkan kualitas tidur", "Menghangatkan tubuh"],
        },
        content: `
            <h3 class="text-2xl font-bold mb-4 text-black">Tidur Lama, Kenapa Badan Masih Lelah?</h3>
            <p class="mb-6">Pernah banget tidur tapi tubuh justru terasa remuk? Padahal kamu sudah tidur sejak jam sembilan malam, bahkan mungkin bangun tanpa alarm. Anehnya, rasa lelah itu tetap tinggal—kepala terasa berat, badan lambat merespons, dan konsentrasi sulit diajak kerja sama.</p>
            <p class="mb-6">Masalahnya, tidur bukan sekadar soal durasi. Tubuh kita bekerja dalam beberapa fase, dan salah satu yang paling penting adalah <em>Deep Sleep</em>. Di fase inilah otot memperbaiki diri, sistem imun diperkuat, dan otak "membereskan" informasi yang menumpuk sepanjang hari. Tanpa fase ini yang cukup, tidur terasa lewat begitu saja—panjang, tapi tidak memulihkan.</p>
            
            <h3 class="text-2xl font-bold mb-4 text-black">Penyebab Kualitas Tidur "Pecah"</h3>
            <p class="mb-6">Yang sering terjadi, kita memang tidur lama, tapi kualitasnya terpecah-pecah. Cahaya dari layar ponsel sebelum tidur memberi sinyal keliru ke otak bahwa hari masih berlangsung. Suhu kamar yang tidak nyaman membuat tubuh sulit menurunkan ritme. Pencernaan yang masih sibuk bekerja karena makan terlalu dekat dengan jam tidur juga membuat tubuh gagal masuk ke mode istirahat penuh.</p>

            <div class="border-l-4 border-primary px-5 py-4 my-8 bg-emerald-50 rounded-r-xl">
                <p class="text-primary italic">"Tidur yang berkualitas bukan soal memaksa mata terpejam lebih cepat. Ia tentang menciptakan kondisi di mana tubuh merasa cukup aman untuk benar-benar beristirahat."</p>
            </div>

            <h3 class="text-2xl font-bold mb-4 text-black">Tanda Deep Sleep Kamu Kurang</h3>
            <p class="mb-4">Kurangnya deep sleep sering kali tidak terasa sebagai masalah besar di awal. Tapi perlahan, sinyal ini muncul:</p>
            <ul class="list-disc list-inside space-y-3 mb-6 ml-2 text-gray">
                <li><strong class="font-semibold">Bangun tidur tidak segar:</strong> Badan seperti butuh waktu lama untuk "loading".</li>
                <li><strong class="font-semibold">Mood Swing Pagi Hari:</strong> Mudah marah atau emosi tidak stabil.</li>
                <li><strong class="font-semibold">Brain Fog:</strong> Konsentrasi mudah buyar dan ingatan jangka pendek menurun (lupa naruh kunci, dll).</li>
                <li><strong class="font-semibold">Mengantuk di jam tanggung:</strong> Rasa kantuk berat menyerang pukul 10-11 siang.</li>
            </ul>

            <h3 class="text-2xl font-bold mb-4 text-black">Ritual Kecil Sebelum Tidur</h3>
            <p class="mb-6">Alih-alih langsung mengandalkan obat tidur, ada pendekatan yang lebih lembut. Tubuh butuh sinyal transisi. Mulai malam ini, coba ganti kebiasaan scrolling dengan ritual <em>winding down</em>.</p>
            <p class="mb-6">Redupkan lampu, beri jarak dari layar, putar musik yang menenangkan. Nikmati minuman hangat tanpa kafein seperti <strong>Wedang Rempah Calm</strong>. Hangatnya jahe dan aroma pandan memberi sinyal ke saraf parasimpatik untuk mulai rileks. Tubuh tidak butuh perintah keras untuk tidur—ia hanya perlu diyakinkan bahwa tidak ada lagi yang harus dikejar malam ini.</p>
        `,
    },
    {
        id: 3,
        category: "Produktivitas",
        date: "14 Jan 2025",
        title: 'Teknik "Micro-Break" untuk Atasi Brain Fog Sore Hari',
        desc: "Produktivitas bukan soal kerja nonstop. Pelajari cara 'reset' otak dalam 5 menit.",
        image: "./src/assets/produktivitas-2.webp",
        heroContainer: "../src/assets/hero-produktivitas-1.webp",
        relatedProduct: {
            name: "Kunyit Asam Fresh",
            image: "./src/assets/produk.webp",
            tag: "BOOSTER",
            desc: "Segarkan pikiran dengan energi alami.",
            price: "Rp 15.000",
            shelfLife: "6 hari",
            features: ["Meningkatkan fokus", "Tanpa gula pasir"],
        },
        content: `
            <p class="mb-6">Pukul 2 siang. Mata menatap layar, kursor berkedip, tapi otak rasanya seperti diselimuti kabut tebal. Ide macet, motivasi turun drastis, dan yang ingin kamu lakukan hanyalah merebahkan kepala di meja. Kenal dengan perasaan ini? Ini yang sering disebut sebagai <em>Brain Fog</em> atau <em>Afternoon Slump</em>.</p>

            <h3 class="text-2xl font-bold mb-4 text-black">Kerja Nonstop Bukan Prestasi</h3>
            <p class="mb-6">Banyak dari kita dididik dengan mentalitas "hustle culture"—bahwa istirahat adalah tanda kemalasan. Padahal, otak manusia mirip dengan otot. Jika digunakan terus menerus tanpa jeda untuk mengangkat beban berat (berpikir), ia akan mengalami kelelahan (fatigue) dan kram.</p>
            <p class="mb-6">Memaksa kerja saat <em>brain fog</em> justru menurunkan kualitas output. Pekerjaan yang harusnya selesai 30 menit bisa molor jadi 2 jam karena kamu tidak fokus.</p>

            <div class="border-l-4 border-primary px-5 py-4 my-8 bg-emerald-50 rounded-r-xl">
                <p class="text-primary italic">"Micro-break bukanlah tentang berhenti bekerja, melainkan tentang menajamkan kembali 'kapak' sebelum kembali menebang pohon."</p>
            </div>

            <h3 class="text-2xl font-bold mb-4 text-black">Apa itu Micro-Break?</h3>
            <p class="mb-4">Micro-break adalah istirahat sangat singkat (2-5 menit) yang dilakukan secara sengaja di antara tugas-tugas. Kuncinya: <strong>harus benar-benar lepas dari layar.</strong> Buka Instagram atau TikTok bukan istirahat, itu hanya memindahkan beban otak ke stimulasi visual lain.</p>
            
            <h3 class="text-2xl font-bold mb-4 text-black">3 Ide Micro-Break Efektif</h3>
            <ul class="list-disc list-inside space-y-3 mb-6 ml-2 text-gray">
                <li><strong class="font-semibold">Aturan 20-20-20:</strong> Setiap 20 menit, lihat objek sejauh 20 kaki (6 meter) selama 20 detik. Ini merelaksasi otot mata yang tegang.</li>
                <li><strong class="font-semibold">Hydration Walk:</strong> Berdiri, jalan ke pantry, isi ulang botol air minum. Gerakan fisik melancarkan sirkulasi darah ke otak.</li>
                <li><strong class="font-semibold">Teknik Pernapasan 4-7-8:</strong> Tarik napas 4 detik, tahan 7 detik, hembuskan 8 detik. Ini menurunkan hormon stres kortisol secara instan.</li>
            </ul>

            <p>Jadi, sore ini jika otakmu mulai macet, jangan ambil kopi lagi. Coba berdiri, regangkan badan, dan ambil napas panjang. 5 menit jeda bisa menyelamatkan 3 jam sisa kerjamu.</p>
        `,
    },
    {
        id: 4,
        category: "Tips Sehat",
        date: "15 Jan 2025",
        title: "Olahraga Saat PMS: Bolehkah?",
        desc: "Gerakan ringan yang justru membantu meredakan kram perut sering dianggap sepele, padahal dampaknya cukup terasa.",
        image: "./src/assets/tips-sehat-2.webp",
        heroContainer: "../src/assets/hero-tips-sehat-2.webp",
        relatedProduct: {
            name: "Kunyit Asam Fresh",
            image: "./src/assets/produk.webp",
            tag: "WOMAN CHOICE",
            desc: "Sahabat terbaik saat datang bulan.",
            price: "Rp 15.000",
            shelfLife: "6 hari",
            features: ["Meredakan kram perut", "Anti-inflamasi alami"],
        },
        content: `
            <p class="mb-6">Saat PMS menyerang, kasur terasa seperti magnet terkuat di dunia. Perut kram, pinggang pegal, dan mood yang naik turun membuat olahraga jadi hal terakhir yang ingin kita lakukan. Tapi, benarkah kita harus berhenti total bergerak saat menstruasi?</p>

            <h3 class="text-2xl font-bold mb-4 text-black">Gerak Justru Obat Alami</h3>
            <p class="mb-6">Secara medis, olahraga ringan justru sangat disarankan saat haid. Ketika kita berolahraga, tubuh melepaskan hormon <strong class="font-semibold">Endorfin</strong>—senyawa kimia alami yang bertindak sebagai penghilang rasa sakit (painkiller) dan peningkat suasana hati. Ini adalah lawan alami dari Prostaglandin, zat yang menyebabkan kontraksi rahim (kram).</p>

            <div class="border-l-4 border-primary px-5 py-4 my-8 bg-emerald-50 rounded-r-xl">
                <p class="text-primary italic">"Jangan forsir tubuh untuk mencetak rekor baru. Tujuannya adalah melancarkan sirkulasi darah, bukan membakar kalori maksimal."</p>
            </div>

            <h3 class="text-2xl font-bold mb-4 text-black">Olahraga yang Disarankan</h3>
            <p class="mb-4">Kuncinya adalah menurunkan intensitas. Lupakan HIIT (High Intensity Interval Training) atau angkat beban berat dulu. Ganti dengan:</p>
            <ul class="list-disc list-inside space-y-3 mb-6 ml-2 text-gray">
                <li><strong class="font-semibold">Yoga & Stretching:</strong> Pose seperti <em>Child's Pose</em> atau <em>Cat-Cow</em> sangat efektif meregangkan otot punggung bawah yang kaku.</li>
                <li><strong class="font-semibold">Jalan Santai:</strong> Jalan pagi 15-20 menit cukup untuk memicu endorfin tanpa membuat tubuh stres.</li>
                <li><strong class="font-semibold">Renang Santai:</strong> Tekanan air bisa memberikan efek pijatan lembut pada tubuh, meski pastikan kebersihan air terjaga.</li>
            </ul>

            <h3 class="text-2xl font-bold mb-4 text-black">Dukung dari Dalam</h3>
            <p class="mb-6">Selain gerak, asupan nutrisi juga penting. Hindari kafein berlebih yang bisa memperparah kram. Sebagai gantinya, minuman hangat yang mengandung <strong class="font-semibold">Kunyit Asam</strong> sangat membantu karena sifat anti-inflamasi (pereda radang) dan antipiretik (pereda nyeri) alaminya.</p>
            <p>Dengarkan tubuhmu. Jika hari pertama terasa sangat berat, istirahat adalah hakmu. Tapi jika kram mulai mereda, cobalah bergerak sedikit. Tubuhmu akan berterima kasih.</p>
        `,
    },
    {
        id: 5,
        category: "Tips Sehat",
        date: "16 Jan 2025",
        title: "Masuk Angin Karena AC Kantor? Ini Triknya.",
        desc: "Jangan biarkan suhu dingin menurunkan performa kerjamu, karena tanpa disadari kondisi ini bisa memengaruhi fokus, energi, dan ritme aktivitas harian.",
        image: "./src/assets/tips-sehat-3.webp",
        heroContainer: "../src/assets/hero-tips-sehat-3.webp",
        relatedProduct: {
            name: "Wedang Rempah Calm",
            image: "./src/assets/produk.webp",
            tag: "WARM HUG",
            desc: "Usir masuk angin dengan kehangatan jahe.",
            price: "Rp 18.000",
            shelfLife: "7 hari",
            features: ["Mengatasi kembung", "Melegakan tenggorokan"],
        },
        content: `
            <p class="mb-6">Bekerja di kantor modern memang nyaman, tapi seringkali kita dihadapkan pada satu musuh tak kasat mata: <strong class="font-semibold">Suhu AC Kutub Utara</strong>. Duduk diam selama 8 jam di ruangan bersuhu 18-20 derajat Celcius seringkali berujung pada kondisi khas orang Indonesia: Masuk Angin.</p>

            <h3 class="text-2xl font-bold mb-4 text-black">Kenapa AC Bikin Kembung?</h3>
            <p class="mb-6">Saat tubuh terpapar dingin terus menerus, pembuluh darah akan menyempit (vasokonstriksi) untuk mempertahankan panas tubuh. Sirkulasi darah ke sistem pencernaan pun berkurang, membuat gerakan usus melambat. Akibatnya? Gas menumpuk di perut, menyebabkan rasa begah, kembung, dan mual.</p>
            <p class="mb-6">Selain itu, udara AC yang kering bisa membuat selaput lendir di hidung dan tenggorokan mengering, menurunkan pertahanan imun kita terhadap virus ringan.</p>

            <h3 class="text-2xl font-bold mb-4 text-black">Survival Kit Melawan AC Kantor</h3>
            <ul class="list-disc list-inside space-y-3 mb-6 ml-2 text-gray">
                <li><strong class="font-semibold">Teknik Layering:</strong> Selalu sediakan cardigan, jaket, atau syal di laci meja. Lindungi area leher dan punggung atas, karena area ini paling sensitif terhadap angin.</li>
                <li><strong class="font-semibold">Jangan Tahan Buang Angin:</strong> Kedengarannya lucu, tapi menahan gas justru memperparah kembung. Izinlah ke toilet sebentar jika perlu.</li>
                <li><strong class="font-semibold">Gerak Setiap Jam:</strong> Berdiri dan berjalanlah. Gerakan fisik membantu "mengocok" usus dan melancarkan aliran darah yang beku karena duduk.</li>
            </ul>

            <div class="border-l-4 border-primary px-5 py-4 my-8 bg-emerald-50 rounded-r-xl">
                <p class="text-primary italic">"Kehangatan dari dalam jauh lebih awet daripada kehangatan dari jaket tebal."</p>
            </div>

            <h3 class="text-2xl font-bold mb-4 text-black">Senjata Rahasia: Jahe Merah</h3>
            <p class="mb-6">Di jam rawan ngantuk dan kedinginan (biasanya jam 3 sore), hindari es kopi. Ganti dengan minuman yang mengandung <strong class="font-semibold">Jahe Merah</strong>.</p>
            <p>Gingerol dalam jahe memiliki efek <em>termogenik</em>—ia secara aktif meningkatkan suhu tubuh dari dalam. Rasanya yang pedas hangat langsung "memecah" gas di perut dan melegakan tenggorokan. Sedia satu botol <em>GoodRaga Wedang Rempah</em> di meja kerjamu bisa jadi penyelamat hari.</p>
        `,
    },
    {
        id: 6,
        category: "Resep",
        date: "18 Jan 2025",
        title: "DIY Mocktail: Kunyit Asam Sparkle",
        desc: "Minuman segar ala café yang bisa kamu buat di rumah—cukup botol GoodRaga dan soda dingin.",
        image: "./src/assets/resep-1.webp",
        heroContainer: "../src/assets/hero-resep-2.webp",
        relatedProduct: {
            name: "Kunyit Asam Fresh",
            image: "./src/assets/produk.webp",
            tag: "MIXER",
            desc: "Bahan dasar sempurna untuk mocktail segar.",
            price: "Rp 15.000",
            shelfLife: "6 hari",
            features: ["Rasa segar alami", "Tanpa pengawet"],
        },
        content: `
            <p class="mb-6">Siapa bilang jamu itu kuno dan membosankan? Dengan sedikit kreativitas, botol jamu di kulkasmu bisa berubah menjadi minuman mewah ala café yang menyegarkan. Resep ini cocok banget buat nemenin makan siang atau sajian saat teman-teman main ke rumah.</p>
            
            <h3 class="text-2xl font-bold mb-4 text-black">Kenapa Harus Coba?</h3>
            <p class="mb-6">Kombinasi rasa asam manis dari <em>tamarind</em> (asam jawa) dan kunyit ternyata jodoh banget sama sensasi menggelitik dari air soda. Rasanya jadi ringan, *fizzy*, dan super segar!</p>

            <div class="border-l-4 border-primary px-5 py-4 my-8 bg-emerald-50 rounded-r-xl">
                <p class="text-primary italic">"The perfect gateway drink buat teman kamu yang ngakunya gak suka jamu. Dijamin mereka bakal minta nambah!"</p>
            </div>

            <h3 class="text-2xl font-bold mb-4 text-black">Bahan-bahan</h3>
            <ul class="list-disc list-inside space-y-2 mb-6 ml-2 text-gray">
                <li>100ml <strong class="font-semibold">GoodRaga Kunyit Asam Fresh</strong> (dingin)</li>
                <li>100ml Air Soda tawar / Sparkling Water</li>
                <li>Es batu secukupnya</li>
                <li>1 batang Sereh (geprek bonggolnya)</li>
                <li>Irisan lemon atau daun mint untuk garnish</li>
            </ul>

            <h3 class="text-2xl font-bold mb-4 text-black">Cara Membuat</h3>
            <ol class="list-decimal list-inside space-y-3 mb-6 ml-2 text-gray">
                <li><strong class="font-semibold">Siapkan Gelas Cantik:</strong> Gunakan gelas tinggi (highball). Masukkan es batu hingga gelas hampir penuh.</li>
                <li><strong class="font-semibold">Tuang Jamu:</strong> Tuangkan GoodRaga Kunyit Asam perlahan.</li>
                <li><strong class="font-semibold">The Fizz:</strong> Tuangkan air soda perlahan-lahan. Aduk pelan sekali saja agar sodanya tidak hilang.</li>
                <li><strong class="font-semibold">Aroma Kick:</strong> Masukkan batang sereh sebagai pengaduk alami. Aroma sereh akan keluar perlahan saat diaduk.</li>
                <li><strong class="font-semibold">Garnish:</strong> Tambahkan irisan lemon di bibir gelas. Voila!</li>
            </ol>

            <p>Hasilnya? Minuman berwarna gradasi oranye-kuning cantik yang rasanya "mahal". Sehatnya dapat, gaya-nya juga dapat. Selamat mencoba!</p>
        `,
    },
    {
        id: 7,
        category: "Tips Sehat",
        date: "20 Jan 2025",
        title: "Mitos Gula Aren vs Gula Pasir",
        desc: "Benarkah gula aren lebih sehat untuk diabetes? Jawabannya tidak sesederhana yang sering dibicarakan.",
        image: "./src/assets/tips-sehat-4.webp",
        heroContainer: "../src/assets/hero-tips-sehat-4.webp",
        relatedProduct: {
            name: "Wedang Rempah Calm",
            image: "./src/assets/produk.webp",
            tag: "LESS SUGAR",
            desc: "Dibuat dengan gula aren organik pilihan.",
            price: "Rp 18.000",
            shelfLife: "7 hari",
            features: ["Indeks glikemik rendah", "Aman dikonsumsi harian"],
        },
        content: `
            <p class="mb-6">Belakangan ini, Gula Aren (Palm Sugar) naik daun sebagai primadona pemanis sehat. Banyak kedai kopi dan brand kesehatan beralih dari gula pasir putih ke gula aren. Tapi pertanyaannya, apakah ini hanya tren marketing, atau memang ada bukti ilmiahnya?</p>

            <h3 class="text-2xl font-bold mb-4 text-black">Perbedaan Proses, Perbedaan Nutrisi</h3>
            <p class="mb-6">Gula pasir putih adalah produk rafinasi. Artinya, ia telah melalui proses pemurnian panjang yang menghilangkan hampir semua nutrisi, menyisakan kalori kosong (sukrosa murni). </p>
            <p class="mb-6">Sebaliknya, gula aren organik yang dipakai GoodRaga diproses minimal dari nira pohon aren. Karena tidak "dicuci" berlebihan, ia masih mempertahankan mineral bawaan tanah seperti <strong class="font-semibold">Kalium, Zat Besi, dan Magnesium</strong>. Warnanya yang cokelat gelap adalah bukti keberadaan mineral dan antioksidan tersebut.</p>

            <h3 class="text-2xl font-bold mb-4 text-black">Indeks Glikemik: Kunci Gula Darah</h3>
            <p class="mb-4">Ini poin terpentingnya. Kecepatan gula menaikkan kadar gula darah diukur dengan Indeks Glikemik (IG).</p>
            <ul class="list-disc list-inside space-y-3 mb-6 ml-2 text-gray">
                <li><strong class="font-semibold">Gula Pasir:</strong> IG 65-70 (Tinggi). Menyebabkan lonjakan energi cepat, lalu drop cepat (sugar crash).</li>
                <li><strong class="font-semibold">Gula Aren:</strong> IG 35-50 (Rendah ke Sedang). Diserap tubuh lebih perlahan, memberikan energi yang lebih stabil.</li>
            </ul>

            <div class="border-l-4 border-primary px-5 py-4 my-8 bg-emerald-50 rounded-r-xl">
                <p class="text-primary italic">"Meski lebih baik, gula tetaplah gula. Gula aren lebih aman dan bernutrisi, tapi tetap harus dikonsumsi dalam batas wajar, bukan bebas tanpa batas."</p>
            </div>

            <h3 class="text-2xl font-bold mb-4 text-black">Kesimpulan</h3>
            <p class="mb-6">Apakah gula aren obat diabetes? Tentu tidak. Tapi jika kamu harus menggunakan pemanis, Gula Aren adalah pilihan yang jauh lebih bijak dan "kind" ke tubuhmu dibandingkan gula pasir rafinasi.</p>
            <p>Itulah kenapa di setiap botol GoodRaga, kami berkomitmen <strong class="font-semibold">NO REFINED SUGAR</strong>. Kami hanya menggunakan Gula Aren Organik atau Madu Hutan asli.</p>
        `,
    },
    {
        id: 8,
        category: "Resep",
        date: "21 Jan 2025",
        title: "Warm Hug: Wedang Jahe Susu Oat",
        desc: "Resep hangat, creamy, dan dairy-free untuk menemani sore hujan tanpa rasa bersalah.",
        image: "./src/assets/resep-2.webp",
        heroContainer: "../src/assets/hero-resep-1.webp",
        relatedProduct: {
            name: "Wedang Rempah Calm",
            image: "./src/assets/produk.webp",
            tag: "CREAMY BASE",
            desc: "Paduan sempurna untuk susu oat hangat.",
            price: "Rp 18.000",
            shelfLife: "7 hari",
            features: ["Jahe merah asli", "Tanpa ampas"],
        },
        content: `
            <p class="mb-6">Hujan turun rintik-rintik, udara mulai dingin, dan kamu butuh sesuatu yang hangat untuk dipeluk (secara harfiah, lewat cangkir). Wedang Jahe Susu adalah klasik, tapi seringkali susu sapi bikin perut kembung bagi sebagian orang. Yuk, kita buat versi modern-nya: <strong class="font-semibold">Creamy Ginger Oat Latte</strong>.</p>

            <h3 class="text-2xl font-bold mb-4 text-black">Kenapa Oat Milk?</h3>
            <p class="mb-6">Susu Oat (Gandum) punya tekstur yang <em>creamy</em> dan rasa manis alami yang gurih. Ini sangat cocok dipadukan dengan pedasnya jahe. Plus, ini 100% plant-based dan ramah lingkungan!</p>

            <h3 class="text-2xl font-bold mb-4 text-black">Bahan-bahan</h3>
            <ul class="list-disc list-inside space-y-2 mb-6 ml-2 text-gray">
                <li>100ml <strong class="font-semibold">GoodRaga Wedang Rempah Calm</strong> (Pati jahenya kuat!)</li>
                <li>150ml Susu Oat (pilih varian Barista Blend kalau mau lebih creamy)</li>
                <li>Sejumput bubuk kayu manis (cinnamon)</li>
                <li>1 sdt Madu (opsional, sesuaikan selera manis)</li>
            </ul>

            <div class="border-l-4 border-primary px-5 py-4 my-8 bg-emerald-50 rounded-r-xl">
                <p class="text-primary italic">"Tips: Jangan merebus susu oat sampai mendidih bergejolak karena bisa merusak teksturnya. Cukup sampai hangat beruap (steaming)."</p>
            </div>

            <h3 class="text-2xl font-bold mb-4 text-black">Langkah Pembuatan</h3>
            <ol class="list-decimal list-inside space-y-3 mb-6 ml-2 text-gray">
                <li><strong class="font-semibold">Panaskan Susu:</strong> Hangatkan susu oat di panci kecil dengan api sedang. Gunakan pengocok (whisk) untuk membuat sedikit busa di atasnya.</li>
                <li><strong class="font-semibold">Campur Jahe:</strong> Tuang GoodRaga Wedang Rempah ke dalam cangkir favoritmu. Jika kamu suka extra panas, bisa dihangatkan sebentar di microwave.</li>
                <li><strong class="font-semibold">Satukan:</strong> Tuang susu oat hangat ke dalam cangkir berisi jahe.</li>
                <li><strong class="font-semibold">Finishing Touch:</strong> Taburkan bubuk kayu manis di atas busa susu.</li>
            </ol>

            <p class="mb-6">Seruput pelan-pelan. Kombinasi pedas jahe yang "nendang" dibalut lembutnya susu oat akan langsung menghangatkan dada dan perut. <em>It literally feels like a warm hug.</em></p>
        `,
    },
    {
        id: 9,
        category: "Produktivitas",
        date: "23 Jan 2025",
        title: "Ritual 10 Menit Pagi Biar Fokus Seharian",
        desc: "Bukan scroll HP. Mulai hari dengan kebiasaan kecil yang memberi 'win' pertama.",
        image: "./src/assets/produktivitas-1.webp",
        heroContainer: "../src/assets/hero-produktivitas-2.webp",
        relatedProduct: {
            name: "Kunyit Asam Fresh",
            image: "./src/assets/produk.webp",
            tag: "MORNING KICK",
            desc: "Awali hari dengan detoks alami.",
            price: "Rp 15.000",
            shelfLife: "7 hari",
            features: ["Meningkatkan metabolisme", "Mood booster alami"],
        },
        content: `
            <p class="mb-6">Apa hal pertama yang kamu lakukan saat bangun tidur? Mematikan alarm, lalu... membuka WhatsApp? Atau scroll Instagram? Tanpa sadar, kamu sudah membiarkan dunia luar mendikte mood dan pikiranmu bahkan sebelum kakimu menyentuh lantai.</p>
            <p class="mb-6">Cara kita memulai pagi sangat menentukan ritme sisa hari kita. Jika dimulai dengan reaktif (membalas chat), seharian kita akan merasa diburu. Mari kita ubah dengan ritual <strong class="font-semibold">"The First 10 Minutes"</strong>.</p>

            <h3 class="text-2xl font-bold mb-4 text-black">Menit 0-2: Hidrasi Sebelum Kafein</h3>
            <p class="mb-6">Selama tidur 7-8 jam, tubuhmu mengalami dehidrasi. Otak yang kurang air akan lemot dan mudah pusing. Sebelum menyentuh kopi, minumlah satu gelas besar air putih (suhu ruang atau hangat). Ini seperti menyiram oli ke mesin tubuh agar siap bekerja.</p>

            <h3 class="text-2xl font-bold mb-4 text-black">Menit 2-7: Gerakan Sederhana</h3>
            <p class="mb-6">Tidak perlu lari maraton. Cukup 5 menit peregangan (stretching). Menggerakkan tubuh membantu melancarkan darah yang menggenang selama tidur dan melepaskan dopamin ringan.</p>
            <ul class="list-disc list-inside space-y-2 mb-6 ml-2 text-gray">
                <li>Putar bahu ke depan dan belakang.</li>
                <li>Sentuh jari kaki (Forward fold).</li>
                <li>Atau sekadar merapikan tempat tidur!</li>
            </ul>
            
            <div class="border-l-4 border-primary px-5 py-4 my-8 bg-emerald-50 rounded-r-xl">
                <p class="text-primary italic">"Merapikan tempat tidur adalah 'kemenangan pertama' (First Win). Ini memberi sinyal ke otak bahwa kamu sudah menyelesaikan satu tugas dengan baik hari ini."</p>
            </div>

            <h3 class="text-2xl font-bold mb-4 text-black">Menit 7-10: Set Intention (Niat)</h3>
            <p class="mb-6">Duduk diam sebentar. Tanyakan pada dirimu: <em>"Apa satu hal yang jika selesai hari ini, akan membuat saya merasa puas?"</em></p>
            <p class="mb-6">Tuliskan hal itu. Ini akan menjadi kompasmu seharian. Ketika nanti ada gangguan atau distraksi, kamu tahu kemana harus kembali.</p>

            <p>10 menit ini adalah investasi kecil dengan <em>return</em> yang besar. Kamu memegang kendali atas harimu, bukan sebaliknya. Selamat mencoba!</p>
        `,
    },
];

function resolvePath(originalPath) {
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

    const link = resolvePath(`./pages/detail-artikel.html?id=${article.id}`);
    const finalImagePath = resolvePath(article.image);

    return `
    <li class="group block w-[90%] xs:w-[85%] s:w-[75%] md:w-auto max-w-[400px] md:max-w-[471px] mx-auto break-inside-avoid">
        <a href="${link}" class="block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray/10 animate-fadeIn h-full flex flex-col">
            <div class="relative h-40 xl:h-56 overflow-hidden shrink-0">
                <img 
                    src="${finalImagePath}" 
                    alt="${article.title}" 
                    loading="${loadingMode}"
                    ${priorityAttr}
                    width="400" 
                    height="224"
                    class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                >
                <div class="absolute inset-0 bg-gradient-to-t from-black/10 md:from-black/40 to-transparent hover:from-black/0 transition duration-500"></div>
                <span class="absolute bottom-0 left-0 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-tr-lg uppercase tracking-wider shadow-sm">
                    ${article.category}
                </span>
            </div>
            
            <div class="p-4 flex flex-col grow">
                <h4 class="font-bold text-lg leading-snug mb-3 text-black group-hover:text-primary transition-colors">
                    ${article.title}
                </h4>
                <p class="text-sm text-gray leading-relaxed line-clamp-3">
                    ${article.desc}
                </p>
            </div>
        </a>
    </li>
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
                        ? "bg-primary text-white shadow-sm"
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

document.addEventListener("DOMContentLoaded", () => {
    const detailContainer = document.getElementById("article-detail-content");

    if (detailContainer) {
        const urlParams = new URLSearchParams(window.location.search);
        const articleId = parseInt(urlParams.get("id"));

        const currentArticle = articles.find((item) => item.id === articleId);

        if (currentArticle) {
            const newTitle = `${currentArticle.title} — GoodRaga`;
            document.title = newTitle;

            const setText = (id, text) => {
                const el = document.getElementById(id);
                if (el) el.innerText = text;
            };

            setText("detail-category", currentArticle.category);
            setText("detail-date", currentArticle.date);
            setText("detail-title", currentArticle.title);
            setText("detail-desc", currentArticle.desc);

            const bodyEl = document.getElementById("detail-body");
            if (bodyEl) bodyEl.innerHTML = currentArticle.content;

            const imgEl = document.getElementById("detail-image");
            if (imgEl) {
                imgEl.src = currentArticle.heroContainer;
                imgEl.alt = currentArticle.title;
            }

            const productWidget = document.getElementById(
                "detail-product-widget"
            );
            if (productWidget) productWidget.innerHTML = "";

            if (productWidget && currentArticle.relatedProduct) {
                const p = currentArticle.relatedProduct;

                const prodImgPath = resolvePath(p.image);
                const cleanPrice = parseInt(p.price.replace(/\D/g, ""));
                const productData = JSON.stringify({
                    id: Date.now(),
                    name: p.name,
                    price: cleanPrice,
                    image: prodImgPath,
                    quantity: 1,
                }).replace(/"/g, "&quot;");

                productWidget.innerHTML = `
                    <div class="max-w-[400px] bg-white border border-gray/10 rounded-2xl p-4 shadow-lg mx-auto group">
                        <div class="relative rounded-xl overflow-hidden mb-4 bg-gray/10">
                            <img 
                                src="${prodImgPath}" 
                                alt="${p.name}" 
                                class="w-full h-48 s:h-44 md:h-50 xl:h-60 object-cover group-hover:scale-105 transition duration-500"
                            >
                            <div class="absolute inset-0 md:bg-black/30 group-hover:bg-transparent transition duration-500"></div>
                            <span class="absolute bottom-0 left-0 bg-primary text-[10px] px-2.5 py-1.5 rounded-tr-lg text-white">Tahan ${
                                p.shelfLife
                            }</span>
                            <span class="absolute top-2 right-2 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm">
                                ${p.tag}
                            </span>
                        </div>
                        
                        <h3 class="font-bold text-xl mb-1 text-black group-hover:text-primary transition duration-500">${
                            p.name
                        }</h3>
                        <p class="text-xs text-gray/80 mb-4">${p.desc}</p>

                        <div class="space-y-2 text-sm text-gray mb-5">
                            ${p.features
                                .map(
                                    (feat) => `
                                <div class="flex items-center gap-2">
                                    <svg class="w-4 h-4 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                                    </svg>
                                    <span>${feat}</span>
                                </div>
                            `
                                )
                                .join("")}
                        </div>
                        <hr class="border-gray/20 my-4">
                        <div class="flex items-center justify-between">
                            <span class="font-bold text-lg text-emerald-800">${
                                p.price
                            }</span>
                            
                            <button 
                                onclick="window.addToCart(${productData}, true)"
                                class="text-sm font-semibold text-white bg-primary px-4 py-2 rounded-lg hover:bg-emerald-700 transition shadow-md hover:shadow-lg transform active:scale-95"
                            >
                                <span class="block xs:hidden">Beli</span>
                                <span class="hidden xs:block">Beli Sekarang</span>
                            </button>
                        </div>
                    </div>
                `;
            } else if (productWidget) {
                productWidget.style.display = "none";
            }

            const sidebarContainer =
                document.getElementById("sidebar-articles");
            if (sidebarContainer) {
                const otherArticles = articles
                    .filter((a) => a.id !== articleId)
                    .slice(0, 3);

                sidebarContainer.innerHTML = otherArticles
                    .map((a) => {
                        const imgPath = resolvePath(a.image);

                        return `
                    <li class="group max-w-[400px] md:max-w-full mx-auto md:mx-0">
                        <a href="detail-artikel.html?id=${a.id}" class="flex gap-3">
                            <div class="w-20 h-20 rounded-lg overflow-hidden shrink-0 bg-gray-100">
                                <img 
                                    src="${imgPath}" 
                                    alt="${a.title}"
                                    class="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                                >
                            </div>
                            <div class="flex flex-col justify-between h-20 py-0.5 lg:py-0 w-full">
                                <div class="space-y-1">
                                    <h5 class="text-sm font-bold text-black group-hover:text-primary line-clamp-1 transition leading-snug">
                                        ${a.title}
                                    </h5>
                                    <span class="text-[10px] text-gray/60 block mb-0.5">${a.date}</span>
                                </div>
                                    <p class="text-xs text-gray line-clamp-2">${a.desc}</p>
                                </div>
                        </a>
                    </li>
                    `;
                    })
                    .join("");
            }
        } else {
            document.title = "Artikel Tidak Ditemukan — GoodRaga";

            detailContainer.innerHTML = `
                <div class="text-center py-20 flex flex-col items-center justify-center min-h-[50dvh] px-4 sm:px-6 lg:px-8">
                    <div class="bg-gray/10 p-4 rounded-full mb-4">
                        <svg class="w-10 h-10 text-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <h2 class="text-2xl font-bold text-black">Artikel tidak ditemukan</h2>
                    <p class="text-gray mt-2">Mungkin link yang kamu tuju sudah kadaluarsa atau salah ketik.</p>
                    <a href="artikel.html" class="mt-6 px-6 py-2 bg-primary text-white rounded-full hover:bg-emerald-700 transition shadow-sm hover:shadow-md">
                        Kembali ke Artikel
                    </a>
                </div>
            `;

            const sidebarSection = document.querySelector("aside");
            if (sidebarSection) sidebarSection.style.display = "none";
        }
    }
});
