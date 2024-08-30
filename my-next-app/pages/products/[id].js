import { useRouter } from "next/router";

//param 값 가져오기
export default function Product() {
  const router = useRouter();
  const { id } = router.query;
  // 해당 id 는 파일 이름에 해당하는 id와 동일
  return <div>Product {id}페이지</div>;
}
