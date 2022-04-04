<template>
  <div>
    <v-col cols="12">
      <v-text-field
        v-model="campoInput"
        label="Qual a sua tarefa ?"
        outlined
        clearable
        @keyup.enter="handleAddTarefa"
      ></v-text-field>
    </v-col>

    <tarefa-c :tarefas="$store.state.tarefas"></tarefa-c>
  </div>
</template>

<script>
import TarefaC from "../components/tarefas/Tarefa.vue";

export default {
  name: "TarefasView",

  components: {
    TarefaC,
  },
  data() {
    return {
      campoInput: null,
    };
  },
  methods: {
    handleAddTarefa() {
      this.$store.commit("adicionaTarefa", this.campoInput);
      this.campoInput = null;
    },
  },
};
</script>
