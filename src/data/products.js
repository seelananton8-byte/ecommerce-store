const products = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 2499,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    description:
      "Comfortable wireless headphones with clear sound and long battery life.",
  },
  {
    id: 2,
    title: "Smart Watch",
    price: 3499,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    description:
      "Modern smartwatch with fitness tracking and smart notifications.",
  },
  {
    id: 3,
    title: "Running Shoes",
    price: 1999,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    description:
      "Lightweight running shoes designed for everyday comfort.",
  },
  {
    id: 4,
    title: "Backpack",
    price: 1299,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    description:
      "Spacious and durable backpack suitable for college and travel.",
  },
  {
    id: 5,
    title: "Coffee Mug",
    price: 499,
    category: "Home",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d",
    description:
      "Simple ceramic coffee mug for everyday use.",
  },
  {
    id: 6,
    title: "Sunglasses",
    price: 999,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
    description:
      "Stylish sunglasses with a modern lightweight frame.",
  },

  {
    id: 7,
    title: "Bluetooth Speaker",
    price: 1799,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1",
    description:
      "Portable Bluetooth speaker with powerful sound and compact design.",
  },
  {
    id: 8,
    title: "Mechanical Keyboard",
    price: 2999,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
    description:
      "Responsive mechanical keyboard designed for work and gaming.",
  },
  {
    id: 9,
    title: "Wireless Mouse",
    price: 899,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db",
    description:
      "Comfortable wireless mouse with precise tracking and smooth control.",
  },
  {
    id: 10,
    title: "Laptop Stand",
    price: 1499,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
    description:
      "Adjustable laptop stand for a comfortable and organized workspace.",
  },
  {
    id: 11,
    title: "USB-C Hub",
    price: 1199,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1625842268584-8f3296236761",
    description:
      "Multi-port USB-C hub for connecting essential devices.",
  },
  {
    id: 12,
    title: "Power Bank",
    price: 1599,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1609592424960-4f5f4b9a8e5b",
    description:
      "Compact power bank for convenient charging while traveling.",
  },
  {
    id: 13,
    title: "Smartphone Tripod",
    price: 799,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    description:
      "Flexible tripod for photography, video calls, and content creation.",
  },
  {
    id: 14,
    title: "LED Desk Lamp",
    price: 899,
    category: "Home",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c",
    description:
      "Modern LED desk lamp providing comfortable lighting for your workspace.",
  },

  {
    id: 15,
    title: "Casual T-Shirt",
    price: 699,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    description:
      "Comfortable casual t-shirt made for everyday wear.",
  },
  {
    id: 16,
    title: "Denim Jacket",
    price: 1899,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5",
    description:
      "Classic denim jacket with a versatile everyday style.",
  },
  {
    id: 17,
    title: "Hoodie",
    price: 1499,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7",
    description:
      "Soft and comfortable hoodie suitable for casual occasions.",
  },
  {
    id: 18,
    title: "Casual Shirt",
    price: 999,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab",
    description:
      "Smart casual shirt designed for comfortable everyday styling.",
  },
  {
    id: 19,
    title: "Sneakers",
    price: 2299,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772",
    description:
      "Modern sneakers combining comfort and casual style.",
  },
  {
    id: 20,
    title: "Wrist Watch",
    price: 2499,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d",
    description:
      "Elegant wrist watch with a clean and timeless design.",
  },

  {
    id: 21,
    title: "Leather Wallet",
    price: 799,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93",
    description:
      "Compact wallet with multiple slots for cards and cash.",
  },
  {
    id: 22,
    title: "Travel Bag",
    price: 1799,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    description:
      "Durable travel bag with spacious storage for short trips.",
  },
  {
    id: 23,
    title: "Cap",
    price: 499,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1521369909029-2afed882baee",
    description:
      "Classic casual cap with a comfortable adjustable fit.",
  },
  {
    id: 24,
    title: "Leather Belt",
    price: 699,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc",
    description:
      "Classic belt designed for everyday formal and casual outfits.",
  },
  {
    id: 25,
    title: "Travel Backpack",
    price: 1999,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3",
    description:
      "Practical travel backpack with comfortable straps and useful storage.",
  },

  {
    id: 26,
    title: "Water Bottle",
    price: 599,
    category: "Sports",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8",
    description:
      "Reusable water bottle designed for workouts and everyday use.",
  },
  {
    id: 27,
    title: "Yoga Mat",
    price: 999,
    category: "Sports",
    image: "https://images.unsplash.com/photo-1592432678016-e910b452f9a2",
    description:
      "Comfortable exercise mat suitable for yoga and home workouts.",
  },
  {
    id: 28,
    title: "Football",
    price: 899,
    category: "Sports",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55",
    description:
      "Durable football designed for recreational outdoor play.",
  },
  {
    id: 29,
    title: "Tennis Racket",
    price: 1899,
    category: "Sports",
    image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0",
    description:
      "Lightweight tennis racket suitable for practice and recreational games.",
  },
  {
    id: 30,
    title: "Gym Gloves",
    price: 699,
    category: "Sports",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e",
    description:
      "Comfortable workout gloves providing grip during training sessions.",
  },

  {
    id: 31,
    title: "Ceramic Vase",
    price: 899,
    category: "Home",
    image: "https://images.unsplash.com/photo-1581783898377-1c85bf937427",
    description:
      "Decorative ceramic vase designed to complement modern interiors.",
  },
  {
    id: 32,
    title: "Table Clock",
    price: 699,
    category: "Home",
    image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c",
    description:
      "Minimal table clock with a clean and modern appearance.",
  },
  {
    id: 33,
    title: "Cushion",
    price: 599,
    category: "Home",
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2",
    description:
      "Soft decorative cushion for adding comfort to your living space.",
  },
  {
    id: 34,
    title: "Desk Organizer",
    price: 449,
    category: "Home",
    image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85",
    description:
      "Compact organizer for keeping your desk neat and tidy.",
  },
  {
    id: 35,
    title: "Plant Pot",
    price: 399,
    category: "Home",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411",
    description:
      "Simple decorative plant pot suitable for indoor plants.",
  },

  {
    id: 36,
    title: "Notebook",
    price: 199,
    category: "Stationery",
    image: "https://images.unsplash.com/photo-1531346680769-a1d79b57de5b",
    description:
      "Premium notebook for notes, planning, and everyday writing.",
  },
  {
    id: 37,
    title: "Ball Pen Set",
    price: 149,
    category: "Stationery",
    image: "https://images.unsplash.com/photo-1585336261022-680e295ce2a5",
    description:
      "Smooth-writing ball pens suitable for school, college, and office use.",
  },
  {
    id: 38,
    title: "Desk Calendar",
    price: 299,
    category: "Stationery",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe",
    description:
      "Simple desk calendar for organizing your daily schedule.",
  },
  {
    id: 39,
    title: "Sticky Notes",
    price: 129,
    category: "Stationery",
    image: "https://images.unsplash.com/photo-1586282391129-76a6df230234",
    description:
      "Colorful sticky notes for reminders, ideas, and quick notes.",
  },
  {
    id: 40,
    title: "Pencil Case",
    price: 249,
    category: "Stationery",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db",
    description:
      "Compact pencil case for organizing stationery essentials.",
  },

  {
    id: 41,
    title: "Face Wash",
    price: 349,
    category: "Beauty",
    image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8",
    description:
      "Gentle daily face wash designed for a fresh and clean feel.",
  },
  {
    id: 42,
    title: "Body Lotion",
    price: 449,
    category: "Beauty",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b",
    description:
      "Lightweight body lotion for everyday skincare.",
  },
  {
    id: 43,
    title: "Perfume",
    price: 1299,
    category: "Beauty",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601",
    description:
      "Elegant fragrance with a fresh and pleasant everyday scent.",
  },
  {
    id: 44,
    title: "Hair Brush",
    price: 299,
    category: "Beauty",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e",
    description:
      "Comfortable hair brush designed for smooth everyday grooming.",
  },
  {
    id: 45,
    title: "Makeup Bag",
    price: 599,
    category: "Beauty",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348",
    description:
      "Compact makeup bag with enough space for daily essentials.",
  },

  {
    id: 46,
    title: "Travel Pillow",
    price: 799,
    category: "Travel",
    image: "https://images.unsplash.com/photo-1519947486511-46149fa0a254",
    description:
      "Soft travel pillow designed for comfortable journeys.",
  },
  {
    id: 47,
    title: "Luggage Suitcase",
    price: 2999,
    category: "Travel",
    image: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87",
    description:
      "Durable suitcase with spacious storage for travel.",
  },
  {
    id: 48,
    title: "Travel Adapter",
    price: 899,
    category: "Travel",
    image: "https://images.unsplash.com/photo-1557180295-76eee20ae8aa",
    description:
      "Compact universal travel adapter for convenient charging abroad.",
  },
  {
    id: 49,
    title: "Keychain",
    price: 199,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    description:
      "Simple and stylish keychain for everyday use.",
  },
  {
    id: 50,
    title: "Mini Desk Fan",
    price: 699,
    category: "Home",
    image: "https://images.unsplash.com/photo-1564510182796-4e8f4c8f5f7f",
    description:
      "Compact desk fan providing a comfortable breeze while working.",
  },
];

export default products;