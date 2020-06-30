import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './service-value.reducer';
import { IServiceValue } from 'app/shared/model/service-value.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IServiceValueProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const ServiceValue = (props: IServiceValueProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { serviceValueList, match, loading } = props;
  return (
    <div>
      <h2 id="service-value-heading">
        <Translate contentKey="jhipsterStudyApp.serviceValue.home.title">Service Values</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="jhipsterStudyApp.serviceValue.home.createLabel">Create new Service Value</Translate>
        </Link>
      </h2>
      <div className="table-responsive">
        {serviceValueList && serviceValueList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterStudyApp.serviceValue.serviceExperience">Service Experience</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {serviceValueList.map((serviceValue, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${serviceValue.id}`} color="link" size="sm">
                      {serviceValue.id}
                    </Button>
                  </td>
                  <td>
                    <Translate contentKey={`jhipsterStudyApp.ServiceTitle.${serviceValue.serviceExperience}`} />
                  </td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${serviceValue.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${serviceValue.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${serviceValue.id}/delete`} color="danger" size="sm">
                        <FontAwesomeIcon icon="trash" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.delete">Delete</Translate>
                        </span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          !loading && (
            <div className="alert alert-warning">
              <Translate contentKey="jhipsterStudyApp.serviceValue.home.notFound">No Service Values found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ serviceValue }: IRootState) => ({
  serviceValueList: serviceValue.entities,
  loading: serviceValue.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(ServiceValue);
