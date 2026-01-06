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
                <div class="flex flex-col sm:flex-row items-center gap-4 bg-white p-4 rounded-2xl border border-gray/10 shadow-sm transition hover:shadow-md">
                    <div class="w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden bg-gray/10">
                        <img src="${item.image}" alt="${
            item.name
        }" class="w-full h-full object-cover">
                    </div>

                    <div class="flex-grow text-center sm:text-left">
                        <h4 class="font-playfair font-bold text-lg text-primary">${
                            item.name
                        }</h4>
                        <p class="text-sm text-gray/80">Kemasan Botol 250ml</p>
                        <p class="text-primary font-bold mt-1">Rp ${item.price.toLocaleString(
                            "id-ID"
                        )}</p>
                    </div>

                    <div class="flex items-center bg-gray/10 rounded-full px-2 py-1 border border-gray/10">
                        <button onclick="updateQty(${index}, -1)" class="w-8 h-8 flex items-center justify-center text-gray hover:text-primary font-bold text-lg">-</button>
                        <span class="w-8 text-center font-medium text-gray-700">${
                            item.quantity
                        }</span>
                        <button onclick="updateQty(${index}, 1)" class="w-8 h-8 flex items-center justify-center text-gray hover:text-primary font-bold text-lg">+</button>
                    </div>

                    <button onclick="removeItem(${index})" class="p-2 text-gray/80 hover:text-red-500 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>
                </div>
                `;
        container.innerHTML += html;
    });

    subtotalEl.innerHTML = `<span class="text-xs">Rp </span>${totalAmount.toLocaleString("id-ID")}`;
    totalEl.innerHTML = `<span class="text-sm">Rp </span>${totalAmount.toLocaleString("id-ID")}`;
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
            confirmButton: "bg-red-600 px-5 py-2 rounded-lg text-white text-sm md:text-base",
            cancelButton: "bg-gray/10 px-5 py-2 rounded-lg text-gray text-sm md:text-base",
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