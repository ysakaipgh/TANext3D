import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "~/styles/globals.css";
import { type AppType } from "next/dist/shared/lib/utils";

// Font Awesome のCSSが遅延して読み込まれ、一度大きく表示されるのを防ぐ対策
config.autoAddCss = false;

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
