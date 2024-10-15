import React from "react"
import { cn } from "../lib/utils"

 const HomePage: React.FC = () => {
    return (
        <div className="w-screen flex justify-center bg-primary-light dark:bg-primary-dark">
            <img src="./src/assets/pokemon.svg" className={cn("flex items-center justify-center size-96")}/>
        </div>
        
    )
}

export default HomePage;