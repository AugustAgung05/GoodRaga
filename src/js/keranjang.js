let cart = JSON.parse(localStorage.getItem("goodraga_cart")) || [];

updateCartBadge();

document.addEventListener("click", function (e) {
    const button = e.target.closest(".break-inside-avoid.group");

    if (button && button.closest(".break-inside-avoid.group")) {
        const card = button.closest(".break-inside-avoid.group");

        const name = card.querySelector("h3").innerText;

        const priceElement = Array.from(card.querySelectorAll("h3")).find(
            (el) => el.innerText.includes("Rp")
        );
        const price = priceElement
            ? parseInt(
                  priceElement.innerText
                      .replace("Rp", "")
                      .replace(".", "")
                      .trim()
              )
            : 0;

        const image = card.querySelector("img").src;

        const product = {
            id: Date.now(),
            name: name,
            price: price,
            image: image,
            quantity: 1,
        };

        addToCart(product);
    }
});

function addToCart(product) {
    const existingItem = cart.find((item) => item.name === product.name);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push(product);
    }

    localStorage.setItem("goodraga_cart", JSON.stringify(cart));

    updateCartBadge();
    toastr.success("Produk berhasil masuk keranjang!");
}

function updateCartBadge() {
    const badge = document.querySelector("nav a span.increment");
    const badgeDekstop = document.querySelector(
        "header .dekstopIcon a span.increment"
    );
    if (badge) {
        const totalItems = cart.reduce(
            (total, item) => total + item.quantity,
            0
        );
        badge.innerText = totalItems;
        badge.classList.remove("hidden");
        if (totalItems === 0) badge.classList.add("hidden");
    }
    if (badgeDekstop) {
        const totalItems = cart.reduce(
            (total, item) => total + item.quantity,
            0
        );
        badgeDekstop.innerText = totalItems;
        badgeDekstop.classList.remove("hidden");
        if (totalItems === 0) badgeDekstop.classList.add("hidden");
    }
}