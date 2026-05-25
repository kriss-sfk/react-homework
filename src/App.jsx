import React from "react";
import { Age } from "./Components/Age";
import { Address } from "./Components/Address";

export function App() {

    const user1 = {
        name: "kk",
        surname: "kkk",
        address: "k23",
        age: 27
    }

    const user2 = {
        name: "kriss",
        surname: "kal",
        address: "SKP",
        age: 55
    }

    const user3 = {
        name: "kiki",
        surname: "kiks",
        address: "DE",
        age: 17
    }

    const user4 = {
        name: "kk3",
        surname: "k",
        address: "SKP",
        age: 15
    }

    return(
        <div id="app">

            <Age user={user1}/>
            <Age user={user2}/>
            <Age user={user3}/>
            <Age user={user4}/>

            <hr/>

            <Address user={user1}/>
            <Address user={user2}/>
            <Address user={user3}/>
            <Address user={user4}/>

        </div>
    )
}