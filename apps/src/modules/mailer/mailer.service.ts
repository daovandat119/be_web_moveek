import { Injectable } from '@nestjs/common';
import { MailerService as NestMailerService, ISendMailOptions } from '@nestjs-modules/mailer';

@Injectable()
export class MailerService {
  constructor(private readonly mailerService: NestMailerService) {}

  async sendActivationEmail(email: string, username: string, codeId: string, template: string){
    const mailOptions: ISendMailOptions = {
      to: email,
      subject: 'Activate your account at @nest',
      template: template,
      context: {
        username: username,
        activationCode: codeId,
      },
    };

    return await this.mailerService.sendMail(mailOptions);
  }
}
