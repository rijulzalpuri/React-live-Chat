import React from 'react'
import css from './Join.css'
var str="Enter Your Name"
var i=0;
export default class JoinForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            Namestr:''
        }
        this.generateEffect=this.generateEffect.bind(this)
    }

    Join(){
        alert(this.refs.name.value+" Has Joined")
        this.props.emit('Join',{name:this.refs.name.value})
    }
    componentDidMount(){
        this.generateEffect()
    }
    componentWillUnmount(){
        console.log('sd')        
        str=''
    }
    generateEffect(){
        
            // return (<h1>{str.slice(0,i)}</h1>)
            setTimeout(()=>{
                if(i<=str.length){
                    this.setState({
                        Namestr:str.slice(0,i)
                    })
                    i++
                    this.generateEffect()
                }
                else{
                    console.log('in elswe')
                    if(str=='')
                    {
                        clearTimeout(this)
                    }
                    else{
                    i=0
                    this.generateEffect()
                    }
                }
            },200)    
    }
    render(){
         
        return(
            <div>
                
                <div className="CenterDiv">
 <form action="javascript:void(0)" onSubmit={this.Join.bind(this)} className="JoinForm">
     <div className="StableHeight">
                <label className="labelF">{this.state.Namestr}</label>
     </div>
                <input type="text" ref="name" className="NameLabel" placeholder="Enter Name" required/>
                <button className="joinButton">Join</button>
            </form>
            <span className="Copyright">&copy; Ask permission to Edit</span>
                </div>
            </div>
           
        )
    }
}
