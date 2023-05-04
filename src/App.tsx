import React from "react";
import { Provider } from "react-redux";
import store from "./components/store";
import { bugAdded, bugRemoved, bugResolved } from "./components/reducer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const dispatch = useDispatch();

useEffect(() => {
  dispatch(bugAdded({ description: "Bug 1" }));
}, [dispatch]);

function App() {
  return (
    <Provider store={store}>
      <div className="App">{/* your components */}</div>
    </Provider>
  );
}

// store.dispatch(bugResolved({ id: 1 }));
// store.dispatch(bugRemoved({ id: 1 }));

export default App;
