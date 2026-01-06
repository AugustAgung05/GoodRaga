const toggleBtn = document.getElementById("menuToggle");
const menu = document.getElementById("menu");
const header = document.getElementById("header");

let isOpen = false;

toggleBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    isOpen = !isOpen;

    menu.classList.toggle("hidden", !isOpen);
    toggleBtn.classList.toggle("hamburger-active", isOpen);
});

document.addEventListener("click", (e) => {
    if (isOpen && !menu.contains(e.target) && !toggleBtn.contains(e.target)) {
        isOpen = false;
        menu.classList.add("hidden");
        toggleBtn.classList.remove("hamburger-active");
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024) {
        menu.classList.remove("hidden");
        toggleBtn.classList.remove("hamburger-active");
        isOpen = false;
    } else {
        menu.classList.add("hidden");
    }
});

function handleScroll() {
    const isScrolled = window.scrollY > 5;

    const isSpecialPage = document.body.classList.contains('header-hidden-init');
    
    if (isScrolled) {
        header.classList.add("bg-white/80", "backdrop-blur-md", "shadow-sm");
        header.classList.remove("border-transparent");
    } else {
        header.classList.remove("bg-white/80", "backdrop-blur-md", "shadow-sm");
        header.classList.add("border-transparent");
    }

    if (isSpecialPage) {
        if (isScrolled) {
            header.classList.remove("opacity-0", "-translate-y-full", "pointer-events-none");
        } else {
            header.classList.add("opacity-0", "-translate-y-full", "pointer-events-none");
        }
    } else {
        header.classList.remove("opacity-0", "-translate-y-full", "pointer-events-none");
    }
}

window.addEventListener("scroll", handleScroll);

document.addEventListener("DOMContentLoaded", handleScroll);

toastr.options = {
    closeButton: false,
    debug: false,
    newestOnTop: false,
    progressBar: true,
    positionClass: "toast-bottom-right",
    preventDuplicates: false,
    onclick: null,
    showDuration: "300",
    hideDuration: "1000",
    timeOut: "1500",
    extendedTimeOut: "1000",
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut",
};

document.getElementById("waForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const phoneNumber = "6285778208790";

    const rawMessage = document.getElementById("waMessage").value;

    if (!rawMessage.trim()) {
        toastr.error("Silakan tulis pesan terlebih dahulu.");
        return;
    }

    const message = [
        "Halo GoodRaga!",
        "",
        "Saya baru saja mengunjungi website GoodRaga dan tertarik untuk berdiskusi lebih lanjut.",
        "",
        "Berikut adalah pesan atau pertanyaan saya:",
        `"${rawMessage}"`,
        "",
        "Mohon informasinya lebih lanjut. Terima kasih dan salam sehat!",
    ].join("\n");

    const encodedMessage = encodeURIComponent(message);

    const waUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(waUrl, "_blank", "noopener,noreferrer");

    document.getElementById("waMessage").value = "";
});
