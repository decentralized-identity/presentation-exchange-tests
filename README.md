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

TODO: how to ensure these stay up to date?

## Types of Tests

1. Roundtrip parsing of objects:
  - when given a serialized object, you don't mess it up and you throw an error when expected
  - TODO: check how vc-test-suite does this
2. PD to PS:
  - when given a PD, you give a PS that doesn't suck (meets constraints, etc)
3. "Generate" checks -- call schema validate against objects passed in