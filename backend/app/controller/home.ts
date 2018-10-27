import { Controller } from 'egg';

export default class HomeController extends Controller {

  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.model.User.create({
      name: '12',
      age: 'dqw'
    });
  }
}
