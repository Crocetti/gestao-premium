import { LocalDateTime } from '@js-joda/core';

export interface BasicInterface {
    id?: string;
    audtDtCreate: LocalDateTime;
    audtDtUpdate?: LocalDateTime;
    audtUsrsCreate: string;
    audtUsrsUpdate?: string;
    audtActive: boolean;
}
