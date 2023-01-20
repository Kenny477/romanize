import Router from '@koa/router';
import { romanize, RomanizationSystem } from 'korean';
export const korean = new Router();

interface RomanizeRequest {
  text: string;
  system?: RomanizationSystem
}

/*
  Type: POST
  Path: /korean
  RequestBody: { "text": "한글", "system": "REVISED" }
  ResponseBody: { "romanized": "hangul" }
*/
korean.post('/', (ctx, next) => {
  const { text, system = RomanizationSystem.REVISED } = <RomanizeRequest>ctx.request.body;
  if (!text) {
    ctx.throw(400, 'Missing text');
  }
  const romanized = romanize(text, system);
  ctx.body = { romanized };
});