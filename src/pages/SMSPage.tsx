// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { toast } from "sonner"; // Using your Sonner Toaster

// export default function SMSPage() {
//   const [phone, setPhone] = useState("");
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSendSMS = async () => {
//     if (!phone || !message) {
//       toast.error("Phone number and message are required.");
//       return;
//     }

//     try {
//       setLoading(true);

//       const res = await fetch("http://localhost:3000/api/sms", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ to: phone, body: message }),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         toast.success("SMS sent successfully!");
//         setPhone("");
//         setMessage("");
//       } else {
//         toast.error(data.error || "Failed to send SMS");
//       }
//     } catch (err) {
//       console.error(err);
//       toast.error("Something went wrong!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 space-y-4">
//       <h2 className="text-2xl font-bold text-foreground">Send SMS</h2>

//       <Input
//         placeholder="Phone number (e.g. +919876543210)"
//         value={phone}
//         onChange={(e) => setPhone(e.target.value)}
//       />

//       <Textarea
//         placeholder="Type your message..."
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//         rows={5}
//       />

//       <Button onClick={handleSendSMS} disabled={loading}>
//         {loading ? "Sending..." : "Send SMS"}
//       </Button>
//     </div>
//   );
// }


// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { toast } from "sonner"; // Toaster for notifications

// export default function SMSPage() {
//   // 1️⃣ State variables
//   const [phone, setPhone] = useState("");
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   // 2️⃣ handleSendSMS is defined here inside the component
//   const handleSendSMS = async () => {
//     if (!phone || !message) {
//       toast.error("Phone number and message are required.");
//       return;
//     }

//     try {
//       setLoading(true);

//       // This calls your backend API
//       const res = await fetch("http://localhost:3000/api/sms", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ to: phone, body: message }),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         toast.success("SMS sent successfully!");
//         setPhone("");
//         setMessage("");
//       } else {
//         toast.error(data.error || "Failed to send SMS");
//       }
//     } catch (err) {
//       console.error(err);
//       toast.error("Something went wrong!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // 3️⃣ The return statement renders your form and button
//   return (
//     <div className="max-w-md mx-auto mt-10 space-y-4">
//       <h2 className="text-2xl font-bold text-foreground">Send SMS</h2>

//       <Input
//         placeholder="Phone number (e.g. +919876543210)"
//         value={phone}
//         onChange={(e) => setPhone(e.target.value)}
//       />

//       <Textarea
//         placeholder="Type your message..."
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//         rows={5}
//       />

//       <Button onClick={handleSendSMS} disabled={loading}>
//         {loading ? "Sending..." : "Send SMS"}
//       </Button>
//     </div>
//   );
// }

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function SMSPage() {
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendSMS = async () => {
    if (!phone.startsWith("+")) {
      toast.error("Please include country code (e.g. +91XXXXXXXXXX).");
      return;
    }

    if (!phone || !message) {
      toast.error("Phone number and message are required.");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("http://localhost:3000/api/sms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ to: phone, body: message }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("SMS sent successfully!");
        setPhone("");
        setMessage("");
      } else {
        toast.error(data.error || "Failed to send SMS");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 space-y-4">
      <h2 className="text-2xl font-bold text-foreground">Send SMS</h2>

      {/* Phone input */}
      <Input
        placeholder="Enter phone number with country code (e.g. +919876543210)"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      {/* Message input */}
      <Textarea
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={5}
      />

      {/* Send button */}
      <Button onClick={handleSendSMS} disabled={loading}>
        {loading ? "Sending..." : "Send SMS"}
      </Button>
    </div>
  );
}
