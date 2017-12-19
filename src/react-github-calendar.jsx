import React, { Component } from 'react';
import GitHubCalendar from 'github-calendar';
import PropTypes from 'proptypes';

import './style.css';

export default class ReactGithubCalendar extends Component {
  static PropTypes = {
    name: PropTypes.string.required
  };
  componentDidMount() {
    GitHubCalendar(this.refs.container, this.props.name);
  }
  render() {
    return (
      <div
        className={
          'calendar' + (this.props.className ? ' ' + this.props.className : '')
        }
        {...this.props}
        ref="container"
      />
    );
  }
}
