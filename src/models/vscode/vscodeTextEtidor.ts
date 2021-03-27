import { ViewColumn } from './vscodeEnum';

export interface IVSCodeTextEditor {
  readonly viewColumn?: ViewColumn
  show(column?: ViewColumn): void;
  hide(): void;
}
