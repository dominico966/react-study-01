import React, {Component} from "react";

export default class CreateContent extends Component {
  render() {
    return (
      <article>
        <h2>Create Body</h2>
        <form action={"/create_proc"} method={"POST"}
              onSubmit={(event)=>{
                event.preventDefault();
                this.props.onSubmitNewContent(
                  event.target['title'].value,
                  event.target['desc'].value
                );
              }}>
          <p><input type={"text"} name={"title"} placeholder={'Title'}/></p>
          <p>
            <textarea name={"desc"} placeholder={'Description'}>

            </textarea>
          </p>
          <p>
            <input type={"submit"}/>
          </p>
        </form>
      </article>
    );
  }
}
