import React, {Component} from 'react';
import './App.css';
import TOC from "./components/TOC";
import Subject from "./components/Subject";
import ReadContent from "./components/ReadContent";
import Control from "./components/Control";
import CreateContent from "./components/CreateContent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode : 'welcome',
      subject: {title: 'WEB', sub: 'World Wide Web!'},
      welcome:{title:'Welcome', desc:'Hello React~~'},
      selectedContentId : 0,
      contents: [
        {id: 0, title: 'HTML', desc: 'HTML is HyperTest Markup Language.'},
        {id: 1, title: 'CSS', desc: 'CSS is for design'},
        {id: 2, title: 'MD', desc: 'MD is Markdown Language.'},
      ]
    };

  }

  handler = () => {
    this.setState({
      mode : this.state.mode === 'welcome' ? 'read' : 'welcome'
    });
  }

  render() {
    let _title, _desc;
    if(this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;

    } else if(this.state.mode === 'read') {
      const {selectedContentId: id, contents: data} = this.state;
      const findSelectedData = data.filter((e)=> e.id === id);

      if(findSelectedData.length > 0) {
      _title = findSelectedData[0].title;
      _desc = findSelectedData[0].desc;
      }

    } else if(this.state.mode === 'create') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }

    let _contentBody;
    switch(this.state.mode) {
      case 'create':
        _contentBody = (<CreateContent onSubmitNewContent={(title, desc)=>{
          const id = this.state.contents.length;
          const newElement = {id, title, desc};
          this.setState({contents : this.state.contents.concat(newElement) });
        }}/>);
        break;
      case 'delete':
        break;
      default : _contentBody = (<ReadContent title={_title} content={_desc}/>);
    }

    return (
      <div>
        <Subject
          title={this.state.subject.title}
          subtitle={this.state.subject.sub}
          parentStateHandler={() => {
            this.setState({
              mode : 'welcome'
            });
          }}
        >
        </Subject>
        <Control
          onChangeMode={(mode) => this.setState({mode}) }
        />
        <TOC
          data={this.state.contents}
          onChangeSelectedContent={ (selectedContentId) => this.setState({mode : 'read', selectedContentId}) }>
        </TOC>
        {_contentBody}
      </div>
    );
  }
}

export default App;
