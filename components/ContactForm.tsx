"use client";
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  email: z.string().email({ message: "email is invalid" }),
  message: z
    .string()
    .min(6, { message: " yuor message at least be 6 characte" }),
});

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID!;
    const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID!;
    const userID = process.env.NEXT_PUBLIC_USER_ID!;

    const templateParams = {
      email: values.email,
      message: values.message,
      to_email: values.email,
    };

    try {
      const result = await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        userID
      );
      console.log("SUCCESS!", result.text);
      setSuccessMessage("successfull");
      form.reset();
    } catch (error) {
      console.error("FAILED...", error);
      setErrorMessage("an error accured");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="flex-1 min-h-screen m-2 p-2">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)] p-4 bg-red-100 rounded"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <div className="form-item">
                <FormItem>
                  <FormLabel className="form-label">Email</FormLabel>
                  <div className="flex w-full flex-col">
                    <FormControl>
                      <Input
                        placeholder="Enter your email"
                        className="input-class"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="form-message mt-2" />
                  </div>
                </FormItem>
              </div>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <div className="flex w-full flex-col">
                  <FormControl>
                    <textarea
                      className="p-2 border rounded w-full placeholder:text-16 rounded-lg border border-gray-300 text-gray-900 placeholder:text-gray-500"
                      placeholder="Enter your message"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="form-message mt-2" />
                </div>
              </FormItem>
            )}
          />

          {isLoading ? (
            <Button type="button" disabled={isLoading} className="form-btn">
              <Loader2 size={16} className="animate-spin" /> sending...
            </Button>
          ) : (
            <Button type="submit" className="form-btn">
              send
            </Button>
          )}

          {successMessage && (
            <p className="text-green-600 text-sm">{successMessage}</p>
          )}
          {errorMessage && (
            <p className="text-red-600 text-sm">{errorMessage}</p>
          )}
        </form>
      </Form>
    </section>
  );
}

export default ContactForm;
