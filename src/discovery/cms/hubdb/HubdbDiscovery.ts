import { createConfiguration } from '../../../../codegen/cms/hubdb/configuration'
import { RequestContext, ResponseContext, RowsApi, RowsBatchApi, TablesApi } from '../../../../codegen/cms/hubdb/index'
import { Observable } from '../../../../codegen/cms/hubdb/rxjsStub'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import { IConfiguration } from '../../../configuration/IConfiguration'

export class HubdbDiscovery {
  public rowsApi: RowsApi
  public rowsBatchApi: RowsBatchApi
  public tablesApi: TablesApi

  constructor(config: IConfiguration) {
    const configuration = createConfiguration(
      ApiClientConfigurator.getParams<
        RequestContext,
        ResponseContext,
        Observable<RequestContext>,
        Observable<ResponseContext>
      >(config, Observable, Observable),
    )

    this.rowsApi = new RowsApi(configuration)
    this.rowsBatchApi = new RowsBatchApi(configuration)
    this.tablesApi = new TablesApi(configuration)
  }
}
