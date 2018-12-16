window.search = {"doc_urls":["introduction.html#aはじめに","about_x8664.html#x86-64について","overview.html#a概要","overview.html#legacy-prefix","overview.html#rex-prefix","overview.html#opcode","reference.html#a参考資料"],"index":{"documentStore":{"docInfo":{"0":{"body":7,"breadcrumbs":0,"title":0},"1":{"body":2,"breadcrumbs":2,"title":2},"2":{"body":28,"breadcrumbs":2,"title":0},"3":{"body":28,"breadcrumbs":4,"title":2},"4":{"body":26,"breadcrumbs":4,"title":2},"5":{"body":0,"breadcrumbs":3,"title":1},"6":{"body":10,"breadcrumbs":0,"title":0}},"docs":{"0":{"body":"この本は、x86-64のエンコーディングの方法を、アセンブラを自作しながら学んでいくという、かなり特殊なものになっています。 x86-64というのは、命令セットアーキテクチャのひとつ、つまり機械語のことです。 エンコーディングというのは、アセンブリを機械語にして保存することです(一般的にはアセンブルといいます)。 つまり、アセンブラがしていることを学んで、ついでに実装しちゃおう、というのがこの本の趣旨です。 アセンブリは、機械語と一対一の関係なので、アセンブラを実装するのはそこまで難しくはありません。 コンパイラも、最終的にはアセンブリや機械語を生成するので、アセンブラを作っていれば、プログラミング言語を自作するときに使えたりします。 低レイヤというものは、奥深いもので、それに興味を持つ人も少なからずいます。しかし、最近は、低レイヤプログラミングを実際にやってみる機会が少なくなっているように感じます。この本が、そんな低レイヤの世界を旅するきっかけになってくれれば、それは筆者の望外の喜びです。 hobo0xcc | github | twitter","breadcrumbs":"はじめに","id":"0","title":"はじめに"},"1":{"body":"x86-64のエンコーディングに必要な知識を解説していきます。","breadcrumbs":"x86-64について","id":"1","title":"x86-64について"},"2":{"body":"x86-64の命令は、基本的に以下のような並びになります。 命令やオペランドによって値が存在しない(0byte)場合があります。 Legacy prefix (0 - 4byte) REX prefix (0 - 1byte) Opcode (1 - 3byte) ModR/M (0 - 1byte) SIB (0 - 1byte) Displacement (0 - 1byte) Immediate(0, 1, 2, 4, 8byte)","breadcrumbs":"x86-64について » 概要","id":"2","title":"概要"},"3":{"body":"各命令には、最大4つのプリフィックスをつけることができます。 4つのグループがあり、1つのグループにつき1つ使うことができます。 使えるプリフィックスを以下に示します。 Prefix group 1 0xF0 0xF2 0xF3 Prefix group 2 0x2E 0x36 0x3E 0x26 0x64 0x65 0x2E 0x3E Prefix group 3 0x66 Prefix group 4 0x67 それぞれに意味がありますが、よく使うのは0x66と0x67くらいです。","breadcrumbs":"x86-64について » Legacy prefix","id":"3","title":"Legacy prefix"},"4":{"body":"REX prefixは、64bitのオペランドか、拡張レジスタを使用する場合などにつけられます。 REX prefixは、最初の4bitが 0100 で始まり、残りの1bit * 4(4bit)でプリフィックスを表現します。最後の4bitは1bitずつ左からW, R, X, Bと呼ばれます。 WRXBにはそれぞれ次のような意味があります。 Field Length Description W 1bit この値が1の場合は64bitのオペランドサイズが使用されます。0の場合はデフォルトのオペランドサイズが使用されます。 R 1bit 拡張レジスタを使用する場合は1にします。0の場合は通常のレジスタが使用されます。 X 1bit SIBのbaseフィールドの拡張に使われます。1の場合はbaseで拡張レジスタを使用しての指定ができます。 B 1bit ModR/Mのr/mフィールドの拡張に使われます。1の場合はr/mで拡張レジスタの使用しての指定ができます。","breadcrumbs":"x86-64について » REX prefix","id":"4","title":"REX prefix"},"5":{"body":"","breadcrumbs":"x86-64について » Opcode","id":"5","title":"Opcode"},"6":{"body":"この本を書く上で参考にした資料です。 X86-64 Instruction Encoding - OSDev Intel Software Developer's Manual - Intel","breadcrumbs":"参考資料","id":"6","title":"参考資料"}},"length":7,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"0":{"1":{"0":{"0":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"b":{"df":0,"docs":{},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":1,"docs":{"2":{"tf":2.23606797749979}},"x":{"2":{"6":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}},"3":{"6":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}},"6":{"4":{"df":1,"docs":{"3":{"tf":1.0}}},"5":{"df":1,"docs":{"3":{"tf":1.0}}},"6":{"df":1,"docs":{"3":{"tf":1.0}},"と":{"0":{"df":0,"docs":{},"x":{"6":{"7":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}},"7":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"f":{"0":{"df":1,"docs":{"3":{"tf":1.0}}},"2":{"df":1,"docs":{"3":{"tf":1.0}}},"3":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}},"1":{"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":2.23606797749979}}}},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":2.0}}}}}},"df":2,"docs":{"2":{"tf":1.4142135623730951},"3":{"tf":1.0}},"に":{"df":0,"docs":{},"し":{"df":0,"docs":{},"ま":{"df":0,"docs":{},"す":{"df":0,"docs":{},"。":{"0":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}}}}},"の":{"df":0,"docs":{},"場":{"df":0,"docs":{},"合":{"df":0,"docs":{},"は":{"6":{"4":{"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"の":{"df":0,"docs":{},"オ":{"df":0,"docs":{},"ペ":{"df":0,"docs":{},"ラ":{"df":0,"docs":{},"ン":{"df":0,"docs":{},"ド":{"df":0,"docs":{},"サ":{"df":0,"docs":{},"イ":{"df":0,"docs":{},"ズ":{"df":0,"docs":{},"が":{"df":0,"docs":{},"使":{"df":0,"docs":{},"用":{"df":0,"docs":{},"さ":{"df":0,"docs":{},"れ":{"df":0,"docs":{},"ま":{"df":0,"docs":{},"す":{"df":0,"docs":{},"。":{"0":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}}}}}}}}}}}}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"2":{"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":1.0}}},"3":{"b":{"df":0,"docs":{},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":1,"docs":{"3":{"tf":1.0}}},"4":{"(":{"4":{"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{")":{"df":0,"docs":{},"で":{"df":0,"docs":{},"プ":{"df":0,"docs":{},"リ":{"df":0,"docs":{},"フ":{"df":0,"docs":{},"ィ":{"df":0,"docs":{},"ッ":{"df":0,"docs":{},"ク":{"df":0,"docs":{},"ス":{"df":0,"docs":{},"を":{"df":0,"docs":{},"表":{"df":0,"docs":{},"現":{"df":0,"docs":{},"し":{"df":0,"docs":{},"ま":{"df":0,"docs":{},"す":{"df":0,"docs":{},"。":{"df":0,"docs":{},"最":{"df":0,"docs":{},"後":{"df":0,"docs":{},"の":{"4":{"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"は":{"1":{"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"ず":{"df":0,"docs":{},"つ":{"df":0,"docs":{},"左":{"df":0,"docs":{},"か":{"df":0,"docs":{},"ら":{"df":0,"docs":{},"w":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}}}}}}}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"b":{"df":0,"docs":{},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":1.4142135623730951}},"つ":{"df":0,"docs":{},"の":{"df":0,"docs":{},"グ":{"df":0,"docs":{},"ル":{"df":0,"docs":{},"ー":{"df":0,"docs":{},"プ":{"df":0,"docs":{},"が":{"df":0,"docs":{},"あ":{"df":0,"docs":{},"り":{"df":0,"docs":{},"、":{"1":{"df":0,"docs":{},"つ":{"df":0,"docs":{},"の":{"df":0,"docs":{},"グ":{"df":0,"docs":{},"ル":{"df":0,"docs":{},"ー":{"df":0,"docs":{},"プ":{"df":0,"docs":{},"に":{"df":0,"docs":{},"つ":{"df":0,"docs":{},"き":{"1":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}}}}}}}}},"df":0,"docs":{}}}}}}}}}}}},"6":{"4":{"df":4,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.4142135623730951},"2":{"tf":1.0},"6":{"tf":1.0}}},"df":0,"docs":{}},"8":{"b":{"df":0,"docs":{},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":0,"docs":{}},"b":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}},"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"df":0,"docs":{}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"'":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}}}}}}}},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"a":{"c":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"o":{"d":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}}}},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"u":{"b":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"p":{"df":1,"docs":{"3":{"tf":2.0}}}}}}},"h":{"df":0,"docs":{},"o":{"b":{"df":0,"docs":{},"o":{"0":{"df":0,"docs":{},"x":{"c":{"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"i":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"(":{"0":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}}}}},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"g":{"a":{"c":{"df":0,"docs":{},"i":{"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}},"m":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"r":{"/":{"df":0,"docs":{},"m":{"df":1,"docs":{"2":{"tf":1.0}},"の":{"df":0,"docs":{},"r":{"/":{"df":0,"docs":{},"m":{"df":0,"docs":{},"フ":{"df":0,"docs":{},"ィ":{"df":0,"docs":{},"ー":{"df":0,"docs":{},"ル":{"df":0,"docs":{},"ド":{"df":0,"docs":{},"の":{"df":0,"docs":{},"拡":{"df":0,"docs":{},"張":{"df":0,"docs":{},"に":{"df":0,"docs":{},"使":{"df":0,"docs":{},"わ":{"df":0,"docs":{},"れ":{"df":0,"docs":{},"ま":{"df":0,"docs":{},"す":{"df":0,"docs":{},"。":{"1":{"df":0,"docs":{},"の":{"df":0,"docs":{},"場":{"df":0,"docs":{},"合":{"df":0,"docs":{},"は":{"df":0,"docs":{},"r":{"/":{"df":0,"docs":{},"m":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}}}}}}}}}}}}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"p":{"c":{"df":0,"docs":{},"o":{"d":{"df":2,"docs":{"2":{"tf":1.0},"5":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"s":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":1,"docs":{"6":{"tf":1.0}}}}},"df":0,"docs":{}}},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{"df":3,"docs":{"2":{"tf":1.4142135623730951},"3":{"tf":2.23606797749979},"4":{"tf":1.0}},"は":{"df":0,"docs":{},"、":{"6":{"4":{"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{},"最":{"df":0,"docs":{},"初":{"df":0,"docs":{},"の":{"4":{"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}}}}},"r":{"df":1,"docs":{"4":{"tf":1.4142135623730951}},"e":{"df":0,"docs":{},"x":{"df":2,"docs":{"2":{"tf":1.0},"4":{"tf":1.7320508075688772}}}}},"s":{"df":0,"docs":{},"i":{"b":{"df":1,"docs":{"2":{"tf":1.0}},"の":{"b":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"フ":{"df":0,"docs":{},"ィ":{"df":0,"docs":{},"ー":{"df":0,"docs":{},"ル":{"df":0,"docs":{},"ド":{"df":0,"docs":{},"の":{"df":0,"docs":{},"拡":{"df":0,"docs":{},"張":{"df":0,"docs":{},"に":{"df":0,"docs":{},"使":{"df":0,"docs":{},"わ":{"df":0,"docs":{},"れ":{"df":0,"docs":{},"ま":{"df":0,"docs":{},"す":{"df":0,"docs":{},"。":{"1":{"df":0,"docs":{},"の":{"df":0,"docs":{},"場":{"df":0,"docs":{},"合":{"df":0,"docs":{},"は":{"b":{"a":{"df":0,"docs":{},"s":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}}}}}}}}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"f":{"df":0,"docs":{},"t":{"df":0,"docs":{},"w":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"t":{"df":0,"docs":{},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}},"w":{"df":1,"docs":{"4":{"tf":1.0}},"r":{"df":0,"docs":{},"x":{"b":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}}},"x":{"8":{"6":{"df":4,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.4142135623730951},"2":{"tf":1.0},"6":{"tf":1.0}}},"df":0,"docs":{}},"df":1,"docs":{"4":{"tf":1.4142135623730951}}}}},"breadcrumbs":{"root":{"0":{"1":{"0":{"0":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"b":{"df":0,"docs":{},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":1,"docs":{"2":{"tf":2.23606797749979}},"x":{"2":{"6":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}},"3":{"6":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}},"6":{"4":{"df":1,"docs":{"3":{"tf":1.0}}},"5":{"df":1,"docs":{"3":{"tf":1.0}}},"6":{"df":1,"docs":{"3":{"tf":1.0}},"と":{"0":{"df":0,"docs":{},"x":{"6":{"7":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}},"7":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"f":{"0":{"df":1,"docs":{"3":{"tf":1.0}}},"2":{"df":1,"docs":{"3":{"tf":1.0}}},"3":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}},"1":{"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":2.23606797749979}}}},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":2.0}}}}}},"df":2,"docs":{"2":{"tf":1.4142135623730951},"3":{"tf":1.0}},"に":{"df":0,"docs":{},"し":{"df":0,"docs":{},"ま":{"df":0,"docs":{},"す":{"df":0,"docs":{},"。":{"0":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}}}}},"の":{"df":0,"docs":{},"場":{"df":0,"docs":{},"合":{"df":0,"docs":{},"は":{"6":{"4":{"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"の":{"df":0,"docs":{},"オ":{"df":0,"docs":{},"ペ":{"df":0,"docs":{},"ラ":{"df":0,"docs":{},"ン":{"df":0,"docs":{},"ド":{"df":0,"docs":{},"サ":{"df":0,"docs":{},"イ":{"df":0,"docs":{},"ズ":{"df":0,"docs":{},"が":{"df":0,"docs":{},"使":{"df":0,"docs":{},"用":{"df":0,"docs":{},"さ":{"df":0,"docs":{},"れ":{"df":0,"docs":{},"ま":{"df":0,"docs":{},"す":{"df":0,"docs":{},"。":{"0":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}}}}}}}}}}}}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"2":{"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":1.0}}},"3":{"b":{"df":0,"docs":{},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":1,"docs":{"3":{"tf":1.0}}},"4":{"(":{"4":{"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{")":{"df":0,"docs":{},"で":{"df":0,"docs":{},"プ":{"df":0,"docs":{},"リ":{"df":0,"docs":{},"フ":{"df":0,"docs":{},"ィ":{"df":0,"docs":{},"ッ":{"df":0,"docs":{},"ク":{"df":0,"docs":{},"ス":{"df":0,"docs":{},"を":{"df":0,"docs":{},"表":{"df":0,"docs":{},"現":{"df":0,"docs":{},"し":{"df":0,"docs":{},"ま":{"df":0,"docs":{},"す":{"df":0,"docs":{},"。":{"df":0,"docs":{},"最":{"df":0,"docs":{},"後":{"df":0,"docs":{},"の":{"4":{"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"は":{"1":{"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"ず":{"df":0,"docs":{},"つ":{"df":0,"docs":{},"左":{"df":0,"docs":{},"か":{"df":0,"docs":{},"ら":{"df":0,"docs":{},"w":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}}}}}}}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"b":{"df":0,"docs":{},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":1.4142135623730951}},"つ":{"df":0,"docs":{},"の":{"df":0,"docs":{},"グ":{"df":0,"docs":{},"ル":{"df":0,"docs":{},"ー":{"df":0,"docs":{},"プ":{"df":0,"docs":{},"が":{"df":0,"docs":{},"あ":{"df":0,"docs":{},"り":{"df":0,"docs":{},"、":{"1":{"df":0,"docs":{},"つ":{"df":0,"docs":{},"の":{"df":0,"docs":{},"グ":{"df":0,"docs":{},"ル":{"df":0,"docs":{},"ー":{"df":0,"docs":{},"プ":{"df":0,"docs":{},"に":{"df":0,"docs":{},"つ":{"df":0,"docs":{},"き":{"1":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}}}}}}}}},"df":0,"docs":{}}}}}}}}}}}},"6":{"4":{"df":7,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.7320508075688772},"2":{"tf":1.4142135623730951},"3":{"tf":1.0},"4":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0}}},"df":0,"docs":{}},"8":{"b":{"df":0,"docs":{},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":0,"docs":{}},"b":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}},"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"df":0,"docs":{}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"'":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}}}}}}}},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"a":{"c":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"o":{"d":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}}}},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"u":{"b":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"p":{"df":1,"docs":{"3":{"tf":2.0}}}}}}},"h":{"df":0,"docs":{},"o":{"b":{"df":0,"docs":{},"o":{"0":{"df":0,"docs":{},"x":{"c":{"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"i":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"(":{"0":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}}}}},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"g":{"a":{"c":{"df":0,"docs":{},"i":{"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"df":0,"docs":{}},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}},"m":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"r":{"/":{"df":0,"docs":{},"m":{"df":1,"docs":{"2":{"tf":1.0}},"の":{"df":0,"docs":{},"r":{"/":{"df":0,"docs":{},"m":{"df":0,"docs":{},"フ":{"df":0,"docs":{},"ィ":{"df":0,"docs":{},"ー":{"df":0,"docs":{},"ル":{"df":0,"docs":{},"ド":{"df":0,"docs":{},"の":{"df":0,"docs":{},"拡":{"df":0,"docs":{},"張":{"df":0,"docs":{},"に":{"df":0,"docs":{},"使":{"df":0,"docs":{},"わ":{"df":0,"docs":{},"れ":{"df":0,"docs":{},"ま":{"df":0,"docs":{},"す":{"df":0,"docs":{},"。":{"1":{"df":0,"docs":{},"の":{"df":0,"docs":{},"場":{"df":0,"docs":{},"合":{"df":0,"docs":{},"は":{"df":0,"docs":{},"r":{"/":{"df":0,"docs":{},"m":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}}}}}}}}}}}}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"p":{"c":{"df":0,"docs":{},"o":{"d":{"df":2,"docs":{"2":{"tf":1.0},"5":{"tf":1.4142135623730951}}},"df":0,"docs":{}}},"df":0,"docs":{}},"s":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":1,"docs":{"6":{"tf":1.0}}}}},"df":0,"docs":{}}},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{"df":3,"docs":{"2":{"tf":1.4142135623730951},"3":{"tf":2.449489742783178},"4":{"tf":1.4142135623730951}},"は":{"df":0,"docs":{},"、":{"6":{"4":{"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{},"最":{"df":0,"docs":{},"初":{"df":0,"docs":{},"の":{"4":{"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}}}}},"r":{"df":1,"docs":{"4":{"tf":1.4142135623730951}},"e":{"df":0,"docs":{},"x":{"df":2,"docs":{"2":{"tf":1.0},"4":{"tf":2.0}}}}},"s":{"df":0,"docs":{},"i":{"b":{"df":1,"docs":{"2":{"tf":1.0}},"の":{"b":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"フ":{"df":0,"docs":{},"ィ":{"df":0,"docs":{},"ー":{"df":0,"docs":{},"ル":{"df":0,"docs":{},"ド":{"df":0,"docs":{},"の":{"df":0,"docs":{},"拡":{"df":0,"docs":{},"張":{"df":0,"docs":{},"に":{"df":0,"docs":{},"使":{"df":0,"docs":{},"わ":{"df":0,"docs":{},"れ":{"df":0,"docs":{},"ま":{"df":0,"docs":{},"す":{"df":0,"docs":{},"。":{"1":{"df":0,"docs":{},"の":{"df":0,"docs":{},"場":{"df":0,"docs":{},"合":{"df":0,"docs":{},"は":{"b":{"a":{"df":0,"docs":{},"s":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}}}}}}}}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"f":{"df":0,"docs":{},"t":{"df":0,"docs":{},"w":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"t":{"df":0,"docs":{},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}},"w":{"df":1,"docs":{"4":{"tf":1.0}},"r":{"df":0,"docs":{},"x":{"b":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}}},"x":{"8":{"6":{"df":7,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.7320508075688772},"2":{"tf":1.4142135623730951},"3":{"tf":1.0},"4":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0}}},"df":0,"docs":{}},"df":1,"docs":{"4":{"tf":1.4142135623730951}}}}},"title":{"root":{"6":{"4":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"g":{"a":{"c":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"o":{"df":0,"docs":{},"p":{"c":{"df":0,"docs":{},"o":{"d":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{"df":2,"docs":{"3":{"tf":1.0},"4":{"tf":1.0}}}}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":1,"docs":{"4":{"tf":1.0}}}}},"x":{"8":{"6":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}};