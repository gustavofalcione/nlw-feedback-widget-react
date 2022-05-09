import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "1d68e0ff18cbe5",
    pass: "16dead926c389d"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) { 
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Gustavo Falcione <falcionegustavo@gmail.com>',
      subject,
      html: body,
    })
  };
}