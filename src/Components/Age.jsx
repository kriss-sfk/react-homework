import React from "react";

export function Age(props) {
    console.log(props);

    return(

        <div id ="age">

            {props.user.age >18?

            <h2>
                {props.user.name} {props.user.surname}

            </h2>
            
            :
            <p>Below 18</p>
        
        
        }

        </div>
    )
}