import React from 'react'

export default class JoinForm extends React.Component{

    Join(){
        alert(this.refs.name.value+" Has Joined")
        this.props.emit('Join',{name:this.refs.name.value})
    }
    render(){
        console.log(this.props)
        return(
            <form action="javascript:void(0)" onSubmit={this.Join.bind(this)}>
                <label>Enter Your Name</label>
                <input type="text" ref="name" className="form-control" placeholder="Enter Name" required/>
                <button className="btn btn-primary">Join</button>
            </form>
        )
    }
}