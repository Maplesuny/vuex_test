<template>
    {{ title_.title }}
    <br />
    {{ vuexName }}
    <ul>
        <li v-for="( note, index ) in notes" :key="index">{{ note }}</li>
    </ul>
    <input type="text" v-model="title" @keypress.enter="save" />
    <div>--------------------------------</div>
    <br />
    <ol>
        <li>df</li>
        <!-- <li v-for="todo in todos" :key="todo.id"></li> -->
    </ol>

    <div class="q-gutter-md" style="max-width: 300px">
        <q-input square outlined v-model="title" label="Square outlined" @keypress.enter="save" />
    </div>
</template>

<script>
import { ref, computed, watch } from 'vue'
import store from '../store/module-example/state'
import { useStore } from 'vuex'
import useTodo from 'src/hooks/useTodo'

export default {
    setup () {
        // const index__ = useTodo()

        const notes = ref([])
        const title = ref('')

        function save () {
            notes.value.push(title.value)
            title.value = ""
        }
        // state單獨在一個JS檔
        const title_ = store()

        // 將整個state,getters,mutations整合在index的
        const storess = useStore()
        const vuexName = computed(() => storess.state.test)
        const tet = storess.state.todos[0].title
        console.log(vuexName)
        console.log('test : ', tet)
        ///---------------------------------------------------------

        watch(notes.value, () => {
            console.log('notes變化', notes.value)
        })

        ////
        const capitalise = value => {
            if (!value) return "";
            value = value.toString();
            return value.charAt(0).toUpperCase() + value.slice(1);
        };

        // console.log(useTodo().todos.value[0].title)
        const { todos } = useTodo()
        // const aaa = todos.newTodo.value
        console.log(todos)
        // console.log('dsfdf', todos.todos.value[0].title)

        return { notes, title, save, title_, vuexName, todos }
    },
}
</script>