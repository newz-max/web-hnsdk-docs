import{_ as t,M as e,p as c,q as o,N as p,a1 as i,R as a,t as n}from"./framework-a4e75609.js";const d={},l=i(`<h1 id="创建圆" tabindex="-1"><a class="header-anchor" href="#创建圆" aria-hidden="true">#</a> 创建圆</h1><p>调用后直接在地图上操作即可</p><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> layer <span class="token operator">=</span> hnsdk<span class="token punctuation">.</span><span class="token function">createCircle</span><span class="token punctuation">(</span>map<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">// 绘制完成后触发</span>
  <span class="token function">drawEndCallBack</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      layer<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 删除图层</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><table><thead><tr><th>入参</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>map</td><td>Map</td><td>map 实例</td></tr><tr><td>options</td><td>object</td><td>初始化选项</td></tr></tbody></table><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> options</h2><table><thead><tr><th>选项</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>drawEndCallBack</td><td>function</td><td>绘制完成后触发的回调函数有一个事件对象作为入参</td></tr></tbody></table><h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2>`,9),r=a("h2",{id:"返回",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#返回","aria-hidden":"true"},"#"),n(" 返回")],-1),u=a("p",null,[a("code",null,"Circle"),n(" 圆实例对象")],-1);function h(k,m){const s=e("LayerMethodsTable");return c(),o("div",null,[l,p(s),r,u])}const v=t(d,[["render",h],["__file","create-circle.html.vue"]]);export{v as default};
