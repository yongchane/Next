import Container from "@/components/Container";
import Header from "@/components/Header";
import "@/styles/global.css";

export default function App({ Component, pageProps }) {
  return;
  <>
    <Header />
    <Container>
      <Component {...pageProps} />;
    </Container>
  </>;
}
//Component 해당 prop은 쉽게 말해서 Next.js 페이지
