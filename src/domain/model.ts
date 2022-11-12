class Project {
  id: string;
  name: string;
  hookSize: string;

  constructor(id: string, name: string, hookSize: string) {
    this.id = id;
    this.name = name;
    this.hookSize = hookSize;
  }
}

export { Project };
