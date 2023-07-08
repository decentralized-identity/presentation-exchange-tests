import { PresentationExchange } from "../../types/PEImplementation";
import { IssuerConstraint, SchemaConstraint } from "../fixtures/Constraints";
import { Example1 } from "../fixtures/parse/PresentationDefinition";

describe('Presentation Request: Presentation Submission', () => {
    let generatorOptions: any;
    let util: PresentationExchange;

    beforeEach(() => {
        generatorOptions = {};
        util = new PresentationExchange();
    });

    // TODO: is this an input evaluation test?
    // TODO: also run all tests in parse: PS

    test('`descriptor_map` MUST include an `id` that matches PD `input_descriptor` `id`', async () => {
        // line 57 in spreadsheet
        const definition = Example1;
        const [submission, payload] = await util.request(definition, generatorOptions);
        const expectedIds = definition.input_descriptors.map((desc: any) => desc.id);
        const actualIds = submission.descriptor_map.map((dm: any) => dm.id);
        expect(actualIds).toEqual(expectedIds);
    });

    // TODO: nest this in a describe?
    // TODO: will need to adjust these after nailing down payload structure
    // TODO: check that submission references the expected payload input (actually this is 6.1)
    test('Input Evaluation: schema constraint', async () => {
        const definition = SchemaConstraint;
        const [submission, payload] = await util.request(definition, generatorOptions);
        expect(payload.credentialSchema.id).toEqual("https://eu.com/claims/DriversLicense.json");
    });

    test('Input Evaluation: issuer constraint', async () => {
        const definition = IssuerConstraint;
        const [submission, payload] = await util.request(definition, generatorOptions);
        expect(payload.issuer.id).toEqual("did:example:gov");
    });

    test('Input Evaluation: disjunctive issuer constraint', async () => {
        const definition = IssuerConstraint;
        const [submission, payload] = await util.request(definition, generatorOptions);
        expect(['did:example:gov1','did:example:gov2']).toContain(payload.issuer.id);
    });

    test('Input Evaluation: schema and issuer constraint', async () => {
        const definition = IssuerConstraint;
        const [submission, payload] = await util.request(definition, generatorOptions);
        expect(payload.credentialSchema.id).toEqual("https://eu.com/claims/DriversLicense.json");
        expect(['did:example:gov1','did:example:gov2']).toContain(payload.issuer.id);
    });
    


});