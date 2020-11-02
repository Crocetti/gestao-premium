export class Utilities {

    public static dashToCamelCase(value: string): string {
        const reg = /-([a-z])/g;
        return value.toLowerCase().replace(reg, function(g) {
            return g[1].toUpperCase();
        });
    }

    public static underscoreToCamelCase(value: string): string {
        const reg = /_([a-z])/g;
        return value.toLowerCase().replace(reg, function(g) {
            return g[1].toUpperCase();
        });
    }

    public static camelCaseToDash(value: string): string {
        const reg = /([a-z])([A-Z])/g;
        return value.replace(reg, '$1-$2').toLowerCase();
    }

    public static camelCaseToUnderscore(value: string): string {
        const reg = /([a-z])([A-Z])/g;
        return value.replace(reg, '$1_$2').toLowerCase();
    }

}
