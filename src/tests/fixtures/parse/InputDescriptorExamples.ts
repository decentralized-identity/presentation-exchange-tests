export const Example3 = {
  id: "wa_driver_license",
  constraints: {
    fields: [
      {
        path: [
          "$.credentialSubject.dateOfBirth",
          "$.credentialSubject.dob",
          "$.vc.credentialSubject.dateOfBirth",
          "$.vc.credentialSubject.dob"
        ]
      }
    ]
  }
};

export const Example3_MissingId = {
  constraints: {
    fields: [
      {
        path: [
          "$.credentialSubject.dateOfBirth",
          "$.credentialSubject.dob",
          "$.vc.credentialSubject.dateOfBirth",
          "$.vc.credentialSubject.dob"
        ]
      }
    ]
  }
};

export const Example3_BadId = {
  id: 1000,
  constraints: {
    fields: [
      {
        path: [
          "$.credentialSubject.dateOfBirth",
          "$.credentialSubject.dob",
          "$.vc.credentialSubject.dateOfBirth",
          "$.vc.credentialSubject.dob"
        ]
      }
    ]
  }
};

export const Example3_WithName = {
  id: "wa_driver_license",
  name: "Look at me I have a name",
  constraints: {
    fields: [
      {
        path: [
          "$.credentialSubject.dateOfBirth",
          "$.credentialSubject.dob",
          "$.vc.credentialSubject.dateOfBirth",
          "$.vc.credentialSubject.dob"
        ]
      }
    ]
  }
};

export const Example3_WithBadName = {
  id: "wa_driver_license",
  name: 1000,
  constraints: {
    fields: [
      {
        path: [
          "$.credentialSubject.dateOfBirth",
          "$.credentialSubject.dob",
          "$.vc.credentialSubject.dateOfBirth",
          "$.vc.credentialSubject.dob"
        ]
      }
    ]
  }
};

export const Example3_WithPurpose = {
  id: "wa_driver_license",
  purpose: "Look at me I have a special purpose",
  constraints: {
    fields: [
      {
        path: [
          "$.credentialSubject.dateOfBirth",
          "$.credentialSubject.dob",
          "$.vc.credentialSubject.dateOfBirth",
          "$.vc.credentialSubject.dob"
        ]
      }
    ]
  }
};

export const Example3_WithBadPurpose = {
  id: "wa_driver_license",
  purpose: 100,
  constraints: {
    fields: [
      {
        path: [
          "$.credentialSubject.dateOfBirth",
          "$.credentialSubject.dob",
          "$.vc.credentialSubject.dateOfBirth",
          "$.vc.credentialSubject.dob"
        ]
      }
    ]
  }
};

export const Example3_WithFormat = {
  id: "wa_driver_license",
  format: "jwt",
  constraints: {
    fields: [
      {
        path: [
          "$.credentialSubject.dateOfBirth",
          "$.credentialSubject.dob",
          "$.vc.credentialSubject.dateOfBirth",
          "$.vc.credentialSubject.dob"
        ]
      }
    ]
  }
};

export const Example3_WithBadFormat = {
  id: "wa_driver_license",
  format: 1000,
  constraints: {
    fields: [
      {
        path: [
          "$.credentialSubject.dateOfBirth",
          "$.credentialSubject.dob",
          "$.vc.credentialSubject.dateOfBirth",
          "$.vc.credentialSubject.dob"
        ]
      }
    ]
  }
};