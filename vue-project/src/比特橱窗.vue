<template>
<div>
  <table>
    <caption>
      <h3>比特人的橱窗</h3>
    </caption>
    
    <thead>
      <tr>
        <th>商品名称</th>
        <th>商品价格</th>
        <th>操作</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="item,index in goodList" :key="item.id">
        <td>{{ item.name }}</td>
        <td>{{ item.price }}</td>
        <td><button @click="del(index)">删除</button></td>
      </tr>
    </tbody>

    <tfoot>
      <tr>
        <td colspan="3">暂无数据了</td>
      </tr>
    </tfoot>

  </table>
</div>
</template>

<script setup>
    import {ref} from 'vue'
    //商品列表
    const goodList = ref([
      {
        id:1,
        name:"篮球",
        price:299
      },
      {
        id:2,
        name:"足球",
        price:199
      },
      {
        id:3,
        name:"排球",
        price:99
      }
    ])

    const del = (index) =>{
      if(window.confirm("确认删除吗？"))
      goodList.value.splice(index,1)
    }
</script>

<style scoped lang="scss">

</style>