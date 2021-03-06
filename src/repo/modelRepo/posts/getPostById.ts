import Signature from './../../../models/interfaces/posts/getPostById';
import Config from './../../utils/sequelize/Config';
import { Options } from './../../../models/interfaces/posts/getPostById';
import { POST_MODEL_VISIBLE_PROPERTIES } from './../../../constants';
import { PostInstance } from './../../../models/sequelize/_instances';
import ModelNotFoundError from './../../../lib/errors/ModelNotFoundError';

export default (config: Config) => {
    return async ({ id }: Options) => {
        const post: PostInstance | null = await config.models.Post.findOne({
            attributes: POST_MODEL_VISIBLE_PROPERTIES,
            where: { id }
        });
        if (post === null) throw new ModelNotFoundError('Post');

        return post.get({ plain: true });
    };
}
