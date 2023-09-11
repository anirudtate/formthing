import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function Home() {
  return (
    <main>
      <div className="p-5" />
      <div className="flex items-center justify-center">
        <div className="w-96 flex flex-col gap-2">
          <div>
            <Label>
              Name
              <Input placeholder="Name" />
            </Label>
          </div>
          <div>
            <Label>
              Number
              <Input placeholder="Number" type="number" />
            </Label>
          </div>
          <div>
            <Label>
              Number
              <Input placeholder="Number" type="search" />
            </Label>
          </div>
          <div>
            <Label>
              Select
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Label>
          </div>
          <div className="p-2" />
          <div className="flex gap-2 justify-end">
            <Button variant="ghost">Cancel</Button>
            <Button>Submit</Button>
          </div>
        </div>
      </div>
    </main>
  )
}
