import React from 'react'
import Header from './Header/Header'
var io = require('socket.io-client')

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            status:'Disconnected',
            Title:''
        }
        this.connect=this.connect.bind(this)
        this.disconnect=this.disconnect.bind(this)
        this.updateTitle=this.updateTitle.bind(this)
        
    }
    componentWillMount(){
        this.socket=io('http://localhost:3002');
        this.socket.on('connect',this.connect)
        this.socket.on('disconnect',this.disconnect)
        this.socket.on('TitleOfPresentation',this.updateTitle)
        
    }
    connect(){
        console.log('COnnected',this.socket.id)
                this.setState({
            status:'connected'
        })
    }
  disconnect(){
        console.log('DisCOnnected',this.socket.id)
                this.setState({
            status:'Disconected'
        })

    }
    updateTitle(state){
        this.setState({
            Title:state.title
        })
    }

    render(){
        return(
        <div>
        <Header title={this.state.Title} />
        </div>
        )
    }
}