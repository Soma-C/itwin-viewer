/*---------------------------------------------------------------------------------------------
* Copyright (c) Bentley Systems, Incorporated. All rights reserved.
* See LICENSE.md in the project root for license terms and full copyright notice.
*--------------------------------------------------------------------------------------------*/
import { BeEvent } from "@itwin/core-bentley";
import { ColorDef, FeatureOverrideType } from "@itwin/core-common";
import { EmphasizeElements, IModelApp, ViewChangeOptions } from "@itwin/core-frontend";
import { jsonData } from "./IModelQualityJsonData";

export default class IModelQualityApi {

  public static onIModelQualityDataChanged = new BeEvent<any>();

  private static _imodelQualityData: { [id: string]: any } = {};
  
  public static async getAndsetIModelQualityData(projectId: string): Promise<void> {
    const imodelQualityData = await IModelQualityApi.getIModelQualityData(projectId);
    IModelQualityApi.onIModelQualityDataChanged.raiseEvent(imodelQualityData);
  }

  public static async getIModelQualityData(projectId: string): Promise<any> {

    if (IModelQualityApi._imodelQualityData[projectId] === undefined) {
      IModelQualityApi._imodelQualityData[projectId] = jsonData;
    }

    return IModelQualityApi._imodelQualityData[projectId];
  }

  public static resetDisplay() {
    if (!IModelApp.viewManager.selectedView)
      return;

    const vp = IModelApp.viewManager.selectedView;
    const provider = EmphasizeElements.getOrCreate(vp);
    provider.clearEmphasizedElements(vp);
    provider.clearOverriddenElements(vp);
  }

  public static visualizeClash(elementIds: string[]) {
    if (!IModelApp.viewManager.selectedView)
      return;

    const vp = IModelApp.viewManager.selectedView;
    const provider = EmphasizeElements.getOrCreate(vp);
    provider.clearEmphasizedElements(vp);
    provider.clearOverriddenElements(vp);
    provider.overrideElements(elementIds, vp, ColorDef.red, FeatureOverrideType.ColorOnly, true);
    // provider.overrideElements(elementBId, vp, ColorDef.blue, FeatureOverrideType.ColorOnly, false);
    provider.wantEmphasis = true;
    provider.emphasizeElements(elementIds, vp, undefined, false);

    const viewChangeOpts: ViewChangeOptions = {};
    viewChangeOpts.animateFrustumChange = true;
    vp.zoomToElements(elementIds, { ...viewChangeOpts })
        .catch((error) => {
          console.error(error);
        })
  }
}
