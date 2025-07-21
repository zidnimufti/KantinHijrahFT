import React from "react";
import { Pagination } from "@heroui/react";
// Anda perlu membuat komponen CanteenGrid yang baru untuk menampilkan daftar kantin
import { CanteenGrid } from "../components/product-grid"; 
// Mengimpor data 'canteens' yang baru
import { canteens } from "../data/product";
import { Routes, Route } from "react-router-dom";
import DefaultLayout from "@/layouts/default";

export default function ProductPage() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 12; // Jumlah item per halaman
  
  // Menggunakan 'canteens' bukan 'products'
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCanteens = canteens.slice(startIndex, endIndex);
  const totalPages = Math.ceil(canteens.length / itemsPerPage);
  
  return (
    <DefaultLayout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Struktur Routes/Route ini mungkin tidak diperlukan jika halaman ini 
            sudah menjadi bagian dari routing di App.tsx. Saya akan tetap mempertahankannya
            untuk menjaga struktur asli Anda. */}
        <Routes>
          <Route 
            path=""
            element={
              <>
                {/* Menggunakan CanteenGrid dan meneruskan data currentCanteens */}
                <CanteenGrid canteens={currentCanteens} />
                
                {/* Hanya tampilkan pagination jika lebih dari satu halaman */}
                {totalPages > 1 && (
                  <div className="flex justify-center mt-8">
                    <Pagination
                      total={totalPages}
                      initialPage={1}
                      page={currentPage}
                      onChange={setCurrentPage}
                      showControls
                    />
                  </div>
                )}
              </>
            }
          />
        </Routes>
      </div>
    </DefaultLayout>
  );
}
