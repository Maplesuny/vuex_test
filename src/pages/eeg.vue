<template>
    <div class="q-pa-md" style="max-width: 650px">
        <q-list bordered separator>
            <q-item v-for="todo in todos" :key="todo.id">
                <div class="q-pa-md">
                    <div class="q-gutter-sm">
                        <q-checkbox v-model="todo.done" />
                    </div>
                    <div class="q-px-sm"></div>
                </div>
                <q-item-section>
                    <!--第一個顯示大Title-->
                    <q-item-label overline>OVERLINE</q-item-label>
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
                <!--病理特徵-->
                <q-item v-if="!todo.done">
                    <div class="q-pa-md">
                        <q-item-section>
                            <!-- <q-btn unelevated rounded color="primary">{{ seleted }}</q-btn> -->
                            <!-- <q-btn unelevated rounded color="primary">select</q-btn> -->
                            <selectd></selectd>
                        </q-item-section>
                    </div>
                </q-item>
            </q-item>
        </q-list>
        <q-input outlined v-model="newTodo" label="Outlined" @keypress.enter="addTodo" />
    </div>
</template>

<script>
import { ref, watch } from 'vue'
import useTodo_function from '../hooks/useTodo'
import selectd from './dialog.vue'
export default {
    components: {
        selectd
    },
    setup () {
        const { todos, addTodo, removeTodo, newTodo } = useTodo_function()
        const seleted = ref('Unelevated')

        watch(todos.value, () => {
            console.log('todos.value', todos.value)
        })
        return { todos, addTodo, removeTodo, newTodo, seleted }
    },
}
</script>

<style scoped>
.q-pa-md {
    height: 65px;
}
</style>