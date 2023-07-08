import Head from "next/head";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import ReadSongle from "~/compornents/templates/MusicPlayer";
import ThreeJsArea from "~/compornents/templates/ThreeJsArea";
import { HtmlAttrIds } from "~/defines/constants/htmlAttr";
import TextAliveController from "~/mvc/controllers/CtrlTextAlive";
import createStore from "~/stores/position/store";

let textAlive: TextAliveController;

/**
 * メインのHTMLコンテンツの制御
 *
 * @returns メインのHTMLコンテンツ
 */
export default function Home() {
  const [loadTextAlive, setTextAlive] = useState(textAlive);

  useEffect(() => {
    const textAlive = new TextAliveController();
    setTextAlive(textAlive);
  }, []);

  return (
    <Provider store={createStore()}>
      <Head>
        <title>ベースパッケージ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main_bg">
        <ReadSongle textAlive={loadTextAlive} />
        <div id={HtmlAttrIds.TEXT_ALIVE_MEDIA}></div>
        <ThreeJsArea
          textAlive={loadTextAlive}
        />
      </main>
    </Provider>
  );
}
