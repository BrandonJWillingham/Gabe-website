import nodemailer from "nodemailer"
export const runtime = "nodejs";

export async function POST(req){
    const payload = await req.json()
    console.log(payload)
    const transporter = nodemailer.createTransport({
        host:"smtp-relay.brevo.com",
        port:587,
        secure:false,
        auth:{
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_USER 
        }
    })
    const info = await transporter.sendMail({
        from: "Gabe site <josiahbwill@gmail.com>",
        to: "gabrielpj31@gmail.com",
        subject:`${payload.name} is looking for a consultation`,
        text: `Hi, my name is ${payload.Name} and I am looking to achieve ${payload.Goal} with ${payload.Package}. \n you can contact me at ${payload.Email}, ${payload.Phone}`,
        replyTo: payload.Email,
    })

    return new Response(JSON.stringify({ ok: true, id: info.messageId }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
}

