"use client";

import { ArrowUpCircleIcon } from "@heroicons/react/24/solid"
import { useState } from "react";
import { handleSendMessage, fetchGraphData } from "../lib/actions";
import clsx from "clsx";

type Message = {
    sender: "user" | "bot";
    text: string;
};

export default function ChatBox({sendToParent} : {sendToParent: (response: any) => void}) {
    const [messages, setMessages] = useState<Message[]>([]);

    async function onSubmit(event: React.FormEvent) {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);
        const prompt = formData.get("prompt") as string;

        setMessages((prevMessages) => [
            ...prevMessages,
            { sender: "user", text: prompt },
        ]);

        (event.target as HTMLFormElement).reset();

        const response = await fetchGraphData(formData);

        sendToParent(response);

        setMessages((prevMessages) => [
            ...prevMessages,
            { sender: "bot", text: JSON.stringify(response[0]) },
            { sender: "bot", text: JSON.stringify(response[1]) },
        ]);

    }

    return(
        <div className="basis-1/4 h-full bg-cyan-50 rounded-lg flex flex-col p-2" >
            <div className="h-full w-full overflow-y-auto flex flex-col">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={clsx(
                            'bg-teal-100 my-4 rounded-lg p-4 text-sky-700 break-words',
                            {
                                'text-left bg-transparent p-0 max-w-80': message.sender === "bot",
                                'text-right w-auto self-end max-w-64': message.sender === "user"
                            }
                        )}
                    >
                        {message.text}
                    </div>
                ))}
            </div>
            <form onSubmit={onSubmit} className="relative">
                <input 
                    name="prompt"
                    type="text"
                    className="block w-full rounded-full py-[9px] pl-3 pr-12 text-sm outline-2 placeholder:text-gray-500 focus:outline-none text-black"
                    placeholder="Message ChatBot"
                    required
                    autoComplete="off"
                />
                <button type="submit" className="absolute right-2 top-1/2 h-[30px] w-[30px] -translate-y-1/2">
                    <ArrowUpCircleIcon className="text-gray-500 hover:text-gray-400 cursor-pointer"/>
                </button>
            </form>
      </div>
    )
}