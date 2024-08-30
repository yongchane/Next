import { useRouter } from "next/router";
import { useState } from "react";

export default function SearchForm({ initialValue = "" }) {
  //initialValue를 통해 초깃값 설정
  const router = useRouter();
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // form 태그의 기본 동작은 쿼리스트링이랑 함께 페이지를 이동하는데
    // Next.js의 라우터를 사용해서 페이지를 이동할 거기 때문에 preventDefault로 동작을 막아줌
    if (!value) {
      router.push(`/`);
      return;
    }
    router.push(`/search?q=${value}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="q" value={value} onChange={handleChange} />
      <button>검색</button>
    </form>
  );
}
