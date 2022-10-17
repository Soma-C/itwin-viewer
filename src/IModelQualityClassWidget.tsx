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

const IModelQualityClassWidget = () => {
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
          id: "className",
          Header: "Class Name",
          accessor: "className",
        },
        {
          id: "elementCount",
          Header: "Element Count",
          accessor: "elementCount",
        }
      ],
    }
  ], []);

  const data = useMemo(() => {
    const rows: any[] = [];

    if (!imodelQualityData || !imodelQualityData.classInfo) {
      return rows;
    }

    for (const rowData of imodelQualityData.classInfo.classes) {
      const row: Record<string, any> = {};

      columnDefinition[0].columns.forEach((column) => {
        let cellValue: string = "";
        
        if (column.id === "className") 
          cellValue = rowData.className ? rowData.className : "";
        else
          cellValue = rowData.elementCount ? rowData.elementCount : "";
        
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

export class IModelQualityClassWidgetProvider implements UiItemsProvider {
  public readonly id: string = "IModelQualityClassWidgetProvider";

  public provideWidgets(_stageId: string, _stageUsage: string, location: StagePanelLocation, _section?: StagePanelSection): ReadonlyArray<AbstractWidgetProps> {
    const widgets: AbstractWidgetProps[] = [];
    if (location === StagePanelLocation.Bottom && _section === StagePanelSection.Start) {
      widgets.push(
        {
          id: "IModelQualityClassWidget",
          label: `Classes (${jsonData.classInfo.classes.length})`,
          defaultState: WidgetState.Open,
          getWidgetContent: () => <IModelQualityClassWidget />,
        }
      );
    }
    return widgets;
  }
}
