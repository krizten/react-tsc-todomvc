"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoFooter = void 0;
const classnames_1 = require("classnames");
const React = require("react");
const constants_1 = require("./constants");
const utils_1 = require("./utils");
class TodoFooter extends React.Component {
    render() {
        var activeTodoWord = utils_1.Utils.pluralize(this.props.count, 'item');
        var clearButton = null;
        if (this.props.completedCount > 0) {
            clearButton = (React.createElement("button", { className: "clear-completed", onClick: this.props.onClearCompleted }, "Clear completed"));
        }
        const nowShowing = this.props.nowShowing;
        return (React.createElement("footer", { className: "footer" },
            React.createElement("span", { className: "todo-count" },
                React.createElement("strong", null, this.props.count),
                " ",
                activeTodoWord,
                " left"),
            React.createElement("ul", { className: "filters" },
                React.createElement("li", null,
                    React.createElement("a", { href: "#/", className: (0, classnames_1.default)({ selected: nowShowing === constants_1.ALL_TODOS }) }, "All")),
                ' ',
                React.createElement("li", null,
                    React.createElement("a", { href: "#/active", className: (0, classnames_1.default)({ selected: nowShowing === constants_1.ACTIVE_TODOS }) }, "Active")),
                ' ',
                React.createElement("li", null,
                    React.createElement("a", { href: "#/completed", className: (0, classnames_1.default)({ selected: nowShowing === constants_1.COMPLETED_TODOS }) }, "Completed"))),
            clearButton));
    }
}
exports.TodoFooter = TodoFooter;
