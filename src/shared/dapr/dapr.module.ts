import { Module } from '@nestjs/common';
import { DaprClient } from 'dapr-client';

@Module({
  imports: [],
  controllers: [],
  providers: [
    {
      provide: 'DaprClient',
      useValue: new DaprClient(),
    },
  ],
  exports: ['DaprClient'],
})
export class DaprModule {}
