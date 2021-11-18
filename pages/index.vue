<template>
  <div></div>
</template>

<script lang="ts">
import Vue from 'vue'
import egalConstructor from '../helpers/EgalActionConstructor'

export default Vue.extend({
  data() {
    return {}
  },
  mounted() {
  },
  methods: {
    /**
     * Ниже приведен пример запроса на получение данных
     * подробную информацию, о том, как формировать параметры для
     * фильтрации, сортировки, пагинации и withs можно найти в документации Egal
     * https://egal.github.io/egal-docs/#/client/filters_orders
     */
    getData() {
      egalConstructor
        .getItems('microservice name', 'model name')
        .filter(['example filters'])
        .withs(['example with'])
        .order([['value', 'order']])
        .setPagination('per page', 'current page')
        .call()
        .then((response) => {
        }).catch((error) => {})
    },
  },
  beforeDestroy() {
  },
})
</script>

<style scoped>
</style>
