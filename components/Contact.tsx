"use client"
import { useState } from "react"
import type React from "react"
import { ChevronLeft, ChevronRight, Copy, SquareArrowOutUpRight } from "lucide-react"
import Image from "next/image"
import { ContactMethod } from "@/types"
import { contactMethods } from "@/constants/contact"

export function Contact() {
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

  return (
    <div className="flex h-full" style={{ backgroundColor: "#1d1f20" }}>
      <div className="w-80 border-r border-gray-600 flex flex-col flex-shrink-0" style={{ backgroundColor: "#1d1f20" }}>
        <div className="p-3 border-b border-gray-600">
          <h2 className="text-base font-semibold text-white">Contact Information</h2>
        </div>

        <div className="flex-1 overflow-y-auto p-2">
          {contactMethods.map((contact) => (
            <button
              key={contact.id}
              className={`w-full p-2 text-left transition-colors flex items-center space-x-3 rounded-md mb-1 ${selectedContact.id === contact.id ? "bg-blue-600" : ""
                }`}
              onClick={() => setSelectedContact(contact)}
            >
              <Image height={20} width={20} src="/folder-icon.png" alt="Folder" className="w-4 h-4 flex-shrink-0" />
              <span className="text-white text-xs truncate">{contact.name}</span>
            </button>
          ))}
        </div>
      </div>

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

        <div className="flex-1 overflow-y-auto p-4" style={{ backgroundColor: "#1d1f20" }}>
          <div className="space-y-4">
            <div className="bg-[#131313] border-[1px] border-[#a2a2a26b] rounded-lg p-3">
              <p className="text-white text-sm font-mono">{selectedContact.value}</p>
            </div>
            <div>
              <h3 className="text-white font-medium mb-2 text-sm">Description</h3>
              <p className="text-gray-300 text-xs leading-relaxed">
                {selectedContact.description ?? "No description provided."}
              </p>
            </div>

            <div>
              <h3 className="text-white font-medium mb-3 text-sm">Information</h3>
              <div className="space-y-2 text-xs">
                {selectedContact.information?.map((info, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-gray-400">{info.label}</span>
                    <span className="text-white">{info.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white font-medium mb-2 text-sm">Tags</h3>
              <div className="flex flex-wrap gap-1 mb-2">
                {selectedContact.tags?.map((tag, index) => (
                  <span key={index} className="px-2 py-1 bg-blue-600 text-white rounded text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="">
              <h3 className="text-white font-medium mb-2 text-sm">Quick Actions</h3>
              <div className="flex justify-center items-center gap-3">
                <div className="flex flex-col items-center justify-center gap-1 w-16">
                  <Copy
                    onClick={() => handleCopy(selectedContact.copyValue, selectedContact.id)}
                    className="text-[#767676] h-8 w-8 cursor-pointer"
                  />
                  <span className="text-white text-xs text-center min-w-[50px] block">
                    {copiedId === selectedContact.id ? "Copied!" : "Copy"}
                  </span>
                </div>
                {(selectedContact.type === "email" || selectedContact.type === "phone" || selectedContact.type === "social" || selectedContact.quickAction) && (
                  <div className="flex flex-col items-center justify-center gap-1">
                    <a
                      href={
                        selectedContact.type === "email"
                          ? `mailto:${selectedContact.value}`
                          : selectedContact.type === "phone"
                            ? `tel:${selectedContact.copyValue}`
                            : selectedContact.copyValue
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SquareArrowOutUpRight className="text-[#767676] h-8 w-8 cursor-pointer" />
                    </a>
                    <span className="text-white text-xs">Visit</span>
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
