import React, {Component} from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap'
import {renderToString} from 'react-dom/server'
// Import our components
import Input from './Input.js'
import Output from './Output.js'
import Filename from './Filename.js'

// Import for our css overrides
//import "../css/custom.css";

// Imports our markdown interpreter
const marked = require("marked");

// Creates React App
class App extends Component{
    
    // We create a state of markdown for the parent class. The input child component sends the newly typed information up to parent
    constructor(props){
        super(props);
        this.downloadMarkdown = this.downloadMarkdown.bind(this)
        this.downloadHTML = this.downloadHTML.bind(this)

        this.state = {
            markdown: "",
            fn: ""
        }
    }
    
    // Function to download text from form input
    downloadMarkdown = function(){
        // If a file name is not provided, send an alert
        if(this.state.fn === "") {
            alert("Please enter a name for the file")
        }
        else{
            const element = document.createElement("a");
            const file = new Blob([this.state.markdown], {type: 'text/plain'});
            element.href = URL.createObjectURL(file);
            element.download = this.state.fn.concat(".md");
            document.body.appendChild(element);
            element.click();
        }
    }

    // Function to download the html
    downloadHTML(){
        if(this.state.fn === "") {
            alert("Please enter a name for the file")
        }
        else {
            let html_start = '<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<meta http-equiv="X-UA-Compatible" content="ie=edge">\n<meta http-equiv="X-UA-Compatible" content="ie=edge">\n<title>Downloaded Markdown</title>\n<style>\nbody {font-family: Georgia, Cambria, Times, serif; font-size: 15pt; margin: auto; max-width: 75%;}\n</style>\n</head>\n<body>\n';
            
            let htmlMarkdown = marked(this.state.markdown);
            
            let html_end = '</body>\n</html>';
            
            let full_html = html_start + htmlMarkdown + html_end;
            
            const element = document.createElement("a");
            const file = new Blob([full_html], {type: 'text/plain'});
            element.href = URL.createObjectURL(file);
            element.download = this.state.fn.concat(".html");
            document.body.appendChild(element);
            element.click();
            

            //console.log(full_html);
        }
    }

    // Callback function to send to child component input so child can pass data back up to parent
    updateParentState(newMarkdown) {
        this.setState({markdown: newMarkdown});
    }
    
    // Functinon to send to child component so the child can pass back the file name from form to parent
    updateParentFn(newFn) {
        this.setState({fn: newFn})
    }

    render() {
        return(
            <Container>
                <Row>
                    <Col>
                        <Filename updateParentFn={this.updateParentFn.bind(this)}>
                        </Filename>
                    </Col>
                </Row>

                <Row>

                    <Col>
                        {/* Passes the callback function to the child component input so we can update the state in the parent */}
                        <Input updateParentState={this.updateParentState.bind(this)}>
                        </Input>
                    </Col>

                    <Col>
                        {/* When the state gets updated by the callback function from the input component, we pass the state to the output component */}
                        <h5>Output</h5>
                        <Output dataFromParent = {this.state.markdown}>
                        </Output>
                    </Col>

                </Row>

                <Row>
                    <Col md={{offset: 2}}>
                        <Button variant="secondary" onClick={this.downloadMarkdown}>Download Markdown</Button>
                    </Col>

                    <Col md={{offset: 2}}>
                        <Button variant="secondary" onClick={this.downloadHTML}>Download HTML</Button>
                    </Col>

                </Row>

            </Container>
        );
    }
}

export default App;
