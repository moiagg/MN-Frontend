
// import Link from 'next/link';
// const Index = () => (
//   <Template className={"container mx-auto mt-5 h-100"}>
//     <h1 className="text-center">Welcome to Moia Now</h1>
//   </Template>
// );

import { Template } from "../src/components/common";

import {Component}from 'react';
import io from "socket.io-client";
class Index extends Component {
  constructor(props){
    super(props);
    this.state ={
      msg:''
    }
  }
  componentDidMount(){
    this.socket = io()
    this.socket.on('now', data =>{
      this.setState({
        msg:data.message
      })
    })
  }
  render(){
    return (
      <Template className={"container mx-auto mt-5 h-100"}>
        <h1 className="text-center">Welcome to Moia Now</h1>
        {" "}
      </Template>
    );
    }
  }
  export default Index;