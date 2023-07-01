
import { PresentationExchange } from "../../types/temp";
import { Example3, Example3_BadId, Example3_MissingId, Example3_WithName, Example3_WithBadName, Example3_WithBadPurpose, Example3_WithPurpose, Example3_WithBadFormat, Example3_WithFormat } from "../fixtures/Example3";

describe('Parsing: Input Descriptor', () => {

    let generatorOptions: any;
    let util: PresentationExchange;

    beforeEach(() => {
        generatorOptions = {};
        util = new PresentationExchange();
    });

    describe('`id` properties', () => {
        it('MUST be present', async () => {

            const result = await util.parseInputDescriptor(Example3, generatorOptions);
            expect(result).toHaveProperty('id');
          });

        it('MUST be of type string', async () => {
            const result = await util.parseInputDescriptor(Example3, generatorOptions);
            expect(typeof result.id).toBe('string');
        });


        it('MUST be present (negative)', async () => {
            await expect(
                util.parseInputDescriptor(Example3_MissingId, generatorOptions)
            )
            .rejects
            .toThrowError();
          });

        it('MUST be of type string (negative)', async () => {
            await expect(
                util.parseInputDescriptor(Example3_BadId, generatorOptions)
            )
            .rejects
            .toThrowError();
        });
     });

     describe('`name` properties', () => {
        it('MAY be present', async () => {
            const result = await util.parseInputDescriptor(Example3_WithName, generatorOptions);
            expect(result).toHaveProperty('name');
          });

        it('if present, MUST be of type string', async () => {
            const result = await util.parseInputDescriptor(Example3_WithName, generatorOptions);
            expect(typeof result.name).toBe('string');
        });


        it('MAY be present (negative)', async () => {
            // expect NOT to throw error (this is a MAY)
            await expect(
                util.parseInputDescriptor(Example3, generatorOptions)
            )
            .not
            .toThrowError();
          });

        it('if present, MUST be of type string (negative)', async () => {
            await expect(
                util.parseInputDescriptor(Example3_WithBadName, generatorOptions)
            )
            .rejects
            .toThrowError();
        });
     });

     describe('`purpose` properties', () => {
        it('MAY be present', async () => {
            const result = await util.parseInputDescriptor(Example3_WithPurpose, generatorOptions);
            expect(result).toHaveProperty('purpose');
          });

        it('if present, MUST be of type string', async () => {
            const result = await util.parseInputDescriptor(Example3_WithPurpose, generatorOptions);
            expect(typeof result.purpose).toBe('string');
        });


        it('MAY be present (negative)', async () => {
            // expect NOT to throw error (this is a MAY)
            await expect(
                util.parseInputDescriptor(Example3, generatorOptions)
            )
            .not
            .toThrowError();
          });

        it('if present, MUST be of type string (negative)', async () => {
            await expect(
                util.parseInputDescriptor(Example3_WithBadPurpose, generatorOptions)
            )
            .rejects
            .toThrowError();
        });
     });

     describe('`format` properties', () => {
        it('MAY be present', async () => {
            const result = await util.parseInputDescriptor(Example3_WithFormat, generatorOptions);
            expect(result).toHaveProperty('format');
          });

        it('if present, MUST be a registered ClaimFormatDesignation -- TODO', async () => {
            const result = await util.parseInputDescriptor(Example3_WithFormat, generatorOptions);
            expect(typeof result.format).toBe('string'); // TODO: update with matcher
        });


        it('MAY be present (negative)', async () => {
            // expect NOT to throw error (this is a MAY)
            await expect(
                util.parseInputDescriptor(Example3, generatorOptions)
            )
            .not
            .toThrowError();
          });

        it('if present, MUST be a registered ClaimFormatDesignation -- TODO', async () => {
            await expect(
                util.parseInputDescriptor(Example3_WithBadFormat, generatorOptions)
            )
            .rejects
            .toThrowError();
        });
     });
    
     // TODO: MUST
    describe('`constraints` properties', () => {
    });

});

