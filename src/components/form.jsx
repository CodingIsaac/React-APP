import { useState } from "react";
import "../App.css";

function FormSpace() {
  const [name, setName] = useState("");
  
  const submitHandler = (e) => {
    e.preventDefault();
    setName("");
    console.log("Submitted Successfully");
  };
  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <fieldset>
          <h2>Feedback Form</h2>
          <div className="Field">
            <label htmlFor="name">First Name</label>
            <input
              id="name"
              type="text"
              placeholder="First Name"
              required
              name="name"
              onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="name">Last Name</label>
            <input
              id="name"
              type="text"
              placeholder="Last Name"
              required
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
            <label>Rating:{rating}</label>
            <input
              type="range"
              min="0"
              max="10"
              value={rating}
              onChange={(e) => setScore(e.target.value)}
            ></input>
          </div>
          <button
            disabled={!name}
            type="submit"
            className="btn btn-secondary btn-md m-2"
          >
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default FormSpace;
