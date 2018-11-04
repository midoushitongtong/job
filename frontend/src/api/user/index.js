import ajax from '@/util/ajax';
import config from '@/config';

/**
 * 用户相关接口
 *
 */
export default {
  // 查询用户列表
  selectUserInfoList(data) {
    return ajax(
      'GET',
      `${config.API_ROOT}/user/userInfoList`,
      data
    );
  }
};
