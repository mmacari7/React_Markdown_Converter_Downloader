import React, {Component} from 'react';
//import Form from 'react-bootstrap/Form';

// Imports our markdown interpreter
const marked = require("marked");

// Creates React App
class Output extends Component{
    constructor(props){
        super(props);
    }

    render() {
        //console.log(this.props.state.markdown)
        return(
            <>
                <div dangerouslySetInnerHTML={{__html: marked(this.props.dataFromParent)}}></div>
            </>
        );
    }
}

export default Output;
