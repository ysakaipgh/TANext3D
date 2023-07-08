import { faPlayCircle, faStopCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "~/compornents/atoms/Button";
import SpanEmphasis from "~/compornents/atoms/SpanEmphasis";
import type ReadSongleProps from "~/compornents/templates/MusicPlayer/props";
import { HtmlAttrIds } from "~/defines/constants/htmlAttr";
import { initSelect } from "~/defines/constants/musicList";
import { loadMusic, play, stop } from "~/mvc/services/SrvMusicPlayer";

/**
 * 音楽プレイヤー関連をまとめたエリア
 *
 * @param param0 楽曲生成に必要な情報
 * @returns JSX.Element
 */
const ReadSongle = ({ textAlive, ...props }: ReadSongleProps) => {
  const selectId = initSelect; // 楽曲セレクター導入時に、ここが可変になるので、一応変数化しておく
  loadMusic(textAlive, selectId);
  return (
    <>
      <div id={HtmlAttrIds.MP_LOADING_INFO} className="nl_loading" role="alert">読込中</div>
      <div className="mp_ctrl_area">
        <div className="mp_ctrl_btn">
          <Button onClick={() => play(textAlive.getMpCtrl())} className="mp_ctrl_btn_disp">
            <FontAwesomeIcon icon={faPlayCircle} />
          </Button>
          <Button onClick={() => stop(textAlive.getMpCtrl())} className="mp_ctrl_btn_disp">
            <FontAwesomeIcon icon={faStopCircle} />
          </Button>
        </div>
      </div>
      <div
        className="mp_select_area"
        {...props}
      >
        <h1 className="mp_select_music">
          【 選曲名: <SpanEmphasis id={HtmlAttrIds.MP_SONG_NAME}>読込中</SpanEmphasis>】
        </h1>
      </div>
    </>
  );
};

export default ReadSongle;
