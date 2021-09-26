export const Paper: React.FunctionComponent = ({ children }) => {
    const height = 2000
    const width = height * 210 / 297
    return (
        <div style={{ height, width, border: '1px solid black' }}>
            {children}
        </div>
    )
}