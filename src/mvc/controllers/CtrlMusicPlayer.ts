import { type Player } from "textalive-app-api";
import { HtmlAttrIds } from "~/defines/constants/htmlAttr";
import { initSelect, songleInfoList, songleInfoNeonLight } from "~/defines/constants/musicList";
import type SongleInfoDto from "~/mvc/dto/SongleInfoDto";
import { getSongData } from "~/mvc/services/SrvMusicPlayer";

/**
 * 音楽制御コントーラー.
 */
export default class MusicPlayerController {
  private player: Player;
  private codeSelect = initSelect;
  constructor(player: Player) {
    this.player = player;
  }

  /**
   * 曲の読み込み.
   *
   * 初期ロードと楽曲セレクターから呼ばれる。
   */
  async createSongData(songleId: number): Promise<Player> {
    this.codeSelect = songleId;
    const songleInfo: SongleInfoDto = songleInfoList[this.codeSelect] ?? songleInfoNeonLight;
    this.player = await getSongData(this.player, songleInfo);
    return this.player;
  }

  /**
   * 画面の表示エレメントの初期化.
   *
   * 初期表示ロード完了時・ビデオ再生準備完了時・停止時に呼ばれる。
   */
  initElements(): void {
    const isLoaded = this.player.data.song?.name;
    // クラス外に定義すると、画面描画前に呼ばれてエラーになるので、メソッド内で定義
    const loadingInfo = document.getElementById(HtmlAttrIds.MP_LOADING_INFO) as HTMLElement;
    loadingInfo.className = isLoaded ? "nl_finish" : "nl_loading";
    loadingInfo.textContent = isLoaded ? "読込完了" : "読込失敗";
    const songNameSpan = document.getElementById(HtmlAttrIds.MP_SONG_NAME) as HTMLElement;
    songNameSpan.textContent = isLoaded ?? "";
  }

  /**
   * 楽曲の再生
   */
  playMusic(): void {
    // シークさせるとなんか停止時におかしくなるので、一旦開発が進むまでは楽曲の方を変える
    // let initPositon = 0;
    // initPositon = 0; // デバッグ行をコメントアウトすると、letをconstに変えろとエラーになるので、その対策
    // initPositon = 11600; // デバッグ用
    this.player.video
      && this.player.requestMediaSeek(0)
      // && this.player.requestMediaSeek(initPositon)
      && this.player.requestPlay();
  }

  /**
   * 楽曲の停止
   */
  stopMusic(): void {
    this.player.video
      && this.player.requestStop();
  }

}
