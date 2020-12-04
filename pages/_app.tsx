import "../styles/index.css";
import { AppProps } from "next/app";

//TODO _app.tsxの設定
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
