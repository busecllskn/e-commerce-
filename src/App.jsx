import { createRoot } from "react-dom/client";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Switch>
     <Route exact path="/" component={HomePage} />
    </Switch>
  </BrowserRouter>
);

export default App;