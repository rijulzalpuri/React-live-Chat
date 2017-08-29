import React from 'react'

const ConditionRender =(props)=>{
        if(props.if)
        return <div>{props.children}</div>
        else
        return null 
}

export default ConditionRender 