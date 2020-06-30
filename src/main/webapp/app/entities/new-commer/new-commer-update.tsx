import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { IServiceValue } from 'app/shared/model/service-value.model';
import { getEntities as getServiceValues } from 'app/entities/service-value/service-value.reducer';
import { getEntity, updateEntity, createEntity, reset } from './new-commer.reducer';
import { INewCommer } from 'app/shared/model/new-commer.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface INewCommerUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const NewCommerUpdate = (props: INewCommerUpdateProps) => {
  const [idsservicevalue, setIdsservicevalue] = useState([]);
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { newCommerEntity, serviceValues, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/new-commer');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
    }

    props.getServiceValues();
  }, []);

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const saveEntity = (event, errors, values) => {
    values.birthDay = convertDateTimeToServer(values.birthDay);

    if (errors.length === 0) {
      const entity = {
        ...newCommerEntity,
        ...values,
        servicevalues: mapIdList(values.servicevalues),
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
          <h2 id="jhipsterStudyApp.newCommer.home.createOrEditLabel">
            <Translate contentKey="jhipsterStudyApp.newCommer.home.createOrEditLabel">Create or edit a NewCommer</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : newCommerEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="new-commer-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="new-commer-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="ismemberLabel" for="new-commer-ismember">
                  <Translate contentKey="jhipsterStudyApp.newCommer.ismember">Ismember</Translate>
                </Label>
                <AvInput
                  id="new-commer-ismember"
                  type="select"
                  className="form-control"
                  name="ismember"
                  value={(!isNew && newCommerEntity.ismember) || 'Yes'}
                >
                  <option value="Yes">{translate('jhipsterStudyApp.Member.Yes')}</option>
                  <option value="No">{translate('jhipsterStudyApp.Member.No')}</option>
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label id="koreanNameLabel" for="new-commer-koreanName">
                  <Translate contentKey="jhipsterStudyApp.newCommer.koreanName">Korean Name</Translate>
                </Label>
                <AvField
                  id="new-commer-koreanName"
                  type="text"
                  name="koreanName"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="englishNameLabel" for="new-commer-englishName">
                  <Translate contentKey="jhipsterStudyApp.newCommer.englishName">English Name</Translate>
                </Label>
                <AvField
                  id="new-commer-englishName"
                  type="text"
                  name="englishName"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="birthDayLabel" for="new-commer-birthDay">
                  <Translate contentKey="jhipsterStudyApp.newCommer.birthDay">Birth Day</Translate>
                </Label>
                <AvInput
                  id="new-commer-birthDay"
                  type="datetime-local"
                  className="form-control"
                  name="birthDay"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.newCommerEntity.birthDay)}
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="genderLabel" for="new-commer-gender">
                  <Translate contentKey="jhipsterStudyApp.newCommer.gender">Gender</Translate>
                </Label>
                <AvInput
                  id="new-commer-gender"
                  type="select"
                  className="form-control"
                  name="gender"
                  value={(!isNew && newCommerEntity.gender) || 'MALE'}
                >
                  <option value="MALE">{translate('jhipsterStudyApp.Gender.MALE')}</option>
                  <option value="FEMALE">{translate('jhipsterStudyApp.Gender.FEMALE')}</option>
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label id="addressLabel" for="new-commer-address">
                  <Translate contentKey="jhipsterStudyApp.newCommer.address">Address</Translate>
                </Label>
                <AvField
                  id="new-commer-address"
                  type="text"
                  name="address"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="cityLabel" for="new-commer-city">
                  <Translate contentKey="jhipsterStudyApp.newCommer.city">City</Translate>
                </Label>
                <AvField
                  id="new-commer-city"
                  type="text"
                  name="city"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="provinceLabel" for="new-commer-province">
                  <Translate contentKey="jhipsterStudyApp.newCommer.province">Province</Translate>
                </Label>
                <AvField
                  id="new-commer-province"
                  type="text"
                  name="province"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="postalCodeLabel" for="new-commer-postalCode">
                  <Translate contentKey="jhipsterStudyApp.newCommer.postalCode">Postal Code</Translate>
                </Label>
                <AvField
                  id="new-commer-postalCode"
                  type="text"
                  name="postalCode"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="phoneNumberLabel" for="new-commer-phoneNumber">
                  <Translate contentKey="jhipsterStudyApp.newCommer.phoneNumber">Phone Number</Translate>
                </Label>
                <AvField
                  id="new-commer-phoneNumber"
                  type="text"
                  name="phoneNumber"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="emailLabel" for="new-commer-email">
                  <Translate contentKey="jhipsterStudyApp.newCommer.email">Email</Translate>
                </Label>
                <AvField
                  id="new-commer-email"
                  type="text"
                  name="email"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="jobLabel" for="new-commer-job">
                  <Translate contentKey="jhipsterStudyApp.newCommer.job">Job</Translate>
                </Label>
                <AvField
                  id="new-commer-job"
                  type="text"
                  name="job"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="companyLabel" for="new-commer-company">
                  <Translate contentKey="jhipsterStudyApp.newCommer.company">Company</Translate>
                </Label>
                <AvField
                  id="new-commer-company"
                  type="text"
                  name="company"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="carNumberLabel" for="new-commer-carNumber">
                  <Translate contentKey="jhipsterStudyApp.newCommer.carNumber">Car Number</Translate>
                </Label>
                <AvField
                  id="new-commer-carNumber"
                  type="text"
                  name="carNumber"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="baptismTypeLabel" for="new-commer-baptismType">
                  <Translate contentKey="jhipsterStudyApp.newCommer.baptismType">Baptism Type</Translate>
                </Label>
                <AvInput
                  id="new-commer-baptismType"
                  type="select"
                  className="form-control"
                  name="baptismType"
                  value={(!isNew && newCommerEntity.baptismType) || 'None'}
                >
                  <option value="None">{translate('jhipsterStudyApp.BaptismValue.None')}</option>
                  <option value="Infant">{translate('jhipsterStudyApp.BaptismValue.Infant')}</option>
                  <option value="Baptism">{translate('jhipsterStudyApp.BaptismValue.Baptism')}</option>
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label id="baptismChurchLabel" for="new-commer-baptismChurch">
                  <Translate contentKey="jhipsterStudyApp.newCommer.baptismChurch">Baptism Church</Translate>
                </Label>
                <AvField id="new-commer-baptismChurch" type="text" name="baptismChurch" />
              </AvGroup>
              <AvGroup>
                <Label id="baptismYearLabel" for="new-commer-baptismYear">
                  <Translate contentKey="jhipsterStudyApp.newCommer.baptismYear">Baptism Year</Translate>
                </Label>
                <AvField id="new-commer-baptismYear" type="string" className="form-control" name="baptismYear" />
              </AvGroup>
              <AvGroup>
                <Label id="visaStatusLabel" for="new-commer-visaStatus">
                  <Translate contentKey="jhipsterStudyApp.newCommer.visaStatus">Visa Status</Translate>
                </Label>
                <AvInput
                  id="new-commer-visaStatus"
                  type="select"
                  className="form-control"
                  name="visaStatus"
                  value={(!isNew && newCommerEntity.visaStatus) || 'Permenant'}
                >
                  <option value="Permenant">{translate('jhipsterStudyApp.VisaStatus.Permenant')}</option>
                  <option value="Resident">{translate('jhipsterStudyApp.VisaStatus.Resident')}</option>
                  <option value="Citizen">{translate('jhipsterStudyApp.VisaStatus.Citizen')}</option>
                  <option value="Visitor">{translate('jhipsterStudyApp.VisaStatus.Visitor')}</option>
                  <option value="Study">{translate('jhipsterStudyApp.VisaStatus.Study')}</option>
                  <option value="Permit">{translate('jhipsterStudyApp.VisaStatus.Permit')}</option>
                  <option value="Work">{translate('jhipsterStudyApp.VisaStatus.Work')}</option>
                  <option value="Working">{translate('jhipsterStudyApp.VisaStatus.Working')}</option>
                  <option value="Holiday">{translate('jhipsterStudyApp.VisaStatus.Holiday')}</option>
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label id="dutyLabel" for="new-commer-duty">
                  <Translate contentKey="jhipsterStudyApp.newCommer.duty">Duty</Translate>
                </Label>
                <AvInput
                  id="new-commer-duty"
                  type="select"
                  className="form-control"
                  name="duty"
                  value={(!isNew && newCommerEntity.duty) || 'General'}
                >
                  <option value="General">{translate('jhipsterStudyApp.Duty.General')}</option>
                  <option value="Servant">{translate('jhipsterStudyApp.Duty.Servant')}</option>
                  <option value="Deacon">{translate('jhipsterStudyApp.Duty.Deacon')}</option>
                  <option value="Ordainal">{translate('jhipsterStudyApp.Duty.Ordainal')}</option>
                  <option value="Elder">{translate('jhipsterStudyApp.Duty.Elder')}</option>
                  <option value="Evangelist">{translate('jhipsterStudyApp.Duty.Evangelist')}</option>
                  <option value="Pastor">{translate('jhipsterStudyApp.Duty.Pastor')}</option>
                  <option value="PastorWife">{translate('jhipsterStudyApp.Duty.PastorWife')}</option>
                  <option value="Missionary">{translate('jhipsterStudyApp.Duty.Missionary')}</option>
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label id="previousChurchLabel" for="new-commer-previousChurch">
                  <Translate contentKey="jhipsterStudyApp.newCommer.previousChurch">Previous Church</Translate>
                </Label>
                <AvField id="new-commer-previousChurch" type="text" name="previousChurch" />
              </AvGroup>
              <AvGroup>
                <Label id="introducerLabel" for="new-commer-introducer">
                  <Translate contentKey="jhipsterStudyApp.newCommer.introducer">Introducer</Translate>
                </Label>
                <AvField id="new-commer-introducer" type="text" name="introducer" />
              </AvGroup>
              <AvGroup>
                <Label for="new-commer-servicevalue">
                  <Translate contentKey="jhipsterStudyApp.newCommer.servicevalue">Servicevalue</Translate>
                </Label>
                <AvInput
                  id="new-commer-servicevalue"
                  type="select"
                  multiple
                  className="form-control"
                  name="servicevalues"
                  value={newCommerEntity.servicevalues && newCommerEntity.servicevalues.map(e => e.id)}
                >
                  <option value="" key="0" />
                  {serviceValues
                    ? serviceValues.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.serviceExperience}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/new-commer" replace color="info">
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
  serviceValues: storeState.serviceValue.entities,
  newCommerEntity: storeState.newCommer.entity,
  loading: storeState.newCommer.loading,
  updating: storeState.newCommer.updating,
  updateSuccess: storeState.newCommer.updateSuccess,
});

const mapDispatchToProps = {
  getServiceValues,
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(NewCommerUpdate);
