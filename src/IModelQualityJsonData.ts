/*---------------------------------------------------------------------------------------------
* Copyright (c) Bentley Systems, Incorporated. All rights reserved.
* See LICENSE.md in the project root for license terms and full copyright notice.
*--------------------------------------------------------------------------------------------*/

// IModel Quality Report Sample Data

export const jsonData = {
  iModelMetadata: {
    schemaNames: [
      "Bentley_Civil__Model_Base",
      "Bentley_Civil__Model_ContentManagement",
      "Bentley_Civil__Model_DTMFilterGroups",
      "Bentley_Civil__Model_FilterGroups",
      "Bentley_Civil__Model_Geometry",
      "Bentley_Civil_Entries",
      "Bentley_Civil_Objects",
      "BentleyGC",
      "BentleyGCVariant",
      "BisCore",
      "BuildingDataGroup",
      "CoreCustomAttributes",
      "DgnComponent___DgnCustomItemTypes_CurtainWall",
      "DgnCustomItemTypes_CurtainWall",
      "ECDbFileInfo",
      "ECDbMap",
      "ECDbMeta",
      "ECDbSchemaPolicies",
      "ECDbSystem",
      "ECv3ConversionAttributes",
      "Formats",
      "Functional",
      "Generic",
      "KmlPlacemark",
      "NATEQ_Bentley_Civil__Model_Base",
      "NATEQ_Bentley_Civil__Model_Geometry",
      "PointCloud",
      "PresentationRules",
      "Raster",
      "ScalableMesh",
      "SolidGeometricalPropertiesSchema",
      "ThreeMx",
      "Units",
      "V8TagSetDefinitions"
    ]
  },
  modelInfo: {
    modelsCountPerClass: [
      {
          "name": "DefinitionModel",
          "classCount": "1"
      },
      {
          "name": "DictionaryModel",
          "classCount": "1"
      },
      {
          "name": "DocumentListModel",
          "classCount": "2"
      },
      {
          "name": "DrawingModel",
          "classCount": "3"
      },
      {
          "name": "LinkModel",
          "classCount": "1"
      },
      {
          "name": "PhysicalModel",
          "classCount": "14"
      },
      {
          "name": "RepositoryModel",
          "classCount": "1"
      },
      {
          "name": "SectionDrawingModel",
          "classCount": "3"
      },
      {
          "name": "SheetModel",
          "classCount": "2"
      },
      {
          "name": "GroupModel",
          "classCount": "1"
      }
  ]
  },
  classInfo: {
    aspects: [
      {
          "name": "ExternalSourceAspect",
          "Schema Id": "0x7",
          "classCount": "181082"
      },
      {
          "name": "FilePlacemarkElementAspect",
          "Schema Id": "0x1f",
          "classCount": "6"
      },
      {
          "name": "GeometryAspectRuleElementAspect",
          "Schema Id": "0x1a",
          "classCount": "22"
      },
      {
          "name": "LinearEntity3dElementAspect",
          "Schema Id": "0x1c",
          "classCount": "34"
      },
      {
          "name": "Mullions_DgnActiveParametersElementAspect",
          "Schema Id": "0x1e",
          "classCount": "937"
      },
      {
          "name": "Mullions_DgnParameterSetElementAspect",
          "Schema Id": "0x1e",
          "classCount": "8433"
      },
      {
          "name": "ObjectSettingsRuleElementAspect",
          "Schema Id": "0x1a",
          "classCount": "22"
      },
      {
          "name": "TitleBlock",
          "Schema Id": "0x22",
          "classCount": "2"
      },
      {
          "name": "TriformaCommonElementAspect",
          "Schema Id": "0x1d",
          "classCount": "29"
      }
  ],
    classes: [
      {
          "className": "Generic.PhysicalObject",
          "elementCount": "154982"
      },
      {
          "className": "BisCore.DrawingGraphic",
          "elementCount": "8637"
      },
      {
          "className": "BisCore.GeometryPart",
          "elementCount": "3048"
      },
      {
          "className": "BuildingDataGroup.Steel__x0020__Beam",
          "elementCount": "1781"
      },
      {
          "className": "BuildingDataGroup.Steel__x0020__Cladding",
          "elementCount": "1430"
      },
      {
          "className": "BuildingDataGroup.TriformaCommon",
          "elementCount": "1111"
      },
      {
          "className": "BisCore.SubCategory",
          "elementCount": "606"
      },
      {
          "className": "BuildingDataGroup.RoundDuct",
          "elementCount": "502"
      },
      {
          "className": "BisCore.SpatialCategory",
          "elementCount": "496"
      },
      {
          "className": "BisCore.LineStyle",
          "elementCount": "462"
      },
      {
          "className": "BuildingDataGroup.RectangularDuct",
          "elementCount": "396"
      },
      {
          "className": "BuildingDataGroup.RoundElbow",
          "elementCount": "348"
      },
      {
          "className": "BentleyGC.GCInfoCategory",
          "elementCount": "308"
      },
      {
          "className": "BuildingDataGroup.Concrete__x0020__Pile",
          "elementCount": "300"
      },
      {
          "className": "BuildingDataGroup.RectRoundTap",
          "elementCount": "158"
      },
      {
          "className": "BuildingDataGroup.SqCeilingDiffuser",
          "elementCount": "158"
      },
      {
          "className": "BuildingDataGroup.WallLeaf",
          "elementCount": "140"
      },
      {
          "className": "BuildingDataGroup.Concrete__x0020__Beam",
          "elementCount": "137"
      },
      {
          "className": "BuildingDataGroup.RectangularElbow",
          "elementCount": "132"
      },
      {
          "className": "BuildingDataGroup.Steel__x0020__Column",
          "elementCount": "128"
      },
      {
          "className": "BuildingDataGroup.Wall",
          "elementCount": "122"
      },
      {
          "className": "BuildingDataGroup.RectangularTransition",
          "elementCount": "88"
      },
      {
          "className": "BuildingDataGroup.RectangularCap",
          "elementCount": "87"
      },
      {
          "className": "BisCore.DrawingCategory",
          "elementCount": "85"
      },
      {
          "className": "BuildingDataGroup.Base__x0020__Plate",
          "elementCount": "84"
      },
      {
          "className": "BuildingDataGroup.FlatOvalDuct",
          "elementCount": "80"
      },
      {
          "className": "BisCore.RenderMaterial",
          "elementCount": "68"
      },
      {
          "className": "BuildingDataGroup.Steel__x0020__Vertical__x0020__Brace",
          "elementCount": "56"
      },
      {
          "className": "BuildingDataGroup.RndCeilingDiffuserRnd",
          "elementCount": "52"
      },
      {
          "className": "BuildingDataGroup.SqCeilingDiffuserRect",
          "elementCount": "50"
      },
      {
          "className": "BuildingDataGroup.SideBranch",
          "elementCount": "47"
      },
      {
          "className": "BuildingDataGroup.RectangularTakeoffRadius",
          "elementCount": "46"
      },
      {
          "className": "BuildingDataGroup.Concrete__x0020__Column",
          "elementCount": "42"
      },
      {
          "className": "BuildingDataGroup.OvalElbow",
          "elementCount": "40"
      },
      {
          "className": "BuildingDataGroup.RectOvalTransition",
          "elementCount": "40"
      },
      {
          "className": "BuildingDataGroup.Door",
          "elementCount": "39"
      },
      {
          "className": "BuildingDataGroup.RectangularTee",
          "elementCount": "32"
      },
      {
          "className": "SolidGeometricalPropertiesSchema.SolidGeometricalPropertiesClass_SmartFeatureContainer",
          "elementCount": "29"
      },
      {
          "className": "BuildingDataGroup.FlexDuct",
          "elementCount": "28"
      },
      {
          "className": "BuildingDataGroup.Railing",
          "elementCount": "28"
      },
      {
          "className": "BuildingDataGroup.RectOvlTakeoff",
          "elementCount": "28"
      },
      {
          "className": "BuildingDataGroup.RectRndTakeoff",
          "elementCount": "28"
      },
      {
          "className": "BuildingDataGroup.Space",
          "elementCount": "25"
      },
      {
          "className": "BuildingDataGroup.PlumbingFixtures",
          "elementCount": "24"
      },
      {
          "className": "BuildingDataGroup.RectRndTransition",
          "elementCount": "24"
      },
      {
          "className": "BuildingDataGroup.Slab",
          "elementCount": "22"
      },
      {
          "className": "BisCore.RepositoryLink",
          "elementCount": "18"
      },
      {
          "className": "BisCore.Subject",
          "elementCount": "18"
      },
      {
          "className": "BisCore.CategorySelector",
          "elementCount": "15"
      },
      {
          "className": "BuildingDataGroup.CurtainWallSystem",
          "elementCount": "15"
      },
      {
          "className": "BisCore.PhysicalPartition",
          "elementCount": "14"
      },
      {
          "className": "BuildingDataGroup.RectOvalTap",
          "elementCount": "12"
      },
      {
          "className": "BisCore.DisplayStyle2d",
          "elementCount": "8"
      },
      {
          "className": "Generic.Group",
          "elementCount": "8"
      },
      {
          "className": "BuildingDataGroup.Escalators",
          "elementCount": "8"
      },
      {
          "className": "BisCore.AuxCoordSystemSpatial",
          "elementCount": "7"
      },
      {
          "className": "BisCore.DisplayStyle3d",
          "elementCount": "7"
      },
      {
          "className": "BisCore.ModelSelector",
          "elementCount": "7"
      },
      {
          "className": "BisCore.SpatialViewDefinition",
          "elementCount": "7"
      },
      {
          "className": "BisCore.DrawingViewDefinition",
          "elementCount": "6"
      },
      {
          "className": "BuildingDataGroup.ElevatorDoor",
          "elementCount": "4"
      },
      {
          "className": "BuildingDataGroup.Stair",
          "elementCount": "4"
      },
      {
          "className": "SolidGeometricalPropertiesSchema.SolidGeometricalPropertiesClass_NormalCellElement",
          "elementCount": "4"
      },
      {
          "className": "BisCore.Drawing",
          "elementCount": "3"
      },
      {
          "className": "BisCore.SectionDrawing",
          "elementCount": "3"
      },
      {
          "className": "BuildingDataGroup.Roof",
          "elementCount": "3"
      },
      {
          "className": "BisCore.DefinitionPartition",
          "elementCount": "2"
      },
      {
          "className": "BisCore.DocumentPartition",
          "elementCount": "2"
      },
      {
          "className": "BisCore.ViewAttachment",
          "elementCount": "2"
      },
      {
          "className": "BisCore.Sheet",
          "elementCount": "2"
      },
      {
          "className": "BisCore.SheetViewDefinition",
          "elementCount": "2"
      },
      {
          "className": "Generic.ViewAttachmentLabel",
          "elementCount": "2"
      },
      {
          "className": "BisCore.AuxCoordSystem2d",
          "elementCount": "1"
      },
      {
          "className": "BisCore.GroupInformationPartition",
          "elementCount": "1"
      },
      {
          "className": "BisCore.LinkPartition",
          "elementCount": "1"
      },
      {
          "className": "Generic.SectionCallout",
          "elementCount": "1"
      },
      {
          "className": "BuildingDataGroup.Penetrations",
          "elementCount": "1"
      }
  ]
  },
  propertyAttributes: {
    propertyNames: [
      "Property 1",
      "Property 2",
      "Property 3",
      "Property 4",
      "Property 5"
    ]
  }
};