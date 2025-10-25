<script setup>
    import { ref, computed } from 'vue'
    
    const plantlist = ref([
      { id: 1, name: '跑步', done: false },
      { id: 2, name: '读书', done: false },
      { id: 3, name: '写代码', done: false },
      { id: 4, name: '学习Vue', done: false }
    ])

    // 计算全选状态
    const isAllSelected = computed({
      get: () => plantlist.value.every(item => item.done),
      
      set: (value) => {
        plantlist.value.forEach(item => {
          item.done = value
        })
      }
    })

    // 反选功能
    const reverseSelected = () => {
      plantlist.value.forEach(item => {
        item.done = !item.done
      })
    }
</script>

<template>
<div class="todo-container">
  <h2 class="title">📋 我的待办清单</h2>
  <div class="controls">
    <div class="checkbox-group">
      <input type="checkbox" id="all" class="checkbox-input" v-model="isAllSelected">
      <label for="all" class="checkbox-label">全选</label>
    </div>
    <button class="reverse-btn" @click="reverseSelected">🔄 反选</button>
  </div>
  <ul class="todo-list">
    <li v-for="item in plantlist" :key="item.id" class="todo-item">
      <input type="checkbox" :id="`task-${item.id}`" class="checkbox-input" v-model="item.done">
      <label :for="`task-${item.id}`" class="task-label">{{ item.name }}</label>
    </li>
  </ul>
</div>
</template>


<style scoped>
  .todo-container {
    max-width: 500px;
    margin: 50px auto;
    padding: 30px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 20px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
  }

  .title {
    text-align: center;
    color: #fff;
    font-size: 28px;
    margin: 0 0 25px 0;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    letter-spacing: 1px;
  }

  .controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    background-color: rgba(255, 255, 255, 0.95);
    border-radius: 12px;
    margin-bottom: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }

  .checkbox-group {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .checkbox-input {
    width: 20px;
    height: 20px;
    cursor: pointer;
    accent-color: #667eea;
  }

  .checkbox-label {
    font-size: 16px;
    font-weight: 600;
    color: #333;
    cursor: pointer;
    user-select: none;
  }

  .reverse-btn {
    padding: 8px 20px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: #fff;
    border: none;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 8px rgba(102, 126, 234, 0.4);
  }

  .reverse-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(102, 126, 234, 0.6);
  }

  .reverse-btn:active {
    transform: translateY(0);
  }

  .todo-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .todo-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 15px 20px;
    margin-bottom: 12px;
    background-color: #fff;
    border-radius: 10px;
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }

  .todo-item:hover {
    transform: translateX(5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  .todo-item:last-child {
    margin-bottom: 0;
  }

  .task-label {
    flex: 1;
    font-size: 16px;
    color: #333;
    cursor: pointer;
    user-select: none;
    transition: all 0.3s ease;
  }

  .checkbox-input:checked + .task-label {
    color: #999;
    text-decoration: line-through;
  }

  .todo-item .checkbox-input:checked {
    accent-color: #28a745;
  }
</style>