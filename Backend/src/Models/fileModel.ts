export class FileData {
  name: string;
  file: FormData;
  constructor(name: string, file: FormData) {
    this.name = name;
    this.file = file;
  }
}