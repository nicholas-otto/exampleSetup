import React, { Component } from 'react'
import grapesjs from 'grapesjs';

class TemplateEditor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      template: null,
      editor: null,
    }
  }
  componentDidMount() {
    if(this.state.editor == null) {
      let editor = grapesjs.init({
        container: '#gjs',
        fromElement: true,
      });
      this.setState({editor})
      console.log(editor);
    }
  }
  render() {
    return(
      <main>
        <div id="gjs" ref={el => this.el = el}></div>
      </main>
    )
  }
}

export default TemplateEditor;
