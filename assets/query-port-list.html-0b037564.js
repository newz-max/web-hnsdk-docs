import{_ as t,p as a,q as n,a1 as s}from"./framework-a4e75609.js";const e={},d=s(`<h1 id="模糊查询港口列表" tabindex="-1"><a class="header-anchor" href="#模糊查询港口列表" aria-hidden="true">#</a> 模糊查询港口列表</h1><p>模糊查询港口列表数据</p><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> hnSdk<span class="token punctuation">.</span><span class="token function">queryPortList</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    ctryCode<span class="token operator">:</span> <span class="token string">&quot;CN&quot;</span><span class="token punctuation">,</span>
    kw<span class="token operator">:</span> <span class="token string">&quot;青岛&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> <span class="token string">&quot;res&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><table><thead><tr><th>入参</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>params</td><td>Object</td><td><a href="#params">请求查询参数</a></td></tr></tbody></table><h2 id="params" tabindex="-1"><a class="header-anchor" href="#params" aria-hidden="true">#</a> params</h2><table><thead><tr><th>选项</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>ctryCode</td><td>String</td><td>国家，默认 CN</td></tr><tr><td>kw</td><td>String</td><td>地区，默认青岛</td></tr></tbody></table><h2 id="返回" tabindex="-1"><a class="header-anchor" href="#返回" aria-hidden="true">#</a> 返回</h2><p>Promise&lt;{data : <a href="#response">Response</a>[]}&gt;</p><h2 id="response" tabindex="-1"><a class="header-anchor" href="#response" aria-hidden="true">#</a> Response</h2><table><thead><tr><th>选项</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>aliasNames</td><td>String</td><td>别名</td></tr><tr><td>ctryCode</td><td>String</td><td>国家代码</td></tr><tr><td>ctryNameCn</td><td>String</td><td>国家中文</td></tr><tr><td>ctryNameEn</td><td>String</td><td>国家英文</td></tr><tr><td>nameCn</td><td>String</td><td>地区中文</td></tr><tr><td>nameEn</td><td>String</td><td>地区英文</td></tr><tr><td>namePinyin</td><td>String</td><td>地区拼音</td></tr><tr><td>namePy</td><td>String</td><td>地区首字母</td></tr><tr><td>portCode</td><td>String</td><td>港口代码</td></tr><tr><td>tzOffset</td><td>any</td><td></td></tr></tbody></table>`,12),r=[d];function o(p,i){return a(),n("div",null,r)}const l=t(e,[["render",o],["__file","query-port-list.html.vue"]]);export{l as default};
