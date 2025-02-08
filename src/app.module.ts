import { Module } from '@nestjs/common';
import { ReservationsModule } from './reservations/reservations.module';
import { PaymentsModule } from './payments/payments.module';
import { PropertiesModule } from './properties/properties.module';
import { GuestsModule } from './guests/guests.module';

@Module({
  imports: [ReservationsModule, PaymentsModule, PropertiesModule, GuestsModule],
})
export class AppModule {}
