<template>
<div class="container">
  <h3>🎁 礼物清单</h3>
  <table class="gift-table">
    <thead>
      <tr>
        <th>名字</th>
        <th>数量</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="good in goodlists" :key="good.id">
        <td>{{ good.name }}</td>
        <td>{{ good.num }}</td>
      </tr>
      <tr class="total-row">
        <td>总数量</td>
        <td>{{ totalNum }}</td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script setup>
    import { computed } from 'vue'

    const goodlists = [
      {id:1,name:'苹果',num:8},
      {id:2,name:'香蕉',num:5},
      {id:3,name:'橘子',num:6},
      {id:4,name:'葡萄',num:7},
    ]
    //计算属性必须有返回值
    const totalNum = computed(()=>{
      return goodlists.reduce((sum,good)=>{
        return sum + good.num
      },0)
    })


</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 40px auto;
  padding: 30px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

h3 {
  text-align: center;
  color: #fff;
  font-size: 28px;
  margin-bottom: 25px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  letter-spacing: 1px;
}

.gift-table {
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.gift-table thead {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.gift-table thead th {
  padding: 16px;
  text-align: left;
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.gift-table tbody tr {
  border-bottom: 1px solid #e0e0e0;
  transition: all 0.3s ease;
}

.gift-table tbody tr:hover {
  background-color: #f5f5f5;
  transform: scale(1.02);
}

.gift-table tbody tr:last-child {
  border-bottom: none;
}

.gift-table td {
  padding: 14px 16px;
  font-size: 15px;
  color: #333;
}

.total-row {
  background-color: #f0f4ff !important;
  font-weight: 600;
  border-top: 2px solid #667eea !important;
}

.total-row td {
  color: #667eea;
  font-size: 16px;
}

.total-row:hover {
  background-color: #e8eeff !important;
}
</style>