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
export const Example1_WithBadName = {
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
export const Example1_WithPurpose= {
    id: "32f54163-7166-48f1-93d8-ff217bdb0653",
    purpose: "Look at me I have a special purpose",
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
export const Example1_WithBadPurpose = {
    id: "32f54163-7166-48f1-93d8-ff217bdb0653",
    purpose: 1000,
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

export const Example1_WithFormat= {
    id: "32f54163-7166-48f1-93d8-ff217bdb0653",
    format: "jwt",
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

export const Example1_WithBadFormat= {
    id: "32f54163-7166-48f1-93d8-ff217bdb0653",
    format: 1000,
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
