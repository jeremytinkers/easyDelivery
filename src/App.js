import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import AdminScreen from "./screens/admin/AdminScreen";
import RiderScreen from "./screens/rider/RiderScreen";
import HomeScreen from "./screens/HomeScreen";
import CreateOrderScreen from "./screens/admin/CreateOrderScreen";
import AcceptScreen from "./screens/rider/AcceptScreen";
import RiderLoginScreen from "./screens/rider/RiderLoginScreen";
import MapScreen from "./screens/admin/MapScreen";

export default function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">

        {/* Header */}
        <header className="row">
          <Link to="/">
            <h1>easyDelivery🏠</h1>
          </Link>
        </header>

        {/* Main */}
        <main>
          <Route path="/" component={HomeScreen} exact></Route>
          {/* Admin Routes:- */}
          <Route path="/admin" component={AdminScreen} exact></Route>
          <Route path="/admin/createOrder" component={CreateOrderScreen} exact></Route>
          <Route path="/admin/viewMap/:id" component={MapScreen} exact></Route>

          {/* Rider Routes */}
          <Route path="/rider" component={RiderLoginScreen} exact></Route>
          <Route path="/rider/:id" component={RiderScreen} exact></Route>
          <Route path="/rider/acceptOrder/:id?" component={AcceptScreen} exact></Route>

        </main>

        {/* Footer */}
        <footer className="row center">Made With 🔥 by Jeremiah</footer>

      </div>

    </BrowserRouter>
  )
}

