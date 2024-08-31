import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return;
  <>
    <Header />
    <Container page>
      <Component {...pageProps} />;
    </Container>
  </>;
}
