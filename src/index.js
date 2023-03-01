import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AppContextProvider from "./contexts/AppContext";
import { QueryClientProvider, QueryClient } from "react-query";
import {ReactQueryDevtools} from 'react-query/devtools';
// import i18n (needs to be bundled ;)) 
import './i18n';

const queryClient = new QueryClient();


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/*this component let's us use all the react router features in our app, also this is what mapps the url address with the navigation*/}
      <QueryClientProvider client={queryClient}>
        <AppContextProvider>
          <App />
        </AppContextProvider>
        <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
