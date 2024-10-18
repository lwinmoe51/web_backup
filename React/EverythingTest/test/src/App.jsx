import React from "react";

export default function App() {
    return (
        <>
            <List />
            <img
                src="https://i.pinimg.com/564x/62/92/bc/6292bc7fc135d814017a6cab4336c1d8.jpg"
                alt=""
                srcset=""
            />
            <img src="https://i.imgur.com/oWtxTak.jpeg" alt="" srcset="" />
        </>
    );
}

const people = [
    "Creola Katherine Johnson: mathematician",
    "Mario José Molina-Pasquel Henríquez: chemist",
    "Mohammad Abdus Salam: physicist",
    "Percy Lavon Julian: chemist",
    "Subrahmanyan Chandrasekhar: astrophysicist",
];

function List() {
    const listItems = people.map((person) => <li>{person}</li>);
    return <ul>{listItems}</ul>;
}
