"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  Send,
  MoreVertical,
  ArrowLeft,
  Eye,
  AlertTriangle,
  CheckCircle,
  Tag,
  Info,
} from "lucide-react";
import { NavbarVendedor } from "@/components/layout/NavbarVendedor";

// Datos mock de conversaciones
const conversationsData = [
  {
    id: 1,
    name: "Eleanor Sterling",
    avatar: "ES",
    time: "2m ago",
    preview: "Is the Patek Philippe still...",
    tag: "HIGH INTENT",
    tagColor: "bg-emerald-100 text-emerald-700",
    unread: true,
  },
  {
    id: 2,
    name: "Arthur Kensington",
    avatar: "AK",
    time: "1h ago",
    preview: "Regarding the shipping...",
    tag: null,
    tagColor: null,
    unread: false,
  },
  {
    id: 3,
    name: "Maximilian Krupp",
    avatar: "MK",
    time: "4h ago",
    preview: "Could we negotiate the...",
    tag: "URGENT",
    tagColor: "bg-red-100 text-red-700",
    unread: true,
  },
  {
    id: 4,
    name: "Sienna Rossi",
    avatar: "SR",
    time: "Yesterday",
    preview: "Thank you for the detailed...",
    tag: null,
    tagColor: null,
    unread: false,
  },
];

// Datos mock de mensajes
const messagesData = [
  {
    id: 1,
    sender: "Eleanor Sterling",
    content:
      "Good afternoon Julian. I've been tracking this specific Nautilus 5711/1A-010 for some time. Is the original certificate of authenticity and the presentation box included in the listed price?",
    time: "10:15 AM",
    isMine: false,
  },
  {
    id: 2,
    sender: "Julian (Vendedor)",
    content:
      "Hello Eleanor, absolutely. It comes as a complete set: original box, papers, and even the original purchase receipt from the authorized dealer. I have uploaded high-res photos of the documentation to the listing.",
    time: "10:22 AM - Read",
    isMine: true,
  },
  {
    id: 3,
    sender: "Eleanor Sterling",
    content:
      "That's wonderful to hear. Is the watch currently available for a private viewing at your showroom this Thursday? I'll be in the city for an auction.",
    time: "2:42 PM",
    isMine: false,
  },
];

// Datos del producto (más compacto)
const productData = {
  name: "Patek Philippe Nautilus 5711/1A",
  reference: "5711/1A-010",
  price: "$145,000.00",
  status: "In Stock",
  viewers: "42 Active Viewers",
  image: "https://picsum.photos/seed/patek4/60/60",
};

