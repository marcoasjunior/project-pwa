<template>
  <div>
    <optionsCard></optionsCard>
    <h3 class="h3 container-fluid">Opções</h3>
    <optionsSearch></optionsSearch>
    <h3 class="h3 container-fluid">Preferências de eventos</h3>
    <optionsTags></optionsTags>

  </div>
</template>

<script>
import optionsCard from '../components/options-card'
import optionsSearch from '../components/options-search'
import optionsTags from '../components/options-tags'

export default {
  name: 'options',
  components: {
    optionsCard,
    optionsSearch,
    optionsTags
  }

}
</script>

<style scoped>

</style>