import { Locator } from '@gyldendaldigital/react-native-readium';
import { Manifest } from '@gyldendaldigital/react-native-readium/lib/typescript/types/publication';

import { TableOfContentsLink } from '../../reader/epub/components/ReaderOutline/useTableOfContents';

export const manifest: Manifest = {
  links: [
    {
      href: 'http://localhost:53608/D2C91157-7642-4815-B0F4-D235D7C49207/manifest.json',
      rel: ['self'],
      templated: false,
      type: 'application/webpub+json',
    },
    {
      href: '/~readium/positions',
      templated: false,
      type: 'application/vnd.readium.position-list+json',
    },
  ],
  metadata: {
    author: [{ name: 'Lars Mytting', role: ['aut'], sortAs: 'Mytting, Lars' }],
    conformsTo: ['https://readium.org/webpub-manifest/profiles/epub'],
    contributor: [
      { name: 'calibre (5.22.1) [https://calibre-ebook.com]', role: ['bkp'] },
    ],
    'http://purl.org/dc/terms/rights':
      'Leserettigheter er knyttet til avtale med id: 3F8CBBAC-0702-49DC-94CC-37569276B5D4. Kjøpedato : 27.07.2021. Bokhandel: ARK.NO',
    'https://calibre-ebook.comauthor_link_map': '{"Lars Mytting": ""}',
    'https://calibre-ebook.comtitle_sort': 'Hekneveven',
    identifier: '69a25191-0de3-4751-ab48-646cd6078c81',
    language: ['no'],
    presentation: {
      continuous: false,
      layout: 'reflowable',
      orientation: 'auto',
      overflow: 'auto',
      spread: 'auto',
    },
    published: '2020-08-14T22:00:00+0000',
    publisher: [{ name: 'Gyldendal Norsk Forlag AS' }],
    readingProgression: 'auto',
    sortAs: 'Hekneveven',
    title: 'Hekneveven',
  },
  readingOrder: [
    {
      href: '/coverpage.xhtml',
      properties: { id: 'cover' },
      templated: false,
      type: 'application/xhtml+xml',
    },
    {
      href: '/rights.xhtml',
      properties: { id: 'rights' },
      templated: false,
      type: 'application/xhtml+xml',
    },
    {
      href: '/text/chapter01.xhtml',
      properties: { id: 'c1' },
      templated: false,
      type: 'application/xhtml+xml',
    },
    {
      href: '/text/chapter02.xhtml',
      properties: { id: 'c2' },
      templated: false,
      type: 'application/xhtml+xml',
    },
    {
      href: '/text/chapter03.xhtml',
      properties: { id: 'c3' },
      templated: false,
      type: 'application/xhtml+xml',
    },
    {
      href: '/text/chapter04.xhtml',
      properties: { id: 'c4' },
      templated: false,
      type: 'application/xhtml+xml',
    },
    {
      href: '/text/chapter05.xhtml',
      properties: { id: 'c5' },
      templated: false,
      type: 'application/xhtml+xml',
    },
    {
      href: '/text/chapter06.xhtml',
      properties: { id: 'c6' },
      templated: false,
      type: 'application/xhtml+xml',
    },
    {
      href: '/text/chapter07.xhtml',
      properties: { id: 'c7' },
      templated: false,
      type: 'application/xhtml+xml',
    },
    {
      href: '/text/chapter08.xhtml',
      properties: { id: 'c8' },
      templated: false,
      type: 'application/xhtml+xml',
    },
    {
      href: '/text/chapter09.xhtml',
      properties: { id: 'c9' },
      templated: false,
      type: 'application/xhtml+xml',
    },
    {
      href: '/text/chapter10.xhtml',
      properties: { id: 'c10' },
      templated: false,
      type: 'application/xhtml+xml',
    },
    {
      href: '/text/chapter11.xhtml',
      properties: { id: 'c11' },
      templated: false,
      type: 'application/xhtml+xml',
    },
    {
      href: '/text/chapter12.xhtml',
      properties: { id: 'c12' },
      templated: false,
      type: 'application/xhtml+xml',
    },
    {
      href: '/text/chapter13.xhtml',
      properties: { id: 'c13' },
      templated: false,
      type: 'application/xhtml+xml',
    },
    {
      href: '/text/chapter14.xhtml',
      properties: { id: 'c14' },
      templated: false,
      type: 'application/xhtml+xml',
    },
    {
      href: '/text/chapter15.xhtml',
      properties: { id: 'c15' },
      templated: false,
      type: 'application/xhtml+xml',
    },
    {
      href: '/text/chapter16.xhtml',
      properties: { id: 'c16' },
      templated: false,
      type: 'application/xhtml+xml',
    },
    {
      href: '/text/chapter17.xhtml',
      properties: { id: 'c17' },
      templated: false,
      type: 'application/xhtml+xml',
    },
    {
      href: '/text/chapter18.xhtml',
      properties: { id: 'c18' },
      templated: false,
      type: 'application/xhtml+xml',
    },
    {
      href: '/text/chapter19.xhtml',
      properties: { id: 'c19' },
      templated: false,
      type: 'application/xhtml+xml',
    },
    {
      href: '/text/chapter20.xhtml',
      properties: { id: 'c20' },
      templated: false,
      type: 'application/xhtml+xml',
    },
    {
      href: '/text/chapter21.xhtml',
      properties: { id: 'c21' },
      templated: false,
      type: 'application/xhtml+xml',
    },
    {
      href: '/text/chapter22.xhtml',
      properties: { id: 'c22' },
      templated: false,
      type: 'application/xhtml+xml',
    },
    {
      href: '/text/chapter23.xhtml',
      properties: { id: 'c23' },
      templated: false,
      type: 'application/xhtml+xml',
    },
    {
      href: '/text/chapter24.xhtml',
      properties: { id: 'c24' },
      templated: false,
      type: 'application/xhtml+xml',
    },
    {
      href: '/text/chapter25.xhtml',
      properties: { id: 'c25' },
      templated: false,
      type: 'application/xhtml+xml',
    },
    {
      href: '/text/chapter26.xhtml',
      properties: { id: 'c26' },
      templated: false,
      type: 'application/xhtml+xml',
    },
    {
      href: '/text/chapter27.xhtml',
      properties: { id: 'c27' },
      templated: false,
      type: 'application/xhtml+xml',
    },
    {
      href: '/text/chapter28.xhtml',
      properties: { id: 'c28' },
      templated: false,
      type: 'application/xhtml+xml',
    },
    {
      href: '/text/chapter29.xhtml',
      properties: { id: 'c29' },
      templated: false,
      type: 'application/xhtml+xml',
    },
    {
      href: '/text/chapter30.xhtml',
      properties: { id: 'c30' },
      templated: false,
      type: 'application/xhtml+xml',
    },
    {
      href: '/text/chapter31.xhtml',
      properties: { id: 'c31' },
      templated: false,
      type: 'application/xhtml+xml',
    },
    {
      href: '/text/chapter32.xhtml',
      properties: { id: 'c32' },
      templated: false,
      type: 'application/xhtml+xml',
    },
    {
      href: '/text/chapter33.xhtml',
      properties: { id: 'c33' },
      templated: false,
      type: 'application/xhtml+xml',
    },
    {
      href: '/text/chapter34.xhtml',
      properties: { id: 'c34' },
      templated: false,
      type: 'application/xhtml+xml',
    },
    {
      href: '/text/chapter35.xhtml',
      properties: { id: 'c35' },
      templated: false,
      type: 'application/xhtml+xml',
    },
    {
      href: '/text/chapter36.xhtml',
      properties: { id: 'c36' },
      templated: false,
      type: 'application/xhtml+xml',
    },
    {
      href: '/text/chapter37.xhtml',
      properties: { id: 'c37' },
      templated: false,
      type: 'application/xhtml+xml',
    },
    {
      href: '/text/chapter38.xhtml',
      properties: { id: 'c38' },
      templated: false,
      type: 'application/xhtml+xml',
    },
    {
      href: '/text/chapter39.xhtml',
      properties: { id: 'c39' },
      templated: false,
      type: 'application/xhtml+xml',
    },
    {
      href: '/text/chapter40.xhtml',
      properties: { id: 'c40' },
      templated: false,
      type: 'application/xhtml+xml',
    },
    {
      href: '/text/chapter41.xhtml',
      properties: { id: 'c41' },
      templated: false,
      type: 'application/xhtml+xml',
    },
    {
      href: '/text/chapter42.xhtml',
      properties: { id: 'c42' },
      templated: false,
      type: 'application/xhtml+xml',
    },
    {
      href: '/text/chapter43.xhtml',
      properties: { id: 'c43' },
      templated: false,
      type: 'application/xhtml+xml',
    },
    {
      href: '/text/chapter44.xhtml',
      properties: { id: 'c44' },
      templated: false,
      type: 'application/xhtml+xml',
    },
    {
      href: '/text/chapter45.xhtml',
      properties: { id: 'c45' },
      templated: false,
      type: 'application/xhtml+xml',
    },
    {
      href: '/text/chapter46.xhtml',
      properties: { id: 'c46' },
      templated: false,
      type: 'application/xhtml+xml',
    },
    {
      href: '/text/chapter47.xhtml',
      properties: { id: 'c47' },
      templated: false,
      type: 'application/xhtml+xml',
    },
    {
      href: '/text/chapter48.xhtml',
      properties: { id: 'c48' },
      templated: false,
      type: 'application/xhtml+xml',
    },
    {
      href: '/text/chapter49.xhtml',
      properties: { id: 'c49' },
      templated: false,
      type: 'application/xhtml+xml',
    },
    {
      href: '/text/chapter50.xhtml',
      properties: { id: 'c50' },
      templated: false,
      type: 'application/xhtml+xml',
    },
    {
      href: '/text/chapter51.xhtml',
      properties: { id: 'c51' },
      templated: false,
      type: 'application/xhtml+xml',
    },
    {
      href: '/text/chapter52.xhtml',
      properties: { id: 'c52' },
      templated: false,
      type: 'application/xhtml+xml',
    },
    {
      href: '/gyldendal-kolofon.xhtml',
      properties: { id: 'gyldendal-kolofon' },
      templated: false,
      type: 'application/xhtml+xml',
    },
  ],
  resources: [
    {
      href: '/toc.ncx',
      properties: { id: 'ncx' },
      templated: false,
      type: 'application/x-dtbncx+xml',
    },
    {
      href: '/9788205539051_Mytting_Hekneveven.css',
      properties: { id: 'css' },
      templated: false,
      type: 'text/css',
    },
    {
      href: '/cover.jpg',
      properties: { id: 'cover-image' },
      rel: ['cover'],
      templated: false,
      type: 'image/jpeg',
    },
    {
      href: '/gyldendal.png',
      properties: { id: 'img-gyldendal' },
      templated: false,
      type: 'image/png',
    },
    {
      href: '/icon_epub.jpg',
      properties: { id: 'r2' },
      templated: false,
      type: 'image/jpeg',
    },
    {
      href: '/fonts/dejavuserifcondensed-bold.otf',
      properties: { id: 'font1-bold' },
      templated: false,
      type: 'application/x-font-opentype',
    },
    {
      href: '/fonts/dejavuserifcondensed-bolditalic.otf',
      properties: { id: 'font1-bolditalic' },
      templated: false,
      type: 'application/x-font-opentype',
    },
    {
      href: '/fonts/dejavuserifcondensed-italic.otf',
      properties: { id: 'font1-italic' },
      templated: false,
      type: 'application/x-font-opentype',
    },
    {
      href: '/fonts/dejavuserifcondensed.otf',
      properties: { id: 'font1' },
      templated: false,
      type: 'application/x-font-opentype',
    },
    {
      href: '/fonts/filter.flt',
      properties: { id: 'font-license1' },
      templated: false,
      type: 'text/plain',
    },
    {
      href: '/fonts/license',
      properties: { id: 'font-license2' },
      templated: false,
      type: 'text/plain',
    },
  ],
  toc: [
    { href: '/rights.xhtml', templated: false, title: 'Rettigheter' },
    {
      children: [
        {
          children: [
            {
              href: '/text/chapter04.xhtml',
              templated: false,
              title: 'Et dvergsmidd jordfunn',
            },
          ],
          href: '/text/chapter03.xhtml',
          templated: false,
          title: 'EN BORTGLEMT FORTELLING',
        },
        {
          children: [
            {
              href: '/text/chapter06.xhtml',
              templated: false,
              title: 'Tistelen',
            },
            {
              href: '/text/chapter07.xhtml',
              templated: false,
              title: 'Kammerladeren',
            },
            {
              href: '/text/chapter08.xhtml',
              templated: false,
              title: 'Riften i prestekjolen',
            },
            {
              href: '/text/chapter09.xhtml',
              templated: false,
              title: 'Femtifire kroner og seksti øre',
            },
            {
              href: '/text/chapter10.xhtml',
              templated: false,
              title: 'Nærest våre drømmer',
            },
            {
              href: '/text/chapter11.xhtml',
              templated: false,
              title: 'Heknekragen',
            },
            {
              href: '/text/chapter12.xhtml',
              templated: false,
              title: 'Botulven',
            },
            {
              href: '/text/chapter13.xhtml',
              templated: false,
              title: 'Den nye prestekjolen',
            },
            {
              href: '/text/chapter14.xhtml',
              templated: false,
              title: 'Kvinnen som visste',
            },
            {
              href: '/text/chapter15.xhtml',
              templated: false,
              title: 'Høyfjellsmonarken og kronhjorten',
            },
            {
              href: '/text/chapter16.xhtml',
              templated: false,
              title: 'Vinddraget fra sørøst',
            },
            {
              href: '/text/chapter17.xhtml',
              templated: false,
              title: 'Sjøl takk, men nei',
            },
            {
              href: '/text/chapter18.xhtml',
              templated: false,
              title: 'Ho var så pen',
            },
            {
              href: '/text/chapter19.xhtml',
              templated: false,
              title: 'Reinen er aldri der den var',
            },
            {
              href: '/text/chapter20.xhtml',
              templated: false,
              title: 'Gerhard Schönauer vender tilbake',
            },
            {
              href: '/text/chapter21.xhtml',
              templated: false,
              title: 'Mor di ville at du skulle',
            },
            {
              href: '/text/chapter22.xhtml',
              templated: false,
              title: 'Jeg har allerede begravd deg en gang',
            },
            {
              href: '/text/chapter23.xhtml',
              templated: false,
              title: 'Forelskelsens flettverk',
            },
            {
              href: '/text/chapter24.xhtml',
              templated: false,
              title: 'Et vasstrukkent klokkertau',
            },
            {
              href: '/text/chapter25.xhtml',
              templated: false,
              title: 'Farvel til Butangen',
            },
          ],
          href: '/text/chapter05.xhtml',
          templated: false,
          title: 'FØRSTE FORTELLING',
        },
        {
          children: [
            {
              href: '/text/chapter27.xhtml',
              templated: false,
              title: 'Mytische Clara',
            },
            {
              href: '/text/chapter28.xhtml',
              templated: false,
              title: 'Huggustups ut i alt',
            },
            {
              href: '/text/chapter29.xhtml',
              templated: false,
              title: 'Galerie Apfelbaum',
            },
            {
              href: '/text/chapter30.xhtml',
              templated: false,
              title: 'Bureisere',
            },
            {
              href: '/text/chapter31.xhtml',
              templated: false,
              title: 'Ettromsstua',
            },
            {
              href: '/text/chapter32.xhtml',
              templated: false,
              title: 'Åssen presten skal dø',
            },
            {
              href: '/text/chapter33.xhtml',
              templated: false,
              title: 'Hesjetråden som gnistret',
            },
            {
              href: '/text/chapter34.xhtml',
              templated: false,
              title: 'Dynamomesteren',
            },
            {
              href: '/text/chapter35.xhtml',
              templated: false,
              title: 'Gå i fjøset sjøl, du, herr Gildevollen',
            },
            {
              href: '/text/chapter36.xhtml',
              templated: false,
              title: 'I høyde med klokkeslagene',
            },
            {
              href: '/text/chapter37.xhtml',
              templated: false,
              title: 'Kle deg godt, da, guten min',
            },
            {
              href: '/text/chapter38.xhtml',
              templated: false,
              title: 'Korskåpa',
            },
            {
              href: '/text/chapter39.xhtml',
              templated: false,
              title: 'I morgen slipper vi bombene',
            },
            {
              href: '/text/chapter40.xhtml',
              templated: false,
              title: 'Hammerslaget på Hekne',
            },
            {
              href: '/text/chapter41.xhtml',
              templated: false,
              title: 'Oss var to en gang',
            },
            {
              href: '/text/chapter42.xhtml',
              templated: false,
              title: 'Men ikke i flammer',
            },
            {
              href: '/text/chapter43.xhtml',
              templated: false,
              title: 'Det siste oss gjør',
            },
          ],
          href: '/text/chapter26.xhtml',
          templated: false,
          title: 'ANDRE FORTELLING',
        },
        {
          children: [
            {
              href: '/text/chapter45.xhtml',
              templated: false,
              title: 'De stakkars klokkene vi har',
            },
            {
              href: '/text/chapter46.xhtml',
              templated: false,
              title: 'Frau Kreis',
            },
            {
              href: '/text/chapter47.xhtml',
              templated: false,
              title: 'Om du vil stå i dørkarmen og høre',
            },
            {
              href: '/text/chapter48.xhtml',
              templated: false,
              title: 'En gammel Blériot',
            },
            {
              href: '/text/chapter49.xhtml',
              templated: false,
              title: 'Til det kierligste minde',
            },
            {
              href: '/text/chapter50.xhtml',
              templated: false,
              title: 'Den gamle troens sakrament',
            },
            {
              href: '/text/chapter51.xhtml',
              templated: false,
              title: 'Gjensynet',
            },
          ],
          href: '/text/chapter44.xhtml',
          templated: false,
          title: 'TREDJE FORTELLING',
        },
        {
          href: '/text/chapter52.xhtml',
          templated: false,
          title: 'For hjelp underveis...',
        },
      ],
      href: '/coverpage.xhtml',
      templated: false,
      title: 'Hekneveven',
    },
    {
      children: [
        {
          href: '/gyldendal-kolofon.xhtml',
          templated: false,
          title: 'Kolofon',
        },
      ],
      href: '/gyldendal-kolofon.xhtml',
      templated: false,
      title: 'Om denne boka',
    },
  ],
} as Manifest;

