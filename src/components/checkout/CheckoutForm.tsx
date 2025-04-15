import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, FormField, FormItem, FormLabel, FormControl } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const CheckoutForm = () => {
    const form = useForm();

    return (
        <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-semibold">1</div>
                <h2 className="text-xl font-semibold">Your Details</h2>
            </div>

            <Form {...form}>
                <form className="space-y-6">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email Address*</FormLabel>
                                <FormControl>
                                    <Input placeholder="Email address" {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    <div className="flex gap-4">
                        <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                                <FormItem className="flex-1">
                                    <FormLabel>First Name*</FormLabel>
                                    <FormControl>
                                        <Input placeholder="First name" {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                                <FormItem className="flex-1">
                                    <FormLabel>Last Name*</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Last name" {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>

                    <Button type="submit" className="w-full">Continue</Button>
                </form>
            </Form>
        </div>
    );
};

export default CheckoutForm;