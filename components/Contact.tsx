"use client"
import { useState } from "react"
import type React from "react"

import { ChevronLeft, ChevronRight, Mail, Phone, MapPin, Github, Linkedin, Copy, ExternalLink } from "lucide-react"
import { GitHub } from "./GitHub"

interface ContactMethod {
  id: string
  name: string
  type: string
  value: string
  copyValue: string
  icon: React.ReactNode
  hasWebsite?: boolean
  websiteUrl?: string
  component?: React.ReactNode
}

const contactMethods: ContactMethod[] = [
  {
    id: "email",
    name: "Email",
    type: "email",
    value: "pratoosh.garg@example.com",
    copyValue: "pratoosh.garg@example.com",
    icon: <Mail className="w-4 h-4 text-blue-500" />,
  },
  {
    id: "phone",
    name: "Phone",
    type: "phone",
    value: "+91 98765 43210",
    copyValue: "+919876543210",
    icon: <Phone className="w-4 h-4 text-green-500" />,
  },
  {
    id: "location",
    name: "Location",
    type: "location",
    value: "Delhi, India",
    copyValue: "Delhi, India",
    icon: <MapPin className="w-4 h-4 text-red-500" />,
  },
  {
    id: "github",
    name: "GitHub",
    type: "social",
    value: "pratoosh-18",
    copyValue: "https://github.com/pratoosh-18/",
    icon: <Github className="w-4 h-4 text-gray-400" />,
    hasWebsite: true,
    websiteUrl: "https://github.com/pratoosh-18/",
    component: <GitHub />,
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    type: "social",
    value: "pratoosh-garg",
    copyValue: "https://www.linkedin.com/in/pratoosh-garg-b24a60244/",
    icon: <Linkedin className="w-4 h-4 text-blue-600" />,
    hasWebsite: true,
    websiteUrl: "https://www.linkedin.com/in/pratoosh-garg-b24a60244/",
  },
]

interface ContactProps {
  onOpenWebsite?: (url: string, title: string) => void
}

export function Contact({ onOpenWebsite }: ContactProps) {
  const [selectedContact, setSelectedContact] = useState<ContactMethod>(contactMethods[0])
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const handleCopy = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedId(id)
      setTimeout(() => setCopiedId(null), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  const handleOpenWebsite = (url: string, title: string) => {
    if (onOpenWebsite) {
      onOpenWebsite(url, title)
    }
  }

  return (
    <div className="flex h-full" style={{ backgroundColor: "#1d1f20" }}>
      {/* Left Panel - Contact Methods */}
      <div className="w-80 border-r border-gray-600 flex flex-col flex-shrink-0" style={{ backgroundColor: "#1d1f20" }}>
        <div className="p-3 border-b border-gray-600">
          <h2 className="text-base font-semibold text-white">Contact Information</h2>
        </div>

        <div className="flex-1 overflow-y-auto p-2">
          {contactMethods.map((contact) => (
            <button
              key={contact.id}
              className={`w-full p-2 text-left transition-colors flex items-center space-x-3 rounded-md mb-1 ${
                selectedContact.id === contact.id ? "bg-blue-600" : ""
              }`}
              onClick={() => setSelectedContact(contact)}
            >
              <img src="/folder-icon.png" alt="Folder" className="w-4 h-4 flex-shrink-0" />
              <span className="text-white text-xs truncate">{contact.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Right Panel - Contact Details or Component */}
      <div className="flex-1 flex flex-col min-w-0">
        <div className="flex items-center p-3 border-b border-gray-600" style={{ backgroundColor: "#1d1f20" }}>
          <div className="flex items-center space-x-2">
            <button className="p-1 hover:bg-gray-700 rounded">
              <ChevronLeft className="w-3 h-3 text-gray-400" />
            </button>
            <button className="p-1 hover:bg-gray-700 rounded">
              <ChevronRight className="w-3 h-3 text-gray-400" />
            </button>
            <span className="text-white font-medium text-sm">{selectedContact.name}</span>
          </div>
        </div>

        {selectedContact.component ? (
          <div className="flex-1">{selectedContact.component}</div>
        ) : (
          <div className="flex-1 overflow-y-auto p-4" style={{ backgroundColor: "#1d1f20" }}>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-4">
                  {selectedContact.icon}
                  <div>
                    <h1 className="text-lg font-bold text-white">{selectedContact.name}</h1>
                    <p className="text-gray-400 text-xs capitalize">{selectedContact.type}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <h3 className="text-white font-medium mb-2 text-sm">Contact Details</h3>
                    <div className="bg-gray-700 rounded-lg p-3">
                      <p className="text-white text-sm font-mono">{selectedContact.value}</p>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleCopy(selectedContact.copyValue, selectedContact.id)}
                      className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded text-xs transition-colors flex-1 justify-center"
                    >
                      <Copy className="w-3 h-3" />
                      <span>{copiedId === selectedContact.id ? "Copied!" : "Copy"}</span>
                    </button>

                    {selectedContact.hasWebsite && (
                      <button
                        onClick={() => handleOpenWebsite(selectedContact.websiteUrl!, selectedContact.name)}
                        className="flex items-center space-x-2 bg-gray-600 hover:bg-gray-700 text-white px-3 py-2 rounded text-xs transition-colors flex-1 justify-center"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>Open Website</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-4">
                <h3 className="text-white font-medium mb-2 text-sm">Additional Information</h3>
                <div className="space-y-2 text-xs text-gray-300">
                  {selectedContact.type === "email" && (
                    <div>
                      <p>• Available for professional inquiries and collaboration opportunities</p>
                      <p>• Response time: Usually within 24 hours</p>
                      <p>• Best for: Project discussions, job opportunities, technical questions</p>
                    </div>
                  )}
                  {selectedContact.type === "phone" && (
                    <div>
                      <p>• Available for urgent matters and direct communication</p>
                      <p>• Preferred time: 9 AM - 6 PM IST (Monday to Friday)</p>
                      <p>• Best for: Quick discussions, interview scheduling</p>
                    </div>
                  )}
                  {selectedContact.type === "location" && (
                    <div>
                      <p>• Based in Delhi, India</p>
                      <p>• Open to remote work opportunities globally</p>
                      <p>• Available for on-site work in Delhi NCR region</p>
                    </div>
                  )}
                  {selectedContact.type === "social" && selectedContact.id === "linkedin" && (
                    <div>
                      <p>• Professional network and career updates</p>
                      <p>• Connect for business opportunities</p>
                      <p>• View recommendations and endorsements</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-4">
                <h3 className="text-white font-medium mb-2 text-sm">Quick Actions</h3>
                <div className="space-y-2">
                  {selectedContact.type === "email" && (
                    <a
                      href={`mailto:${selectedContact.value}`}
                      className="block w-full text-center bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded text-xs transition-colors"
                    >
                      Send Email
                    </a>
                  )}
                  {selectedContact.type === "phone" && (
                    <a
                      href={`tel:${selectedContact.copyValue}`}
                      className="block w-full text-center bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded text-xs transition-colors"
                    >
                      Call Now
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
