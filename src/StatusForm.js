import React, { Component } from "react";

export default class StatusForm extends Component {
  render() {
    return (
      <div>
        <form>
          <div class="Msg">
            <h3>Add new Status</h3>
            <div class="newMsg">
              <input
                type="text"
                size="65"
                placeholder="Type Message here"
                value=""
              />
              <div class="btn">
                <button>Post</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
