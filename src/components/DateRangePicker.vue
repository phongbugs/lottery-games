<template>
    <div class="date-range-picker">
      <DateRangePicker
        v-model="dateRange"
        :range="true"
        :format="'YYYY-MM-DD'"
        :time-picker="false"
      />
      <p>Selected Date Range: {{ dateRange }}</p>
    </div>
  </template>
  
  <script>
  import { DateRangePicker } from "vue3-date-time-picker";
  import "vue3-date-time-picker/dist/main.css";
  
  export default {
    name: "DateRange",
    components: {
      DateRangePicker,
    },
    data() {
      return {
        dateRange: {
          start: null,
          end: null,
        },
      };
    },
  };
  </script>
  
  <style scoped>
  .date-range-picker {
    max-width: 300px;
    margin: auto;
  }
  
  p {
    margin-top: 20px;
    font-weight: bold;
  }
  </style>
  