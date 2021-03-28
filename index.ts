import * as commander from 'commander';
import * as fs from 'fs';
import * as path from 'path';

// copy src
const ifModelsDir: string = './src/models/vscode';
const mocksVSCodeDir: string = './src/mocks/vscode';
const mocksRecorderDir: string = './src/mocks/recorder';

// dest paths
const modelsVSCodePath: string = path.join('models', 'vscode');
const mocksRootPath: string = path.join('test', 'mocks', );
const mocksVSCodePath: string = path.join(mocksRootPath, 'vscode', );
const mocksRecorderPath: string = path.join(mocksRootPath, 'recorder');

// e.g. npm run gen:mock -o './example'
function main() {
  var program = new commander.Command();
  program.version('0.0.1');
  program.requiredOption('-o, --output <value>', 'hogehge');
  program.parse(process.argv);

  // set options.
  const outputRootDir = program.opts().output;

  // complete path.
  const outputModelsVSCodeDir = path.join(outputRootDir, modelsVSCodePath);
  const outputMocksVSCodeDir = path.join(outputRootDir, mocksVSCodePath);
  const outputMocksRecorderDir = path.join(outputRootDir, mocksRecorderPath);

  // create & check dest dir
  // check interface vscode
  if (fs.existsSync(outputModelsVSCodeDir)) {
    const stats = fs.statSync(outputModelsVSCodeDir);
    if (!stats.isDirectory) {
      throw new Error(`Unable to output a file because the file "${outputModelsVSCodeDir}" exists. For file output, the directory "${outputModelsVSCodeDir}" is required.`);
    }
  } else {
    fs.mkdirSync(outputModelsVSCodeDir, { recursive: true});
  }

  // check mocks vscode
  if (fs.existsSync(outputMocksVSCodeDir)) {
    const stats = fs.statSync(outputMocksVSCodeDir);
    if (!stats.isDirectory) {
      throw new Error(`Unable to output a file because the file "${outputMocksVSCodeDir}" exists. For file output, the directory "${outputMocksVSCodeDir}" is required.`);
    }
  } else {
    fs.mkdirSync(outputMocksVSCodeDir, { recursive: true});
  }

  // check mocks recorder
  if (fs.existsSync(outputMocksRecorderDir)) {
    const stats = fs.statSync(outputMocksRecorderDir);
    if (!stats.isDirectory) {
      throw new Error(`Unable to output a file because the file "${outputMocksRecorderDir}" exists. For file output, the directory "${outputMocksRecorderDir}" is required.`);
    }
  } else {
    fs.mkdirSync(outputMocksRecorderDir, { recursive: true});
  }

  // load interface models
  var ifFiles = fs.readdirSync(ifModelsDir);
  var mocksVSCodeFiles = fs.readdirSync(mocksVSCodeDir);
  var mocksRecorderFiles = fs.readdirSync(mocksRecorderDir);

  // copy files
  ifFiles.forEach(fn => {
    const src = path.join(ifModelsDir, fn);
    const dest = path.join(outputModelsVSCodeDir, fn);
    fs.copyFile(src, dest, () => {});
  });
  mocksVSCodeFiles.forEach(fn => {
    const src = path.join(mocksVSCodeDir, fn);
    const dest = path.join(outputMocksVSCodeDir, fn);
    fs.copyFile(src, dest, () => {});
  });
  mocksRecorderFiles.forEach(fn => {
    const src = path.join(mocksRecorderDir, fn);
    const dest = path.join(outputMocksRecorderDir, fn);
    fs.copyFile(src, dest, () => {});
  });

  console.log('Complete🎉');
}

main();