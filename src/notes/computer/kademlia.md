---
title: Kademlia
---

Kademliaは分散ハッシュテーブルのアルゴリズム。

大きすぎて全体を一つのノードに保存できないようなハッシュテーブルがあったとして、情報をうまく各ノードに分散させることでそこそこのスピードで問い合わせができるような仕組みを分散ハッシュテーブルという。

Kademliaについて言えば、ハッシュ空間の大きさを$N$としたとき、問い合わせが$\log_2 N$回で済む。

Kademliaのコア的なアイデアは
- ハッシュ空間に距離としてXORを入れる
- ハッシュの二分木を作り、自分の枝から分岐しているサブツリーごとに最大k個持つ（k-bucket）

という2点。

このようにすることで、ノードごとに保持するテーブルの大きさは$k\log_2 N$になる。

問い合わせの仕組みはざっくりと以下のようである。

まず、目標が含まれるような自分のk-bucketの中にいる$k$個のノードどれか（ここではノードAとする）に問い合わせを行う。ノードAは、目標が含まれるようなノードAのk-bucket中のノードBを返す。次に自分はノードBに問い合わせを行い、ノードBは目標が含まれるようなノードBのk-bucket中のノードCを返す……

以上のように繰り返すことで目標に到達することができ、最悪の場合でも、1回の問い合わせで目標とのXOR距離を半分にすることができる。

### 参考文献

図などを含めたより分かりやすい解説は以下を参照。
- [https://hazm.at/mox/distributed-system/algorithm/distributed-hash-table/kademlia/index.html](https://hazm.at/mox/distributed-system/algorithm/distributed-hash-table/kademlia/index.html)
- [https://www.youtube.com/watch?v=1QdKhNpsj8M](https://www.youtube.com/watch?v=1QdKhNpsj8M)
- [https://www.scs.stanford.edu/~dm/home/papers/kpos.pdf](https://www.scs.stanford.edu/~dm/home/papers/kpos.pdf)