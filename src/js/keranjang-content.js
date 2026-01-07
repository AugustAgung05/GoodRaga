let cart = JSON.parse(localStorage.getItem("goodraga_cart")) || [];

const container = document.getElementById("cart-items-container");
const emptyState = document.getElementById("empty-cart");
const cartContent = document.getElementById("cart-content");

const subtotalEl = document.getElementById("subtotal");
const totalEl = document.getElementById("total-price");

function renderCart() {
    container.innerHTML = "";

    if (cart.length === 0) {
        emptyState.classList.remove("hidden");
        emptyState.classList.add("flex");
        cartContent.classList.add("hidden");
        return;
    }

    emptyState.classList.add("hidden");
    emptyState.classList.remove("flex");
    cartContent.classList.remove("hidden");

    let totalAmount = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        totalAmount += itemTotal;

        const html = `
                <div class="flex flex-col sm:flex-row items-center gap-2 *:sm:gap-4 bg-white p-4 rounded-2xl border border-gray/10 shadow-sm transition hover:shadow-md">
                    <div class="w-full flex justify-between items-center">
                        <div class="w-14 s:w-16 sm:w-20 h-14 s:h-16 sm:h-20 shrink-0 rounded-xl overflow-hidden">
                            <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover">
                        </div>

                        <div class="flex-grow text-right sm:text-left space-y-1.5">
                            <h4 class="font-playfair font-bold text-sm s:text-base md:text-lg text-primary">${
                                item.name
                            }</h4>
                            <p class="text-xs s:text-sm text-gray/80">Kemasan Botol 250ml</p>
                            <p class="text-primary font-bold text-base hidden sm:block"><span class="text-xs">Rp </span>${item.price.toLocaleString(
                                "id-ID"
                            )}</p>
                        </div>
                    </div>
                    
                    <div class="w-full sm:w-auto flex items-center mt-3 sm:mt-0 justify-between">
                        <p class="text-primary flex-grow font-bold text-base s:text-lg block sm:hidden"><span class="text-xs">Rp </span>${item.price.toLocaleString(
                            "id-ID"
                        )}</p>

                        <div class="flex flex-row items-center gap-2">
                            <div class="flex items-center bg-gray/10 rounded-full px-1 py-0.5 s:px-2 s:py-1 border border-gray/10">
                                <button onclick="updateQty(${index}, -1)" class="p-2.5 flex items-center justify-center text-gray hover:text-primary font-bold text-lg">
                                    <svg class="w-2 sm:w-2.5 h-2 sm:h-2.5 fill-current text-gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>
                                </button>
                                <span class="w-8 text-center text-xs s:text-sm sm:text-base font-medium text-gray">${
                                    item.quantity
                                }</span>
                                <button onclick="updateQty(${index}, 1)" class="p-2.5 flex items-center justify-center text-gray hover:text-primary font-bold text-lg">
                                    <svg class="w-2 sm:w-2.5 h-2 sm:h-2.5 fill-current text-gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z"/></svg>
                                </button>
                            </div>

                            <button onclick="removeItem(${index})" class="p-2 text-gray/80 hover:text-red-500 transition">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 s:h-6 s:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                `;
        container.innerHTML += html;
    });

    subtotalEl.innerHTML = `<span class="text-[10px]" >Rp </span>${totalAmount.toLocaleString(
        "id-ID"
    )}`;
    totalEl.innerHTML = `<span class="text-sm">Rp </span>${totalAmount.toLocaleString(
        "id-ID"
    )}`;
}

function confirmDelete(callback) {
    Swal.fire({
        title: "Yakin ingin menghapus?",
        text: "Produk ini akan dihapus dari keranjang.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Ya, hapus",
        cancelButtonText: "Batal",
        reverseButtons: true,
        focusCancel: true,
        customClass: {
            popup: "rounded-2xl",
            actions: "swal-actions-gap",
            confirmButton:
                "bg-red-600 px-5 py-2 rounded-lg text-white text-sm md:text-base",
            cancelButton:
                "bg-gray/10 px-5 py-2 rounded-lg text-gray text-sm md:text-base",
        },
        buttonsStyling: false,
    }).then((result) => {
        if (result.isConfirmed) {
            callback();
        }
    });
}

function updateQty(index, change) {
    if (cart[index].quantity + change > 0) {
        cart[index].quantity += change;
    } else {
        confirmDelete(() => {
            cart.splice(index, 1);
            saveAndRender();

            Swal.fire({
                icon: "success",
                title: "Dihapus",
                text: "Produk berhasil dihapus dari keranjang.",
                timer: 1500,
                showConfirmButton: false,
            });
        });
    }
    saveAndRender();
}

function removeItem(index) {
    confirmDelete(() => {
        cart.splice(index, 1);
        saveAndRender();

        Swal.fire({
            icon: "success",
            title: "Dihapus",
            text: "Produk berhasil dihapus dari keranjang.",
            timer: 1500,
            showConfirmButton: false,
        });
    });
}

function saveAndRender() {
    localStorage.setItem("goodraga_cart", JSON.stringify(cart));
    renderCart();
}

function checkoutWA() {
    if (cart.length === 0) return;

    const phoneNumber = "6285778208790";
    let message = "Halo GoodRaga, saya mau pesan:%0A%0A";
    let total = 0;

    cart.forEach((item, i) => {
        const sub = item.price * item.quantity;
        total += sub;
        message += `${i + 1}. ${item.name} (${
            item.quantity
        }x) - Rp ${sub.toLocaleString("id-ID")}%0A`;
    });

    message += `%0A*Total: Rp ${total.toLocaleString("id-ID")}*%0A`;
    message += "%0AMohon info ongkir ke alamat saya ya. Terima kasih!";

    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
}

renderCart();

const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-fadeIn");
                entry.target.classList.remove("opacity-0");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.1,
    }
);

reveals.forEach((element) => {
    observer.observe(element);
});
