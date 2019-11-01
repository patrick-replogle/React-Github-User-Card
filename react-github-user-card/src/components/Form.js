import React from "react";

const Form = props => {
  return (
    <div>
      <h3>Change GitHub User here:</h3>
      <form>
        <input onChange={props.handleChange} value={props.user} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
