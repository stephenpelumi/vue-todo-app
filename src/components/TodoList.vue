<template>
  <div>
    <div class="input_button">
      <input v-model="newTodo" placeholder="Add a new todo" />
      <button @click="addTodo">Add Todo</button>
    </div>
  
    <ul class="todolist" v-if="todos.length > 0">
      <transition-group name="fade" tag="li">
        <li v-for="(todo, index) in todos" :key="index">
          {{ todo }}
          <button @click="removeTodo(index)">Remove</button>
        </li>
      </transition-group>
    </ul>
  
    <p v-else>No todos yet. Add one!</p>
  </div>
  </template>
  
  <script>
  export default {
  data() {
    return {
      newTodo: '',
      todos: [],
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim() !== '') {
        this.todos.push(this.newTodo.trim());
        this.newTodo = '';
      }
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
  },
  };
  </script>
  
  <style scoped>
  .todolist {
  display: flex;
  line-height: 30px;
  flex-direction: column !important;
  list-style: none;
  font-size: 20px;
  }
  
  .input_button {
  display: flex;
  gap: 10px;
  justify-content: center;
  }
  input{
    font-size: 20px;
    outline: none;
  }
  button{
    font-size: 20px;
    background-color: rgba(3, 3, 20, 0.714);
    color: white;
    cursor: pointer;
    border: none;
    border-radius: 5px;
  }
  .fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
  }
  
  .fade-enter, .fade-leave-to {
  opacity: 0;
  }
  
  </style>