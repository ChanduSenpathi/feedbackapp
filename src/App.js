import { Component } from "react";
import Feedback from "./components/Feedback";
import './App.css'

const usersList=[
  {
    uniqueId:1,
    imageUrl:"https://www.cambridge.org/elt/blog/wp-content/uploads/2019/07/Sad-Face-Emoji-480x480.png",
    name:"Sad"
  },
  {
    uniqueId:2,
    imageUrl:"http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/expressionless-face.png",
    name:"None"
  },
  {
    uniqueId:3,
    imageUrl:"https://cdn.shopify.com/s/files/1/1061/1924/products/Happy_Emoji_Icon_5c9b7b25-b215-4457-922d-fef519a08b06_large.png?v=1571606090",
    name:"Happy"
  }
]

class App extends Component{
  state={emojiList:usersList, islogged:false}
  viwer=()=>{
    this.setState({islogged:true})
  }
  render(){
    const{emojiList,islogged}=this.state
    let  auth
    if (islogged){
      auth=<div className="main-container">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png" className="image-2" alt="image"/>
            <h1>Thank you for your valuable Feedback</h1>
        </div>
    }else{
      auth=<div className="container-1">
          <h1>How Satisfied are you with our customer support performance?</h1>
          <ul className="ul-container">
            {emojiList.map((each=>
              <Feedback key={each.uniqueId} details={each} viwer={this.viwer}/>
            ))}
          </ul>
        </div>
    }
    return(
      <div className="App">
        {auth}
      </div>
    )
  }
}

export default App