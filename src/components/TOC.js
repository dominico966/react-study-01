import React, {Component} from 'react';

export default class TOC extends Component {
  shouldComponentUpdate(nextProps, nextState, nextContext) {

    if(!Array.isArray(this.props.data)) {
      return true;
    } else {
      const _arr1 = Array.from(this.props.data)
        .sort()
        .map((e) => e.id);
      const _arr2 = Array.from( nextProps.data.concat())
        .sort()
        .map((e) => e.id);

      if(_arr1.length !== _arr2.length) {
        return true;
      } else {
        const _andSet = _arr1.filter((e, i) => e === _arr2[i]);
        return (_arr1.length !== _andSet.length);
      }
    }
  }

  render() {
    console.log('TOC Updated');
    return (
      <nav>
        <ul>
          {this.props.data
            .map(({id, title}, index) => {
              return (
                <li key={id}>
                  <a
                    href={'/content/' + id}
                    onClick={ (event) => {
                      event.preventDefault();
                      this.props.onChangeSelectedContent(id);
                    }}>{title}</a>
                </li>
              );
            })
          }
        </ul>
      </nav>
    );
  }
}
