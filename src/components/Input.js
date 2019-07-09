import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';

// Imports our markdown interpreter
// const marked = require("marked");

// Creates React App
class Input extends Component{
    constructor(props){
        super(props);
        // Bind both of our functions in the constructor
        this.updateMarkdownState = this.updateMarkdownState.bind(this)
        this.customOnChange = this.customOnChange.bind(this)

        this.state = {
            markdown: ""
        }
    }
    
    // Function to update the mark down local state
    updateMarkdownState = function(markdown){
        this.setState({markdown});
    }
    
    customOnChange = function(event){
        // Updates the state using the above function
        let newMarkdown = event.target.value
        this.updateMarkdownState(newMarkdown)

        // Updates the parent state based on the prop we passed down from parent
        this.props.updateParentState(newMarkdown)
    }

    render() {
        // Creates and sets a variable markdown which starts as this state
        let { markdown } = this.state;
        return(
            <Form.Group controlId="formControlsTextarea">
                <Form.Label>Markdown Input</Form.Label>
                <Form.Control as="textarea" rows="20" placeholder="Enter Markdown" value={markdown} onChange={this.customOnChange}></Form.Control>
            </Form.Group>
        );
    }
}

export default Input;
