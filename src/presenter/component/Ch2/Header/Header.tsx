import React from "react";
import * as S from "./styles";
import { Img } from "~/presenter/lib/Img";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faGooglePlus,
} from "@fortawesome/free-brands-svg-icons";

export const Header: React.VFC = () => {
  return (
    <S.Area>
      <h1>おすすめ行楽グルメスポット</h1>

      <p>
        これからの季節にオススメなグルメスポットの情報をお届けします。みんなでわいわい楽しむも良し、一人でのんびり楽しみに行くも良しなスポットが目白押し。営業時間が短いお店や、人気メニューはすぐになくなっちゃうお店もありますので、要チェックです。
      </p>

      <div>
        <Img src="/food.svg" alt="" width="100" height="100" />
        FOOD SERIES
      </div>

      <time dateTime="2020-12-01">2020/12/01</time>

      <aside>
        <ol>
          <li>
            <a href="#">トップ</a>
          </li>
          <li>
            <a href="#">グルメ</a>
          </li>
          <li>
            <a href="#">関東エリア</a>
          </li>
        </ol>
      </aside>

      <aside>
        <ul>
          <li>
            <a href="#">グループ</a>
          </li>
          <li>
            <a href="#">おひとり様</a>
          </li>
        </ul>
      </aside>

      <aside>
        <ul>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faGooglePlus} />
            </a>
          </li>
        </ul>
      </aside>
    </S.Area>
  );
};