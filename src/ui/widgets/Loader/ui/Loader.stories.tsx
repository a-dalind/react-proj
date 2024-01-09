import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Loader } from './Loader';

export default {
    title: 'ui/widgets/Layout',
    component: Loader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Loader>;

// @ts-ignore

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
