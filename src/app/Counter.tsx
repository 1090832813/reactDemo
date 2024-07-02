import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { increment, decrement } from './store/festures/counterSlice';
import { Button } from "antd";
export default function Counter() {


    // 通过useSelector直接拿到store中定义的value
    const { value } = useSelector((store: any) => { return store.counter })


    // 通过useDispatch 派发事件
    const dispatch = useDispatch()


    // View: 视图定义
    return (
        <div>
            Value: {value} <Button onClick={() => dispatch(increment())}>Increment</Button>
        </div>
    )
}