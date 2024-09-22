import { Label, TextInput, Textarea, Button } from "flowbite-react";

const Form = () => {
  return (
    <form className="flex flex-col gap-4">
      <div>
        <Label htmlFor="name" value="Your Name" />
        <TextInput id="name" type="text" placeholder="Raymond Luk" required />
      </div>

      <div>
        <Label htmlFor="email" value="Your Email" />
        <TextInput
          id="email"
          type="email"
          placeholder="name@example.com"
          required
        />
      </div>

      <div>
        <Label htmlFor="message" value="Your Message" />
        <Textarea
          id="message"
          placeholder="Enter your message here..."
          required
        />
      </div>

      <Button
        type="submit"
        style={{
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
          background:
            "linear-gradient(to top left, rgb(14, 116, 144), rgb(10, 85, 105))",
        }}
      >
        Submit
      </Button>
    </form>
  );
};

export default Form;
