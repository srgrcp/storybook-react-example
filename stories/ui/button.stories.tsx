/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../../components/ui/button';

const buttonMeta: ComponentMeta<typeof Button> = {
  title: 'Example/UI/Button',
  component: Button,
}

export default buttonMeta

const Template: ComponentStory<typeof Button> = (args) => (<Button {...args} />)

export const Primary = Template.bind({})
Primary.args = {
  children: 'PRIMARY',
  type: 'primary',
}

export const FullWidth = Template.bind({})
FullWidth.args = {
  children: 'FULL WIDTH',
  type: 'primary',
  className: 'w-full',
  fontWeight: 'bold',
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'SECONDARY',
  type: 'secondary',
  fontWeight: 'normal',
}

export const LoadingPrimary = Template.bind({})
LoadingPrimary.args = {
  children: 'LOADING',
  type: 'primary',
  loading: true,
}

export const LoadingFullWidth = Template.bind({})
LoadingFullWidth.args = {
  children: 'Loading',
  type: 'primary',
  className: 'w-full',
  fontWeight: 'bold',
  loading: true,
}
