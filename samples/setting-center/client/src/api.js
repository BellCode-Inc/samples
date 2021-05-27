import React, {Component} from 'react'
import { gql, graphql } from 'react-apollo'

const GetSetting = (props) => {
    //console.log(props.data.getSetting)
    //let result = "";
    // result = props.data.getSetting.map((value) => {
    //     console.log(value.key)
    //     return value.key
    // })
    
    // console.log(result)
    // return (
    //     result
    // )
    
}

const GET_SETTING = gql`
    query{
        getSetting(key:"BELL_CERTIFICATES"){
        key,
        value,
        }
    }
`;

export const GetS = graphql(GET_SETTING)(GetSetting)