export class budgetitem {
  "budgetItemId": string;
  "budgetItemName": string;
  "createdBy": string;
  "createdOn": string;
  "modifiedBy": string;
  "modifiedOn": string;
  "isActive": number;
}
export class Programitem {
  "programID": string;
  "programNumber": string;
  "programName": string
}


export class ActiveProjectDataitem {
  "programId": string;
  "projectName": string;
  "projectID": number;
  "projectTypeId": string;
  "pmId": string;
  "ae": string;
  "cm": string;
  "projectNumber": string
  "budget": number;
  "estimatedCost": number;
  "projectType": string;
  "cEs": number;
  "issues": number;
}

export class Selecteddata {

  "budget": string;
  "program": string;
  "activePeoject": string;
}