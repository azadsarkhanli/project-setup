import {
  Box,
  HStack,
  IBoxProps,
  IIconProps,
  ITextProps,
  ITheme,
  Text,
  View,
  VStack,
} from 'native-base';
import React, { ComponentType, FC, ReactNode } from 'react';

export type TableCellContainerProps = Omit<IBoxProps, 'size'> & {
  colorScheme?: keyof ITheme['colors'];
  size?: 'sm' | 'md' | 'lg';
  variant?: 'solid' | 'ghost' | 'outline';
};

export type TableCellProps = TableCellContainerProps & {
  leftContent?: ReactNode;
  rightContent?: ReactNode;
  subtitle?: string;
  title: string;
  _title?: ITextProps;
  Icon?: ComponentType<IIconProps>;
};

const py = {
  sm: 3,
  md: 5,
  lg: 7,
};

export const TableCellContainer: FC<TableCellContainerProps> = ({
  children,
  colorScheme = 'primary',
  size = 'md',
  variant = 'solid',
  ...props
}) => (
  <Box
    px={4}
    py={py[size]}
    bg={variant === 'solid' ? `${colorScheme}.200` : undefined}
    borderWidth={variant === 'outline' ? 1 : 0}
    borderColor="muted.400"
    borderRadius={8}
    width="100%"
    {...props}
  >
    {children}
  </Box>
);

export const TableCell: FC<TableCellProps> = ({
  colorScheme = 'primary',
  Icon,
  leftContent,
  rightContent,
  size = 'md',
  variant = 'solid',
  subtitle,
  title,
  _title,
  ...props
}) => {
  const left = leftContent ? (
    leftContent
  ) : Icon ? (
    <Icon color={`${colorScheme}.600`} size="md" />
  ) : null;
  return (
    <TableCellContainer
      colorScheme={colorScheme}
      size={size}
      variant={variant}
      {...props}
    >
      <HStack space={3} alignItems="center">
        {left}
        <View flex={1}>
          <VStack>
            <Text
              variant="md"
              fontWeight={variant === 'solid' ? 500 : 400}
              numberOfLines={2}
              {..._title}
            >
              {title}
            </Text>
            {subtitle && (
              <Text variant="xs" color="muted.500" numberOfLines={2}>
                {subtitle}
              </Text>
            )}
          </VStack>
        </View>
        {rightContent}
      </HStack>
    </TableCellContainer>
  );
};
