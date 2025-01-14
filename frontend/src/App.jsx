import React from "react";
import Navigation from "./components/Navigation";
import Calendar from "./components/Calendar";
import ContactInformation from "./components/ContactInformation";
import Dashboard from "./components/Dashboard";
import QuickLinks from "./components/Quicklinks";

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-20 max-w-7xl mx-auto px-4 py-6">
        {/* Responsive grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Column for Calendar */}
          <div className="lg:col-span-1 space-y-6">
            <Calendar />

            <div className="hidden lg:block">
              <ContactInformation />
            </div>
          </div>


          <div className="lg:col-span-3 space-y-6">
            <QuickLinks />
            <Dashboard />
          </div>


          <div className="lg:hidden">
            <ContactInformation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
