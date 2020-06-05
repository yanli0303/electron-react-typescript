/**
 * Build and package the Electron app.
 *
 * NOTE: this script works on both Windows and macOS, it generates
 * applications for the platform respectively.
 */

const path = require('path');
const ps = require('child_process');

const shell = (cmd, cwd) => {
  const options = {
    cwd: cwd || __dirname,
    stdio: 'inherit',
  };
  const commands = typeof cmd === 'string' ? [cmd] : cmd;
  for (let i = 0; i < commands.length; i += 1) {
    console.log(`\n${commands[i]}`);
    ps.execSync(commands[i], options);
  }
};

console.log('\nRebuild main process script...')
const main = path.join(__dirname, '..', 'main');
shell([
  'yarn install',
  'yarn build',
], main);

console.log('\nBuild and package...')
shell([
  'yarn react-build',
  `yarn electron-builder --publish=never`,
]);
