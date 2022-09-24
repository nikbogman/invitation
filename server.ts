import { getQuery } from "https://deno.land/x/oak@v11.1.0/helpers.ts";
import { Application, Router, renderEjs } from "./deps.ts";

const app = new Application();

//app.use(viewEngine(oakAdapter, dejsEngine, {viewRoot: "./views/ejs",}));
app.addEventListener("listen", ({ hostname, port, secure }) => {
    console.log(
        `Listening on: ${secure ? "https://" : "http://"}${hostname ??
        "localhost"
        }:${port}`,
    );
})

app.use(async (ctx, next) => {
    await next();
    const rt = ctx.response.headers.get("X-Response-Time");
    console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
});


app.use(async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        if (err.status === 404) {
            console.log(404)
        } else {
            throw err;
        }
    }
});

const router = new Router();
router.get('/', async ctx => {
    const queryParams: Record<string,string> = getQuery(ctx)
    console.table(queryParams)
    const output = await renderEjs(`${Deno.cwd()}/views/guest.ejs`, {
        name: "world",
    });
    ctx.response.body = output;
})


app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });