<!--! format -->
<script setup>
  import "./app.css";
  import {ref} from "vue";
  const todolist = ref(
    [
      { id: 1, title: "滚个卷毛", done: false },
      { id: 2, title: "吃个饭", done: true },
      { id: 3, title: "睡个觉", done: false },
      { id: 4, title: "打个豆豆", done: true },
      { id: 5, title: "敲个代码", done: false },
    ]
  )

  const title = ref("")

  const add = () =>{
    if(title.value.trim().length === 0){
      return
    }
    const obj = {
      id:Date.now(),
      title:title.value,
      done:false
    }
    todolist.value.push(obj)
    title.value = ""
  }

  const destroy = (id) =>{
    if(!window.confirm("确认删除吗？")){
      return
    }
    const index = todolist.value.findIndex(item => item.id === id)
    if(index !== -1){
      todolist.value.splice(index,1)
    }
  }

  const clear = () => {
    if(!window.confirm("确认清除所有已完成的任务吗？")){
      return
    }
    todolist.value = []
  }
  
</script>

<template>
  <section class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <input
        class="new-todo"
        placeholder="What needs to be done?"
        autofocus
        v-model="title"
        @keydown.enter="add"
      />
    </header>
    <section class="main">
      <ul class="todo-list">
        <li v-for="item in todolist" :key="item.id" :class="{completed:item.done}">
          <div class="view">
            <input class="toggle" type="checkbox" v-model="item.done"/>
            <label>{{ item.title }}</label>
            <button class="destroy" @click="destroy(item.id)"></button>
          </div>
          <input class="edit" value="Create a TodoMVC template"/>
        </li>
      </ul>
    </section>
    <footer class="footer">
      <span class="todo-count"><strong>0</strong> item all</span>
      <button class="clear-completed" @click="clear">Clear all</button>
    </footer>
  </section>
</template>
