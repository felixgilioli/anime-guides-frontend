import React from "react";
import Menu from "./Menu"
import ListOfAnimes from "./ListOfAnimes"

export default class Home extends React.Component {

    render() {
        return (
            <div>
                <Menu></Menu>
                <ListOfAnimes></ListOfAnimes>
            </div>
        )
    }
}