const fs = require('fs');
const path = process.argv[3];
const package = require(path + '/package.json');
let versions = process.argv[2];
// If the package only has one version published, its format needs some tweaking
if (versions.indexOf('[') !== 0) {
  versions = `['${versions}']`;
}
versions = JSON.parse(versions.trim().replace(/\'/g, '"'));
const current = package.version;

const latest = versions[versions.length - 1];

// Returns -1 if first is less than second, 1 if first is greater than second, otherwise 0 if equal.
function compareVersion(first, second) {
  // Assumption: only numbers in our versions.
  const firstParts = first.split('.').map((value) => parseInt(value));
  const secondParts = second.split('.').map((value) => parseInt(value));

  for (let i = 0; i < firstParts.length; i++) {
    if (secondParts.length === i) {
      return 1;
    }

    if (firstParts[i] < secondParts[i]) {
      return -1;
    } else if (firstParts[i] > secondParts[i]) {
      return 1;
    }
  }

  if (firstParts.length !== secondParts.length) {
    return -1;
  }

  return 0;
}

if (compareVersion(current, latest) <= 0) {
  const parts = latest.split('.').map((value) => parseInt(value));
  // TODO: Make this smarter, based on git commit msging perhaps, to properly do semver
  // But for now, just rev the patch version
  parts[parts.length - 1] = parts[parts.length - 1] + 1;
  package.version = parts.join('.');
  fs.writeFileSync(path + '/package.json', JSON.stringify(package, null, 2));
}
