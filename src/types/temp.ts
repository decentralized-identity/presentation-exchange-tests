// TODO: tease these apart

export interface PEImplementation {
  parsePresentationDefinition(input: any, config: any): Promise<any>;
  parsePresentationSubmission(input: any, config: any): Promise<any>;
  // TODO: just roll this into caller?
  parseInputDescriptor(input: any, config: any): Promise<any>;
}

export class PresentationExchange implements PEImplementation {
  async parsePresentationDefinition(input: any, config: any): Promise<any> {
    throw new Error("Method not implemented.");
  }
  async parsePresentationSubmission(input: any, config: any): Promise<any> {
    throw new Error("Method not implemented.");
  }
  async parseInputDescriptor(input: any, config: any): Promise<any> {
    throw new Error("Method not implemented.");
  }
}
