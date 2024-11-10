"use client";

import ChatBox from "./ui/chatbox";
import GraphView from "./components/Graph";
import Link from "next/link";
import { ArrowsUpDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";


export default function Home() {
  const graphData = {"link":[],"adj":[[1],[2,3,4],[],[],[5],[6,7,8],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],"header":["Main page","Machine Learning","Machine Learning (General)","Causal Inference & Data Science","Probabilistic Models & Time Series","Machine Learning Research","REML Lab","Current Projects","Publications"],"info":["Machine learning is the study of computational methods for pattern discovery and skill acquisition. It includes methods by which both humans and artificial agents can improve their behavior while interacting with their environments.","All the professors listed are related to machine learning and could potentially help the student. However, based on the student's request, here are the professors with a more direct focus on machine learning: Ina Fiterau Brostean, David Jensen, Ben Marlin, Andrew McCallum, and Hamed Zamani.",null,null,"Ben Marlin is a professor with research interests at the intersection of artificial intelligence, machine learning, and statistics. His current research has a particular emphasis on models and algorithms for multivariate time series data. He has worked on a broad range of applications including machine learning-based analytics for clinical and mobile health (mHealth) data. To learn more about his work, visit his personal website.","Professor Benjamin Marlin is a leading researcher in the field of machine learning and directs the Robust and Efficient Machine Learning (REML) Lab at the University of Massachusetts Amherst. His research focuses on developing robust and efficient machine learning models and algorithms, with a particular emphasis on probabilistic machine learning and deep learning. Recent research topics include modeling sparse and irregularly sampled time series, methods for learning from scarce time series data, and optimizing models for resource-constrained and real-time deployment. Professor Marlin's research is informed by multiple real-world application domains and machine learning deployment contexts, including clinical and mobile health, embedded systems, and the Internet of Things.",null,null,"The website provides brief summaries of machine learning related research and projects conducted by PhD students, postdocs, and undergraduate researchers. These projects cover a wide range of topics including deep learning for multi-modal detection, localization, and tracking, Bayesian time series modeling, and reinforcement learning with applications to behavioral data analysis and just-in-time adaptive interventions. Other projects focus on modeling incomplete wearable sensor data using deep time series models, application of structured prediction, domain adaptation, and active learning to problems in mobile health. The researchers have gone on to work at various companies such as Facebook AI Research, Google, IBM Research, Amazon, and Philips Research North America.",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]}
  const [messages, setMessages] = useState(null);

  function SetMessage(childMessage: any){
    setMessages(childMessage);
  }

  console.log(typeof messages);

  return (
    <div className="flex w-screen h-screen p-3 bg-cyan-100">
      <div className="basis-3/4 bg-white rounded-lg mr-3 relative">
        <GraphView graphData = {messages}></GraphView>
        <Link
          key = 'graph2'
          href = '/graph'
          className = "absolute top-3 right-3 h-[30px] w-[30px]"
        >
          <ArrowsUpDownIcon className="text-gray-500 hover:text-gray-400 cursor-pointer"/>
        </Link>
        <p className="absolute bottom-3 right-4 text-gray-500 text-xl">
          Graph 1
        </p>
      </div>
      <ChatBox sendToParent={SetMessage}/>
    </div>
  );
}
