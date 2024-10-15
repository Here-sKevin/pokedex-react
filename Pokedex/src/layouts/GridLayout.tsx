import { ReactNode } from "react"

type Props = {
    children: ReactNode
}


export const GridLayout: React.FC<Props> = ({children}) => {
    return(
        <div className="grid grid-cols-3 gap-2">
            {children}
        </div>
    )
}