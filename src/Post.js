import React, { Component } from "react";
import img from "./img1.jpg";

export default class Post extends Component {
  render() {
    return (
      <div>
        <div class="msgBox">
          <p>Today at @ 9:15AM</p>
          <div class="flex-container">
            <img src={img} />
            <div class="Msgcontain">
              {" "}
              Lorem ipsum dolor sit amet, consectetur{" "}
            </div>
          </div>
        </div>

        <div class="msgBox">
          <p>Today at @ 9:15AM</p>
          <div class="flex-container">
            <img src={img} />
            <div class="Msgcontain">
              {" "}
              Lorem ipsum dolor sit amet, consectetur{" "}
            </div>
          </div>
        </div>
        <div class="msgBox">
          <p>Today at @ 9:15AM</p>
          <div class="flex-container">
            <img src={img} />
            <div class="Msgcontain">
              {" "}
              Lorem ipsum dolor sit amet, consectetur{" "}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
