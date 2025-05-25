import Container from "@/components/Container";
import banner from "@/images/banner.png";
import formBg from "@/images/formBg.png";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCountries } from "use-react-countries";
import { BeatLoader } from "react-spinners";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";

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
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowIcon } from "@/icons/Icon";
import { useState } from "react";
import toast from "react-hot-toast";

const formSchema = z.object({
  userName: z.string().min(2, "Name is required").max(50, "Name too long"),
  companyName: z
    .string()
    .min(2, "Company is required")
    .max(100, "Company name too long"),
  email: z.string().email("Invalid email address"),
  country: z.string().min(2, "Country is required"),
  message: z.string().max(1000, "Message too long").optional(),
  content: z.boolean().optional(),
});

const ContactUs = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userName: "",
      companyName: "",
      email: "",
      country: "",
      message: "",
      content: false,
    },
  });

  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(values) {
    setIsLoading(true);

    const data = {
      name: values.userName,
      company: values.companyName,
      email: values.email,
      country: values.country,
      contact_message: values.message || "",
    };

    try {
      console.log("Form Data:", data);

      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/contact/send`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();
      toast.success("Message sent successfully!");
      console.log("Success:", result);
    } catch (error) {
      toast.error(`Error: ${error.message || "Something went wrong."}`);
    } finally {
      setIsLoading(false);
    }
  }

  const { countries } = useCountries();

  return (
    <>
      <section className="banner relative pt-[180px] pb-[350px] min-h-[650px]">
        <Container className="z-10 relative">
          <h1 className="text-white text-[58px] font-extrabold text-center">
            Get in Touch
          </h1>
          <div className="mx-auto mt-6 text-[#BDBDBD] flex items-center justify-center gap-4">
            <p className="max-w-[680px] text-center text-base">
              Contact us to learn more about how we can take financial
              management off your hands, discuss solutions for your business -
              or just have a casual chat.
            </p>
          </div>
        </Container>

        <figure className="w-full h-full overflow-hidden absolute top-0 left-0 right-0">
          <img
            src={banner}
            alt=""
            className="w-full h-full object-cover object-bottom"
          />
        </figure>
      </section>

      <section className="-translate-y-[260px]">
        <div className="max-w-[900px] p-[60px] mx-auto rounded-3xl overflow-hidden relative">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <FormField
                  control={form.control}
                  name="userName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Name*</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Your Full name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company*</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Your company name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email*</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="example@mail.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Country*</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your Country" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent side="bottom">
                        {[...countries]
                          .sort((a, b) => a.name.localeCompare(b.name))
                          .map((country) => (
                            <SelectItem key={country.code} value={country.name}>
                              {country.name}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Add a short message (optional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Add your message here"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="space-y-[10px] !mb-10">
                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-[10px] space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="leading-none">
                        <FormLabel>
                          Sign me up for relevant content and offers from
                          Scaleup Finance.
                        </FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                <p className="text-[#454F5B]">
                  You can unsubscribe from these communications at any time. For
                  more information on how to unsubscribe, our privacy practices,
                  and how we are committed to protecting and respecting your
                  privacy, please review our Privacy Policy. By clicking submit
                  below, you consent Scaleup Finance storing and processing your
                  personal information submitted above to provide you with the
                  services and information requested.
                </p>
              </div>
              <div className="flex justify-center">
                <Button
                  type="submit"
                  className="align-center min-w-[226px]"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <BeatLoader color="#fff" size={16} />
                  ) : (
                    <>
                      Explore Our Services <ArrowIcon />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </Form>
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#DDE4E1] -z-10">
            <figure className="w-full h-full">
              <img
                src={formBg}
                alt=""
                className="w-full h-full obcject-cover object-center"
              />
            </figure>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
