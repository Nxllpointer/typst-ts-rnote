
const { execSync } = require('child_process');

const dirs = [
  'android-arm-eabi',
  'android-arm64',
  'darwin-arm64',
  'darwin-x64',
  'linux-arm-gnueabihf',
  'linux-arm64-gnu',
  'linux-arm64-musl',
  'linux-x64-gnu',
  'linux-x64-musl',
  'win32-arm64-msvc',
  'win32-x64-msvc',
];

for (const dir of dirs) {
  console.log(`Publish ${dir}`);
  const result = execSync('npm publish --verbose --provenance --access public', {
    stdio: 'inherit',
    cwd: `./npm/${dir}`,
  });
  console.log(result.toString());
}
