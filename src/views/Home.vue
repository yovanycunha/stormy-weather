<template>
  <div class="home">
    <Signup/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Signup from '@/components/signup/Signup.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Signup
  }
}
</script>
