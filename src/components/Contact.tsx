import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";
import emailjs from "@emailjs/browser";

const MAX_MESSAGES = 5;
const TIME_FRAME = 1000 * 60 * 60 * 24; // 24 hours

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const resetStates = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Credentials for EmailJS
    let serviceId: string = "";
    let templateId: string = "";
    let publicKey: string = "";

    try {
      // Fetch the EmailJS credentials serverless function
      const response = await fetch(
        "https://y7b2r43l20.execute-api.us-west-1.amazonaws.com/prod",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ keyWord: "send credentials" }),
        }
      );

      // Throw an error if the response is not OK (meaning the request failed)
      if (!response.ok) {
        const errorText = await response.text();
        console.error("Error response:", errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      //   Parse the response body
      const result = await response.json();
      const parsedBody = JSON.parse(result.body);

      serviceId = parsedBody.service_id;
      templateId = parsedBody.template_id;
      publicKey = parsedBody.public_key;

      if (!serviceId || !templateId || !publicKey) {
        console.error("EmailJS keys are missing");
        return;
      }

      // Get the current count and timestamp from local storage
      const messageCount = parseInt(
        localStorage.getItem("messageCount") || "0",
        10
      );
      const lastMessageTime = parseInt(
        localStorage.getItem("lastMessageTime") || "0",
        10
      );
      const currentTime = Date.now();

      // Check if the user is allowed to send a message
      if (
        messageCount >= MAX_MESSAGES &&
        currentTime - lastMessageTime < TIME_FRAME
      ) {
        alert(
          "You have reached the maximum number of messages allowed. Please try again later."
        );
        return;
      }

      // Object that contains the data to be sent to the email service
      const templateParams = {
        from_name: name,
        reply_to: email,
        from_email: email,
        to_name: "Diego Rafael",
        message,
      };

      // Send email using EmailJS
      emailjs
        .send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
          console.log(
            "Email sent successfully",
            response.status,
            response.text
          );
          alert("Message sent successfully!");

          // Reset the form fields
          resetStates();

          // Update the count and timestamp in local storage
          localStorage.setItem("messageCount", (messageCount + 1).toString());
          localStorage.setItem("lastMessageTime", currentTime.toString());
        })
        .catch((error: Error) => {
          console.error("Error sending email", error);
        });
    } catch (error) {
      console.error("Error sending email", error);
    }
  };

  return (
    <footer className="border-t py-16 border-gray-800" id="my-contact">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Let's Connect</h3>
            <p className="text-gray-300">
              I'm currently open to new opportunities and collaborations. Feel
              free to reach out if you'd like to discuss a project or just want
              to say hello!
            </p>

            <div className="space-y-4">
              <a
                href="mailto:rafael2002diego@gmail.com"
                className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                rafael2002diego@gmail.com
              </a>

              <div className="flex gap-4">
                <a
                  href="https://github.com/dieg0raf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/diego-rafael-8668b02b1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                  />
                </div>

                <div>
                  <Textarea
                    placeholder="Message"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 min-h-[150px]"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Copyright */}
        <div className="mt-16 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Diego Rafael. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;
