// api-model

export interface HttpModel {
    msg: string;
    code: number;
    data: any;
}

export interface ServiceModelBase {
    id: number;
    createTime: string;
    updateTime: string;
}

export interface User extends ServiceModelBase {
    name: string
}

// 将一个已定义的类型中的所有属性变为可选项
// Partial
