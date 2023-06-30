
describe('Presentation Definition - PD to PS', () => {

  test('Invalid Presentation Submission: Incorrect Definition ID', () => {
    const input = {
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
    // Call your implementation here and expect it to throw an error or return false.
    // Example: expect(yourImplementation(input)).toThrowError();
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


});