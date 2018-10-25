import React, { Component } from "react";

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: true };
    this.click = this.click.bind(this);
  }
  render() {
    const { list } = this.props;
    console.log(list);
    const body = this.state.isOpen && <p>{list.text}</p>;
    return (
      <div>
        <ul>
          <li>
            #{list.id}. Date: {list.date}
            <button onClick={this.click}>Click</button>
            <hr />
            {body}
          </li>
        </ul>
      </div>
    );
  }
  click() {
    console.log("---", "click");
    var val = this.state.isOpen === true ? false : true;
    this.setState({
      isOpen: val
      // isOpen: !this.state.isOpen
    });
  }
}

export default Article;
