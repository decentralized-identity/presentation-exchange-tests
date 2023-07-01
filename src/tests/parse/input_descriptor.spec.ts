
import { PresentationExchange } from "../../types/temp";
import { Example1, Example1_BadId, Example1_BadInputDescriptors, Example1_MissingId, Example1_MissingDescriptors, Example1_WithName, Example1_WithPurpose, Example1_WithBadName, Example1_WithBadPurpose, Example1_WithFormat, Example1_WithBadFormat } from "../fixtures/Example1";

describe('Parsing: Input Descriptor', () => {
    // TODO: update all of this

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
                util.generate(Example1_BadId, generatorOptions)
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
            const result = await util.generate(Example1, generatorOptions);
            expect(typeof result.input_descriptors).toBe('array');
            // TODO: check typeof each element in array
        });


        it('MUST be present (negative)', async () => {
            await expect(
                util.generate(Example1_MissingDescriptors, generatorOptions)
            )
            .rejects
            .toThrowError();
          });

        it('MUST be of type string (negative)', async () => {
            await expect(
                util.generate(Example1_BadInputDescriptors, generatorOptions)
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
            // expect NOT to throw error (this is a MAY)
            await expect(
                util.generate(Example1, generatorOptions)
            )
            .not
            .toThrowError();
          });

        it('if present, MUST be of type string (negative)', async () => {
            await expect(
                util.generate(Example1_WithBadName, generatorOptions)
            )
            .rejects
            .toThrowError();
        });
     });

     describe('`purpose` properties', () => {
        it('MAY be present', async () => {
            const result = await util.generate(Example1_WithPurpose, generatorOptions);
            expect(result).toHaveProperty('purpose');
          });

        it('if present, MUST be of type string', async () => {
            const result = await util.generate(Example1_WithPurpose, generatorOptions);
            expect(typeof result.purpose).toBe('string');
        });


        it('MAY be present (negative)', async () => {
            // expect NOT to throw error (this is a MAY)
            await expect(
                util.generate(Example1, generatorOptions)
            )
            .not
            .toThrowError();
          });

        it('if present, MUST be of type string (negative)', async () => {
            await expect(
                util.generate(Example1_WithBadPurpose, generatorOptions)
            )
            .rejects
            .toThrowError();
        });
     });

     describe('`format` properties', () => {
        it('MAY be present', async () => {
            const result = await util.generate(Example1_WithFormat, generatorOptions);
            expect(result).toHaveProperty('format');
          });

        it('if present, MUST be a registered ClaimFormatDesignation -- TODO', async () => {
            const result = await util.generate(Example1_WithFormat, generatorOptions);
            expect(typeof result.format).toBe('string'); // TODO: update with matcher
        });


        it('MAY be present (negative)', async () => {
            // expect NOT to throw error (this is a MAY)
            await expect(
                util.generate(Example1, generatorOptions)
            )
            .not
            .toThrowError();
          });

        it('if present, MUST be a registered ClaimFormatDesignation -- TODO', async () => {
            await expect(
                util.generate(Example1_WithBadFormat, generatorOptions)
            )
            .rejects
            .toThrowError();
        });
     });
    
});

