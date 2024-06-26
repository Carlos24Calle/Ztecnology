import React from "react";
import "./assets/css/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RequireAuth from "./Auth/Auth";
import {
  Home,
  Login,
  Products,
  Dashboard,
  Users,
  Clients,
  Quetos,
} from "./pages";
import Layout from "./components/Layout/Layout";
import QuetosCreate from "./pages/Quetos/Create";
import ProductCreate from "./pages/Products/create";
import ClientsCreate from "./pages/Clients/create";
import UsersCreate from "./pages/Users/crate";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route
              path="/usuarios"
              element={
                <RequireAuth>
                  <Users />
                </RequireAuth>
              }
            />

            <Route
              path="/productos"
              element={
                <RequireAuth>
                  <Products />
                </RequireAuth>
              }
            />

            <Route
              path="/clientes"
              element={
                <RequireAuth>
                  <Clients />
                </RequireAuth>
              }
            />

            <Route
              path="/home"
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />

            <Route
              path="/cotizaciones"
              element={
                <RequireAuth>
                  <Quetos />
                </RequireAuth>
              }
            
            />
            <Route
              path="/cotizaciones/crear"
              element={
                <RequireAuth>
                  <QuetosCreate />
                </RequireAuth>
              }
              
            
            />
            <Route
              path="/usuarios/crear"
              element={
                <RequireAuth>
                  <UsersCreate />
                </RequireAuth>
              }
              
            />
            <Route
              path="/productos/crear"
              element={
                <RequireAuth>
                  <ProductCreate />
                </RequireAuth>
              }
              
              
            />
            <Route
              path="/clientes/crear"
              element={
                <RequireAuth>
                  <ClientsCreate />
                </RequireAuth>
              }
            />
            <Route
              path="/dashboard"
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
