import { Moment } from 'moment';
import { IServiceValue } from 'app/shared/model/service-value.model';
import { Member } from 'app/shared/model/enumerations/member.model';
import { Gender } from 'app/shared/model/enumerations/gender.model';
import { BaptismValue } from 'app/shared/model/enumerations/baptism-value.model';
import { VisaStatus } from 'app/shared/model/enumerations/visa-status.model';
import { Duty } from 'app/shared/model/enumerations/duty.model';

export interface INewCommer {
  id?: number;
  ismember?: Member;
  koreanName?: string;
  englishName?: string;
  birthDay?: string;
  gender?: Gender;
  address?: string;
  city?: string;
  province?: string;
  postalCode?: string;
  phoneNumber?: string;
  email?: string;
  job?: string;
  company?: string;
  carNumber?: string;
  baptismType?: BaptismValue;
  baptismChurch?: string;
  baptismYear?: number;
  visaStatus?: VisaStatus;
  duty?: Duty;
  previousChurch?: string;
  introducer?: string;
  servicevalues?: IServiceValue[];
}

export const defaultValue: Readonly<INewCommer> = {};
