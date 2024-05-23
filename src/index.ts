import { Hono } from "hono";

type Bindings= {
	QUEUE : Queue
    DB : D1Database
}
const app = new Hono<{Bindings:Bindings}>()


app.post("/toQueue", async c => {
	try {

        const body = await c.req.json();
		const resp = await c.env.QUEUE.send(body)

	}catch(e){
		console.log(e)
	}

	return c.json({
		"msg" : "Success"
	})
})



export default {
    fetch: app.fetch,
    async queue(batch: MessageBatch<Error>, env: Bindings) {
        for (const message of batch.messages) {

            try {
                const data = message.body
                const info = await env.DB.prepare(
                'INSERT INTO rentiful(log) VALUES(?1)'
                )
                .bind(JSON.stringify(data))
                .run();
            } catch(err) {
                console.log(err);
            }
            

            
        }
    }
}