export default function MensajesPage() {
  const [selectedConversation, setSelectedConversation] = useState(1);
  const [message, setMessage] = useState("");
  const [isMobileListOpen, setIsMobileListOpen] = useState(true);

  const conversation = conversationsData.find(
    (c) => c.id === selectedConversation
  );
  const messages = messagesData;

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      console.log("Mensaje enviado:", message);
      setMessage("");
    }
  };

  return (
    <>
      <NavbarVendedor />
      <main className="pt-28 pb-12 bg-[var(--off-white)] min-h-screen">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Encabezado */}
          <div className="mb-8">
            <h1 className="text-3xl font-montserrat font-light text-[var(--black)] tracking-tight">
              Mensajes
            </h1>
            <p className="text-[var(--medium-gray)] font-opensans text-sm mt-1">
              Gestiona las conversaciones con tus clientes.
            </p>
          </div>

          {/* Grid de 2 columnas */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Columna izquierda: Lista de conversaciones */}
            <div className="lg:col-span-1 bg-[var(--white)] rounded-3xl shadow-sm border border-[var(--lighter-gray)] overflow-hidden h-[calc(100vh-18rem)]">
              {/* Barra de búsqueda */}
              <div className="p-4 border-b border-[var(--lighter-gray)]">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[var(--medium-gray)]" />
                  <input
                    type="text"
                    placeholder="Buscar conversaciones..."
                    className="w-full pl-9 pr-4 py-2 bg-[var(--off-white)] border border-[var(--lighter-gray)] rounded-lg text-sm font-opensans text-[var(--black)] placeholder-[var(--medium-gray)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition"
                  />
                </div>
              </div>

              {/* Lista de conversaciones */}
              <div className="overflow-y-auto h-[calc(100%-4.5rem)]">
                {conversationsData.map((conv) => (
                  <button
                    key={conv.id}
                    onClick={() => setSelectedConversation(conv.id)}
                    className={`w-full px-4 py-3 flex items-start gap-3 border-b border-[var(--lighter-gray)] hover:bg-[var(--off-white)] transition text-left ${
                      selectedConversation === conv.id
                        ? "bg-[var(--off-white)]"
                        : ""
                    }`}
                  >
                    <div className="w-10 h-10 rounded-full bg-[var(--black)] text-white flex items-center justify-center text-xs font-plusjakarta font-semibold flex-shrink-0">
                      {conv.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-opensans font-medium text-[var(--black)] truncate">
                          {conv.name}
                        </p>
                        <span className="text-xs text-[var(--medium-gray)] font-opensans flex-shrink-0 ml-2">
                          {conv.time}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--medium-gray)] font-opensans truncate">
                        {conv.preview}
                      </p>
                      {conv.tag && (
                        <span
                          className={`inline-block mt-1 px-2 py-0.5 rounded-full text-xs font-plusjakarta font-semibold ${conv.tagColor}`}
                        >
                          {conv.tag}
                        </span>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Columna derecha: Detalle de la conversación */}
            <div className="lg:col-span-2 bg-[var(--white)] rounded-3xl shadow-sm border border-[var(--lighter-gray)] overflow-hidden h-[calc(100vh-18rem)] flex flex-col">
              {/* Encabezado de la conversación con mini producto */}
              <div className="px-6 py-3 border-b border-[var(--lighter-gray)] flex items-center justify-between flex-shrink-0">
                <div className="flex items-center gap-3">
                  <button
                    className="lg:hidden p-1 text-[var(--medium-gray)] hover:text-[var(--black)]"
                    onClick={() => setIsMobileListOpen(!isMobileListOpen)}
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </button>
                  <div className="w-9 h-9 rounded-full bg-[var(--black)] text-white flex items-center justify-center text-xs font-plusjakarta font-semibold">
                    {conversation?.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-opensans font-medium text-[var(--black)]">
                      {conversation?.name}
                    </p>
                    <p className="text-xs text-[var(--medium-gray)] font-opensans">
                      {conversation?.time}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {/* Mini información del producto (badge) */}
                  <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-[var(--off-white)] rounded-full">
                    <img
                      src={productData.image}
                      alt=""
                      className="w-6 h-6 rounded object-cover"
                    />
                    <span className="text-xs font-opensans text-[var(--black)] font-medium truncate max-w-[100px]">
                      {productData.name}
                    </span>
                    <span className="text-xs font-opensans text-[var(--medium-gray)]">
                      {productData.price}
                    </span>
                  </div>
                  <button className="p-2 text-[var(--medium-gray)] hover:text-[var(--black)] hover:bg-[var(--off-white)] rounded-lg transition">
                    <Eye className="h-4 w-4" />
                  </button>
                  <button className="p-2 text-[var(--medium-gray)] hover:text-[var(--black)] hover:bg-[var(--off-white)] rounded-lg transition">
                    <MoreVertical className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Área de mensajes (más espacio) */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-[var(--off-white)]">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${
                      msg.isMine ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[75%] ${
                        msg.isMine
                          ? "bg-[var(--black)] text-white rounded-2xl rounded-tr-none"
                          : "bg-[var(--white)] text-[var(--black)] rounded-2xl rounded-tl-none shadow-sm"
                      } px-5 py-3`}
                    >
                      <p className="text-sm font-opensans leading-relaxed whitespace-pre-wrap">
                        {msg.content}
                      </p>
                      <p
                        className={`text-xs mt-1 ${
                          msg.isMine
                            ? "text-white/60"
                            : "text-[var(--medium-gray)]"
                        }`}
                      >
                        {msg.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Botones de acción compactos */}
              <div className="px-6 py-2 border-t border-[var(--lighter-gray)] flex gap-3 flex-shrink-0 bg-[var(--white)]">
                <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-opensans text-red-600 hover:bg-red-50 rounded-lg transition">
                  <AlertTriangle className="h-3.5 w-3.5" />
                  Marcar como fraude
                </button>
                <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-opensans text-[var(--gold)] hover:bg-[var(--off-white)] rounded-lg transition">
                  <Send className="h-3.5 w-3.5" />
                  Enviar oferta
                </button>
              </div>

              {/* Campo de entrada de mensaje */}
              <div className="px-6 py-3 border-t border-[var(--lighter-gray)] flex-shrink-0 bg-[var(--white)]">
                <form onSubmit={handleSendMessage} className="flex gap-3">
                  <input
                    type="text"
                    placeholder="Escribe tu mensaje aquí..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="flex-1 px-4 py-2 bg-[var(--off-white)] border border-[var(--lighter-gray)] rounded-lg text-sm font-opensans text-[var(--black)] placeholder-[var(--medium-gray)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition"
                  />
                  <button
                    type="submit"
                    disabled={!message.trim()}
                    className="px-4 py-2 bg-[var(--black)] text-white rounded-lg hover:bg-[var(--black-light)] transition font-opensans text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </form>
                <p className="text-xs text-[var(--medium-gray)] font-opensans mt-2 text-center">
                  Tu conversación está encriptada y monitoreada para tu seguridad por LiveMarket Security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}