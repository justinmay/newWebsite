import React from 'react';
import HomeBackground from '../assets/pictures/homebackground.png';
import HomeForeground from '../assets/pictures/home.png';
import Ground from '../assets/pictures/ground.png';
import TypeText from './TypeText';

type WelcomeProp = {}
type WelcomeState = {
    x: number,
    y: number,
    centerx: number,
    centery: number,
    rightPorportion: number,
    leftPorportion: number,
    topPorportion: number,
    bottomPorportion: number,
    shift: number,
}

class Home extends React.Component<WelcomeProp,WelcomeState> {
    constructor(props: WelcomeProp) {
        super(props);
        this.state = {
            x: 0,
            y: 0,
            centerx: 0,
            centery: 0,
            rightPorportion: 0,
            leftPorportion: 0,
            topPorportion: 0,
            bottomPorportion: 0,
            shift: 20,
        }
        this._onMouseMove = this._onMouseMove.bind(this);
        this._updateWindowDimensions = this._updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this._updateWindowDimensions();
        window.addEventListener('resize', this._updateWindowDimensions);
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this._updateWindowDimensions);
    }

    _onMouseMove(e: any) {
        const mousex = e.screenX;
        const mousey = e.screenY;
        this.setState({ x: e.screenX, y: e.screenY });
        // calculate the porportion 
        this.setState({
            leftPorportion: mousex > this.state.centerx ? (mousex - this.state.centerx) / this.state.centerx: 0,
            rightPorportion: mousex < this.state.centerx ? (this.state.centerx - mousex) / this.state.centerx: 0,
            topPorportion: mousey > this.state.centery ? (mousey - this.state.centery)/this.state.centery:0,
            bottomPorportion: mousey < this.state.centery ? (this.state.centery - mousey) / this.state.centery :0,
        });

    }

    _updateWindowDimensions() {
        this.setState({ centerx: window.innerWidth / 2, centery: window.innerHeight / 2 });
    }

    render() {
        return(
            <div onMouseMove={this._onMouseMove} style={{height:"100vh",width:"100vw",overflow:"hidden"}}>
                <div style={{height:"100vh",width:"100vw",position:"absolute"}}>
                    <img src={HomeBackground} 
                    style={{
                        objectFit:"cover", 
                        objectPosition:"0", 
                        width:"100%",
                        height:"100%",
                        overflow:"hidden",
                        }} alt="me"/>
                </div>
                <div style={{
                        height:"100vh",
                        width:"100vw",
                        position:"absolute",
                        overflow:"hidden",
                        right: this.state.rightPorportion ?  this.state.rightPorportion * this.state.shift / 3 : undefined,
                        left: this.state.leftPorportion ? this.state.leftPorportion * this.state.shift / 3: undefined,
                        bottom: this.state.bottomPorportion ? this.state.bottomPorportion * this.state.shift / 3 : undefined,
                    }}>
                    <img src={Ground} 
                    style={{
                        objectFit:"cover", 
                        objectPosition:"0", 
                        width:"100%",
                        height:"100%",
                        overflow:"hidden",
                        }} alt="me"/>
                </div>
                <div style={{
                        height:"100vh",
                        width:"100vw",
                        position:"absolute",
                        overflow:"hidden",
                        right: this.state.rightPorportion ?  this.state.rightPorportion * this.state.shift : undefined,
                        left: this.state.leftPorportion ? this.state.leftPorportion * this.state.shift: undefined,
                        top: this.state.topPorportion ? this.state.topPorportion * this.state.shift: undefined,
                        bottom: this.state.bottomPorportion ? this.state.bottomPorportion * this.state.shift: undefined,
                    }}>
                    <img src={HomeForeground} 
                    style={{
                        objectFit:"cover", 
                        objectPosition:"0", 
                        width:"100%%",
                        height:"100%",
                        overflow:"hidden",
                        }} alt="me"/>
                </div>
                <TypeText text="Justin May"/>
            </div>
        )
    }
}

export default Home