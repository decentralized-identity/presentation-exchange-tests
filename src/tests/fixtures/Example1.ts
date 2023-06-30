export const Example1 = {
    id: "32f54163-7166-48f1-93d8-ff217bdb0653",
    input_descriptors: [
        {
            id: "banking_input_1",
            schema: {
                uri: "https://example.com/banking/schema.json"
            },
            constraints: {
                fields: [
                    {
                        path: ["$.name"],
                        filter: {
                            type: "string",
                            pattern: "^[A-Za-z]+$"
                        }
                    }
                ]
            }
        }
    ]
};
export const Example1_MissingId = {
    input_descriptors: [
        {
            id: "banking_input_1",
            schema: {
                uri: "https://example.com/banking/schema.json"
            },
            constraints: {
                fields: [
                    {
                        path: ["$.name"],
                        filter: {
                            type: "string",
                            pattern: "^[A-Za-z]+$"
                        }
                    }
                ]
            }
        }
    ]
};
export const Example1_IdDifferentType = {
    id: 100,
    input_descriptors: [
        {
            id: "banking_input_1",
            schema: {
                uri: "https://example.com/banking/schema.json"
            },
            constraints: {
                fields: [
                    {
                        path: ["$.name"],
                        filter: {
                            type: "string",
                            pattern: "^[A-Za-z]+$"
                        }
                    }
                ]
            }
        }
    ]
};
export const Example1_MissingInputDescriptors = {
    id: "32f54163-7166-48f1-93d8-ff217bdb0653"
};
export const Example1_InputDescriptorsWrongType = {
    id: "32f54163-7166-48f1-93d8-ff217bdb0653",
    input_descriptors: "banking_input_1"
};
export const Example1_WithName = {
    id: "32f54163-7166-48f1-93d8-ff217bdb0653",
    name: "Look at me I have a name",
    input_descriptors: [
        {
            id: "banking_input_1",
            schema: {
                uri: "https://example.com/banking/schema.json"
            },
            constraints: {
                fields: [
                    {
                        path: ["$.name"],
                        filter: {
                            type: "string",
                            pattern: "^[A-Za-z]+$"
                        }
                    }
                ]
            }
        }
    ]
};
export const Example1_WitBadName = {
    id: "32f54163-7166-48f1-93d8-ff217bdb0653",
    name: 1000,
    input_descriptors: [
        {
            id: "banking_input_1",
            schema: {
                uri: "https://example.com/banking/schema.json"
            },
            constraints: {
                fields: [
                    {
                        path: ["$.name"],
                        filter: {
                            type: "string",
                            pattern: "^[A-Za-z]+$"
                        }
                    }
                ]
            }
        }
    ]
};