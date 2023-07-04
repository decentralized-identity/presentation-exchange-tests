
import { PresentationExchange } from "../../types/temp";
import { Example2, Example2_BadDefinitionId, Example2_BadDescriptorMap, Example2_BadId, Example2_MissingDefinitionId, Example2_MissingDescriptorMap, Example2_MissingId } from "../fixtures/parse/PresentationSubmission";

describe('Parsing: Presentation Submission', () => {

    let generatorOptions: any;
    let util: PresentationExchange;

    beforeEach(() => {
        generatorOptions = {};
        util = new PresentationExchange();
    });

    describe('`id` properties', () => {
        it('MUST be present', async () => {

            const result = await util.parsePresentationSubmission(Example2, generatorOptions);
            expect(result).toHaveProperty('id');
          });

        it('MUST be of type string', async () => {
            const result = await util.parsePresentationSubmission(Example2, generatorOptions);
            expect(typeof result.id).toBe('string');
        });


        it('MUST be present (negative)', async () => {
            await expect(
                util.parsePresentationSubmission(Example2_MissingId, generatorOptions)
            )
            .rejects
            .toThrowError();
          });

        it('MUST be of type string (negative)', async () => {
            await expect(
                util.parsePresentationSubmission(Example2_BadId, generatorOptions)
            )
            .rejects
            .toThrowError();
        });
     });
    
     describe('`definition_id` properties', () => {
        it('MUST be present', async () => {

            const result = await util.parsePresentationSubmission(Example2, generatorOptions);
            expect(result).toHaveProperty('input_descriptors');
          });

        it('MUST be of type array of InputDescriptor objects', async () => {
            const result = await util.parsePresentationSubmission(Example2, generatorOptions);
            expect(typeof result.input_descriptors).toBe('array');
            // TODO: check typeof each element in array
        });


        it('MUST be present (negative)', async () => {
            await expect(
                util.parsePresentationSubmission(Example2_MissingDefinitionId, generatorOptions)
            )
            .rejects
            .toThrowError();
          });

        it('MUST be of type string (negative)', async () => {
            await expect(
                util.parsePresentationSubmission(Example2_BadDefinitionId, generatorOptions)
            )
            .rejects
            .toThrowError();
        });
     });

     describe('`descriptor_map` properties', () => {
        it('MUST be present', async () => {
            const result = await util.parsePresentationSubmission(Example2, generatorOptions);
            expect(result).toHaveProperty('descriptor_map');
          });

        it('MUST be of type TODO', async () => {
            const result = await util.parsePresentationSubmission(Example2, generatorOptions);
            expect(typeof result.name).toBe('string');
        });


        it('MUST be present (negative)', async () => {
            await expect(
                util.parsePresentationSubmission(Example2_MissingDescriptorMap, generatorOptions)
            )
            .not
            .toThrowError();
          });

        it('MUST be of type TODO (negative)', async () => {
            await expect(
                util.parsePresentationSubmission(Example2_BadDescriptorMap, generatorOptions)
            )
            .rejects
            .toThrowError();
        });
     });
    
});

