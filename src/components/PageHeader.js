import React from "react";
import "./PageHeader.css";

const PageHeader = (props) => {
    return(
        <>
            <header>
                <p>❖</p>
                    {props.page}
                <p>❖</p>
            </header>
        </>
    );
}
export default PageHeader;