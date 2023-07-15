# Presentation Exchange Conformance Tests -- WIP

PE spec: https://identity.foundation/presentation-exchange/

## Rough Basis

Roughly based on VC test suite. Some references:
- About: https://w3c.github.io/vc-test-suite/
- Sample output: https://w3c.github.io/vc-test-suite/implementations/
- Usage: https://github.com/w3c/vc-test-suite/issues/14#issuecomment-487795533
- Code: 
  - Repo: https://github.com/w3c/vc-test-suite/
  - Example test: https://github.com/w3c/vc-test-suite/blob/gh-pages/test/vc-data-model-1.0/10-basic.js

## Test Vectors

https://docs.google.com/spreadsheets/d/1h5RVm4dRpJS6576jrK9mD2t4GDP_Z3xNsPXAdSd9wAc/edit#gid=0

ISSUE: How to ensure tests stay up to date. Categories:
- Schema validation tests in repo
- Spreadsheet
- These

## Types of Tests

ISSUE: these tests assume implementers expose certain interfaces (via code or command line) to provide visibility into the results.  

ISSUE: the "parse" tests could be folded into other tests, which may make sense (the interface is weird), but implementers may appreciate the help. These are slightly more informative than basic JSON schema validation, which we should also include (TODO: separate set of tests? Add them into all tests?) 

1. Model
  - About: 
    - Model tests check well-formed-ness and requirements (TODO)
    - Called as part of test categories below
  - Establishes conformance per:
    - JSON schemas
    - Other normative statements for relevant models 
  - Tests cases cover:
    - Presentation Definition (and sub-models)
    - Presentation Submission (and sub-models)
2. Request
    - About: 
      - A wallet/agent, given a Presentation Definition, returns a Presentation Submission that meets expected conditions
      - Also validates #1 (Model) tests
    - Establishes conformance per:
        - Section 8: Input Evaluation
        - JSON schemas
        - Other normative statements for relevant models 
    - Tests cases cover: 
      - issuer constraint
      - schema constraint
      - limit disclosure 
      - ...
    - How it works:
      - Test harness provides PDs and seed VCs 
      - Implementer sorts through + packages VCs to generate PSs
    - Assumed interface: `request(PD): PS`
3. Submit
    - About:
      -  A verifier or relying party, on receipt of a Presentation Submission, passes or fails the submission as expected
      - Also validates #1 (Model) tests
    - Establishes conformance per:
        - Section 6.1: Processing of submission entries
        - JSON schemas
        - Other normative statements for relevant models 
    - How it works: Test harness submits a PS and ensures verifier passes/fails the PS as expected 
      - Also check 6.2? I.e. verifier rejects submission with unexpected fields?
    - Assumed interface: `submit(PS): success/fail [TBD bespoke result/error format]`
4. "Generate" checks -- call schema validate against objects passed in
    - TO DISCUSS: what is the best model for this? Example:
      - Ask implementer to generate different types of PDs to elicit specific behavior (e.g. PD requesting VC from specific issuer)
5. Various (for later?)
    - Embed targets
    - Features
    - ???
6. Others?


## How implementations can interact with this

- Implement PEImplementation interface
- Call out exe like vc-test-suite does
- Out of scope: not supporting docker-based execution at this time
  - counterargument: some implementations might be harder to expose to CLI than to a docker nearby... particularly with [openAPI defs](https://github.com/Sphereon-Opensource/pex-openapi) of those protocol interfaces
