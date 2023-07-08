import type SongleInfoInterface from "~/defines/interfaces/IFsongleInfo";

export default class SongleInfoDto implements SongleInfoInterface {
  songleId: string;
  labelName: string;
  labelShortName?: string;
  songPermaLink: string;
  musicHistory: number;
  beatId?: number;
  chordId?: number;
  repetitiveSegmentId?: number;
  lyricHistory: string;
  lyricId?: number;
  lyricDiffId?: number;
  constructor(
    songleId: string,
    labelName: string,
    songPermaLink: string,
    musicHistory: number,
    lyricHistory: string,
  ) {
    this.songleId = songleId;
    this.labelName = labelName;
    this.songPermaLink = songPermaLink;
    this.musicHistory = musicHistory;
    this.lyricHistory = lyricHistory;
  }

  getSongleUrl(): string {
    return `https://piapro.jp/t/${this.songPermaLink}`;
  }

  getMusicHistoryUrl(): string {
    return `https://songle.jp/songs/${this.musicHistory}/history`;
  }

  getLyricHistoryUrl(): string {
    return `https://textalive.jp/lyrics/piapro.jp%2Ft%2F${this.lyricHistory}`;
  }
}
