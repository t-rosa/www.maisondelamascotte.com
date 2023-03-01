import { contactSchema } from '@/types/contact-schema'
import { z } from 'zod'

type Contact = z.infer<typeof contactSchema>

export async function POST(request: Request) {
  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: process.env.MAIL_PORT,
    host: process.env.MAIL_HOST,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
    secure: true,
  })

  const body: Contact = await request.json()

  const html = `
<!DOCTYPE html>
<html lang="fr">
<body>
<h3>Nom :</h3> &nbsp; <span>${body.lastName}</span>
</div>
<div style="display:flex; align-items: center;">
<h3>Prénom :</h3> &nbsp; <span>${body.firstName}</span>
</div>
<div style="display:flex; align-items: center;">
<h3>Email :</h3> &nbsp; <span>${body.email}</span>
</div>
<div style="display:flex; align-items: center;">
<h3>Téléphone :</h3> &nbsp; <span>${body.phone}</span>
</div>
</br>
<h3>Message</h3> 
</br>
<div>${body.message}</div>
</body>
</html>
    `

  const mailData = {
    from: body.email,
    to: 'toma.rosa@protonmail.com',
    subject: `Prise de contact - ${body.firstName} ${body.lastName}`,
    text: body.message,
    html,
  }

  try {
    transporter.sendMail(mailData)
    return new Response('Success')
  } catch (e) {
    return Response.error()
  }
}
