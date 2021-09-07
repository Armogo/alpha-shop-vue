<template>
  <form id="a-form">
    <div class="form-content">
      <div class="part">
        <h2>付款資訊</h2>
        <!-- payer name -->
        <div class="form-row payer-name">
          <label for="">持卡人姓名</label>
          <input
            type="text"
            placeholder="John Doe"
            v-model="user.payerName"
            required
          />
        </div>
        <!-- card number -->
        <div class="form-row card-number">
          <label for="">卡號</label>
          <input            
            type="text"
            placeholder="1111 2222 3333 4444"
            pattern="\d{4} \d{4}"
            v-model="user.cardNumber"
            required
          />
        </div>
        <div class="date-cvc">
          <!-- good thru -->
          <div class="form-row date">
            <label for="">有效日期</label>
            <input              
              type="text"
              placeholder="MM/YY"
              pattern="\d{2}\/\d{2}"
              v-model="user.goodThru"
              required
            />
          </div>
          <!-- CVC/CCV -->
          <div class="form-row CVC">
            <label for="">CVC/CCV</label>
            <input
              type="number"
              placeholder="123"
              min="0"
              v-model="user.CVC"
              required
            />
          </div>
        </div>
      </div>
    </div>

    <!-- button control -->
    <div id="btn-control" class="control-panel">
      <button class="btn btn-outline" @click.stop.prevent="previousStep">
        &#8592; 上一步
      </button>
      <button class="btn btn-primary ml-4" @click.stop.prevent="finalStep">
        確認下單
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
        payerName: "",
        cardNumber: "",
        goodThru: "",
        CVC: "",
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
    finalStep() {
      const { payerName, cardNumber, goodThru, CVC } = this.user;

      if (!payerName || !cardNumber || !goodThru || !CVC) {
        return window.alert("請填寫所有欄位");
      };
      this.$emit("final-step-clicked", this.user);
    },
  },
};
</script>