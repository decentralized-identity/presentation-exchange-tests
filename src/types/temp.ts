// TODO: tease these apart

export interface PEImplementation {
  generate(input: any, config: any): Promise<any>;
}

export class PresentationExchange implements PEImplementation {
  async generate(input: any, config: any): Promise<any> {
    if (input === "what do you think") {
      return "I think it's a good idea";
    }
    throw new Error("Method not implemented.");
      //return input;
  
  }
}
