import { addDecorator } from '@storybook/react';
import { Theme } from '../../src/app/providers/ThemeProvider';
import { StyleDecorator } from '../../src/config/storybook/StyleDecorator';
import { ThemeDecorator } from '../../src/config/storybook/ThemeDecorator';
import { RouterDecorator } from '../../src/config/storybook/RouterDecorator';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouterDecorator);
