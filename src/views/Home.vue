<template>
   <presentation v-if="!hasData"/>
</template>

<script>
import Presentation from '@/components/Presentation.vue';

export default {
  name: 'Home',
  components: {
    Presentation,
  },
  data() {
    return {
      hasData: false,
    };
  },
};
</script>
