

export const SchemaConstraint = {
    id: "32f54163-7166-48f1-93d8-ff217bdb0653",
    input_descriptors: [
      {
        id: "citizenship_input_1",
        name: "EU Driver's License",
        constraints: {
          fields: [
            {
              path: ["$.credentialSchema.id", "$.vc.credentialSchema.id"],
              filter: {
                type: "string",
                const: "https://eu.com/claims/DriversLicense.json"
              }
            }
          ]
        }
      }
    ]
}

export const IssuerConstraint = {
    id: "32f54163-7166-48f1-93d8-ff217bdb0653",
    input_descriptors: [
      {
        id: "citizenship_input_1",
        name: "EU Driver's License",
        constraints: {
          fields: [
            {
              path: ["$.issuer", "$.vc.issuer", "$.iss"],
              purpose: "We can only accept digital driver's licenses issued by national authorities of member states or trusted notarial auditors.",
              filter: {
                type: "string",
                pattern: "did:example:gov"
              }
            }
          ]
        }
      }
    ]
}

export const DisjunctiveIssuerConstraint = {
  id: "32f54163-7166-48f1-93d8-ff217bdb0653",
  input_descriptors: [
    {
      id: "citizenship_input_1",
      name: "EU Driver's License",
      constraints: {
        fields: [
          {
            path: ["$.issuer", "$.vc.issuer", "$.iss"],
            purpose: "We can only accept digital driver's licenses issued by national authorities of member states or trusted notarial auditors.",
            filter: {
              type: "string",
              pattern: "did:example:gov1|did:example:gov2"
            }
          }
        ]
      }
    }
  ]
}