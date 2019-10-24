import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import If from './If';

const IconButton = (props) => (
  <If test={!props.hide}>
    <button className={'btn btn-' + props.style} onClick={props.onClick}>
      <FontAwesomeIcon icon={props.icon} />
    </button>
  </If>
);

export default IconButton;
