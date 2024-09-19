import ProductCard from "./components/ProductCard";
import useCustomQuery from "./hooks/useCustomQuery";
import { IProduct } from "./interfaces";
import { useEffect } from "react";
import { getProductsList } from "./app/features/products/productsSlice";
import { useAppDispatch } from "./app/store";

const ProductList = () => {
  const dispatch = useAppDispatch();

  const { isLoading, data } = useCustomQuery({
    queryKey: ["productList"],
    url: `/products?limit=12&select=title,price,thumbnail`,
  });

  useEffect(() => {
    dispatch(getProductsList());
  }, [dispatch])

  if (isLoading) return <h3>Loading...</h3>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-2 md:gap-4 p-2 rounded-md">
      {data.products.map((product: IProduct) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
