import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layouts from "./layouts/Todo";
import List from "./pages/Todo/List";
import AddUpdate from "./pages/Todo/AddUpdate";


function App() {
    return ( <
        BrowserRouter >
        <
        Routes >
        <
        Route path = "/"
        element = { < Layouts / > } >
        <
        Route index element = { < List / > }
        /> <
        Route path = "add"
        element = { < AddUpdate / > }
        /> <
        Route path = "update/:id"
        element = { < AddUpdate / > }
        />

        <
        /Route> <
        /Routes> <
        /BrowserRouter>
    );
}

export default App;