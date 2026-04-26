/* ============================================================
   FLAWLESS BY FARHEEN — ENHANCED MAIN SCRIPT v2.0
   Auth, Cart, Animations, Parallax, GSAP-like Effects
   ============================================================ */

/* ── CONSTANTS ────────────────────────────────────────────── */
const WHATSAPP_NUMBER = "9XXXXXXXX";
const BRAND_NAME = "Fawnaé";

/* ── STATE ────────────────────────────────────────────────── */
let currentUser = JSON.parse(localStorage.getItem("fbf_user") || "null");
let cart = JSON.parse(
  localStorage.getItem(
    currentUser ? `fbf_cart_${currentUser.email}` : "fbf_cart_guest",
  ) || "[]",
);
let wishlist = JSON.parse(localStorage.getItem("fbf_wishlist") || "[]");
let activeFilter = "all";
let searchQuery = "";
let testiIndex = 0;
let promoApplied = false;

/* ── LOADER ───────────────────────────────────────────────── */
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  // Disable pointer-events immediately so buttons are never blocked
  if (loader) loader.style.pointerEvents = "none";
  setTimeout(() => {
    loader.classList.add("hidden");
    initHeroAnimations();
    startFloatingHearts();
    initParallaxParticles();
  }, 1500);
});

/* ── CUSTOM CURSOR ────────────────────────────────────────── */
const isTouchDevice = window.matchMedia(
  "(hover: none) and (pointer: coarse)",
).matches;

const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

let mouseX = 0,
  mouseY = 0;
let dotX = 0,
  dotY = 0;
let outlineX = 0,
  outlineY = 0;

if (!isTouchDevice) {
  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    createSparkle(e.clientX, e.clientY);
  });
}

function animateCursor() {
  if (isTouchDevice) return;
  dotX += (mouseX - dotX) * 0.38;
  dotY += (mouseY - dotY) * 0.38;
  outlineX += (mouseX - outlineX) * 0.1;
  outlineY += (mouseY - outlineY) * 0.1;
  if (cursorDot) {
    cursorDot.style.left = dotX + "px";
    cursorDot.style.top = dotY + "px";
  }
  if (cursorOutline) {
    cursorOutline.style.left = outlineX + "px";
    cursorOutline.style.top = outlineY + "px";
  }
  requestAnimationFrame(animateCursor);
}
animateCursor();

if (!isTouchDevice) {
  document.addEventListener("mouseover", (e) => {
    if (
      e.target.closest(
        "a, button, .product-card, .filter-btn, .add-to-cart-btn, .why-card, .testimonial-card",
      )
    ) {
      cursorOutline && cursorOutline.classList.add("hovering");
    }
  });
  document.addEventListener("mouseout", (e) => {
    if (
      e.target.closest(
        "a, button, .product-card, .filter-btn, .add-to-cart-btn, .why-card, .testimonial-card",
      )
    ) {
      cursorOutline && cursorOutline.classList.remove("hovering");
    }
  });
}

/* ── SPARKLES ON CURSOR ───────────────────────────────────── */
let lastSparkle = 0;
const sparkleSymbols = ["✦", "♡", "✿", "★", "◆"];

function createSparkle(x, y) {
  const now = Date.now();
  if (now - lastSparkle < 90) return;
  lastSparkle = now;

  const useSymbol = Math.random() > 0.6;
  const sparkle = document.createElement("div");
  sparkle.className = useSymbol ? "sparkle-star" : "sparkle";

  const colors = [
    "var(--dusty-rose)",
    "var(--gold)",
    "var(--rose)",
    "var(--mint)",
    "var(--gold-warm)",
  ];
  const offsetX = (Math.random() - 0.5) * 24;
  const offsetY = (Math.random() - 0.5) * 24;

  if (useSymbol) {
    sparkle.textContent =
      sparkleSymbols[Math.floor(Math.random() * sparkleSymbols.length)];
    sparkle.style.cssText = `
      left: ${x + offsetX}px; top: ${y + offsetY}px;
      color: ${colors[Math.floor(Math.random() * colors.length)]};
    `;
  } else {
    sparkle.style.cssText = `
      left: ${x + offsetX}px; top: ${y + offsetY}px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      width: ${Math.random() * 5 + 3}px;
      height: ${Math.random() * 5 + 3}px;
    `;
  }

  const container = document.getElementById("sparkles");
  container && container.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), useSymbol ? 800 : 650);
}

/* ── FLOATING HEARTS ──────────────────────────────────────── */
function startFloatingHearts() {
  const container = document.getElementById("floatingHearts");
  if (!container) return;
  const symbols = ["♡", "✦", "♡", "✿", "♡", "❋"];

  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "floating-heart";
    heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    heart.style.left = Math.random() * 94 + "vw";
    heart.style.animationDuration = Math.random() * 5 + 5 + "s";
    heart.style.fontSize = Math.random() * 0.8 + 0.5 + "rem";
    heart.style.opacity = Math.random() * 0.35 + 0.15;
    heart.style.color =
      Math.random() > 0.5 ? "var(--dusty-rose)" : "var(--gold)";
    container.appendChild(heart);
    setTimeout(() => heart.remove(), 10000);
  }, 1600);
}

