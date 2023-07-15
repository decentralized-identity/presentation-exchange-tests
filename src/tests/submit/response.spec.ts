import { PresentationExchange } from "../../types/PEImplementation";
import { Example1 } from "../fixtures/parse/PresentationDefinitionExamples";

describe('Presentation Request: Presentation Submission', () => {
    let generatorOptions: any;
    let util: PresentationExchange;

    beforeEach(() => {
        generatorOptions = {};
        util = new PresentationExchange();
    });

    test('`descriptor_map` MUST include an `id` that matches PD `input_descriptor` `id` (NEGATIVE)', async () => {
        const definition = Example1;
        const submission = {
            presentation_submission: {
                definition_id: "wrong-id",
                descriptor_map: [
                    {
                        id: "banking_input_1",
                        path: "$.verifiableCredential[0]"
                    }
                ]
            }
        };
        const payload = { ...submission, verifiableCredential: {}}; // TODO
        await expect(
            util.response(definition, payload, generatorOptions)
        )
        .rejects
        .toThrowError();
    });

test('Invalid Presentation Definition: Missing ID', () => {
  const input = {
      input_descriptors: [
          {
              id: "banking_input_1",
              schema: {
                  uri: "https://example.com/banking/schema.json"
              }
          }
      ]
  };
  // Call your implementation here and expect it to throw an error or return false.
  // Example: expect(yourImplementation(input)).toThrowError();
});

test('Descriptor Map entry has path', () => {
});

test('Descriptor Map entry has no path (matches the top level of the Embed Target)', () => {
});

test('Descriptor Map entry has path_nested', () => {
});

test('Submitted formats do not match?', () => {
});



});