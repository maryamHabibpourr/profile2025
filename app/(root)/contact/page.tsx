import ContactForm from "@/components/ContactForm";
import Heading from "@/shared/Heading";
import { Mail } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className="w-full px-4 py-4">
      <Heading
        title="Contact."
        text={
          <>
            If you are interested in collaborating or have any inquiries, feel
            free to reach out. You can contact me via email or use the contact
            form below. I look forward to hearing from you!
          </>
        }
      />
      <div className="flex items-center gap-2 mt-4">
        <Mail size={18} className="text-red-600" />
        <a
          href="mailto:e.maryamhabibpour@gmail.com"
          className="text-gray-600 hover:text-red-800"
        >
          e.maryamhabibpour@gmail.com
        </a>
      </div>

      <ContactForm />
    </div>
  );
};

export default page;
