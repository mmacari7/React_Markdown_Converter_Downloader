import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';

// Creates React App
class Filename extends Component{
    constructor(props){
        super(props);
        // Bind both of our functions in the constructor
        this.updateFileName = this.updateFileName.bind(this)
        this.customOnChange = this.customOnChange.bind(this)

        this.state = {
            fn: ""
        }
    }
    
    // Function to update the filename local state
    updateFileName = function(fn){
        this.setState({fn});
    }
    
    customOnChange = function(event){
        // Updates the state using the above function
        let newFn = event.target.value
        this.updateFileName(newFn)

        // Updates the parent state based on the prop we passed down from parent
        this.props.updateParentFn(newFn)
    }

    render() {
        // Creates and sets a variable filename which is default for the state
        let { fn } = this.state;
        return(
            <Form.Group controlId="fileInputTextArea">
                <Form.Label>Enter a file name</Form.Label>
                <Form.Control as="textarea" rows="1" placeholder="Enter Filename" value={fn} onChange={this.customOnChange}></Form.Control>
            </Form.Group>
        );
    }
}

export default Filename;
