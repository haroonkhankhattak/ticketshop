import React, { useEffect, useState } from "react";
import CheckoutLayout from "@/components/checkout/CheckoutLayout";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useLocation, useParams } from "react-router-dom";


const CheckoutPage = () => {

    const urlLocation = useLocation();
    const state = urlLocation.state as {
        eventName: string,
        categoryName: string,
        date: string,
        time: string,
        venue: string,
        ticketprice: number,
        quantity: number,
        ticketArea: string,
        ticketSection: string,
        seatedTogether: boolean
    };




    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    return (
        <div className="min-h-screen flex flex-col">
            {/* <Header isScrolledPastHero={false} fixed={false} /> */}
            <main className="flex-grow bg-gray-50">
                <CheckoutLayout
                    {...{
                        eventName: state.eventName,
                        categoryName: state.categoryName,
                        date: state.date,
                        time: state.time,
                        venue: state.venue,
                        ticketprice: state.ticketprice,
                        quantity: state.quantity,
                        ticketArea: state.ticketArea,
                        ticketSection: state.ticketSection,
                        seatedTogether: state.seatedTogether
                    }}
                />
            </main>
            <Footer />
        </div>
    );
};

export default CheckoutPage;
