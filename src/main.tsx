import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <Auth0Provider
    domain="dev-50z6kjgdp2n03py4.us.auth0.com"
    clientId="wnEQOKZs8U0JYTe91qpA71sZdQNzwKOK"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
   
    <BrowserRouter>
    <Provider store={store}>
      <App />
      </Provider>
    </BrowserRouter>
  </Auth0Provider>
);
