// TODO: tease these apart

export interface PEImplementation {
  parsePresentationDefinition(input: any, config: any): Promise<any>;
  parsePresentationSubmission(input: any, config: any): Promise<any>;
  // TODO: instead expose interface to implementation so these can mirror each other?
  request(presentationDefinition: any, config: any): Promise<any>;
  response(presentationDefinition: any, psWrapper: any, config: any): Promise<any>;
}

export class PresentationExchange implements PEImplementation {
  async parsePresentationDefinition(input: any, config: any): Promise<any> {
    throw new Error("Method not implemented.");
  }
  async parsePresentationSubmission(input: any, config: any): Promise<any> {
    throw new Error("Method not implemented.");
  }
  async request(presentationDefinition: any, config: any): Promise<any> {
    throw new Error("Method not implemented.");
  }
  async response(presentationDefinition: any, psWrapper: any, config: any): Promise<any> {
    throw new Error("Method not implemented.");
  }
}
