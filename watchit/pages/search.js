import { useRouter } from "next/navigation";

export default function Search() {
  const router = useRouter();
  const { q } = router.query;
  return (
    <div>
      <h1>watchit</h1>
      <h2>{q} 검색 결과</h2>
    </div>
  );
}
