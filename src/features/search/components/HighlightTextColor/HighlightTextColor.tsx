import { Text, ITextProps } from 'native-base';
import { ColorType } from 'native-base/lib/typescript/components/types';
import React, { FC } from 'react';
import {
  HitHighlightValues,
  HitHighlightArray,
} from 'react-instantsearch-core';

import { isEmptyHighlight, isNestedHighlight } from '../../lib/highlight';

type HighlightTextColorProps = Partial<ITextProps> & {
  highlightValues: HitHighlightValues | string | undefined;
  highlightColor: ColorType;
  separator?: string;
};

export const HighlightTextColor: FC<HighlightTextColorProps> = ({
  highlightValues,
  highlightColor,
  separator,
  children,
  ...textProps
}) => {
  if (typeof highlightValues === 'string') {
    return (
      <Text {...textProps}>
        {highlightValues}
        {children}
      </Text>
    );
  }

  if (isEmptyHighlight(highlightValues)) {
    return <Text {...textProps}>{children}</Text>;
  }

  if (isNestedHighlight(highlightValues)) {
    const asNested = highlightValues as unknown as Array<HitHighlightArray>;

    return (
      <Text {...textProps}>
        {asNested.map((values, index) => {
          return (
            <React.Fragment key={index}>
              <HighlightTextColorInternal
                highlightArray={values}
                highlightColor={highlightColor}
                {...textProps}
              />
              {index < asNested.length - 1 && separator}
            </React.Fragment>
          );
        })}
        {children}
      </Text>
    );
  }

  return (
    <HighlightTextColorInternal
      highlightArray={highlightValues as HitHighlightArray}
      highlightColor={highlightColor}
      {...textProps}
    >
      {children}
    </HighlightTextColorInternal>
  );
};

type HighlightTextColorInternalProps = Omit<
  HighlightTextColorProps,
  'highlightValues' | 'separator'
> & {
  highlightArray: HitHighlightArray;
};

const HighlightTextColorInternal: FC<HighlightTextColorInternalProps> = ({
  highlightArray,
  highlightColor,
  children,
  ...textProps
}) => {
  return (
    <Text {...textProps}>
      {highlightArray.map((pair, index) =>
        pair.isHighlighted ? (
          <Text
            key={index}
            {...textProps}
            color={highlightColor}
            _dark={{ color: highlightColor }}
          >
            {pair.value}
          </Text>
        ) : (
          pair.value
        ),
      )}
      {children}
    </Text>
  );
};
