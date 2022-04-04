<template>
  <div>
    <v-list flat subheader>
      <v-list-item-group
        multiple
        active-class=""
        v-for="(tarefa, index) in tarefas"
        :key="index"
      >
        <v-card>
          <v-list-item
            :class="{ 'light-blue lighten-5 ': tarefa.concluido }"
            @click="tarefa.concluido = !tarefa.concluido"
          >
            <template v-slot:default="{}">
              <v-list-item-action>
                <v-checkbox
                  v-model="tarefa.concluido"
                  @click="tarefa.concluido = !tarefa.concluido"
                ></v-checkbox>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title
                  :class="{ 'text-decoration-line-through': tarefa.concluido }"
                  >{{ tarefa.titulo }}</v-list-item-title
                >
              </v-list-item-content>
              <v-list-item-action>
                <v-btn 
                  icon
                  @click.stop="handleRemoveTarefa(tarefa.id)"
                >
                  <v-icon color="red lighten-1">mdi-trash-can</v-icon>
                </v-btn>
              </v-list-item-action>
            </template>
          </v-list-item>
        </v-card>

        <v-divider></v-divider>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
export default {
  name: "TarefaC",
  props: ["tarefas"],
  methods:{
    handleRemoveTarefa(id){
      this.$store.commit('removeTarefa', id)
      
    }
  }
};
</script>

<style>
</style>