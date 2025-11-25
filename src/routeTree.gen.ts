// @ts-nocheck

import { Route as rootRouteImport } from './routes/__root'
import { Route as IndexRouteImport } from './routes/index'

export const routeTree =
  rootRouteImport.addChildren?.({
    IndexRoute: IndexRouteImport,
  }) || rootRouteImport

export default routeTree

