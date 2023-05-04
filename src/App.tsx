import React from "react";
import { Provider } from "react-redux";
import store from "./components/store";
import { bugAdded, bugRemoved, bugResolved } from "./components/reducer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bugAdded({ description: "Bug 1" }));
    dispatch(bugAdded({ description: "Bug 2" }));
    dispatch(bugAdded({ description: "Bug 3" }));
  }, [dispatch]);

  return <div className="App">{/* your components */}</div>;
}

// store.dispatch(bugResolved({ id: 1 }));
// store.dispatch(bugRemoved({ id: 1 }));

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
