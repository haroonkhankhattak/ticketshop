import React from "react";
import Timer from "./Timer";
import OrderSummary from "./OrderSummary";
import CheckoutForm from "./CheckoutForm";

interface CheckoutLayoutProps {
    eventName: string,
    categoryName: string,
    date: string,
    time: string,
    venue: string,
    ticketprice: number,
    quantity: number,
    ticketArea: string,
    ticketSection: string
    seatedTogether: boolean
}

const CheckoutLayout: React.FC<CheckoutLayoutProps> = ({
    eventName: eventName,
    categoryName: categoryName,
    date: date,
    time: time,
    venue: venue,
    ticketprice: ticketprice,
    quantity: quantity,
    ticketArea: ticketArea,
    ticketSection: ticketSection,
    seatedTogether: seatedTogether
}) => {
    console.log("seatedTogether:  == ", seatedTogether);
    return (
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <Timer initialMinutes={10} initialSeconds={0} />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
                <div className="lg:col-span-8">
                    <CheckoutForm ticketCount={quantity} />
                </div>

                <div className="lg:col-span-4">
                    <OrderSummary
                        {...{
                            eventName: eventName,
                            categoryName: categoryName,
                            date: date,
                            time: time,
                            venue: venue,
                            ticketprice: ticketprice,
                            quantity: quantity,
                            ticketArea: ticketArea,
                            ticketSection: ticketSection,
                            seatedTogather: seatedTogether
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default CheckoutLayout;
