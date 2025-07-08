import React from "react";
import { Control, useFieldArray } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { CheckoutFormData } from "@/types/checkout";
import { Ticket } from "lucide-react";

interface VisitorDetailsStepProps {
  control: Control<CheckoutFormData>;
}

const VisitorDetailsStep: React.FC<VisitorDetailsStepProps> = ({ control }) => {
  const { fields } = useFieldArray({
    control,
    name: "visitors",
  });

  return (
    <Card className="p-6 bg-gray-50/50">
      {fields.map((field, index) => (
        <div key={field.id} className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Ticket className="h-5 w-5 text-primary" />
            <h3 className="font-medium">Ticket #{index + 1} Visitor Details</h3>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={control}
              name={`visitors.${index}.firstName`}
              rules={{ required: "Visitor's first name is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-l text-black font-normal">
                    First Name <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter visitor's first name"
                      className="h-11"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name={`visitors.${index}.lastName`}
              rules={{ required: "Visitor's last name is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-l text-black font-normal">
                    Last Name <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter visitor's last name"
                      className="h-11"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
      ))}
    </Card>
  );
};

export default VisitorDetailsStep;
