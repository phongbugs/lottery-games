import { createApp } from 'vue'
import App from './App.vue'

import { ElDatePicker , ElButton} from 'element-plus';
import 'element-plus/dist/index.css';
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

const app = createApp(App);

// Register ElDatePicker globally so that you can use <el-date-picker> directly
app.component('el-date-picker', ElDatePicker);
app.component('el-button', ElButton);

app.mount("#app");
