import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { INewCommer } from 'app/shared/model/new-commer.model';
import { getEntities as getNewCommers } from 'app/entities/new-commer/new-commer.reducer';
import { getEntity, updateEntity, createEntity, reset } from './service-value.reducer';
import { IServiceValue } from 'app/shared/model/service-value.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IServiceValueUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const ServiceValueUpdate = (props: IServiceValueUpdateProps) => {
  const [newcommerId, setNewcommerId] = useState('0');
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { serviceValueEntity, newCommers, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/service-value');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
    }

    props.getNewCommers();
  }, []);

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const entity = {
        ...serviceValueEntity,
        ...values,
      };

      if (isNew) {
        props.createEntity(entity);
      } else {
        props.updateEntity(entity);
      }
    }
  };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="jhipsterStudyApp.serviceValue.home.createOrEditLabel">
            <Translate contentKey="jhipsterStudyApp.serviceValue.home.createOrEditLabel">Create or edit a ServiceValue</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : serviceValueEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="service-value-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="service-value-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="serviceExperienceLabel" for="service-value-serviceExperience">
                  <Translate contentKey="jhipsterStudyApp.serviceValue.serviceExperience">Service Experience</Translate>
                </Label>
                <AvInput
                  id="service-value-serviceExperience"
                  type="select"
                  className="form-control"
                  name="serviceExperience"
                  value={(!isNew && serviceValueEntity.serviceExperience) || 'Design'}
                >
                  <option value="Design">{translate('jhipsterStudyApp.ServiceTitle.Design')}</option>
                  <option value="Ministry">{translate('jhipsterStudyApp.ServiceTitle.Ministry')}</option>
                  <option value="Administration">{translate('jhipsterStudyApp.ServiceTitle.Administration')}</option>
                  <option value="Praise">{translate('jhipsterStudyApp.ServiceTitle.Praise')}</option>
                  <option value="Team">{translate('jhipsterStudyApp.ServiceTitle.Team')}</option>
                  <option value="Parking">{translate('jhipsterStudyApp.ServiceTitle.Parking')}</option>
                  <option value="Information">{translate('jhipsterStudyApp.ServiceTitle.Information')}</option>
                  <option value="Financial">{translate('jhipsterStudyApp.ServiceTitle.Financial')}</option>
                  <option value="Management">{translate('jhipsterStudyApp.ServiceTitle.Management')}</option>
                  <option value="Facility">{translate('jhipsterStudyApp.ServiceTitle.Facility')}</option>
                  <option value="Landscaping">{translate('jhipsterStudyApp.ServiceTitle.Landscaping')}</option>
                  <option value="Others">{translate('jhipsterStudyApp.ServiceTitle.Others')}</option>
                </AvInput>
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/service-value" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">
                  <Translate contentKey="entity.action.back">Back</Translate>
                </span>
              </Button>
              &nbsp;
              <Button color="primary" id="save-entity" type="submit" disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp;
                <Translate contentKey="entity.action.save">Save</Translate>
              </Button>
            </AvForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = (storeState: IRootState) => ({
  newCommers: storeState.newCommer.entities,
  serviceValueEntity: storeState.serviceValue.entity,
  loading: storeState.serviceValue.loading,
  updating: storeState.serviceValue.updating,
  updateSuccess: storeState.serviceValue.updateSuccess,
});

const mapDispatchToProps = {
  getNewCommers,
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(ServiceValueUpdate);
