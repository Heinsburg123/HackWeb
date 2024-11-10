"use server";

export async function handleSendMessage(formData: FormData) {
    const prompt = formData.get("prompt");

    const responseMessage = `Your question is: ${prompt}`;

    return responseMessage;
}

// export async function fetchGraphData() {
//     let data = await fetch("https://7648-128-119-202-11.ngrok-free.app/")
//     let posts = await data.json()

//     return posts
// }

export async function fetchGraphData(formData: FormData) {
    // let data = await fetch("https://a211-128-119-202-9.ngrok-free.app/research/", {
    //     method: "POST",
    //     body: formData,
    // });
    // let posts = await data.json();
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    let posts = {
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
    return posts;
}
