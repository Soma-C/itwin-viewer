/*---------------------------------------------------------------------------------------------
* Copyright (c) Bentley Systems, Incorporated. All rights reserved.
* See LICENSE.md in the project root for license terms and full copyright notice.
*--------------------------------------------------------------------------------------------*/

// IModel Quality Report Sample Data

export const jsonData = {
  iModelMetadata: {
    schemaNames: [
      "Test Schema 1",
      "Test Schema 2"
  ],
    schemaCount: 2,
    classCount: 3,
    propertyCount: 17,
    duplicateClassDefCount: 1,
    duplicatePropertyDefCount: 3,
    connectorCount: 1,
    buildingTypeDefClassCount: 2,
    civilTypeDefClassCount: 1,
    structuralPhysicalTypeDefClassCount: 3,
    structuralAnalyticalTypeDefClassCount: 2,
    buildingElementClassCount: 4,
    civilElementClassCount: 6,
    structuralPhysicalElementClassCount: 3,
    structuralAnalyticalElementClassCount: 5,
    classificationSystemCount: 2,
    facilityCount: 7,
    subject: "Test Subject"
  },
  classInfo: {
    modelCount: 6,
    elementCountByClass: 4,
    elementCountByBaseClass: 2,
    classesWithMoreThanHundredPropertiesCount: 0
  },
  elementAttributes: {
    physicalElementsWithMaterialAssignedCount: 3
  },
  propertyAttributes: {
    notNullFirstClassQTOPropertiesCount: 5
  }
};