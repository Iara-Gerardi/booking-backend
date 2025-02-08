import { Body, Controller, Patch, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('/payments')
export class PaymentsController {
  @Post()
  paymentWebhook(@Body() body: any) {
    return 'Listening for changes';
  }

  @Patch()
  updatePayment(@Req() request: Request, @Res() response: Response): string {
    return 'Updating payment status';
  }
}
