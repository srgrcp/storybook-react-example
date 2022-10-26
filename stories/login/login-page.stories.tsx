/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LoginPage } from '../../components/login/login-page';

const LoginPageMeta: ComponentMeta<typeof LoginPage> = {
  title: 'Example/Pages/LoginPage',
  component: LoginPage,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  },
  argTypes: {
    login: {
      action: 'login'
    }
  }
}

export default LoginPageMeta

const Template: ComponentStory<typeof LoginPage> = args => (<LoginPage {...args} />)

export const Default = Template.bind({})
