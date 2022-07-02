import React from "react";

export default function Form(){
    const [firstName, setFirstName]= React.useState();
    return (
        <form>
            <input type="text" placeholder="Podaj imię i nazwisko"/>
        </form>
    )
}