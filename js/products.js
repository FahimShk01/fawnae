// ============================================================
// FLAWLESS BY FARHEEN — PRODUCT CATALOG
// Edit product names, prices, categories, and image paths here
// ============================================================

const products = [
  {
    id: 1,
    name: "Moonstone Reverie Pendant",
    price: 400,
    image: "images/product1.jpg",
    category: "necklaces",
    description:
      "A dreamy oval moonstone cradled in liquid gold — glows like moonlight on satin.",
  },
  {
    id: 2,
    name: "Golden Bow Choker",
    price: 549,
    image: "images/product2.jpg",
    category: "necklaces",
    description:
      "Delicate gold bow rests at your collarbone like a whispered secret.",
  },
  {
    id: 3,
    name: "Roman Eternity Interlock",
    price: 749,
    image: "images/product3.jpg",
    category: "necklaces",
    description:
      "Interlocked Roman numeral rings on a fine gold chain — timeless and bold.",
  },

  {
    id: 4,
    name: "Seraphina Butterfly Necklace",
    price: 649,
    image: "images/product4.jpg",
    category: "necklaces",
    description:
      "A graceful butterfly design that captures lightness and elegance — perfect for adding a soft, radiant touch to any look",
  },
  {
    id: 5,
    name: "Opal Galaxy Charm",
    price: 849,
    image: "images/product5.jpg",
    category: "necklaces",
    description:
      "A shimmering opal stone with a diamond accent — galaxies in miniature.",
  },
  {
    id: 6,
    name: "Crystal Snowflake Pendant",
    price: 699,
    image: "images/product6.jpg",
    category: "necklaces",
    description:
      "Pavé crystal snowflake that catches every ray of light you walk through.",
  },
  {
    id: 7,
    name: "Pearl Teardrop Solitaire",
    price: 579,
    image: "images/product7.jpg",
    category: "necklaces",
    description:
      "A single lustrous pearl teardrop on gossamer gold — pure and poetic.",
  },
  {
    id: 8,
    name: "Celestial Crescent Locket",
    price: 729,
    image: "images/product8.jpg",
    category: "necklaces",
    description:
      "Crescent moon pendant with hidden locket detail — for your most intimate memories.",
  },
  {
    id: 9,
    name: "Sunburst Zirconia Drop",
    price: 649,
    image: "images/product9.jpg",
    category: "necklaces",
    description:
      "Radiant sunburst with cubic zirconia halo — like carrying a tiny sun.",
  },
  {
    id: 10,
    name: "Noir Heart Satellite",
    price: 599,
    image: "images/product10.jpg",
    category: "necklaces",
    description:
      "Sleek black heart pendant on a gold satellite chain — edgy meets romantic.",
  },
  {
    id: 11,
    name: "Vintage Cameo Oval",
    price: 779,
    image: "images/product11.jpg",
    category: "necklaces",
    description:
      "Antique-style oval cameo frame in warm gold — nostalgic and statement-worthy.",
  },
  {
    id: 12,
    name: "Infinity Sparkle Bar",
    price: 529,
    image: "images/product12.jpg",
    category: "necklaces",
    description:
      "Gold bar pendant with infinity-set crystals — minimal luxury at its finest.",
  },
  {
    id: 13,
    name: "Rosette Bloom Pendant",
    price: 619,
    image: "images/product13.jpg",
    category: "necklaces",
    description:
      "Delicate rosette blossom pendant in warm gold — femininity in bloom.",
  },
  {
    id: 14,
    name: "Dew Drop Pearl Cascade",
    price: 759,
    image: "images/product14.jpg",
    category: "necklaces",
    description:
      "Cascading pearl drops that move with you — fluid, feminine, flawless.",
  },
  {
    id: 15,
    name: "Petite Gold Heart Slider",
    price: 499,
    image: "images/product15.jpg",
    category: "necklaces",
    description:
      "Tiny polished gold heart that slides along a delicate chain — forever cute.",
  },
  {
    id: 16,
    name: "Twisted Vine Choker",
    price: 679,
    image: "images/product16.jpg",
    category: "necklaces",
    description:
      "Intertwined gold vine in a choker silhouette — organic and architectural.",
  },
  {
    id: 17,
    name: "Diamanté Starburst Chain",
    price: 899,
    image: "images/product17.jpg",
    category: "necklaces",
    description:
      "A full starburst of diamanté stones suspended on a chain of pure light.",
  },
  {
    id: 18,
    name: "Lace Filigree Pendant",
    price: 739,
    image: "images/product18.jpg",
    category: "necklaces",
    description:
      "Intricate filigree pendant that looks like golden lace — heirloom-worthy.",
  },
  {
    id: 19,
    name: "Cherub Wing Charm",
    price: 569,
    image: "images/product19.jpg",
    category: "necklaces",
    description:
      "Tiny cherub wing charm on a delicate chain — whisper of angel energy.",
  },
  {
    id: 20,
    name: "Black Rose Medallion",
    price: 819,
    image: "images/product20.jpg",
    category: "necklaces",
    description:
      "Dark enamel rose etched medallion in a vintage gold frame — dark romance.",
  },
  // ── EARRINGS (21–33) ──────────────────────────────────────

  {
    id: 21,
    name: "Noir Scroll Hoops",
    price: 549,
    image: "images/product21.jpg",
    category: "earrings",
    description:
      "Gold hoops with delicate black enamel scroll motifs — bold yet dainty, effortlessly chic.",
  },
  {
    id: 22,
    name: "Bubble Arch Hoops",
    price: 499,
    image: "images/product22.jpg",
    category: "earrings",
    description:
      "Geometric arch hoops edged with petite gold bubbles — playful structure meets luxury finish.",
  },
  {
    id: 23,
    name: "Quilted Crescent Hoops",
    price: 529,
    image: "images/product23.jpg",
    category: "earrings",
    description:
      "Chunky crescent hoops with a quilted texture — structured, tactile, and utterly cool.",
  },
  {
    id: 24,
    name: "Ripple Goddess Hoops",
    price: 579,
    image: "images/product24.jpg",
    category: "earrings",
    description:
      "Softly twisted gold hoops with a flowing wave finish — movement captured in metal.",
  },
  {
    id: 25,
    name: "Matte Square Hoops",
    price: 499,
    image: "images/product25.jpg",
    category: "earrings",
    description:
      "Hammered square gold hoops — a minimal art-deco statement for the modern girl.",
  },
  {
    id: 26,
    name: "Open Heart Studs",
    price: 449,
    image: "images/product26.jpg",
    category: "earrings",
    description:
      "Oversized open heart silhouette in polished gold — romantic, bold, and effortlessly you.",
  },
  {
    id: 27,
    name: "Ridged Crescent Hoops",
    price: 549,
    image: "images/product27.jpg",
    category: "earrings",
    description:
      "Fanned ridges cascade across chunky crescent hoops — sculptural gold at its finest.",
  },
  {
    id: 28,
    name: "Noir Heart Hoops",
    price: 529,
    image: "images/product28.jpg",
    category: "earrings",
    description:
      "Black enamel filled heart hoops framed in gold — dark romance for every mood.",
  },
  {
    id: 29,
    name: "Spiral Engraved Hoops",
    price: 579,
    image: "images/product29.jpg",
    category: "earrings",
    description:
      "Chunky hoops with a spiralling engraved pattern — hypnotic texture, pure gold glamour.",
  },
  {
    id: 30,
    name: "Bow Hoop Charms",
    price: 549,
    image: "images/product30.jpg",
    category: "earrings",
    description:
      "Gold hoops adorned with a sweet black bow charm — the girliest earrings you will ever own.",
  },
  {
    id: 31,
    name: "Hammered Heart Latch",
    price: 499,
    image: "images/product31.jpg",
    category: "earrings",
    description:
      "Textured heart-shaped latch hoops in warm gold — imperfect beauty at its loveliest.",
  },
  {
    id: 32,
    name: "Silver Ripple Hoops",
    price: 529,
    image: "images/product32.jpg",
    category: "earrings",
    description:
      "Silver-toned ribbed crescent hoops with mirror polish — cool minimalism meets elegance.",
  },
  {
    id: 33,
    name: "Braided Oval Hoops",
    price: 579,
    image: "images/product33.jpg",
    category: "earrings",
    description:
      "Rope-twist oval hoops in warm gold — classic rope detail elevated to art-jewellery.",
  },

  // ── RINGS (34–50) ─────────────────────────────────────────

  {
    id: 34,
    name: "Curb Link Statement Ring",
    price: 699,
    image: "images/product34.jpg",
    category: "rings",
    description:
      "Bold interlinked curb chain ring in polished gold — wear it and the world takes notice.",
  },
  {
    id: 35,
    name: "Teardrop Duo Ring",
    price: 649,
    image: "images/product35.jpg",
    category: "rings",
    description:
      "A sculptural gold ring with two teardrop droplets — asymmetric beauty, always on trend.",
  },
  {
    id: 36,
    name: "Feather Wrap Ring",
    price: 599,
    image: "images/product36.jpg",
    category: "rings",
    description:
      "Two gold feathers wrap around your finger — delicate, free-spirited, wildly beautiful.",
  },
  {
    id: 37,
    name: "Chain Link Band",
    price: 679,
    image: "images/product37.jpg",
    category: "rings",
    description:
      "Open curb chain band in gleaming gold — a jewellery box essential you will reach for daily.",
  },
  {
    id: 38,
    name: "Dome Signet Ring",
    price: 629,
    image: "images/product38.jpg",
    category: "rings",
    description:
      "Smooth domed gold band with a clean open back — sculptural simplicity at its finest.",
  },
  {
    id: 39,
    name: "Sweetheart Charm Ring",
    price: 549,
    image: "images/product39.jpg",
    category: "rings",
    description:
      "A slender gold band with a dangling heart charm — sweet, playful, completely adorable.",
  },
  {
    id: 40,
    name: "Spiral Orbit Ring",
    price: 599,
    image: "images/product40.jpg",
    category: "rings",
    description:
      "Concentric swirl disc on a fine band — a hypnotic gold statement piece for dreamers.",
  },
  {
    id: 41,
    name: "Molten Heart Ring",
    price: 649,
    image: "images/product41.jpg",
    category: "rings",
    description:
      "An open hammered heart on a delicate band — love, imperfect and undeniably beautiful.",
  },
  {
    id: 42,
    name: "Lattice Cage Band",
    price: 729,
    image: "images/product42.jpg",
    category: "rings",
    description:
      "Multi-row lattice band in gold with bar detail — architectural luxury worn on your hand.",
  },
  {
    id: 43,
    name: "Double Layer Chain Ring",
    price: 679,
    image: "images/product43.jpg",
    category: "rings",
    description:
      "Curb chain top layer over a sleek gold band — double the drama, double the charm.",
  },
  {
    id: 44,
    name: "Twisted Knot Ring",
    price: 749,
    image: "images/product44.jpg",
    category: "rings",
    description:
      "An intricate infinity knot sits boldly on your finger — complex beauty, effortless to wear.",
  },
  {
    id: 45,
    name: "Croissant Ripple Ring",
    price: 599,
    image: "images/product45.jpg",
    category: "rings",
    description:
      "Fluted croissant-texture open band — tactile, warm, and impossibly chic.",
  },
  {
    id: 46,
    name: "Crystal Crown Ring",
    price: 799,
    image: "images/product46.jpg",
    category: "rings",
    description:
      "Silver-toned pavé crystal crown silhouette — for the girl who knows she is royalty.",
  },
  {
    id: 47,
    name: "Starlight Cluster Ring",
    price: 749,
    image: "images/product47.jpg",
    category: "rings",
    description:
      "Silver band with alternating crystal and black stone clusters — dark glamour, all day.",
  },
  {
    id: 48,
    name: "Floral Halo Ring",
    price: 699,
    image: "images/product48.jpg",
    category: "rings",
    description:
      "A delicate crystal halo bloom on a silver vine band — garden romance for your finger.",
  },
  {
    id: 49,
    name: "Twin Bloom Ring",
    price: 729,
    image: "images/product49.jpg",
    category: "rings",
    description:
      "Two crystal flower clusters on a crossing silver band — a duet of sparkle and elegance.",
  },
  {
    id: 50,
    name: "Butterfly Crossover Ring",
    price: 749,
    image: "images/product50.jpg",
    category: "rings",
    description:
      "Crystal-paved crossover band with a tiny butterfly accent — ethereal, magical, unmissable.",
  },
  // ── BRACELETS & NEW RINGS (51–73) ─────────────────────────

  {
    id: 51,
    name: "Infinity Crossover Ring",
    price: 649,
    image: "images/product51.jpg",
    category: "rings",
    description:
      "Silver infinity crossover band set with rows of pavé crystals — effortless elegance for every finger.",
  },
  {
    id: 52,
    name: "Halo Orbit Ring",
    price: 699,
    image: "images/product52.jpg",
    category: "rings",
    description:
      "A split silver band crowned with a crystal halo — delicate architecture, maximum sparkle.",
  },
  {
    id: 53,
    name: "Laurel Leaf Ring",
    price: 599,
    image: "images/product53.jpg",
    category: "rings",
    description:
      "Silver vine ring with leaf detailing and crystal accents — nature's finest, cast in metal.",
  },
  {
    id: 54,
    name: "Pavé Heart Ring",
    price: 649,
    image: "images/product54.jpg",
    category: "rings",
    description:
      "A fully pavé crystal heart on a split silver band — pure love, all sparkle, no compromise.",
  },
  {
    id: 55,
    name: "Pearl Clover Bracelet",
    price: 799,
    image: "images/product55.jpg",
    category: "bracelets",
    description:
      "Delicate gold chain with white mother-of-pearl clover charms — dainty luxury for your wrist.",
  },
  {
    id: 56,
    name: "Silk Bow Bracelet",
    price: 749,
    image: "images/product56.jpg",
    category: "bracelets",
    description:
      "A gold herringbone chain tied in a bow — soft, romantic, and impossibly gorgeous.",
  },
  {
    id: 57,
    name: "Crystal Tennis Bracelet",
    price: 849,
    image: "images/product57.jpg",
    category: "bracelets",
    description:
      "Continuous row of sparkling crystals on a silver band — the timeless tennis bracelet, elevated.",
  },
  {
    id: 58,
    name: "Gold Tennis Bracelet",
    price: 899,
    image: "images/product58.jpg",
    category: "bracelets",
    description:
      "Full row of warm gold-set crystals — rich, radiant, and endlessly wearable.",
  },
  {
    id: 59,
    name: "Baguette Sparkle Bracelet",
    price: 949,
    image: "images/product59.jpg",
    category: "bracelets",
    description:
      "Marquise baguette crystals set edge-to-edge in silver — ice-cold glamour on your wrist.",
  },
  {
    id: 60,
    name: "Trio Stacking Set",
    price: 999,
    image: "images/product60.jpg",
    category: "bracelets",
    description:
      "Three layered bracelets — gold beaded, paperclip chain, and crystal — stacked to perfection.",
  },
  {
    id: 61,
    name: "Gold Snake Bracelet",
    price: 699,
    image: "images/product61.jpg",
    category: "bracelets",
    description:
      "Ultra-flat gold herringbone bracelet — liquid metal that moves beautifully with your wrist.",
  },
  {
    id: 62,
    name: "Sunburst Clover Bracelet",
    price: 849,
    image: "images/product62.jpg",
    category: "bracelets",
    description:
      "Gold chain adorned with etched sunburst clover charms — vintage luxury, modern spirit.",
  },
  {
    id: 63,
    name: "Quilted Heart Paperclip",
    price: 799,
    image: "images/product63.jpg",
    category: "bracelets",
    description:
      "Gold paperclip chain with a textured puffed heart charm — cute, chunky, and completely you.",
  },
  {
    id: 64,
    name: "Triple Crystal Stack",
    price: 1099,
    image: "images/product64.jpg",
    category: "bracelets",
    description:
      "Three rows of champagne crystals stacked in gold — full wrist drama, zero effort required.",
  },
  {
    id: 65,
    name: "Noir Clover Bracelet",
    price: 849,
    image: "images/product65.jpg",
    category: "bracelets",
    description:
      "Black enamel four-leaf clovers on a fine gold chain — dark romance meets botanical charm.",
  },
  {
    id: 66,
    name: "Mixed Clover Duo",
    price: 1199,
    image: "images/product66.jpg",
    category: "bracelets",
    description:
      "Two clover bracelets — pearl white and noir black — worn together for a striking contrast.",
  },
  {
    id: 67,
    name: "Clover Trio Bracelet Set",
    price: 1499,
    image: "images/product67.jpg",
    category: "bracelets",
    description:
      "Three clover bracelets in black, gold, and pearl — stack them all for full-arm luxury.",
  },
  {
    id: 68,
    name: "Pastel Clover Layer Set",
    price: 1399,
    image: "images/product68.jpg",
    category: "bracelets",
    description:
      "Mixed clover and pearl bracelets in soft pastels — layered, feminine, and endlessly pretty.",
  },
  {
    id: 69,
    name: "Silver Snake Bracelet",
    price: 699,
    image: "images/product69.jpg",
    category: "bracelets",
    description:
      "Ultra-slim silver herringbone bracelet — cool, sleek, and quietly stunning every single day.",
  },
  {
    id: 70,
    name: "Chrome Snake Bracelet",
    price: 699,
    image: "images/product70.jpg",
    category: "bracelets",
    description:
      "High-shine chrome herringbone bracelet — mirror-finish minimalism at its most luxurious.",
  },
  {
    id: 71,
    name: "Emerald Tennis Bracelet",
    price: 1099,
    image: "images/product71.jpg",
    category: "bracelets",
    description:
      "Rich emerald-green crystals set in gold — a pop of colour that makes every outfit extraordinary.",
  },
  {
    id: 72,
    name: "Baguette Gold Tennis",
    price: 999,
    image: "images/product72.jpg",
    category: "bracelets",
    description:
      "Rectangular baguette crystals in a warm gold setting — bold, architectural, jaw-dropping.",
  },
  {
    id: 73,
    name: "Rose Baguette Bracelet",
    price: 999,
    image: "images/product73.jpg",
    category: "bracelets",
    description:
      "Blush-toned baguette crystals in a rose-gold setting — romantic, warm, and utterly flawless.",
  },
];

// ============================================================
// CATEGORIES — used for filter buttons in the shop
// ============================================================
const categories = ["all", "necklaces", "earrings", "bracelets", "rings"];
