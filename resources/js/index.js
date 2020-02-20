import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import AuthorEdit from "./components/AuthorEdit";
import ExportForm from "./components/ExportForm";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const routing = (
    <BrowserRouter>
        <div>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/export" component={ExportForm} />
                <Route exact path="/authors/:id/edit" component={AuthorEdit} />
            </Switch>
        </div>
    </BrowserRouter>
);

if (document.getElementById("root")) {
    ReactDOM.render(routing, document.getElementById("root"));
}
