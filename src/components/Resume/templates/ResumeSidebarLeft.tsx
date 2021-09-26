import { useEffect, createRef } from "react"

const paperHeight = 2000 // 简历长度
const paperWidth = paperHeight * 210 / 297

const Avatar = () => {
    //todo: 怎么获取到父组件的宽度???
    return (
        <div style={{ height: '400px', width: '400px', border: '1px solid green', borderRadius: '50%' }}>

        </div>
    )
}

const Sidebar = () => {
    const width = paperWidth / 3 // 暂定三分之一宽度
    return (
        <div style={{ height: '100%', width, border: '1px solid red' }}>
            <Avatar />
        </div>
    )
}

export const ResumeSidebarLeft: React.FunctionComponent = () => {
    return (
        <div style={{ height: paperHeight, width: paperWidth, border: '1px solid black' }}>
            <Sidebar />
        </div>
    )
}