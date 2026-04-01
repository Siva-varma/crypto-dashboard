import React from "react";
import { Routes, Route } from "react-router-dom";
import Analytics from "../screens/Dashboard/analytics";
import Ecommerce from "../screens/Dashboard/Ecommerce";
import Crypto from "../screens/Dashboard/Crypto";
import Settings from "../screens/Pages/Settings";
import Profile from "../screens/Profile";
import Pricing from "../screens/Pages/Pricing";
import Projects from "../screens/Pages/Projects";
import Client from "../screens/Pages/Client";
import Order from "../screens/Pages/Order";
import Chat from "../screens/Pages/Chat";
import Invoice from "../screens/Invoice";
import Tasks from "../screens/Tasks";
import Calender from "../screens/Calender";
const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Analytics />} />
        <Route path="/dashboard-ecommerce" element={<Ecommerce />} />
        <Route path="/dashboard-crypto" element={<Crypto />} />

        <Route path="/pages-settings" element={<Settings />} />
        <Route path="/pages-projects" element={<Projects />} />
        <Route path="/pages-clients" element={<Client />} />
        <Route path="/pages-orders" element={<Order />} />
        <Route path="/pages-pricing" element={<Pricing />} />
        <Route path="/pages-chats" element={<Chat />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/calendar" element={<Calender />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
