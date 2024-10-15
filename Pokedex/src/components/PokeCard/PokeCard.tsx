import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "../ui/card"
  import { Button } from "../ui/button"
  import { Label } from "../ui/label"
  import { Input } from "../ui/input"
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "../ui/select"

type Props = {
    data: {
        id: number,
        name: string
    };
}

export const PokeCard: React.FC<Props> = ({data}) => {
    return (
        <Card className="w-[500px]">
          <CardHeader>
            <CardTitle>#{data.id}</CardTitle>
            <CardDescription>Name: {data.name}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className=" flex items-center space-x-5 rounded-md border p-4">
            <img src={data.sprites.front_default} width="100" height="20"/>
                <div className="flex-1 space-y-1">
                    <p className="text-sm text-muted-foreground">
                        Type: {data.types[0].type.name}
                    </p>
                </div>
            </div>
            
          </CardContent>
        </Card>
      )
}