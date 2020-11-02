import { Utilities } from '@gpremium/shared-all';
import { SelectQueryBuilder, ObjectLiteral, Brackets } from 'typeorm';

export class ResolversBack<T> {

    /**
     *
     */
    constructor() {}

    /**
     * Reduz um campo com varias partes para um campo com duas partes
     * @param field
     * @memberof ResolversBack<T>
     */
    public convertField(field: string): string {
        if (field.indexOf('.') > -1) {
            const parts = field.split('.');
            field = `"${parts[parts.length - 2]}"`
                .concat('.')
                .concat(`"${parts[parts.length - 1]}"`);
        } else {
            field = `"${field}"`;
        }
        return field;
    }

    /**
     * Converte um array de campos para clausula Order By
     *
     * @static
     * @returns {string}
     * @memberof ResolversBack
     */
    public convertOrderToSql(order: Array<any>): string {
        let sql: string;
        sql = '';
        let comma: string;
        if (!!order) {
            sql = ' ORDER BY ';
            comma = '';
            order.forEach(element => {
                if (element instanceof Array) {
                    let field: string, ord: string;
                    field = Utilities.camelCaseToUnderscore(element[0]);
                    ord = element[1];
                    sql = sql.concat(comma).concat(` ${field} ${ord} `);
                    comma = ', ';
                }
            });
        }
        return sql;
    }

    /**
     * Converte um array de matrizes para clausula Where
     *
     * @returns {string}
     * @memberof ResolversBack<T>
     */
    public resultSelect(select: SelectQueryBuilder<T>, filters: any[]): SelectQueryBuilder<T> {
        let connector: string;
        connector = '';
        let valor: ObjectLiteral;
        let text: string | Brackets | ((qb: SelectQueryBuilder<T>) => string);
        for (let indice = 0; indice < filters.length; indice++) {
            const filter = filters[indice];
            if (filter instanceof Array) {
                if (filter[0] instanceof Array) {
                    select = this.resultSelect(select, filter);
                } else {
                    const field = filter[0];
                    switch ( (<string>filter[1]).toLowerCase()) {
                        case '=':
                        case 'equals':
                            [text, valor] = [
                                `( ${field} = '${filter[2]}' )`,
                                null
                            ];
                            break;
                        case '<>':
                        case '!=':
                        case 'not equals':
                            [text, valor] = [
                                `( ${field} <> '${filter[2]}' )`,
                                null
                            ];
                            break;
                        case '>':
                        case 'gt':
                        case 'greater than':
                            [text, valor] = [
                                ` ( ${field} > '${filter[2]}' ) `,
                                null
                            ];
                            break;
                        case '<':
                        case 'lt':
                        case 'less than':
                            [text, valor] = [
                                ` ( ${field} < '${filter[2]}' ) `,
                                null
                            ];
                            break;
                        case '>=':
                        case 'ge':
                        case 'greater than equals':
                            [text, valor] = [
                                ` ( ${field} >= '${filter[2]}' ) `,
                                null
                            ];
                            break;
                        case '<=':
                        case 'le':
                        case 'less than equals':
                            [text, valor] = [
                                ` ( ${field} <= '${filter[2]}' ) `,
                                null
                            ];
                            break;
                        case 'between':
                        case 'bw':
                            [text, valor] = [
                                ` ( ${field} BETWEEN '${filter[2][0]}' AND '${filter[2][1]}' ) `,
                                null
                            ];
                            break;
                        case 'contains':
                        case 'ct':
                            [text, valor] = [
                                `( ${field} LIKE '%${filter[2]}%' )`,
                                null
                            ];
                            break;
                        case 'not contains':
                        case 'nct':
                            [text, valor] = [
                                `( NOT  ${field} LIKE '%${filter[2]}%' )`,
                                null
                            ];
                            break;
                        case 'startwith':
                        case 'sw':
                            [text, valor] = [
                                `(${field} LIKE  '${filter[2]}%' )`,
                                null
                            ];
                            break;
                        case 'not startwith':
                        case 'nsw':
                            [text, valor] = [
                                `(NOT ${field} LIKE  '${filter[2]}%' )`,
                                null
                            ];
                            break;
                        case 'endswith':
                        case 'ew':
                            [text, valor] = [
                                `(${field} LIKE  '%${filter[2]}' )`,
                                null
                            ];
                            break;
                        case 'not endswith':
                        case 'new':
                            [text, valor] = [
                                `(NOT ${field} LIKE  '%${filter[2]}' )`,
                                null
                            ];
                        case 'in':
                            [text, valor] = [
                                `(${field}) IN (:...value)`,
                                { value: filter[2] }
                            ];
                            break;
                        case 'not in':
                            [text, valor] = [
                                `(NOT ${field}) IN (:...value)`,
                                { value: filter[2] }
                            ];
                            break;
                        case 'is null':
                        case 'isn':
                            [text, valor] = [
                                ` ( ${field} IS NULL ) `,
                                undefined
                            ];
                            break;
                        case 'is not null':
                        case 'not is null':
                        case 'nin':
                            [text, valor] = [
                                ` ( NOT ${field} IS NULL ) `,
                                undefined
                            ];
                            break;
                        default:
                            break;
                    }
                    switch (connector.toUpperCase()) {
                        case 'AND':
                            select = select.andWhere(text, valor || undefined);
                            break;
                        case 'OR':
                            select = select.orWhere(text, valor || undefined);
                            break;
                        default:
                            select = select.where(text, valor || undefined);
                            break;
                    }
                }
            } else {
                connector = filter;
            }
        }
        return select;
    }

}
