import React from 'react'
import ConditionRender from './../Common/ConditionRender'
import JoinForm from './../Common/Join'

export default class Audience extends React.Component{
    constructor(props){
        super(props)
        this.SendChat=this.SendChat.bind(this)
    }

    SendChat(){
        console.log('here')
        this.props.emit('AddChat',{message:this.refs.chatText.value,name:this.props.member.name})
        this.refs.chatText.value=''
        this.refs.chatText.blur()
    }

    render(){
        console.log(this.props)
        return(
            <div>
                <ConditionRender if={this.props.status=='connected'}>
                    <ConditionRender if={!this.props.member.name}>
                        <JoinForm {...this.props} />
                    </ConditionRender>
                    <ConditionRender if={this.props.member.name}>
                        <div>
                            <h1 style={{color: "chartreuse"}}>Welcome {this.props.member.name}</h1>
                            <h2 style={{color: "aqua"}}> Member Connected : {this.props.Audience.length}</h2>
                            <div className="MainChatDiv" style={{    height: "400px"}}>
                                <div className="ViewChat" style={{    height: "90%",backgroundColor:"rgba(255, 249, 254, 0.54)",overflowY: "auto",padding:"10px"}}>
                                <div style={{    width: "89%"}}>
                                {
                                    this.props.Chat.map((item,index)=>{
                                        return <h5 key={index}>
                                            <span>{item.data.name}: {item.data.message}</span>
                                            </h5>
                                    })
                                }
                                </div>
                                
                                </div>
                                <div className="SubmitChat">
                                <input type="text" ref="chatText" placeholder="Enter Chat" style={{    width: "89%"}} />
                                <input type="button" value="Send" onClick={this.SendChat} style={{    width: "11%"}}/>
                                </div>
                            </div>
                        </div>
                    </ConditionRender>
                </ConditionRender>
            </div>
        )
    }
}