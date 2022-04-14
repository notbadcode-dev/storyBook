// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { SizeType } from 'src/core/enums/size.enum';
import { VariantType } from 'src/core/enums/variant.enum';
import Button from './button.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    variant: {
      options: [VariantType.primary, VariantType.secondary],
      control: { type: 'inline-radio' },
    },
    color: { control: 'color' },
    backgroundColor: { control: 'color' },
    borderWith: {
      control: { type: 'range', min: 0, max: 12, step: 1 },
    },
    borderColor: {
      control: 'color',
    },
    borderRadius: {
      control: { type: 'range', min: 0, max: 20, step: 1 },
    },
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<Button> = (args: Button) => ({
  props: args,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Primary.args = {
  variant: VariantType.primary,
  label: 'Primary',
};

Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: VariantType.secondary,
  label: 'Secondary',
};

export const Small = Template.bind({});
Small.args = {
  size: SizeType.small,
  label: 'Small',
};

export const Medium = Template.bind({});
Medium.args = {
  size: SizeType.medium,
  label: 'Medium',
};

export const Large = Template.bind({});
Large.args = {
  size: SizeType.large,
  label: 'Large',
};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
  size: SizeType.extraLarge,
  label: 'Extra Large',
};
