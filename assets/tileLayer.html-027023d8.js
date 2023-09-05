import{_ as t,M as a,p as o,q as p,N as n,a1 as c}from"./framework-a4e75609.js";const r={},i=c(`<h1 id="tilelayer" tabindex="-1"><a class="header-anchor" href="#tilelayer" aria-hidden="true">#</a> TileLayer</h1><p>用于在地图上加载和显示瓦片图层。 请注意，大多数tile服务器都需要属性，可以自定义配置</p><h2 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例" aria-hidden="true">#</a> 使用示例</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>hnsdk<span class="token punctuation">.</span><span class="token function">tileLayer</span><span class="token punctuation">(</span><span class="token string">&#39;https://tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">attribution</span><span class="token operator">:</span> <span class="token string">&#39;&amp;copy; &lt;a href=&quot;https://www.openstreetmap.org/copyright&quot;&gt;OpenStreetMap&lt;/a&gt; contributors&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addTo</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="url-模板" tabindex="-1"><a class="header-anchor" href="#url-模板" aria-hidden="true">#</a> URL 模板</h3><p>表现为以下方式:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&#39;https://{s}.somedomain.com/blabla/{z}/{x}/{y}{r}.png&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><code>{s}</code> 是指可用的子域之一（按顺序使用，以帮助解决每个域的浏览器并行请求限制；子域值在选项中指定;默认为 <code>a</code>, <code>b</code> 或 <code>c</code> , 可以省略), <code>{z}</code> — 缩放级别, <code>{x}</code> 和 <code>{y}</code> — 瓦片坐标。 <code>{r}</code> 可以用来在URL中添加 &quot;@2x&quot; 以加载视网膜瓦片。</p></blockquote><p>您可以在模板中使用自定义键，这些键将通过 TileLayer 选项进行 <a href="">evaluated</a> ，如下所示：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>hnsdk<span class="token punctuation">.</span><span class="token function">tileLayer</span><span class="token punctuation">(</span><span class="token string">&#39;https://{s}.somedomain.com/{foo}/{z}/{x}/{y}.png&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,10);function l(d,u){const s=a("TileLayerCreation"),e=a("TileLayerOptions");return o(),p("div",null,[i,n(s),n(e)])}const h=t(r,[["render",l],["__file","tileLayer.html.vue"]]);export{h as default};