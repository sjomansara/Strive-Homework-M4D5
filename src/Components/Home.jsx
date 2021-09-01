import RowComponent from "./RowComponent";
import React from "react";

const Home = () => {
    return (
        <div>
        <RowComponent movie="Harry Potter" />
        <RowComponent movie="Lord Of The Rings" />
        <RowComponent movie="Mission Impossible" />
        </div>
    )
}

export default Home