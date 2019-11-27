export declare class VueArrayPermission {
    permissions?: Array<string>;
    constructor();
    reset(): void;
    authorize(permissions: Array<string>): void;
    v(permission: string): boolean;
    vAnd(permission: Array<string>): boolean;
    vOr(permission: Array<string>): boolean;
}
declare let Plugin: {
    install: (Vue: any, options?: object | undefined) => void;
};
export default Plugin;
