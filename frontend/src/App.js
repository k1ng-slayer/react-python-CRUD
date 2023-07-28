// add `"proxy": "http://127.0.0.1:5000/"` in package.json

import "./App.css";
import Create from "./components/Create";
import Delete from "./components/Delete";
import Get from "./components/Get";
import Update from "./components/Update";

function App() {
    return (
        <div className="App">
            <Get />
            {/* <Create /> */}
            {/* <Update /> */}
            {/* <Delete /> */}
        </div>
    );
}

export default App;
