/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/products/:id",
        // 리다이렉트 처리를 할 주소
        //:id는 param의 이름이다
        destination: "/items/:id",
        // 이동시킬 주소
        permanent: false,
        //Reponse Satus Code를 정함
        //웹 브라우저에게 주소가 바뀌었다는 사실을 저장하게 하려면 true 아니면 false
      },
    ];
  },
};

//redirects라는 프로퍼티로 async 함수를 지정하는 문법
//redirects 함수는 return 부분의 객체를 배열로 리턴하는 함수
export default nextConfig;
