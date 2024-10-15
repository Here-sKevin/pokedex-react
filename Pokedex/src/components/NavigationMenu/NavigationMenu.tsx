
import * as React from "react"

import { NavLink } from 'react-router-dom';

import { cn } from "../../lib/utils" 

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu"
import SignIpPage from "../../pages/Login/LoginPage";
import SignUpPage from "../../pages/SignUp/SignUpPage";
import ThemeToggle from "../ThemeToggle/ThemeToggle";


export const Navigation = () => {
  const [authentication, setAuthentication] = React.useState(false)

  React.useEffect(() => {
    const isAuthenticated = JSON.parse(localStorage.getItem('isAuthenticated') || 'false');
    setAuthentication(isAuthenticated)
  }, [])

  const handleLogout = () => {
    localStorage.setItem("isAuthenticated", "false")
    window.location.reload();
  }
  if(!authentication) {
    return (
      <NavigationMenu>
        <NavigationMenuList>
          <div className="container mx-auto flex justify-between items-center">
            <div>
              <NavigationMenuItem>
                <NavLink to="/">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </NavLink>
              </NavigationMenuItem>
            </div>
            <div className="flex">
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <SignIpPage />
                </NavigationMenuLink>   
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <SignUpPage />
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <ThemeToggle />
                </NavigationMenuLink>
              </NavigationMenuItem>
            </div>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    )
  }
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavLink to="/">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </NavLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavLink to="/pokemondb">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Pokémon Database
            </NavigationMenuLink>
          </NavLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavLink to="/news">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              News
            </NavigationMenuLink>
          </NavLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
            <NavLink to="/">
              <NavigationMenuLink onClick={handleLogout} className={navigationMenuTriggerStyle()}>
                logout
              </NavigationMenuLink>
            </NavLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <ThemeToggle />
                </NavigationMenuLink>
              </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
