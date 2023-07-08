// TODO: tease these apart

export interface PEImplementation {
  parsePresentationDefinition(input: any, config: any): Promise<any>;
  parsePresentationSubmission(input: any, config: any): Promise<any>;
  // TODO: instead expose interface to implementation so these can mirror each other?
  // TODO: should return a wrapper of Presentation Submission
  request(presentation_definition: any, config: any): Promise<[any, any]>;
  response(presentation_definition: any, presentation_submission: any, payload: any, config: any): Promise<any>;
}

export class PresentationExchange implements PEImplementation {
  async parsePresentationDefinition(input: any, config: any): Promise<any> {
    throw new Error("Method not implemented.");
  }
  async parsePresentationSubmission(input: any, config: any): Promise<any> {
    throw new Error("Method not implemented.");
  }
  async request(presentation_definition: any, config: any): Promise<[any, any]> {
    throw new Error("Method not implemented.");
  }
  async response(presentation_definition: any, presentation_submission: any, payload: any, config: any): Promise<any> {
    throw new Error("Method not implemented.");
  }
}
