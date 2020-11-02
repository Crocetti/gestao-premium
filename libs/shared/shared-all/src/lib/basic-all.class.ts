import { DateTimeFormatter, LocalDate, LocalDateTime, LocalTime } from '@js-joda/core';

export class BasicAll {

    /**
     * Verifica se uma determinada data está no horário de verão (mundial)
     * @param d Date
     */
    public isDST(d: Date): boolean {
        const jan = new Date(d.getFullYear(), 0, 1).getTimezoneOffset(); // Brasil
        const jul = new Date(d.getFullYear(), 5, 1).getTimezoneOffset(); // EUA e UE
        const std = Math.max(jan, jul);
        return (d.getTimezoneOffset() < std);
    }
    /**
     * Ajusta a data do banco de dados de acordo com o timezone local.
     * @param value
     */
    public ajustaHorarioBrasilia(value: string): LocalDateTime {
        if (!value) {
            return null;
        }
        let partes: string[] = [];
        let data: string;
        let hora: string;
        let dst: number;
        if (this.isDST(new Date())) {
            dst = 120;
        } else {
            dst = 180;
        }
        // exemplos de datas
        // 2016-03-18T12:38:23.561-03:00
        // 2016-03-18 12:38:23.561-03:00
        // 2016-03-18T12:38:23.561+03:00
        // 2016-03-18 12:38:23.561+03:00
        // 2016-03-18T12:38:23.561Z-0300
        // 2016-03-18 12:38:23.561Z+0300

        if (value.indexOf('T') > 0) {
            partes = value.split('T');
        } else if (value.indexOf(' ') > 0) {
            partes = value.split(' ');
        } else {
            return LocalDateTime.now();
        }
        data = partes[0];
        hora = partes[1];
        if (hora.indexOf('-') > 0) {
            hora = hora.split('-')[0];
        } else if (hora.indexOf('+') > 0) {
            hora = hora.split('+')[0];
        } else if (hora.indexOf('Z') > 0) {
            hora = hora.split('Z')[0];
        }
        if (hora.indexOf('.') > 0) {
            hora = hora.split('.')[0];
        }
        if (hora.length === 5) {
            hora = hora + ':00';
        }
        // console.log(data, hora);
        return LocalDateTime.of(
            LocalDate.parse(data, DateTimeFormatter.ofPattern('yyyy-MM-dd')),
            LocalTime.parse(hora, DateTimeFormatter.ofPattern('HH:mm:ss'))
        ).minusMinutes(dst);
    }

    /**
     * Verifica se um determinado objeto é vazio (sem propriedades);
     * @param obj Object
     */
    public isEmpty(obj: Object): boolean {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                return false;
            }
        }
        return true;
    }
}
