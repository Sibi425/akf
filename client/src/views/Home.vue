<template>
  <div class="home">
    
    <FishTable />
  </div>
</template>

<script>
// @ is an alias to /src
import FishTable from '@/components/FishTable.vue'

export default {
  name: 'home',
  components: {
    FishTable
  }
}
</script>
