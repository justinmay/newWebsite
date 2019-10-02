import React from 'react';
import "./TypeText.css";

type TypeTextProps =  {
    text: string,
}

type TypeTextState = {
    time: number,
    timer: any,
    displayedText: string,
    show1: string,
    show2: string,
    show3: string,
    show4: string,
    show5: string,
}

class TypeText extends React.Component<TypeTextProps,TypeTextState> {
    constructor(props: TypeTextProps) {
        super(props)
        this.state = {
            time: 0,
            timer: null,
            displayedText: "",
            show1: "initial",
            show2: "initial",
            show3: "initial",
            show4: "initial",
            show5: "initial",
        }  
        this.tick = this.tick.bind(this);
    }

    componentDidMount() {
        this.setState({
            timer: setInterval(
                this.tick,
                200
            )
        })
    }

    tick() {
        const delay = 5;
        if (this.state.time < delay) {
            this.setState({ time: this.state.time + 1})
        } else if (this.state.time > this.props.text.length + delay) {
            // end
            if (this.state.time % 3 === 0) { 
                this.setState({
                    time: this.state.time + 1,
                    displayedText: this.props.text
                })
            } else {
                this.setState({
                    time: this.state.time + 1,
                    displayedText: this.props.text + "|"
                })
            }
            if (this.state.time === this.props.text.length + delay + 2) { 
                this.setState({ show1: "initial show"})
            }
            if (this.state.time === this.props.text.length + delay + 3) { 
                this.setState({ show2: "initial show"})
            }
            if (this.state.time === this.props.text.length + delay + 4) { 
                this.setState({ show3: "initial show"})
            }
            if (this.state.time === this.props.text.length + delay + 5) { 
                this.setState({ show4: "initial show"})
            }
            if (this.state.time === this.props.text.length + delay + 6) { 
                this.setState({ show5: "initial show"})
            }
            
        } else {
            this.setState({
                time: this.state.time + 1,
                displayedText: this.props.text.substring(0,this.state.time - delay) + "|",
            })
        }
        
    }

    componentWillUnmount() {
        clearInterval(this.state.timer);
    }

    render() {
        return(
            <div style={{
                position:"absolute", 
                left:"55vw",}}>
                <h1 style={{
                color:"white",
                fontSize:"6vw",
                fontFamily:"Raleway",
                fontWeight:"lighter",
                marginBottom: "5vh",
                }}>
                    {this.state.displayedText}
                </h1>
                <div style={{marginLeft:"5vw", display: "flex", flexDirection: "column"}}>
                    <button className={this.state.show1}>
                        About Me
                    </button>
                    <button className={this.state.show2}>
                        Portfolio
                    </button>
                    <button className={this.state.show3}>
                        Work Experience
                    </button>
                    <button className={this.state.show4}>
                        Blog
                    </button>
                    <button className={this.state.show5}>
                        Photography
                    </button>
                </div>
            </div>
            
        );
    }
}

export default TypeText;