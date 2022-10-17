/*---------------------------------------------------------------------------------------------
* Copyright (c) Bentley Systems, Incorporated. All rights reserved.
* See LICENSE.md in the project root for license terms and full copyright notice.
*--------------------------------------------------------------------------------------------*/
import React, { useCallback, useEffect, useMemo } from "react";
import { AbstractWidgetProps, StagePanelLocation, StagePanelSection, UiItemsProvider, WidgetState } from "@itwin/appui-abstract";
import { useActiveIModelConnection } from "@itwin/appui-react";
import { Table } from "@itwin/itwinui-react";
import IModelQualityApi from "./IModelQualityApi";
import { jsonData } from "./IModelQualityJsonData";

const IModelQualityModelsWidget = () => {
  const iModelConnection = useActiveIModelConnection();
  const [imodelQualityData, setIModelQualityData] = React.useState<any>();

  useEffect(() => {
    const removeListener = IModelQualityApi.onIModelQualityDataChanged.addListener((value: any) => {
      setIModelQualityData(value);
    });

    if (iModelConnection) {
      IModelQualityApi.getAndsetIModelQualityData(iModelConnection.iTwinId!)
        .catch((error) => {
          console.error(error);
        });
    }
    return () => {
      removeListener();
    };
  }, [iModelConnection]);

  const columnDefinition = useMemo(() => [
    {
      Header: "Table",
      columns: [
        {
          id: "name",
          Header: "Model Class",
          accessor: "name",
        },
        {
          id: "classCount",
          Header: "Models per class count",
          accessor: "classCount",
        }
      ],
    }
  ], []);

  const data = useMemo(() => {
    const rows: any[] = [];

    if (!imodelQualityData || !imodelQualityData.modelInfo) {
      return rows;
    }

    for (const rowData of imodelQualityData.modelInfo.modelsCountPerClass) {
      const row: Record<string, any> = {};

      columnDefinition[0].columns.forEach((column) => {
        let cellValue: string = "";
        
        if (column.id === "name") 
          cellValue = rowData.name ? rowData.name : "";
        else
          cellValue = rowData.classCount ? rowData.classCount : "";
        
        row[column.id] = cellValue;
      });

      rows.push(row);
    }
    return rows;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imodelQualityData]);

  const onRowClick = useCallback((_, row) => {
    // IModelQualityApi.visualizeClash(row.original.elementAId, row.original.elementBId);
  }, []);
  
  return (
    <Table
      data={data}
      columns={columnDefinition}
      isLoading={!imodelQualityData}
      onRowClick={onRowClick}
      emptyTableContent={"No data"}
      density="extra-condensed"
      style={{ height: "100%", width: "auto" }} />
  );
};

export class IModelQualityModelsWidgetProvider implements UiItemsProvider {
  public readonly id: string = "IModelQualityModelsWidgetProvider";

  public provideWidgets(_stageId: string, _stageUsage: string, location: StagePanelLocation, _section?: StagePanelSection): ReadonlyArray<AbstractWidgetProps> {
    const widgets: AbstractWidgetProps[] = [];
    if (location === StagePanelLocation.Bottom && _section === StagePanelSection.Start) {
      widgets.push(
        {
          id: "IModelQualityModelsWidget",
          label: `Models (${jsonData.modelInfo.modelsCountPerClass.length})`,
          defaultState: WidgetState.Open,
          getWidgetContent: () => <IModelQualityModelsWidget />,
        }
      );
    }
    return widgets;
  }
}
