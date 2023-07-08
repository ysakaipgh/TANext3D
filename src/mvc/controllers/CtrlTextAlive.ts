import { Player } from "textalive-app-api";
import { env } from "~/env.mjs";
import { HtmlAttrIds } from "~/defines/constants/htmlAttr";
import ContentsAreaController from "~/mvc/controllers/CtrlContentsArea";
import MusicPlayerController from "~/mvc/controllers/CtrlMusicPlayer";

/**
 * TextAliveのPlayer制御コントーラー.
 */
export default class TextAliveController {
  private player: Player | undefined = undefined;
  private mpCtrl: MusicPlayerController | undefined = undefined;
  private caCtrl: ContentsAreaController;
  constructor() {
    this.player = new Player({
      app: { token: env.NEXT_PUBLIC_TEXT_ALIVE_API_TOKEN },
      mediaElement: document.getElementById(HtmlAttrIds.TEXT_ALIVE_MEDIA) as HTMLElement,
    });
    this.mpCtrl = new MusicPlayerController(this.player);
    this.caCtrl = new ContentsAreaController();
  }

  // ================================================================================
  // バインド用関数

  /**
   * アプリの準備
   *
   * @param app
   */
  onTimerReady() {
    // ミュージックプレイヤーの初期化
    this.mpCtrl?.initElements();
  }

  /**
   * 再生時に不要な物を制御
   */
  onPlay() {
    this.initState();
  }

  /**
   * 再生が一時停止したら表示をリセット
   */
  onPause() {
    this.initState();
  }

  /**
   * 再生が停止したら表示をリセット
   */
  onStop() {
    this.initState();
  }

  // ================================================================================
  // 独自関数

  /**
   * 初期化など、初期表示用
   */
  init(
    setPositionOnUpdate: (
      position: number
    ) => void,
    resetPosition: () => void
  ): TextAliveController {
    this.player?.addListener({
      onTimerReady: () => this.onTimerReady(),
      onTimeUpdate: (
        position: number
      ) => setPositionOnUpdate(
        position
      ),
      onPlay: () => this.onPlay(),
      onPause: () => {
        resetPosition();
        this.onPause();
      },
      onStop: () => {
        resetPosition();
        this.onStop();
      },
    });
    return this;
  }

  /**
   * 画面の表示リセットを行う
   */
  initState() {
    // console.log("initState");
  }

  /**
   * TextAliveのプレイヤーを取得
   *
   * @returns TextAliveのプレイヤー
   */
  getPlayer(): Player | undefined {
    return this.player;
  }

  /**
   * 音楽制御コントーラーを取得
   *
   * @returns 音楽制御コントーラー
   */
  getMpCtrl(): MusicPlayerController | undefined {
    return this.mpCtrl;
  }

  /**
   * コンテンツエリア制御コントーラーを取得
   *
   * @returns コンテンツエリア制御コントーラー
   */
  getCaCtrl(): ContentsAreaController {
    return this.caCtrl;
  }

}
