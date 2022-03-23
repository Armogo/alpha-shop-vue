<template>
  <div id="main-app">
    <!-- nav -->
    <Navbar />

    <!-- checkout -->
    <main id="main-content">
      <div class="container main-container">
        <div class="main-grid">
          <!-- left content -->
          <LeftContent
            :initial-user="user"
            :initial-cities="cities"
            @previous-step-clicked="onPreviousStepClicked"
            @next-step-clicked="onNextStepClicked"
            @final-step-clicked="handleSubmit"
          />

          <!-- right content -->
          <RightContent
            :initial-user="user"
            :initial-items="items"
            @item-add-one="onItemAdded"
            @item-reduce-one="onItemReduced"
          />
        </div>
      </div>
    </main>
    <!-- footer -->
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import LeftContent from "../components/LeftContent.vue";
import RightContent from "../components/RightContent.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Checkout",
  components: {
    Navbar,
    LeftContent,
    RightContent,
    Footer,
  },
  data() {
    return {
      user: {
        prefix: "",
        name: "",
        phone: "",
        email: "",
        city: "",
        address: "",
        id: -1,
        delivery: "",
        payerName: "",
        cardNumber: "",
        goodThru: "",
        CVC: "",
        formStep: 1,
        totalPrice: 0,
      },
      cities: [
        { name: "基隆市", id: "1" },
        { name: "台北市", id: "2" },
        { name: "新北市", id: "3" },
        { name: "桃園市", id: "4" },
        { name: "新竹市", id: "5" },
        { name: "新竹縣", id: "6" },
        { name: "苗栗市", id: "7" },
        { name: "台中縣", id: "8" },
        { name: "彰化縣", id: "9" },
        { name: "南投縣", id: "10" },
        { name: "雲林縣", id: "11" },
        { name: "嘉義市", id: "12" },
        { name: "嘉義縣", id: "13" },
        { name: "台南市", id: "14" },
        { name: "高雄市", id: "15" },
        { name: "屏東縣", id: "16" },
        { name: "台東縣", id: "18" },
        { name: "花蓮縣", id: "19" },
        { name: "宜蘭縣", id: "20" },
        { name: "澎湖縣", id: "21" },
        { name: "金門縣", id: "22" },
        { name: "連江縣", id: "23" },
      ],
      items: [
        {
          name: "破洞補釘牛仔褲",
          img: "https://i.ibb.co/vXLmvf0/1.jpg",
          amount: 1,
          price: 3999,
          id: 1,
        },
        {
          name: "刷色直筒牛仔褲",
          img: "https://i.ibb.co/qYnKGs7/2.jpg",
          amount: 1,
          price: 1299,
          id: 2,
        },
      ],
    };
  },
  methods: {
    // Left Content
    onPreviousStepClicked(formdata) {
      this.user = {
        ...this.user,
        ...formdata,
      };
    },
    onNextStepClicked(formdata) {
      this.user = {
        ...this.user,
        ...formdata,
      };
    },
    handleSubmit(formdata) {
      this.user = {
        ...this.user,
        ...formdata,
      };

      this.totalPrice();
      // 送出結帳資料
      // console.log(this.user)
      const {
        prefix,
        name,
        phone,
        email,
        city,
        address,
        id,
        delivery,
        payerName,
        cardNumber,
        goodThru,
        CVC,
        totalPrice,
      } = this.user;

      window.alert(`
        Yeaaah you made a successful purchase💖

        稱謂: ${prefix === "woman" ? "女士" : "先生"}
        姓名: ${name}
        電話: ${phone}
        email: ${email}
        縣市: ${city}
        地址: ${address}
        id: ${id}
        運送方式: ${delivery === "500" ? "DHL" : "標準"}
        付款人: ${payerName}
        信用卡號: ${cardNumber}
        有效日期: ${goodThru}
        CVC: ${CVC}       
        總價格: ${totalPrice}
      `);
    },
    // Right Content
    onItemAdded(id) {
      this.items.map((item) => {
        if (item.id === id) {
          item.amount += 1;
        }
      });
    },
    onItemReduced(id) {
      this.items.map((item) => {
        if (item.id === id && item.amount > 0) {
          item.amount -= 1;
        }
      });
    },
    totalPrice() {
      let total = 0;

      this.items.map((item) => {
        total += item.amount * item.price;
      });
      total += Number(this.user.delivery);

      this.user.totalPrice = total;
    },
  },
};
</script>
