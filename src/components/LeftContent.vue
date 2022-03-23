<template>
  <div class="left-content">
    <!-- left content stepper panel -->
    <StepPanel :form-step="user.formStep" />

    <!-- left content form panel -->
    <FormPanel
      :initial-user="user"
      :initial-cities="initialCities"
      @previous-step-clicked="onPreviousStepClicked"
      @next-step-clicked="onNextStepClicked"
      @final-step-clicked="onFinalStepClicked"
      @delivery-changed="onDeliveryChanged"
    />
  </div>
</template>

<script>
import StepPanel from "../components/StepPanel.vue";
import FormPanel from "../components/FormPanel.vue";
import { fetchUser } from "../utils/mixins";

export default {
  mixins: [fetchUser],
  components: {
    StepPanel,
    FormPanel,
  },
  props: {
    initialUser: {
      type: Object,
      required: true,
    },
    initialCities: {
      type: Array,
      requred: true,
    },
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
    // step switch
    onPreviousStepClicked(formdata) {
      this.user = {
        ...this.user,
        ...formdata,
      };
      this.$emit("previous-step-clicked", this.user);
    },
    onNextStepClicked(formdata) {
      this.user = {
        ...this.user,
        ...formdata,
      };
      this.$emit("next-step-clicked", this.user);
    },
    onFinalStepClicked(formdata) {
      this.user = {
        ...this.user,
        ...formdata,
      };
      this.$emit("final-step-clicked", this.user);
    },
    onDeliveryChanged(formdata) {
      this.user = {
        ...this.user,
        ...formdata,
      };
      this.$emit("delivery-changed", this.user);
    },
  },
};
</script>
