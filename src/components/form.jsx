import { useState } from "react";
import "../App.css";

function FormSpace() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("10");
  const [comment, setComment] = useState("")

  const submitHandler = (e) => {
    e.preventDefault();
    setName("");
    if (Number(rating) <= 6 && comment.length <= 10) {
        alert("Invalid Inputs")
        return;
    }
    console.log("Submitted Successfully");
    setName("");
    setRating("10");
    setComment("")
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
              onChange={(e) => setRating(e.target.value)}
            ></input>
          </div>
          <div className="Field">
            <label>Gives us your Feedback</label>
            <textarea value={comment}
            onChange={(e) => setComment(e.target.value)} />
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
