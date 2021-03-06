import AsyncHandler from '../../../lib/AsyncHandler';
import * as SequelizeStatic from 'sequelize';
import { UserAttributes} from './user.attributes';

export interface Options {
    readonly email: string;
}

type Signature = AsyncHandler<Options,UserAttributes>;

export default Signature;
