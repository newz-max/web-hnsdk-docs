import{_ as t,M as n,p as e,q as o,N as a,a1 as c}from"./framework-a4e75609.js";const i={},u=c(`<h1 id="popup-弹出窗口" tabindex="-1"><a class="header-anchor" href="#popup-弹出窗口" aria-hidden="true">#</a> Popup 弹出窗口</h1><p>用于在地图的某些位置打开弹出窗口。使用 <a href="#map-openpopup">Map.openPopup</a> 打开弹出窗口，同时确保一次只打开一个弹出窗口（推荐使用），或者使用 <a href="#map-addlayer">Map.addLayer</a> 打开任意多个。</p><h2 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例" aria-hidden="true">#</a> 使用示例</h2><p>如果您只想将弹出窗口（popup）绑定到标记（marker）单击然后打开它，这其实很简单：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>marker<span class="token punctuation">.</span><span class="token function">bindPopup</span><span class="token punctuation">(</span>popupContent<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">openPopup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>像折线（polylines）这样的路径叠加也有一个 <code>bindPopup</code> 方法。这是在地图上打开弹出窗口的更复杂的方法：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> popup <span class="token operator">=</span> hnsdk<span class="token punctuation">.</span><span class="token function">popup</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">setLatLng</span><span class="token punctuation">(</span>latlng<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">setContent</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;p&gt;Hello world!&lt;br /&gt;This is a nice popup.&lt;/p&gt;&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">openOn</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function l(r,d){const s=n("PopupCreation"),p=n("PopupOptions");return e(),o("div",null,[u,a(s),a(p)])}const v=t(i,[["render",l],["__file","popup.html.vue"]]);export{v as default};