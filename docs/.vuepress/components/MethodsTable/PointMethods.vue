<template>
  <h2 v-show="showH2" id="latlng-method">Methods 方法</h2>

  <table>
    <FunctionReturnSynopsisHeader />

    <tbody>
      <tr id="point-clone">
        <td>
          <code><b>clone</b>()</code><a data-anchor="point-clone"></a>
        </td>
        <td>
          <code><a href="#point">Point</a></code>
        </td>
        <td><p>返回当前点的拷贝。</p></td>
      </tr>
      <tr id="point-add">
        <td>
          <code
            ><b>add</b>(<nobr>&lt;<a href="#point">Point</a>&gt;</nobr>
            <i>otherPoint</i>)</code
          ><a data-anchor="point-add"></a>
        </td>
        <td>
          <code><a href="#point">Point</a></code>
        </td>
        <td><p>返回当前点和给定点的相加结果。</p></td>
      </tr>
      <tr id="point-subtract">
        <td>
          <code
            ><b>subtract</b>(<nobr>&lt;<a href="#point">Point</a>&gt;</nobr>
            <i>otherPoint</i>)</code
          ><a data-anchor="point-subtract"></a>
        </td>
        <td>
          <code><a href="#point">Point</a></code>
        </td>
        <td><p>返回给定点与当前点相减的结果。</p></td>
      </tr>
      <tr id="point-divideby">
        <td>
          <code><b>divideBy</b>(<nobr>&lt;Number&gt;</nobr> <i>num</i>)</code
          ><a data-anchor="point-divideby"></a>
        </td>
        <td>
          <code><a href="#point">Point</a></code>
        </td>
        <td><p>返回当前点除以给定数字的结果。</p></td>
      </tr>
      <tr id="point-multiplyby">
        <td>
          <code><b>multiplyBy</b>(<nobr>&lt;Number&gt;</nobr> <i>num</i>)</code
          ><a data-anchor="point-multiplyby"></a>
        </td>
        <td>
          <code><a href="#point">Point</a></code>
        </td>
        <td><p>返回当前点与给定数字相乘的结果。</p></td>
      </tr>
      <tr id="point-scaleby">
        <td>
          <code
            ><b>scaleBy</b>(<nobr>&lt;<a href="#point">Point</a>&gt;</nobr>
            <i>scale</i>)</code
          ><a data-anchor="point-scaleby"></a>
        </td>
        <td>
          <code><a href="#point">Point</a></code>
        </td>
        <td>
          <p>
            将当前点的每个坐标与
            <code>scale</code>的每个坐标相乘。用线性代数术语来说，就是用点乘以
            <code>scale</code> 所定义的
            <a
              href="https://en.wikipedia.org/wiki/Scaling_%28geometry%29#Matrix_representation"
              >缩放矩阵</a
            >
            。
          </p>
        </td>
      </tr>
      <tr id="point-unscaleby">
        <td>
          <code
            ><b>unscaleBy</b>(<nobr>&lt;<a href="#point">Point</a>&gt;</nobr>
            <i>scale</i>)</code
          ><a data-anchor="point-unscaleby"></a>
        </td>
        <td>
          <code><a href="#point">Point</a></code>
        </td>
        <td>
          <p>
            <code>scaleBy</code>的倒数。将当前点的每个坐标除以
            <code>scale</code>的每个坐标。
          </p>
        </td>
      </tr>
      <tr id="point-round">
        <td>
          <code><b>round</b>()</code><a data-anchor="point-round"></a>
        </td>
        <td>
          <code><a href="#point">Point</a></code>
        </td>
        <td><p>返回具有圆角坐标的当前点的拷贝。</p></td>
      </tr>
      <tr id="point-floor">
        <td>
          <code><b>floor</b>()</code><a data-anchor="point-floor"></a>
        </td>
        <td>
          <code><a href="#point">Point</a></code>
        </td>
        <td><p>返回具有浮动坐标的当前点的拷贝（向下舍入）。</p></td>
      </tr>
      <tr id="point-ceil">
        <td>
          <code><b>ceil</b>()</code><a data-anchor="point-ceil"></a>
        </td>
        <td>
          <code><a href="#point">Point</a></code>
        </td>
        <td><p>返回当前点的拷贝，坐标为最高值（四舍五入）。</p></td>
      </tr>
      <tr id="point-trunc">
        <td>
          <code><b>trunc</b>()</code><a data-anchor="point-trunc"></a>
        </td>
        <td>
          <code><a href="#point">Point</a></code>
        </td>
        <td><p>返回具有截断坐标的当前点的拷贝（四舍五入为零）。</p></td>
      </tr>
      <tr id="point-distanceto">
        <td>
          <code
            ><b>distanceTo</b>(<nobr>&lt;<a href="#point">Point</a>&gt;</nobr>
            <i>otherPoint</i>)</code
          ><a data-anchor="point-distanceto"></a>
        </td>
        <td><code>Number</code></td>
        <td><p>返回当前点和给定点之间的笛卡尔距离。</p></td>
      </tr>
      <tr id="point-equals">
        <td>
          <code
            ><b>equals</b>(<nobr>&lt;<a href="#point">Point</a>&gt;</nobr>
            <i>otherPoint</i>)</code
          ><a data-anchor="point-equals"></a>
        </td>
        <td><code>Boolean</code></td>
        <td>
          <p>如果给定的点具有相同的坐标，则返回 <code>true</code> 。</p>
        </td>
      </tr>
      <tr id="point-contains">
        <td>
          <code
            ><b>contains</b>(<nobr>&lt;<a href="#point">Point</a>&gt;</nobr>
            <i>otherPoint</i>)</code
          ><a data-anchor="point-contains"></a>
        </td>
        <td><code>Boolean</code></td>
        <td>
          <p>
            如果给定点的两个坐标都小于相应的当前点坐标（绝对值），则返回
            <code>true</code> 。
          </p>
        </td>
      </tr>
      <tr id="point-tostring">
        <td>
          <code><b>toString</b>()</code><a data-anchor="point-tostring"></a>
        </td>
        <td><code>String</code></td>
        <td><p>返回点的字符串表示，用于调试目的。</p></td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import FunctionReturnSynopsisHeader from "../CommonTable/FunctionReturnSynopsisHeader.vue";

interface Props {
  showH2?: boolean;
}
defineProps<Props>();
</script>

<style lang="scss" scoped></style>
