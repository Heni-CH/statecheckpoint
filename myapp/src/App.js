import { Component } from 'react';
import photo from './mypic.jpg';
import './App.css';

class App extends Component {
 state = {
   Profile: {
     fullName: "Heni Chafai",
     bio: "I am thirty years old from Tunisia, I graduated in 2018.",
     profession:" I started learning web development in January.",
     imgSrc: photo
   },
   show:true
  };
  handleShowProfile = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };

  componentDidMount(){
    console.log('componentDidMount()');
    this.setState({
        intervall:setInterval(()=>{
        this.setState({timer:this.state.timer+1});
        },1000),
    });
}
componentDidUpdate(){
    console.log('componentDidUpdate()');
}
componentWillUnmount(){
    console.log('componentWillUnmount()');
    clearInterval(this.state.intervall);
}

  render() {
    return (
      <>
        {this.state.show && (
          <div style={{width:"350px",height:"850px", display:"flex", flexDirection:"column", alignItems:"center", textAlign:"center", padding:"50px",borderRadius:"50px", overflow:"hidden",boxShadow:"rgba(50 50 93 0.25) 0px 6px 12px -2px rgba(0 0 0 0.3) 0px 3px 7px -3px"}}>
            <h1 style={{color:"red"}}>Full Name:</h1>
            <h1>{this.state.Profile.fullName}</h1>
            <h1 style={{color:"red"}}>Biography:</h1>
            <h1>{this.state.Profile.bio}</h1>
            <img style={{width:"180px", height: "180px", borderRadius: "50%",margin: "5px"}} src={this.state.Profile.imgSrc} alt="Heni"></img>
            <h1 style={{color:"red"}}>Profession:</h1>
            <h1>{this.state.Profile.profession}</h1>
            <br></br>
          </div>
        )}

        <button style={{marginLeft:"160px",borderRadius:"10px",backgroundColor:"#FD7014",color:"#fff",padding:"15px",minHeight:"30px", minWidth:"120px"}} onClick={this.handleShowProfile}>click here</button>
      </>
    );
  }
}
export default App;


