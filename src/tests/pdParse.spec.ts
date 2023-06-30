
import { PresentationExchange } from "../types/temp";
import { Example1, Example1_IdDifferentType, Example1_InputDescriptorsWrongType, Example1_MissingId, Example1_MissingInputDescriptors, Example1_WitBadName, Example1_WithName } from "./fixtures/Example1";

describe('Presentation Definition - Parsing', () => {

    let generatorOptions: any;
    let util: PresentationExchange;

    beforeEach(() => {
        generatorOptions = {};
        util = new PresentationExchange();
    });

    describe('`id` properties', () => {
        it('MUST be present', async () => {

            const result = await util.generate(Example1, generatorOptions);
            expect(result).toHaveProperty('id');
          });

        it('MUST be of type string', async () => {
            const result = await util.generate(Example1, generatorOptions);
            expect(typeof result.id).toBe('string');
        });


        it('MUST be present (negative)', async () => {
            await expect(
                util.generate(Example1_MissingId, generatorOptions)
            )
            .rejects
            .toThrowError();
          });

        it('MUST be of type string (negative)', async () => {
            await expect(
                util.generate(Example1_IdDifferentType, generatorOptions)
            )
            .rejects
            .toThrowError();
        });
     });
    
     describe('`input_descriptors` properties', () => {
        it('MUST be present', async () => {

            const result = await util.generate(Example1, generatorOptions);
            expect(result).toHaveProperty('input_descriptors');
          });

        it('MUST be of type array of InputDescriptor objects', async () => {
            //const result = await util.generate(Example1, generatorOptions);
            //expect(typeof result.input_descriptors).toBe('array');
            // TODO: check typeof each element in array
        });


        it('MUST be present (negative)', async () => {
            await expect(
                util.generate(Example1_MissingInputDescriptors, generatorOptions)
            )
            .rejects
            .toThrowError();
          });

        it('MUST be of type string (negative)', async () => {
            await expect(
                util.generate(Example1_InputDescriptorsWrongType, generatorOptions)
            )
            .rejects
            .toThrowError();
        });
     });

     describe('`name` properties', () => {
        it('MAY be present', async () => {
            const result = await util.generate(Example1_WithName, generatorOptions);
            expect(result).toHaveProperty('name');
          });

        it('if present, MUST be of type string', async () => {
            const result = await util.generate(Example1_WithName, generatorOptions);
            expect(typeof result.name).toBe('string');
        });


        it('MAY be present (negative)', async () => {
            // expect NOT to throw error
            await expect(
                util.generate(Example1, generatorOptions)
            )
            .not
            .toThrowError();
          });

        it('if present, MUST be of type string (negative)', async () => {
            await expect(
                util.generate(Example1_WitBadName, generatorOptions)
            )
            .rejects
            .toThrowError();
        });
     });

});

