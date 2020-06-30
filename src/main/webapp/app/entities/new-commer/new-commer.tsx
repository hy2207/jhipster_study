import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './new-commer.reducer';
import { INewCommer } from 'app/shared/model/new-commer.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface INewCommerProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const NewCommer = (props: INewCommerProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { newCommerList, match, loading } = props;
  return (
    <div>
      <h2 id="new-commer-heading">
        <Translate contentKey="jhipsterStudyApp.newCommer.home.title">New Commers</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="jhipsterStudyApp.newCommer.home.createLabel">Create new New Commer</Translate>
        </Link>
      </h2>
      <div className="table-responsive">
        {newCommerList && newCommerList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterStudyApp.newCommer.ismember">Ismember</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterStudyApp.newCommer.koreanName">Korean Name</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterStudyApp.newCommer.englishName">English Name</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterStudyApp.newCommer.birthDay">Birth Day</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterStudyApp.newCommer.gender">Gender</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterStudyApp.newCommer.address">Address</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterStudyApp.newCommer.city">City</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterStudyApp.newCommer.province">Province</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterStudyApp.newCommer.postalCode">Postal Code</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterStudyApp.newCommer.phoneNumber">Phone Number</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterStudyApp.newCommer.email">Email</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterStudyApp.newCommer.job">Job</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterStudyApp.newCommer.company">Company</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterStudyApp.newCommer.carNumber">Car Number</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterStudyApp.newCommer.baptismType">Baptism Type</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterStudyApp.newCommer.baptismChurch">Baptism Church</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterStudyApp.newCommer.baptismYear">Baptism Year</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterStudyApp.newCommer.visaStatus">Visa Status</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterStudyApp.newCommer.duty">Duty</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterStudyApp.newCommer.previousChurch">Previous Church</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterStudyApp.newCommer.introducer">Introducer</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterStudyApp.newCommer.servicevalue">Servicevalue</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {newCommerList.map((newCommer, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${newCommer.id}`} color="link" size="sm">
                      {newCommer.id}
                    </Button>
                  </td>
                  <td>
                    <Translate contentKey={`jhipsterStudyApp.Member.${newCommer.ismember}`} />
                  </td>
                  <td>{newCommer.koreanName}</td>
                  <td>{newCommer.englishName}</td>
                  <td>{newCommer.birthDay ? <TextFormat type="date" value={newCommer.birthDay} format={APP_DATE_FORMAT} /> : null}</td>
                  <td>
                    <Translate contentKey={`jhipsterStudyApp.Gender.${newCommer.gender}`} />
                  </td>
                  <td>{newCommer.address}</td>
                  <td>{newCommer.city}</td>
                  <td>{newCommer.province}</td>
                  <td>{newCommer.postalCode}</td>
                  <td>{newCommer.phoneNumber}</td>
                  <td>{newCommer.email}</td>
                  <td>{newCommer.job}</td>
                  <td>{newCommer.company}</td>
                  <td>{newCommer.carNumber}</td>
                  <td>
                    <Translate contentKey={`jhipsterStudyApp.BaptismValue.${newCommer.baptismType}`} />
                  </td>
                  <td>{newCommer.baptismChurch}</td>
                  <td>{newCommer.baptismYear}</td>
                  <td>
                    <Translate contentKey={`jhipsterStudyApp.VisaStatus.${newCommer.visaStatus}`} />
                  </td>
                  <td>
                    <Translate contentKey={`jhipsterStudyApp.Duty.${newCommer.duty}`} />
                  </td>
                  <td>{newCommer.previousChurch}</td>
                  <td>{newCommer.introducer}</td>
                  <td>
                    {newCommer.servicevalues
                      ? newCommer.servicevalues.map((val, j) => (
                          <span key={j}>
                            <Link to={`service-value/${val.id}`}>{val.serviceExperience}</Link>
                            {j === newCommer.servicevalues.length - 1 ? '' : ', '}
                          </span>
                        ))
                      : null}
                  </td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${newCommer.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${newCommer.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${newCommer.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="jhipsterStudyApp.newCommer.home.notFound">No New Commers found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ newCommer }: IRootState) => ({
  newCommerList: newCommer.entities,
  loading: newCommer.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(NewCommer);
