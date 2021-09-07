<template>
  <div class="form-panel">
    <div class="container form-container">
      <!-- form 1 -->
      <Form1 
        v-if="initialUser.formStep === 1"
        :initial-user="initialUser"
        :initial-cities="initialCities"
        @next-step-clicked="onNextStepClicked"
      />
      <!-- form 2 -->
      <Form2 
        v-if="initialUser.formStep === 2" 
        :initial-user="initialUser"
        @previous-step-clicked="onPreviousStepClicked"
        @next-step-clicked="onNextStepClicked"        
      />
      <!-- form 3 -->
      <Form3 
        v-if="initialUser.formStep === 3"
        :initial-user="initialUser"
        @previous-step-clicked="onPreviousStepClicked"
        @final-step-clicked="onFinalStepClicked"
      />
    </div>
  </div>
</template>

<script>
import Form1 from './Form-1.vue';
import Form2 from './Form-2.vue';
import Form3 from './Form-3.vue';
import {fetchUser} from '../utils/mixins'

export default {
  mixins: [fetchUser],
  components: {
    Form1,
    Form2,
    Form3,
  },
  props: {
    initialUser: {
      type: Object,
      required: true,
    },
    initialCities: {
      type: Array,
      required: true,
    }
  },
  data() {
    return {
      user: {},
    };
  },
  created() {
    this.fetchUser();
  },
  methods: {    
    onPreviousStepClicked(formdata) {      
      this.user = {
        ... this.user,
        ... formdata,
      }
      if (this.user.formStep > 0) {
        this.user.formStep -= 1;
      }      
      this.$emit("previous-step-clicked", this.user);
    },
    onNextStepClicked(formdata) {
      this.user = {
        ...this.user,
        ...formdata,
      };
      if (this.user.formStep < 3) {
        this.user.formStep += 1;
      }      
      this.$emit("next-step-clicked", this.user);
    },
    onFinalStepClicked(formdata) {
      this.user = {
        ...this.user,
        ...formdata,
      };
      this.$emit("final-step-clicked", this.user);
    },    
  },
};
</script>