declare interface SongleInfoInterface {
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
}

export default SongleInfoInterface;
