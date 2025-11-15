<script setup>
import { ref } from 'vue';

// 接收父组件传递的事件
const emit = defineEmits(['add-todo']);

// 输入框内容
const newTodoText = ref('');

// 添加待办事项
const handleAdd = () => {
  if (newTodoText.value.trim()) {
    // 子传父：触发事件，传递数据
    emit('add-todo', newTodoText.value);
    newTodoText.value = '';
  }
};

// 回车添加
const handleKeyup = (e) => {
  if (e.key === 'Enter') {
    handleAdd();
  }
};
</script>

<template>
<header class="header">
    <h1>比特人的记事本</h1>
    <input 
      v-model="newTodoText"
      @keyup="handleKeyup"
      class="new-todo" 
      placeholder="What needs to be finished?" 
      autofocus
    />
</header>
</template>

<style scoped>
.header {
  padding: 40px 30px 30px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.header h1 {
  width: 100%;
  font-size: 56px;
  font-weight: 200;
  text-align: center;
  color: #fff;
  margin: 0 0 20px 0;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  letter-spacing: 2px;
}

.new-todo {
  width: 100%;
  padding: 16px 20px;
  border: none;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  font-size: 18px;
  box-sizing: border-box;
  transition: all 0.3s ease;
}

.new-todo::placeholder {
  color: #aaa;
}

.new-todo:focus {
  outline: none;
  background: #fff;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
  transform: translateY(-1px);
}
</style>