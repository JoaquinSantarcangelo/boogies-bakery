import { AppProps } from "next/app";
import "../sass/index.sass";
import "../sass/Navbar.sass";
import "../sass/Home.sass";
import "../sass/Productos.sass";
import "../sass/Nosotros.sass";
import "../sass/Comprar.sass";
import "../sass/Contacto.sass";


function App({ Component, pageProps }) {
  return (
    <div suppressHydrationWarning>
      {typeof window === "undefined" ? null : <Component {...pageProps} />}
    </div>
  );
}

export default App;
