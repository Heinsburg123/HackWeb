"use client"

import React, { useState, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import clsx from 'clsx';
import { ArrowLeftCircleIcon } from '@heroicons/react/24/solid';

const Graph = dynamic(() => import('react-graph-vis'), { ssr: false });

export default function GraphView( {graphData, userPrompt} ) {
    var [vis, setVis] = useState([]);

    var data = graphData;
    var rAdj = [], Level = [];


    function dfs(u) {
        if (Level[u] != -1) return;
        for(var i = 0; i < rAdj[u].length; ++i) {
            var v = rAdj[u][i]; 
            dfs(v);
            Level[u] = Math.max(Level[u], Level[v]); 
        }
        Level[u] ++;
    }

    function createGraph() {
        let graph = {};
        graph.nodes = [];
        graph.edges = [];

        if (data == null || data.header == null) return graph;

        for(var i = 0; i < data.header.length; ++i) {
            rAdj[i] = []; 
            Level[i] = -1; 
        }

        for(var i = 0; i < data.adj.length; ++i) {
            for(var j = 0; j < data.adj[i].length; ++j) {
                graph.edges.push({from: i, to: data.adj[i][j], smooth: { type: 'curvedCW', roundness: 0.9 }}); 
                rAdj[data.adj[i][j]].push(i); 
            }
        }

        Level[0] = 0; 
        for(var i = 1; i < data.header.length; ++i) {
            dfs(i);  
        }

        for(var i = 0; i < data.header.length; ++i) {
            graph.nodes.push({id: i, label: data.header[i], level: Level[i], color: {background: (vis[i] ? "#fdff00" : "#ffe599" ),}, widthConstraint: {maximum: 150}, shape: "box"}); 
        }

        console.log(graph);
        
        return graph;        
    }
    
    useEffect(() => {
        setGraph(createGraph());
    }, [graphData]);

    const options = {
        layout: {
            hierarchical: {
                direction: "LR",   // Left-to-right layout
                nodeSpacing: 220,  // Adjust spacing between nodes
                levelSeparation: 220,  // Adjust separation between levels
            },
        },
        interaction: {
            navigationButtons: true,
            zoomSpeed: 0.2,
        },
        edges: {
            color: "#2b78e4",
            width: 3,
        },
        height: "100%",
        nodes: {
            color: {
                 background: "#23596d",
                 border: "#black",
            },
            font: {
                color: "black",
            },
        },
        physics: {
            enabled: false
        }
    };

    const [graph, setGraph] = useState(createGraph());
    const [boxState, setBoxState] = useState("off");
    const [currentNode, setCurrentNode] = useState(null)

    function dfs2(u) {
        vis[u] = 1; 
        if (rAdj[u] != null) {
            for(let v of rAdj[u]) {
                if  (!vis[v]) {
                    dfs2(v); 
                } 
            }
        }
    }

    const events = {
        click: ({ nodes }) => {
            setCurrentNode(nodes)
            setBoxState((prevState) => (nodes[0] === undefined || (prevState === "on" && nodes[0] === currentNode[0]) ? "off" : "on"))

            if (nodes.length != 0) {
                setVis([]); 
                dfs2( nodes[0] ); 
                setGraph( createGraph() );
            }
        },
    };

    const setBoxStateOff = () => {
        setBoxState("off")
    }

    return (
        <div className = "h-full relative">
            <Graph
                key = {Math.random()}
                graph={graph}
                options={options}
                events = {events}
            />
            <div 
                className={clsx(
                    'absolute top-0 left-0 h-full bg-cyan-50 w-1/4 rounded-l-lg px-4 pt-12 pb-4',
                    {
                        'hidden': boxState === "off",
                        'block': boxState === "on"
                    }
                )}
            >
                <div className={clsx(
                    'w-full h-full break-words text-black overflow-y-scroll',
                )}>
                    {data != null && data.info != null ? data.info[currentNode]: ""}
                    <br></br>
                    Related Link: {data != null && data.links != null ? data.links[currentNode]:"" }
                </div>
            </div>
            <ArrowLeftCircleIcon 
                onClick = {setBoxStateOff} 
                className={clsx(
                    'absolute left-2 top-2 h-[30px] w-[30px] text-gray-500 hover:text-gray-400 cursor-pointer',
                    {
                        'hidden': boxState === "off",
                        'block': boxState === "on"
                    }
                )}
            />
        </div>
    );
}
