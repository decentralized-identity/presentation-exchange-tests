import { PresentationExchange } from "../../types/PEImplementation";
import { IssuerConstraint, SchemaConstraint } from "../fixtures/Constraints";
import { Example1 } from "../fixtures/parse/PresentationDefinitionExamples";

describe('Input Evaluation', () => {
    let generatorOptions: any;
    let util: PresentationExchange;
    let selector = "$.presentation_submission"

    beforeEach(() => {
        generatorOptions = {};
        util = new PresentationExchange();
    });

    // TODO: is this an input evaluation test?
    // TODO: also run all tests in parse: PS

    function extractPresentationSubmission(payload: any): any {
        // TODO: use selector
        return payload.presentation_submission;
    }
    function extractCredential(payload: any): any {
        // TODO: use VC selector
        return payload.verifiableCredential[0];
    }

    // TODO: check that submission references the expected payload input (actually this is 6.1)
    // TODO: move describes into separate files

    describe('E2E and Examples', () => { 
        test('`descriptor_map` MUST include an `id` that matches PD `input_descriptor` `id`', async () => {
            // line 57 in spreadsheet
            const presentationDefinition = Example1;
            const result = await util.request(presentationDefinition, generatorOptions);
            const submission = extractPresentationSubmission(result);
            const expectedIds = presentationDefinition.input_descriptors.map((desc: any) => desc.id);
            // TODO
            const actualIds = submission.descriptor_map.map((dm: any) => dm.id);
            expect(actualIds).toEqual(expectedIds);
        });

        test('`descriptor_map` MUST include an `path` that matches PD `input_descriptor` `path` (NEGATIVE)', async () => {
        });
        test('Schema constraint', async () => {
            const presentationDefinition = SchemaConstraint;
            const result = await util.request(presentationDefinition, generatorOptions);
            const credential = extractCredential(result);
            expect(credential.credentialSchema.id).toEqual("https://eu.com/claims/DriversLicense.json");
        });

        test('Schema constraint (NEGATIVE)', async () => {
        })
    
        test('Issuer constraint', async () => {
            const presentationDefinition = IssuerConstraint;
            const result = await util.request(presentationDefinition, generatorOptions);
            const credential = extractCredential(result);
            expect(credential.issuer.id).toEqual("did:example:gov");
        });

        test('Issuer constraint (NEGATIVE)', async () => {
        })
    
        test('Disjunctive issuer constraint', async () => {
            const presentationDefinition = IssuerConstraint;
            const result = await util.request(presentationDefinition, generatorOptions);
            const credential = extractCredential(result);
            expect(['did:example:gov1','did:example:gov2']).toContain(credential.issuer.id);
        });
    
        test('Disjunctive issuer constraint (NEGATIVE)', async () => {
        })

        test('Schema and issuer constraint', async () => {
            const presentationDefinition = IssuerConstraint;
            const result = await util.request(presentationDefinition, generatorOptions);
            const credential = extractCredential(result);
            expect(credential.credentialSchema.id).toEqual("https://eu.com/claims/DriversLicense.json");
            expect(['did:example:gov1','did:example:gov2']).toContain(credential.issuer.id);
        });

        test('Schema and issuer constraint (NEGATIVE)', async () => {
        })

    })
    
    describe('Field constraints', () => { 
        test('8.1 1: Every fields object yields a Field Query Result should pass', async () => {

        });

        test('8.1 1: Every fields object yields a Field Query Result should fail (NEGATIVE)', async () => {
            // should fail
        });

        test('8.1 1.2: Fields object has filter', async () => {
            // TODO: positive and negative

        });

        test('8.1 1.2: Fields object does not have filter', async () => {
            // TODO: positive and negative

        });
    })

    describe('Limit disclosure constraints', () => { 
        test('No limit disclosure constraints should TODO', async () => {

        });

        test('Limit disclosure required', async () => {
        });

        test('Limit disclosure required (NEGATIVE)', async () => {
        });

        test('Limit disclosure optional', async () => {
        });

        test('Limit disclosure optional (NEGATIVE)', async () => {
        });

    })


});