# Tooltip 工具提示
用于在地图图层顶部显示小文本。

<h2 id="tooltip-example">使用示例</h2>

```js
marker.bindTooltip("my tooltip text").openTooltip();
```

<p>关于工具提示（tootip）偏移，Leaflet 在计算工具提示偏移时考虑了两个选项：</p>

<ul>
	<li>工具提示（tooltip）的 <code>offset</code> 选项：它默认为 [0,0]，并且它只针对于一个工具提示。添加正 x 偏移以将工具提示向右移动，并添加正 y 偏移以将其移动到底部，负数将移动到左侧和顶部。</li>
	<li>Icon 的 <code>tooltipAnchor</code> 选项：只适用于 Marker。你如果你使用一个自定义的图标，应该调整这个值。</li>
</ul>

<TooltioCreation />

<TooltipOptions />