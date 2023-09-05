<template>
  <table>
    <thead>
      <tr>
        <th>选项</th>
        <th>类型</th>
        <th>说明</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>iconUrl</td>
        <td>String</td>
        <td>
          自定义的图标地址，如果创建图标时设置了iconUrl则会使用该地址的图片作为标记图标
        </td>
      </tr>

      <tr>
        <td>latlng</td>
        <td>
          <code><a href="#LatLng">LatLng</a></code>
        </td>
        <td>marker 当前的经纬度</td>
      </tr>
      <tr>
        <td>marker</td>
        <td>
          <code><a href="#Marker">Marker</a></code>
        </td>
        <td>返回的 marker 实例，同 hnsdk.marker</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup></script>
