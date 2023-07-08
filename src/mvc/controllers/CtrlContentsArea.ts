import { Ease, type IChar, type Player } from "textalive-app-api";

/**
 * コンテンツエリア制御コントーラー.
 */
export default class ContentsAreaController {
  private charObj: IChar | undefined = undefined;
  constructor() {
    // console.log("ContentsAreaController.constructor");
  }

  /**
   * 歌詞の表示と演出の切り替え.
   *
   * 楽曲再生時に呼ばれる。
   */
  ctrlLyricsAndEmotion(
    position: number,
    player?: Player
  ): IChar | undefined {
    // キャラクターが来たら、歌詞の表示を開始する
    let current = this.charObj || player?.video?.firstChar;
    while (current && current.startTime < position) {
      if (this.charObj !== current) {
        this.charObj = current;
        return current;
      }
      current = current.next;
    }
    return undefined;
  }

  /**
   * ビートの位置から、 0.0 ～ 100.0 の値を算出して返却する。
   *
   * @param player TextAliveのプレイヤー
   * @param position 現在の楽曲演奏位置
   * @returns 0.0 ～ 100.0 の数値
   */
  getBeatRacio(player?: Player, position?: number) {
    const pos = position ?? 1000;
    if (player === undefined) {
      return 0;
    }
    const beat = player.findBeat(pos);
    const racioBeat = Math.ceil(
      Ease.circIn(beat?.progress(pos) ?? 0) * 1000
    ) / 10;
    // console.log(`racioBeat: ${racioBeat}`);
    return racioBeat;
  }

  /**
   * 動き調整用のパラメータ値、纏めて計算用.
   *
   * @param player TextAliveのプレイヤー
   * @param position 現在の楽曲演奏位置
   * @returns 各種計算後の値
   */
  getCalculationPerformanceValue(player?: Player, position?: number) {
    const racioBeat = this.getBeatRacio(
      player,
      position
    ) ?? 2;
    // 元の値を使うと大きすぎる箇所の調整用 (0.0 ～ 6.0)
    const racioBeatMin = racioBeat / 100 * 6;
    // 再生されるまで、 beat が取得できないので、オブジェクトの初期表示用の判定
    const isPlaying = racioBeat != 0 ?? false;
    // 移動するオブジェクトのスピード調整
    const speed = isPlaying ? racioBeat : 5;
    // ライティングはあまり激しすぎると目がちかちかするので、抑え気味に
    let tmpRacio = (isPlaying ? Math.ceil(racioBeat / 10) : 0) + 12.5;
    tmpRacio = tmpRacio % 2 === 0 ? tmpRacio : tmpRacio + 1;
    const lightPower = tmpRacio / 10;
    // ボックスの調整用
    const time = (isPlaying ? (position ?? 0) / 1000 : 0) * 1;
    const speedY = (isPlaying ? racioBeatMin : 0) / 1000;
    return { racioBeatMin, speed, lightPower, time, speedY };
  }

}
