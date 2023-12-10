import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Loader } from './Loader';

export default {
    title: 'ui/widgets/Loader',
    component: Loader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Loader>;

// @ts-ignore
// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
