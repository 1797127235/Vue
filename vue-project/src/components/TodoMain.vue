<script setup>
// 接收父组件传递的 props
const props = defineProps({
  todos: {
    type: Array,
    required: true
  },
  allCompleted: {
    type: Boolean,
    default: false
  }
});

// 定义事件
const emit = defineEmits(['toggle-todo', 'remove-todo', 'toggle-all']);

// 切换待办事项完成状态
const handleToggle = (id) => {
  emit('toggle-todo', id);
};

// 删除待办事项
const handleRemove = (id) => {
  emit('remove-todo', id);
};

// 切换全选
const handleToggleAll = (e) => {
  emit('toggle-all', e.target.checked);
};
</script>

<template>
<section class="main" v-if="todos.length > 0">
    <div class="toggle-all-container">
      <input 
        id="toggle-all" 
        class="toggle-all" 
        type="checkbox"
        :checked="allCompleted"
        @change="handleToggleAll"
      />
      <label for="toggle-all" class="toggle-all-label">Mark all as complete</label>
    </div>
    <ul class="todo-list">
        <li v-for="todo in todos" :key="todo.id" :class="{ completed: todo.completed }">
            <div class="view">
                <input 
                  class="toggle" 
                  type="checkbox"
                  :checked="todo.completed"
                  @change="handleToggle(todo.id)"
                />
                <label>{{ todo.text }}</label>
                <button class="destroy" @click="handleRemove(todo.id)"></button>
            </div>
        </li>
    </ul>
</section>
</template>

<style scoped>
.main {
  position: relative;
  background: #fff;
  padding: 20px;
}

.toggle-all-container {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
  padding: 15px;
  background: #f9f9f9;
  border-radius: 8px;
  border: 1px solid #f0f0f0;
}

.toggle-all {
  width: 28px;
  height: 28px;
  cursor: pointer;
  accent-color: #667eea;
  flex-shrink: 0;
}

.toggle-all:hover {
  transform: scale(1.1);
}

.toggle-all-label {
  font-size: 16px;
  color: #666;
  cursor: pointer;
  user-select: none;
  transition: all 0.3s ease;
}

.toggle-all:checked ~ .toggle-all-label,
.toggle-all:checked + .toggle-all-label {
  color: #667eea;
  font-weight: 600;
}

.toggle-all-label:hover {
  color: #667eea;
}

.todo-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.todo-list li {
  position: relative;
  font-size: 20px;
  border-bottom: 1px solid #f0f0f0;
  transition: all 0.3s ease;
}

.todo-list li:hover {
  background-color: #f9f9f9;
  padding-left: 5px;
}

.todo-list li:last-child {
  border-bottom: none;
}

.todo-list li .view {
  display: flex;
  align-items: center;
  padding: 20px 25px;
}

.todo-list li .toggle {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  accent-color: #667eea;
  cursor: pointer;
}

.todo-list li label {
  flex: 1;
  padding: 0 20px;
  word-break: break-all;
  color: #333;
  transition: all 0.3s ease;
}

.todo-list li .toggle:checked + label {
  color: #999;
  text-decoration: line-through;
}

.todo-list li.completed label {
  color: #999;
  text-decoration: line-through;
}

.todo-list li .destroy {
  width: 40px;
  height: 40px;
  border: none;
  background: transparent;
  color: #ff6b6b;
  font-size: 28px;
  cursor: pointer;
  opacity: 0;
  transition: all 0.3s ease;
  border-radius: 50%;
}

.todo-list li .destroy:after {
  content: '×';
}

.todo-list li:hover .destroy {
  opacity: 1;
}

.todo-list li .destroy:hover {
  background-color: #ffe3e3;
  color: #d63031;
  transform: scale(1.1);
}

.todo-list li .destroy:active {
  transform: scale(0.95);
}
</style>