export const positions: Locator[] = [
  {
    locations: { position: 1, totalProgression: 0, progression: 0 },
    type: 'application/xhtml+xml',
    href: '/coverpage.xhtml',
  },
  {
    type: 'application/xhtml+xml',
    href: '/rights.xhtml',
    locations: {
      totalProgression: 0.002506265664160401,
      progression: 0,
      position: 2,
    },
  },
  {
    href: '/text/chapter01.xhtml',
    type: 'application/xhtml+xml',
    locations: {
      totalProgression: 0.005012531328320802,
      progression: 0,
      position: 3,
    },
  },
  {
    locations: {
      progression: 0,
      totalProgression: 0.007518796992481203,
      position: 4,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter02.xhtml',
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter03.xhtml',
    locations: {
      progression: 0,
      totalProgression: 0.010025062656641603,
      position: 5,
    },
  },
  {
    locations: {
      position: 6,
      progression: 0,
      totalProgression: 0.012531328320802004,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter04.xhtml',
  },
  {
    locations: {
      position: 7,
      progression: 0.1111111111111111,
      totalProgression: 0.015037593984962405,
    },
    href: '/text/chapter04.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      progression: 0.2222222222222222,
      totalProgression: 0.017543859649122806,
      position: 8,
    },
    href: '/text/chapter04.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter04.xhtml',
    locations: {
      position: 9,
      progression: 0.3333333333333333,
      totalProgression: 0.020050125313283207,
    },
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter04.xhtml',
    locations: {
      progression: 0.4444444444444444,
      totalProgression: 0.022556390977443608,
      position: 10,
    },
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter04.xhtml',
    locations: {
      totalProgression: 0.02506265664160401,
      progression: 0.5555555555555556,
      position: 11,
    },
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter04.xhtml',
    locations: {
      position: 12,
      progression: 0.6666666666666666,
      totalProgression: 0.02756892230576441,
    },
  },
  {
    locations: {
      progression: 0.7777777777777778,
      totalProgression: 0.03007518796992481,
      position: 13,
    },
    href: '/text/chapter04.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter04.xhtml',
    locations: {
      totalProgression: 0.03258145363408521,
      progression: 0.8888888888888888,
      position: 14,
    },
  },
  {
    locations: {
      progression: 0,
      totalProgression: 0.03508771929824561,
      position: 15,
    },
    href: '/text/chapter05.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      position: 16,
      progression: 0,
      totalProgression: 0.03759398496240601,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter06.xhtml',
  },
  {
    href: '/text/chapter06.xhtml',
    type: 'application/xhtml+xml',
    locations: {
      position: 17,
      progression: 0.0625,
      totalProgression: 0.040100250626566414,
    },
  },
  {
    href: '/text/chapter06.xhtml',
    type: 'application/xhtml+xml',
    locations: {
      totalProgression: 0.042606516290726815,
      progression: 0.125,
      position: 18,
    },
  },
  {
    locations: {
      position: 19,
      totalProgression: 0.045112781954887216,
      progression: 0.1875,
    },
    href: '/text/chapter06.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      progression: 0.25,
      totalProgression: 0.047619047619047616,
      position: 20,
    },
    href: '/text/chapter06.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    href: '/text/chapter06.xhtml',
    type: 'application/xhtml+xml',
    locations: {
      progression: 0.3125,
      totalProgression: 0.05012531328320802,
      position: 21,
    },
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter06.xhtml',
    locations: {
      position: 22,
      totalProgression: 0.05263157894736842,
      progression: 0.375,
    },
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter06.xhtml',
    locations: {
      totalProgression: 0.05513784461152882,
      progression: 0.4375,
      position: 23,
    },
  },
  {
    locations: {
      progression: 0.5,
      totalProgression: 0.05764411027568922,
      position: 24,
    },
    href: '/text/chapter06.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      progression: 0.5625,
      totalProgression: 0.06015037593984962,
      position: 25,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter06.xhtml',
  },
  {
    locations: {
      totalProgression: 0.06265664160401002,
      progression: 0.625,
      position: 26,
    },
    href: '/text/chapter06.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter06.xhtml',
    locations: {
      totalProgression: 0.06516290726817042,
      progression: 0.6875,
      position: 27,
    },
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter06.xhtml',
    locations: {
      position: 28,
      progression: 0.75,
      totalProgression: 0.06766917293233082,
    },
  },
  {
    locations: {
      position: 29,
      totalProgression: 0.07017543859649122,
      progression: 0.8125,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter06.xhtml',
  },
  {
    locations: {
      position: 30,
      totalProgression: 0.07268170426065163,
      progression: 0.875,
    },
    href: '/text/chapter06.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      totalProgression: 0.07518796992481203,
      progression: 0.9375,
      position: 31,
    },
    href: '/text/chapter06.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      progression: 0,
      totalProgression: 0.07769423558897243,
      position: 32,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter07.xhtml',
  },
  {
    href: '/text/chapter07.xhtml',
    type: 'application/xhtml+xml',
    locations: {
      totalProgression: 0.08020050125313283,
      progression: 0.07142857142857142,
      position: 33,
    },
  },
  {
    href: '/text/chapter07.xhtml',
    type: 'application/xhtml+xml',
    locations: {
      position: 34,
      progression: 0.14285714285714285,
      totalProgression: 0.08270676691729323,
    },
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter07.xhtml',
    locations: {
      totalProgression: 0.08521303258145363,
      progression: 0.21428571428571427,
      position: 35,
    },
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter07.xhtml',
    locations: {
      totalProgression: 0.08771929824561403,
      progression: 0.2857142857142857,
      position: 36,
    },
  },
  {
    href: '/text/chapter07.xhtml',
    type: 'application/xhtml+xml',
    locations: {
      totalProgression: 0.09022556390977443,
      progression: 0.35714285714285715,
      position: 37,
    },
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter07.xhtml',
    locations: {
      position: 38,
      progression: 0.42857142857142855,
      totalProgression: 0.09273182957393483,
    },
  },
  {
    locations: {
      position: 39,
      totalProgression: 0.09523809523809523,
      progression: 0.5,
    },
    href: '/text/chapter07.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      progression: 0.5714285714285714,
      totalProgression: 0.09774436090225563,
      position: 40,
    },
    href: '/text/chapter07.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    href: '/text/chapter07.xhtml',
    type: 'application/xhtml+xml',
    locations: {
      progression: 0.6428571428571429,
      totalProgression: 0.10025062656641603,
      position: 41,
    },
  },
  {
    locations: {
      progression: 0.7142857142857143,
      totalProgression: 0.10275689223057644,
      position: 42,
    },
    href: '/text/chapter07.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter07.xhtml',
    locations: {
      position: 43,
      totalProgression: 0.10526315789473684,
      progression: 0.7857142857142857,
    },
  },
  {
    locations: {
      position: 44,
      totalProgression: 0.10776942355889724,
      progression: 0.8571428571428571,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter07.xhtml',
  },
  {
    locations: {
      progression: 0.9285714285714286,
      totalProgression: 0.11027568922305764,
      position: 45,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter07.xhtml',
  },
  {
    locations: {
      totalProgression: 0.11278195488721804,
      progression: 0,
      position: 46,
    },
    href: '/text/chapter08.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter08.xhtml',
    locations: {
      totalProgression: 0.11528822055137844,
      progression: 0.14285714285714285,
      position: 47,
    },
  },
  {
    locations: {
      totalProgression: 0.11779448621553884,
      progression: 0.2857142857142857,
      position: 48,
    },
    href: '/text/chapter08.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      totalProgression: 0.12030075187969924,
      progression: 0.42857142857142855,
      position: 49,
    },
    href: '/text/chapter08.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      position: 50,
      progression: 0.5714285714285714,
      totalProgression: 0.12280701754385964,
    },
    href: '/text/chapter08.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    href: '/text/chapter08.xhtml',
    type: 'application/xhtml+xml',
    locations: {
      position: 51,
      totalProgression: 0.12531328320802004,
      progression: 0.7142857142857143,
    },
  },
  {
    locations: {
      progression: 0.8571428571428571,
      totalProgression: 0.12781954887218044,
      position: 52,
    },
    href: '/text/chapter08.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      totalProgression: 0.13032581453634084,
      progression: 0,
      position: 53,
    },
    href: '/text/chapter09.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      position: 54,
      progression: 0.1111111111111111,
      totalProgression: 0.13283208020050125,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter09.xhtml',
  },
  {
    locations: {
      position: 55,
      totalProgression: 0.13533834586466165,
      progression: 0.2222222222222222,
    },
    href: '/text/chapter09.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter09.xhtml',
    locations: {
      position: 56,
      progression: 0.3333333333333333,
      totalProgression: 0.13784461152882205,
    },
  },
  {
    locations: {
      totalProgression: 0.14035087719298245,
      progression: 0.4444444444444444,
      position: 57,
    },
    href: '/text/chapter09.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      totalProgression: 0.14285714285714285,
      progression: 0.5555555555555556,
      position: 58,
    },
    href: '/text/chapter09.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      totalProgression: 0.14536340852130325,
      progression: 0.6666666666666666,
      position: 59,
    },
    href: '/text/chapter09.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      position: 60,
      progression: 0.7777777777777778,
      totalProgression: 0.14786967418546365,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter09.xhtml',
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter09.xhtml',
    locations: {
      progression: 0.8888888888888888,
      totalProgression: 0.15037593984962405,
      position: 61,
    },
  },
  {
    href: '/text/chapter10.xhtml',
    type: 'application/xhtml+xml',
    locations: {
      position: 62,
      totalProgression: 0.15288220551378445,
      progression: 0,
    },
  },
  {
    locations: {
      progression: 0.14285714285714285,
      totalProgression: 0.15538847117794485,
      position: 63,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter10.xhtml',
  },
  {
    locations: {
      totalProgression: 0.15789473684210525,
      progression: 0.2857142857142857,
      position: 64,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter10.xhtml',
  },
  {
    locations: {
      position: 65,
      progression: 0.42857142857142855,
      totalProgression: 0.16040100250626566,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter10.xhtml',
  },
  {
    href: '/text/chapter10.xhtml',
    type: 'application/xhtml+xml',
    locations: {
      totalProgression: 0.16290726817042606,
      progression: 0.5714285714285714,
      position: 66,
    },
  },
  {
    locations: {
      position: 67,
      totalProgression: 0.16541353383458646,
      progression: 0.7142857142857143,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter10.xhtml',
  },
  {
    locations: {
      position: 68,
      totalProgression: 0.16791979949874686,
      progression: 0.8571428571428571,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter10.xhtml',
  },
  {
    locations: {
      position: 69,
      totalProgression: 0.17042606516290726,
      progression: 0,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter11.xhtml',
  },
  {
    locations: {
      position: 70,
      totalProgression: 0.17293233082706766,
      progression: 0.125,
    },
    href: '/text/chapter11.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      progression: 0.25,
      totalProgression: 0.17543859649122806,
      position: 71,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter11.xhtml',
  },
  {
    locations: {
      totalProgression: 0.17794486215538846,
      progression: 0.375,
      position: 72,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter11.xhtml',
  },
  {
    locations: {
      position: 73,
      progression: 0.5,
      totalProgression: 0.18045112781954886,
    },
    href: '/text/chapter11.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      position: 74,
      totalProgression: 0.18295739348370926,
      progression: 0.625,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter11.xhtml',
  },
  {
    locations: {
      position: 75,
      totalProgression: 0.18546365914786966,
      progression: 0.75,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter11.xhtml',
  },
  {
    href: '/text/chapter11.xhtml',
    type: 'application/xhtml+xml',
    locations: {
      totalProgression: 0.18796992481203006,
      progression: 0.875,
      position: 76,
    },
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter12.xhtml',
    locations: {
      progression: 0,
      totalProgression: 0.19047619047619047,
      position: 77,
    },
  },
  {
    locations: {
      position: 78,
      totalProgression: 0.19298245614035087,
      progression: 0.07142857142857142,
    },
    href: '/text/chapter12.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    href: '/text/chapter12.xhtml',
    type: 'application/xhtml+xml',
    locations: {
      totalProgression: 0.19548872180451127,
      progression: 0.14285714285714285,
      position: 79,
    },
  },
  {
    locations: {
      totalProgression: 0.19799498746867167,
      progression: 0.21428571428571427,
      position: 80,
    },
    href: '/text/chapter12.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      position: 81,
      totalProgression: 0.20050125313283207,
      progression: 0.2857142857142857,
    },
    href: '/text/chapter12.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    href: '/text/chapter12.xhtml',
    type: 'application/xhtml+xml',
    locations: {
      totalProgression: 0.20300751879699247,
      progression: 0.35714285714285715,
      position: 82,
    },
  },
  {
    href: '/text/chapter12.xhtml',
    type: 'application/xhtml+xml',
    locations: {
      position: 83,
      progression: 0.42857142857142855,
      totalProgression: 0.20551378446115287,
    },
  },
  {
    locations: {
      progression: 0.5,
      totalProgression: 0.20802005012531327,
      position: 84,
    },
    href: '/text/chapter12.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      progression: 0.5714285714285714,
      totalProgression: 0.21052631578947367,
      position: 85,
    },
    href: '/text/chapter12.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    href: '/text/chapter12.xhtml',
    type: 'application/xhtml+xml',
    locations: {
      position: 86,
      progression: 0.6428571428571429,
      totalProgression: 0.21303258145363407,
    },
  },
  {
    locations: {
      position: 87,
      progression: 0.7142857142857143,
      totalProgression: 0.21553884711779447,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter12.xhtml',
  },
  {
    locations: {
      position: 88,
      progression: 0.7857142857142857,
      totalProgression: 0.21804511278195488,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter12.xhtml',
  },
  {
    locations: {
      totalProgression: 0.22055137844611528,
      progression: 0.8571428571428571,
      position: 89,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter12.xhtml',
  },
  {
    locations: {
      totalProgression: 0.22305764411027568,
      progression: 0.9285714285714286,
      position: 90,
    },
    href: '/text/chapter12.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      progression: 0,
      totalProgression: 0.22556390977443608,
      position: 91,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter13.xhtml',
  },
  {
    href: '/text/chapter13.xhtml',
    type: 'application/xhtml+xml',
    locations: {
      position: 92,
      totalProgression: 0.22807017543859648,
      progression: 0.2,
    },
  },
  {
    href: '/text/chapter13.xhtml',
    type: 'application/xhtml+xml',
    locations: {
      totalProgression: 0.23057644110275688,
      progression: 0.4,
      position: 93,
    },
  },
  {
    locations: {
      position: 94,
      totalProgression: 0.23308270676691728,
      progression: 0.6,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter13.xhtml',
  },
  {
    locations: {
      totalProgression: 0.23558897243107768,
      progression: 0.8,
      position: 95,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter13.xhtml',
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter14.xhtml',
    locations: {
      progression: 0,
      totalProgression: 0.23809523809523808,
      position: 96,
    },
  },
  {
    locations: {
      position: 97,
      progression: 0.058823529411764705,
      totalProgression: 0.24060150375939848,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter14.xhtml',
  },
  {
    locations: {
      totalProgression: 0.24310776942355888,
      progression: 0.11764705882352941,
      position: 98,
    },
    href: '/text/chapter14.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      position: 99,
      progression: 0.17647058823529413,
      totalProgression: 0.24561403508771928,
    },
    href: '/text/chapter14.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      position: 100,
      progression: 0.23529411764705882,
      totalProgression: 0.24812030075187969,
    },
    href: '/text/chapter14.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    href: '/text/chapter14.xhtml',
    type: 'application/xhtml+xml',
    locations: {
      progression: 0.29411764705882354,
      totalProgression: 0.2506265664160401,
      position: 101,
    },
  },
  {
    locations: {
      position: 102,
      totalProgression: 0.2531328320802005,
      progression: 0.35294117647058826,
    },
    href: '/text/chapter14.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      progression: 0.4117647058823529,
      totalProgression: 0.2556390977443609,
      position: 103,
    },
    href: '/text/chapter14.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter14.xhtml',
    locations: {
      totalProgression: 0.2581453634085213,
      progression: 0.47058823529411764,
      position: 104,
    },
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter14.xhtml',
    locations: {
      totalProgression: 0.2606516290726817,
      progression: 0.5294117647058824,
      position: 105,
    },
  },
  {
    locations: {
      progression: 0.5882352941176471,
      totalProgression: 0.2631578947368421,
      position: 106,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter14.xhtml',
  },
  {
    href: '/text/chapter14.xhtml',
    type: 'application/xhtml+xml',
    locations: {
      position: 107,
      totalProgression: 0.2656641604010025,
      progression: 0.6470588235294118,
    },
  },
  {
    href: '/text/chapter14.xhtml',
    type: 'application/xhtml+xml',
    locations: {
      progression: 0.7058823529411765,
      totalProgression: 0.2681704260651629,
      position: 108,
    },
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter14.xhtml',
    locations: {
      totalProgression: 0.2706766917293233,
      progression: 0.7647058823529411,
      position: 109,
    },
  },
  {
    locations: {
      position: 110,
      progression: 0.8235294117647058,
      totalProgression: 0.2731829573934837,
    },
    href: '/text/chapter14.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    href: '/text/chapter14.xhtml',
    type: 'application/xhtml+xml',
    locations: {
      progression: 0.8823529411764706,
      totalProgression: 0.2756892230576441,
      position: 111,
    },
  },
  {
    locations: {
      totalProgression: 0.2781954887218045,
      progression: 0.9411764705882353,
      position: 112,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter14.xhtml',
  },
  {
    locations: {
      position: 113,
      progression: 0,
      totalProgression: 0.2807017543859649,
    },
    href: '/text/chapter15.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      position: 114,
      totalProgression: 0.2832080200501253,
      progression: 0.07692307692307693,
    },
    href: '/text/chapter15.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      position: 115,
      totalProgression: 0.2857142857142857,
      progression: 0.15384615384615385,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter15.xhtml',
  },
  {
    locations: {
      progression: 0.23076923076923078,
      totalProgression: 0.2882205513784461,
      position: 116,
    },
    href: '/text/chapter15.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    href: '/text/chapter15.xhtml',
    type: 'application/xhtml+xml',
    locations: {
      totalProgression: 0.2907268170426065,
      progression: 0.3076923076923077,
      position: 117,
    },
  },
  {
    locations: {
      position: 118,
      progression: 0.38461538461538464,
      totalProgression: 0.2932330827067669,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter15.xhtml',
  },
  {
    locations: {
      progression: 0.46153846153846156,
      totalProgression: 0.2957393483709273,
      position: 119,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter15.xhtml',
  },
  {
    locations: {
      position: 120,
      totalProgression: 0.2982456140350877,
      progression: 0.5384615384615384,
    },
    href: '/text/chapter15.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      totalProgression: 0.3007518796992481,
      progression: 0.6153846153846154,
      position: 121,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter15.xhtml',
  },
  {
    locations: {
      progression: 0.6923076923076923,
      totalProgression: 0.3032581453634085,
      position: 122,
    },
    href: '/text/chapter15.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      position: 123,
      totalProgression: 0.3057644110275689,
      progression: 0.7692307692307693,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter15.xhtml',
  },
  {
    locations: {
      totalProgression: 0.3082706766917293,
      progression: 0.8461538461538461,
      position: 124,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter15.xhtml',
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter15.xhtml',
    locations: {
      position: 125,
      totalProgression: 0.3107769423558897,
      progression: 0.9230769230769231,
    },
  },
  {
    locations: {
      totalProgression: 0.3132832080200501,
      progression: 0,
      position: 126,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter16.xhtml',
  },
  {
    locations: {
      totalProgression: 0.3157894736842105,
      progression: 0.16666666666666666,
      position: 127,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter16.xhtml',
  },
  {
    locations: {
      position: 128,
      totalProgression: 0.3182957393483709,
      progression: 0.3333333333333333,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter16.xhtml',
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter16.xhtml',
    locations: {
      totalProgression: 0.3208020050125313,
      progression: 0.5,
      position: 129,
    },
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter16.xhtml',
    locations: {
      position: 130,
      totalProgression: 0.3233082706766917,
      progression: 0.6666666666666666,
    },
  },
  {
    locations: {
      totalProgression: 0.3258145363408521,
      progression: 0.8333333333333334,
      position: 131,
    },
    href: '/text/chapter16.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      progression: 0,
      totalProgression: 0.3283208020050125,
      position: 132,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter17.xhtml',
  },
  {
    href: '/text/chapter17.xhtml',
    type: 'application/xhtml+xml',
    locations: {
      totalProgression: 0.3308270676691729,
      progression: 0.125,
      position: 133,
    },
  },
  {
    locations: {
      progression: 0.25,
      totalProgression: 0.3333333333333333,
      position: 134,
    },
    href: '/text/chapter17.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter17.xhtml',
    locations: {
      progression: 0.375,
      totalProgression: 0.3358395989974937,
      position: 135,
    },
  },
  {
    locations: {
      progression: 0.5,
      totalProgression: 0.3383458646616541,
      position: 136,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter17.xhtml',
  },
  {
    locations: {
      progression: 0.625,
      totalProgression: 0.3408521303258145,
      position: 137,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter17.xhtml',
  },
  {
    locations: {
      position: 138,
      progression: 0.75,
      totalProgression: 0.3433583959899749,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter17.xhtml',
  },
  {
    locations: {
      totalProgression: 0.3458646616541353,
      progression: 0.875,
      position: 139,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter17.xhtml',
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter18.xhtml',
    locations: {
      progression: 0,
      totalProgression: 0.3483709273182957,
      position: 140,
    },
  },
  {
    href: '/text/chapter18.xhtml',
    type: 'application/xhtml+xml',
    locations: {
      totalProgression: 0.3508771929824561,
      progression: 0.2,
      position: 141,
    },
  },
  {
    href: '/text/chapter18.xhtml',
    type: 'application/xhtml+xml',
    locations: {
      position: 142,
      progression: 0.4,
      totalProgression: 0.3533834586466165,
    },
  },
  {
    href: '/text/chapter18.xhtml',
    type: 'application/xhtml+xml',
    locations: {
      progression: 0.6,
      totalProgression: 0.3558897243107769,
      position: 143,
    },
  },
  {
    locations: {
      position: 144,
      progression: 0.8,
      totalProgression: 0.3583959899749373,
    },
    href: '/text/chapter18.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter19.xhtml',
    locations: {
      totalProgression: 0.3609022556390977,
      progression: 0,
      position: 145,
    },
  },
  {
    locations: {
      progression: 0.07142857142857142,
      totalProgression: 0.3634085213032581,
      position: 146,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter19.xhtml',
  },
  {
    locations: {
      position: 147,
      progression: 0.14285714285714285,
      totalProgression: 0.3659147869674185,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter19.xhtml',
  },
  {
    locations: {
      position: 148,
      progression: 0.21428571428571427,
      totalProgression: 0.3684210526315789,
    },
    href: '/text/chapter19.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      progression: 0.2857142857142857,
      totalProgression: 0.37092731829573933,
      position: 149,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter19.xhtml',
  },
  {
    locations: {
      progression: 0.35714285714285715,
      totalProgression: 0.37343358395989973,
      position: 150,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter19.xhtml',
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter19.xhtml',
    locations: {
      totalProgression: 0.37593984962406013,
      progression: 0.42857142857142855,
      position: 151,
    },
  },
  {
    locations: {
      totalProgression: 0.37844611528822053,
      progression: 0.5,
      position: 152,
    },
    href: '/text/chapter19.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      progression: 0.5714285714285714,
      totalProgression: 0.38095238095238093,
      position: 153,
    },
    href: '/text/chapter19.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      totalProgression: 0.38345864661654133,
      progression: 0.6428571428571429,
      position: 154,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter19.xhtml',
  },
  {
    locations: {
      progression: 0.7142857142857143,
      totalProgression: 0.38596491228070173,
      position: 155,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter19.xhtml',
  },
  {
    href: '/text/chapter19.xhtml',
    type: 'application/xhtml+xml',
    locations: {
      position: 156,
      progression: 0.7857142857142857,
      totalProgression: 0.38847117794486213,
    },
  },
  {
    locations: {
      totalProgression: 0.39097744360902253,
      progression: 0.8571428571428571,
      position: 157,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter19.xhtml',
  },
  {
    locations: {
      position: 158,
      progression: 0.9285714285714286,
      totalProgression: 0.39348370927318294,
    },
    href: '/text/chapter19.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      progression: 0,
      totalProgression: 0.39598997493734334,
      position: 159,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter20.xhtml',
  },
  {
    href: '/text/chapter20.xhtml',
    type: 'application/xhtml+xml',
    locations: {
      progression: 0.1,
      totalProgression: 0.39849624060150374,
      position: 160,
    },
  },
  {
    locations: {
      progression: 0.2,
      totalProgression: 0.40100250626566414,
      position: 161,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter20.xhtml',
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter20.xhtml',
    locations: {
      progression: 0.3,
      totalProgression: 0.40350877192982454,
      position: 162,
    },
  },
  {
    locations: {
      totalProgression: 0.40601503759398494,
      progression: 0.4,
      position: 163,
    },
    href: '/text/chapter20.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      progression: 0.5,
      totalProgression: 0.40852130325814534,
      position: 164,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter20.xhtml',
  },
  {
    locations: {
      totalProgression: 0.41102756892230574,
      progression: 0.6,
      position: 165,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter20.xhtml',
  },
  {
    locations: {
      totalProgression: 0.41353383458646614,
      progression: 0.7,
      position: 166,
    },
    href: '/text/chapter20.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    href: '/text/chapter20.xhtml',
    type: 'application/xhtml+xml',
    locations: {
      totalProgression: 0.41604010025062654,
      progression: 0.8,
      position: 167,
    },
  },
  {
    href: '/text/chapter20.xhtml',
    type: 'application/xhtml+xml',
    locations: {
      totalProgression: 0.41854636591478694,
      progression: 0.9,
      position: 168,
    },
  },
  {
    href: '/text/chapter21.xhtml',
    type: 'application/xhtml+xml',
    locations: {
      totalProgression: 0.42105263157894735,
      progression: 0,
      position: 169,
    },
  },
  {
    locations: {
      progression: 0.125,
      totalProgression: 0.42355889724310775,
      position: 170,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter21.xhtml',
  },
  {
    locations: {
      progression: 0.25,
      totalProgression: 0.42606516290726815,
      position: 171,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter21.xhtml',
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter21.xhtml',
    locations: {
      position: 172,
      progression: 0.375,
      totalProgression: 0.42857142857142855,
    },
  },
  {
    href: '/text/chapter21.xhtml',
    type: 'application/xhtml+xml',
    locations: {
      totalProgression: 0.43107769423558895,
      progression: 0.5,
      position: 173,
    },
  },
  {
    locations: {
      position: 174,
      progression: 0.625,
      totalProgression: 0.43358395989974935,
    },
    href: '/text/chapter21.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      totalProgression: 0.43609022556390975,
      progression: 0.75,
      position: 175,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter21.xhtml',
  },
  {
    locations: {
      progression: 0.875,
      totalProgression: 0.43859649122807015,
      position: 176,
    },
    href: '/text/chapter21.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      position: 177,
      progression: 0,
      totalProgression: 0.44110275689223055,
    },
    href: '/text/chapter22.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      progression: 0.1,
      totalProgression: 0.44360902255639095,
      position: 178,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter22.xhtml',
  },
  {
    href: '/text/chapter22.xhtml',
    type: 'application/xhtml+xml',
    locations: {
      position: 179,
      progression: 0.2,
      totalProgression: 0.44611528822055135,
    },
  },
  {
    href: '/text/chapter22.xhtml',
    type: 'application/xhtml+xml',
    locations: {
      progression: 0.3,
      totalProgression: 0.44862155388471175,
      position: 180,
    },
  },
  {
    locations: {
      position: 181,
      progression: 0.4,
      totalProgression: 0.45112781954887216,
    },
    href: '/text/chapter22.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      totalProgression: 0.45363408521303256,
      progression: 0.5,
      position: 182,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter22.xhtml',
  },
  {
    locations: {
      totalProgression: 0.45614035087719296,
      progression: 0.6,
      position: 183,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter22.xhtml',
  },
  {
    locations: {
      progression: 0.7,
      totalProgression: 0.45864661654135336,
      position: 184,
    },
    href: '/text/chapter22.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    href: '/text/chapter22.xhtml',
    type: 'application/xhtml+xml',
    locations: {
      progression: 0.8,
      totalProgression: 0.46115288220551376,
      position: 185,
    },
  },
  {
    locations: {
      progression: 0.9,
      totalProgression: 0.46365914786967416,
      position: 186,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter22.xhtml',
  },
  {
    locations: {
      totalProgression: 0.46616541353383456,
      progression: 0,
      position: 187,
    },
    href: '/text/chapter23.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      totalProgression: 0.46867167919799496,
      progression: 0.125,
      position: 188,
    },
    href: '/text/chapter23.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter23.xhtml',
    locations: {
      progression: 0.25,
      totalProgression: 0.47117794486215536,
      position: 189,
    },
  },
  {
    locations: {
      progression: 0.375,
      totalProgression: 0.47368421052631576,
      position: 190,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter23.xhtml',
  },
  {
    locations: {
      progression: 0.5,
      totalProgression: 0.47619047619047616,
      position: 191,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter23.xhtml',
  },
  {
    href: '/text/chapter23.xhtml',
    type: 'application/xhtml+xml',
    locations: {
      progression: 0.625,
      totalProgression: 0.47869674185463656,
      position: 192,
    },
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter23.xhtml',
    locations: {
      totalProgression: 0.48120300751879697,
      progression: 0.75,
      position: 193,
    },
  },
  {
    locations: {
      position: 194,
      totalProgression: 0.48370927318295737,
      progression: 0.875,
    },
    href: '/text/chapter23.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      progression: 0,
      totalProgression: 0.48621553884711777,
      position: 195,
    },
    href: '/text/chapter24.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter24.xhtml',
    locations: {
      progression: 0.14285714285714285,
      totalProgression: 0.48872180451127817,
      position: 196,
    },
  },
  {
    locations: {
      totalProgression: 0.49122807017543857,
      progression: 0.2857142857142857,
      position: 197,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter24.xhtml',
  },
  {
    locations: {
      totalProgression: 0.49373433583959897,
      progression: 0.42857142857142855,
      position: 198,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter24.xhtml',
  },
  {
    locations: {
      totalProgression: 0.49624060150375937,
      progression: 0.5714285714285714,
      position: 199,
    },
    href: '/text/chapter24.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      progression: 0.7142857142857143,
      totalProgression: 0.49874686716791977,
      position: 200,
    },
    href: '/text/chapter24.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    href: '/text/chapter24.xhtml',
    type: 'application/xhtml+xml',
    locations: {
      progression: 0.8571428571428571,
      totalProgression: 0.5012531328320802,
      position: 201,
    },
  },
  {
    locations: {
      position: 202,
      progression: 0,
      totalProgression: 0.5037593984962406,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter25.xhtml',
  },
  {
    locations: {
      position: 203,
      progression: 0.25,
      totalProgression: 0.506265664160401,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter25.xhtml',
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter25.xhtml',
    locations: {
      totalProgression: 0.5087719298245614,
      progression: 0.5,
      position: 204,
    },
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter25.xhtml',
    locations: {
      position: 205,
      totalProgression: 0.5112781954887218,
      progression: 0.75,
    },
  },
  {
    locations: {
      progression: 0,
      totalProgression: 0.5137844611528822,
      position: 206,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter26.xhtml',
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter27.xhtml',
    locations: {
      totalProgression: 0.5162907268170426,
      progression: 0,
      position: 207,
    },
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter27.xhtml',
    locations: {
      progression: 0.1111111111111111,
      totalProgression: 0.518796992481203,
      position: 208,
    },
  },
  {
    locations: {
      progression: 0.2222222222222222,
      totalProgression: 0.5213032581453634,
      position: 209,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter27.xhtml',
  },
  {
    locations: {
      progression: 0.3333333333333333,
      totalProgression: 0.5238095238095238,
      position: 210,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter27.xhtml',
  },
  {
    href: '/text/chapter27.xhtml',
    type: 'application/xhtml+xml',
    locations: {
      position: 211,
      totalProgression: 0.5263157894736842,
      progression: 0.4444444444444444,
    },
  },
  {
    locations: {
      position: 212,
      progression: 0.5555555555555556,
      totalProgression: 0.5288220551378446,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter27.xhtml',
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter27.xhtml',
    locations: {
      totalProgression: 0.531328320802005,
      progression: 0.6666666666666666,
      position: 213,
    },
  },
  {
    locations: {
      progression: 0.7777777777777778,
      totalProgression: 0.5338345864661654,
      position: 214,
    },
    href: '/text/chapter27.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      position: 215,
      totalProgression: 0.5363408521303258,
      progression: 0.8888888888888888,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter27.xhtml',
  },
  {
    locations: {
      position: 216,
      progression: 0,
      totalProgression: 0.5388471177944862,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter28.xhtml',
  },
  {
    locations: {
      progression: 0.1,
      totalProgression: 0.5413533834586466,
      position: 217,
    },
    href: '/text/chapter28.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      position: 218,
      totalProgression: 0.543859649122807,
      progression: 0.2,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter28.xhtml',
  },
  {
    locations: {
      position: 219,
      totalProgression: 0.5463659147869674,
      progression: 0.3,
    },
    href: '/text/chapter28.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    href: '/text/chapter28.xhtml',
    type: 'application/xhtml+xml',
    locations: {
      position: 220,
      progression: 0.4,
      totalProgression: 0.5488721804511278,
    },
  },
  {
    locations: {
      position: 221,
      totalProgression: 0.5513784461152882,
      progression: 0.5,
    },
    href: '/text/chapter28.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    href: '/text/chapter28.xhtml',
    type: 'application/xhtml+xml',
    locations: {
      progression: 0.6,
      totalProgression: 0.5538847117794486,
      position: 222,
    },
  },
  {
    locations: {
      position: 223,
      progression: 0.7,
      totalProgression: 0.556390977443609,
    },
    href: '/text/chapter28.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter28.xhtml',
    locations: {
      position: 224,
      progression: 0.8,
      totalProgression: 0.5588972431077694,
    },
  },
  {
    locations: {
      totalProgression: 0.5614035087719298,
      progression: 0.9,
      position: 225,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter28.xhtml',
  },
  {
    locations: {
      position: 226,
      totalProgression: 0.5639097744360902,
      progression: 0,
    },
    href: '/text/chapter29.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      totalProgression: 0.5664160401002506,
      progression: 0.1111111111111111,
      position: 227,
    },
    href: '/text/chapter29.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      position: 228,
      totalProgression: 0.568922305764411,
      progression: 0.2222222222222222,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter29.xhtml',
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter29.xhtml',
    locations: {
      totalProgression: 0.5714285714285714,
      progression: 0.3333333333333333,
      position: 229,
    },
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter29.xhtml',
    locations: {
      totalProgression: 0.5739348370927319,
      progression: 0.4444444444444444,
      position: 230,
    },
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter29.xhtml',
    locations: {
      position: 231,
      totalProgression: 0.5764411027568922,
      progression: 0.5555555555555556,
    },
  },
  {
    locations: {
      progression: 0.6666666666666666,
      totalProgression: 0.5789473684210527,
      position: 232,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter29.xhtml',
  },
  {
    locations: {
      totalProgression: 0.581453634085213,
      progression: 0.7777777777777778,
      position: 233,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter29.xhtml',
  },
  {
    locations: {
      progression: 0.8888888888888888,
      totalProgression: 0.5839598997493735,
      position: 234,
    },
    href: '/text/chapter29.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      progression: 0,
      totalProgression: 0.5864661654135338,
      position: 235,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter30.xhtml',
  },
  {
    locations: {
      totalProgression: 0.5889724310776943,
      progression: 0.09090909090909091,
      position: 236,
    },
    href: '/text/chapter30.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      progression: 0.18181818181818182,
      totalProgression: 0.5914786967418546,
      position: 237,
    },
    href: '/text/chapter30.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      totalProgression: 0.5939849624060151,
      progression: 0.2727272727272727,
      position: 238,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter30.xhtml',
  },
  {
    locations: {
      progression: 0.36363636363636365,
      totalProgression: 0.5964912280701754,
      position: 239,
    },
    href: '/text/chapter30.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      progression: 0.45454545454545453,
      totalProgression: 0.5989974937343359,
      position: 240,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter30.xhtml',
  },
  {
    locations: {
      totalProgression: 0.6015037593984962,
      progression: 0.5454545454545454,
      position: 241,
    },
    href: '/text/chapter30.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    href: '/text/chapter30.xhtml',
    type: 'application/xhtml+xml',
    locations: {
      totalProgression: 0.6040100250626567,
      progression: 0.6363636363636364,
      position: 242,
    },
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter30.xhtml',
    locations: {
      position: 243,
      progression: 0.7272727272727273,
      totalProgression: 0.606516290726817,
    },
  },
  {
    locations: {
      totalProgression: 0.6090225563909775,
      progression: 0.8181818181818182,
      position: 244,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter30.xhtml',
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter30.xhtml',
    locations: {
      progression: 0.9090909090909091,
      totalProgression: 0.6115288220551378,
      position: 245,
    },
  },
  {
    href: '/text/chapter31.xhtml',
    type: 'application/xhtml+xml',
    locations: {
      position: 246,
      progression: 0,
      totalProgression: 0.6140350877192983,
    },
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter31.xhtml',
    locations: {
      totalProgression: 0.6165413533834586,
      progression: 0.16666666666666666,
      position: 247,
    },
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter31.xhtml',
    locations: {
      totalProgression: 0.6190476190476191,
      progression: 0.3333333333333333,
      position: 248,
    },
  },
  {
    locations: {
      totalProgression: 0.6215538847117794,
      progression: 0.5,
      position: 249,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter31.xhtml',
  },
  {
    locations: {
      progression: 0.6666666666666666,
      totalProgression: 0.6240601503759399,
      position: 250,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter31.xhtml',
  },
  {
    locations: {
      totalProgression: 0.6265664160401002,
      progression: 0.8333333333333334,
      position: 251,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter31.xhtml',
  },
  {
    href: '/text/chapter32.xhtml',
    type: 'application/xhtml+xml',
    locations: {
      totalProgression: 0.6290726817042607,
      progression: 0,
      position: 252,
    },
  },
  {
    locations: {
      totalProgression: 0.631578947368421,
      progression: 0.1111111111111111,
      position: 253,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter32.xhtml',
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter32.xhtml',
    locations: {
      progression: 0.2222222222222222,
      totalProgression: 0.6340852130325815,
      position: 254,
    },
  },
  {
    locations: {
      progression: 0.3333333333333333,
      totalProgression: 0.6365914786967418,
      position: 255,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter32.xhtml',
  },
  {
    locations: {
      progression: 0.4444444444444444,
      totalProgression: 0.6390977443609023,
      position: 256,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter32.xhtml',
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter32.xhtml',
    locations: {
      progression: 0.5555555555555556,
      totalProgression: 0.6416040100250626,
      position: 257,
    },
  },
  {
    locations: {
      position: 258,
      progression: 0.6666666666666666,
      totalProgression: 0.6441102756892231,
    },
    href: '/text/chapter32.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter32.xhtml',
    locations: {
      totalProgression: 0.6466165413533834,
      progression: 0.7777777777777778,
      position: 259,
    },
  },
  {
    locations: {
      totalProgression: 0.6491228070175439,
      progression: 0.8888888888888888,
      position: 260,
    },
    href: '/text/chapter32.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      totalProgression: 0.6516290726817042,
      progression: 0,
      position: 261,
    },
    href: '/text/chapter33.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter33.xhtml',
    locations: {
      progression: 0.125,
      totalProgression: 0.6541353383458647,
      position: 262,
    },
  },
  {
    href: '/text/chapter33.xhtml',
    type: 'application/xhtml+xml',
    locations: {
      totalProgression: 0.656641604010025,
      progression: 0.25,
      position: 263,
    },
  },
  {
    locations: {
      totalProgression: 0.6591478696741855,
      progression: 0.375,
      position: 264,
    },
    href: '/text/chapter33.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      totalProgression: 0.6616541353383458,
      progression: 0.5,
      position: 265,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter33.xhtml',
  },
  {
    href: '/text/chapter33.xhtml',
    type: 'application/xhtml+xml',
    locations: {
      progression: 0.625,
      totalProgression: 0.6641604010025063,
      position: 266,
    },
  },
  {
    locations: {
      progression: 0.75,
      totalProgression: 0.6666666666666666,
      position: 267,
    },
    href: '/text/chapter33.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter33.xhtml',
    locations: {
      progression: 0.875,
      totalProgression: 0.6691729323308271,
      position: 268,
    },
  },
  {
    locations: {
      totalProgression: 0.6716791979949874,
      progression: 0,
      position: 269,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter34.xhtml',
  },
  {
    locations: {
      progression: 0.08333333333333333,
      totalProgression: 0.6741854636591479,
      position: 270,
    },
    href: '/text/chapter34.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      totalProgression: 0.6766917293233082,
      progression: 0.16666666666666666,
      position: 271,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter34.xhtml',
  },
  {
    locations: {
      totalProgression: 0.6791979949874687,
      progression: 0.25,
      position: 272,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter34.xhtml',
  },
  {
    href: '/text/chapter34.xhtml',
    type: 'application/xhtml+xml',
    locations: {
      progression: 0.3333333333333333,
      totalProgression: 0.681704260651629,
      position: 273,
    },
  },
  {
    locations: {
      position: 274,
      progression: 0.4166666666666667,
      totalProgression: 0.6842105263157895,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter34.xhtml',
  },
  {
    locations: {
      progression: 0.5,
      totalProgression: 0.6867167919799498,
      position: 275,
    },
    href: '/text/chapter34.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    href: '/text/chapter34.xhtml',
    type: 'application/xhtml+xml',
    locations: {
      position: 276,
      totalProgression: 0.6892230576441103,
      progression: 0.5833333333333334,
    },
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter34.xhtml',
    locations: {
      totalProgression: 0.6917293233082706,
      progression: 0.6666666666666666,
      position: 277,
    },
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter34.xhtml',
    locations: {
      totalProgression: 0.6942355889724311,
      progression: 0.75,
      position: 278,
    },
  },
  {
    locations: {
      position: 279,
      progression: 0.8333333333333334,
      totalProgression: 0.6967418546365914,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter34.xhtml',
  },
  {
    locations: {
      position: 280,
      progression: 0.9166666666666666,
      totalProgression: 0.6992481203007519,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter34.xhtml',
  },
  {
    locations: {
      totalProgression: 0.7017543859649122,
      progression: 0,
      position: 281,
    },
    href: '/text/chapter35.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      totalProgression: 0.7042606516290727,
      progression: 0.14285714285714285,
      position: 282,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter35.xhtml',
  },
  {
    locations: {
      totalProgression: 0.706766917293233,
      progression: 0.2857142857142857,
      position: 283,
    },
    href: '/text/chapter35.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter35.xhtml',
    locations: {
      progression: 0.42857142857142855,
      totalProgression: 0.7092731829573935,
      position: 284,
    },
  },
  {
    href: '/text/chapter35.xhtml',
    type: 'application/xhtml+xml',
    locations: {
      position: 285,
      progression: 0.5714285714285714,
      totalProgression: 0.7117794486215538,
    },
  },
  {
    locations: {
      progression: 0.7142857142857143,
      totalProgression: 0.7142857142857143,
      position: 286,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter35.xhtml',
  },
  {
    locations: {
      totalProgression: 0.7167919799498746,
      progression: 0.8571428571428571,
      position: 287,
    },
    href: '/text/chapter35.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      progression: 0,
      totalProgression: 0.7192982456140351,
      position: 288,
    },
    href: '/text/chapter36.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      totalProgression: 0.7218045112781954,
      progression: 0.14285714285714285,
      position: 289,
    },
    href: '/text/chapter36.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      totalProgression: 0.7243107769423559,
      progression: 0.2857142857142857,
      position: 290,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter36.xhtml',
  },
  {
    href: '/text/chapter36.xhtml',
    type: 'application/xhtml+xml',
    locations: {
      position: 291,
      progression: 0.42857142857142855,
      totalProgression: 0.7268170426065163,
    },
  },
  {
    locations: {
      progression: 0.5714285714285714,
      totalProgression: 0.7293233082706767,
      position: 292,
    },
    href: '/text/chapter36.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter36.xhtml',
    locations: {
      position: 293,
      progression: 0.7142857142857143,
      totalProgression: 0.731829573934837,
    },
  },
  {
    locations: {
      position: 294,
      progression: 0.8571428571428571,
      totalProgression: 0.7343358395989975,
    },
    href: '/text/chapter36.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter37.xhtml',
    locations: {
      position: 295,
      progression: 0,
      totalProgression: 0.7368421052631579,
    },
  },
  {
    locations: {
      totalProgression: 0.7393483709273183,
      progression: 0.14285714285714285,
      position: 296,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter37.xhtml',
  },
  {
    locations: {
      progression: 0.2857142857142857,
      totalProgression: 0.7418546365914787,
      position: 297,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter37.xhtml',
  },
  {
    locations: {
      totalProgression: 0.7443609022556391,
      progression: 0.42857142857142855,
      position: 298,
    },
    href: '/text/chapter37.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      progression: 0.5714285714285714,
      totalProgression: 0.7468671679197995,
      position: 299,
    },
    href: '/text/chapter37.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter37.xhtml',
    locations: {
      progression: 0.7142857142857143,
      totalProgression: 0.7493734335839599,
      position: 300,
    },
  },
  {
    href: '/text/chapter37.xhtml',
    type: 'application/xhtml+xml',
    locations: {
      position: 301,
      progression: 0.8571428571428571,
      totalProgression: 0.7518796992481203,
    },
  },
  {
    href: '/text/chapter38.xhtml',
    type: 'application/xhtml+xml',
    locations: {
      position: 302,
      progression: 0,
      totalProgression: 0.7543859649122807,
    },
  },
  {
    locations: {
      progression: 0.1,
      totalProgression: 0.7568922305764411,
      position: 303,
    },
    href: '/text/chapter38.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      position: 304,
      progression: 0.2,
      totalProgression: 0.7593984962406015,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter38.xhtml',
  },
  {
    href: '/text/chapter38.xhtml',
    type: 'application/xhtml+xml',
    locations: {
      totalProgression: 0.7619047619047619,
      progression: 0.3,
      position: 305,
    },
  },
  {
    locations: {
      position: 306,
      progression: 0.4,
      totalProgression: 0.7644110275689223,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter38.xhtml',
  },
  {
    href: '/text/chapter38.xhtml',
    type: 'application/xhtml+xml',
    locations: {
      progression: 0.5,
      totalProgression: 0.7669172932330827,
      position: 307,
    },
  },
  {
    locations: {
      position: 308,
      progression: 0.6,
      totalProgression: 0.7694235588972431,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter38.xhtml',
  },
  {
    href: '/text/chapter38.xhtml',
    type: 'application/xhtml+xml',
    locations: {
      totalProgression: 0.7719298245614035,
      progression: 0.7,
      position: 309,
    },
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter38.xhtml',
    locations: {
      totalProgression: 0.7744360902255639,
      progression: 0.8,
      position: 310,
    },
  },
  {
    locations: {
      totalProgression: 0.7769423558897243,
      progression: 0.9,
      position: 311,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter38.xhtml',
  },
  {
    href: '/text/chapter39.xhtml',
    type: 'application/xhtml+xml',
    locations: {
      totalProgression: 0.7794486215538847,
      progression: 0,
      position: 312,
    },
  },
  {
    locations: {
      progression: 0.2,
      totalProgression: 0.7819548872180451,
      position: 313,
    },
    href: '/text/chapter39.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter39.xhtml',
    locations: {
      totalProgression: 0.7844611528822055,
      progression: 0.4,
      position: 314,
    },
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter39.xhtml',
    locations: {
      position: 315,
      progression: 0.6,
      totalProgression: 0.7869674185463659,
    },
  },
  {
    href: '/text/chapter39.xhtml',
    type: 'application/xhtml+xml',
    locations: {
      progression: 0.8,
      totalProgression: 0.7894736842105263,
      position: 316,
    },
  },
  {
    locations: {
      totalProgression: 0.7919799498746867,
      progression: 0,
      position: 317,
    },
    href: '/text/chapter40.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      progression: 0.125,
      totalProgression: 0.7944862155388471,
      position: 318,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter40.xhtml',
  },
  {
    locations: {
      totalProgression: 0.7969924812030075,
      progression: 0.25,
      position: 319,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter40.xhtml',
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter40.xhtml',
    locations: {
      position: 320,
      totalProgression: 0.7994987468671679,
      progression: 0.375,
    },
  },
  {
    locations: {
      totalProgression: 0.8020050125313283,
      progression: 0.5,
      position: 321,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter40.xhtml',
  },
  {
    locations: {
      position: 322,
      progression: 0.625,
      totalProgression: 0.8045112781954887,
    },
    href: '/text/chapter40.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter40.xhtml',
    locations: {
      position: 323,
      totalProgression: 0.8070175438596491,
      progression: 0.75,
    },
  },
  {
    href: '/text/chapter40.xhtml',
    type: 'application/xhtml+xml',
    locations: {
      progression: 0.875,
      totalProgression: 0.8095238095238095,
      position: 324,
    },
  },
  {
    locations: {
      progression: 0,
      totalProgression: 0.8120300751879699,
      position: 325,
    },
    href: '/text/chapter41.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      totalProgression: 0.8145363408521303,
      progression: 0.2,
      position: 326,
    },
    href: '/text/chapter41.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    href: '/text/chapter41.xhtml',
    type: 'application/xhtml+xml',
    locations: {
      position: 327,
      progression: 0.4,
      totalProgression: 0.8170426065162907,
    },
  },
  {
    href: '/text/chapter41.xhtml',
    type: 'application/xhtml+xml',
    locations: {
      totalProgression: 0.8195488721804511,
      progression: 0.6,
      position: 328,
    },
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter41.xhtml',
    locations: {
      position: 329,
      progression: 0.8,
      totalProgression: 0.8220551378446115,
    },
  },
  {
    locations: {
      totalProgression: 0.8245614035087719,
      progression: 0,
      position: 330,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter42.xhtml',
  },
  {
    locations: {
      progression: 0.14285714285714285,
      totalProgression: 0.8270676691729323,
      position: 331,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter42.xhtml',
  },
  {
    href: '/text/chapter42.xhtml',
    type: 'application/xhtml+xml',
    locations: {
      progression: 0.2857142857142857,
      totalProgression: 0.8295739348370927,
      position: 332,
    },
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter42.xhtml',
    locations: {
      totalProgression: 0.8320802005012531,
      progression: 0.42857142857142855,
      position: 333,
    },
  },
  {
    locations: {
      totalProgression: 0.8345864661654135,
      progression: 0.5714285714285714,
      position: 334,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter42.xhtml',
  },
  {
    locations: {
      totalProgression: 0.8370927318295739,
      progression: 0.7142857142857143,
      position: 335,
    },
    href: '/text/chapter42.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      position: 336,
      totalProgression: 0.8395989974937343,
      progression: 0.8571428571428571,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter42.xhtml',
  },
  {
    locations: {
      totalProgression: 0.8421052631578947,
      progression: 0,
      position: 337,
    },
    href: '/text/chapter43.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      totalProgression: 0.8446115288220551,
      progression: 0.1111111111111111,
      position: 338,
    },
    href: '/text/chapter43.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      progression: 0.2222222222222222,
      totalProgression: 0.8471177944862155,
      position: 339,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter43.xhtml',
  },
  {
    locations: {
      progression: 0.3333333333333333,
      totalProgression: 0.849624060150376,
      position: 340,
    },
    href: '/text/chapter43.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    href: '/text/chapter43.xhtml',
    type: 'application/xhtml+xml',
    locations: {
      totalProgression: 0.8521303258145363,
      progression: 0.4444444444444444,
      position: 341,
    },
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter43.xhtml',
    locations: {
      totalProgression: 0.8546365914786967,
      progression: 0.5555555555555556,
      position: 342,
    },
  },
  {
    locations: {
      position: 343,
      progression: 0.6666666666666666,
      totalProgression: 0.8571428571428571,
    },
    href: '/text/chapter43.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter43.xhtml',
    locations: {
      totalProgression: 0.8596491228070176,
      progression: 0.7777777777777778,
      position: 344,
    },
  },
  {
    locations: {
      progression: 0.8888888888888888,
      totalProgression: 0.8621553884711779,
      position: 345,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter43.xhtml',
  },
  {
    locations: {
      totalProgression: 0.8646616541353384,
      progression: 0,
      position: 346,
    },
    href: '/text/chapter44.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      totalProgression: 0.8671679197994987,
      progression: 0,
      position: 347,
    },
    href: '/text/chapter45.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    href: '/text/chapter45.xhtml',
    type: 'application/xhtml+xml',
    locations: {
      progression: 0.125,
      totalProgression: 0.8696741854636592,
      position: 348,
    },
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter45.xhtml',
    locations: {
      totalProgression: 0.8721804511278195,
      progression: 0.25,
      position: 349,
    },
  },
  {
    href: '/text/chapter45.xhtml',
    type: 'application/xhtml+xml',
    locations: {
      progression: 0.375,
      totalProgression: 0.87468671679198,
      position: 350,
    },
  },
  {
    locations: {
      progression: 0.5,
      totalProgression: 0.8771929824561403,
      position: 351,
    },
    href: '/text/chapter45.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      totalProgression: 0.8796992481203008,
      progression: 0.625,
      position: 352,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter45.xhtml',
  },
  {
    href: '/text/chapter45.xhtml',
    type: 'application/xhtml+xml',
    locations: {
      position: 353,
      progression: 0.75,
      totalProgression: 0.8822055137844611,
    },
  },
  {
    href: '/text/chapter45.xhtml',
    type: 'application/xhtml+xml',
    locations: {
      totalProgression: 0.8847117794486216,
      progression: 0.875,
      position: 354,
    },
  },
  {
    locations: {
      totalProgression: 0.8872180451127819,
      progression: 0,
      position: 355,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter46.xhtml',
  },
  {
    locations: {
      progression: 0.1,
      totalProgression: 0.8897243107769424,
      position: 356,
    },
    href: '/text/chapter46.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      totalProgression: 0.8922305764411027,
      progression: 0.2,
      position: 357,
    },
    href: '/text/chapter46.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter46.xhtml',
    locations: {
      progression: 0.3,
      totalProgression: 0.8947368421052632,
      position: 358,
    },
  },
  {
    locations: {
      totalProgression: 0.8972431077694235,
      progression: 0.4,
      position: 359,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter46.xhtml',
  },
  {
    href: '/text/chapter46.xhtml',
    type: 'application/xhtml+xml',
    locations: {
      position: 360,
      progression: 0.5,
      totalProgression: 0.899749373433584,
    },
  },
  {
    locations: {
      totalProgression: 0.9022556390977443,
      progression: 0.6,
      position: 361,
    },
    href: '/text/chapter46.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter46.xhtml',
    locations: {
      totalProgression: 0.9047619047619048,
      progression: 0.7,
      position: 362,
    },
  },
  {
    href: '/text/chapter46.xhtml',
    type: 'application/xhtml+xml',
    locations: {
      progression: 0.8,
      totalProgression: 0.9072681704260651,
      position: 363,
    },
  },
  {
    locations: {
      position: 364,
      totalProgression: 0.9097744360902256,
      progression: 0.9,
    },
    href: '/text/chapter46.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      totalProgression: 0.9122807017543859,
      progression: 0,
      position: 365,
    },
    href: '/text/chapter47.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter47.xhtml',
    locations: {
      progression: 0.14285714285714285,
      totalProgression: 0.9147869674185464,
      position: 366,
    },
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter47.xhtml',
    locations: {
      position: 367,
      totalProgression: 0.9172932330827067,
      progression: 0.2857142857142857,
    },
  },
  {
    locations: {
      position: 368,
      progression: 0.42857142857142855,
      totalProgression: 0.9197994987468672,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter47.xhtml',
  },
  {
    href: '/text/chapter47.xhtml',
    type: 'application/xhtml+xml',
    locations: {
      progression: 0.5714285714285714,
      totalProgression: 0.9223057644110275,
      position: 369,
    },
  },
  {
    locations: {
      totalProgression: 0.924812030075188,
      progression: 0.7142857142857143,
      position: 370,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter47.xhtml',
  },
  {
    locations: {
      position: 371,
      progression: 0.8571428571428571,
      totalProgression: 0.9273182957393483,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter47.xhtml',
  },
  {
    locations: {
      progression: 0,
      totalProgression: 0.9298245614035088,
      position: 372,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter48.xhtml',
  },
  {
    locations: {
      progression: 0.1111111111111111,
      totalProgression: 0.9323308270676691,
      position: 373,
    },
    href: '/text/chapter48.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      totalProgression: 0.9348370927318296,
      progression: 0.2222222222222222,
      position: 374,
    },
    href: '/text/chapter48.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      progression: 0.3333333333333333,
      totalProgression: 0.9373433583959899,
      position: 375,
    },
    href: '/text/chapter48.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      position: 376,
      progression: 0.4444444444444444,
      totalProgression: 0.9398496240601504,
    },
    href: '/text/chapter48.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      progression: 0.5555555555555556,
      totalProgression: 0.9423558897243107,
      position: 377,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter48.xhtml',
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter48.xhtml',
    locations: {
      position: 378,
      progression: 0.6666666666666666,
      totalProgression: 0.9448621553884712,
    },
  },
  {
    locations: {
      progression: 0.7777777777777778,
      totalProgression: 0.9473684210526315,
      position: 379,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter48.xhtml',
  },
  {
    locations: {
      position: 380,
      progression: 0.8888888888888888,
      totalProgression: 0.949874686716792,
    },
    href: '/text/chapter48.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      progression: 0,
      totalProgression: 0.9523809523809523,
      position: 381,
    },
    href: '/text/chapter49.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    href: '/text/chapter49.xhtml',
    type: 'application/xhtml+xml',
    locations: {
      position: 382,
      progression: 0.25,
      totalProgression: 0.9548872180451128,
    },
  },
  {
    locations: {
      progression: 0.5,
      totalProgression: 0.9573934837092731,
      position: 383,
    },
    href: '/text/chapter49.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      totalProgression: 0.9598997493734336,
      progression: 0.75,
      position: 384,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter49.xhtml',
  },
  {
    locations: {
      position: 385,
      totalProgression: 0.9624060150375939,
      progression: 0,
    },
    href: '/text/chapter50.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      totalProgression: 0.9649122807017544,
      progression: 0.2,
      position: 386,
    },
    href: '/text/chapter50.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      progression: 0.4,
      totalProgression: 0.9674185463659147,
      position: 387,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter50.xhtml',
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter50.xhtml',
    locations: {
      progression: 0.6,
      totalProgression: 0.9699248120300752,
      position: 388,
    },
  },
  {
    locations: {
      position: 389,
      progression: 0.8,
      totalProgression: 0.9724310776942355,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter50.xhtml',
  },
  {
    locations: {
      totalProgression: 0.974937343358396,
      progression: 0,
      position: 390,
    },
    href: '/text/chapter51.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      position: 391,
      totalProgression: 0.9774436090225563,
      progression: 0.14285714285714285,
    },
    href: '/text/chapter51.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      totalProgression: 0.9799498746867168,
      progression: 0.2857142857142857,
      position: 392,
    },
    href: '/text/chapter51.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      totalProgression: 0.9824561403508771,
      progression: 0.42857142857142855,
      position: 393,
    },
    href: '/text/chapter51.xhtml',
    type: 'application/xhtml+xml',
  },
  {
    locations: {
      totalProgression: 0.9849624060150376,
      progression: 0.5714285714285714,
      position: 394,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter51.xhtml',
  },
  {
    href: '/text/chapter51.xhtml',
    type: 'application/xhtml+xml',
    locations: {
      totalProgression: 0.9874686716791979,
      progression: 0.7142857142857143,
      position: 395,
    },
  },
  {
    type: 'application/xhtml+xml',
    href: '/text/chapter51.xhtml',
    locations: {
      totalProgression: 0.9899749373433584,
      progression: 0.8571428571428571,
      position: 396,
    },
  },
  {
    locations: {
      position: 397,
      totalProgression: 0.9924812030075187,
      progression: 0,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter52.xhtml',
  },
  {
    locations: {
      position: 398,
      totalProgression: 0.9949874686716792,
      progression: 0.5,
    },
    type: 'application/xhtml+xml',
    href: '/text/chapter52.xhtml',
  },
  {
    locations: {
      position: 399,
      progression: 0,
      totalProgression: 0.9974937343358395,
    },
    type: 'application/xhtml+xml',
    href: '/gyldendal-kolofon.xhtml',
  },
];

export const flattenToC: TableOfContentsLink[] = [
  { depth: 0, href: '/rights.xhtml', templated: false, title: 'Rettigheter' },
  { depth: 0, href: '/coverpage.xhtml', templated: false, title: 'Hekneveven' },
  {
    depth: 1,
    href: '/text/chapter03.xhtml',
    templated: false,
    title: 'EN BORTGLEMT FORTELLING',
  },
  {
    depth: 2,
    href: '/text/chapter04.xhtml',
    templated: false,
    title: 'Et dvergsmidd jordfunn',
  },
  {
    depth: 1,
    href: '/text/chapter05.xhtml',
    templated: false,
    title: 'FØRSTE FORTELLING',
  },
  {
    depth: 2,
    href: '/text/chapter06.xhtml',
    templated: false,
    title: 'Tistelen',
  },
  {
    depth: 2,
    href: '/text/chapter07.xhtml',
    templated: false,
    title: 'Kammerladeren',
  },
  {
    depth: 2,
    href: '/text/chapter08.xhtml',
    templated: false,
    title: 'Riften i prestekjolen',
  },
  {
    depth: 2,
    href: '/text/chapter09.xhtml',
    templated: false,
    title: 'Femtifire kroner og seksti øre',
  },
  {
    depth: 2,
    href: '/text/chapter10.xhtml',
    templated: false,
    title: 'Nærest våre drømmer',
  },
  {
    depth: 2,
    href: '/text/chapter11.xhtml',
    templated: false,
    title: 'Heknekragen',
  },
  {
    depth: 2,
    href: '/text/chapter12.xhtml',
    templated: false,
    title: 'Botulven',
  },
  {
    depth: 2,
    href: '/text/chapter13.xhtml',
    templated: false,
    title: 'Den nye prestekjolen',
  },
  {
    depth: 2,
    href: '/text/chapter14.xhtml',
    templated: false,
    title: 'Kvinnen som visste',
  },
  {
    depth: 2,
    href: '/text/chapter15.xhtml',
    templated: false,
    title: 'Høyfjellsmonarken og kronhjorten',
  },
  {
    depth: 2,
    href: '/text/chapter16.xhtml',
    templated: false,
    title: 'Vinddraget fra sørøst',
  },
  {
    depth: 2,
    href: '/text/chapter17.xhtml',
    templated: false,
    title: 'Sjøl takk, men nei',
  },
  {
    depth: 2,
    href: '/text/chapter18.xhtml',
    templated: false,
    title: 'Ho var så pen',
  },
  {
    depth: 2,
    href: '/text/chapter19.xhtml',
    templated: false,
    title: 'Reinen er aldri der den var',
  },
  {
    depth: 2,
    href: '/text/chapter20.xhtml',
    templated: false,
    title: 'Gerhard Schönauer vender tilbake',
  },
  {
    depth: 2,
    href: '/text/chapter21.xhtml',
    templated: false,
    title: 'Mor di ville at du skulle',
  },
  {
    depth: 2,
    href: '/text/chapter22.xhtml',
    templated: false,
    title: 'Jeg har allerede begravd deg en gang',
  },
  {
    depth: 2,
    href: '/text/chapter23.xhtml',
    templated: false,
    title: 'Forelskelsens flettverk',
  },
  {
    depth: 2,
    href: '/text/chapter24.xhtml',
    templated: false,
    title: 'Et vasstrukkent klokkertau',
  },
  {
    depth: 2,
    href: '/text/chapter25.xhtml',
    templated: false,
    title: 'Farvel til Butangen',
  },
  {
    depth: 1,
    href: '/text/chapter26.xhtml',
    templated: false,
    title: 'ANDRE FORTELLING',
  },
  {
    depth: 2,
    href: '/text/chapter27.xhtml',
    templated: false,
    title: 'Mytische Clara',
  },
  {
    depth: 2,
    href: '/text/chapter28.xhtml',
    templated: false,
    title: 'Huggustups ut i alt',
  },
  {
    depth: 2,
    href: '/text/chapter29.xhtml',
    templated: false,
    title: 'Galerie Apfelbaum',
  },
  {
    depth: 2,
    href: '/text/chapter30.xhtml',
    templated: false,
    title: 'Bureisere',
  },
  {
    depth: 2,
    href: '/text/chapter31.xhtml',
    templated: false,
    title: 'Ettromsstua',
  },
  {
    depth: 2,
    href: '/text/chapter32.xhtml',
    templated: false,
    title: 'Åssen presten skal dø',
  },
  {
    depth: 2,
    href: '/text/chapter33.xhtml',
    templated: false,
    title: 'Hesjetråden som gnistret',
  },
  {
    depth: 2,
    href: '/text/chapter34.xhtml',
    templated: false,
    title: 'Dynamomesteren',
  },
  {
    depth: 2,
    href: '/text/chapter35.xhtml',
    templated: false,
    title: 'Gå i fjøset sjøl, du, herr Gildevollen',
  },
  {
    depth: 2,
    href: '/text/chapter36.xhtml',
    templated: false,
    title: 'I høyde med klokkeslagene',
  },
  {
    depth: 2,
    href: '/text/chapter37.xhtml',
    templated: false,
    title: 'Kle deg godt, da, guten min',
  },
  {
    depth: 2,
    href: '/text/chapter38.xhtml',
    templated: false,
    title: 'Korskåpa',
  },
  {
    depth: 2,
    href: '/text/chapter39.xhtml',
    templated: false,
    title: 'I morgen slipper vi bombene',
  },
  {
    depth: 2,
    href: '/text/chapter40.xhtml',
    templated: false,
    title: 'Hammerslaget på Hekne',
  },
  {
    depth: 2,
    href: '/text/chapter41.xhtml',
    templated: false,
    title: 'Oss var to en gang',
  },
  {
    depth: 2,
    href: '/text/chapter42.xhtml',
    templated: false,
    title: 'Men ikke i flammer',
  },
  {
    depth: 2,
    href: '/text/chapter43.xhtml',
    templated: false,
    title: 'Det siste oss gjør',
  },
  {
    depth: 1,
    href: '/text/chapter44.xhtml',
    templated: false,
    title: 'TREDJE FORTELLING',
  },
  {
    depth: 2,
    href: '/text/chapter45.xhtml',
    templated: false,
    title: 'De stakkars klokkene vi har',
  },
  {
    depth: 2,
    href: '/text/chapter46.xhtml',
    templated: false,
    title: 'Frau Kreis',
  },
  {
    depth: 2,
    href: '/text/chapter47.xhtml',
    templated: false,
    title: 'Om du vil stå i dørkarmen og høre',
  },
  {
    depth: 2,
    href: '/text/chapter48.xhtml',
    templated: false,
    title: 'En gammel Blériot',
  },
  {
    depth: 2,
    href: '/text/chapter49.xhtml',
    templated: false,
    title: 'Til det kierligste minde',
  },
  {
    depth: 2,
    href: '/text/chapter50.xhtml',
    templated: false,
    title: 'Den gamle troens sakrament',
  },
  {
    depth: 2,
    href: '/text/chapter51.xhtml',
    templated: false,
    title: 'Gjensynet',
  },
  {
    depth: 1,
    href: '/text/chapter52.xhtml',
    templated: false,
    title: 'For hjelp underveis...',
  },
  {
    depth: 0,
    href: '/gyldendal-kolofon.xhtml',
    templated: false,
    title: 'Om denne boka',
  },
  {
    depth: 1,
    href: '/gyldendal-kolofon.xhtml',
    templated: false,
    title: 'Kolofon',
  },
];
