import { NextResponse } from "next/server";
import { transporter, mailOptionsIn, mailOptionsOut } from "@/config/nodemailer";
import { path } from "path";

export async function POST(req, res) {
  
  const { email, subject, message } = await req.json();
  try {
    const dataIn = await transporter.sendMail({
      ...mailOptionsIn,
      to: 'jflorido94@hotmail.com',
      replyTo: email,
      subject: subject,
      text: message
    })
    const dataOut = await transporter.sendMail({
      ...mailOptionsOut,
      to: email,
      replyTo: 'jflorido94@hotmail.com',
      subject: 'Gracias por contactar',
      text: `Buenas, 
      Lo primero de todo muchas gracias por contactar conmigo.
      
      En cuanto pueda le/s responderé a su email.
      Para cualquier otro contacto responda a este email y además le dejo mi CV con mi información.

      Un saludo, gracias y seguimos en contacto

      Javier Florido Pavon
      Programador y analista
      ---------------------------------------------------------------------------------------------

      Copia del correo enviado por la web:
      Asunto: `+ subject +` 
      Mensaje: `+ message,
      attachments: { 
        // filename: 'text1.txt',
        // content: 'hello world!'
        path: process.env.URL+'/pdf/JavierFlorido-CV.pdf',
        contentType: 'application/pdf'
      }
    })
    return NextResponse.json(dataIn);
  } catch (error) {
      return NextResponse.json({ error });
  }
}