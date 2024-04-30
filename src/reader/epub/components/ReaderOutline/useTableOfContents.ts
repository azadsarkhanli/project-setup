import { Link } from '@gyldendaldigital/react-native-readium/lib/typescript/types/publication';
import { useMemo } from 'react';

import { useReaderContext } from '../../context/ReaderContext';

export type TableOfContentsLink = Omit<Link, 'children'> & {
  depth: number;
  position?: number;
};

const MAX_DEPTH = 10; // to prevent infinite loops for toc with circular dependency

const getNodes = (link: Link, depth: number) => {
  const nodes: TableOfContentsLink[] = [];
  const node = { ...link, depth };
  delete node.children;
  nodes.push(node);
  if (!link.children?.length || depth > MAX_DEPTH) {
    return nodes;
  }
  for (const child of link.children) {
    nodes.push(...getNodes(child, depth + 1));
  }
  return nodes;
};

export const useTableOfContents = (): TableOfContentsLink[] | null => {
  const { manifest } = useReaderContext();
  const toc = manifest?.toc;

  return useMemo(() => {
    if (!toc) {
      return null;
    }
    return toc.flatMap(node => getNodes(node, 0));
  }, [toc]);
};
