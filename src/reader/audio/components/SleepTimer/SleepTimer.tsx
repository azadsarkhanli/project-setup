import { Actionsheet, Box, Button, Text, VStack } from 'native-base';
import React, { FC, useCallback, useState } from 'react';
import { useTranslation, TFunction } from 'react-i18next';
import useInterval from 'react-use/lib/useInterval';

import ActionsheetContent from '../../../../common/components/ActionsheetContent';
import { ActionsheetHeader } from '../../../../common/components/ActionsheetHeader';
import { TableCellGroup } from '../../../../common/components/TableCell/TableCellGroup';
import { TableCellLink } from '../../../../common/components/TableCell/TableCellLink';
import { secondsToDuration } from '../../../../features/player/utils';
import { TimerConfig, usePlayerContext } from '../../context/PlayerContext';

export type SleepTimerProps = {
  isOpen?: boolean;
  onClose: () => void;
};

const options = [5 * 60, 10 * 60, 15 * 60, 30 * 60, 45 * 60, 60 * 60];

export const SleepTimer: FC<SleepTimerProps> = ({ isOpen, onClose }) => {
  const { startTimer, cancelTimer, activeTimer } = usePlayerContext();
  const { t } = useTranslation('player');

  const handlePress = useCallback(
    (duration: number) => {
      startTimer(duration);
    },
    [startTimer],
  );

  return (
    <Actionsheet isOpen={isOpen} onClose={onClose}>
      <ActionsheetContent onClose={onClose}>
        <VStack w="full">
          <ActionsheetHeader mb={2}>{t('sleepTimer.title')}</ActionsheetHeader>
          {activeTimer ? (
            <RemainingTimer config={activeTimer} onCancel={cancelTimer} />
          ) : (
            <Options onPress={handlePress} />
          )}
        </VStack>
      </ActionsheetContent>
    </Actionsheet>
  );
};

type RemainingTimerProps = {
  config: TimerConfig;
  onCancel: () => void;
};

const getRemaining = (
  { startTimestamp, duration }: TimerConfig,
  t: TFunction<'player'>,
) => {
  const remainingSeconds = Math.max(
    0,
    startTimestamp + duration - Date.now() / 1000,
  );
  const remaining = secondsToDuration(remainingSeconds);
  if (remainingSeconds >= 3600) {
    return t('sleepTimer.countdownLong', { ...remaining });
  }
  return t('sleepTimer.countdownShort', { ...remaining });
};

const RemainingTimer: FC<RemainingTimerProps> = ({ config, onCancel }) => {
  const { t } = useTranslation('player');
  const [remaining, setRemaining] = useState<string>(getRemaining(config, t));

  useInterval(() => {
    setRemaining(getRemaining(config, t));
  }, 250);

  return (
    <Box alignItems="center">
      <Box my={16} alignItems="center">
        <Text variant="lg" fontSize={42} _dark={{ color: 'secondary.100' }}>
          {remaining}
        </Text>
      </Box>
      <Button
        colorScheme="primary"
        _dark={{
          colorScheme: 'primaryLight',
        }}
        size="lg"
        onPress={onCancel}
      >
        {t('sleepTimer.cancelButton')}
      </Button>
    </Box>
  );
};

type OptionsProps = {
  onPress: (duration: number) => void;
};

const Options: FC<OptionsProps> = ({ onPress }) => {
  const { t } = useTranslation('player');
  return (
    <TableCellGroup mt={2}>
      {options.map(option => (
        <TableCellLink
          key={option}
          variant="ghost"
          rightContent={null}
          size="sm"
          onPress={() => onPress(option)}
          title={t('sleepTimer.optionLabel', { minutes: option / 60 })}
        />
      ))}
    </TableCellGroup>
  );
};
