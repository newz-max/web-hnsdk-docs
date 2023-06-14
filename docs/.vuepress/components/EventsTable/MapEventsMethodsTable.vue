<template>
    <h2 id="MapEventMethods">MapEventMethods</h2>
    
    <table>
    <FunctionReturnSynopsisHeader />

    <tbody>

<tr>
        <td>{{`on(<String> type, <Function> fn, <Object> context?)	`}}</td>
        <td>{{`this`}}</td>
        <td>{{`	为对象的特定事件类型添加一个监听函数（fn）。你可以选择性地指定监听器的上下文（这个关键字将指向的对象）。你也可以传递几个空格分隔的类型（例如，'click dblclick'）。`}}</td>
</tr>
<tr>
<td>{{`on(<Object> eventMap)	`}}</td>
<td>{{`this`}}</td>
<td>{{`	添加一组 type/listener，例如 {click: onClick, mousemove: onMouseMove}。`}}</td>
</tr>
<tr>
<td>{{`off(<String> type, <Function> fn?, <Object> context?)	`}}</td>
<td>{{`this`}}</td>
<td>{{`	移除一个先前添加的监听器函数。如果没有指定函数，它将从对象中删除该特定事件的所有监听器。请注意，如果您向 on 传递了一个自定义的上下文，您必须向 off 传递相同的上下文，以便删除监听器。`}}</td>
</tr>
<tr>
<td>{{`off(<Object> eventMap)	`}}</td>
<td>{{`this`}}</td>
<td>{{`	删除一组 type/listener`}}</td>
</tr>
<tr>
<td>{{`off()	`}}</td>
<td>{{`this`}}</td>
<td>{{`	移除该对象上所有事件的所有监听器。这包括隐含的附加事件。`}}</td>
</tr>
<tr>
<td>{{`fire(<String> type, <Object> data?, <Boolean> propagate?)	`}}</td>
<td>{{`this`}}</td>
<td>{{`	触发指定类型的事件。您可以选择提供一个数据对象——侦听器函数的第一个参数将包含其属性，事件可以选择性地传播到事件父级。`}}</td>
</tr>    
<tr>
<td>{{'listens(<String> type, <Boolean> propagate?)	'}}</td>
<td>{{'Boolean	'}}</td>
<td>{{'如果一个特定的事件类型有任何监听器连接到它，则返回 true。验证可以选择性地被传播，如果父级有监听器连接到它，它将返回true。'}}</td>
</tr>
<tr>
<td>{{'once(…)	'}}</td>
<td>{{'this'}}</td>
<td>{{'行为与on(…)相同，除了 listener 只会被触发一次然后被删除。'}}</td>
</tr>
<tr>
<td>{{'addEventParent(<Evented> obj)	'}}</td>
<td>{{'this'}}</td>
<td>{{'再父级添加一个事件-将接收传播事件的 Evented。'}}</td>
</tr>
<tr>
<td>{{'removeEventParent(<Evented> obj)	'}}</td>
<td>{{'this'}}</td>
<td>{{'删除父级事件，因此它将停止接收传播的事件'}}</td>
</tr>
<tr>
<td>{{'addEventListener(…)	'}}</td>
<td>{{'this'}}</td>
<td>{{'同on(…)'}}</td>
</tr>
<tr>
<td>{{'removeEventListener(…)	'}}</td>
<td>{{'this'}}</td>
<td>{{'同off(…)'}}</td>
</tr>
<tr>
<td>{{'clearAllEventListeners(…)	'}}</td>
<td>{{'this'}}</td>
<td>{{'同off()'}}</td>
</tr>
<tr>
<td>{{'addOneTimeEventListener(…)	'}}</td>
<td>{{'this'}}</td>
<td>{{'同once(…)'}}</td>
</tr>
<tr>
<td>{{'fireEvent(…)	'}}</td>
<td>{{'this'}}</td>
<td>{{'同fire(…)'}}</td>
</tr>
<tr>
<td>{{'hasEventListeners(…)	'}}</td>
<td>{{'Boolean	'}}</td>
<td>{{'同listens(…)'}}</td>
</tr>
    </tbody>
    </table>
</template>

<script lang="ts" setup>
import FunctionReturnSynopsisHeader from '../CommonTable/FunctionReturnSynopsisHeader.vue'
</script>
 
<style lang="scss" scoped>
</style>