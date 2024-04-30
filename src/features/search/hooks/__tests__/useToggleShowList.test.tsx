import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-test-renderer';

import { useToggleShowList } from '../useToggleShowList';

describe('useToggleShowList', () => {
  it('should always show all items if max is not set', () => {
    const { result } = renderHook(() => useToggleShowList([1, 2, 3]));

    expect(result.current.itemsToShow.length).toBe(3);
    expect(result.current.isAllItemsAlwaysVisible).toBe(true);
  });

  it('should toggle items when max is set', () => {
    const { result } = renderHook(() => useToggleShowList([1, 2, 3], 2));

    expect(result.current.itemsToShow.length).toBe(2);
    expect(result.current.isAllItemsAlwaysVisible).toBe(false);

    act(() => {
      result.current.toggleShowAll();
    });

    expect(result.current.itemsToShow.length).toBe(3);
    expect(result.current.isAllItemsAlwaysVisible).toBe(false);
  });

  it('should hide additional elements', () => {
    const { result, rerender } = renderHook(
      ({ list, max }) => useToggleShowList(list, max),
      {
        initialProps: { list: [1, 2, 3], max: 3 },
      },
    );

    expect(result.current.isAllItemsAlwaysVisible).toBe(true);
    expect(result.current.shownState).toBe('allIsShown');

    rerender({ list: [1, 2, 3, 4], max: 3 });
    expect(result.current.isAllItemsAlwaysVisible).toBe(false);
    expect(result.current.shownState).toBe('someIsShown');
  });
});
