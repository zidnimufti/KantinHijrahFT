import React from "react";
import { Card, CardBody, CardFooter, Chip } from "@heroui/react";
import { Canteen } from "../data/product"; // Mengimpor tipe data Canteen
import { useNavigate } from "react-router-dom";

// Mengubah nama interface props
interface CanteenGridProps {
  canteens: Canteen[];
}

// Mengubah nama komponen menjadi CanteenGrid
export const CanteenGrid: React.FC<CanteenGridProps> = ({ canteens }) => {
  const navigate = useNavigate();

  // Mengubah handler untuk navigasi ke halaman detail kantin
  const handleCanteenClick = (canteenId: number) => {
    navigate(`/kantin/${canteenId}`); // Menggunakan path yang sudah kita perbarui
  };
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {/* Melakukan map pada data canteens */}
      {canteens.map((canteen) => (
        <Card 
          key={canteen.id} 
          className="border border-default-200"
          isHoverable
          isPressable
          onPress={() => handleCanteenClick(canteen.id)}
        >
          <CardBody className="p-0 overflow-hidden h-48">
            <div className="relative w-full h-full">
              <img
                src={canteen.image}
                alt={canteen.name}
                className="w-full h-full object-cover"
              />
              {canteen.isNew && (
                <Chip 
                  color="primary" 
                  variant="solid" 
                  className="absolute top-3 left-3"
                >
                  Baru
                </Chip>
              )}
            </div>
          </CardBody>
          <CardFooter className="flex flex-col items-start gap-2 p-4">
            <h3 className="font-semibold text-md">{canteen.name}</h3>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
