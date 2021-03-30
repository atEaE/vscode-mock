# VSCode mocks

VSCode Extensions開発用に使用しているVSCodeの`Interface`と`Mocks`。  
VSCode自体は`mocha`を使用したBehaviorテストに対応しているが、もう少し細かい粒度でテストを書きたい場合は、InterfaceやMockがあった方が便利なので作成。  

### ⚠注意書き

ただし、VSCodeのUpdateによって、公開されているInterfaceが変更になると修正がなかなか大変なので、大規模なシステムにはあまりおすすめしない。

## Usage

### 前提

依存性の注入(DI: Dependency injection)を使用する前提の構成のため、使用する場合は下記のPackageのInstallを推奨する。  

```sh
npm install inversify reflect-metadata

# or

yarn add inversify reflect-metadata
```

### 1. MockとInterfaceを使用したいプロジェクトを用意する

VSCode拡張機能の開発を想定しているため、まずはプロジェクトを作成する。

```sh
yo code
```

### 2. 作成したプロジェクトに`mock`と`model`を作成する

プロジェクトを作成したら、作成したプロジェクトの絶対パスを引数に与えて、下記のコマンドを実行する。

```sh
# 作成したいディレクトリを指定する。対象ディレクトリ配下に`models/vscod`, `mocks`が作成される。
npx ts-node src/index.ts -o /workspace/new-vscode-extensions/src
```

## Author

- [atEaE](https://github.com/atEaE)

## License

MIT. 詳細については[こちら](./LICENSE)をご覧ください。
