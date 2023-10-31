import "./styles.css";

export default function App() {
  function handleFormSubmit(e) {
    e.preventDefault();
    var element = document.getElementById("element-type").value;
    var eventListener = document.getElementById("event-listener").value;
    var code = document.getElementById("code").value;

    var domElement = document.createElement(element);
    var eventFunction = new Function(code);

    domElement.addEventListener(eventListener, eventFunction);

    document.getElementById("display").appendChild(domElement);
  }
  return (
    <div className="App">
      <form onSubmit={handleFormSubmit}>
        <label for="element-type">element-type</label>
        <input type="text" name="element-type" id="element-type" />
        <br />
        <label for="event-listener">event-listener</label>
        <input type="text" name="event-listener" id="event-listener" />
        <br />
        <label for="code">code</label>
        <textarea name="code" rows="7" cols="50" id="code" />
        <br />
        <input type="submit" />
      </form>
      <div id="display"></div>
    </div>
  );
}
