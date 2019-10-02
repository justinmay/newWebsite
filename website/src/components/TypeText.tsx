import React from 'react';

type TypeTextProps =  {
    text: string,
}

type TypeTextState = {
    time: number,
    timer: any,
    displayedText: string,
}

class TypeText extends React.Component<TypeTextProps,TypeTextState> {
    constructor(props: TypeTextProps) {
        super(props)
        this.state = {
            time: 0,
            timer: null,
            displayedText: "",
        }  
        this.tick = this.tick.bind(this);
    }

    componentDidMount() {
        this.setState({
            timer: setInterval(
                this.tick,
                300
            )
        })
    }

    tick() {
        const delay = 5;
        if (this.state.time > this.props.text.length) {
            // end
            if (this.state.time % 2 === 0) { 
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
            
        } else {
            this.setState({
                time: this.state.time + 1,
                displayedText: this.props.text.substring(0,this.state.time) + "|",
            })
        }
        
    }

    componentWillUnmount() {
        clearInterval(this.state.timer);
    }

    render() {

        return(
            <div>
                <h1 style={{
                color:"white",
                fontSize:"6vw",
                fontFamily:"Raleway",
                fontWeight:"lighter",
                position:"absolute", 
                left:"55vw",
                }}>
                    {this.state.displayedText}
                </h1>
            </div>
            
        );
    }
}

export default TypeText;