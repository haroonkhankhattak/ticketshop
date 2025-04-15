import React from "react";
import CheckoutLayout from "@/components/checkout/CheckoutLayout";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const CheckoutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <Header isScrolledPastHero={false} fixed={false} /> */}
      <main className="flex-grow bg-gray-50">
        <CheckoutLayout />
      </main>
      <Footer />
    </div>
  );
};

export default CheckoutPage;
