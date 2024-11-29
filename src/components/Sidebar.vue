<template>
    <v-container fluid>
        <v-col>
            <v-list>
                <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                    :value="item"
                    color="primary">
                    <template v-slot:prepend>
                        <v-icon :icon="item.icon"></v-icon>
                    </template>

                    <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item>
            </v-list>
        </v-col>
    </v-container>
</template>

<script>
export default {
    props: {
        steps: Array,
    },
    data: () => ({
        items: [
        { text: 'import assignments', icon: 'mdi-clock' },
        { text: 'log into Notion', icon: 'mdi-account' },
        { text: 'edit', icon: 'mdi-flag' },
        { text: 'confirm', icon: 'mdi-account' },
        ]
    }),
}
</script>
<!-- <template>
    <v-stepper-vertical v-model="step" :items="items" show-actions>
      <template v-slot:item.1>
      </template>
  
      <template v-slot:item.2>
      </template>
  
      <template v-slot:item.3>
      </template>
    </v-stepper-vertical>
  </template>
  
  <script>
    export default {
      data: () => ({
        step: 1,
        items: ['import assignments', 'log into Notion', 'edit'],
      }),
  
      computed: {
        subtotal() {
          return this.products.reduce(
            (acc, product) => acc + product.quantity * product.price,
            0
          )
        },
        total() {
          return this.subtotal + Number(this.shipping ?? 0)
        },
      },
    }
  </script> -->
  
