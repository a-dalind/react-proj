import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';

export default {
    title: 'ui/components/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY,
};
export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Navbar = Template.bind({});
Navbar.args = {
    children: 'Text',
    theme: AppLinkTheme.NAVBAR,
};

export const NavbarDark = Template.bind({});
NavbarDark.args = {
    children: 'Text',
    theme: AppLinkTheme.NAVBAR,
};
NavbarDark.decorators = [ThemeDecorator(Theme.DARK)];
