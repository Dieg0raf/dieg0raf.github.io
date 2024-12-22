import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  const handleSubmit = () => {
    // e.preventDefault();
    // Add email handling - Could use EmailJS, FormSpree
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
                    className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    required
                    className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                  />
                </div>

                <div>
                  <Input
                    type="text"
                    placeholder="Subject"
                    required
                    className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                  />
                </div>

                <div>
                  <Textarea
                    placeholder="Message"
                    required
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
