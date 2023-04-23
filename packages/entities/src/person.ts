class Person {
  private firstName: string | null = null;
  private lastName: string | null = null;

  public constructor(firstName: string, lastName: string) {
    this.firstName = firstName
    this.lastName = lastName
  }

  public toString(): string {
    return `${this.lastName} ${this.firstName}`
  }
}

export { Person }