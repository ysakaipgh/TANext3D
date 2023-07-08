import SongleInfoDto from "~/mvc/dto/SongleInfoDto";

// king妃jack躍
const songleInfoKinkijackyaku = new SongleInfoDto(
  "aed56ef19",
  "king妃jack躍 feat.初音ミク",
  "ucgN/20230110005414",
  2427948,
  "ucgN%2F20230110005414",
);
songleInfoKinkijackyaku.labelShortName = "king妃jack躍";
songleInfoKinkijackyaku.beatId = 4267297;
songleInfoKinkijackyaku.chordId = 2405019;
songleInfoKinkijackyaku.repetitiveSegmentId = 2475577;
songleInfoKinkijackyaku.lyricId = 56092;
songleInfoKinkijackyaku.lyricDiffId = 9636;
// 生きること
const songleInfoIkirukoto = new SongleInfoDto(
  "a5fb8e017",
  "生きること / nogumi feat. 初音ミク",
  "fnhJ/20230131212038",
  2427949,
  "fnhJ%2F20230131212038",
);
songleInfoIkirukoto.labelShortName = "生きること";
songleInfoIkirukoto.beatId = 4267300;
songleInfoIkirukoto.chordId = 2405033;
songleInfoIkirukoto.repetitiveSegmentId = 2475606;
songleInfoIkirukoto.lyricId = 56131;
songleInfoIkirukoto.lyricDiffId = 9638;
// 唱明者
const songleInfoSyoumeisha = new SongleInfoDto(
  "ac64490fb",
  "唱明者 / すこやか大聖堂 feat. KAITO",
  "Vfrl/20230120182855",
  2427950,
  "Vfrl%2F20230120182855",
);
songleInfoSyoumeisha.labelShortName = "唱明者";
songleInfoSyoumeisha.beatId = 4267334;
songleInfoSyoumeisha.chordId = 2405059;
songleInfoSyoumeisha.repetitiveSegmentId = 2475645;
songleInfoSyoumeisha.lyricId = 56095;
songleInfoSyoumeisha.lyricDiffId = 9651;
// ネオンライトの海を往く
export const songleInfoNeonLight = new SongleInfoDto(
  "a82827550",
  "ネオンライトの海を往く / Ponchi♪ feat. 初音ミク",
  "fyxI/20230203003935",
  2427951,
  "fyxI%2F20230203003935",
);
songleInfoNeonLight.labelShortName = "ネオンライトの海を往く";
songleInfoNeonLight.beatId = 4267373;
songleInfoNeonLight.chordId = 2405138;
songleInfoNeonLight.repetitiveSegmentId = 2475664;
songleInfoNeonLight.lyricId = 56096;
songleInfoNeonLight.lyricDiffId = 9639;
// ミュウテイション
const songleInfoMyutation = new SongleInfoDto(
  "a9de837e6",
  "ミュウテイション / Rin（Kuroneko Lounge） feat. 初音ミク",
  "Wk83/20230203141007",
  2427952,
  "Wk83%2F20230203141007",
);
songleInfoMyutation.labelShortName = "ミュウテイション";
songleInfoMyutation.beatId = 4267381;
songleInfoMyutation.chordId = 2405285;
songleInfoMyutation.repetitiveSegmentId = 2475676;
songleInfoMyutation.lyricId = 56812;
songleInfoMyutation.lyricDiffId = 10668;
// Entrust via 39
const songleInfoEntrust = new SongleInfoDto(
  "ab7b7ceb3",
  "Entrust via 39 / ikomai feat. 初音ミク",
  "Ya0_/20230201235034",
  2427953,
  "Ya0_%2F20230201235034",
);
songleInfoEntrust.labelShortName = "Entrust via 39";
songleInfoEntrust.beatId = 4269734;
songleInfoEntrust.chordId = 2405723;
songleInfoEntrust.repetitiveSegmentId = 2475686;
songleInfoEntrust.lyricId = 56098;
songleInfoEntrust.lyricDiffId = 9643;

// コンテスト楽曲
export const songleInfoList: SongleInfoDto[] = [
  songleInfoKinkijackyaku,
  songleInfoIkirukoto,
  songleInfoSyoumeisha,
  songleInfoNeonLight,
  songleInfoMyutation,
  songleInfoEntrust,
];

// 楽曲初期選択
export const initSelect = 0;
