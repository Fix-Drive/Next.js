import { useEffect, useState } from "react";
import { watsonCredentials } from "../types";
import { Container } from "postcss";

interface Message{
  user:string;
  bot:string;
}



export default function Chatbot(){
  const[sessionId, setSessionId] = useState('');
  const[input, setInput] = useState('');
  const[messages, setMessages]= useState<Message[]>([]);

  const apiKey = watsonCredentials.apiKey;
  const assistantId = watsonCredentials.assistantId;

  const createSession = async () =>{
    const response = await fetch(`https://api.us-east.assistant.watson.cloud.ibm.com/v2/assistants/${assistantId}/sessions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${btoa(`apikey:${apiKey}`)}`
      }
    });

    const data = await response.json();
    setSessionId(data.session_id);
  };

  const sendMessage = async ()=>
  {
    if (!sessionId) {
      alert('Por favor, crie uma sessão antes de enviar uma mensagem.');
      return;
  }

  const response = await fetch(`https://api.us-east.assistant.watson.cloud.ibm.com/v2/assistants/${assistantId}/sessions/${sessionId}/message`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${btoa(`apikey:${apiKey}`)}`
    },
    body: JSON.stringify({
        input: {
            'message_type': 'text',
            'text': input
        }
    })
});

const data = await response.json();

if (data.output && data.output.generic) {
    setMessages([...messages, { user: input, bot: data.output.generic[0].text }]);
} else {
    console.error("Erro na resposta do bot:", data);
}

setInput('');
};

  useEffect(() => {
    createSession();
  }, []);




  return(
    <div className="flex flex-col w-96 h-96 border border-gray-300 rounded-lg shadow-md overflow-hidden">
            <div className="flex-1 p-4 overflow-y-auto bg-gray-100">
                {messages.map((msg, index) => (
                    <div key={index} className={`my-1 p-2 rounded-md max-w-[80%] ${msg.user ? 'bg-green-100 self-end' : 'bg-red-100 self-start'}`}>
                        {msg.user ? `Você: ${msg.user}` : `Bot: ${msg.bot}`}
                    </div>
                ))}
            </div>
            <div className="flex p-4 bg-white border-t border-gray-300">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Digite sua mensagem..."
                    className="flex-1 p-2 border border-gray-300 rounded-md mr-2"
                />
                <button
                    onClick={sendMessage}
                    className="p-2 border-none rounded-md bg-blue-500 text-white hover:bg-blue-700"
                >
                    Enviar
                </button>
            </div>
        </div>
    );
}