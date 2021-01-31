<template>
  <div class="pricingBody">
    <h1>{{ msg }}</h1>
    <br />
    <!-- Switch -->
    <a-row justify="center">
      <a-col :xs="{ span: 2 }" :lg="{ span: 1 }">
        Monthly
      </a-col>
      <a-col :xs="{ span: 10 }" :lg="{ span: 1 }">
        <div>
          <a-switch default-checked @change="setPriceTerm" />
        </div>
      </a-col>
      <a-col :xs="{ span: 2 }" :lg="{ span: 1 }">
        Annually
      </a-col>
    </a-row>

    <br />
    <!-- Cards -->

    <div style=" padding: 20px;">
      <a-row justify="center">
        <a-col :xs="{ span: 20 }" :lg="{ span: 5 }" class="taller">
          <a-card>
            <h1>Basic</h1>
            <h1 class="price"><span>$</span>19.99</h1>
            <div class="card-text">
              <hr />
              <p>card content</p>
              <hr />
              <p>card content</p>
              <hr />
              <p>card content</p>
              <hr />
              <br />
              <a-button type="primary"> LEARN MORE </a-button>
            </div>
          </a-card>
        </a-col>
        <a-col :xs="{ span: 20 }" :lg="{ span: 5 }" class="smaller">
          <a-card>
            <br />
            <h1>Professional</h1>
            <h1 class="price"><span>$</span>24.99</h1>
            <div class="card-text">
              <hr />
              <p>card content</p>
              <hr />
              <p>card content</p>
              <hr />
              <p>card content</p>
              <hr />
              <br />
              <a-button type="primary"> LEARN MORE </a-button>
            </div>
            <br />
          </a-card>
        </a-col>
        <a-col :xs="{ span: 20 }" :lg="{ span: 5 }" class="taller">
          <a-card>
            <h1>Master</h1>
            <h1 class="price"><span>$</span>39.99</h1>
            <div class="card-text">
              <hr />
              <p>card content</p>
              <hr />
              <p>card content</p>
              <hr />
              <p>card content</p>
              <hr />
              <br />
              <a-button type="primary"> LEARN MORE </a-button>
            </div>
          </a-card>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pricing",
  props: {
    msg: String,
  },
  data() {
    return {};
  },
  methods: {
    setPriceTerm(checked) {
      var pricePeriod = checked ? "Annually" : "Monthly";
      console.log(`Pricing set to: ${pricePeriod}`);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
