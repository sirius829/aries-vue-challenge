<template>
  <div class="options-calculator">
    <h1>Options Profit Calculator</h1>
    <div class="input-section">
      <input v-model="underlyingPrice" placeholder="Underlying Price at Expiry" type="number" />
      <button @click="calculateRiskReward">Calculate</button>
    </div>
    <div class="graph-section">
      <canvas ref="riskRewardGraph"></canvas>
    </div>
    <div v-if="results" class="results-section">
      <p>Max Profit: {{ results.maxProfit }}</p>
      <p>Max Loss: {{ results.maxLoss }}</p>
      <p>Break Even Points: {{ results.breakEvenPoints.join(', ') }}</p>
    </div>
  </div>
</template>

<script>
import { calculateProfitLoss } from '../utils/calculateProfitLoss';
import { drawGraph } from '../utils/drawGraph';

export default {
  name: 'CodingChallenge',
  props: {
    optionsData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      underlyingPrice: null,
      results: null,
      chart: null  // Store the chart instance
    };
  },
  methods: {
    calculateRiskReward() {
      if (!this.underlyingPrice) {
        alert("Please enter the underlying price at expiry.");
        return;
      }
      const results = calculateProfitLoss(this.optionsData, this.underlyingPrice);
      this.results = results;
      this.drawRiskRewardGraph(results.graphData);
    },
    drawRiskRewardGraph(graphData) {
      const ctx = this.$refs.riskRewardGraph.getContext('2d');
      if (this.chart) {
        this.chart.destroy();  // Destroy the existing chart instance if it exists
      }
      this.chart = drawGraph(ctx, graphData);  // Create a new chart instance and store it
    }
  }
};
</script>

<style scoped>
.options-calculator {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
}
.input-section {
  margin-bottom: 20px;
}
input {
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
.graph-section {
  margin-top: 20px;
}
.results-section {
  margin-top: 20px;
}
</style>
