<template>
<div>
  
  <!-- <ul>
    <li v-for="(item,index) in nums">
      {{ item }} => {{ index }}
    </li>
  </ul> -->

  <div class="goods-list">
    <div class="goods-item" v-for="item in goodsList">
      <p>id = {{ item.id }} </p>
      <p>name = {{ item.name }} </p>
      <p>price = {{ item.price }}</p>
    </div>
  </div>

  <div class = "obj">
    <ul>
      <li v-for="(value,key,index) in obj">
        {{ value }} => {{ key }} => {{ index }}
      </li>
    </ul>
  </div>

  <ul>
    <li v-for = "(item,index) in 5">
      {{ item }} => {{ index }}
    </li>
  </ul>


</div>
</template>

<script setup>
    import {ref} from 'vue'
    //数字数组
    const nums = ref([11,22,33,44])
    //遍历对象数组
    const goodsList = ref([
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
    ]
    )

    //遍历对象
    const obj = {
    id: 10001,
    name: 'bit',
    age:9
  }

</script>

<style scoped>

</style>