import { ShoppingBasket } from "lucide-react";
import { ProductCard } from "../../components/ui/product/ProductCard";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import { productTabs, products } from "../../constants/productData";
import { Link } from "react-router-dom";

export default function ProductPage() {
  return (
    <div className="container mx-auto">
      <div className="my-3 py-1 px-3 bg-primary text-white text-lg font-semibold">
        Món ăn của chúng tôi
      </div>
      <h2 className="text-xl font-semibold mb-5">Best Seller</h2>
      <div className="w-full grid grid-cols-1 min-[450px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 mb-10">
        {products
          .filter((p) => p.type === "main")
          .map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
      </div>
      <h2 className="text-xl font-semibold mb-5">Thực Đơn Nhà Hàng</h2>
      <div className="w-full">
        <Tabs defaultValue="all">
          <div className="w-full overflow-x-auto">
            <TabsList className="flex w-max gap-2 whitespace-nowrap">
              {productTabs.map((tab) => (
                <TabsTrigger key={tab.value} value={tab.value}>
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          {productTabs.map((tab) => (
            <TabsContent key={tab.value} value={tab.value}>
              <div className="w-full grid grid-cols-1 min-[450px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 ">
                {products
                  .filter((p) => tab.value === "all" || p.type === tab.value)
                  .map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
      <Link to="/gio-hang">
        <div className="fixed bottom-24 right-5 bg-primary text-white rounded-full p-3 shadow-lg flex justify-center items-center">
          <ShoppingBasket size={24} />
        </div>
      </Link>
    </div>
  );
}
