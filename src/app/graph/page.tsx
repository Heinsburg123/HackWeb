import ChatBox from "../ui/chatbox";
import GraphView from "../components/Graph";
import { fetchGraphData } from "../lib/actions";
import Link from "next/link";
import { ArrowsUpDownIcon } from "@heroicons/react/24/solid";

export default async function Page() {
  const graphData = {
    "adj": [
        [
            1,
            2,
            3, 
            6
        ],
        [4],
        [5],
        [],
        [6],
        [6],
        [
        ]
    ],
    "header": [
        "node0",
        "node1",
        "node2",
        "node3",
        "node4",
        "node5",
        "node6"
    ]
}

  return (
    <div className="flex w-screen h-screen p-3 bg-cyan-100">
      <div className="basis-3/4 bg-white rounded-lg mr-3 relative">
        <GraphView graphData = {graphData}></GraphView>
        <Link
          key = 'graph2'
          href = '/'
          className = "absolute top-3 right-3 h-[30px] w-[30px]"
        >
          <ArrowsUpDownIcon className="text-gray-500 hover:text-gray-400 cursor-pointer"/>
        </Link>
        <p className="absolute bottom-3 right-4 text-gray-500 text-xl">
          Graph 2
        </p>
      </div>
      <ChatBox />
    </div>
  );
}