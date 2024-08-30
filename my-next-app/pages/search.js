import { useRouter } from "next/router";

//쿼리 스트링 가져오기
export default function Search() {
  const router = useRouter();
  const { q } = router.query;
  return (
    <div>
      <h1>search 페이지</h1>
      <h2>{q} 검색 결과</h2>
    </div>
  );
}
