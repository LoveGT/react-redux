// 引入Count的UI组件
import CountUI from "../../components/Count";

// 引入connect用于连接UI组件 和 redux
import { connect } from "react-redux";

// 使用 connect()()创建并暴露一个count容器组件
export default connect()(CountUI);
