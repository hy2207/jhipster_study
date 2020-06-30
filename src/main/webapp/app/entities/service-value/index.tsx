import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import ServiceValue from './service-value';
import ServiceValueDetail from './service-value-detail';
import ServiceValueUpdate from './service-value-update';
import ServiceValueDeleteDialog from './service-value-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={ServiceValueDeleteDialog} />
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={ServiceValueUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={ServiceValueUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={ServiceValueDetail} />
      <ErrorBoundaryRoute path={match.url} component={ServiceValue} />
    </Switch>
  </>
);

export default Routes;
