import type { Player } from "textalive-app-api";
import type MusicPlayerController from "~/mvc/controllers/CtrlMusicPlayer";
import type TextAliveController from "~/mvc/controllers/CtrlTextAlive";
import type SongleInfoDto from "~/mvc/dto/SongleInfoDto";

/**
 * TextAliveの楽曲生成処理
 *
 * @param player TextAliveのプレイヤー
 * @param songleInfo 楽曲定義DTO
 * @returns 
 */
export const getSongData = async (player: Player, songleInfo: SongleInfoDto) => {
  try {
    await player.createFromSongUrl(
      songleInfo.getSongleUrl(), {
        video: {
          beatId: songleInfo.beatId,
          chordId: songleInfo.chordId,
          repetitiveSegmentId: songleInfo.repetitiveSegmentId,
          lyricId: songleInfo.lyricId,
          lyricDiffId: songleInfo.lyricDiffId
        },
      });
    return player;
  } catch (e) {
    return player;
  }
};

/**
 * 曲データの読み込み
 *
 * @param param0 楽曲生成に必要な情報
 * @returns JSX.Element
 */
export function loadMusic(
  textAlive: TextAliveController,
  selectId?: number
) {
  let _player = textAlive?.getPlayer();
  if (!_player || !textAlive?.getMpCtrl()) return;
  const syncData = async () =>
    await textAlive?.getMpCtrl()?.createSongData(selectId ?? 3).then((player) => player)
      .then((p: Player) => {
        _player = p;
      });
  syncData().catch((e) => { console.log(e); });

  if (!_player.data.song) return;
  return;
}

/**
 * 楽曲を再生する
 *
 * @param mpCtrl MusicPlayerController
 */
export function play(mpCtrl: MusicPlayerController | undefined) {
  if (mpCtrl) {
    mpCtrl.playMusic();
  }
}

/**
 * 楽曲を停止する
 *
 * @param mpCtrl MusicPlayerController
 */
export function stop(mpCtrl: MusicPlayerController | undefined) {
  if (mpCtrl) {
    mpCtrl.stopMusic();
  }
}
