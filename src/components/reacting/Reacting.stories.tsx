import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {Reacting, valueActiveStar} from './Reacting';

export default {
   title: 'Example/Reacting',
   component: Reacting,
} as ComponentMeta<typeof Reacting>;

const Template: ComponentStory<typeof Reacting> = (args) => {
   const [valueStar, setValueStar] = useState<valueActiveStar>(0);
   const changeValueStar = (value: valueActiveStar) => {
      setValueStar(value)
   }

   return <Reacting {...args} changeValueStar={changeValueStar}/>;
}

export const Primary = Template.bind({});

Primary.args = {
   value: 2,
};
