<template>
  <form id="a-form">
    <div class="form-content">
      <div class="part" id="delivery">
        <h2>運送方式</h2>
        <!-- delivery option 1 -->
        <div class="form-row delivery-way">
          <div class="delivery d-flex align-items-center">
            <input 
              name="delivery" 
              type="radio" 
              value="0" 
              class="free"
              v-model="user.delivery"              
            />
            <label for="">
              <div class="delivery-title">
                <div class="title">標準運送</div>
                <div class="cost">免費</div>
              </div>
              <div class="description">約3-4個工作天</div>
            </label>
          </div>
        </div>
        <!-- delivery option 2 -->
        <div class="form-row col-1-6">
          <div class="delivery d-flex align-items-center">
            <input 
              name="delivery" 
              type="radio" 
              value="500" 
              class="fee" 
              v-model="user.delivery"              
            />
            <label for="">
              <div class="delivery-title">
                <div class="title">DHL貨運</div>
                <div class="cost">$500</div>
              </div>
              <div class="description">48小時內送達</div>
            </label>
          </div>
        </div>
      </div>
    </div>
    <!-- button control -->
    <div id="btn-control" class="control-panel">
      <button        
        class="btn btn-outline"        
        @click.stop.prevent="previousStep"
      >
        &#8592; 上一步
      </button>
      <button
        class="btn btn-primary ml-4"
        @click.stop.prevent="nextStep"
      >
        下一步 &#8594;
      </button> 
    </div>
  </form>
</template>

<script>
import {fetchUser} from '../utils/mixins'

export default {
  mixins: [fetchUser],
  props: {
    initialUser: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      user: {
        delivery: "",
      },
    };
  },
  created() {
    this.fetchUser()
  },
  methods: {    
    previousStep() {
      this.$emit("previous-step-clicked", this.user);
    },
    nextStep() {
      const { delivery } = this.user;
      
      if (!delivery) {
        return window.alert("請選擇運送方式")
      }
      this.$emit("next-step-clicked", this.user);
    },    
  },
}
</script>