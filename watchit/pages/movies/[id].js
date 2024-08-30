import { useRouter } from "next/navigation";

export default function Movies() {
  const router = useRouter();
  const { id } = router.query;
  return <div>Movies {id}페이지</div>;
}
