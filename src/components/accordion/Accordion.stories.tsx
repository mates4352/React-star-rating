import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Accordion } from './Accordion';

export default {
   title: 'Example/Accorion',
   component: Accordion,
   argTypes: { onClick: { action: 'hello' } },
} as ComponentMeta<typeof Accordion>;

const Accordionn:ComponentStory<typeof Accordion> = (args) => {

   return <Accordion {...args}/>
}

export const Primary = Accordionn.bind({});

Primary.args = {
   isShowAccordion: false
}
