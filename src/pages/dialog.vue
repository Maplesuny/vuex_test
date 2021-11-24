<template>
    <div class="q-pa-md q-gutter-sm">
        <q-btn unelevated rounded color="primary" @click="alert = true">select</q-btn>
        <q-dialog v-model="alert">
            <q-card>
                <q-card-section>
                    <div class="text-h6">Set Symptom</div>
                </q-card-section>
                <q-separator />
                <q-card-section class="q-pt-none" style="width: 550px; height: 25vh">
                    <div class="q-pa-md q-gutter-sm" style="display: flex">
                        <div class="q-gutter-sm">
                            <q-radio dense v-model="shape" val="Normal" label="Normal" />
                            <q-radio dense v-model="shape" val="AbNormal" label="AbNormal" />
                        </div>

                        <div class="q-px-sm q-pt-sm">
                            Your selection is:
                            <q-badge
                                color="white"
                                style="font-size: 15px;"
                                align="middle"
                                text-color="indigo-9"
                            >{{ shape }}</q-badge>
                        </div>
                    </div>
                    <q-separator />
                    <!--menu-->
                    <div class="q-pa-md">
                        <div class="q-gutter-md row items-center">
                            <q-btn color="primary" label="Click me">
                                <q-menu>
                                    <q-separator />
                                    <q-item clickable>
                                        <q-item-section>Preferences</q-item-section>
                                        <q-item-section side>
                                            <q-icon name="keyboard_arrow_right" />
                                        </q-item-section>
                                        <q-menu anchor="top end" self="top start">
                                            <q-item v-for="n in eeg_data" :key="n" dense clickable>
                                                <q-item-section>{{ n.name }}</q-item-section>
                                                <q-item-section side>
                                                    <q-icon name="keyboard_arrow_right" />
                                                </q-item-section>
                                                <q-menu anchor="top end" self="top start">
                                                    <q-item
                                                        v-for="j in eeg_data[n.id - 1].state"
                                                        :key="j"
                                                        dense
                                                        clickable
                                                    >
                                                        <q-item-section>{{ j.name }}</q-item-section>
                                                        <q-item-section side>
                                                            <q-icon name="keyboard_arrow_right" />
                                                        </q-item-section>
                                                        <q-menu
                                                            auto-close
                                                            anchor="top end"
                                                            self="top start"
                                                        >
                                                            <q-item
                                                                v-for="k in eeg_data[n.id - 1].state[j.id - 1]
                                                                .symptom"
                                                                :key="k"
                                                                dense
                                                                clickable
                                                                @click="aa(k)"
                                                            >
                                                                <q-item-section>{{ k }}</q-item-section>
                                                            </q-item>
                                                        </q-menu>
                                                    </q-item>
                                                </q-menu>
                                            </q-item>
                                        </q-menu>
                                    </q-item>
                                    <q-separator />
                                </q-menu>
                            </q-btn>
                            <div class="q-px-sm q-pt-sm caption">
                                <p style="font-size:17px">
                                    Your selection is:
                                    <q-badge
                                        color="white"
                                        style="font-size: 17px;"
                                        align="middle"
                                        text-color="red"
                                    >{{ seleteddd }}</q-badge>
                                </p>
                            </div>
                            <!-- <span class="label bg-primary text-white">label</span> -->
                            <!-- <q-field stack-label>
                                <template v-slot:control>
                                    <div
                                        class="self-center full-width no-outline"
                                        tabindex="0"
                                    >{{ seleteddd }}</div>
                                </template>
                            </q-field>-->
                        </div>
                    </div>
                </q-card-section>
                <q-card-actions align="right" class="text-primary">
                    <q-btn flat label="Cancel" v-close-popup />
                    <q-btn flat label="OK" v-close-popup />
                </q-card-actions>
                <q-separator />
            </q-card>
        </q-dialog>
    </div>
    <!--下一個-->
    <div class="q-pa-md">
        <div class="q-gutter-md row items-center">
            <q-btn color="primary" label="Click me">
                <q-menu>
                    <q-item clickable v-close-popup>
                        <q-item-section>Open...</q-item-section>
                    </q-item>
                    <q-item clickable v-close-popup>
                        <q-item-section>New</q-item-section>
                    </q-item>
                    <q-separator />
                    <q-item clickable>
                        <q-item-section>Preferences</q-item-section>
                        <q-item-section side>
                            <q-icon name="keyboard_arrow_right" />
                        </q-item-section>

                        <q-menu anchor="top end" self="top start">
                            <q-item v-for="n in eeg_data" :key="n" dense clickable>
                                <q-item-section>{{ n.name }}</q-item-section>
                                <q-item-section side>
                                    <q-icon name="keyboard_arrow_right" />
                                </q-item-section>
                                <q-menu anchor="top end" self="top start">
                                    <q-item
                                        v-for="j in eeg_data[n.id - 1].state"
                                        :key="j"
                                        dense
                                        clickable
                                    >
                                        <q-item-section>{{ j.name }}</q-item-section>
                                        <q-item-section side>
                                            <q-icon name="keyboard_arrow_right" />
                                        </q-item-section>
                                        <q-menu auto-close anchor="top end" self="top start">
                                            <q-item
                                                v-for="k in eeg_data[n.id - 1].state[j.id - 1].symptom"
                                                :key="k"
                                                dense
                                                clickable
                                                @click="aa(k)"
                                            >
                                                <q-item-section>{{ k }}</q-item-section>
                                            </q-item>
                                        </q-menu>
                                    </q-item>
                                </q-menu>
                            </q-item>
                        </q-menu>
                    </q-item>
                    <q-separator />
                    <q-item clickable v-close-popup>
                        <q-item-section>Quit</q-item-section>
                    </q-item>
                </q-menu>
            </q-btn>
            <p>{{ seleteddd }}</p>
        </div>
    </div>

    <!--y94u-->
    <div class="q-pa-md">
        <q-card-section class="q-pt-none">
            <div class="q-pa-md" style="max-width: 300px">
                <div class="q-gutter-md">
                    <q-select v-model="model" :options="options" label="Standard"></q-select>
                </div>
            </div>
        </q-card-section>
    </div>

    <!--dfdfdfdsfdsfdsf-->
    <div class="q-pa-md" style="max-width: 300px">
        <div class="q-gutter-md">
            <q-badge color="secondary" multi-line>Model: "{{ model }}"</q-badge>

            <q-select
                filled
                v-model="model"
                :options="options"
                label="Standard"
                use-input
                input-debounce="0"
            />
        </div>
    </div>
