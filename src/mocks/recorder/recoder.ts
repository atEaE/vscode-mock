export class TableRecorder {
  private innerRecordTable: Map<string, any[]> = new Map<string, any[]>();

  public createRecordTable<T>(name: string): void {
    if (this.innerRecordTable.has(name)) {
      throw new Error('A record with the target name already exists.');
    }
    this.innerRecordTable.set(name, new Array<T>());
  }

  public getRecord<T>(name: string): T[] {
    var record = this.innerRecordTable.get(name);
    if (!record) {
      throw new Error('The record with the target name does not exist.');
    }
    return record as T[];
  }
}
