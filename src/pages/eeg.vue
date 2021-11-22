<template>
    <div class="q-pa-md" style="max-width: 450px">
        <q-list bordered separator>
            <label for="check-all">
                <input
                    type="checkbox"
                    class="inputcheckbox"
                    id="check-all"
                    v-model="checkboxAll"
                    @change="selectAll()"
                />
            </label>
            <q-item v-for="todo in todos" :key="todo.id">
                <div class="q-pa-md">
                    <div class="q-gutter-sm">
                        <q-checkbox v-model="todo.done" />
                    </div>
                    <div class="q-px-sm"></div>
                </div>
                <q-item-section>
                    <q-item-label>{{ todo.title }}</q-item-label>
                </q-item-section>
                <div class="q-pa-sm">
                    <q-btn
                        ripple
                        round
                        icon="clear"
                        color="red"
                        class="q-ma-sm"
                        size="10px"
                        v-if="todo.done"
                        @click="removeTodo(todo.id)"
                    ></q-btn>
                </div>
            </q-item>
        </q-list>
        <q-input outlined v-model="newTodo" label="Outlined" @keypress.enter="addTodo" />
    </div>
</template>

<script>
import { ref, watch } from 'vue'
import useTodo_function from '../hooks/useTodo'
export default {
    setup () {
        const { todos, addTodo, removeTodo, newTodo } = useTodo_function()
        const val = ref(true)
        const checkboxAll = ref(false)

        // function selectAll () {
        //     const selected = []
        //     if (checkboxAll.value) {
        //        todos.value
        //     }
        // }

        todos.value.forEach(function (item, index, array) {
            console.log(item.done)
        })

        function selectAll () {
            const selected = []
            if (checkboxAll.value) {
                todos.value.forEach(function (item, index, array) {
                    selected.push(item.done)
                })
            }
            console.log('selected', selected)
        }

        // function updateSelected () {
        //     console.log('update')
        //     checkboxAll.value = false
        //     console.log('selected.length', selected.length)
        //     console.log('todo.value.length', todos.value.length)
        //     if (selected.length === todos.value.length) {
        //         checkboxAll.value = true
        //     }
        // }
        watch(todos.value, () => {
            console.log('todos.value', todos.value)
        })


        return { todos, addTodo, removeTodo, newTodo, val, checkboxAll, selectAll }
    },
}
</script>

<style scoped>
.q-pa-md {
    height: 65px;
}
</style>