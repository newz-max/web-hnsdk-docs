import{_ as t,p as d,q as n,a1 as s}from"./framework-a4e75609.js";const r={},a=s(`<h1 id="查询船舶信息" tabindex="-1"><a class="header-anchor" href="#查询船舶信息" aria-hidden="true">#</a> 查询船舶信息</h1><p>查询船舶信息</p><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> hnSdk<span class="token punctuation">.</span><span class="token function">queryShip</span><span class="token punctuation">(</span><span class="token string">&quot;413384150&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> <span class="token string">&quot;res&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><table><thead><tr><th>入参</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>mmsi</td><td>string</td><td>船舶 mmsi</td></tr></tbody></table><h2 id="返回" tabindex="-1"><a class="header-anchor" href="#返回" aria-hidden="true">#</a> 返回</h2><p>Promise&lt;{data : <a href="#response">Response</a>}&gt;</p><h2 id="response" tabindex="-1"><a class="header-anchor" href="#response" aria-hidden="true">#</a> Response</h2><table><thead><tr><th>选项</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>vesselType</td><td>string</td><td>船只类型</td></tr><tr><td>vesselTypeNameCn</td><td>string</td><td>船只类型中文</td></tr><tr><td>vesselTypeNameEn</td><td>string</td><td>船只类型英文</td></tr><tr><td>vesselSubType</td><td>string</td><td>船只子类型</td></tr><tr><td>vesselSubTypeNameCn</td><td>string</td><td>船只子类型中文</td></tr><tr><td>vesselSubTypeNameEn</td><td>string</td><td>船只子类型英文</td></tr><tr><td>imo</td><td>string</td><td>imo</td></tr><tr><td>callsign</td><td>string</td><td>呼号</td></tr><tr><td>nameEn</td><td>string</td><td>船舶英文名</td></tr><tr><td>nameCn</td><td>string</td><td>船舶中文名</td></tr><tr><td>flagCtry</td><td>string</td><td>国家国旗</td></tr><tr><td>flagCtryNameCn</td><td>string</td><td>国家国旗中文</td></tr><tr><td>flagCtryNameEn</td><td>string</td><td>国家国旗英文</td></tr><tr><td>classSociety</td><td>string</td><td>未知</td></tr><tr><td>classSocietyNameCn</td><td>string</td><td>未知</td></tr><tr><td>classSocietyNameEn</td><td>string</td><td>未知</td></tr><tr><td>buildYear</td><td>string</td><td>建造年</td></tr><tr><td>buildYearMonth</td><td>string</td><td>建造月</td></tr><tr><td>operatorBody</td><td>string</td><td>未知</td></tr><tr><td>operatorBodyCn</td><td>string</td><td>未知</td></tr><tr><td>manageBody</td><td>string</td><td>未知</td></tr><tr><td>manageBodyCn</td><td>string</td><td>未知</td></tr><tr><td>ownerBody</td><td>string</td><td>未知</td></tr><tr><td>ownerBodyCn</td><td>string</td><td>未知</td></tr><tr><td>fleetBody</td><td>string</td><td>未知</td></tr><tr><td>shipStatus</td><td>string</td><td>船舶状态</td></tr><tr><td>mmsi</td><td>number</td><td>mmsi</td></tr><tr><td>vesselMmsi</td><td>number</td><td>船舶 mmsi</td></tr><tr><td>dwt</td><td>number</td><td>载重吨</td></tr><tr><td>grt</td><td>number</td><td>容积总吨</td></tr><tr><td>net</td><td>number</td><td>未知</td></tr><tr><td>length</td><td>number</td><td>船长</td></tr><tr><td>width</td><td>number</td><td>船宽</td></tr><tr><td>height</td><td>number</td><td>船高</td></tr><tr><td>draught</td><td>number</td><td>吃水</td></tr><tr><td>speed</td><td>number</td><td>船速</td></tr><tr><td>calibre</td><td>number</td><td>口径</td></tr><tr><td>retireYearMonth</td><td>number</td><td>退休年月</td></tr><tr><td>nextMmsi</td><td>number</td><td>下一个</td></tr><tr><td>totalBunkerCapacity</td><td>number</td><td>未知</td></tr></tbody></table>`,10),e=[a];function i(o,p){return d(),n("div",null,e)}const l=t(r,[["render",i],["__file","query-ship.html.vue"]]);export{l as default};
