---
title: スーパーファミコン
---

スーパーファミコンはパソコンじゃないかもしれない

## 概要

スーパーファミコンというのは1990年くらいに任天堂から出たゲーム機です（常識）。

ここではスーパーファミコンでプログラミングしたいな〜という視点からいろんな事実を書く。

スーパーファミコンに使われているのは65816という、ファミコンに使われたCPUである6502の16bit拡張で、このCPUを含めたスーパーファミコンのハードウェア仕様の情報はすでにだいたい分かっており、Wikiなどにまとめられている。プログラミングをしたい人は、それを読みながらモノを作っていくことになる。

## スーパーファミコンの開発環境

開発に使うソフトウェアとかには結構択がある

### コンパイラ

挙げてるのはCコンパイラだけど、スーファミ開発ではアセンブリを書くべきなのでコンパイラに付属するアセンブラを叩くことになる。

- CC65 [https://www.cc65.org/](https://www.cc65.org/)

6502系のCコンパイラ。ファミコンのほうで結構有名だがスーファミもコンパイル可能。

- WLA-DX [https://github.com/vhelin/wla-dx](https://github.com/vhelin/wla-dx)

レトロゲーのCPUはだいたいWLA-DXの対応リストで網羅されている。

### エミュレータ

- Geiger's Snes9x Debugger [https://www.romhacking.net/utilities/241/](https://www.romhacking.net/utilities/241/)

Geiger [http://geigercount.net/crypt/](http://geigercount.net/crypt/) による、Snes9xという著名なエミュレータにデバッグ用機能を追加してビルドされたもの。2017年以降アップデートはない。そこそこ有名。

- Mesen [https://www.mesen.ca/](https://www.mesen.ca/)

Mesenは任天堂ハードだとファミコン・スーファミ・GB・GBAを全部エミュレートできる。こっちは現在も開発されており、メモリビューアやステップ実行のような機能もちゃんとついているのでこっちを使ったほうがいいかも。

### 実機での実行

エミュレータだけでなく、もちろん実機での自作プログラム実行もよくなされている。

- Flashcart

いわゆるマジコンに相当するもの。AmazonやAliexpressで調べたらそりゃもうたくさん存在する。自分が著作権を持っているような自作プログラムを書き込む場合は一応問題にはならない……はず さすがに

- 自作カートリッジ

スーファミのゲームカートリッジの中身はざっくり認証用チップとROM（プログラムを入れておく、メモリ）くらいのものなので、割と手に入るような部品を使って自作してしまうことも十分可能であり、[そのような試み](https://gyuque.hatenablog.com/entry/2019/01/01/183831)がたくさんなされている。SM調教師瞳がジーコサッカーのカセットでやっていたことと本質的には同じことである。

- SFメモリカセット

SFメモリカセットという書き換え式のゲームカートリッジを公式に販売し、ローソンのLoppiでゲームを書き換えられるというサービスを一時期やっていたらしく、そのカセットが中古市場で時々存在している。これを用いて自作プログラムを書き込むというのもメジャーではないものの[行われている](https://github.com/sanni/cartreader/wiki/Reflashing-NP-carts)っぽい。

### その他

- YY-CHR [https://w.atwiki.jp/yychr/](https://w.atwiki.jp/yychr/)

キャラのスプライトみたいなグラフィックを作るのに使えるツール。

## スーパーファミコンの開発読みもの

公式のドキュメントとかが広く配布されているわけじゃないから、有志がいろいろやっている。

- SNES Spec [https://w.atwiki.jp/snesspec/](https://w.atwiki.jp/snesspec/)

ありがたい日本語情報。俺は基本これ見がち

- Super NES Programming [https://en.wikibooks.org/wiki/Super_NES_Programming](https://en.wikibooks.org/wiki/Super_NES_Programming)

次によく見るのはこれかなと思う。だいたい同じことが英語で書いてある。

- SNES Development Wiki [https://wiki.superfamicom.org/](https://wiki.superfamicom.org/)

ここにはチュートリアルが多い。

- SNESdev Wiki [https://snes.nesdev.org/wiki/SNESdev_Wiki](https://snes.nesdev.org/wiki/SNESdev_Wiki)

ページ数が多くてメンテがされてがちな気がする

## 関連YouTube動画

<iframe width="910" height="512" src="https://www.youtube.com/embed/57ibhDU2SAI" title="Graphics &amp; Palettes - Super Nintendo Entertainment System Features Pt. 01" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

この人のシリーズは結構わかりやすくおもしろい
