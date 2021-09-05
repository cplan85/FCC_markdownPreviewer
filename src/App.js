import "./App.css";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import logo from "./bilbao.jpg";
//import FormGroup from "react-bootstrap/lib/FormGroup";

const marked = require("marked");
/*
let codeBlock = String(
  ```javascript
function test() {
 console.log("look ma’, no spaces");
}
```
);
*/
function App() {
  marked.setOptions({
    breaks: true,
  });
  const defaultText = `# This is an H1
  ## This is an H2
  This is a Link => [GitHub](http://github.com)

  This is a List
  * Item 1
  * Item 2
    * Item 2a
    * Item 2b
     
   ${"hoah"}

   This is an example of an \`\`inline code \`\`.

   
    <html>
      <head>
        <title>Test</title>
      </head>
    </html>


  \`\`\`
      function test() {
        console.log("look ma’, no spaces");
       }
  \`\`\`


  As Grace Hopper said:

  > I’ve always been more interested
  > in the future than in the past.
  
  ![bilbao picture](bilbao.jpg)
  Format: ![Alt Text](https://pixabay.com/get/g31b83c3716557c296002e0aa813de37262c6f4da7667d0f83e85a60e0105abcd34ccd528e76df52a117f4b8b3ea7453e_640.jpg)

  **This text will be bold**
__This will also be bold__
  `;
  const [markdown, setMarkdown] = useState(defaultText);

  const updateMarkdown = (markdown) => {
    setMarkdown(markdown);
  };
  return (
    <div className="App">
      <h1>Free Code Camp: Markdown Previewer</h1>
      <h2>Text Input</h2>
      <div id="textArea">
        <Form.Group controlId="formControlsTextArea">
          <Form.Label>by Carlos Planchart</Form.Label>
          <Form.Control
            as="textarea"
            rows={20}
            placeholder={`# This is an H1
            ## This is an H2
            
            `}
            value={markdown}
            onChange={(event) => updateMarkdown(event.target.value)}
            id="editor"
          />
        </Form.Group>
      </div>
      <div>
        <h2>Markdown Preview</h2>
        <div id="previewContainer">
          <div
            id="preview"
            dangerouslySetInnerHTML={{ __html: marked(markdown) }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
