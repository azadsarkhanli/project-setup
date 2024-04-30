export type VersionCompareResult = 'lower' | 'equal' | 'greater' | 'unknown';

export function compare(
  version1: string,
  version2: string,
): VersionCompareResult {
  const parsedVersion1 = parseVersion(version1);
  const parsedVersion2 = parseVersion(version2);
  if (parsedVersion1 === parsedVersion2) {
    return 'equal';
  }
  if (parsedVersion1 < parsedVersion2) {
    return 'lower';
  }
  if (parsedVersion1 > parsedVersion2) {
    return 'greater';
  }
  return 'unknown';
}

function parseVersion(version: string) {
  let parsedVersion = '';
  const parts = version.split('.');
  for (let index = 0; index < 3; index++) {
    parsedVersion += parts[index] || '0';
  }
  return +parsedVersion;
}
