<script setup>
    import { ref, computed } from 'vue'
    const goodsList = ref([
      { id: 190, name: '魏家凉皮', price: 10, num: 2 },
      { id: 237, name: '肉夹馍', price: 11, num: 3 },
      { id: 163, name: '冰峰', price: 3, num: 2 }
    ])

    // 计算总价
    const totalPrice = computed(() => {
      return goodsList.value.reduce((sum, item) => {
        return sum + (item.price * item.num)
      }, 0)
    })

    const totalNum = computed(() => {
      return goodsList.value.reduce((sum, item) => {
        return sum + item.num
      }, 0)
    })

    const deleteitem = (id) => {
      goodsList.value = goodsList.value.filter(item => item.id !== id)
    }

    const name = ref('')
    const price = ref()
    const num = ref()

    const addItem = () => {
      if (name.value && price.value > 0 && num.value > 0) {
        const newItem = {
          id: Date.now(),
          name: name.value,
          price: parseFloat(price.value),
          num: parseInt(num.value)
        }
        goodsList.value.push(newItem)
        // 清空输入框
        name.value = ''
        price.value = null
        num.value = null
      } else {
        alert('请填写完整的商品信息，且价格和数量必须大于0')
      }
    }
</script>

<template>
  <div class="good-container">
    <div class="header">
      <h2>🛒 商品购物车</h2>
    </div>
    
    <div class="table-wrapper">
      <table class="goods-table">
        <thead>
          <tr>
            <th>序号</th>
            <th>名称</th>
            <th>价格</th>
            <th>数量</th>
            <th>小计</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in goodsList" :key="item.id" class="table-row">
            <td class="center">{{ index + 1 }}</td>
            <td>{{ item.name }}</td>
            <td class="center">¥{{ item.price }}</td>
            <td class="center">{{ item.num }}</td>
            <td :class="['price', { 'high-price': item.price * item.num > 30 }]">¥{{ item.price * item.num }}</td>
            <td class="center"><button class="btn-delete" @click="deleteitem(item.id)">删除</button></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="summary">
      <div class="summary-item">
        <span class="label">总数量：</span>
        <span class="value">{{ totalNum }}</span>
      </div>
      <div class="summary-item">
        <span class="label">总金额：</span>
        <span class="price-value">¥{{ totalPrice.toFixed(2) }}</span>
      </div>
    </div>

    <form class="add-form">
      <h3>➕ 新增商品</h3>
      <div class="form-item">
        <label class="label">名称：</label>
        <div class="input">
          <input
            type="text"
            placeholder="请输入商品名称"
            class="form-input"
            v-model ="name"
          />
        </div>
      </div>

      <div class="form-item">
        <label class="label">价格：</label>
        <div class="input">
          <input
            type="number"
            placeholder="请输入价格"
            class="form-input"
            v-model = "price"
          />
        </div>
      </div>

      <div class="form-item">
        <label class="label">数量：</label>
        <div class="input">
          <input
            type="number"
            placeholder="请输入数量"
            class="form-input"
            v-model = "num"
          />
        </div>
      </div>

      <div class="form-item">
        <label class="label"></label>
        <div class="input">
          <button type="button" class="btn-add" @click.prevent="addItem" >新增商品</button>
        </div>
      </div>
    </form>
  </div>
</template>


<style scoped>
  .good-container {
    max-width: 1000px;
    margin: 40px auto;
    padding: 30px;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }

  .header {
    text-align: center;
    margin-bottom: 30px;
  }

  .header h2 {
    color: #333;
    font-size: 32px;
    margin: 0;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  }

  .table-wrapper {
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
  }

  .goods-table {
    width: 100%;
    border-collapse: collapse;
  }

  .goods-table thead {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }

  .goods-table thead th {
    padding: 16px;
    text-align: left;
    color: #fff;
    font-weight: 600;
    font-size: 15px;
  }

  .goods-table tbody tr {
    border-bottom: 1px solid #e0e0e0;
    transition: all 0.3s ease;
  }

  .goods-table tbody tr:hover {
    background-color: #f9f9f9;
    transform: scale(1.01);
  }

  .goods-table tbody tr:last-child {
    border-bottom: none;
  }

  .goods-table td {
    padding: 14px 16px;
    color: #333;
    font-size: 14px;
  }

  .table-row:nth-child(even) {
    background-color: #f5f5f5;
  }

  .center {
    text-align: center;
  }

  .price {
    color: #e74c3c;
    font-weight: 600;
  }

  .high-price {
    color: #d32f2f !important;
    font-weight: 700;
    font-size: 16px;
  }

  .btn-delete {
    padding: 6px 12px;
    background-color: #e74c3c;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 12px;
    transition: all 0.3s ease;
  }

  .btn-delete:hover {
    background-color: #c0392b;
    transform: scale(1.05);
  }

  .summary {
    display: flex;
    gap: 30px;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    margin-bottom: 30px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }

  .summary-item {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 16px;
  }

  .summary-item .label {
    font-weight: 600;
    color: #666;
  }

  .summary-item .value {
    color: #333;
    font-weight: bold;
  }

  .price-value {
    color: #e74c3c;
    font-size: 20px;
    font-weight: 700;
  }

  .add-form {
    background-color: #fff;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }

  .add-form h3 {
    margin: 0 0 20px 0;
    color: #333;
    font-size: 18px;
  }

  .form-item {
    display: flex;
    gap: 20px;
    margin-bottom: 16px;
    align-items: center;
  }

  .form-item:last-child {
    margin-bottom: 0;
  }

  .form-item .label {
    width: 80px;
    font-weight: 600;
    color: #333;
  }

  .form-item .input {
    flex: 1;
  }

  .form-input {
    width: 100%;
    padding: 10px 12px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 14px;
    transition: all 0.3s ease;
    box-sizing: border-box;
  }

  .form-input:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  .btn-add {
    padding: 10px 24px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: #fff;
    border: none;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 10px rgba(102, 126, 234, 0.4);
    width: 100%;
  }

  .btn-add:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(102, 126, 234, 0.6);
  }

  .btn-add:active {
    transform: translateY(0);
  }
</style>