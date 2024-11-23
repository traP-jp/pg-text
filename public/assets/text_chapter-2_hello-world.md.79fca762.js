import{_ as s,o as a,c as n,V as l}from"./chunks/framework.c2f65d89.js";const F=JSON.parse('{"title":"2.1. はじめてのプログラミング解説","description":"","frontmatter":{},"headers":[],"relativePath":"text/chapter-2/hello-world.md","filePath":"text/chapter-2/hello-world.md"}'),p={name:"text/chapter-2/hello-world.md"},o=l(`<h1 id="_2-1-はじめてのプログラミング解説" tabindex="-1">2.1. はじめてのプログラミング解説 <a class="header-anchor" href="#_2-1-はじめてのプログラミング解説" aria-label="Permalink to &quot;2.1. はじめてのプログラミング解説&quot;">​</a></h1><p>おさらい：第1章のコード</p><div class="language-cpp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">iostream</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">namespace</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">std</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  cout </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello, traP!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#A6ACCD;"> endl</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  // Hello, traP を出力する</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>1行目から順に、まずは「用語」を説明していく。<br> 新しい単語がどんどん出てくるが、単語の説明は 2.1.1. 以降で行う。今は単語を頭の片隅に入れておくレベルで良いだろう。</p><div class="language-cpp"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">iostream</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p><code>iostream</code> と呼ばれるファイルを「インクルード」している。</p><div class="language-cpp"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">namespace</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">std</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p><code>std::</code> を省略できるようにする。</p><div class="language-cpp"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span></code></pre></div><p><code>main</code> という名前の「関数」を宣言している。 プログラムは、ここから実行される。</p><div class="language-cpp"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cout </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello, traP!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#A6ACCD;"> endl</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>コンソールに <code>Hello traP!</code> を出力する。 <code>&quot;</code> で囲うのは、これが文字列なのか、命令なのかを区別するため。（<code>VSCode</code>を使っていれば <code>&quot;Hello traP!&quot;</code> の部分だけ色分けされているはず。） <code>endl</code> についても 2.1.1. で解説する。</p><div class="language-cpp"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// Hello, traP を出力する</span></span></code></pre></div><p>コメントを書いている。</p><div class="language-cpp"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>波括弧を閉じている。</p><h2 id="_2-1-0-コメント" tabindex="-1">2.1.0. コメント <a class="header-anchor" href="#_2-1-0-コメント" aria-label="Permalink to &quot;2.1.0. コメント&quot;">​</a></h2><p><code>//</code> と書くと、その行の <code>//</code> 以降の部分はコメントになり、ブログラム実行時には無視される。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>プログラムの先頭に <code>//</code> を付けてコメントにする事をコメントアウトする、と呼ぶことがある。</p></div><p>プログラムがどのような動作をするのか、どういう目的のプログラムなのか、を簡易的に記述すると良い。見たら分かるというレベルになれば、コメントを書く必要はない。</p><div class="language-cpp"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// Hello, traP を出力する</span></span></code></pre></div><h2 id="_2-1-1-cout" tabindex="-1">2.1.1. cout <a class="header-anchor" href="#_2-1-1-cout" aria-label="Permalink to &quot;2.1.1. cout&quot;">​</a></h2><div class="language-cpp"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">iostream</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">namespace</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">std</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  cout </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello, traP!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#A6ACCD;"> endl</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  // Hello, traP を出力する</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p><code>cout</code> はコンソール（画面）に文字列を出力する命令である。C++ 特有の記法で、 <code>&lt;&lt;</code> が ← みたいなものだと考えると良い。<code>cout</code> に向かって文字列を送信しているイメージ。複数つなげることもできる。（以下の例を参照）</p><div class="language-cpp"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cout </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello, </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">traP!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#A6ACCD;"> endl</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>また、<code>endl</code> は改行の命令を意味する。</p><h3 id="_2-1-1-1-エスケープシーケンス" tabindex="-1">2.1.1.1. エスケープシーケンス <a class="header-anchor" href="#_2-1-1-1-エスケープシーケンス" aria-label="Permalink to &quot;2.1.1.1. エスケープシーケンス&quot;">​</a></h3><p>出力に <code>&quot;</code> を含めたい場合、 <code>cout &lt;&lt; &quot;Hello, &quot;traP&quot;!&quot; &lt;&lt; endl;</code> と記述してもコンパイルができない。これは <code>&quot;Hello, &quot;</code> で文字列が区切られてしまっているためである。 これを回避するために、(Windows: ¥ キー, Mac: Option (⌥) キーを推しながら ¥ キー) <code>\\</code> という文字を使って <code>\\&quot;</code> と書くことで、 <code>&quot;</code> を出力することができる。 このように <code>\\</code> を使った文字の出力の仕方をエスケープシーケンスと呼ぶ。</p><div class="language-cpp"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cout </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello, </span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">traP</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#A6ACCD;"> endl</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;"> // output: Hello, &quot;traP&quot;!</span></span></code></pre></div><p>他にも以下 <code>Hello, \\n traP!</code> のように文字列中に <code>\\n</code> と書くと改行され、この場合は <code>&quot;Hello, &quot;</code>と<code>&quot;traP!&quot;</code> の間に改行が入る。</p><div class="language-cpp"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cout </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello, </span><span style="color:#A6ACCD;">\\n</span><span style="color:#C3E88D;">traP!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#A6ACCD;"> endl</span><span style="color:#89DDFF;">;</span></span></code></pre></div><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">[output]</span></span>
<span class="line"><span style="color:#A6ACCD;">Hello,</span></span>
<span class="line"><span style="color:#A6ACCD;">traP!</span></span></code></pre></div><p>また、<code>\\</code>を文字列内で使いたい場合は、<code>\\\\</code> と書く。</p><div class="language-cpp"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cout </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">\\\\\\\\</span><span style="color:#C3E88D;"> Hello, traP!! //</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#A6ACCD;"> endl</span><span style="color:#89DDFF;">;</span></span></code></pre></div><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">[output]</span></span>
<span class="line"><span style="color:#A6ACCD;">\\\\ Hello, traP!! //</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>文字列中では <code>//</code> を書いてもコメントアウトされない。</p></div><h2 id="_2-1-2-セミコロン" tabindex="-1">2.1.2. セミコロン <a class="header-anchor" href="#_2-1-2-セミコロン" aria-label="Permalink to &quot;2.1.2. セミコロン&quot;">​</a></h2><p>C++ では、<code>;</code> を多用する。<code>;</code> は「命令の区切り」を示す。C++ においては、関数を呼び出すときや、次に出てくる「変数」の宣言時など、各命令の終わりには <code>;</code> を記述しなければならない。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>最終的にはコンピューターが機械語に変換する必要があり、その際に命令の区切りをはっきりさせるために <code>;</code>を使うと考えると良い。</p></div><h2 id="_2-1-3-include-命令" tabindex="-1">2.1.3. include 命令 <a class="header-anchor" href="#_2-1-3-include-命令" aria-label="Permalink to &quot;2.1.3. include 命令&quot;">​</a></h2><div class="language-cpp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line highlighted"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">iostream</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">namespace</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">std</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  cout </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello, traP!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#A6ACCD;"> endl</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  // Hello, traP を出力する</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><code>#include</code> は、外部の関数（やその他もろもろ）が実装されているファイルを取り込んで、使えるようにする命令である。</p><p>このソースコードでは <code>iostream</code> と呼ばれるファイルをインクルードしている。これは入出力に関する便利な関数（など）が用意されているファイルである。具体的には、 <code>cout</code> が <code>iostream</code> に含まれている。</p><p>自分一人で一から作る事は非常に難しいので、予め用意されたソースコードを適宜用いてプログラミングをするのである。</p><h2 id="_2-1-4-using-namespace-std" tabindex="-1">2.1.4. using namespace std <a class="header-anchor" href="#_2-1-4-using-namespace-std" aria-label="Permalink to &quot;2.1.4. using namespace std&quot;">​</a></h2><div class="language-cpp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">iostream</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line highlighted"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">namespace</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">std</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  cout </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello, traP!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#A6ACCD;"> endl</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  // Hello, traP を出力する</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><code>cout</code> と記述しているが、本来ならば <code>std::cout</code> と書く必要がある。 <code>std::</code> が何を意味しているかは深くは解説しないが（std = standard くらいは知っても良いだろう）、毎回<code>std::</code> と書くのは少し不便なので、これを書かない（省略する）という宣言をしている。</p><h2 id="_2-1-5-コメント" tabindex="-1">2.1.5. コメント <a class="header-anchor" href="#_2-1-5-コメント" aria-label="Permalink to &quot;2.1.5. コメント&quot;">​</a></h2><div class="language-cpp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">iostream</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">namespace</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">std</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  cout </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello, traP!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#A6ACCD;"> endl</span><span style="color:#89DDFF;">;</span></span>
<span class="line highlighted"><span style="color:#676E95;font-style:italic;">  // Hello, traP を出力する</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>行の先頭に <code>//</code> と書く事でその行をコメントにすることができる。コメントはコンパイル時には無視される。 メモに使うと良い。</p><h2 id="_2-1-6-main-関数" tabindex="-1">2.1.6. main 関数 <a class="header-anchor" href="#_2-1-6-main-関数" aria-label="Permalink to &quot;2.1.6. main 関数&quot;">​</a></h2><div class="language-cpp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">iostream</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">namespace</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">std</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  cout </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello, traP!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#A6ACCD;"> endl</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  // Hello, traP を出力する</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>コンピューターは main 関数 を実行する。main 関数の中身がプログラムのメインの部分と捉えても良い。 「関数」についての詳細は V 章で扱う。</p><p>ソースコードの中で <code>int main()</code> の後の <code>{</code> と、最終行の <code>}</code> は対応していて、 <code>{ }</code> の内側が main 関数の内容である。</p><p>今のところは、「<code>{</code> からプログラムが始まって、末尾の<code>}</code> で終わる」と考えれば十分である。</p>`,55),e=[o];function t(c,r,i,D,d,y){return a(),n("div",null,e)}const u=s(p,[["render",t]]);export{F as __pageData,u as default};
