import { db } from "./db.ts";
import { Application, Router, generateId } from "../deps.ts";
import { renderEjs } from "./utils.ts";

const app = new Application();

app.addEventListener("listen", ({ hostname, port, secure }) => {
    console.log(
        `Listening on: ${secure ? "https://" : "http://"}${hostname ??
        "localhost"
        }:${port}`,
    );
});

app.use(async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        if (err.status === 404) {
            ctx.response.body = await renderEjs(`error`, { data: {
                status: err.status,
                message: err.message
            }});
        } else {
            throw err;
        }
    }
});

const router = new Router();

router
    .use("/guest/:id", async (ctx, next) => {
        const guest = await db.findOne({ id: ctx.params.id });
        if (!guest) return ctx.throw(404, "Guest is not found");
        ctx.state.guest = guest;
        await next();
    })
    .get("/guest/:id", async ctx => {
        ctx.response.body = await renderEjs(`guest`, { data: ctx.state.guest });
    })
    .post("/guest/:id", async ctx => {
        const result = ctx.request.body({ type: "form" });
        const value = await result.value;
        const choice = value.get("choice");
        if (choice === "false") {
            await db.updateOne({ id: ctx.params.id }, { attending: false });
            ctx.response.redirect("/sorry");
        } else if (choice === "true") {
            await db.updateOne({ id: ctx.params.id }, { attending: true });
            ctx.response.redirect("/thank-you");
        }
    })
    .get("/thank-you", async ctx => {
        ctx.response.body = await renderEjs(`thank-you`, {});
    })
    .get("/sorry", async ctx => {
        ctx.response.body = await renderEjs(`sorry`, {});
    })
    .get("/", ctx => ctx.response.redirect("/admin"))
    .get("/admin", async ctx => {
        const guests  = await db.findMany({});
        ctx.response.body = await renderEjs(`admin`, {data: guests});
    })
    .post("/admin", async ctx => {
        const result = ctx.request.body({ type: "form" });
        const value = await result.value;
        const abbriviation = value.get("abbriviation");
        const firstName = value.get("firstName");
        const lastName = value.get("lastName");
        if(!abbriviation || !firstName || !lastName) return;
        await db.insertOne({
            id:generateId(),
            abbriviation,
            firstName,
            lastName
        })
        ctx.response.redirect('/admin');
    })

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
