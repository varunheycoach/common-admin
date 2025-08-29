"use client";

import { PopoverContent } from "@radix-ui/react-popover";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Popover, PopoverTrigger } from "./ui/popover";
import { ScrollArea } from "./ui/scroll-area";
import { Anchor, CalendarIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { format } from "date-fns";
import { Calendar } from "./ui/calendar";

const cardList = [
  {
    title: "Item 1",
    icon: Anchor,
  },
  {
    title: "Item 2",
    icon: Anchor,
  },
  {
    title: "Item 3",
    icon: Anchor,
  },
  {
    title: "Item 4",
    icon: Anchor,
  },
  {
    title: "Item 5",
    icon: Anchor,
  },
  {
    title: "Item 6",
    icon: Anchor,
  },
  {
    title: "Item 7",
    icon: Anchor,
  },
  {
    title: "Item 8",
    icon: Anchor,
  },
  {
    title: "Item 9",
    icon: Anchor,
  },
  {
    title: "Item 10",
    icon: Anchor,
  },
];

const TodoList = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="">
      <Popover open={open} onOpenChange={setOpen}>
        <h1 className="text-lg font-medium mb-4">Todo List</h1>
        <PopoverTrigger asChild>
          <Button className="w-full">
            <CalendarIcon />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
            className="p-2 w-auto border"
          />
        </PopoverContent>
      </Popover>
      <ScrollArea className="max-h-[400px] mt-4 overflow-y-auto">
        <div className="flex flex-col gap-4">
          {cardList.map((card) => {
            return (
              <Card className="p-4" key={card.title}>
                <div className="flex items-center gap-4">
                  <Checkbox id={card.title} />
                  <label
                    htmlFor={card.title}
                    className="text-muted-foreground flex gap-4 items-center"
                  >
                    {card.title}
                    <card.icon />
                  </label>
                </div>
              </Card>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
};

export default TodoList;
