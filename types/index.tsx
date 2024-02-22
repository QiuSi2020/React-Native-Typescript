// 存放一些公共的type

export interface KeyAny {
    [key: string]: any
}

export interface ServiceModelBase {
    id: number;
    createTime: string;
    updateTime: string;
}
