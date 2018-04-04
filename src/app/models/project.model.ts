export class Project {
  progress: number = 0;

  constructor(
    public name: string,
    public starters: string[],
    public summary: string,
    public description: string,
    public goal: number,
    public rewards: string) {}
}
