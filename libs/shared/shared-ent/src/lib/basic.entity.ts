import {Column, Entity} from 'typeorm'
import { LocalDateTime } from '@js-joda/core';

@Entity()
export class BasicEntity {
    @Column("uniqueidentifier", { primary: true, name: "ID" })
    public id: string;

    @Column("datetime2", { name: "AUDT_DT_CREATE" })
    public audtDtCreate: LocalDateTime;

    @Column("datetime2", { name: "AUDT_DT_UPDATE", nullable: true })
    public audtDtUpdate: LocalDateTime | null;

    @Column("uniqueidentifier", { name: "AUDT_USRS_CREATE" })
    public audtUsrsCreate: string;

    @Column("uniqueidentifier", { name: "AUDT_USRS_UPDATE", nullable: true })
    public audtUsrsUpdate: string | null;

    @Column("bit", { name: "AUDT_ACTIVE" })
    public audtActive: boolean;

}
