import React from "react";
import { Button } from "reactstrap";


export default class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
             yenileme: "...",
              counter: 0,
               renderval: true }
    }

    static getDerivedStateFromProps(props, state) {
        console.log(state.counter);
        return "merhaba"
    }

    increaseNum(val) {
        if (val === "countine") {
            setInterval(() => {
                this.setState({ counter: this.state.counter + 1 })
            }, 1000);
            this.setState({ renderval: true })
        } else if (val === "stop") {
            this.setState({ renderval: false })
        }
    }

    //componentDidMount() {

    // setTimeout(() => {
    //   this.setState({ favoritecolor: "blue" })
    // this.setState({ counter: 1 })

    // }, 5000)

    //}
    shouldComponentUpdate() {
        return this.state.renderval;
    }

    changeColor = () => {
        this.setState({ yenileme: "blue" })

    }



    render() {
        return (
            <div>

                <Button type="button" onClick={() => this.increaseNum("countine")}>coumtine</Button>
                <Button type="button" onClick={() => this.increaseNum("stop")}>stop</Button>
                <h1> sayi:{this.state.counter}</h1>




            </div>


        );

    }
}
