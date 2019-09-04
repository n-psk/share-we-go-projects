/* eslint-disable no-underscore-dangle */

import React from 'react';
import { getDisplayName } from 'share-we-go-utils';

function createComponentDidUpdate(instance) {
  return function componentDidUpdate() {
    const displayName = getDisplayName(this._reactInternalFiber.type);
    instance.updates.push({
      displayName,
    });
  };
}

// Inspired by https://github.com/maicki/why-did-you-update
class Rerender {
  updates = [];

  spy = () => {
    this.savedCDU = React.Component.prototype.componentDidUpdate;
    React.Component.prototype.componentDidUpdate = createComponentDidUpdate(this);
  };

  savedCDU = null;

  reset = () => {
    this.updates = [];
    React.Component.prototype.componentDidUpdate = this.savedCDU;
  };
}

export default new Rerender();
