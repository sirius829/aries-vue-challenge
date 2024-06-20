# Options Strategy Risk and Reward Analysis

## Project Overview
This project implements a front-end for analyzing the risk and reward of options strategies using Vue.js. The main component allows users to input options contracts and visualize the potential profit and loss through an interactive graph.

## Installation
To get started with the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>

2. Install the dependencies:
   ```bash
   npm install

3. Run the development server:
   ```bash
   npm run serve

## Project Structure
The project structure is organized as follows:

   ```bash
   src/
  ├── assets/
  ├── components/
  │   └── CodingChallenge.vue
  ├── utils/
  │   ├── calculateProfitLoss.js
  │   └── drawGraph.js
  ├── App.vue
  ├── main.js
  ```

## Components
The main component for the options profit calculator. It:

- Accepts options data as a prop.
- Provides an input for the underlying price at expiry.
- Calculates the risk/reward based on the input options.
- Renders an interactive graph showing profit/loss.
- Displays maximum profit, maximum loss, and break-even points.

## Utilities
### calculateProfitLoss.js
A utility function to calculate the profit/loss for different underlying prices based on the input options data.

### drawGraph.js
A utility function to render the profit/loss graph using Chart.js.

## Usage
To use the application, follow these steps:

- Enter the underlying price at expiry in the input field.
- Click the "Calculate" button to generate the risk/reward graph.
- View the graph and the calculated maximum profit, maximum loss, and break-even points.