/* ── SCROLL PROGRESS ──────────────────────────────────────── */
window.addEventListener("scroll", onScroll, { passive: true });

function onScroll() {
  const total = document.documentElement.scrollHeight - window.innerHeight;
  const progress = (window.scrollY / total) * 100;
  const bar = document.getElementById("scrollProgress");
  if (bar) bar.style.width = progress + "%";

  const navbar = document.getElementById("navbar");
  if (navbar) {
    if (window.scrollY > 60) navbar.classList.add("scrolled");
    else navbar.classList.remove("scrolled");
  }

  handleParallax();
  animateCounters();
}

/* ── ADVANCED PARALLAX ─────────────────────────────────────── */
function handleParallax() {
  // Banner 1
  const b1 = document.getElementById("parallaxBanner");
  const bg1 = document.getElementById("parallaxBg");
  if (b1 && bg1) {
    const rect = b1.getBoundingClientRect();
    const ratio = rect.top / window.innerHeight;
    bg1.style.transform = `translateY(${ratio * 50}px) scale(1.15)`;
  }

  // Banner 2
  const b2 = document.getElementById("parallaxBanner2");
  const bg2 = document.getElementById("parallaxBg2");
  if (b2 && bg2) {
    const rect = b2.getBoundingClientRect();
    const ratio = rect.top / window.innerHeight;
    bg2.style.transform = `translateY(${ratio * 40}px) scale(1.12)`;
  }

  // Hero orbs subtle movement
  const scrollY = window.scrollY;
  const orb1 = document.querySelector(".orb-1");
  const orb2 = document.querySelector(".orb-2");
  if (orb1) orb1.style.transform = `translateY(${scrollY * 0.15}px)`;
  if (orb2) orb2.style.transform = `translateY(${-scrollY * 0.1}px)`;
}

/* ── PARALLAX PARTICLES ───────────────────────────────────── */
function initParallaxParticles() {
  const container = document.getElementById("parallaxParticles");
  if (!container) return;
  for (let i = 0; i < 12; i++) {
    const p = document.createElement("div");
    p.className = "p-particle";
    const size = Math.random() * 8 + 4;
    const duration = Math.random() * 8 + 6;
    const delay = Math.random() * -10;
    p.style.cssText = `
      width:${size}px;height:${size}px;
      left:${Math.random() * 100}%;
      bottom:-${size}px;
      opacity:${Math.random() * 0.3 + 0.1};
      animation-duration:${duration}s;
      animation-delay:${delay}s;
    `;
    container.appendChild(p);
  }
}

/* ── HERO ANIMATIONS ──────────────────────────────────────── */
function initHeroAnimations() {
  const reveals = document.querySelectorAll(".reveal-text");
  reveals.forEach((el, i) => {
    el.style.transition = `opacity 1s cubic-bezier(0.23,1,0.32,1) ${i * 0.14}s, transform 1s cubic-bezier(0.23,1,0.32,1) ${i * 0.14}s`;
    el.style.opacity = "1";
    el.style.transform = "translateY(0)";
  });
}

/* ── COUNTER ANIMATION ─────────────────────────────────────── */
let countersStarted = false;
function animateCounters() {
  if (countersStarted) return;
  const stats = document.querySelector(".about-stats");
  if (!stats) return;
  const rect = stats.getBoundingClientRect();
  if (rect.top < window.innerHeight * 0.85) {
    countersStarted = true;
    document.querySelectorAll(".stat-num[data-target]").forEach((el) => {
      const target = parseInt(el.dataset.target);
      const duration = 1800;
      const start = performance.now();
      function update(now) {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3); // ease-out-cubic
        el.textContent = Math.round(eased * target);
        if (t < 1) requestAnimationFrame(update);
        else el.textContent = target;
      }
      requestAnimationFrame(update);
    });
  }
}

/* ── SCROLL-TRIGGERED REVEALS ─────────────────────────────── */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.08, rootMargin: "0px 0px -50px 0px" },
);

function observeRevealElements() {
  document
    .querySelectorAll(
      ".product-card, .testimonial-card, .contact-card, .about-inner, .why-card, .footer-brand, .footer-links, .footer-newsletter",
    )
    .forEach((el, i) => {
      el.style.transitionDelay = (i % 4) * 0.08 + "s";
      revealObserver.observe(el);
    });
}

/* Section headers */
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.15 },
);

document
  .querySelectorAll(
    ".section-title, .section-eyebrow, .section-sub, .section-title-line",
  )
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(22px)";
    el.style.transition =
      "opacity 0.9s cubic-bezier(0.23,1,0.32,1), transform 0.9s cubic-bezier(0.23,1,0.32,1)";
    sectionObserver.observe(el);
  });

/* ── SECTION NAVIGATION ───────────────────────────────────── */
function navigateTo(section) {
  const target = document.getElementById(section);
  if (target) target.scrollIntoView({ behavior: "smooth" });
}

