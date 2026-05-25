import React from "react";

export function Address(props) {

    console.log(props);
    return(
        <div id="address">
            {props.user.address == "SKP" &&
            <h2>
                {props.user.surname}

            </h2>
             }

        </div>
    )
}