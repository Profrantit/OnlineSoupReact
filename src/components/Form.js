import React, { Component } from "react";
class Form extends Component {
  render() {
    return (
      <form>
        <div className="containerForm">
          <div class="row">
            <div class="col-25">
              <label for="email">
                <b>Email :</b>
              </label>
            </div>
            <div class="col-75">
              <input
                type="text"
                placeholder="Enter Email"
                name="email"
                required
              ></input>
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="password">
                <b>Password :</b>
              </label>
            </div>
            <div class="col-75">
              <input
                type="text"
                placeholder="Enter Password"
                name="password"
                required
              ></input>
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="psw-repeat">
                <b>Repeat Password :</b>
              </label>
            </div>
            <div class="col-75">
              <input
                type="text"
                placeholder="Repeat Password"
                name="psw-repeat"
                required
              />
            </div>
          </div>

          <div class="clearfix">
            <button type="button" className="cancelbtn">
              Cancel
            </button>
            <button type="submit" className="signupbtn">
              Sign Up
            </button>
          </div>
        </div>
      </form>
    );
  }
}
export default Form;
