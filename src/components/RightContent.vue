<template>
  <div class="right-content">
    <div class="card list-container">
      <h4 class="shopping-cart">購物籃</h4>
      <!-- right content list -->
      <div class="shopping-list">
        <div class="item" v-for="item in items" :key="item.id">
          <div class="item-img">
            <img :src="item.img" />
          </div>
          <div class="count-panel">
            <div class="item-part">
              <p class="item-name">{{ item.name }}</p>
              <div class="count">
                <div
                  class="reduce-circle"
                  @click.stop.prevent="reduceOne(item.id)"
                ></div>
                <div class="item-num">{{ item.amount }}</div>
                <div
                  class="add-circle"
                  @click.stop.prevent="addOne(item.id)"
                ></div>
              </div>
            </div>
            <div class="item-cost">${{ item.price }}</div>
          </div>
        </div>
      </div>
      <!-- right content cost -->
      <div class="cal">
        <div class="fee">
          <span class="fee-title">運費</span>
          <span class="fee-cost">{{ user.delivery }}</span>
        </div>
        <div class="sum">
          <span class="sum-title">小計</span>
          <span class="sum-cost">${{ totalPrice }}</span>
        </div>
      </div>
    </div>
  </div>
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
    initialItems: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      user: {},
      items: [],
    };
  },
  created() {
    this.fetchUser();
    this.fetchItems();
  },
  methods: {
    fetchItems() {
      this.items = [...this.initialItems];
    },
    // item change
    addOne(id) {
      this.$emit("item-add-one", id);
    },
    reduceOne(id) {
      this.$emit("item-reduce-one", id);
    },
  },
  computed: {
    totalPrice() {
      let total = 0;

      this.items.map((item) => {
        total += item.amount * item.price;
      });
      total += Number(this.user.delivery);

      return total;
    },
  },
  watch: {
    // 當LeftContent的user資料變動時
    // RightContent同步更新user資料
    initialUser: {
      handler: function () {
        this.fetchUser();
      },
      deep: true,
    },
  },
};
</script>
