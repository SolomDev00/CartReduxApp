import { useGetProductsListQuery } from "./app/features/products/productsSlice";
import ProductCard from "./components/ProductCard";
import { IProduct } from "./interfaces";


const ProductList = () => {

  const { isLoading, data, error } = useGetProductsListQuery([]);

  if (isLoading) return <h3>Loading...</h3>;

  if (error) return <h3>Error ya Heart.</h3>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-2 md:gap-4 p-2 rounded-md">
      {data.products.map((product: IProduct) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
