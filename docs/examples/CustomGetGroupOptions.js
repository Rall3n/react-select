import React, { Fragment } from 'react';

import Select from '../../src';
import { colourOptions, flavourOptions } from '../data';

const customGroupedOptions = [
    {
        label: 'Colours',
        values: colourOptions
    },
    {
        label: 'Flavours',
        values: flavourOptions
    }
];

export default () => (
  <Fragment>
      <p>Using values property, instead of options property.</p>
      <Select
        defaultValue={colourOptions[0]}
        isClearable
        isSearchable
        options={customGroupedOptions}
        getGroupOptions={(option) => (option['values'])}
      />
    </Fragment>
);