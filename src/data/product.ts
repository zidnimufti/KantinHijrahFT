import { formatRupiah } from "@/components/rupiah";

// Interface for a single menu item
export interface MenuItem {
  id: number;
  name: string;
  price: string;
  category: "Makanan" | "Minuman" | "Kopi" | "Shake And Blanded" | "Non Coffee";
  inStock: boolean;
  text?: string; // Optional text for ordering
}

// Interface for a Canteen
export interface Canteen {
  id: number;
  name: string;
  image: string;
  isNew?: boolean;
  menu: MenuItem[];
}

// Array of all canteens
export const canteens: Canteen[] = [
  {
    id: 1,
    name: "K@bel Lamongan",
    image: "/img/lamongan.jpg",
    isNew: false,
    menu: [
      { id: 101, name: "Kopi Susu Aren", price: formatRupiah(13000), category: "Kopi", inStock: true, text: "Saya ingin membeli Kopi Susu Aren dari Kantin Bu Yum" },
      { id: 102, name: "Kopi Taro", price: formatRupiah(15000), category: "Kopi", inStock: true, text: "Saya ingin membeli Kopi Taro dari Kantin Bu Yum" },
      { id: 103, name: "Americano", price: formatRupiah(10000), category: "Kopi", inStock: true, text: "Saya ingin membeli Americano dari Kantin Bu Yum" },
      { id: 104, name: "Kopi Vannila", price: formatRupiah(15000), category: "Kopi", inStock: true, text: "Saya ingin membeli Kopi Vannila dari Kantin Bu Yum" },
      { id: 105, name: "Nasi Goreng Spesial", price: formatRupiah(25000), category: "Makanan", inStock: true, text: "Saya ingin membeli Nasi Goreng Spesial dari Kantin Bu Yum" },
      { id: 106, name: "Mie Ayam Bakso", price: formatRupiah(20000), category: "Makanan", inStock: true, text: "Saya ingin membeli Mie Ayam Bakso dari Kantin Bu Yum" },
      { id: 107, name: "Soto Ayam", price: formatRupiah(18000), category: "Makanan", inStock: false, text: "Saya ingin membeli Soto Ayam dari Kantin Bu Yum" },
    ],
  },
  {
    id: 2,
    name: "K@bel Pak Udin",
    image: "/img/udin.jpg",
    isNew: false,
    menu: [
      { id: 201, name: "Manggo Latte", price: formatRupiah(10000), category: "Shake And Blanded", inStock: true, text: "Saya ingin membeli Manggo Latte dari Kabel Pak Udin" },
      { id: 202, name: "Red Velvet Latte", price: formatRupiah(10000), category: "Shake And Blanded", inStock: true, text: "Saya ingin membeli Red Velvet Latte dari Kabel Pak Udin" },
      { id: 203, name: "Taro Latte", price: formatRupiah(10000), category: "Shake And Blanded", inStock: true, text: "Saya ingin membeli Taro Latte dari Kabel Pak Udin" },
      { id: 204, name: "Matcha Latte", price: formatRupiah(10000), category: "Shake And Blanded", inStock: true, text: "Saya ingin membeli Matcha Latte dari Kabel Pak Udin" },
    ],
  },
  {
    id: 3,
    name: '"Si" Bungsu',
    image: "/img/bungsu.jpg",
    isNew: false,
    menu: [
        { id: 301, name: "Aren Milk Magic", price: formatRupiah(8000), category: "Non Coffee", inStock: true, text: "Saya ingin membeli Aren Milk Magic dari Warung Teh Nusantara" },
        { id: 302, name: "Vanilla Milk", price: formatRupiah(8000), category: "Non Coffee", inStock: false, text: "Saya ingin membeli Vanilla Milk dari Warung Teh Nusantara" },
        { id: 303, name: "Lychee Latte", price: formatRupiah(10000), category: "Minuman", inStock: true, text: "Saya ingin membeli Lychee Latte dari Warung Teh Nusantara" },
        { id: 304, name: "Lychee Tea", price: formatRupiah(8000), category: "Minuman", inStock: true, text: "Saya ingin membeli Lychee Tea dari Warung Teh Nusantara" },
    ]
  }
];