</template>

<script>
import { ref, reactive, watch } from "vue";
import eeg_data from "../hooks/eeg_data.json";
export default {
    setup () {
        const alert = ref("true");
        const shape = ref("");
        // for select
        const model = ref(null);
        let options = ref([]);
        options.value = [
            {
                title: "American cars",
                children: [
                    {
                        id: 1,
                        label: "Ford",
                    },
                    {
                        id: 2,
                        label: "General Motors",
                    },
                    {
                        id: 3,
                        label: "Tesla",
                    },
                ],
            },
            {
                title: "German cars",
                children: [
                    {
                        label: "Audi",
                    },
                    {
                        label: "BMW",
                    },
                    {
                        label: "Porsche",
                    },
                ],
            },
            {
                title: "Italian cars",
                children: [
                    {
                        label: "Ferrari",
                    },
                    {
                        label: "Lamborghini",
                    },
                    {
                        label: "Maserati",
                    },
                ],
            },
            {
                title: "Japanese cars",
                children: [
                    {
                        label: "Honda",
                    },
                    {
                        label: "Nissan",
                    },
                    {
                        label: "Toyota",
                    },
                ],
            },
        ];

        const standard = ref("");
        watch(model, () => {
            console.log("model.value", model);
            standard.value = model.value;
        });

        console.log("全部", eeg_data);
        console.log("第一個", eeg_data[0].state[0].symptom);

        const seleteddd = ref("");

        function aa (text) {
            console.log(text);
            seleteddd.value = text;
        }

        return {
            aa,
            shape,
            alert,
            options,
            model,
            standard,
            eeg_data,
            seleteddd,
        };
    },
};
</script>
