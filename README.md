# 初音ミク「マジカルミライ」プログラミング・コンテスト Next.js＋Three.js ベースパッケージ

- React コンポーネントの設計思想に従った Three.js で Text Alive の動画作成パッケージを作りたかったので、ベースパッケージを作ってみました。
  - 細かい所で、作りの甘い所もあるかもしれませんが、そこはご容赦を💦
  - Text Alive の `onTimeUpdate(...)` は、 Redux 経由で、 Three.js の `<Canvas />` 内に表示するコンポーネント群、 `<Basic />` に繋げてあります。
    - `ContentsAreaController.getBeatRacio(...)` で、Text Alive の `findBeat(...)` を取得済みですので、 `position` だけあれば良い！、と言う人は演出に専念してみてください。
    - `onTimeUpdate(...)` 以外からも値を取得したい！、と言う方は、 `<ThreeJsArea />` 内の `setPositionOnUpdate(...)` を参考に、 `Player.addListener` バインド用の関数と Redux の各種ステートなどを追加してください。
  - このテンプレートは、あくまでも「 Text Alive <> Next.js (React) <> Three.js 」を接続しただけの物なので、これ以上改修を加える予定はありません。
    - 実際に、自分でもこうした方がより良い、と思う部分はありますが…
- Text Alive 用に作ってはいますが、外部APIを他の物に変更すれば、流用は効くかと思います。

