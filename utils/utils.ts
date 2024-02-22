import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window"); // 获取设备的屏幕宽度、高度

// (使用场景：根据设计稿375*750为标准作为对照)

// px转vw：传入设计图上组件的单位
export const pxToVw = (px: number, standardWidth: number = 375): number => {
    return (px / standardWidth) * width;
};

// px转vh：传入设计图上组件的单位
export const pxToVh = (px: number, standardHeight: number = 750): number => {
    return (px / standardHeight) * height;
};

// 防抖,只执行最后一次任务
// 用法一：const func_One = debounce_(1000, func_Two):在1000毫秒后执行func_Two
// 用法二：const func_Three = debounce_(1000) -> func_Three(func_Five):在1000毫秒后执行func_Three中的方法
export function debounce_(timeout: number, Fn?: Function): (fn?: Function) => void {
    // var timer: NodeJS.Timer
    var timer: any
    return function(fn?: Function) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            Fn ? Fn() : fn && fn()
            // console.log('防抖成功')
        }, timeout)
    }
}

// 字符串 加密
export function toCode(value: string): string {
    var keys = "ABCDEFGHIJKLMNOPQRSTUVWXYZ12345678"
    var kleng = keys.length
    var kstr = keys.split("")
    var v = "", cat, cat1, cat2, cat3
    for (var i = 0; i <value.length; i++) {
        cat = value.charCodeAt(i)
        cat1 = cat % kleng
        cat = (cat - cat1) / kleng
        cat2 = cat % kleng
        cat = (cat - cat2) / kleng
        cat3 = cat % kleng
        v += kstr[cat3] + kstr[cat2] + kstr[cat1]
    }
    return v
}

// 字符串 解密
export function fromCode(value: string): string {
    var keys = "ABCDEFGHIJKLMNOPQRSTUVWXYZ12345678"
    var kleng = keys.length
    var alen, cat1, cat2, cat3, num = 0, arr
    arr = new Array(Math.floor(value.length / 3))
    alen = arr.length
    for (var i = 0; i < alen; i ++) {
        cat1 = keys.indexOf(value.charAt(num))
        num ++
        cat2 = keys.indexOf(value.charAt(num))
        num ++
        cat3 = keys.indexOf(value.charAt(num))
        num ++
        arr[i] = cat1 * kleng * kleng + cat2 * kleng + cat3
    }
    alen = eval("String.fromCharCode(" + arr.join(',') + ")")
    return alen.toString();
}
