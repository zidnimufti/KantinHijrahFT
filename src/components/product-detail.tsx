import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Card, CardBody, Chip, Divider } from "@heroui/react";
import { Tabs, Tab } from "@heroui/react";
import { Icon } from "@iconify/react";
import { Canteen } from "../data/product"; // Updated import to use Canteen interface
import DefaultLayout from "@/layouts/default";

interface CanteenDetailProps {
  canteens: Canteen[];
}

export const CanteenDetail: React.FC<CanteenDetailProps> = ({ canteens }) => {
  const { id } = useParams() as { id: string };
  const navigate = useNavigate();
  const canteenId = parseInt(id);

  // Find the currently viewed canteen
  const canteen = canteens.find(c => c.id === canteenId);

  // Filter the menu of the current canteen
  const makanan = canteen ? canteen.menu.filter(item => item.category === "Makanan") : [];
  const minuman = canteen ? canteen.menu.filter(item => item.category !== "Makanan") : [];

  // If canteen is not found, show a message
  if (!canteen) {
    return (
      <DefaultLayout>
        <div>
          <Button 
            variant="flat" 
            startContent={<Icon icon="lucide:arrow-left" />}
            className="mb-6"
            onPress={() => navigate("/produk")} // This route might need to be updated to a canteens list page
          >
            Kembali ke Daftar Kantin
          </Button>
          <Card className="shadow-md">
            <CardBody>
              <div className="text-center text-default-600 py-12">
                Kantin tidak ditemukan.
              </div>
            </CardBody>
          </Card>
        </div>
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout>
      <div>
        <Button 
          variant="flat" 
          startContent={<Icon icon="lucide:arrow-left" />}
          className="mb-6"
          onPress={() => navigate("/kantin")} // Update this route as needed
        >
          Kembali ke Daftar Kantin
        </Button>
        
        <Card className="shadow-md">
          <CardBody>
            <div className="flex flex-col items-center text-center p-4">

              <div className="relative mb-4">
                <img 
                  src={canteen.image} 
                  alt={canteen.name} 
                  className="w-full h-full rounded-lg object-cover shadow-lg"
                />
                {canteen.isNew && (
                  <Chip 
                    color="primary" 
                    variant="solid" 
                    className="absolute top-2 left-2"
                  >
                    Baru
                  </Chip>
                )}
              </div>

              <h1 className="text-3xl font-bold text-default-800">{canteen.name}</h1>
              

              <Divider className="my-4 w-full" />

              {/* Tabs for Makanan and Minuman with dynamic content from the canteen's menu */}
              <div className="w-full max-w-lg">
                <h2 className="text-xl font-semibold text-default-700 mb-4">Menu</h2>
                <Tabs aria-label="Menu Tabs" color="primary">
                  <Tab key="makanan" title={`Makanan (${makanan.length})`}>
                    <Card className="bg-default-50">
                      <CardBody>
                        {makanan.length > 0 ? (
                          <ul className="space-y-3 p-2 text-left">
                            {makanan.map((item) => (
                              <li key={item.id} className="flex justify-between items-center text-sm">
                                <span className="text-default-700">{item.name}</span>
                                <span className="font-semibold text-default-800">{item.price}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <div className="p-4 text-center">
                            <p className="text-sm text-default-600">Saat ini belum ada daftar makanan yang tersedia.</p>
                          </div>
                        )}
                      </CardBody>
                    </Card>  
                  </Tab>
                  <Tab key="minuman" title={`Minuman (${minuman.length})`}>
                    <Card className="bg-default-50">
                      <CardBody>
                        {minuman.length > 0 ? (
                          <ul className="space-y-3 p-2 text-left">
                            {minuman.map((item) => (
                              <li key={item.id} className="flex justify-between items-center text-sm">
                                <span className="text-default-700">{item.name}</span>
                                <span className="font-semibold text-default-800">{item.price}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <div className="p-4 text-center">
                            <p className="text-sm text-default-600">Saat ini belum ada daftar minuman yang tersedia.</p>
                          </div>
                        )}
                      </CardBody>
                    </Card>  
                  </Tab>
                </Tabs>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </DefaultLayout>
  );
};
