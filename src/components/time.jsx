function Time() {
  const time = new Date();
  const day = time.toLocaleDateString("en-us", { weekday: "long" });
  const morning = time.getHours() >= 6 && time.getHours() <= 12;
  let dayMessage;
  if (day.toLocaleLowerCase() === "Monday") {
    dayMessage = `Happy ${day}`;
  } else if (day.toLocaleLowerCase() === "Tuesday") {
    dayMessage = `${day}, Few days to go`;
  } else if (day.toLocaleLowerCase() === "Wednesday") {
    dayMessage = `${day}, Few days to go`;
  } else if (day.toLocaleLowerCase() === "Thursday") {
    dayMessage = `${day}, Few days to go`;
  } else if (day.toLocaleLowerCase() === "Friday") {
    dayMessage = `${day}, Few days to go`;
  } else {
    dayMessage = "Have fun";
  }
  return (
    <div className="App">
      <h1>{dayMessage}</h1>
      {morning ? <h2>Had Breafast</h2> : ""}
    </div>
  );
}

export default Time;
