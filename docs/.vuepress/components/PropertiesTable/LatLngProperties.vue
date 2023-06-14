<template>
  <h2 id="latlng-property">Properties 属性</h2>

  <table>
    <AttributeTypeSynopsisHeader />

    <tbody>
      <tr id="latlng-lat">
        <td>
          <code><b>lat</b></code
          ><a data-anchor="latlng-lat"></a>
        </td>
        <td><code>Number</code></td>
        <td>纬度（度）</td>
      </tr>
      <tr id="latlng-lng">
        <td>
          <code><b>lng</b></code
          ><a data-anchor="latlng-lng"></a>
        </td>
        <td><code>Number</code></td>
        <td>经度（度）</td>
      </tr>
      <tr id="latlng-alt">
        <td>
          <code><b>alt</b></code
          ><a data-anchor="latlng-alt"></a>
        </td>
        <td><code>Number</code></td>
        <td>海拔高度，以米为单位（可选）</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import AttributeTypeSynopsisHeader from "../CommonTable/AttributeTypeSynopsisHeader.vue";
</script>

<style lang="scss" scoped></style>
