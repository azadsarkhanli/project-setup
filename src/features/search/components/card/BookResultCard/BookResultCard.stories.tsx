import { select, number, array } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { VStack } from 'native-base';
import React from 'react';

import { Screen } from '../../../../../common/components/Screen';
import { DigitalContentType } from '../../../../../features/search/lib/searchResultUtil';

import { BookResultCard } from './BookResultCard';

storiesOf('BookResultCard', module)
  .add('List', () => (
    <Screen pt={8}>
      <VStack space={8}>
        <BookResultCard
          title="Hekneveven"
          author="Lars Mytting"
          language="Norsk"
          price={1099.9}
          imageUrl="https://dj4fsg3e1je59.cloudfront.net/9788205539044/img/0-M"
          contentTypes={['audiobook', 'ebook']}
        />
        <BookResultCard
          title="History of Dogmas"
          author="Joseph Tixeront"
          price={undefined}
          imageUrl="https://dj4fsg3e1je59.cloudfront.net/9780259728627/img/0-M"
          contentTypes={['audiobook']}
        />
        <BookResultCard
          title={[
            { isHighlighted: true, value: 'Berenstain' },
            { isHighlighted: false, value: ' Bears and the Wheelchair Comm' },
          ]}
          author={[
            [{ isHighlighted: false, value: 'Philip K. Dick' }],
            [{ isHighlighted: false, value: 'Isaac Asimov' }],
            [
              { isHighlighted: true, value: 'Harry' },
              { isHighlighted: false, value: ' Harrison' },
            ],
            [{ isHighlighted: false, value: 'Ray Bradbury' }],
            [{ isHighlighted: false, value: 'Theodore Sturgeon' }],
            [{ isHighlighted: false, value: 'R. A. Lafferty' }],
            [
              { isHighlighted: false, value: 'Michael A. ' },
              { isHighlighted: true, value: 'Burstein' },
            ],
            [{ isHighlighted: false, value: 'Philip Jose Farmer' }],
            [{ isHighlighted: false, value: 'Carole McDonnell' }],
            [{ isHighlighted: false, value: 'Stanley G. Weinbaum' }],
            [{ isHighlighted: false, value: 'Jamie Wild' }],
            [{ isHighlighted: false, value: 'John Teehan' }],
            [{ isHighlighted: false, value: 'Nelson Bond' }],
            [{ isHighlighted: false, value: 'M. Turville Heitz' }],
            [{ isHighlighted: false, value: 'Edward J. McFadden III' }],
            [{ isHighlighted: false, value: 'Cynthia Ward' }],
            [{ isHighlighted: false, value: "Jay O'Connell" }],
            [{ isHighlighted: false, value: 'Jack Williamson' }],
            [{ isHighlighted: false, value: 'Gerri Leen' }],
            [{ isHighlighted: false, value: 'Edmond Hamilton' }],
            [{ isHighlighted: false, value: 'Lou Antonelli' }],
            [{ isHighlighted: false, value: 'James Dorr' }],
            [{ isHighlighted: false, value: 'Poul Anderson' }],
            [{ isHighlighted: false, value: 'Ann Wilkes' }],
            [{ isHighlighted: false, value: 'Alfred Bester' }],
            [{ isHighlighted: false, value: 'William R. Eakin' }],
            [{ isHighlighted: false, value: 'Brenda W. Clough' }],
            [{ isHighlighted: false, value: 'C. L. Moore' }],
            [{ isHighlighted: false, value: 'Warren Lapine' }],
            [{ isHighlighted: false, value: 'Mack Reynolds' }],
            [{ isHighlighted: false, value: 'H. Beam Piper' }],
            [{ isHighlighted: false, value: 'Frederik Pohl' }],
            [{ isHighlighted: false, value: 'Edgar Pangborn' }],
            [{ isHighlighted: false, value: 'Emil Petaja' }],
            [{ isHighlighted: false, value: 'Alan Edward Nourse' }],
            [{ isHighlighted: false, value: 'Jr. Walter M. Miller' }],
            [{ isHighlighted: false, value: 'Leigh Brackett' }],
            [{ isHighlighted: false, value: 'Marion Zimmer Bradley' }],
          ]}
          price={99}
          imageUrl="https://dj4fsg3e1je59.cloudfront.net/9781504020541/img/0-M"
          contentTypes={['ebook']}
        />
      </VStack>
    </Screen>
  ))
  .add('Knobs', () => (
    <Screen pt={8}>
      <VStack space={8}>
        <BookResultCard
          title={select(
            'Title',
            {
              none: undefined,
              regular: 'Hekneveven',
              long: 'Titles might be very very very very very very very very very long, this is how it is being handled',
            },
            'Hekneveven',
          )}
          author={select(
            'Author',
            {
              none: undefined,
              regular: 'Lars Mytting',
              long: 'There can be many authors which are listed, especially for non-fiction content. This list of authors should look ok.',
            },
            'Lars Mytting',
          )}
          language={select(
            'Language',
            { none: undefined, norwegian: 'Norsk', english: 'Engelsk' },
            'Engelsk',
          )}
          price={number('Price', 149)}
          imageUrl={select(
            'Image',
            {
              fallback:
                'https://dj4fsg3e1je59.cloudfront.net/9780259728627/img/0-M',
              regular:
                'https://dj4fsg3e1je59.cloudfront.net/9788205539044/img/0-M',
            },
            'https://dj4fsg3e1je59.cloudfront.net/9788205539044/img/0-M',
          )}
          contentTypes={
            array('ContentType', ['audiobook', 'ebook']) as DigitalContentType[]
          }
        />
      </VStack>
    </Screen>
  ));
