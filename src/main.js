import { createApp } from "vue";
import {
  Layout,
  Button,
  Spin,
  Result,
  Card,
  Divider,
  Col,
  Row,
  Drawer,
  Table,
  Form,
  InputNumber,
  Tag,
  Switch,
} from "ant-design-vue";
import App from "./App.vue";
import "./assets/css/style.css";
import "./assets/bg-top.svg";
import "./assets/bg-bottom.svg";

const app = createApp(App);
app.config.productionTip = false;
app.use(Layout);
app.use(Button);
app.use(Spin);
app.use(Result);
app.use(Card);
app.use(Divider);
app.use(Col);
app.use(Row);
app.use(Drawer);
app.use(Table);
app.use(Form);
app.use(InputNumber);
app.use(Tag);
app.use(Switch);
app.mount("#app");
