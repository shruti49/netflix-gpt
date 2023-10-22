import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./firebase/store";

function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
