<template>
  <div class="pricingBody">
    <h1 class="title-text">Our Pricing</h1>
    <br />
    <!-- Switch -->
    <a-row justify="center">
      <a-col :xs="{ span: 2 }" :lg="{ span: 1 }">
        <p>Monthly</p>
      </a-col>
      <a-col :xs="{ span: 10 }" :lg="{ span: 1 }">
        <div>
          <a-switch default-checked @change="setPriceTerm" />
        </div>
      </a-col>
      <a-col :xs="{ span: 2 }" :lg="{ span: 1 }">
        <p>Anually</p>
      </a-col>
    </a-row>

    <br />
    <!-- Cards -->

    <div style=" padding: 20px;">
      <a-row justify="center">
        <a-col :xs="{ span: 22 }" :lg="{ span: 5 }" class="taller">
          <a-card>
            <h1>Basic</h1>
            <h1 class="price"><span>$</span>{{ basicPrice }}</h1>
            <div class="card-text">
              <hr />
              <p>500 GB Storage</p>
              <hr />
              <p>2 Users Allowed</p>
              <hr />
              <p>Send up to 3 GB</p>
              <hr />
              <br />
              <a-button type="primary"> LEARN MORE </a-button>
            </div>
          </a-card>
        </a-col>
        <a-col :xs="{ span: 22 }" :lg="{ span: 5 }" class="smaller">
          <a-card>
            <br />
            <h1>Professional</h1>
            <h1 class="price"><span>$</span>{{ profPrice }}</h1>
            <div class="card-text">
              <hr />
              <p>1 TB Storage</p>
              <hr />
              <p>5 Users Allowed</p>
              <hr />
              <p>Send up to 10 GB</p>
              <hr />
              <br />
              <a-button type="primary"> LEARN MORE </a-button>
            </div>
            <br />
          </a-card>
        </a-col>
        <a-col :xs="{ span: 22 }" :lg="{ span: 5 }" class="taller">
          <a-card>
            <h1>Master</h1>
            <h1 class="price"><span>$</span>{{ masterPrice }}</h1>
            <div class="card-text">
              <hr />
              <p>2 TB Storage</p>
              <hr />
              <p>10 Users Allowed</p>
              <hr />
              <p>Send up to 20 GB</p>
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
  props: {},
  data() {
    return {
      basicPrice: 19.99,
      profPrice: 24.99,
      masterPrice: 39.99,
    };
  },
  methods: {
    setPriceTerm(checked, basicPrice) {
      var pricePeriod = checked ? "Annually" : "Monthly";
      this.basicPrice = checked ? 108.99 : 19.99;
      console.log(`Pricing set to: ${pricePeriod} ${basicPrice}`);
      this.setProfPriceTerm(checked);
      this.setMasterPriceTerm(checked);
      return basicPrice;
    },
    setProfPriceTerm(checked, profPrice) {
      this.profPrice = checked ? 154.99 : 24.99;
      return profPrice;
    },
    setMasterPriceTerm(checked, masterPrice) {
      this.masterPrice = checked ? 204.99 : 39.99;
      return masterPrice;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
