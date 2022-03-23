<template>
  <form id="a-form">
    <div class="form-content">
      <div class="part">
        <h2>寄送地址</h2>
        <div class="full-name">
          <!-- prefix -->
          <div class="form-row gender">
            <label for="prefix">稱謂</label>
            <div class="select-wrapper">
              <select name="a-type" id="prefix" required v-model="user.prefix">
                <option value="" disabled>稱謂</option>
                <option value="man">先生</option>
                <option value="woman">女士</option>
              </select>
            </div>
          </div>
          <!-- name -->
          <div class="form-row name">
            <label for="">姓名</label>
            <input
              id="name"
              type="text"
              placeholder="請輸入姓名"
              required
              v-model="user.name"
            />
          </div>
        </div>
        <div class="cotact-info">
          <!-- phone -->
          <div class="form-row phone">
            <label for="">電話</label>
            <input
              id="phone"
              type="tel"
              pattern="\d+"
              placeholder="請輸入行動電話"
              required
              v-model="user.phone"
            />
          </div>
          <!-- email -->
          <div class="form-row email">
            <label for="">Email</label>
            <input
              id="email"
              type="email"
              placeholder="請輸入電子郵件"
              required
              v-model="user.email"
            />
          </div>
        </div>
        <div class="location">
          <!-- city -->
          <div class="form-row city">
            <label for="city">縣市</label>
            <div class="select-wrapper">
              <select name="a-type" id="city" required v-model="user.city">
                <option value="" disabled selected>請選擇縣市</option>
                <option
                  v-for="city in cities"
                  :key="city.id"
                  :value="city.name"
                >
                  {{ city.name }}
                </option>
              </select>
            </div>
          </div>
          <!-- address -->
          <div class="form-row address">
            <label for="address">地址</label>
            <input
              id="address"
              type="text"
              placeholder="請輸入地址"
              required
              v-model="user.address"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- button control -->
    <div id="btn-control" class="control-panel">
      <button class="btn btn-primary ml-4" @click.stop.prevent="nextStep">
        下一步 &#8594;
      </button>
    </div>
  </form>
</template>

<script>
import { fetchUser } from "../utils/mixins";

export default {
  mixins: [fetchUser],
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
      cities: [],
      user: {
        prefix: "",
        name: "",
        phone: "",
        email: "",
        city: "",
        address: "",
      },
    };
  },
  created() {
    this.fetchCities();
    this.fetchUser();
  },
  methods: {
    fetchCities() {
      this.cities = [...this.initialCities];
    },
    nextStep() {
      const { prefix, name, phone, email, city, address } = this.user;

      if (!prefix || !name || !phone || !email || !city || !address) {
        return window.alert("請填寫所有欄位");
      }
      this.$emit("next-step-clicked", this.user);
    },
  },
};
</script>
