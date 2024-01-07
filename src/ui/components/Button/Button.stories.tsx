import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from './Button';

export default {
    title: 'ui/components/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ThemeButton.CLEAR,
};

export const Border = Template.bind({});
Border.args = {
    children: 'Text',
    theme: ThemeButton.BORDER,
};

export const BorderDark = Template.bind({});
BorderDark.args = {
    children: 'Text',
    theme: ThemeButton.BORDER,
};
BorderDark.decorators = [ThemeDecorator(Theme.DARK)];