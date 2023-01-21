import { Module } from '@nestjs/common';
import { CampaignsResolver } from './campaign.resolver';
import { CampaignsService } from './campaign.service';

@Module({
  imports: [],
  providers: [CampaignsResolver,CampaignsService],
})
export class CampaignsModule {}
