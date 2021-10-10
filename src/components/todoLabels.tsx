/*jshint quotmark: false */
/*jshint white: false */
/*jshint trailing: false */
/*jshint newcap: false */
/*global React */

/// <reference path="../interfaces.d.ts"/>

import * as React from "react";

class TodoLabels extends React.Component<ITodoLabelsProps, {}> {
  render() {
    var labels = null;

    if (this.props.labels.length) {
      labels = this.props.labels.map((badge: string, index: number) => {
        return (
          <span key={index} className='badge'>
            {badge}
          </span>
        );
      });
    }
    return <div className='badges-container'>{labels}</div>;
  }
}

export { TodoLabels };
