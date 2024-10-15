import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "../../components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form"
import { Input } from "../../components/ui/input"
import { getUser } from "./LoginApi"
import { useNavigate } from "react-router"
import { useUser } from "../../shared/context/UserContext"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../../components/ui/dialog"
import { NavigationMenuLink, navigationMenuTriggerStyle } from "../../components/ui/navigation-menu"
 
const formSchema = z.object({
  username: z.string().min(2).max(50),
  password: z.string().min(8)
})

const SignIpPage = () => {
  const navigate = useNavigate();
  const { setUserContext } = useUser();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          username: "",
          password: ""
        },
      })

      function onSubmit(values: z.infer<typeof formSchema>) {
        if(getUser(values)){
          localStorage.setItem("isAuthenticated", "true")
          setUserContext(values)
          navigate("/");
          window.location.reload();
        }
        else
          alert("User do not exists")
      }

      return (
        <Dialog>
          <DialogTrigger asChild>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Login
          </NavigationMenuLink>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Login</DialogTitle>
              <DialogDescription>
                Sign In to your account
              </DialogDescription>
            </DialogHeader>
            <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="username" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="password" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
           <DialogFooter>
              <Button type="submit">Login</Button>
            </DialogFooter>
          </form>
        </Form>
          </DialogContent>
        </Dialog>
      )

      /*return (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      )*/
}

export default SignIpPage