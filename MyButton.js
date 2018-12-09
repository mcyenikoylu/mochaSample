import React from 'react';
export class MyButton{
    constructor (props){
       
        this.clickCount =0
    
    }
    onClick(){
        this.clickCount+=1;
    
    }
}

export class Button extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            clicked: false
        }
    }
    onClick=()=>{
        this.setState=()=>({clicked:true});
    }
    render(){
        return <div onClick={this.onClick}>
            {this.props.label}
        </div>
    }
}