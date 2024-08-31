import ProductList from "@/components/ProductList";
import SearchForm from "@/components/SearchForm";
import axios from "@/lib/axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

//쿼리 스트링 가져오기
export default function Search() {
  const router = useRouter();
  const { q } = router.query;
  const [products, setProducts] = useState([]);

  async function getProducts(query) {
    const res = await axios.get(`/products/?q=${query}`);
    const nextProducts = res.data.results;
    setProducts(nextProducts);
  }
  useEffect(() => {
    getProducts(q);
  }, [q]);
  return (
    <div>
      <h1>search 페이지</h1>
      <SearchForm initialValue={q} />
      <h2>{q} 검색 결과</h2>
      <ProductList products={products} />
    </div>
  );
}
