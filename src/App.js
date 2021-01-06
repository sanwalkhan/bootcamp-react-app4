import React, { useState } from "react";
import Message from "./message.js"
import "./App.css"

export default function App() {
let [count , setcount ] = useState(0)
let [ismorn , setmorn] = useState(false)

  return (
    <div className = {`box ${ismorn ? "daylight" : ""  } ` }>
     <Message counter = {count} />
    <p>
      Have a Good : {ismorn ? "Morning" : "Evening"}
    </p>
<br />
<button className = "btn" onClick = {() => setcount (++count) } >Updated count</button>

<button className = "btn" onClick = {() =>setmorn(!ismorn)}>Update Day/Night</button>

    </div>
  );
}


