<template>
  <table>
    <thead>
      <tr>
        <th>入参</th>
        <th>类型</th>
        <th>描述</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>origin</td>
        <td>
          <a href="#coord" rel="noopener noreferrer"
            >Coord<svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              x="0px"
              y="0px"
              viewBox="0 0 100 100"
              width="15"
              height="15"
              class="icon outbound"
            >
              <path
                fill="currentColor"
                d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
              ></path>
              <polygon
                fill="currentColor"
                points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
              ></polygon>
            </svg>
          </a>
          |
          <a href="#geojson" rel="noopener noreferrer"
            >GeoJSON<svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              x="0px"
              y="0px"
              viewBox="0 0 100 100"
              width="15"
              height="15"
              class="icon outbound"
            >
              <path
                fill="currentColor"
                d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
              ></path>
              <polygon
                fill="currentColor"
                points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
              ></polygon></svg
          ></a>
        </td>
        <td>起始点，即参照物</td>
      </tr>
      <tr>
        <td>distance</td>
        <td>Number</td>
        <td>和起始点的距离</td>
      </tr>
      <tr>
        <td>bearing</td>
        <td>Number</td>
        <td>介于 -180 至 180 之间</td>
      </tr>
      <tr>
        <td>options</td>
        <td>Object</td>
        <td>可配置项</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
</script>
