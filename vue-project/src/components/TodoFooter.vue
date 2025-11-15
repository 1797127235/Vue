<script setup>
// 接收父组件传递的 props
const props = defineProps({
  remainingCount: {
    type: Number,
    default: 0
  },
  completedCount: {
    type: Number,
    default: 0
  },
  currentFilter: {
    type: String,
    default: 'all'
  }
});

// 定义事件
const emit = defineEmits(['change-filter', 'clear-completed']);

// 改变过滤器
const handleFilterChange = (filter) => {
  emit('change-filter', filter);
};

// 清除已完成
const handleClearCompleted = () => {
  emit('clear-completed');
};
</script>

<template>
<footer class="footer">
    <span class="todo-count">
      <strong>{{ remainingCount }}</strong> 
      {{ remainingCount === 1 ? 'item' : 'items' }} left
    </span>
    <ul class="filters">
        <li>
            <a 
              href="#/" 
              :class="{ selected: currentFilter === 'all' }"
              @click.prevent="handleFilterChange('all')"
            >All</a>
        </li>
        <li>
            <a 
              href="#/active" 
              :class="{ selected: currentFilter === 'active' }"
              @click.prevent="handleFilterChange('active')"
            >Active</a>
        </li>
        <li>
            <a 
              href="#/completed" 
              :class="{ selected: currentFilter === 'completed' }"
              @click.prevent="handleFilterChange('completed')"
            >Completed</a>
        </li>
    </ul>
    <button 
      v-if="completedCount > 0"
      class="clear-completed"
      @click="handleClearCompleted"
    >
        Clear completed ({{ completedCount }})
    </button>
</footer>
</template>

<style scoped>
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 25px;
  color: #666;
  background: #f9f9f9;
  border-top: 1px solid #f0f0f0;
}

.todo-count {
  text-align: left;
  font-size: 14px;
}

.todo-count strong {
  font-weight: 600;
  color: #667eea;
  font-size: 16px;
}

.filters {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  gap: 8px;
}

.filters li a {
  color: #777;
  padding: 6px 12px;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 6px;
  transition: all 0.3s ease;
  font-size: 14px;
}

.filters li a:hover {
  border-color: rgba(102, 126, 234, 0.3);
  background-color: rgba(102, 126, 234, 0.05);
}

.filters li a.selected {
  border-color: rgba(102, 126, 234, 0.5);
  background-color: rgba(102, 126, 234, 0.1);
  color: #667eea;
  font-weight: 600;
}

.clear-completed {
  cursor: pointer;
  border: none;
  background: transparent;
  color: #666;
  padding: 6px 12px;
  border-radius: 6px;
  transition: all 0.3s ease;
  font-size: 14px;
}

.clear-completed:hover {
  background-color: #ffe3e3;
  color: #d63031;
}

.clear-completed:active {
  transform: scale(0.95);
}
</style>