import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import { korean } from './routes/korean';
const app = new Koa();

app.use(bodyParser());

app.use(korean.routes());

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);