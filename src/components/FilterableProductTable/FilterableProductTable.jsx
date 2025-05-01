import SearchBar from "./SearchBar/SearchBar";
import ProductTable from "./ProductTable/ProductTable";

export default function FilterableProductTable({ products }) {
  return (
    <>
      <SearchBar />
      <ProductTable products={products} />
    </>
  );
}