document.addEventListener("click", (e) => {
  // Close user dropdown when clicking outside
  const dropdown = document.getElementById("userDropdown");
  if (dropdown && dropdown.classList.contains("open")) {
    if (!e.target.closest("#authBtn") && !e.target.closest("#userDropdown")) {
      dropdown.classList.remove("open");
    }
  }

  // Ripple effect
  const rippleBtn = e.target.closest(".ripple-btn");
  if (rippleBtn) {
    const rect = rippleBtn.getBoundingClientRect();
    const ripple = document.createElement("span");
    ripple.className = "ripple-wave";
    const size = Math.max(rect.width, rect.height) * 2;
    ripple.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX - rect.left - size / 2}px;top:${e.clientY - rect.top - size / 2}px;`;
    rippleBtn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 700);
  }

  // Section navigation — skip if inside nav buttons, modals, cart, auth
  if (
    e.target.closest(
      "#authBtn, #cartBtn, #authModal, #cartDrawer, #productModal, .hamburger",
    )
  )
    return;
  const sectionBtn = e.target.closest("[data-section]");
  if (sectionBtn) navigateTo(sectionBtn.dataset.section);
});

document.querySelectorAll(".nav-links a, .footer-links a").forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");
    if (href && href.startsWith("#")) {
      e.preventDefault();
      navigateTo(href.slice(1));
      document.getElementById("navLinks").classList.remove("open");
      document.getElementById("hamburger").classList.remove("open");
    }
  });
});

/* ── HAMBURGER ────────────────────────────────────────────── */
document.getElementById("hamburger").addEventListener("click", function (e) {
  e.stopPropagation();
  this.classList.toggle("open");
  document.getElementById("navLinks").classList.toggle("open");
});

/* ── RENDER PRODUCTS ──────────────────────────────────────── */
function createProductCard(product) {
  const card = document.createElement("div");
  card.className = "product-card";
  card.dataset.id = product.id;
  const inCart = cart.find((i) => i.id === product.id);
  const inWishlist = wishlist.includes(product.id);

  card.innerHTML = `
    <div class="product-img-wrap">
      <img src="${product.image}" alt="${product.name}" loading="lazy" />
      <div class="product-badge">✦ New</div>
      <button class="product-wishlist ${inWishlist ? "wishlisted" : ""}" data-wid="${product.id}" aria-label="Wishlist">♡</button>
      <button class="product-quick-view" data-id="${product.id}">Quick View</button>
    </div>
    <div class="product-info">
      <div class="product-category">${product.category}</div>
      <div class="product-name">${product.name}</div>
      <div class="product-desc">${product.description}</div>
      <div class="product-footer">
        <div class="product-price">
          <span class="currency">₹</span>${product.price.toLocaleString("en-IN")}
        </div>
        <button class="add-to-cart-btn ${inCart ? "added" : ""}" data-id="${product.id}">
          <span>${inCart ? "✓ Added" : "Add to Bag"}</span>
        </button>
      </div>
    </div>
  `;

  // Add to cart
  card.querySelector(".add-to-cart-btn").addEventListener("click", (e) => {
    e.stopPropagation();
    addToCart(product.id);
    const btn = card.querySelector(".add-to-cart-btn");
    btn.classList.add("added");
    btn.querySelector("span").textContent = "✓ Added";
  });

  // Wishlist
  card.querySelector(".product-wishlist").addEventListener("click", (e) => {
    e.stopPropagation();
    toggleWishlist(product.id, card.querySelector(".product-wishlist"));
  });

  // Quick view
  card.querySelector(".product-quick-view").addEventListener("click", (e) => {
    e.stopPropagation();
    openModal(product.id);
  });

  // On touch devices, tapping the image area opens the modal
  card.querySelector(".product-img-wrap").addEventListener("click", (e) => {
    if (
      e.target.closest(
        ".product-wishlist, .product-quick-view, .add-to-cart-btn",
      )
    )
      return;
    openModal(product.id);
  });

  return card;
}

function renderFeatured() {
  const grid = document.getElementById("featuredGrid");
  if (!grid) return;
  grid.innerHTML = "";
  const featured = products.slice(0, 4);
  featured.forEach((p) => {
    const card = createProductCard(p);
    grid.appendChild(card);
  });
  setTimeout(() => observeRevealElements(), 50);
}

function renderProducts() {
  const grid = document.getElementById("productGrid");
  if (!grid) return;
  grid.innerHTML = "";

  let filtered = products;
  if (activeFilter !== "all")
    filtered = filtered.filter((p) => p.category === activeFilter);
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q),
    );
  }

  const noResults = document.getElementById("noResults");
  if (filtered.length === 0) {
    if (noResults) noResults.style.display = "block";
    return;
  }
  if (noResults) noResults.style.display = "none";

  filtered.forEach((p) => {
    const card = createProductCard(p);
    grid.appendChild(card);
  });
  setTimeout(() => observeRevealElements(), 50);
}

/* ── FILTER BAR ───────────────────────────────────────────── */
document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".filter-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    activeFilter = btn.dataset.filter;
    animateGridChange();
    renderProducts();
  });
});

function animateGridChange() {
  const grid = document.getElementById("productGrid");
  if (!grid) return;
  grid.style.opacity = "0.3";
  grid.style.transform = "translateY(12px)";
  grid.style.transition = "opacity 0.3s, transform 0.3s";
  setTimeout(() => {
    grid.style.opacity = "1";
    grid.style.transform = "translateY(0)";
  }, 320);
}

/* ── SEARCH ───────────────────────────────────────────────── */
const searchInput = document.getElementById("searchInput");
if (searchInput) {
  searchInput.addEventListener("input", () => {
    searchQuery = searchInput.value.trim();
    renderProducts();
  });
}

/* ── WISHLIST ─────────────────────────────────────────────── */
function toggleWishlist(id, btn) {
  if (wishlist.includes(id)) {
    wishlist = wishlist.filter((w) => w !== id);
    btn.classList.remove("wishlisted");
    btn.textContent = "♡";
  } else {
    wishlist.push(id);
    btn.classList.add("wishlisted");
    btn.textContent = "♥";
    showWishlistToast();
  }
  localStorage.setItem("fbf_wishlist", JSON.stringify(wishlist));
}

function showWishlistToast() {
  const toast = document.getElementById("wishlistToast");
  if (!toast) return;
  toast.style.display = "block";
  setTimeout(() => {
    toast.style.animation = "none";
    toast.offsetHeight; // reflow
    toast.style.animation =
      "toastIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) both";
  }, 10);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transition = "opacity 0.3s";
    setTimeout(() => {
      toast.style.display = "none";
      toast.style.opacity = "";
      toast.style.transition = "";
    }, 300);
  }, 2500);
}

/* ── CART ─────────────────────────────────────────────────── */
function addToCart(id) {
  const product = products.find((p) => p.id === id);
  if (!product) return;
  const existing = cart.find((i) => i.id === id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  saveCart();
  updateCartUI();
  showCartNotification(product.name);
  updateProductCardButtons();
}

function removeFromCart(id) {
  cart = cart.filter((i) => i.id !== id);
  saveCart();
  updateCartUI();
  renderCartItems();
  updateProductCardButtons();
}

function changeQty(id, delta) {
  const item = cart.find((i) => i.id === id);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart();
  updateCartUI();
  renderCartItems();
}

function cartKey() {
  return currentUser ? `fbf_cart_${currentUser.email}` : "fbf_cart_guest";
}

function saveCart() {
  localStorage.setItem(cartKey(), JSON.stringify(cart));
}

function updateCartUI() {
  const count = cart.reduce((s, i) => s + i.qty, 0);
  const countEl = document.getElementById("cartCount");
  const itemCountEl = document.getElementById("cartItemCount");
  if (countEl) {
    countEl.textContent = count;
    countEl.classList.add("bump");
    setTimeout(() => countEl.classList.remove("bump"), 400);
  }
  if (itemCountEl)
    itemCountEl.textContent = `${count} item${count !== 1 ? "s" : ""}`;
}

function renderCartItems() {
  const container = document.getElementById("cartItems");
  const empty = document.getElementById("cartEmpty");
  const footer = document.getElementById("cartFooter");
  if (!container) return;

  // Remove old items (keep empty state)
  Array.from(container.children).forEach((child) => {
    if (!child.id?.includes("cartEmpty")) child.remove();
  });

  if (cart.length === 0) {
    if (empty) empty.style.display = "flex";
    if (footer) footer.style.display = "none";
    return;
  }

  if (empty) empty.style.display = "none";
  if (footer) footer.style.display = "block";

  cart.forEach((item) => {
    const el = document.createElement("div");
    el.className = "cart-item";
    el.innerHTML = `
      <img class="cart-item-img" src="${item.image}" alt="${item.name}" />
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">₹${(item.price * item.qty).toLocaleString("en-IN")}</div>
        <div class="cart-item-controls">
          <button class="qty-btn" data-id="${item.id}" data-delta="-1">−</button>
          <span class="qty-value">${item.qty}</span>
          <button class="qty-btn" data-id="${item.id}" data-delta="1">+</button>
          <button class="cart-item-remove" data-id="${item.id}">Remove</button>
        </div>
      </div>
    `;
    container.appendChild(el);
  });

  container.querySelectorAll(".qty-btn").forEach((btn) => {
    btn.addEventListener("click", () =>
      changeQty(parseInt(btn.dataset.id), parseInt(btn.dataset.delta)),
    );
  });
  container.querySelectorAll(".cart-item-remove").forEach((btn) => {
    btn.addEventListener("click", () =>
      removeFromCart(parseInt(btn.dataset.id)),
    );
  });

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const totalEl = document.getElementById("cartTotal");
  if (totalEl) totalEl.textContent = `₹${total.toLocaleString("en-IN")}`;
}

function updateProductCardButtons() {
  document.querySelectorAll(".add-to-cart-btn").forEach((btn) => {
    const id = parseInt(btn.dataset.id);
    const inCart = cart.find((i) => i.id === id);
    const span = btn.querySelector("span") || btn;
    if (inCart) {
      btn.classList.add("added");
      span.textContent = "✓ Added";
    } else {
      btn.classList.remove("added");
      span.textContent = "Add to Bag";
    }
  });
}

function showCartNotification(name) {
  const notif = document.createElement("div");
  notif.style.cssText = `
    position:fixed;bottom:2rem;left:50%;
    transform:translateX(-50%) translateY(20px);
    background:linear-gradient(135deg,var(--deep-rose),var(--bordeaux));
    color:white;padding:0.75rem 1.5rem;
    border-radius:50px;font-size:0.82rem;
    letter-spacing:0.08em;z-index:5000;
    box-shadow:0 8px 30px rgba(107,45,58,0.4);
    transition:all 0.4s cubic-bezier(0.23,1,0.32,1);
    white-space:nowrap;font-family:var(--font-sans);opacity:0;
  `;
  notif.textContent =
    name.includes("♡") || name.includes("✦")
      ? name
      : `♡ Added to bag — ${name}`;
  document.body.appendChild(notif);
  setTimeout(() => {
    notif.style.opacity = "1";
    notif.style.transform = "translateX(-50%) translateY(0)";
  }, 10);
  setTimeout(() => {
    notif.style.opacity = "0";
    notif.style.transform = "translateX(-50%) translateY(10px)";
    setTimeout(() => notif.remove(), 400);
  }, 2200);
}

/* ── CART DRAWER ──────────────────────────────────────────── */
function openCart() {
  renderCartItems();
  document.getElementById("cartDrawer").classList.add("open");
  document.getElementById("cartOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
  document.body.classList.add("cart-open");
}
function closeCart() {
  document.getElementById("cartDrawer").classList.remove("open");
  document.getElementById("cartOverlay").classList.remove("open");
  document.body.style.overflow = "";
  document.body.classList.remove("cart-open");
}

document.getElementById("cartBtn").addEventListener("click", (e) => {
  e.stopPropagation();
  e.preventDefault();
  openCart();
});
document.getElementById("cartClose").addEventListener("click", closeCart);
document.getElementById("cartOverlay").addEventListener("click", closeCart);

/* ── PROMO CODE ───────────────────────────────────────────── */
document.getElementById("promoBtn").addEventListener("click", () => {
  const input = document
    .getElementById("promoInput")
    .value.trim()
    .toUpperCase();
  if (input === "FLAWLESS10") {
    if (promoApplied) {
      showCartNotification("Promo already applied ✦");
      return;
    }
    promoApplied = true;
    const totalEl = document.getElementById("cartTotal");
    if (totalEl) {
      const rawTotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
      const discounted = Math.round(rawTotal * 0.9);
      totalEl.textContent = `₹${discounted.toLocaleString("en-IN")}`;
    }
    showCartNotification("Promo applied! 10% off ✦");
  } else if (input !== "") {
    showCartNotification("Invalid promo code");
  }
});

/* ── WHATSAPP CHECKOUT ────────────────────────────────────── */
document.getElementById("checkoutBtn").addEventListener("click", () => {
  if (cart.length === 0) return;

  let orderLines = cart
    .map(
      (item, i) =>
        `${i + 1}. ${item.name} × ${item.qty} — ₹${(item.price * item.qty).toLocaleString("en-IN")}`,
    )
    .join("\n");

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const userName = currentUser ? currentUser.firstName : "";

  const message = `Hello ${BRAND_NAME}! 🌸${userName ? `\nName: ${userName}` : ""}

I would like to place an order:

${orderLines}

──────────────────
💛 Total: ₹${total.toLocaleString("en-IN")}
──────────────────

Name: 
Address: 
Pincode: 

Thank you! ✦`;

  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
    "_blank",
  );
});

/* ── PRODUCT MODAL ────────────────────────────────────────── */
function openModal(id) {
  const product = products.find((p) => p.id === id);
  if (!product) return;
  const inCart = cart.find((i) => i.id === id);

  document.getElementById("modalInner").innerHTML = `
    <img class="modal-img" src="${product.image}" alt="${product.name}" />
    <div class="modal-info">
      <div class="modal-category">✦ ${product.category}</div>
      <div class="modal-name">${product.name}</div>
      <div class="modal-price"><span class="modal-currency">₹</span>${product.price.toLocaleString("en-IN")}</div>
      <div class="modal-desc">${product.description}</div>
      <div class="modal-features">
        <div class="modal-feature">18K Gold Plated — Tarnish Free</div>
        <div class="modal-feature">Suitable for sensitive skin</div>
        <div class="modal-feature">Gift-ready packaging</div>
        <div class="modal-feature">Easy WhatsApp checkout</div>
      </div>
      <button class="btn-primary btn-full ripple-btn modal-add-btn add-to-cart-btn ${inCart ? "added" : ""}" data-id="${product.id}">
        <span>${inCart ? "✓ Added to Bag" : "Add to Bag ♡"}</span>
      </button>
    </div>
  `;

  document
    .getElementById("modalInner")
    .querySelector(".modal-add-btn")
    .addEventListener("click", () => {
      addToCart(product.id);
      const btn = document
        .getElementById("modalInner")
        .querySelector(".modal-add-btn");
      btn.querySelector("span").textContent = "✓ Added to Bag";
      btn.classList.add("added");
      updateProductCardButtons();
    });

  document.getElementById("productModal").classList.add("open");
  document.getElementById("modalOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("productModal").classList.remove("open");
  document.getElementById("modalOverlay").classList.remove("open");
  document.body.style.overflow = "";
}

document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("modalOverlay").addEventListener("click", closeModal);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
    closeCart();
    closeAuth();
  }
});

/* ── TESTIMONIAL CAROUSEL ─────────────────────────────────── */
function initTestimonialCarousel() {
  const cards = document.querySelectorAll(".testimonial-card");
  const dotsContainer = document.getElementById("testiDots");
  const totalGroups = Math.ceil(cards.length / 3);

  if (!dotsContainer) return;

  // Build dots
  for (let i = 0; i < totalGroups; i++) {
    const dot = document.createElement("div");
    dot.className = `testi-dot ${i === 0 ? "active" : ""}`;
    dot.addEventListener("click", () => goToTesti(i));
    dotsContainer.appendChild(dot);
  }

  document.getElementById("testiPrev")?.addEventListener("click", () => {
    testiIndex = Math.max(0, testiIndex - 1);
    updateTestiDots();
  });
  document.getElementById("testiNext")?.addEventListener("click", () => {
    testiIndex = Math.min(totalGroups - 1, testiIndex + 1);
    updateTestiDots();
  });

  // Auto-advance
  setInterval(() => {
    testiIndex = (testiIndex + 1) % totalGroups;
    updateTestiDots();
  }, 5000);

  function goToTesti(i) {
    testiIndex = i;
    updateTestiDots();
  }
  function updateTestiDots() {
    document
      .querySelectorAll(".testi-dot")
      .forEach((d, i) => d.classList.toggle("active", i === testiIndex));
  }

  // Observe for reveal
  cards.forEach((card, i) => {
    card.style.transitionDelay = (i % 3) * 0.12 + "s";
    revealObserver.observe(card);
  });
}

/* ── NEWSLETTER ───────────────────────────────────────────── */
document.getElementById("newsletterBtn")?.addEventListener("click", () => {
  const input = document.getElementById("newsletterInput");
  const success = document.getElementById("newsletterSuccess");
  if (input && input.value.includes("@")) {
    input.style.display = "none";
    document.getElementById("newsletterBtn").style.display = "none";
    if (success) success.style.display = "block";
  }
});

/* ── AUTH SYSTEM ──────────────────────────────────────────── */
let users = JSON.parse(localStorage.getItem("fbf_users") || "[]");

function openAuth(tab = "login") {
  const modal = document.getElementById("authModal");
  const overlay = document.getElementById("authOverlay");
  if (!modal || !overlay) return;
  modal.classList.add("open");
  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
  switchAuthTab(tab);
}

function closeAuth() {
  const modal = document.getElementById("authModal");
  const overlay = document.getElementById("authOverlay");
  if (!modal || !overlay) return;
  modal.classList.remove("open");
  overlay.classList.remove("open");
  document.body.style.overflow = "";
}

function switchAuthTab(tab) {
  const indicator = document.getElementById("authTabIndicator");
  document.querySelectorAll(".auth-tab").forEach((t) => {
    t.classList.toggle("active", t.dataset.tab === tab);
  });
  document
    .getElementById("panelLogin")
    .classList.toggle("hidden", tab !== "login");
  document
    .getElementById("panelSignup")
    .classList.toggle("hidden", tab !== "signup");
  document.getElementById("panelSuccess").classList.add("hidden");
  if (indicator) indicator.classList.toggle("on-signup", tab === "signup");
}

document.querySelectorAll(".auth-tab").forEach((tab) => {
  tab.addEventListener("click", () => switchAuthTab(tab.dataset.tab));
});

document.getElementById("authOverlay")?.addEventListener("click", closeAuth);
document.getElementById("authModalClose")?.addEventListener("click", closeAuth);

document.getElementById("switchToSignup")?.addEventListener("click", (e) => {
  e.preventDefault();
  switchAuthTab("signup");
});
document.getElementById("switchToLogin")?.addEventListener("click", (e) => {
  e.preventDefault();
  switchAuthTab("login");
});

// Auth button in navbar
document.getElementById("authBtn")?.addEventListener("click", (e) => {
  e.stopPropagation();
  e.preventDefault();
  if (currentUser) {
    const dropdown = document.getElementById("userDropdown");
    if (dropdown) {
      dropdown.classList.toggle("open");
    }
  } else {
    openAuth("login");
  }
});

function showUserMenu() {
  const dropdown = document.getElementById("userDropdown");
  if (dropdown) {
    dropdown.classList.add("open");
  }
}

// Signout button
document.getElementById("signoutBtn")?.addEventListener("click", (e) => {
  e.stopPropagation();
  document.getElementById("userDropdown")?.classList.remove("open");
  logout();
});

function updateNavAuth() {
  const label = document.getElementById("navAuthLabel");
  const dropdownName = document.getElementById("userDropdownName");
  if (currentUser) {
    if (label) label.textContent = currentUser.firstName || "Account";
    if (dropdownName)
      dropdownName.textContent = `Hi, ${currentUser.firstName} ♡`;
  } else {
    if (label) label.textContent = "Login";
    if (dropdownName) dropdownName.textContent = "";
    document.getElementById("userDropdown")?.classList.remove("open");
  }
}

/* Password strength */
document
  .getElementById("signupPassword")
  ?.addEventListener("input", function () {
    const pw = this.value;
    const fill = document.getElementById("pwFill");
    const label = document.getElementById("pwLabel");
    if (!fill || !label) return;

    let strength = 0;
    if (pw.length >= 8) strength++;
    if (/[A-Z]/.test(pw)) strength++;
    if (/[0-9]/.test(pw)) strength++;
    if (/[^A-Za-z0-9]/.test(pw)) strength++;

    fill.className = "pw-fill";
    if (pw.length === 0) {
      fill.style.width = "0%";
      label.textContent = "";
      return;
    }
    if (strength <= 1) {
      fill.classList.add("weak");
      label.textContent = "Weak";
    } else if (strength <= 2) {
      fill.classList.add("medium");
      label.textContent = "Medium";
    } else {
      fill.classList.add("strong");
      label.textContent = "Strong";
    }
  });

/* Toggle password visibility */
document.querySelectorAll(".auth-toggle-pw").forEach((btn) => {
  btn.addEventListener("click", () => {
    const input = document.getElementById(btn.dataset.target);
    if (input) input.type = input.type === "password" ? "text" : "password";
  });
});

/* LOGIN */
function handleLogin() {
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;
  const errorEl = document.getElementById("loginError");

  if (!email || !password) {
    showAuthError(errorEl, "Please fill in all fields.");
    return;
  }

  const btn = document.getElementById("loginSubmitBtn");
  setAuthLoading(btn, true);

  setTimeout(() => {
    const user = users.find(
      (u) => u.email === email && u.password === password,
    );
    if (user) {
      loginSuccess(user);
    } else {
      showAuthError(errorEl, "Invalid email or password. Please try again.");
      setAuthLoading(btn, false);
    }
  }, 1000);
}

document.getElementById("loginForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  handleLogin();
});

// Mobile fallback — direct click on the button
document.getElementById("loginSubmitBtn")?.addEventListener("click", (e) => {
  const form = document.getElementById("loginForm");
  if (form && !form.dataset.submitting) {
    form.dataset.submitting = "1";
    handleLogin();
    setTimeout(() => delete form.dataset.submitting, 1500);
  }
});

/* SIGNUP */
function handleSignup() {
  const firstName = document.getElementById("signupFirst").value.trim();
  const lastName = document.getElementById("signupLast").value.trim();
  const email = document.getElementById("signupEmail").value.trim();
  const phone = document.getElementById("signupPhone").value.trim();
  const password = document.getElementById("signupPassword").value;
  const terms = document.getElementById("signupTerms").checked;
  const errorEl = document.getElementById("signupError");

  if (!firstName || !email || !password) {
    showAuthError(errorEl, "Please fill in all required fields.");
    return;
  }
  if (!terms) {
    showAuthError(errorEl, "Please accept the Terms & Privacy Policy.");
    return;
  }
  if (password.length < 6) {
    showAuthError(errorEl, "Password must be at least 6 characters.");
    return;
  }
  if (users.find((u) => u.email === email)) {
    showAuthError(errorEl, "An account with this email already exists.");
    return;
  }

  const btn = document.getElementById("signupSubmitBtn");
  setAuthLoading(btn, true);

  setTimeout(() => {
    const newUser = {
      firstName,
      lastName,
      email,
      phone,
      password,
      joined: new Date().toISOString(),
    };
    users.push(newUser);
    localStorage.setItem("fbf_users", JSON.stringify(users));
    loginSuccess(newUser, true);
  }, 1200);
}

document.getElementById("signupForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  handleSignup();
});

// Mobile fallback — direct click on the button
document.getElementById("signupSubmitBtn")?.addEventListener("click", (e) => {
  // Only fire if form submit didn't already handle it
  const form = document.getElementById("signupForm");
  if (form && !form.dataset.submitting) {
    form.dataset.submitting = "1";
    handleSignup();
    setTimeout(() => delete form.dataset.submitting, 1500);
  }
});

function loginSuccess(user, isNew = false) {
  currentUser = user;
  localStorage.setItem("fbf_user", JSON.stringify(user));

  // Load this user's saved cart (restore their previous session)
  const savedCart = localStorage.getItem(`fbf_cart_${user.email}`);
  cart = savedCart ? JSON.parse(savedCart) : [];
  updateCartUI();
  updateProductCardButtons();

  updateNavAuth();

  // Show success panel
  document.getElementById("panelLogin").classList.add("hidden");
  document.getElementById("panelSignup").classList.add("hidden");
  const successPanel = document.getElementById("panelSuccess");
  successPanel.classList.remove("hidden");
  document.getElementById("successTitle").textContent = isNew
    ? `Welcome, ${user.firstName}! ♡`
    : `Welcome back, ${user.firstName}!`;
  document.getElementById("successMessage").textContent = isNew
    ? "Your account has been created. Let's find you something beautiful!"
    : "You're now signed in. Happy shopping!";
}

function logout() {
  // Revoke Google session if signed in via Google
  if (currentUser?.googleId && window.google) {
    google.accounts.id.revoke(currentUser.email, () => {});
  }
  currentUser = null;
  localStorage.removeItem("fbf_user");

  // Clear cart from view and reset to guest cart (empty)
  cart = [];
  localStorage.removeItem("fbf_cart_guest");
  updateCartUI();
  updateProductCardButtons();

  updateNavAuth();
  showCartNotification("Signed out successfully ♡");
}

document
  .getElementById("successCloseBtn")
  ?.addEventListener("click", closeAuth);

/* ── GOOGLE OAUTH ─────────────────────────────────────────── */
const GOOGLE_CLIENT_ID =
  "504882531037-dqbp078do1mdeo8jlid1vshtifgihbig.apps.googleusercontent.com";

function handleGoogleCredential(response) {
  // Decode the JWT id_token to get user info (no backend needed)
  const payload = JSON.parse(atob(response.credential.split(".")[1]));
  const googleUser = {
    firstName: payload.given_name || payload.name.split(" ")[0],
    lastName: payload.family_name || "",
    email: payload.email,
    picture: payload.picture,
    googleId: payload.sub,
    joinedViaGoogle: true,
    joined: new Date().toISOString(),
  };

  // Check if user already exists, merge or create
  let existingIdx = users.findIndex((u) => u.email === googleUser.email);
  const isNew = existingIdx === -1;
  if (isNew) {
    users.push(googleUser);
  } else {
    // Update picture & googleId on existing account
    users[existingIdx] = { ...users[existingIdx], ...googleUser };
    googleUser.firstName = users[existingIdx].firstName;
  }
  localStorage.setItem("fbf_users", JSON.stringify(users));
  loginSuccess(googleUser, isNew);
}

function initGoogleSignIn() {
  if (!window.google) return;

  google.accounts.id.initialize({
    client_id: GOOGLE_CLIENT_ID,
    callback: handleGoogleCredential,
    auto_select: false,
  });

  // Render button in Login panel
  const loginDiv = document.getElementById("googleLoginDiv");
  if (loginDiv) {
    google.accounts.id.renderButton(loginDiv, {
      theme: "outline",
      size: "large",
      text: "continue_with",
      shape: "pill",
      width: loginDiv.offsetWidth || 320,
    });
  }

  // Render button in Signup panel
  const signupDiv = document.getElementById("googleSignupDiv");
  if (signupDiv) {
    google.accounts.id.renderButton(signupDiv, {
      theme: "outline",
      size: "large",
      text: "signup_with",
      shape: "pill",
      width: signupDiv.offsetWidth || 320,
    });
  }
}

// Initialize once GSI library is ready
if (window.google) {
  initGoogleSignIn();
} else {
  window.addEventListener("load", () => {
    // GSI script loads async — poll briefly until ready
    const interval = setInterval(() => {
      if (window.google) {
        clearInterval(interval);
        initGoogleSignIn();
      }
    }, 100);
  });
}

/* Forgot password */
document.getElementById("forgotLink")?.addEventListener("click", (e) => {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value.trim();
  if (email) {
    showCartNotification(`Recovery link sent to ${email} ♡`);
  } else {
    showAuthError(
      document.getElementById("loginError"),
      "Please enter your email address first.",
    );
  }
});

function showAuthError(el, msg) {
  if (!el) return;
  el.textContent = msg;
  el.style.display = "block";
  el.style.animation = "none";
  el.offsetHeight;
  el.style.animation = "";
  setTimeout(() => {
    el.style.display = "none";
  }, 4000);
}

function setAuthLoading(btn, loading) {
  if (!btn) return;
  btn.classList.toggle("loading", loading);
  const span = btn.querySelector("span");
  if (span)
    span.textContent = loading
      ? "Please wait..."
      : btn.id.includes("login")
        ? "Sign In ♡"
        : "Create My Account ✦";
}

/* ── WHY CARDS OBSERVER ───────────────────────────────────── */
document.querySelectorAll(".why-card").forEach((card, i) => {
  card.style.transitionDelay = i * 0.1 + "s";
  revealObserver.observe(card);
});

/* ── CONTACT CARDS OBSERVER ───────────────────────────────── */
document.querySelectorAll(".contact-card").forEach((card, i) => {
  card.style.transitionDelay = i * 0.12 + "s";
  revealObserver.observe(card);
});

/* ── FOOTER OBSERVERS ─────────────────────────────────────── */
document
  .querySelectorAll(".footer-brand, .footer-links, .footer-newsletter")
  .forEach((el, i) => {
    el.style.transitionDelay = i * 0.1 + "s";
    revealObserver.observe(el);
  });

/* ── CARD TILT EFFECT (desktop) ───────────────────────────── */
function initTiltEffect() {
  document
    .querySelectorAll(".product-card, .why-card, .testimonial-card")
    .forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `translateY(-8px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg) scale(1.01)`;
      });
      card.addEventListener("mouseleave", () => {
        card.style.transform = "";
      });
    });
}

/* ── INIT ─────────────────────────────────────────────────── */
function init() {
  renderFeatured();
  renderProducts();
  updateCartUI();
  updateNavAuth();
  initTestimonialCarousel();
  setTimeout(() => {
    observeRevealElements();
    initTiltEffect();
  }, 200);
}

init();
