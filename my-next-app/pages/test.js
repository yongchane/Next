import Image from "next/image";

export default function Test() {
  return (
    <>
      <img
        src="/image/product.jpeg"
        width="400"
        height="400"
        alt="상품 이미지"
      />
      <Image
        src="/image/product.jpeg"
        width="400"
        height="400"
        alt="상품 이미지"
      />
    </>
  );
}
