import React, {Component} from 'react';

export default class Control extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul>
        <li key={'create'}>
          <input type={'button'} value={'create'} onClick={(event) => {
            event.preventDefault();
            this.props.onChangeMode('create');
          }}/>
        </li>
        <li key={'update'}>
          <input type={'button'} value={'update'} onClick={(event) => {
            event.preventDefault();
            this.props.onChangeMode('update');
          }}/>
        </li>
        <li key={'delete'}>
          <input type={'button'} value={'delete'} onClick={(event) =>{
            event.preventDefault();
            this.props.onChangeMode('delete');
          }}/>
        </li>
      </ul>
    );
  }
}
