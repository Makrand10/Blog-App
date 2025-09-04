
import { verify } from "hono/jwt";
import { Hono } from "hono";

export function initMiddleware(app: Hono) {
    app.use('/api/v1/blog/*', async (c, next) => {
        const header = c.req.header("authorization") || "";
        // Bearer token => ["Bearer", "token"];
        const token = header.split(" ")[1]
        
        const response = await verify(token, (c.env as any).JWT_SECRET)
        if ((response as any)?.id) {
          await next()
        } else {
          c.status(403)
          return c.json({ error: "unauthorized" })
        }
      })
      
}