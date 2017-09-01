import React from 'react'
import Header from './Header/Header'
import {Route ,Switch} from 'react-router-dom'
import Audience from './../components/Audience/Audience'



var io = require('socket.io-client')

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            status:'Disconnected',
            Title:'',
            member:'',
            Audience:[],
            Chat:[]
        }
        this.connect=this.connect.bind(this)
        this.disconnect=this.disconnect.bind(this)
        this.updateTitle=this.updateTitle.bind(this)
        this.emit=this.emit.bind(this)
        this.join = this.join.bind(this)
        this.UpdateAudience=this.UpdateAudience.bind(this)
        this.UpdateChatArray=this.UpdateChatArray.bind(this)
        
    }
    componentWillMount(){
        this.socket=io('https://reactlivechat.herokuapp.com');
        this.socket.on('connect',this.connect)
        this.socket.on('disconnect',this.disconnect)
        this.socket.on('TitleOfPresentation',this.updateTitle)
        this.socket.on('join',this.join)
        this.socket.on('audience',this.UpdateAudience)
        this.socket.on('Chat',this.UpdateChatArray)
        
    }
    UpdateChatArray(data){
        this.setState({
            Chat:data
        })
    }
    join(data){
        // console.log(data)
        this.setState({
            member:data.newMember
        })

        sessionStorage.LogedIn=JSON.stringify(data.newMember)
    }

    emit(ename,data){
        this.socket.emit(ename,data)
    }
    connect(){
        // console.log('COnnected',this.socket.id)
        sessionStorage.LogedIn ? (this.emit('Join',JSON.parse(sessionStorage.LogedIn))):null
                this.setState({
            status:'connected'
        })
    }
  disconnect(){
        // console.log('DisCOnnected',this.socket.id)
                this.setState({
            status:'Disconected'
        })

    }
    updateTitle(state){
        this.setState({
            Title:state.title
        })
    }
    UpdateAudience(data){
        // console.log(data)
        this.setState({
            Audience:data
        })
    }

    render(){
        return(
        <div style={{padding:'10px'}}>
        {/*<Header title={this.state.Title} />*/}
          {/*<Switch>
         <Route path ="/" render={()=><Audience {...this.state} emit={this.emit}/>}/>
         <Route path = "*" render={()=><h1>Route Not Found</h1>}/>
         
          </Switch>*/}
         <Audience {...this.state} emit={this.emit}/>}
        </div>
        )
    }
}