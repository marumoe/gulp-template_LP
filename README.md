# gulp-template_LP
LPをコーディングする事を想定した、Gulpテンプレートです。

---

## 準備手順

1. npm install で必要なパッケージをまとめてローカルにインストール
* gulp でファイル監視/サーバーを立ち上げる
* htdocs ディレクトリ内に公開用のファイルが生成される

## Gulp インストールパッケージ

### dependencies [本番環境に必要]
* jquery
* normalize-scss

### devDependencies [開発時に必要]
* gulp
* gulp-sass
* gulp-autoprefixer (ベンダープレフィックス付与を自動化)
* gulp-plumber (エラーハンドリング)
* gulp-sourcemaps (cssソースマップ生成)

### optionalDependencies
* browser-sync (ライブコーディング用プラグイン)

### BrowserSync（ライブコーディング）について
HTML,CSS,JavaScriptのファイルの変更を監視して、変更を即座にブラウザーに反映させるプログラムです。

[詳しい説明はこちら](http://qiita.com/niusounds/items/a95978f9a1cb328d3021)

---

## 使い方

1. /gulp-template_LP ディレクトリに cd で移動
* gulp でファイル監視/サーバーを立ち上げる
* 以降ライブコーディングとScssが常時監視下におかれ、ファイルの変更があると、自動的に更新
* 終了する際は ctlr + c

---

## mixin

mixinの詰め合わせ。適宜更新予定。

参考にしたサイト
* [最近のWeb制作でよく使う、Sassのmixinのまとめ](http://coliss.com/articles/build-websites/operation/css/15-essential-sass-mixins-by-developerdrive.html)

---

## HTML

* 文字コード：utf-8

### 仕様
* レスポンシブWebデザイン
