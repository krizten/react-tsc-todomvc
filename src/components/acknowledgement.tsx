/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */
/*global React */

/// <reference path="../interfaces.d.ts"/>

import * as React from "react";

class TodoAcknowledgment extends React.Component<{}, {}> {
  public render() {
    return (
      <footer className='info'>
        <p>Double-click to edit a todo</p>
        <p>
          Created by <a href='http://github.com/remojansen/'>Remo H. Jansen</a>
        </p>
        <p>
          Part of <a href='http://todomvc.com'>TodoMVC</a>
        </p>
      </footer>
    );
  }
}

export { TodoAcknowledgment };
