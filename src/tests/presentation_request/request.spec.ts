import { PresentationExchange } from "../../types/PEImplementation";
import { IssuerConstraint, SchemaConstraint } from "../fixtures/Constraints";
import { Example1 } from "../fixtures/parse/PresentationDefinitionExamples";

describe('request(PresentationDefinition): PresentationSubmission Wrapper', () => {
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

    // TODO: nest this in a describe?
    // TODO: check that submission references the expected payload input (actually this is 6.1)
    test('Input Evaluation: schema constraint', async () => {
        const presentationDefinition = SchemaConstraint;
        const result = await util.request(presentationDefinition, generatorOptions);
        const credential = extractCredential(result);
        expect(credential.credentialSchema.id).toEqual("https://eu.com/claims/DriversLicense.json");
    });

    test('Input Evaluation: issuer constraint', async () => {
        const presentationDefinition = IssuerConstraint;
        const result = await util.request(presentationDefinition, generatorOptions);
        const credential = extractCredential(result);
        expect(credential.issuer.id).toEqual("did:example:gov");
    });

    test('Input Evaluation: disjunctive issuer constraint', async () => {
        const presentationDefinition = IssuerConstraint;
        const result = await util.request(presentationDefinition, generatorOptions);
        const credential = extractCredential(result);
        expect(['did:example:gov1','did:example:gov2']).toContain(credential.issuer.id);
    });

    test('Input Evaluation: schema and issuer constraint', async () => {
        const presentationDefinition = IssuerConstraint;
        const result = await util.request(presentationDefinition, generatorOptions);
        const credential = extractCredential(result);
        expect(credential.credentialSchema.id).toEqual("https://eu.com/claims/DriversLicense.json");
        expect(['did:example:gov1','did:example:gov2']).toContain(credential.issuer.id);
    });
    


});