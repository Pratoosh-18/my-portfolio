import { ContactMethod } from "@/types";

export const contactMethods: ContactMethod[] = [
    {
      id: "email",
      name: "Email",
      type: "email",
      value: "pratoosh10garg@gmail.com",
      copyValue: "pratoosh10garg@gmail.com",
      description: "Reach out to me via email for any queries or collaborations.",
      information: [
        { label: "Provider", value: "Gmail" },
        { label: "Status", value: "Active" },
        { label: "Preferred", value: "Yes" }
      ],
      tags: ["primary", "email", "contact"],
    },
    {
      id: "phone",
      name: "Phone",
      type: "phone",
      value: "+91 7093924267",
      copyValue: "+917093924267",
      description: "Feel free to call me for urgent matters or direct communication.",
      information: [
        { label: "Country", value: "India" },
        { label: "Carrier", value: "Airtel" },
        { label: "Available", value: "24h" }
      ],
      tags: ["direct", "urgent", "mobile"],
    },
    {
      id: "github",
      name: "GitHub",
      type: "social",
      value: "Pratoosh-18",
      copyValue: "https://github.com/Pratoosh-18",
      description: "Explore my code repositories and open-source contributions.",
      information: [
        { label: "Username", value: "Pratoosh-18" },
        { label: "Repos", value: "40+" },
        { label: "Activity", value: "Weekly" }
      ],
      tags: ["developer", "open-source", "code"],
      quickAction: {
        label: "View GitHub",
        url: "https://github.com/Pratoosh-18"
      }
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      type: "social",
      value: "linkedin.com/in/pratoosh-garg",
      copyValue: "https://www.linkedin.com/in/pratoosh-garg/",
      description: "Connect with me on LinkedIn for networking and opportunities.",
      information: [
        { label: "Profile", value: "Pratoosh Garg" },
        { label: "Connections", value: "1500+" },
        { label: "Active", value: "Yes" }
      ],
      tags: ["professional", "network", "career"],
      quickAction: {
        label: "Open LinkedIn",
        url: "https://www.linkedin.com/in/pratoosh-garg/"
      }
    }
  ]
  