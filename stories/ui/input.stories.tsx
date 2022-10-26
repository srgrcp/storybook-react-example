/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input from '../../components/ui/input';

const inputMeta: ComponentMeta<typeof Input> = {
  title: 'Example/UI/Input',
  component: Input,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  args: {
    iconPosition: 'left',
  },
  argTypes: {
    iconPosition: {
      options: [ 'left', 'right' ],
      control: { type: 'radio' },
      table: {
        type: { summary: ['"left"', '"right"' ] },
        defaultValue: { summary: '"left"' }
      }
    }
  }
}

export default inputMeta

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({})
Default.args = {
  placeholder: 'Default',
  value: 'Hello world!',
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  placeholder: 'WithIcon',
  value: 'example@domain.com',
  icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-amber-50">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
}

export const Password = Template.bind({})
Password.args = {
  placeholder: 'Password',
  type: 'password',
  value: 'secret password 123',
  icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-amber-50">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
</svg>
}

export const IconRight = Template.bind({})
IconRight.args = {
  placeholder: 'IconRight',
  value: 'example@domain.com',
  iconPosition: 'right',
  icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-amber-50">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
</svg>
}

export const InputWithError = Template.bind({})
InputWithError.args = {
  placeholder: 'InputWithError',
  value: 'Not valid input',
  iconPosition: 'left',
  hasError: true,
  icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-amber-50">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
}
