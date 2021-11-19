import { ref, computed } from 'vue'
import store from 'src/store';


export default function useTodo () {


    const newTodo = ref('');
    const todos = computed(() => store.getters['todos']);

    const addTodo = () => {
        const value = newTodo.value && newTodo.value.trim()
        // add 如果資料是空則不用新增
        if (!value) {
            return
        }
        const payload = {
            title: value
        }
        store.dispatch('ADD_TODO', payload)
        newTodo.value = ''
    }

    const removeTodo = (id) => {
        store.dispatch('REMOVE_TODO', id)
    }

    return {
        addTodo,
        removeTodo,
        newTodo,
        todos
    }


}