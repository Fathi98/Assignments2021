import './App.css';
import  { Component } from 'react';
import axios from 'axios';

class App extends Component {
  state={
    file:null
  }
 
  handleFile(e){
   let file=e.target.files[0]
   this.setState({file:file})
  }

  handleUpload(e){
     let file=this.state.file
     let formdata=new FormData()
     formdata.append('image',file)
     formdata.append('name', "fathi")
  axios({
    url:"/some/api",
    method:"POST",
    headers:{
      authorization: 'your token'
    }, 
    data:formdata
  }).then((res)=>{


  },(err)=>{


  })

  }



 
  render(){
  return (
    <div className="App">
      <input type="file" name="file" onChange={(e)=>this.handleFile(e)} />
      <button type="button" onClick={(e)=>this.handleUpload(e)}>Upload</button>
   </div>
  );
}

}
export default App;
