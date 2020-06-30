import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './new-commer.reducer';
import { INewCommer } from 'app/shared/model/new-commer.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface INewCommerDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const NewCommerDetail = (props: INewCommerDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { newCommerEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="jhipsterStudyApp.newCommer.detail.title">NewCommer</Translate> [<b>{newCommerEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="ismember">
              <Translate contentKey="jhipsterStudyApp.newCommer.ismember">Ismember</Translate>
            </span>
          </dt>
          <dd>{newCommerEntity.ismember}</dd>
          <dt>
            <span id="koreanName">
              <Translate contentKey="jhipsterStudyApp.newCommer.koreanName">Korean Name</Translate>
            </span>
          </dt>
          <dd>{newCommerEntity.koreanName}</dd>
          <dt>
            <span id="englishName">
              <Translate contentKey="jhipsterStudyApp.newCommer.englishName">English Name</Translate>
            </span>
          </dt>
          <dd>{newCommerEntity.englishName}</dd>
          <dt>
            <span id="birthDay">
              <Translate contentKey="jhipsterStudyApp.newCommer.birthDay">Birth Day</Translate>
            </span>
          </dt>
          <dd>{newCommerEntity.birthDay ? <TextFormat value={newCommerEntity.birthDay} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
          <dt>
            <span id="gender">
              <Translate contentKey="jhipsterStudyApp.newCommer.gender">Gender</Translate>
            </span>
          </dt>
          <dd>{newCommerEntity.gender}</dd>
          <dt>
            <span id="address">
              <Translate contentKey="jhipsterStudyApp.newCommer.address">Address</Translate>
            </span>
          </dt>
          <dd>{newCommerEntity.address}</dd>
          <dt>
            <span id="city">
              <Translate contentKey="jhipsterStudyApp.newCommer.city">City</Translate>
            </span>
          </dt>
          <dd>{newCommerEntity.city}</dd>
          <dt>
            <span id="province">
              <Translate contentKey="jhipsterStudyApp.newCommer.province">Province</Translate>
            </span>
          </dt>
          <dd>{newCommerEntity.province}</dd>
          <dt>
            <span id="postalCode">
              <Translate contentKey="jhipsterStudyApp.newCommer.postalCode">Postal Code</Translate>
            </span>
          </dt>
          <dd>{newCommerEntity.postalCode}</dd>
          <dt>
            <span id="phoneNumber">
              <Translate contentKey="jhipsterStudyApp.newCommer.phoneNumber">Phone Number</Translate>
            </span>
          </dt>
          <dd>{newCommerEntity.phoneNumber}</dd>
          <dt>
            <span id="email">
              <Translate contentKey="jhipsterStudyApp.newCommer.email">Email</Translate>
            </span>
          </dt>
          <dd>{newCommerEntity.email}</dd>
          <dt>
            <span id="job">
              <Translate contentKey="jhipsterStudyApp.newCommer.job">Job</Translate>
            </span>
          </dt>
          <dd>{newCommerEntity.job}</dd>
          <dt>
            <span id="company">
              <Translate contentKey="jhipsterStudyApp.newCommer.company">Company</Translate>
            </span>
          </dt>
          <dd>{newCommerEntity.company}</dd>
          <dt>
            <span id="carNumber">
              <Translate contentKey="jhipsterStudyApp.newCommer.carNumber">Car Number</Translate>
            </span>
          </dt>
          <dd>{newCommerEntity.carNumber}</dd>
          <dt>
            <span id="baptismType">
              <Translate contentKey="jhipsterStudyApp.newCommer.baptismType">Baptism Type</Translate>
            </span>
          </dt>
          <dd>{newCommerEntity.baptismType}</dd>
          <dt>
            <span id="baptismChurch">
              <Translate contentKey="jhipsterStudyApp.newCommer.baptismChurch">Baptism Church</Translate>
            </span>
          </dt>
          <dd>{newCommerEntity.baptismChurch}</dd>
          <dt>
            <span id="baptismYear">
              <Translate contentKey="jhipsterStudyApp.newCommer.baptismYear">Baptism Year</Translate>
            </span>
          </dt>
          <dd>{newCommerEntity.baptismYear}</dd>
          <dt>
            <span id="visaStatus">
              <Translate contentKey="jhipsterStudyApp.newCommer.visaStatus">Visa Status</Translate>
            </span>
          </dt>
          <dd>{newCommerEntity.visaStatus}</dd>
          <dt>
            <span id="duty">
              <Translate contentKey="jhipsterStudyApp.newCommer.duty">Duty</Translate>
            </span>
          </dt>
          <dd>{newCommerEntity.duty}</dd>
          <dt>
            <span id="previousChurch">
              <Translate contentKey="jhipsterStudyApp.newCommer.previousChurch">Previous Church</Translate>
            </span>
          </dt>
          <dd>{newCommerEntity.previousChurch}</dd>
          <dt>
            <span id="introducer">
              <Translate contentKey="jhipsterStudyApp.newCommer.introducer">Introducer</Translate>
            </span>
          </dt>
          <dd>{newCommerEntity.introducer}</dd>
          <dt>
            <Translate contentKey="jhipsterStudyApp.newCommer.servicevalue">Servicevalue</Translate>
          </dt>
          <dd>
            {newCommerEntity.servicevalues
              ? newCommerEntity.servicevalues.map((val, i) => (
                  <span key={val.id}>
                    <a>{val.serviceExperience}</a>
                    {newCommerEntity.servicevalues && i === newCommerEntity.servicevalues.length - 1 ? '' : ', '}
                  </span>
                ))
              : null}
          </dd>
        </dl>
        <Button tag={Link} to="/new-commer" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/new-commer/${newCommerEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ newCommer }: IRootState) => ({
  newCommerEntity: newCommer.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(NewCommerDetail);
