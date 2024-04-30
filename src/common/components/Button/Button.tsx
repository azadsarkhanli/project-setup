import { Button as BaseButton, IButtonProps, IIconProps } from 'native-base';
import { IButtonComponentType } from 'native-base/lib/typescript/components/primitives/Button/types';
import React, { ComponentType, forwardRef, MutableRefObject } from 'react';

export type ButtonProps = Omit<
  IButtonProps,
  'startIcon' | 'endIcon' | 'size'
> & {
  StartIcon?: ComponentType<IIconProps>;
  EndIcon?: ComponentType<IIconProps>;
  size: 'sm' | 'md' | 'lg';
};

const iconSize = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
} as const;

const iconMargin = {
  sm: [-1, 0.5],
  md: [-1, 1],
  lg: [-2, 1.5],
} as const;

const getStartIconProps = (size: ButtonProps['size']) => ({
  size: iconSize[size],
  ml: iconMargin[size][0],
  mr: iconMargin[size][1],
  my: -3,
});

const getEndIconProps = (size: ButtonProps['size']) => ({
  size: iconSize[size],
  ml: iconMargin[size][1],
  mr: iconMargin[size][0],
  my: -3,
});

export const Button = forwardRef<IButtonComponentType, ButtonProps>(
  ({ StartIcon, EndIcon, ...props }, ref) => {
    const startIcon = StartIcon ? (
      <StartIcon {...getStartIconProps(props.size)} />
    ) : undefined;
    const endIcon = EndIcon ? (
      <EndIcon {...getEndIconProps(props.size)} />
    ) : undefined;

    return (
      <BaseButton
        ref={ref as MutableRefObject<IButtonComponentType>}
        startIcon={startIcon}
        endIcon={endIcon}
        {...props}
      />
    );
  },
);
