
import { PresentationExchange } from "../../types/PEImplementation";
import { Example3, Example3_MissingId, Example3_BadId, Example3_WithName, Example3_WithBadName, Example3_WithPurpose, Example3_WithBadPurpose, Example3_WithFormat, Example3_WithBadFormat } from "../fixtures/parse/InputDescriptor";
import { Example1, Example1_BadId, Example1_BadInputDescriptors, Example1_MissingId, Example1_MissingDescriptors, Example1_WithName, Example1_WithPurpose, Example1_WithBadName, Example1_WithBadPurpose, Example1_WithFormat, Example1_WithBadFormat, Example1_MultipleInputDescriptors, Example1_MultipleInputDescriptors_DuplicateId, PDWrapper } from "../fixtures/parse/PresentationDefinition";

describe('Parsing: Presentation Definition', () => {

    let generatorOptions: any;
    let util: PresentationExchange;

    beforeEach(() => {
        generatorOptions = {};
        util = new PresentationExchange();
    });

    describe('`id` properties', () => {
        it('MUST be present', async () => {

            const result = await util.parsePresentationDefinition(Example1, generatorOptions);
            expect(result).toHaveProperty('id');
          });

        it('MUST be of type string', async () => {
            const result = await util.parsePresentationDefinition(Example1, generatorOptions);
            expect(typeof result.id).toBe('string');
        });


        it('MUST be present (negative)', async () => {
            await expect(
                util.parsePresentationDefinition(Example1_MissingId, generatorOptions)
            )
            .rejects
            .toThrowError();
          });

        it('MUST be of type string (negative)', async () => {
            await expect(
                util.parsePresentationDefinition(Example1_BadId, generatorOptions)
            )
            .rejects
            .toThrowError();
        });
     });
    
     describe('`input_descriptors` properties', () => {
        it('MUST be present', async () => {

            const result = await util.parsePresentationDefinition(Example1, generatorOptions);
            expect(result).toHaveProperty('input_descriptors');
          });

        it('MUST be of type array of InputDescriptor objects', async () => {
            const result = await util.parsePresentationDefinition(Example1, generatorOptions);
            expect(typeof result.input_descriptors).toBe('array');
            // TODO: check typeof each element in array
        })

        it('`id`s MUST not conflict', async () => {

            const result = await util.parsePresentationDefinition(Example1_MultipleInputDescriptors, generatorOptions);
            let unique = new Set(result.input_descriptors.map((desc: any) => desc.id));
            expect(unique.size).toEqual(2);
          });        

        it('MUST be present (negative)', async () => {
            await expect(
                util.parsePresentationDefinition(Example1_MissingDescriptors, generatorOptions)
            )
            .rejects
            .toThrowError();
          });

        it('MUST be of type array of InputDescriptor objects (negative)', async () => {
            await expect(
                util.parsePresentationDefinition(Example1_BadInputDescriptors, generatorOptions)
            )
            .rejects
            .toThrowError();
        });


        it('`id`s MUST not conflict (negative)', async () => {
            await expect(
                util.parsePresentationDefinition(Example1_MultipleInputDescriptors_DuplicateId, generatorOptions)
            )
            .rejects
            .toThrowError();
          });   

          describe('`input_descriptor` properties', () => {
            let pdWrapper: any;

            beforeEach(() => {
                pdWrapper = PDWrapper;
            });

            async function callWrapper(presentationDefinition: any): Promise<any> {
                const result = await util.parsePresentationDefinition(pdWrapper, generatorOptions);
                expect(result.input_descriptors.size).toEqual(1);
                const descriptor = result.input_descriptors[0];
                return descriptor;
            }

            describe('`id` properties', () => {
                it('MUST be present', async () => {
                    pdWrapper.input_descriptors.push(Example3);
                    const descriptor = await callWrapper(pdWrapper);
                    expect(descriptor).toHaveProperty('id');
                  });
        
                it('MUST be of type string', async () => {
                    pdWrapper.input_descriptors.push(Example3);
                    const descriptor = await callWrapper(pdWrapper);
                    expect(typeof descriptor.id).toBe('string');
                });
        
                it('MUST be present (negative)', async () => {
                    pdWrapper.input_descriptors.push(Example3_MissingId);
                    await expect(
                        util.parsePresentationDefinition(pdWrapper, generatorOptions)
                    )
                    .rejects
                    .toThrowError();
                  });
        
                it('MUST be of type string (negative)', async () => {
                    pdWrapper.input_descriptors.push(Example1_BadId);
                    await expect(
                        util.parsePresentationDefinition(pdWrapper, generatorOptions)
                    )
                    .rejects
                    .toThrowError();
                });
             });
        
             describe('`name` properties', () => {
                it('MAY be present', async () => {
                    pdWrapper.input_descriptors.push(Example3_WithName);
                    const descriptor = await callWrapper(pdWrapper);
                    expect(descriptor).toHaveProperty('name');
                  });
        
                it('if present, MUST be of type string', async () => {
                    pdWrapper.input_descriptors.push(Example3_WithName);
                    const descriptor = await callWrapper(pdWrapper);
                    expect(typeof descriptor.name).toBe('string');
                });
        
        
                it('MAY be present (negative)', async () => {
                    pdWrapper.input_descriptors.push(Example3);
                    // expect NOT to throw error (this is a MAY)
                    await expect(
                        util.parsePresentationDefinition(pdWrapper, generatorOptions)
                    )
                    .not
                    .toThrowError();
                  });
        
                it('if present, MUST be of type string (negative)', async () => {
                    pdWrapper.input_descriptors.push(Example3_WithBadName);
                    await expect(
                        util.parsePresentationDefinition(pdWrapper, generatorOptions)
                    )
                    .rejects
                    .toThrowError();
                });
             });
        
             describe('`purpose` properties', () => {
                it('MAY be present', async () => {
                    pdWrapper.input_descriptors.push(Example3_WithPurpose);
                    const descriptor = await callWrapper(pdWrapper);
                    expect(descriptor).toHaveProperty('purpose');
                  });
        
                it('if present, MUST be of type string', async () => {
                    pdWrapper.input_descriptors.push(Example3_WithPurpose);
                    const descriptor = await callWrapper(pdWrapper);
                    expect(typeof descriptor.purpose).toBe('string');
                });
        
        
                it('MAY be present (negative)', async () => {
                    pdWrapper.input_descriptors.push(Example3);
                    // expect NOT to throw error (this is a MAY)
                    await expect(
                        util.parsePresentationDefinition(pdWrapper, generatorOptions)
                    )
                    .not
                    .toThrowError();
                  });
        
                it('if present, MUST be of type string (negative)', async () => {
                    pdWrapper.input_descriptors.push(Example3_WithBadPurpose);
                    await expect(
                        util.parsePresentationDefinition(pdWrapper, generatorOptions)
                    )
                    .rejects
                    .toThrowError();
                });
             });
        
             describe('`format` properties', () => {
                it('MAY be present', async () => {
                    pdWrapper.input_descriptors.push(Example3_WithFormat);
                    const descriptor = await callWrapper(pdWrapper);
                    expect(descriptor).toHaveProperty('format');
                  });
        
                it('if present, MUST be a registered ClaimFormatDesignation -- TODO', async () => {
                    pdWrapper.input_descriptors.push(Example3_WithFormat);
                    const descriptor = await callWrapper(pdWrapper);
                    expect(typeof descriptor.format).toBe('string'); // TODO: update with matcher
                });
        
        
                it('MAY be present (negative)', async () => {
                    pdWrapper.input_descriptors.push(Example3);
                    // expect NOT to throw error (this is a MAY)
                    await expect(
                        util.parsePresentationDefinition(pdWrapper, generatorOptions)
                    )
                    .not
                    .toThrowError();
                  });
        
                it('if present, MUST be a registered ClaimFormatDesignation -- TODO (negative)', async () => {
                    pdWrapper.input_descriptors.push(Example3_WithBadFormat);
                    await expect(
                        util.parsePresentationDefinition(pdWrapper, generatorOptions)
                    )
                    .rejects
                    .toThrowError();
                });
             });
            
             // TODO: MUST
            describe('`constraints` properties', () => {
            });
        
          })
    
     });

     describe('`name` properties', () => {
        it('MAY be present', async () => {
            const result = await util.parsePresentationDefinition(Example1_WithName, generatorOptions);
            expect(result).toHaveProperty('name');
          });

        it('if present, MUST be of type string', async () => {
            const result = await util.parsePresentationDefinition(Example1_WithName, generatorOptions);
            expect(typeof result.name).toBe('string');
        });


        it('MAY be present (negative)', async () => {
            // expect NOT to throw error (this is a MAY)
            await expect(
                util.parsePresentationDefinition(Example1, generatorOptions)
            )
            .not
            .toThrowError();
          });

        it('if present, MUST be of type string (negative)', async () => {
            await expect(
                util.parsePresentationDefinition(Example1_WithBadName, generatorOptions)
            )
            .rejects
            .toThrowError();
        });
     });

     describe('`purpose` properties', () => {
        it('MAY be present', async () => {
            const result = await util.parsePresentationDefinition(Example1_WithPurpose, generatorOptions);
            expect(result).toHaveProperty('purpose');
          });

        it('if present, MUST be of type string', async () => {
            const result = await util.parsePresentationDefinition(Example1_WithPurpose, generatorOptions);
            expect(typeof result.purpose).toBe('string');
        });


        it('MAY be present (negative)', async () => {
            // expect NOT to throw error (this is a MAY)
            await expect(
                util.parsePresentationDefinition(Example1, generatorOptions)
            )
            .not
            .toThrowError();
          });

        it('if present, MUST be of type string (negative)', async () => {
            await expect(
                util.parsePresentationDefinition(Example1_WithBadPurpose, generatorOptions)
            )
            .rejects
            .toThrowError();
        });
     });

     describe('`format` properties', () => {
        it('MAY be present', async () => {
            const result = await util.parsePresentationDefinition(Example1_WithFormat, generatorOptions);
            expect(result).toHaveProperty('format');
          });

        it('if present, MUST be a registered ClaimFormatDesignation -- TODO', async () => {
            const result = await util.parsePresentationDefinition(Example1_WithFormat, generatorOptions);
            expect(typeof result.format).toBe('string'); // TODO: update with matcher
        });


        it('MAY be present (negative)', async () => {
            // expect NOT to throw error (this is a MAY)
            await expect(
                util.parsePresentationDefinition(Example1, generatorOptions)
            )
            .not
            .toThrowError();
          });

        it('if present, MUST be a registered ClaimFormatDesignation -- TODO', async () => {
            await expect(
                util.parsePresentationDefinition(Example1_WithBadFormat, generatorOptions)
            )
            .rejects
            .toThrowError();
        });
     });
    
});

