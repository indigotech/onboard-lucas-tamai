import {InputHeader, InputBox} from './formItemStyle'
import React from 'react'

interface formProps{
    title: string,
    caption:string,
    placeholder:string,
    onChangeText: (input:string) => void;
}



export const InputForm = (props:formProps) => {
    return(
        <>
            <InputHeader>{props.title}</InputHeader>
            <InputBox 
                placeholder = {props.placeholder}
                onChangeText = {props.onChangeText}
                autoCapitalize = "none"
            ></InputBox>
        </>

    )
}