- [デモページ](https://www.personal-dashboard.net/contents/tanext3d/)

## 採用フレームワーク

- T3 Stack
  - T3 Stack の中で、採用したフレームワーク
    - Next.js
    - Tailwind CSS
    - Typescript
  - プロジェクトの作成
    - [create-t3-app](https://github.com/t3-oss/create-t3-app) を使用
  - ローカル確認用URL
    - [開発環境](http://localhost:3939/)

- フレームワーク以外で追加したパッケージなど
  - スクリプト関連
    - 導入したRPM
      - del-cli
        - キャッシュ・ビルドファイルの削除用
  - Text Alive RPM版
    - 導入したRPM
      - textalive-app-api
  - Fort Awesome
    - フリーアイコン （ 画面左下の再生・停止ボタンに使用 ）
    - 導入したRPM
      - @fortawesome/react-fontawesome
      - @fortawesome/fontawesome-svg-core
      - @fortawesome/free-regular-svg-icons
      - @fortawesome/free-solid-svg-icons
      - @fortawesome/free-brands-svg-icons
  - Three.js
    - WebGL（3DCG）導入の為
    - 導入したRPM
      - @react-three/fiber
      - @react-three/drei
    - three.jsに状態を渡す為に、Reduxを導入
      - @reduxjs/toolkit
      - r3f-perf
      - react-redux
      - redux
      - redux-logger
      - @types/react-redux
      - @types/redux-logger

### パッケージ構成

```docs
src
├ compornents React コンポーネント群、 atomic デザインに近い
│  ├ atoms 単純な部品
│  ├ molecules Three.js の一部品、ここが atomic デザインと若干変えている。一部ロジックも乗っている。
│  ├ organisms グループ化したコンポーネント。歌詞のエリア、3Dオブジェクトのエリア、 Three.js の Canvas をまとめたエリア。
│  └ templates レイヤー単位のテンプレート。音楽プレイヤー関連をまとめたエリア、Three.jsでの演出表示をまとめたエリア。
├ defines 各種定数定義など、固定的な定義を纏めた物
│  ├ constants 定数定義。
│  ├ interfaces インターフェース。（ musicList.ts の楽曲定義を読み込む SongleInfoDto.ts のインターフェースだけ定義してある）
│  └ types 汎用的な定義のみ。コンポーネント専用、 Redux 用の type は それぞれの配下に定義。
├ mvc いわゆる MVC モデル… なのだが、 View にあたる所は、 React ではコンポーネントが担う ＆ DBにあたる所は外部APIが担うので、以下のように定義。
│  ├ controllers コンポーネントから指示を受けて、何かしらを返却。
│  ├ dto サーバーサイドのデータ受け渡し用DTO定義
│  └ services コンポーネントから呼ばれるロジックと、サーバーサイドの非同期処理
│             本来内容を分けるべきなのだが、数が少ない為纏めてある。
├ pages Next.js から呼ばれるメイン画面。ここにページを追加していけば、自動的にルーティングが追加となる。
│       Three.js で見せる画面としては1画面だけで良いので、ページの追加はしていない。
├ stores Redux の定義を纏める
└ styles Tailwind CSS の定義
```

## 初音ミク「マジカルミライ」プログラミング・コンテスト応募用のテンプレート

### アピールポイント

- 自分のアピールしたいポイントを記載。

### デモページ

- [自分のアプリ名を記載](https://アプリのURLを記載)

## 開発

### インストール

[Node.js](https://nodejs.org/) をインストールしている環境で以下のコマンドを実行してください。

```sh
npm install
```

- インストール後に、以下作業を行ってください。
  - 「.env.example」のファイルをコピーして、「.env.local」ファイルを作成する。
  - 以下、TextAliveの開発者情報のページで、アプリトークンを発行する。
    - [開発者情報](https://developer.textalive.jp/profile/)
  - 発行されたアプリトークンを、「.env.local」ファイルの「 `NEXT_PUBLIC_TEXT_ALIVE_API_TOKEN=` 」の右側に記述する。
    - 例） `NEXT_PUBLIC_TEXT_ALIVE_API_TOKEN=AbCdEFg1234567890`

### 起動（開発用）

- 以下のコマンドを実行すると、開発用サーバが起動します。

```sh
npm run start:dev
```

### 起動（リリース確認）

- 以下のコマンドで、ビルド済みファイルを使用して、サーバーが起動します。
  - 実行時には、「.env.local」ファイルの `NEXT_PUBLIC_SUB_DIRECTORY` を空にしてください。

```sh
npm run start:prod
```

### ビルド

- 以下のコマンドで `.next` と `build` 以下にビルド済みファイルが生成されます。
  - `build` 以下に出力されたHTML/CSS/JSをサーバーにアップするか、以下Dockerを起動して確認できます。
    - [DockerのReadMe](docker_tanext3d\README.md)
  - ビルド実行時には、「.env.local」ファイルの `NEXT_PUBLIC_SUB_DIRECTORY` に、アップするサーバーのサブディレクトリを記述してください。

```sh
npm run build:release
```

### フォーマットチェック

- 以下のコマンドで、ファイル内のフォーマットチェックを行います。
  - このベースパッケージでは、基本的に Visual Code Studio のプラグインでチェックを行う事を推奨。
  - その為、このコマンドは使用頻度・低、の物になります。

```sh
npm run lint
```

### 各種バージョン情報表示

- 以下のコマンドで、ライブラリのバージョンを纏めて表示できます。

```sh
npm run info
```

### キャッシュクリア

```sh
npm run clean
```

## カスタマイズする場合

### 3Dテキストのフォントの種類を変える

1. [Google Fonts](https://fonts.google.com/) で、使用したいフォントを選ぶ
2. [Facetype.js](http://gero3.github.io/facetype.js/) に、 `～.ttf` ファイルをアップロードし、 `Generate a JSON file (.json)` を選択して、 `json` ファイル形式に変換、ダウンロードする。
3. 変換した `json` ファイルを `public\assets` に配置する。
4. `src\compornents\molecules\TjsGeoBox\index.tsx` の、以下ソースコードを変更する。
   - `font="assets/Zen_Kaku_Gothic_New_Light_Regular.json"` を、配置したフォントのファイル名に変更。

### 物理演算を行う

- cannonと言うライブラリがありますので、導入してみてください。
  - [公式 GitHub](https://github.com/pmndrs/use-cannon)
  - インストール

    ```bash
    npm install @react-three/cannon
    ```
