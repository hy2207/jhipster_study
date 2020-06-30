import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import NewCommer from './new-commer';
import NewCommerDetail from './new-commer-detail';
import NewCommerUpdate from './new-commer-update';
import NewCommerDeleteDialog from './new-commer-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={NewCommerDeleteDialog} />
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={NewCommerUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={NewCommerUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={NewCommerDetail} />
      <ErrorBoundaryRoute path={match.url} component={NewCommer} />
    </Switch>
  </>
);

export default Routes;
