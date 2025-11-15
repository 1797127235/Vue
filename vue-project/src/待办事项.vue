<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import TodoHeader from './components/TodoHeader.vue';
import TodoMain from './components/TodoMain.vue';
import TodoFooter from './components/TodoFooter.vue';

// localStorage 的键名
const STORAGE_KEY = 'vue-todo-app';

// 从 localStorage 加载数据
const loadTodos = () => {
  const savedTodos = localStorage.getItem(STORAGE_KEY);
  if (savedTodos) {
    try {
      return JSON.parse(savedTodos);
    } catch (e) {
      console.error('Failed to parse todos from localStorage:', e);
      return [];
    }
  }
  // 默认数据
  return [
    { id: 1, text: '学Vue组件通信', completed: false },
    { id: 2, text: '打王者', completed: true },
    { id: 3, text: '写代码', completed: false }
  ];
};

// 待办事项列表（从 localStorage 初始化）
const todos = ref(loadTodos());

// 当前过滤器
const filter = ref('all'); // 'all', 'active', 'completed'

// 监听 todos 变化，自动保存到 localStorage
watch(
  todos,
  (newTodos) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newTodos));
  },
  { deep: true } // 深度监听数组内部对象的变化
);

// 计算属性：过滤后的待办事项
const filteredTodos = computed(() => {
  if (filter.value === 'active') {
    return todos.value.filter(todo => !todo.completed);
  } else if (filter.value === 'completed') {
    return todos.value.filter(todo => todo.completed);
  }
  return todos.value;
});

// 计算属性：剩余未完成数量
const remainingCount = computed(() => {
  return todos.value.filter(todo => !todo.completed).length;
});

// 计算属性：已完成数量
const completedCount = computed(() => {
  return todos.value.filter(todo => todo.completed).length;
});

// 计算属性：是否全部完成
const allCompleted = computed({
  get: () => todos.value.every(todo => todo.completed),
  set: (value) => {
    todos.value.forEach(todo => {
      todo.completed = value;
    });
  }
});

// 添加新待办事项
const addTodo = (text) => {
  if (text.trim()) {
    todos.value.push({
      id: Date.now(),
      text: text.trim(),
      completed: false
    });
  }
};

// 删除待办事项
const removeTodo = (id) => {
  todos.value = todos.value.filter(todo => todo.id !== id);
};

// 切换待办事项完成状态
const toggleTodo = (id) => {
  const todo = todos.value.find(todo => todo.id === id);
  if (todo) {
    todo.completed = !todo.completed;
  }
};

// 切换全选
const toggleAll = (value) => {
  allCompleted.value = value;
};

// 改变过滤器
const changeFilter = (newFilter) => {
  filter.value = newFilter;
};

// 清除已完成
const clearCompleted = () => {
  todos.value = todos.value.filter(todo => !todo.completed);
};

// 组件挂载时的提示
onMounted(() => {
  console.log('✅ 数据持久化已启用：todos 数据将自动保存到 localStorage');
});
</script>

<template>
<div class="app-wrapper">
  <section class="todoapp">
    <!-- 父传子：传递 addTodo 方法 -->
    <TodoHeader @add-todo="addTodo" />
    
    <!-- 父传子：传递 todos 数据和相关方法 -->
    <TodoMain 
      :todos="filteredTodos"
      :all-completed="allCompleted"
      @toggle-todo="toggleTodo"
      @remove-todo="removeTodo"
      @toggle-all="toggleAll"
    />
    
    <!-- 父传子：传递统计数据和过滤器状态 -->
    <TodoFooter 
      :remaining-count="remainingCount"
      :completed-count="completedCount"
      :current-filter="filter"
      @change-filter="changeFilter"
      @clear-completed="clearCompleted"
    />
  </section>  
</div>
</template>

<style scoped>
.app-wrapper {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 40px 20px;
}

.todoapp {
  max-width: 600px;
  margin: 0 auto;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3),
              0 10px 30px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  transition: transform 0.3s ease;
}

.todoapp:hover {
  transform: translateY(-2px);
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.35),
              0 15px 35px rgba(0, 0, 0, 0.25);
}
</style>