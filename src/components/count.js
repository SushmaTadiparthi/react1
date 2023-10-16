import {Component} from 'react';

class count extends Component{
    constructor(props){
        super(props);
        this.state = {count:""};
    }

    

    wordCount = (event) =>{
        var c1=0;
        var inp = event.target.value;
        var text = inp.split(" ");
        var n1;
        for(var chr=0; chr<text.length;chr++){
            n1 = text[chr];
            if(n1 === ' ' || n1.indexOf("") !== -1){
                c1++;
            }
        }
        this.setState({
            count: c1
        })
    }
    render(){
        const myStyle = {
            margin:"50px",
            padding:"20px",
            boxShadow:"5px 5px 5px 5px grey",
            width:"800px"
        }
        return(
            <center>
            <div style = {myStyle}>
                <h2 style={{fontFamily: "Times New Roman"}}>Responsive Paragraph Word Counter</h2>
                <textarea id="data" rows="20" cols="80" onChange={this.wordCount}></textarea>
                <h3>Word count: {this.state.count}</h3>
            </div>
            </center>
        )
    }
}

export default count;
