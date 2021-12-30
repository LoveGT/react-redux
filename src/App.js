import Count from './containers/count'
import store from './redux/store'

function App() {
  return (
    <div className="App">
     <Count store={store}></Count>
    </div>
  );
}

export default App;
