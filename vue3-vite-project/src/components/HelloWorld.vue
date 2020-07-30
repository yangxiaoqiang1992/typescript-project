<template>
  <h1 ref="h1">{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script>
import {ref,onMounted} from 'vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  },
  setup(){
    const h1 = ref(null);
    onMounted(()=>{
      console.log(h1.value)
    })
    return {
      h1
    }   
  },
}
</script>
