import { INewCommer } from 'app/shared/model/new-commer.model';
import { ServiceTitle } from 'app/shared/model/enumerations/service-title.model';

export interface IServiceValue {
  id?: number;
  serviceExperience?: ServiceTitle;
  newcommers?: INewCommer[];
}

export const defaultValue: Readonly<IServiceValue> = {};
