import { isNumber } from 'lodash';
import { useMemo } from 'react';
import useToggle from 'react-use/lib/useToggle';

type ShownState = 'allIsShown' | 'someIsShown';

type ToggleListState<T> = {
  itemsToShow: T[];
  toggleShowAll: (nextValue?: unknown) => void;
  shownState: ShownState;
  isAllItemsAlwaysVisible: boolean;
};

/**
 * Keeps track of which items to show in a list that is capped by a max number.
 */
export const useToggleShowList = <T,>(
  items: T[],
  maxNumberOfItemsToShow?: number,
): ToggleListState<T> => {
  const [showAll, setShowAll] = useToggle(false);

  const itemsToShow = useMemo(() => {
    if (isNumber(maxNumberOfItemsToShow) && !showAll) {
      return items.slice(0, maxNumberOfItemsToShow);
    }

    return items;
  }, [maxNumberOfItemsToShow, showAll, items]);

  const isAllItemsAlwaysVisible =
    !maxNumberOfItemsToShow || items.length <= maxNumberOfItemsToShow;

  const shownState: ShownState =
    items.length > itemsToShow.length ? 'someIsShown' : 'allIsShown';

  return {
    itemsToShow,
    toggleShowAll: setShowAll,
    shownState,
    isAllItemsAlwaysVisible,
  };
};
