type Props = {
  colorScheme: string;
};

export const Slider = {
  sizes: {
    lg: {
      thumbSize: 6,
      sliderSize: 6,
    },
    md: {
      thumbSize: 6,
      sliderSize: 5,
    },
    sm: {
      thumbSize: 6,
      sliderSize: 4,
    },
  },
};

export const SliderTrack = {
  baseStyle: ({ colorScheme }: Props) => {
    return {
      bg: `${colorScheme}.400`,
    };
  },
};

export const SliderThumb = {
  baseStyle: () => {
    return {
      bg: 'primary.600',
    };
  },
};

export const SliderFilledTrack = {
  baseStyle: ({ colorScheme }: Props) => {
    return {
      bg: `${colorScheme}.500`,
    };
  },
};
